"use client"

import { useState, useEffect } from "react"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-background transition-shadow duration-200 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-primary sm:text-xl">
            River City Plumbing Co.
          </span>
        </div>
        <Button variant="outline" size="sm" asChild>
          <a href="tel:+12515550148" className="flex items-center gap-2">
            <Phone className="size-4" />
            <span className="hidden sm:inline">(251) 555-0148</span>
            <span className="sm:hidden">Call</span>
          </a>
        </Button>
      </div>
    </header>
  )
}
