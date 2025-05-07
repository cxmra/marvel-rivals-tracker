"use client";

import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query.trim()) {
      router.push(`/player/${encodeURIComponent(query.trim())}`);
    }
  };
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Marvel Rivals Tracker</title>
      </head>
      <body className="flex flex-col bg-yellow-500 h-screen">
        {/* Fixed Navbar */}
        <header className="bg-black text-white px-6 py-3 fixed w-full h-16 z-50">
          <nav className="flex items-center justify-between w-full">
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
            </ul>
            {/* Search Bar - aligned to the right */}
            <input type="text" placeholder="Search by player name" value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={handleKeyDown} className="w-full max-w-xs px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </nav>
        </header>

        {/* Main content starts below header */}
        <main className="mt-16">{children}</main>
      </body>
    </html>
  );
}
