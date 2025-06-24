"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="hidden items-center space-x-2 md:flex">
            <span className="text-xl font-bold tracking-tight">LUXE VENUES</span>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden bg-white text-black border-black">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-xl font-bold tracking-tight">LUXE VENUES</span>
              </Link>
              <div className="my-4 h-[1px] bg-border" />
              <div className="grid gap-2 py-4">
                <Link
                  href="/"
                  className={cn(
                    "flex py-2 text-lg font-medium",
                    pathname === "/" ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  Home
                </Link>
                <Link
                  href="/venues"
                  className={cn(
                    "flex py-2 text-lg font-medium",
                    pathname === "/venues" || pathname.startsWith("/venues/")
                      ? "text-foreground"
                      : "text-muted-foreground",
                  )}
                >
                  Venues
                </Link>
                <Link
                  href="/map"
                  className={cn(
                    "flex py-2 text-lg font-medium",
                    pathname === "/map" ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  Map
                </Link>
                <Link
                  href="/about"
                  className={cn(
                    "flex py-2 text-lg font-medium",
                    pathname === "/about" ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  About
                </Link>
              </div>
            </SheetContent>
          </Sheet>
          <nav className="hidden gap-6 md:flex">
            <Link
              href="/"
              className={cn(
                "text-sm font-medium transition-colors hover:text-foreground/80",
                pathname === "/" ? "text-foreground" : "text-foreground/60",
              )}
            >
              Home
            </Link>
            <Link
              href="/venues"
              className={cn(
                "text-sm font-medium transition-colors hover:text-foreground/80",
                pathname === "/venues" || pathname.startsWith("/venues/") ? "text-foreground" : "text-foreground/60",
              )}
            >
              Venues
            </Link>
            <Link
              href="/map"
              className={cn(
                "text-sm font-medium transition-colors hover:text-foreground/80",
                pathname === "/map" ? "text-foreground" : "text-foreground/60",
              )}
            >
              Map
            </Link>
            <Link
              href="/about"
              className={cn(
                "text-sm font-medium transition-colors hover:text-foreground/80",
                pathname === "/about" ? "text-foreground" : "text-foreground/60",
              )}
            >
              About
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden md:flex">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search venues..."
                className="w-[200px] pl-8 bg-white text-black border-black focus-visible:ring-black"
              />
            </div>
          </div>
          <Button variant="outline" size="icon" className="md:hidden bg-white text-black border-black">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <Button className="hidden md:flex bg-black text-white hover:bg-black/90">List Your Venue</Button>
        </div>
      </div>
    </header>
  )
}
