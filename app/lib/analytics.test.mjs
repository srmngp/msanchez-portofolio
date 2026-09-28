import { test } from "node:test"
import assert from "node:assert/strict"
import {
    CONSENT_KEY,
    readConsent,
    writeConsent,
    applyConsent,
    eventFromClick,
    persistenceConfig,
} from "./analytics.mjs"

function memoryStorage(initial = {}) {
    const data = { ...initial }
    return {
        data,
        getItem: (k) => (k in data ? data[k] : null),
        setItem: (k, v) => { data[k] = String(v) },
        removeItem: (k) => { delete data[k] },
    }
}

const throwingStorage = {
    getItem() { throw new Error("SecurityError") },
    setItem() { throw new Error("SecurityError") },
    removeItem() { throw new Error("SecurityError") },
}

function fakePosthog(persistence = "localStorage+cookie") {
    const calls = []
    return {
        calls,
        get_config: (key) => (key === "persistence" ? persistence : undefined),
        set_config: (c) => calls.push(["set_config", c]),
        startSessionRecording: () => calls.push(["startSessionRecording"]),
        stopSessionRecording: () => calls.push(["stopSessionRecording"]),
        reset: () => calls.push(["reset"]),
    }
}

// Minimal Element stand-in: `closest` walks up `parent` matching by predicate.
function el({ dataset = {}, href, tag = "span", parent = null } = {}) {
    const node = { dataset, href, tag, parent }
    node.closest = (selector) => {
        for (let n = node; n; n = n.parent) {
            if (selector === "[data-ph-event]" && n.dataset.phEvent) return n
            if (selector === "a[href]" && n.tag === "a" && n.href) return n
        }
        return null
    }
    return node
}

const PAGE = "https://msanchez.example/design-projects/berlin-sonar"

test("readConsent returns stored valid values", () => {
    assert.equal(readConsent(memoryStorage({ [CONSENT_KEY]: "granted" })), "granted")
    assert.equal(readConsent(memoryStorage({ [CONSENT_KEY]: "denied" })), "denied")
})

test("readConsent returns null for missing, garbage, null or throwing storage", () => {
    assert.equal(readConsent(memoryStorage()), null)
    assert.equal(readConsent(memoryStorage({ [CONSENT_KEY]: "yes" })), null)
    assert.equal(readConsent(null), null)
    assert.equal(readConsent(throwingStorage), null)
})

test("writeConsent stores, clears, and never throws", () => {
    const s = memoryStorage()
    writeConsent(s, "granted")
    assert.equal(s.data[CONSENT_KEY], "granted")
    writeConsent(s, null)
    assert.equal(CONSENT_KEY in s.data, false)
    assert.doesNotThrow(() => writeConsent(throwingStorage, "denied"))
    assert.doesNotThrow(() => writeConsent(null, "denied"))
})

test("applyConsent granted enables persistence then recording", () => {
    const ph = fakePosthog()
    applyConsent(ph, "granted")
    assert.deepEqual(ph.calls, [
        ["set_config", { persistence: "localStorage+cookie" }],
        ["startSessionRecording"],
    ])
})

test("applyConsent denied stops recording, clears stored ids, goes back to memory", () => {
    const ph = fakePosthog()
    applyConsent(ph, "denied")
    assert.deepEqual(ph.calls, [
        ["stopSessionRecording"],
        ["reset"],
        ["set_config", { persistence: "memory" }],
    ])
})

test("applyConsent denied on a cookieless session only stops recording (keeps identity)", () => {
    const ph = fakePosthog("memory")
    applyConsent(ph, "denied")
    assert.deepEqual(ph.calls, [["stopSessionRecording"]])
})

test("persistenceConfig restores stored identity for granted visitors at init", () => {
    assert.deepEqual(persistenceConfig("granted"), {
        persistence: "localStorage+cookie",
        disable_session_recording: false,
    })
})

test("persistenceConfig is cookieless without recording when denied or undecided", () => {
    const cookieless = { persistence: "memory", disable_session_recording: true }
    assert.deepEqual(persistenceConfig("denied"), cookieless)
    assert.deepEqual(persistenceConfig(null), cookieless)
})

test("applyConsent with no decision does nothing", () => {
    const ph = fakePosthog()
    applyConsent(ph, null)
    assert.deepEqual(ph.calls, [])
})

test("tagged element maps data-ph-* to event props", () => {
    const a = el({ tag: "a", href: "mailto:x@y.z", dataset: { phEvent: "contact_clicked", phChannel: "email" } })
    assert.deepEqual(eventFromClick(a, PAGE), { name: "contact_clicked", props: { channel: "email" } })
})

test("click on nested child resolves to tagged ancestor", () => {
    const button = el({ tag: "button", dataset: { phEvent: "project_nav", phDirection: "next", phFrom: "/xbit" } })
    const img = el({ tag: "img", parent: button })
    assert.deepEqual(eventFromClick(img, PAGE), {
        name: "project_nav",
        props: { direction: "next", from: "/xbit" },
    })
})

test("tag wins over outbound detection", () => {
    const a = el({ tag: "a", href: "https://www.linkedin.com/in/x", dataset: { phEvent: "contact_clicked", phChannel: "linkedin" } })
    assert.equal(eventFromClick(a, PAGE).name, "contact_clicked")
})

test("untagged external link is outbound_clicked with current path as project", () => {
    const a = el({ tag: "a", href: "https://www.figma.com/proto/abc?node-id=1" })
    const text = el({ parent: a })
    assert.deepEqual(eventFromClick(text, PAGE), {
        name: "outbound_clicked",
        props: { url: "https://www.figma.com/proto/abc?node-id=1", project: "/design-projects/berlin-sonar" },
    })
})

test("same-host, relative, mailto and non-link clicks are not outbound", () => {
    assert.equal(eventFromClick(el({ tag: "a", href: "https://msanchez.example/art-production" }), PAGE), null)
    assert.equal(eventFromClick(el({ tag: "a", href: "/2026-07_Maria_Sanchez_Resume.pdf" }), PAGE), null)
    assert.equal(eventFromClick(el({ tag: "a", href: "mailto:x@y.z" }), PAGE), null)
    assert.equal(eventFromClick(el({ tag: "div" }), PAGE), null)
    assert.equal(eventFromClick(null, PAGE), null)
})
