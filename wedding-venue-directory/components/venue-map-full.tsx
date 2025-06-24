"use client"

import { useEffect, useRef } from "react"
import { MapPin } from "lucide-react"

import { venues } from "@/lib/data"

export function VenueMapFull() {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // In a real implementation, this would use a mapping library like Google Maps or Mapbox
    // For this example, we'll just show a placeholder with pins
  }, [])

  return (
    <div ref={mapRef} className="h-full w-full bg-gray-100 flex items-center justify-center">
      <div className="text-center max-w-md">
        <MapPin className="h-8 w-8 mx-auto text-black" />
        <h3 className="text-lg font-medium mt-2">South Florida Wedding Venues</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          This map would display {venues.length} venue locations across South Florida with an actual map API
          integration.
        </p>
        <p className="mt-4 text-xs text-muted-foreground">
          Popular areas: Miami, Fort Lauderdale, Palm Beach, Key West, Boca Raton
        </p>
      </div>
    </div>
  )
}
