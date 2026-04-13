import { Building2, CheckCircle2 } from "lucide-react"

const businessesList = [
  "Home-service businesses",
  "Appointment-based businesses",
  "Businesses with no real website",
  "Businesses relying too heavily on Facebook alone",
  "Businesses with weak or outdated websites"
]

export function ServiceAreaSection() {
  return (
    <section className="bg-secondary px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-primary/10">
          <Building2 className="size-6 text-primary" />
        </div>
        <h2 className="text-xl font-bold text-foreground sm:text-2xl">
          Built for Local Businesses
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          This is for businesses that need a stronger website and a better way to capture and organize customer requests.
        </p>
        <div className="mt-8 flex justify-center">
          <ul className="text-left space-y-3">
            {businessesList.map((item, index) => (
               <li key={index} className="flex items-start gap-2">
                 <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                 <span className="text-foreground">{item}</span>
               </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
