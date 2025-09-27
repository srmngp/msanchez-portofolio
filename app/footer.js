"use client"

import { Mail, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
    return (
        <footer>
            <hr />
            <div className="container mx-auto p-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 place-items-center">

                    <div className="flex space-x-3">
                        <Mail className="w-4 h-4 " />
                        <span className="text-sm">ms.maria.sanchez.molina@gmail.com</span>
                    </div>

                    <div className="flex space-x-3">
                        <Instagram className="w-4 h-4 " />
                        <span className="text-sm">@m.sanchezmolina</span>
                    </div>

                    <div className="flex space-x-3">
                        <Linkedin className="w-4 h-4" />
                        <span className="text-sm">LinkedIn Profile</span>
                    </div>

                    <div className="flex space-x-3">
                        <p className="text-sm2">© 2025 Maria Sanchez Molina</p>
                    </div>

                </div>

            </div>
        </footer>
    )
}
