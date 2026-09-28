'use client'

import { useEffect, useState } from "react"
import { usePostHog } from "posthog-js/react"
import { safeStorage, readConsent, writeConsent, applyConsent, COOKIE_SETTINGS_EVENT } from "../lib/analytics.mjs"

export default function CookieBanner() {
    const posthog = usePostHog()
    const [open, setOpen] = useState(false)

    useEffect(() => {
        setOpen(readConsent(safeStorage()) === null)
        const reopen = () => setOpen(true)
        window.addEventListener(COOKIE_SETTINGS_EVENT, reopen)
        return () => window.removeEventListener(COOKIE_SETTINGS_EVENT, reopen)
    }, [])

    function choose(value) {
        writeConsent(safeStorage(), value)
        setOpen(false)
        applyConsent(posthog, value)
    }

    if (!open) return null

    const button = "flex-1 border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors cursor-pointer"

    return (
        <div
            role="dialog"
            aria-label="Cookie consent"
            className="fixed z-50 bottom-4 inset-x-4 md:left-auto md:right-6 md:max-w-sm bg-white text-black border border-black p-4 text-sm shadow-lg"
        >
            <p className="mb-3">
                I use analytics cookies to understand how visitors use this portfolio and improve it.
                If you decline, anonymous usage is still measured without cookies.
            </p>
            <div className="flex gap-3">
                <button type="button" className={button} onClick={() => choose("denied")}>Reject</button>
                <button type="button" className={button} onClick={() => choose("granted")}>Accept</button>
            </div>
        </div>
    )
}
