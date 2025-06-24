import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { venues } from "@/lib/data"

export function FeaturedVenues() {
  // Get first 3 venues for featured section
  const featuredVenues = venues.slice(0, 3)

  return (
    <section className="bg-gray-50 py-12 md:py-24 lg:py-32">
      <div className="container space-y-12">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-medium tracking-tighter sm:text-4xl md:text-5xl">Featured Venues</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Handpicked selections from our exclusive collection
            </p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredVenues.map((venue) => (
            <Card key={venue.id} className="overflow-hidden border-0 shadow-sm">
              <div className="aspect-[4/3] relative">
                <Image
                  src={venue.images[0] || "/placeholder.svg"}
                  alt={venue.name}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity hover:opacity-100">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-medium text-white">{venue.name}</h3>
                    <div className="flex items-center text-white/80">
                      <MapPin className="mr-1 h-4 w-4" />
                      {venue.location}
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-medium">{venue.name}</h3>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="mr-1 h-4 w-4" />
                    {venue.location}
                  </div>
                  <p className="line-clamp-2 text-muted-foreground">{venue.description}</p>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Link href={`/venues/${venue.id}`} className="w-full">
                  <Button variant="outline" className="w-full bg-white text-black border-black hover:bg-gray-100">
                    View Details
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="flex justify-center">
          <Link href="/venues">
            <Button variant="outline" className="bg-white text-black border-black hover:bg-gray-100">
              View All Venues <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
