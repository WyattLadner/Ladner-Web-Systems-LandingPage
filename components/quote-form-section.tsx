"use client"

import { useState } from "react"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"

const services = [
  "Emergency Plumbing",
  "Drain Cleaning",
  "Leak Repair",
  "Water Heater Repair",
  "Fixture Installation",
  "Other",
]

const urgencyLevels = [
  { value: "not-urgent", label: "Not Urgent" },
  { value: "soon", label: "Soon (within a few days)" },
  { value: "urgent", label: "Urgent (as soon as possible)" },
]

export function QuoteFormSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [selectedService, setSelectedService] = useState("")
  const [selectedUrgency, setSelectedUrgency] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section
        id="quote"
        className="bg-background px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
      >
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="size-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Thank You!
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We&apos;ve received your request and will reach out soon.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section
      id="quote"
      className="bg-background px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Request a Free Quote
          </h2>
          <p className="mt-4 text-muted-foreground">
            Fill out the form below and we&apos;ll get back to you as soon as
            possible.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10">
          <FieldGroup>
            <div className="grid gap-6 sm:grid-cols-2">
              <Field>
                <FieldLabel htmlFor="name">Full Name</FieldLabel>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Smith"
                  required
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(251) 555-0000"
                  required
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="email">Email Address</FieldLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="zipcode">Zip Code</FieldLabel>
                <Input
                  id="zipcode"
                  name="zipcode"
                  type="text"
                  placeholder="36601"
                  required
                />
              </Field>
            </div>

            <Field>
              <FieldLabel htmlFor="service">Service Needed</FieldLabel>
              <Select
                value={selectedService}
                onValueChange={setSelectedService}
                required
              >
                <SelectTrigger id="service" className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service} value={service.toLowerCase()}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>

            <Field>
              <FieldLabel htmlFor="urgency">Urgency Level</FieldLabel>
              <Select
                value={selectedUrgency}
                onValueChange={setSelectedUrgency}
                required
              >
                <SelectTrigger id="urgency" className="w-full">
                  <SelectValue placeholder="How urgent is this?" />
                </SelectTrigger>
                <SelectContent>
                  {urgencyLevels.map((level) => (
                    <SelectItem key={level.value} value={level.value}>
                      {level.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>

            <Field>
              <FieldLabel htmlFor="problem">
                Describe the Problem{" "}
                <span className="text-muted-foreground font-normal">
                  (optional)
                </span>
              </FieldLabel>
              <Textarea
                id="problem"
                name="problem"
                placeholder="Tell us about your plumbing issue..."
                rows={4}
              />
            </Field>

            <Field>
              <Label className="mb-2">Preferred Contact Method</Label>
              <RadioGroup
                defaultValue="either"
                name="contact-method"
                className="flex flex-wrap gap-6"
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="phone" id="contact-phone" />
                  <Label htmlFor="contact-phone" className="font-normal">
                    Phone
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="email" id="contact-email" />
                  <Label htmlFor="contact-email" className="font-normal">
                    Email
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="either" id="contact-either" />
                  <Label htmlFor="contact-either" className="font-normal">
                    Either
                  </Label>
                </div>
              </RadioGroup>
            </Field>

            <Button type="submit" size="lg" className="w-full">
              Request My Quote
            </Button>
          </FieldGroup>
        </form>
      </div>
    </section>
  )
}
