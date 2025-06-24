import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SiteFooter() {
  return (
    <footer className="border-t bg-white">
      <div className="container py-12 md:py-16 lg:py-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">LUXE VENUES</h3>
            <p className="text-sm text-muted-foreground">
              Curating South Florida's most exquisite wedding venues for your perfect day.
            </p>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="rounded-full bg-white text-black border-black">
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full bg-white text-black border-black">
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full bg-white text-black border-black">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">EXPLORE</h3>
            <ul className="grid gap-2 text-sm text-muted-foreground">
              <li>
                <Link href="/venues" className="hover:underline">
                  All Venues
                </Link>
              </li>
              <li>
                <Link href="/map" className="hover:underline">
                  Venue Map
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Featured Venues
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  New Listings
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">COMPANY</h3>
            <ul className="grid gap-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  List Your Venue
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">NEWSLETTER</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to receive updates on new venues and exclusive offers.
            </p>
            <div className="flex gap-2">
              <Input placeholder="Email address" className="bg-white text-black border-black" />
              <Button className="bg-black text-white hover:bg-black/90">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Luxe Venues. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
