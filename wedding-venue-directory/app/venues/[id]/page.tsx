import Link from "next/link"
import { ArrowLeft, Calendar, Heart, MapPin, Share2, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { VenueGallery } from "@/components/venue-gallery"
import { VenueMap } from "@/components/venue-map"
import { venues } from "@/lib/data"

export default function VenuePage({ params }: { params: { id: string } }) {
  const venue = venues.find((v) => v.id === params.id) || venues[0]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container py-6">
          <Link href="/venues" className="inline-flex items-center text-sm font-medium">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to venues
          </Link>
        </div>
        <VenueGallery images={venue.images} />
        <div className="container py-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
            <div>
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-3xl font-medium">{venue.name}</h1>
                  <div className="mt-2 flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{venue.location}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="icon" variant="outline" className="rounded-full bg-white text-black border-black">
                    <Heart className="h-4 w-4" />
                    <span className="sr-only">Add to favorites</span>
                  </Button>
                  <Button size="icon" variant="outline" className="rounded-full bg-white text-black border-black">
                    <Share2 className="h-4 w-4" />
                    <span className="sr-only">Share</span>
                  </Button>
                </div>
              </div>
              <Separator className="my-6" />
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-medium">About</h2>
                  <p className="mt-2 text-muted-foreground">{venue.description}</p>
                </div>
                <div>
                  <h2 className="text-xl font-medium">Amenities</h2>
                  <ul className="mt-2 grid grid-cols-2 gap-2 text-muted-foreground sm:grid-cols-3">
                    {venue.amenities.map((amenity) => (
                      <li key={amenity} className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-black" />
                        {amenity}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-xl font-medium">Location</h2>
                  <div className="mt-2 h-[300px] overflow-hidden rounded-xl">
                    <VenueMap location={venue.coordinates} />
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-xl border p-6">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-2xl font-medium">${venue.priceRange[0].toLocaleString()}</span>
                    <span className="text-muted-foreground"> - ${venue.priceRange[1].toLocaleString()}</span>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="space-y-4">
                  <Button className="w-full bg-black text-white hover:bg-black/90">Request Information</Button>
                  <Button variant="outline" className="w-full bg-white text-black border-black hover:bg-gray-100">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule a Tour
                  </Button>
                </div>
                <div className="mt-4 text-center text-xs text-muted-foreground">
                  No booking fees. Free cancellation.
                </div>
              </div>
              <div className="rounded-xl border p-6">
                <h3 className="font-medium">Capacity</h3>
                <div className="mt-2 grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-muted-foreground">Seated</div>
                    <div className="font-medium">{venue.capacity.seated} guests</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Standing</div>
                    <div className="font-medium">{venue.capacity.standing} guests</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
