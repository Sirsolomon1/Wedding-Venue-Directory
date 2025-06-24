import { VenueFilters } from "@/components/venue-filters"
import { VenueGrid } from "@/components/venue-grid-enhanced"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function VenuesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container py-6 md:py-12">
          <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between">
            <div>
              <h1 className="text-3xl font-medium tracking-tight">Wedding Venues</h1>
              <p className="text-muted-foreground">Discover the perfect setting for your special day</p>
            </div>
          </div>
        </section>
        <section className="container pb-12 md:pb-24">
          <div className="grid gap-8 md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr]">
            <VenueFilters />
            <VenueGrid />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
