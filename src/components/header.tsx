"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Gallery", href: "/gallery" },
  { name: "Exhibitions", href: "/exhibitions" },
  { name: "Artists", href: "/artists" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const pathname = usePathname()
  const [hoveredPath, setHoveredPath] = useState(pathname)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <Image
                src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=100&auto=format&fit=crop"
                alt="Artistry Gallery Logo"
                width={40}
                height={40}
                className="mr-2 rounded-full"
              />
              <span className="font-serif text-2xl font-bold tracking-tight">ARTISTRY</span>
            </motion.div>
          </Link>
          <nav className="hidden gap-6 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative flex items-center text-sm font-medium transition-colors hover:text-foreground/80"
                onMouseOver={() => setHoveredPath(item.href)}
                onMouseLeave={() => setHoveredPath(pathname)}
              >
                <span>{item.name}</span>
                {(hoveredPath === item.href || pathname === item.href) && (
                  <motion.span
                    layoutId="navbar-indicator"
                    className="absolute -bottom-[1px] left-0 h-[2px] w-full bg-foreground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost" size="sm" className="hidden md:flex">
            <span>Sign In</span>
          </Button>
          <Button size="sm" className="hidden md:flex">
            <span>Contact Gallery</span>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 py-6">
                <Link href="/" className="flex items-center space-x-2">
                  <span className="font-serif text-2xl font-bold tracking-tight">ARTISTRY</span>
                </Link>
                <nav className="flex flex-col gap-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`text-lg font-medium ${
                        pathname === item.href ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
                <div className="flex flex-col gap-2">
                  <Button variant="outline" className="w-full">
                    <span>Sign In</span>
                  </Button>
                  <Button className="w-full">
                    <span>Contact Gallery</span>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
