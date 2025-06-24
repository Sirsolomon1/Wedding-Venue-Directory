"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface VenueGalleryProps {
  images: string[]
}

export function VenueGallery({ images }: VenueGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="relative">
      <div className="aspect-[2/1] w-full overflow-hidden md:aspect-[3/1]">
        <Image
          src={images[activeIndex] || "/placeholder.svg"}
          alt="Venue image"
          fill
          className="object-cover"
          priority
        />
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-white/80 backdrop-blur-sm border-none"
        onClick={prevImage}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Previous image</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-white/80 backdrop-blur-sm border-none"
        onClick={nextImage}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next image</span>
      </Button>
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={cn("h-2 w-2 rounded-full bg-white/50", activeIndex === index && "bg-white")}
            onClick={() => setActiveIndex(index)}
          >
            <span className="sr-only">View image {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
