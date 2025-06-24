// Mock data for wedding venues
export const venues = [
  {
    id: "vizcaya-museum",
    name: "Vizcaya Museum & Gardens",
    location: "Miami, FL",
    description:
      "A breathtaking Italian Renaissance-style villa and formal gardens overlooking Biscayne Bay. This National Historic Landmark offers a romantic, old-world atmosphere for your special day.",
    priceRange: [15000, 50000],
    capacity: {
      seated: 300,
      standing: 500,
    },
    amenities: ["Gardens", "Waterfront", "Historic", "Indoor & Outdoor", "Bridal Suite", "Valet Parking"],
    coordinates: { lat: 25.7444, lng: -80.2108 },
    images: [
      "/placeholder.svg?height=800&width=1200&text=Vizcaya+Museum+and+Gardens",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
  },
  {
    id: "fisher-island-club",
    name: "Fisher Island Club",
    location: "Fisher Island, FL",
    description:
      "An exclusive private island venue accessible only by ferry or yacht. Offering pristine beaches, Mediterranean-inspired architecture, and unparalleled luxury for your wedding celebration.",
    priceRange: [30000, 75000],
    capacity: {
      seated: 250,
      standing: 400,
    },
    amenities: ["Beachfront", "Luxury", "Private Island", "Accommodation", "Full Service", "Spa"],
    coordinates: { lat: 25.7645, lng: -80.1469 },
    images: [
      "/placeholder.svg?height=800&width=1200&text=Fisher+Island+Club",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
  },
  {
    id: "the-breakers",
    name: "The Breakers Palm Beach",
    location: "Palm Beach, FL",
    description:
      "A legendary oceanfront resort with Italian Renaissance architecture, offering magnificent ballrooms and outdoor spaces with breathtaking views of the Atlantic Ocean.",
    priceRange: [40000, 100000],
    capacity: {
      seated: 500,
      standing: 800,
    },
    amenities: ["Oceanfront", "Luxury", "Historic", "Multiple Venues", "Full Service", "Accommodation"],
    coordinates: { lat: 26.7153, lng: -80.0342 },
    images: [
      "/placeholder.svg?height=800&width=1200&text=The+Breakers+Palm+Beach",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
  },
  {
    id: "ancient-spanish-monastery",
    name: "Ancient Spanish Monastery",
    location: "North Miami Beach, FL",
    description:
      "A 12th-century Spanish monastery with stunning cloisters and gardens. This historic venue offers a unique and romantic setting for ceremonies and receptions.",
    priceRange: [10000, 25000],
    capacity: {
      seated: 150,
      standing: 250,
    },
    amenities: ["Historic", "Gardens", "Chapel", "Unique", "Outdoor Space"],
    coordinates: { lat: 25.9311, lng: -80.1572 },
    images: [
      "/placeholder.svg?height=800&width=1200&text=Ancient+Spanish+Monastery",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
  },
  {
    id: "biltmore-hotel",
    name: "The Biltmore Hotel",
    location: "Coral Gables, FL",
    description:
      "A National Historic Landmark with Mediterranean architecture, featuring elegant ballrooms, courtyards, and a stunning pool. A timeless venue for sophisticated weddings.",
    priceRange: [20000, 60000],
    capacity: {
      seated: 400,
      standing: 600,
    },
    amenities: ["Historic", "Luxury", "Multiple Venues", "Accommodation", "Golf Course", "Spa"],
    coordinates: { lat: 25.7414, lng: -80.2783 },
    images: [
      "/placeholder.svg?height=800&width=1200&text=The+Biltmore+Hotel",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
  },
  {
    id: "ocean-reef-club",
    name: "Ocean Reef Club",
    location: "Key Largo, FL",
    description:
      "A private club offering multiple waterfront venues, from intimate garden settings to grand ballrooms. Perfect for destination weddings with luxury accommodations.",
    priceRange: [25000, 70000],
    capacity: {
      seated: 350,
      standing: 500,
    },
    amenities: ["Waterfront", "Private Club", "Multiple Venues", "Accommodation", "Marina", "Golf Course"],
    coordinates: { lat: 25.3069, lng: -80.2756 },
    images: [
      "/placeholder.svg?height=800&width=1200&text=Ocean+Reef+Club",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
  },
  {
    id: "fontainebleau",
    name: "Fontainebleau Miami Beach",
    location: "Miami Beach, FL",
    description:
      "An iconic oceanfront resort with modern luxury and vintage glamour. Offering spectacular ballrooms and outdoor spaces with views of the Atlantic Ocean.",
    priceRange: [30000, 80000],
    capacity: {
      seated: 450,
      standing: 700,
    },
    amenities: ["Oceanfront", "Luxury", "Multiple Venues", "Accommodation", "Spa", "Nightlife"],
    coordinates: { lat: 25.8182, lng: -80.1223 },
    images: [
      "/placeholder.svg?height=800&width=1200&text=Fontainebleau+Miami+Beach",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
  },
  {
    id: "villa-woodbine",
    name: "Villa Woodbine",
    location: "Coconut Grove, FL",
    description:
      "A historic Mediterranean Revival mansion with lush gardens and elegant interiors. This intimate venue offers exclusivity and old-world charm for your wedding day.",
    priceRange: [12000, 30000],
    capacity: {
      seated: 200,
      standing: 300,
    },
    amenities: ["Historic", "Gardens", "Exclusive Use", "Mansion", "Outdoor Space"],
    coordinates: { lat: 25.7273, lng: -80.2421 },
    images: [
      "/placeholder.svg?height=800&width=1200&text=Villa+Woodbine",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
  },
]
