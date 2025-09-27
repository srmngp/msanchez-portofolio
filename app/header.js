"use client"

import Link from "next/link"
import { usePathname } from "next/navigation";

function isSelectedStyle(pathname, targetPath) {
    return pathname === targetPath ? "text-green-500" : "";
}

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="w-full mb-6">
            <nav className="px-6 py-4 border-b dark:background-gray-900">
                <ul className="flex justify-between text-xl">
                    <li>
                        <Link href="/resume" className={`transition-colors ${isSelectedStyle(pathname, "/resume")}`}>
                            Resume
                        </Link>
                    </li>
                    <div className="flex space-x-8">
                        <li>
                            <Link href="/" className={`transition-colors ${isSelectedStyle(pathname, "/")}`}>
                                Design Projects
                            </Link>
                        </li>
                        <li>
                            <Link href="/art-production" className={`transition-colors ${isSelectedStyle(pathname, "/art-production")}`}>
                                Art Production
                            </Link>
                        </li>
                        <li>
                            <Link href="/personal-data" className={`transition-colors ${isSelectedStyle(pathname, "/personal-data")}`}>
                                Personal Data
                            </Link>
                        </li>
                    </div>
                </ul>
            </nav>
        </header>
    );
}
