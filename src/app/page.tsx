import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-12 px-4 py-16 min-h-[60vh]">
      {/* Hero Text */}
      <div className="max-w-xl space-y-6 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold text-indigo-800 leading-tight drop-shadow-lg">
          Showcase, Sell, and Try Art in 3D
        </h1>
        <p className="text-lg md:text-2xl text-gray-700">
          A modern platform for artists, buyers, and sellers. Upload, explore, and visualize art on your own wall in 3D.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Link href="/gallery" className="px-6 py-3 rounded-lg bg-indigo-700 text-white font-semibold text-lg shadow hover:bg-indigo-800 transition">
            Explore Gallery
          </Link>
          <Link href="/upload" className="px-6 py-3 rounded-lg border border-indigo-700 text-indigo-700 font-semibold text-lg hover:bg-indigo-50 transition">
            Upload Art
          </Link>
        </div>
      </div>
      {/* 3D Hero Visual */}
      <div className="w-full max-w-md flex items-center justify-center">
        <div className="relative w-72 h-72 md:w-96 md:h-96">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-400 via-blue-300 to-indigo-200 blur-2xl opacity-60 animate-pulse" />
          <svg className="relative z-10 w-full h-full" viewBox="0 0 300 300" fill="none">
            <ellipse cx="150" cy="150" rx="120" ry="60" fill="#6366f1" opacity="0.2" />
            <rect x="60" y="80" width="180" height="120" rx="32" fill="#6366f1" className="animate-[bounce_2s_infinite]" />
            <ellipse cx="150" cy="150" rx="60" ry="120" fill="#818cf8" opacity="0.3" />
            <text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="2rem" fontWeight="bold">3D Art</text>
          </svg>
        </div>
      </div>
    </section>
  );
}
