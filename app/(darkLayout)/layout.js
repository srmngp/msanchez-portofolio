
import "../globals.css"

import Footer from "../components/footer"
import Header from "../components/header"

export default function DarkLayout({ children }) {

  return (
    <div className="min-h-screen bg-dark text-white" style={{ colorScheme: "dark" }}>
      <div className="mx-4 md:mx-12">

        <Header />

        <main>{children}</main>

        <Footer />
        
      </div>
    </div>
  )
}
