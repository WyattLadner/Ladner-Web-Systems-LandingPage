import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="absolute top-[0%] left-[20%] -z-10 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px] mix-blend-screen animate-orb-float" />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p className="mb-3 text-sm font-medium tracking-wide text-primary">
          Built for local businesses
        </p>
        <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Web systems that help local businesses capture more leads
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Ladner Web Systems builds websites, quote request systems, and appointment-request workflows for local businesses that need a stronger online presence and a better way to handle incoming customer requests.
        </p>
        <div className="mt-8 flex justify-center">
          <Button size="lg" asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
