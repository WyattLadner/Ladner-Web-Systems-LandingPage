import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="bg-background px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-3 text-sm font-medium tracking-wide text-primary">
          Serving Mobile, AL and surrounding areas
        </p>
        <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Fast, Reliable Plumbing Help When You Need It
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          From leaks and clogged drains to water heater issues, River City
          Plumbing Co. helps homeowners get the job done quickly with clear
          communication and dependable service.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Most calls answered within 30 minutes. Same-day service available.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <a href="#quote">Request a Quote</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="tel:+12515550148" className="flex items-center gap-2">
              <Phone className="size-4" />
              Call Now: (251) 555-0148
            </a>
          </Button>
        </div>
    </section>
  )
}
