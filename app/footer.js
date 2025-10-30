export default function Footer() {
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

                <div className="flex space-x-3 pt-8 justify-center">
                    <p className="text-sm2">© 2025 Maria Sanchez Molina</p>
                </div>

            </div>
        </footer>
    )
}
