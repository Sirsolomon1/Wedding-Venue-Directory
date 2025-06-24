import Link from "next/link"
import Image from "next/image"
import { Heart, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { venues } from "@/lib/data"

export function VenueGrid() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Showing <span className="font-medium text-foreground">{venues.length}</span> venues
        </div>
        <div className="flex items-center gap-2">
          <select className="rounded-md border border-input bg-white px-3 py-1 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="capacity">Capacity</option>
          </select>
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {venues.map((venue) => (
          <Card key={venue.id} className="overflow-hidden border-0 shadow-sm">
            <div className="aspect-[4/3] relative">
              <Image src={venue.images[0] || "/placeholder.svg"} alt={venue.name} fill className="object-cover" />
              <Button
                variant="outline"
                size="icon"
                className="absolute right-2 top-2 h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm border-none"
              >
                <Heart className="h-4 w-4" />
                <span className="sr-only">Add to favorites</span>
              </Button>
            </div>
            <CardContent className="p-6">
              <div className="space-y-2">
                <h3 className="text-xl font-medium">{venue.name}</h3>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="mr-1 h-4 w-4" />
                  {venue.location}
                </div>
                <p className="line-clamp-2 text-muted-foreground">{venue.description}</p>
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-lg font-medium">${venue.priceRange[0].toLocaleString()}</span>
                    <span className="text-muted-foreground"> - ${venue.priceRange[1].toLocaleString()}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">Up to {venue.capacity.seated} guests</div>
                </div>
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
    </div>
  )
}
