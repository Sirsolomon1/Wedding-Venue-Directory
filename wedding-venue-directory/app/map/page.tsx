import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { VenueMapFull } from "@/components/venue-map-full"

export default function MapPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container py-6 md:py-12">
          <div className="flex flex-col items-start gap-4">
            <div>
              <h1 className="text-3xl font-medium tracking-tight">Venue Map</h1>
              <p className="text-muted-foreground">Explore wedding venues across South Florida</p>
            </div>
          </div>
        </section>
        <section className="container pb-12 md:pb-24">
          <div className="h-[600px] w-full overflow-hidden rounded-xl border">
            <VenueMapFull />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
