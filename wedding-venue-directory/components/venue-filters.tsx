"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export function VenueFilters() {
  const [priceRange, setPriceRange] = useState([5000, 50000])
  const [capacity, setCapacity] = useState([50, 500])

  return (
    <div className="space-y-6">
      <div>
        <h3 className="mb-4 text-lg font-medium">Filters</h3>
        <Button className="w-full bg-black text-white hover:bg-black/90">Apply Filters</Button>
      </div>

      <Collapsible defaultOpen className="space-y-4">
        <CollapsibleTrigger className="flex w-full items-center justify-between py-2 text-sm font-medium">
          Price Range
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="w-[120px]">
              <Label htmlFor="price-min">Min</Label>
              <Input
                id="price-min"
                type="number"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([Number.parseInt(e.target.value), priceRange[1]])}
                className="bg-white text-black border-black"
              />
            </div>
            <span className="text-muted-foreground">to</span>
            <div className="w-[120px]">
              <Label htmlFor="price-max">Max</Label>
              <Input
                id="price-max"
                type="number"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
                className="bg-white text-black border-black"
              />
            </div>
          </div>
          <Slider
            value={priceRange}
            min={1000}
            max={100000}
            step={1000}
            onValueChange={setPriceRange}
            className="py-4"
          />
        </CollapsibleContent>
      </Collapsible>

      <Collapsible defaultOpen className="space-y-4">
        <CollapsibleTrigger className="flex w-full items-center justify-between py-2 text-sm font-medium">
          Capacity
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="w-[120px]">
              <Label htmlFor="capacity-min">Min</Label>
              <Input
                id="capacity-min"
                type="number"
                value={capacity[0]}
                onChange={(e) => setCapacity([Number.parseInt(e.target.value), capacity[1]])}
                className="bg-white text-black border-black"
              />
            </div>
            <span className="text-muted-foreground">to</span>
            <div className="w-[120px]">
              <Label htmlFor="capacity-max">Max</Label>
              <Input
                id="capacity-max"
                type="number"
                value={capacity[1]}
                onChange={(e) => setCapacity([capacity[0], Number.parseInt(e.target.value)])}
                className="bg-white text-black border-black"
              />
            </div>
          </div>
          <Slider value={capacity} min={10} max={1000} step={10} onValueChange={setCapacity} className="py-4" />
        </CollapsibleContent>
      </Collapsible>

      <Collapsible defaultOpen className="space-y-4">
        <CollapsibleTrigger className="flex w-full items-center justify-between py-2 text-sm font-medium">
          Venue Type
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-2">
          {["Beach", "Garden", "Ballroom", "Estate", "Rooftop", "Yacht", "Historic", "Winery"].map((type) => (
            <div key={type} className="flex items-center space-x-2">
              <Checkbox id={`type-${type.toLowerCase()}`} />
              <Label htmlFor={`type-${type.toLowerCase()}`} className="text-sm font-normal">
                {type}
              </Label>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>

      <Collapsible defaultOpen className="space-y-4">
        <CollapsibleTrigger className="flex w-full items-center justify-between py-2 text-sm font-medium">
          Amenities
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-2">
          {[
            "Catering",
            "Parking",
            "Outdoor Space",
            "Bridal Suite",
            "AV Equipment",
            "Wheelchair Access",
            "Pet Friendly",
            "Accommodation",
          ].map((amenity) => (
            <div key={amenity} className="flex items-center space-x-2">
              <Checkbox id={`amenity-${amenity.toLowerCase().replace(/\s+/g, "-")}`} />
              <Label htmlFor={`amenity-${amenity.toLowerCase().replace(/\s+/g, "-")}`} className="text-sm font-normal">
                {amenity}
              </Label>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>

      <Collapsible defaultOpen className="space-y-4">
        <CollapsibleTrigger className="flex w-full items-center justify-between py-2 text-sm font-medium">
          Location
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-2">
          {[
            "Miami",
            "Fort Lauderdale",
            "Palm Beach",
            "Key West",
            "Boca Raton",
            "Naples",
            "Coral Gables",
            "Miami Beach",
          ].map((location) => (
            <div key={location} className="flex items-center space-x-2">
              <Checkbox id={`location-${location.toLowerCase().replace(/\s+/g, "-")}`} />
              <Label
                htmlFor={`location-${location.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm font-normal"
              >
                {location}
              </Label>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}
