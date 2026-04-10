import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { TrustSection } from "@/components/trust-section"
import { ServiceAreaSection } from "@/components/service-area-section"
import { QuoteFormSection } from "@/components/quote-form-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <TrustSection />
        <ServiceAreaSection />
        <QuoteFormSection />
      </main>
      <Footer />
    </div>
  )
}
