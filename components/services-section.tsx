import {
  Monitor,
  ClipboardList,
  Calendar,
  Inbox,
  Route,
  CalendarDays,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    title: "Lead-Capture Forms",
    description: "Clear forms designed to turn visitors into real customer requests.",
    icon: Inbox,
  },
  {
    title: "Websites for Local Businesses",
    description: "Clean, professional websites built to support real business growth.",
    icon: Monitor,
  },
  {
    title: "Quote Request Systems",
    description: "Make it easier for prospects to request work and take the next step.",
    icon: ClipboardList,
  },
  {
    title: "Appointment Request Systems",
    description: "Give customers a simple way to request appointments and connect faster.",
    icon: Calendar,
  },
  {
    title: "Follow-Up and Intake Workflows",
    description: "Organize incoming requests and make follow-up easier.",
    icon: Route,
  },
  {
    title: "Calendar and Booking Workflows",
    description: "Connect request flows to practical scheduling and calendar systems.",
    icon: CalendarDays,
  },
]

export function ServicesSection() {
  return (
    <section className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-6xl relative z-10">
        <h2 className="text-center text-2xl font-bold text-foreground sm:text-3xl">
          What Ladner Web Systems Builds
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group bg-card border border-border/40 transition-all hover:bg-card/80 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            >
              <CardHeader className="pb-2">
                <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
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
