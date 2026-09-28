import "./globals.css";
import PostHogProvider from "./components/PostHogProvider";

export const metadata = {
  title: "María Sánchez - Art & Design",
  description: "Personal portfolio",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className="antialiased ">
        <PostHogProvider>
          <div className="min-h-screen">
            <main>
              {children}
            </main>
          </div>
        </PostHogProvider>
      </body>
    </html>
  );
}
