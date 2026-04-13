import { Button } from "@/components/ui/button"

export function QuoteFormSection() {
  return (
    <section
      id="contact"
      className="bg-background px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
          Need a Better Website or Lead System for Your Business?
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Get in touch to start a project or request a demo.
        </p>
        
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <a href="mailto:hello@ladnerwebsystems.com">Get in Touch</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a id="demo" href="mailto:hello@ladnerwebsystems.com?subject=Demo%20Request">Request a Demo</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
