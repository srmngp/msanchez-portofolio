
import "../globals.css";

import Header from "../header";
import Footer from "../footer";

export default function LightLayout({ children }) {

  return (
    <div className="bg-white text-black">
      <div className="mx-4 md:mx-12">
        <Header />

        <main>{children}</main>

        <Footer />
      </div>
    </div>
  );
}
