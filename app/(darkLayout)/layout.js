
import "../globals.css";

import Footer from "../footer";
import Header from "../header";

export default function DarkLayout({ children }) {
  return (
    <div className="bg-dark text-white">
      <div className="mx-4 md:mx-12">

        <Header />

        <main>{children}</main>

        <Footer />
        
      </div>
    </div>
  );
}
