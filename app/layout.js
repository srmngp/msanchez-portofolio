
import "./globals.css";

export const metadata = {
  title: "María Sánchez - Art & Design",
  description: "Personal portfolio",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className="antialiased ">
        <div className="min-h-screen">
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
