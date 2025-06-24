import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920&text=Luxury+South+Florida+Wedding+Venues')] bg-cover bg-center bg-no-repeat brightness-[0.7]" />
      <div className="container relative flex min-h-[600px] flex-col items-center justify-center py-12 text-center md:min-h-[700px] md:py-24 lg:min-h-[800px] lg:py-32">
        <div className="mx-auto max-w-[800px] space-y-6 text-white">
          <h1 className="text-4xl font-medium tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Discover Your Perfect Wedding Venue
          </h1>
          <p className="mx-auto max-w-[600px] text-lg md:text-xl">
            Curated selection of South Florida's most exquisite wedding venues
          </p>
          <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center">
            <Link href="/venues">
              <Button size="lg" className="bg-white text-black hover:bg-white/90">
                Explore Venues <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/map">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View Map
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
