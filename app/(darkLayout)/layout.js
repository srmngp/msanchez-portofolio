
import "../globals.css";

import Footer from "../footer";
import Header from "../header";

export default function DefaultLayout({ children }) {
  return (
    <div className="bg-dark text-white">
      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  );
}
