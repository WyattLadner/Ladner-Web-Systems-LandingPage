# KICKSTART_IMPLEMENTATION.md

## River City Plumbing Co. - Landing Page Implementation Plan

---

## Project Overview

Build a clean, modern, mobile-first landing page for **River City Plumbing Co.**, a fictional home-service business. The page is designed to convert visitors into leads through a primary "Request a Quote" CTA and secondary "Call Now" CTA.

---

## Business Details

| Field | Value |
|-------|-------|
| Business Name | River City Plumbing Co. |
| Service Area | Mobile, Alabama and surrounding areas |
| Target Customers | Homeowners and small property owners |
| Phone | (251) 555-0148 |
| Email | help@rivercityplumbingco.com |

### Core Services
1. Emergency Plumbing
2. Drain Cleaning
3. Leak Repair
4. Water Heater Repair
5. Fixture Installation

---

## Design System

### Color Palette
| Token | Color | Usage |
|-------|-------|-------|
| Primary | Navy Blue (`#1e3a5f`) | CTAs, headers, accents |
| Background | White (`#ffffff`) | Page background |
| Secondary BG | Light Gray (`#f5f7fa`) | Alternating sections |
| Text Primary | Near-black (`#1a1a1a`) | Body text |
| Text Secondary | Dark Gray (`#4a5568`) | Subheadings, descriptions |
| Accent | Lighter Blue (`#3b82f6`) | Hover states, links |

### Typography
- **Font Family**: System sans-serif stack (clean, fast-loading)
- **Headings**: Bold weight, larger sizes
- **Body**: Regular weight, comfortable reading size
- **No custom fonts required**

### Layout Principles
- Mobile-first responsive design
- Flexbox for most layouts
- CSS Grid for service cards
- Standard breakpoints: `sm:640px`, `md:768px`, `lg:1024px`, `xl:1280px`

---

## Page Structure & Components

### 1. Header Component
**File**: `components/header.tsx`

- Sticky header (subtle, not distracting)
- Business name as text on the left (no logo image)
- "Call Now" button on the right (`tel:` link)
- Visually secondary styling for Call Now button
- Clean white background with subtle shadow on scroll

### 2. Hero Section
**File**: `components/hero-section.tsx`

- **Headline**: "Fast, Reliable Plumbing Help in Mobile, AL"
- **Subheadline**: "From leaks and clogged drains to water heater issues, River City Plumbing Co. helps homeowners get the job done quickly with clear communication and dependable service."
- **Primary CTA**: "Request a Quote" button (prominent, navy blue)
- **Secondary CTA**: "Call Now" button (`tel:` link, outlined style)
- **Trust line**: Brief text about fast response, local service, dependable work
- Text + CTA focused (no large hero image)
- Strong visual hierarchy

### 3. Services Section
**File**: `components/services-section.tsx`

- Light gray background for contrast
- Section heading: "Our Services"
- Responsive grid of 5 service cards
- Each card includes:
  - Simple icon (Lucide icons)
  - Service name
  - Short practical description
- Clean card styling with subtle shadows

**Service Descriptions**:
| Service | Description |
|---------|-------------|
| Emergency Plumbing | Available when you need us most. We respond quickly to urgent plumbing problems. |
| Drain Cleaning | Slow or clogged drains? We clear blockages and restore proper flow. |
| Leak Repair | From small drips to major leaks, we find and fix the problem fast. |
| Water Heater Repair | No hot water? We diagnose and repair water heater issues promptly. |
| Fixture Installation | Professional installation of faucets, toilets, and other fixtures. |

### 4. Trust/Why Choose Us Section
**File**: `components/trust-section.tsx`

- White background
- Section heading: "Why Choose River City Plumbing"
- Responsive grid of 5 trust points
- Each trust point: icon + short text
- Easy to scan layout

**Trust Points**:
1. Fast Response Times
2. Local & Reliable
3. Clear Communication
4. Quality Workmanship
5. Serving Mobile & Nearby Areas

### 5. Service Area Section
**File**: `components/service-area-section.tsx`

- Light gray background
- Brief text: "Proudly serving Mobile, AL and surrounding areas"
- Simple, minimal section
- No map embed

### 6. Quote Request Section
**File**: `components/quote-form-section.tsx`

- White background with prominent visual treatment
- Section heading: "Request a Free Quote"
- Form fields (all with proper labels and validation):

| Field | Type | Required |
|-------|------|----------|
| Full Name | text | Yes |
| Phone Number | tel | Yes |
| Email Address | email | Yes |
| Service Needed | select dropdown | Yes |
| Describe the Problem | textarea | No |
| Preferred Contact Method | radio (Phone/Email/Either) | Yes |
| Zip Code | text | Yes |
| Urgency Level | select (Not Urgent/Soon/Urgent) | Yes |

- Submit button: "Request My Quote"
- Form is front-end only (no backend logic)
- On submit: Show success message "Thanks — we've received your request and will reach out soon."
- Mobile-optimized form layout

### 7. Footer Section
**File**: `components/footer.tsx`

- Navy blue background with white text
- Business name
- Contact info: Phone (as `tel:` link), Email (as `mailto:` link)
- Final CTA: "Ready to get started? Call us or request a quote today."
- Simple copyright line
- No social links

---

## Component File Structure

```
/app
  page.tsx              # Main landing page (imports all sections)
  layout.tsx            # Root layout with metadata
  globals.css           # Global styles and CSS variables

/components
  header.tsx            # Sticky header
  hero-section.tsx      # Hero with headline and CTAs
  services-section.tsx  # Service cards grid
  trust-section.tsx     # Trust points grid
  service-area-section.tsx  # Service area text
  quote-form-section.tsx    # Quote request form
  footer.tsx            # Footer with contact info
```

---

## Technical Requirements

### Form Behavior
- Client-side validation only
- Standard HTML5 validation (required, email format, tel format)
- On successful submit: Hide form, show success message
- No backend integration yet (prepared for future: email + Google Sheet + customer confirmation)

### Accessibility
- Proper heading hierarchy (h1, h2, h3)
- Form labels associated with inputs
- Good color contrast ratios
- Focus states on interactive elements
- Alt text where images are used
- Semantic HTML elements

### Performance
- No heavy images
- System font stack (no custom font loading)
- Minimal dependencies
- Clean, efficient CSS

### SEO (Basic)
- Proper page title in metadata
- Meta description
- Semantic HTML structure

---

## Implementation Checklist

- [ ] Update `globals.css` with color tokens
- [ ] Update `layout.tsx` with metadata
- [ ] Create `components/header.tsx`
- [ ] Create `components/hero-section.tsx`
- [ ] Create `components/services-section.tsx`
- [ ] Create `components/trust-section.tsx`
- [ ] Create `components/service-area-section.tsx`
- [ ] Create `components/quote-form-section.tsx`
- [ ] Create `components/footer.tsx`
- [ ] Assemble all components in `app/page.tsx`
- [ ] Test responsive behavior (mobile, tablet, desktop)
- [ ] Verify form validation and success state
- [ ] Review accessibility

---

## Out of Scope (For This Build)

- Backend form processing
- Database integration
- Analytics/tracking
- Advanced SEO optimization
- Logo/branding assets
- Map embed
- Social media links
- Blog or additional pages
- Chatbot or booking widgets
- Pricing information

---

## Success Criteria

The final page should:
1. Look like a real, professional local plumbing company website
2. Be fully responsive and mobile-optimized
3. Have clear CTA hierarchy (Request Quote > Call Now)
4. Feel trustworthy and conversion-focused
5. Be easy to edit and extend later
6. Load quickly with no unnecessary bloat
