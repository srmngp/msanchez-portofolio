'use client'

import posthog from "posthog-js"
import { PostHogProvider as PHProvider } from "posthog-js/react"
import { useEffect } from "react"
import { safeStorage, readConsent, applyConsent, eventFromClick } from "../lib/analytics.mjs"

const KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY

export default function PostHogProvider({ children }) {
    useEffect(() => {
        if (!KEY) return

        posthog.init(KEY, {
            api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "/ingest",
            ui_host: "https://eu.posthog.com",
            capture_pageview: "history_change",
            capture_pageleave: true,
            autocapture: true,
            enable_heatmaps: true,
            // Cookieless until the visitor accepts the banner.
            persistence: "memory",
            disable_session_recording: true,
        })
        if (readConsent(safeStorage()) === "granted") applyConsent(posthog, "granted")

        function onClick(e) {
            const event = eventFromClick(e.target, window.location.href)
            if (event) posthog.capture(event.name, event.props)
        }
        // Capture phase: fires before router.push() in footer buttons changes the URL.
        document.addEventListener("click", onClick, true)
        return () => document.removeEventListener("click", onClick, true)
    }, [])

    if (!KEY) return children
    return <PHProvider client={posthog}>{children}</PHProvider>
}
