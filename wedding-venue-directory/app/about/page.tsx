import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container py-12 md:py-24 lg:py-32">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-medium tracking-tighter sm:text-5xl xl:text-6xl/none">
                  About Luxe Venues
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Curating South Florida's most exquisite wedding venues for your perfect day.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/venues">
                  <Button className="bg-black text-white hover:bg-black/90">
                    Explore Venues <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="aspect-square overflow-hidden rounded-xl object-cover">
              <Image
                src="/placeholder.svg?height=800&width=800&text=Luxe+Venues"
                alt="About Luxe Venues"
                width={800}
                height={800}
                className="aspect-square object-cover"
              />
            </div>
          </div>
        </section>
        <section className="bg-gray-50 py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-medium tracking-tighter sm:text-4xl">Our Mission</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    We believe that finding the perfect wedding venue should be an inspiring journey, not a stressful
                    task.
                  </p>
                </div>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-black" />
                    <span>Curate only the most exceptional venues</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-black" />
                    <span>Provide detailed, honest information</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-black" />
                    <span>Offer personalized recommendations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-black" />
                    <span>Simplify the venue selection process</span>
                  </li>
                </ul>
              </div>
              <div className="aspect-square overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=800&width=800&text=Our+Mission"
                  alt="Our Mission"
                  width={800}
                  height={800}
                  className="aspect-square object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="order-2 flex flex-col justify-center space-y-4 lg:order-1">
              <div className="space-y-2">
                <h2 className="text-3xl font-medium tracking-tighter sm:text-4xl">Our Story</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Founded by a team of wedding industry experts and South Florida natives, Luxe Venues was born from a
                  passion for exceptional spaces and memorable celebrations.
                </p>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  After years of helping couples navigate the overwhelming world of wedding planning, we recognized the
                  need for a curated, luxury-focused venue directory that truly showcases the best of South Florida.
                </p>
              </div>
            </div>
            <div className="aspect-square overflow-hidden rounded-xl lg:order-2">
              <Image
                src="/placeholder.svg?height=800&width=800&text=Our+Story"
                alt="Our Story"
                width={800}
                height={800}
                className="aspect-square object-cover"
              />
            </div>
          </div>
        </section>
        <section className="bg-black text-white py-12 md:py-24 lg:py-32">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-medium tracking-tighter sm:text-4xl md:text-5xl">Our Team</h2>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">Meet the experts behind Luxe Venues</p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Alexandra Rivera",
                  role: "Founder & Creative Director",
                  bio: "Former luxury wedding planner with over 10 years of experience in the South Florida wedding industry.",
                },
                {
                  name: "Michael Chen",
                  role: "Venue Relations",
                  bio: "Hospitality expert who personally visits and vets each venue in our collection.",
                },
                {
                  name: "Sophia Johnson",
                  role: "Client Experience",
                  bio: "Wedding industry veteran dedicated to helping couples find their perfect venue match.",
                },
              ].map((member) => (
                <div key={member.name} className="flex flex-col items-center text-center">
                  <div className="mb-4 h-40 w-40 overflow-hidden rounded-full">
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      alt={member.name}
                      width={160}
                      height={160}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-medium">{member.name}</h3>
                  <p className="text-gray-400">{member.role}</p>
                  <p className="mt-2 text-gray-300">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto max-w-3xl space-y-8 text-center">
            <h2 className="text-3xl font-medium tracking-tighter sm:text-4xl md:text-5xl">
              Ready to find your perfect venue?
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Start exploring our curated collection of South Florida's most exquisite wedding venues.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Link href="/venues">
                <Button size="lg" className="bg-black text-white hover:bg-black/90">
                  Browse Venues <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/map">
                <Button size="lg" variant="outline" className="bg-white text-black border-black hover:bg-gray-100">
                  View Map
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
