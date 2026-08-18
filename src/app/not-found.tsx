"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center bg-white px-6 py-24 select-none overflow-hidden">
      {/* Background 404 text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <span className="text-[clamp(10rem,28vw,30rem)] font-black text-gray-100/70 leading-none select-none tracking-tighter">
          404
        </span>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-xl w-full space-y-8">
        <div className="space-y-3">
          <h1 className="text-[clamp(2.2rem,5vw,3.5rem)] font-bold text-gray-900 tracking-tight leading-none">
            Page not found
          </h1>
          <p className="text-[clamp(0.95rem,1.8vw,1.1rem)] text-gray-500 font-medium leading-relaxed">
            Lost, this page is. In another system, it may be.
          </p>
        </div>

        {/* Search bar mockup */}
        <form 
          onSubmit={(e) => e.preventDefault()}
          className="flex items-center gap-2 w-full max-w-md bg-white border border-gray-200 rounded-lg p-1.5 shadow-sm focus-within:ring-2 focus-within:ring-black/10 focus-within:border-black transition-all"
        >
          <div className="flex items-center pl-2 flex-1 gap-2">
            <Search className="size-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-transparent text-sm text-gray-900 focus:outline-none placeholder-gray-400"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-1.5 bg-white border border-gray-200 rounded-md text-xs font-semibold text-gray-900 shadow-sm hover:bg-gray-50 active:scale-[0.98] transition-all cursor-pointer"
          >
            Search
          </button>
        </form>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-4 pt-4">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200/80 active:scale-[0.98] text-sm font-semibold text-gray-900 rounded-lg transition-all cursor-pointer"
          >
            <ArrowLeft className="size-4" />
            Go back
          </button>
          
          <Link
            href="/"
            className="px-6 py-3 bg-black hover:bg-black/90 active:scale-[0.98] text-sm font-semibold text-white rounded-lg transition-all shadow-md"
          >
            Take me home
          </Link>
        </div>
      </div>
    </main>
  );
}
