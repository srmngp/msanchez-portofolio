'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

function isSelectedStyle(pathname, targetPath) {
    if (targetPath === "/") {
        return pathname === "/" || pathname.startsWith("/design-projects") ? "text-green-500" : ""
    }
    return pathname.startsWith(targetPath) ? "text-green-500" : ""
}

export default function Header() {
    const pathname = usePathname()

    return (
        <header className="w-full mb-4 sm:mb-6">
            <nav className="px-4 py-3 sm:px-6 sm:py-4 border-b dark:background-gray-900">
                {/* Desktop layout */}
                <ul className="hidden md:flex justify-between text-xl">
                    <li>
                        <Link href="/resume" className={`hover:text-green-500 transition-colors ${isSelectedStyle(pathname, "/resume")}`}>
                            Resume
                        </Link>
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
                <div className="md:hidden flex flex-col gap-3">
                    <ul className="flex flex-col gap-2 text-sm">
                        <li>
                            <Link href="/resume" className={`text-base hover:text-green-500 transition-colors ${isSelectedStyle(pathname, "/resume")}`}>
                                Resume
                            </Link>
                        </li>
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
                    </ul>
                </div>
            </nav>
        </header>
    )
}
