import Link from "next/link"
import { ArrowRight, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { FeaturedVenues } from "@/components/featured-venues-enhanced"
import { HeroSection } from "@/components/hero-section"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <section className="container py-12 md:py-24 lg:py-32">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-medium tracking-tighter sm:text-4xl md:text-5xl">
                Discover Extraordinary Venues
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Curated selection of South Florida's most exquisite wedding venues
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/venues">
                <Button className="bg-black text-white hover:bg-black/90">
                  Browse All Venues <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/map">
                <Button variant="outline" className="bg-white text-black border-black hover:bg-gray-100">
                  View Map <MapPin className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <FeaturedVenues />
      </main>
      <SiteFooter />
    </div>
  )
}
