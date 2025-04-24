"use client"

import Link from "next/link"
import { ArrowRight, Calendar, Frame, Users } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import FeaturedArtwork from "@/components/featured-artwork"
import { GalleryPreview } from "@/components/gallery-preview"
import { NewsletterForm } from "@/components/newsletter-form"
import { ExhibitionSlider } from "@/components/exhibition-slider"
import { TestimonialCarousel } from "@/components/testimonial-carousel"

const stats = [
  {
    name: "Artworks",
    value: "500+",
    description: "Unique pieces from emerging and established artists",
    icon: Frame,
  },
  {
    name: "Artists",
    value: "100+",
    description: "Talented creators from around the world",
    icon: Users,
  },
  {
    name: "Exhibitions",
    value: "12",
    description: "Annual curated shows featuring diverse styles",
    icon: Calendar,
  },
]

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="relative h-full w-full">
              <Image
                src="https://images.unsplash.com/photo-1577720643272-265f09367456?q=80&w=1920&auto=format&fit=crop"
                alt="Gallery interior"
                fill
                priority
                className="object-cover opacity-10 dark:opacity-5"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background to-background" />
            </div>
          </div>
          <div className="container relative z-10 flex min-h-[90vh] flex-col items-center justify-center px-4 py-24 text-center md:py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="space-y-2"
              >
                <h2 className="text-lg font-medium text-muted-foreground">Welcome to Artistry Gallery</h2>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  Where Art Meets
                  <span className="relative ml-2 inline-block bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                    Innovation
                  </span>
                </h1>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mx-auto max-w-2xl text-xl text-muted-foreground"
              >
                Discover a curated collection of contemporary masterpieces from emerging and established artists around
                the globe.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex flex-col justify-center gap-3 sm:flex-row"
              >
                <Button asChild size="lg" className="text-lg">
                  <Link href="/gallery"><span>Explore Gallery<ArrowRight className="ml-2 h-5 w-5" /></span></Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg">
                  <Link href="/exhibitions"><span>Current Exhibitions</span></Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="container px-4"
            >
              <div className="grid gap-8 rounded-t-3xl bg-muted/50 p-8 backdrop-blur-sm dark:bg-muted/10 md:grid-cols-3">
                {stats.map((stat, index) => (
                  <div key={stat.name} className="relative flex flex-col items-center gap-2 text-center">
                    {index > 0 && <div className="absolute -left-4 top-0 hidden h-full w-px bg-border md:block" />}
                    <stat.icon className="h-6 w-6 text-muted-foreground" />
                    <div className="text-3xl font-bold">{stat.value}</div>
                    <div className="font-medium">{stat.name}</div>
                    <p className="text-sm text-muted-foreground">{stat.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Artwork Section */}
        <section className="py-24">
          <div className="container px-4">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col items-center gap-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Artwork</h2>
                <p className="max-w-[800px] text-lg text-muted-foreground">
                  Experience our most captivating pieces, each telling a unique story through the artist's vision and
                  craftsmanship.
                </p>
              </div>
              <FeaturedArtwork />
            </div>
          </div>
        </section>

        {/* Upcoming Exhibitions Section */}
        <section className="relative overflow-hidden bg-muted/50 py-24 dark:bg-muted/10">
          <div className="container px-4">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col items-center gap-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Upcoming Exhibitions</h2>
                <p className="max-w-[800px] text-lg text-muted-foreground">
                  Mark your calendar for these extraordinary showcases of artistic excellence.
                </p>
              </div>
              <ExhibitionSlider />
            </div>
          </div>
        </section>

        {/* Gallery Preview Section */}
        <section className="py-24">
          <div className="container px-4">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col items-center gap-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Gallery Preview</h2>
                <p className="max-w-[800px] text-lg text-muted-foreground">
                  Explore a selection of our diverse collection, featuring works that challenge and inspire.
                </p>
              </div>
              <GalleryPreview />
              <div className="flex justify-center">
                <Button asChild size="lg" variant="outline">
                  <Link href="/gallery"><span>View Full Gallery</span></Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-muted/50 py-24 dark:bg-muted/10">
          <div className="container px-4">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col items-center gap-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Collectors Say</h2>
                <p className="max-w-[800px] text-lg text-muted-foreground">
                  Hear from art enthusiasts who have experienced our gallery and collection.
                </p>
              </div>
              <TestimonialCarousel />
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-24">
          <div className="container px-4">
            <Card className="bg-muted/50 dark:bg-muted/10">
              <CardContent className="flex flex-col items-center gap-6 p-12 text-center">
                <h2 className="text-2xl font-bold sm:text-3xl">Stay Connected with Artistry</h2>
                <p className="max-w-[600px] text-muted-foreground">
                  Subscribe to our newsletter for exclusive previews, exhibition announcements, and artistic insights.
                </p>
                <div className="w-full max-w-md">
                  <NewsletterForm />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}
