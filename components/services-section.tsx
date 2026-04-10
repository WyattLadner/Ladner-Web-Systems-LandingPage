import {
  Siren,
  Pipette,
  Droplets,
  Flame,
  Wrench,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    title: "Emergency Plumbing",
    description:
      "Available when you need us most. We respond quickly to urgent plumbing problems.",
    icon: Siren,
  },
  {
    title: "Drain Cleaning",
    description:
      "Slow or clogged drains? We clear blockages and restore proper flow.",
    icon: Pipette,
  },
  {
    title: "Leak Repair",
    description:
      "From small drips to major leaks, we find and fix the problem fast.",
    icon: Droplets,
  },
  {
    title: "Water Heater Repair",
    description:
      "No hot water? We diagnose and repair water heater issues promptly.",
    icon: Flame,
  },
  {
    title: "Fixture Installation",
    description:
      "Professional installation of faucets, toilets, and other fixtures.",
    icon: Wrench,
  },
]

export function ServicesSection() {
  return (
    <section className="bg-secondary px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-2xl font-bold text-foreground sm:text-3xl">
          Our Services
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="border-0 bg-background shadow-sm transition-shadow hover:shadow-md"
            >
              <CardHeader className="pb-2">
                <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                  <service.icon className="size-5 text-primary" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
