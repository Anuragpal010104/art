import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <div className="font-serif text-2xl font-bold tracking-tight">ARTISTRY</div>
            <p className="text-sm text-muted-foreground">
              A contemporary art gallery showcasing emerging and established artists from around the world.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-medium">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-muted-foreground hover:text-foreground">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/exhibitions" className="text-muted-foreground hover:text-foreground">
                  Exhibitions
                </Link>
              </li>
              <li>
                <Link href="/artists" className="text-muted-foreground hover:text-foreground">
                  Artists
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-medium">Contact</h3>
            <address className="space-y-2 text-sm not-italic text-muted-foreground">
              <p>123 Gallery Street</p>
              <p>New York, NY 10001</p>
              <p>info@artistrygallery.com</p>
              <p>+1 (212) 555-1234</p>
            </address>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-medium">Connect</h3>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
            <div className="mt-6">
              <h3 className="mb-4 text-sm font-medium">Subscribe</h3>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-md border bg-background px-3 py-2 text-sm"
                  required
                />
                <button
                  type="submit"
                  className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Artistry Gallery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
