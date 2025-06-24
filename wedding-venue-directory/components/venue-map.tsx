"use client"

import { useEffect, useRef } from "react"
import { MapPin } from "lucide-react"

interface VenueMapProps {
  location: { lat: number; lng: number }
}

export function VenueMap({ location }: VenueMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // In a real implementation, this would use a mapping library like Google Maps or Mapbox
    // For this example, we'll just show a placeholder with a pin
  }, [location])

  return (
    <div ref={mapRef} className="h-full w-full bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <MapPin className="h-8 w-8 mx-auto text-black" />
        <p className="mt-2 text-sm">
          Location: {location.lat.toFixed(6)}, {location.lng.toFixed(6)}
        </p>
        <p className="text-xs text-muted-foreground">Map would render here with a real API integration</p>
      </div>
    </div>
  )
}
