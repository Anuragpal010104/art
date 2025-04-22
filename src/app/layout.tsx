import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Art Platform Starter",
  description: "A starter template for an art platform with Next.js and FastAPI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="flex gap-6 p-4 border-b mb-8">
          <Link href="/">Home</Link>
          <Link href="/upload">Upload</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/try-on">Try-on</Link>
        </nav>
        <main className="max-w-4xl mx-auto px-4">{children}</main>
      </body>
    </html>
  );
}
