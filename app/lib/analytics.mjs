// Pure analytics helpers: consent storage, consent -> PostHog config, click -> event.
// Kept framework-free so it runs under `node --test`.

export const CONSENT_KEY = "analytics_consent"
export const COOKIE_SETTINGS_EVENT = "cookie-settings:open"

export function safeStorage() {
    try {
        return typeof window === "undefined" ? null : window.localStorage
    } catch {
        return null
    }
}

export function readConsent(storage) {
    try {
        const value = storage?.getItem(CONSENT_KEY)
        return value === "granted" || value === "denied" ? value : null
    } catch {
        return null
    }
}

export function writeConsent(storage, value) {
    try {
        if (value) storage?.setItem(CONSENT_KEY, value)
        else storage?.removeItem(CONSENT_KEY)
    } catch {
        // Storage blocked: the choice just isn't remembered; banner shows again next visit.
    }
}

export function applyConsent(posthog, consent) {
    if (consent === "granted") {
        posthog.set_config({ persistence: "localStorage+cookie" })
        posthog.startSessionRecording()
    } else if (consent === "denied") {
        // reset() clears PostHog's ph_* cookie/localStorage left over from an earlier "granted".
        posthog.stopSessionRecording()
        posthog.reset()
        posthog.set_config({ persistence: "memory" })
    }
}

export function eventFromClick(target, pageUrl) {
    const tagged = target?.closest?.("[data-ph-event]")
    if (tagged) {
        const props = {}
        for (const [key, value] of Object.entries(tagged.dataset)) {
            // data-ph-channel -> dataset.phChannel -> props.channel
            if (key !== "phEvent" && key.startsWith("ph")) {
                props[key[2].toLowerCase() + key.slice(3)] = value
            }
        }
        return { name: tagged.dataset.phEvent, props }
    }

    const link = target?.closest?.("a[href]")
    if (!link) return null
    const page = new URL(pageUrl)
    const url = new URL(link.href, page)
    if (!/^https?:$/.test(url.protocol) || url.host === page.host) return null
    return { name: "outbound_clicked", props: { url: url.href, project: page.pathname } }
}
