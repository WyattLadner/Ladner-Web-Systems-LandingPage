import { MapPin } from "lucide-react"

export function ServiceAreaSection() {
  return (
    <section className="bg-secondary px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-primary/10">
          <MapPin className="size-6 text-primary" />
        </div>
        <h2 className="text-xl font-bold text-foreground sm:text-2xl">
          Proudly Serving Mobile, AL and Surrounding Areas
        </h2>
        <p className="mt-4 text-muted-foreground">
          We provide professional plumbing services throughout Mobile County
          and nearby communities. Contact us to confirm service availability in
          your area.
        </p>
      </div>
    </section>
  )
}
