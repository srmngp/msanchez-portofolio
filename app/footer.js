"use client";

import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { designProjectRoutes } from "./data/designProjects";

export default function Footer() {
    const pathname = usePathname();
    const router = useRouter();

    // dynamic project routes list
    const projectRoutes = designProjectRoutes;

    const currentIndex = projectRoutes.findIndex((p) => pathname?.startsWith(p));

    function goToIndex(i) {
        if (i >= 0 && i < projectRoutes.length) router.push(projectRoutes[i]);
    }

    function handlePrev() {
        if (projectRoutes.length === 0) return;
        if (currentIndex === -1) {
            // if we're not on a project page, go to the last one
            goToIndex(projectRoutes.length - 1);
            return;
        }
        const prev = (currentIndex - 1 + projectRoutes.length) % projectRoutes.length;
        goToIndex(prev);
    }

    function handleNext() {
        if (projectRoutes.length === 0) return;
        if (currentIndex === -1) {
            // if we're not on a project page, go to the first one
            goToIndex(0);
            return;
        }
        const next = (currentIndex + 1) % projectRoutes.length;
        goToIndex(next);
    }

        // keyboard support: left/right arrows
        // Only register the handler when we're NOT on the home page so arrows don't act on '/'
        useEffect(() => {
            if (pathname === "/") return;

            function onKey(e) {
                if (e.key === "ArrowLeft") handlePrev();
                if (e.key === "ArrowRight") handleNext();
            }
            window.addEventListener("keydown", onKey);
            return () => window.removeEventListener("keydown", onKey);
            // We intentionally don't include handlePrev/handleNext in deps to avoid re-registering too often
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [pathname]);

    return (
        <footer>
            <hr className="my-6" />
            <div className="container mx-auto p-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 place-items-center">

                    <div className="flex space-x-3">
                        <span className="text-sm">ms.maria.sanchez.molina@gmail.com</span>
                    </div>

                    <div className="flex space-x-3">
                        <span className="text-sm">@m.sanchezmolina</span>
                    </div>

                    <div className="flex space-x-3">
                        <span className="text-sm">LinkedIn Profile</span>
                    </div>

                    <div className="flex space-x-3">
                        <span className="text-sm">Berlin, Germany</span>
                    </div>
                </div>

                {/* Arrows to navigate design projects (hidden on home page) */}
                {pathname !== "/" && (
                    <div className="flex items-center justify-center gap-4 pt-8">
                        <button
                            aria-label="Previous design project"
                            onClick={handlePrev}
                            title="Previous"
                            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                            <span className="text-2xl">←</span>
                        </button>

                        <div className="text-center">
                            <p className="text-sm">Navigate design projects</p>
                            <p className="text-xs text-gray-500">
                                {projectRoutes.length === 0 ? "No projects" : currentIndex === -1 ? "All projects" : `${currentIndex + 1} / ${projectRoutes.length}`}
                            </p>
                        </div>

                        <button
                            aria-label="Next design project"
                            onClick={handleNext}
                            title="Next"
                            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                            <span className="text-2xl">→</span>
                        </button>
                    </div>
                )}

                <div className="flex space-x-3 pt-8 justify-center">
                    <p className="text-sm2">© 2025 Maria Sanchez Molina</p>
                </div>

            </div>
        </footer>
    );
}
