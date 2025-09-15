
import "./globals.css";

export const metadata = {
  title: "María Sánchez - Art & Design",
  description: "Personal portfolio",
};

export default function ArtProductionLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased ">
      <div className="min-h-screen">
        <div className="mx-4 md:mx-12">
          <main>{children}</main>
        </div>
      </div>
      </body>
    </html>
  );
}
