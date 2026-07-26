'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

function isSelectedStyle(pathname, targetPath) {
    if (targetPath === "/") {
        return pathname === "/" || pathname.startsWith("/design-projects") ? "text-green-500" : ""
    }
    return pathname.startsWith(targetPath) ? "text-green-500" : ""
}

function currentPageLabel(pathname) {
    if (pathname === "/" || pathname.startsWith("/design-projects")) return "Design Projects"
    if (pathname.startsWith("/art-production")) return "Art Production"
    if (pathname.startsWith("/personal-data")) return "Personal Data"
    return ""
}

export default function Header() {
    const pathname = usePathname()
    const [open, setOpen] = useState(false)

    // Close the dropdown whenever the route changes.
    useEffect(() => setOpen(false), [pathname])

    const currentLabel = currentPageLabel(pathname)

    const navItems = [
        { href: "/", label: "Design Projects", target: "/" },
        { href: "/art-production", label: "Art Production", target: "/art-production" },
        { href: "/personal-data", label: "Personal Data", target: "/personal-data" },
    ]

    return (
        <header className="w-full mb-4 sm:mb-6">
            <nav className="px-3 py-3 sm:px-6 sm:py-4 border-b dark:background-gray-900">
                {/* Desktop layout */}
                <ul className="hidden md:flex justify-between text-xl">
                    <li>
                        <a href="/2026-07_Maria_Sanchez_Resume.pdf" download className="hover:text-green-500 transition-colors">
                            Resume
                        </a>
                    </li>
                    <div className="flex space-x-20 ml-5">
                        <li>
                            <Link href="/" className={`transition-colors hover:text-green-500 ${isSelectedStyle(pathname, "/")}`}>
                                Design Projects
                            </Link>
                        </li>
                        <li>
                            <Link href="/art-production" className={`transition-colors hover:text-green-500 ${isSelectedStyle(pathname, "/art-production")}`}>
                                Art Production
                            </Link>
                        </li>
                        <li>
                            <Link href="/personal-data" className={`transition-colors hover:text-green-500 ${isSelectedStyle(pathname, "/personal-data")}`}>
                                Personal Data
                            </Link>
                        </li>
                    </div>
                </ul>

                {/* Mobile layout */}
                <div className="md:hidden flex items-start justify-between text-base">
                    <a href="/2026-07_Maria_Sanchez_Resume.pdf" download className="hover:text-green-500 transition-colors">
                        Resume
                    </a>

                    <div className="flex flex-col items-end gap-3">
                        <button
                            type="button"
                            onClick={() => setOpen((v) => !v)}
                            aria-expanded={open}
                            aria-label={open ? "Close menu" : "Open menu"}
                            className="flex items-center gap-2 hover:text-green-500 transition-colors"
                        >
                            {currentLabel && <span className="text-green-500">{currentLabel}</span>}
                            {open ? <X size={18} /> : <Menu size={18} />}
                        </button>

                        {open && (
                            <ul className="flex flex-col items-end gap-2 text-right pr-7">
                                {navItems
                                    .filter((item) => item.label !== currentLabel)
                                    .map((item) => (
                                        <li key={item.href}>
                                            <Link href={item.href} className={`transition-colors hover:text-green-500 ${isSelectedStyle(pathname, item.target)}`}>
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                            </ul>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    )
}
