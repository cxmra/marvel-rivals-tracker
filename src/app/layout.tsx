import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marvel Rivals Tracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Marvel Rivals Tracker</title>
      </head>
      <body className="flex flex-col h-screen">
        {/* Fixed Navbar */}
        <header className="bg-black text-white px-6 py-4 fixed w-full h-16 z-50">
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/leaderboard" className="hover:underline">
                  Leaderboard
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Main content starts below header */}
        <main className="mt-16">{children}</main>
      </body>
    </html>
  );
}
