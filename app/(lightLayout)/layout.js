
import "../globals.css";

import Header from "../header";
import Footer from "../footer";

export default function ArtProductionLayout({ children }) {
  return (
    <div className="bg-white text-black">
      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  );
}
