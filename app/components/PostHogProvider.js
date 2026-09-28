'use client'

import posthog from "posthog-js"
import { PostHogProvider as PHProvider } from "posthog-js/react"
import { useEffect } from "react"
import { safeStorage, readConsent, persistenceConfig, eventFromClick } from "../lib/analytics.mjs"
import CookieBanner from "./CookieBanner"

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
            ...persistenceConfig(readConsent(safeStorage())),
        })

        function onClick(e) {
            const event = eventFromClick(e.target, window.location.href)
            if (event) posthog.capture(event.name, event.props)
        }
        // Capture phase: fires before router.push() in footer buttons changes the URL.
        document.addEventListener("click", onClick, true)
        return () => document.removeEventListener("click", onClick, true)
    }, [])

    if (!KEY) return children
    return (
        <PHProvider client={posthog}>
            {children}
            <CookieBanner />
        </PHProvider>
    )
}
