"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setLoggedIn(typeof window !== "undefined" && localStorage.getItem("loggedIn") === "true");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    setLoggedIn(false);
    router.push("/");
  };

  return (
    <header className="w-full border-b bg-white/90 backdrop-blur sticky top-0 z-30 shadow-sm">
      <nav className="max-w-4xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-2xl font-extrabold text-indigo-700 tracking-tight">ArtPlatform</Link>
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400 border border-indigo-100 bg-indigo-50 text-indigo-700"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
        <ul className="hidden md:flex gap-6 text-base font-medium items-center">
          <li><Link href="/upload" className="hover:text-indigo-700 transition">Upload</Link></li>
          <li><Link href="/gallery" className="hover:text-indigo-700 transition">Gallery</Link></li>
          <li><Link href="/try-on" className="hover:text-indigo-700 transition">Try-on</Link></li>
          {loggedIn ? (
            <>
              <li><Link href="/dashboard" className="hover:text-indigo-700 transition">Dashboard</Link></li>
              <li><button onClick={handleLogout} className="ml-2 px-4 py-2 rounded bg-indigo-100 text-indigo-700 hover:bg-indigo-200 transition font-semibold">Logout</button></li>
            </>
          ) : (
            <>
              <li><Link href="/login" className="ml-2 px-4 py-2 rounded bg-indigo-700 text-white hover:bg-indigo-800 transition font-semibold shadow">Login</Link></li>
              <li><Link href="/signup" className="ml-2 px-4 py-2 rounded border border-indigo-700 text-indigo-700 hover:bg-indigo-50 transition font-semibold">Sign Up</Link></li>
            </>
          )}
        </ul>
      </nav>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-2 pt-2 pb-4">
          <ul className="flex flex-col gap-3 bg-white rounded-2xl shadow-xl p-6 border border-indigo-100">
            <li><Link href="/upload" className="block py-2 text-indigo-700 font-medium hover:bg-indigo-50 rounded" onClick={() => setOpen(false)}>Upload</Link></li>
            <li><Link href="/gallery" className="block py-2 text-indigo-700 font-medium hover:bg-indigo-50 rounded" onClick={() => setOpen(false)}>Gallery</Link></li>
            <li><Link href="/try-on" className="block py-2 text-indigo-700 font-medium hover:bg-indigo-50 rounded" onClick={() => setOpen(false)}>Try-on</Link></li>
            {loggedIn ? (
              <>
                <li><Link href="/dashboard" className="block py-2 text-indigo-700 font-medium hover:bg-indigo-50 rounded" onClick={() => setOpen(false)}>Dashboard</Link></li>
                <li><button onClick={() => { handleLogout(); setOpen(false); }} className="block w-full text-left py-2 text-indigo-700 font-medium hover:bg-indigo-100 rounded">Logout</button></li>
              </>
            ) : (
              <>
                <li><Link href="/login" className="block py-2 text-white bg-indigo-700 font-semibold rounded hover:bg-indigo-800 transition shadow" onClick={() => setOpen(false)}>Login</Link></li>
                <li><Link href="/signup" className="block py-2 text-indigo-700 border border-indigo-700 font-semibold rounded hover:bg-indigo-50 transition" onClick={() => setOpen(false)}>Sign Up</Link></li>
              </>
            )}
          </ul>
        </div>
      )}
    </header>
  );
}
