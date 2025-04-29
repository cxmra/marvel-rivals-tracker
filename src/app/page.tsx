"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query.trim()) {
      router.push(`/player/${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div className="h-[calc(100vh-4rem)] flex items-center justify-center bg-green-500">
      <div className="w-full max-w-md px-4">
        <input type="text" placeholder="Search by player name" value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={handleKeyDown} className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
    </div>
  );
}
