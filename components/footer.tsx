import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-zinc-800 px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-xl font-bold sm:text-2xl">
            Ladner Web Systems
          </h2>

          <p className="mt-2 text-primary-foreground/80">
            Web systems that help local businesses capture more leads
          </p>

          <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:gap-8">
            <a
              href="mailto:hello@ladnerwebsystems.com"
              className="flex items-center gap-2 text-primary-foreground/90 transition-colors hover:text-primary-foreground"
            >
              <Mail className="size-4" />
              hello@ladnerwebsystems.com
            </a>
          </div>

          <p className="mt-8 text-primary-foreground/80">
            Ready to get started? Get in touch today.
          </p>

          <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row">
            <Button
              variant="secondary"
              asChild
            >
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              asChild
            >
              <a href="#demo">Request a Demo</a>
            </Button>
          </div>

          <div className="mt-10 border-t border-primary-foreground/20 pt-6">
            <p className="text-sm text-primary-foreground/60">
              &copy; {currentYear} Ladner Web Systems. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
