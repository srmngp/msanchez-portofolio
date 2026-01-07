"use client";

import React, { useEffect } from "react"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { designProjectRoutes } from "../data/designProjects"

export default function Footer() {
    const pathname = usePathname()
    const router = useRouter()

    const projectRoutes = designProjectRoutes;

    const currentIndex = projectRoutes.findIndex((p) => pathname?.startsWith(p))

    function goToIndex(i) {
        if (i >= 0 && i < projectRoutes.length) router.push(projectRoutes[i])
    }

    function handlePrev() {
        if (projectRoutes.length === 0) return
        if (currentIndex === -1) {
            goToIndex(projectRoutes.length - 1)
            return
        }
        const prev = (currentIndex - 1 + projectRoutes.length) % projectRoutes.length;
        goToIndex(prev);
    }

    function handleNext() {
        if (projectRoutes.length === 0) return
        if (currentIndex === -1) {
            goToIndex(0);
            return;
        }
        const next = (currentIndex + 1) % projectRoutes.length;
        goToIndex(next);
    }


    useEffect(() => {
        if (pathname === "/") return

        function onKey(e) {
            if (e.key === "ArrowLeft") handlePrev()
            if (e.key === "ArrowRight") handleNext()
        }
        window.addEventListener("keydown", onKey)
        return () => window.removeEventListener("keydown", onKey)
        // We intentionally don't include handlePrev/handleNext in deps to avoid re-registering too often
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    return (
        <footer>
            <hr className="my-6" />
            <div className="container py-10">

                <div className="w-full grid grid-cols-2 gap-6 items-center md:flex md:items-center md:gap-6">
                    <div className="text-center md:text-left md:flex-none">
                        <a
                            href="mailto:ms.maria.sanchez.molina@gmail.com"
                            className="text-sm hover:text-green-500 transition-colors"
                        >
                            ms.maria.sanchez.molina@gmail.com
                        </a>
                    </div>

                    <div className="text-center md:flex-1 md:min-w-0">
                        <span className="text-sm">@m.sanchezmolina</span>
                    </div>

                    <div className="text-center md:flex-1 md:min-w-0">
                        <a
                            href="https://www.linkedin.com/in/msanchezmolina"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm hover:text-green-500 transition-colors"
                        >
                            LinkedIn Profile
                        </a>
                    </div>

                    <div className="text-center md:text-right md:flex-none">
                        <span className="text-sm">Berlin, Germany</span>
                    </div>
                </div>

                <div className="w-full pt-8 flex items-center justify-between">
                    <div className="flex items-center">
                        {pathname !== "/" && (
                            <button
                                aria-label="Previous design project"
                                onClick={handlePrev}
                                title="Previous"
                                className="p-2 cursor-pointer"
                            >
                                <Image src="/assets/left.png" alt="Previous" width={24} height={24} />
                            </button>
                        )}
                    </div>

                    <div className="flex-1 text-center">
                        <p className="text-sm2">© 2025 Maria Sanchez Molina</p>
                    </div>

                    <div className="flex items-center">
                        {pathname !== "/" && (
                            <button
                                aria-label="Next design project"
                                onClick={handleNext}
                                title="Next"
                                className="p-2 cursor-pointer"
                            >
                                <Image src="/assets/right.png" alt="Next" width={24} height={24} />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </footer>
    );

}
