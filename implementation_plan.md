# Global Leisure Experts LLC — Production-Ready Website

Build a complete, premium, production-ready corporate website for **Global Leisure Experts LLC (GLE)** — a UAE-based industrial inspection, technical testing, consultancy, and trading company.

## User Review Required

> [!IMPORTANT]
> **This is an extremely large build** (~25+ pages, ~80+ files, full design system, animations, forms, SEO, structured data, accessibility). The implementation will be executed in **8 phases** over multiple steps. Please confirm the plan before I begin.

> [!WARNING]
> **No fabricated company data.** All certifications, client names, project details, statistics, and claims will use neutral phrasing or be clearly marked as `SAMPLE`/`DEMO` content per your instructions.

## Open Questions

1. **Hero video/images**: Since no actual company photos or video footage are provided, I'll create CSS-based visual placeholders (dark industrial gradients, SVG patterns, geometric backgrounds) with clear comments for where to swap in real assets. Is this acceptable, or do you want me to generate placeholder images with the AI image tool?

2. **Contact details**: No phone, email, or physical address was supplied. I'll use environment variables (`NEXT_PUBLIC_PHONE`, `NEXT_PUBLIC_EMAIL`) with placeholder values in `.env.example`. Correct?

3. **GSAP**: The spec requests GSAP for advanced scroll animations. GSAP has specific licensing terms for commercial use. I'll use **Framer Motion** for all animations (including scroll-triggered) to avoid licensing complexity, and note where GSAP could be added later. Acceptable?

---

## Proposed Changes

### Phase 1 — Project Scaffolding & Design System

Set up the Next.js project, Tailwind config, global styles, typography, and color system.

#### [NEW] Project initialization
- `npx create-next-app@latest` with TypeScript, Tailwind CSS, App Router, ESLint
- Install dependencies: `framer-motion`, `react-hook-form`, `zod`, `@hookform/resolvers`, `lucide-react`
- Configure `tailwind.config.ts` with GLE brand colors, Manrope font, custom spacing

#### [NEW] [tailwind.config.ts](file:///c:/Users/lenovo/Desktop/GLOBAL/global-leisure-experts/tailwind.config.ts)
- Brand colors: Deep Navy `#071A2B`, Industrial Blue `#0B4F71`, Technical Teal `#00A6A6`, Safety Amber `#F4B942`, Light `#F5F8FA`, Dark `#06131F`
- Typography: Manrope primary, Inter fallback
- Custom `clamp()` responsive font sizes
- Animation timing tokens

#### [NEW] [src/styles/globals.css](file:///c:/Users/lenovo/Desktop/GLOBAL/global-leisure-experts/src/styles/globals.css)
- CSS custom properties for the design system
- Base typography with `clamp()` responsive sizing
- Focus-visible states for accessibility
- `prefers-reduced-motion` media queries
- Logical CSS properties (RTL readiness)

#### [NEW] [.env.example](file:///c:/Users/lenovo/Desktop/GLOBAL/global-leisure-experts/.env.example)
- `NEXT_PUBLIC_WHATSAPP_NUMBER`, `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_META_PIXEL_ID`
- `NEXT_PUBLIC_PHONE`, `NEXT_PUBLIC_EMAIL`, `NEXT_PUBLIC_SITE_URL`

---

### Phase 2 — Data Layer & Content Architecture

Centralized content files for future CMS integration.

#### [NEW] [src/data/company.ts](file:///c:/Users/lenovo/Desktop/GLOBAL/global-leisure-experts/src/data/company.ts)
- Company name, descriptor, brand positioning, licensed activities (with Arabic names and codes)

#### [NEW] [src/data/services.ts](file:///c:/Users/lenovo/Desktop/GLOBAL/global-leisure-experts/src/data/services.ts)
- 4 services with slugs, descriptions, icons, CTAs matching the licensed activities

#### [NEW] [src/data/industries.ts](file:///c:/Users/lenovo/Desktop/GLOBAL/global-leisure-experts/src/data/industries.ts)
- 8 industries: Oil & Gas, Manufacturing, Construction, Energy, Utilities, Marine, Industrial Facilities, Logistics

#### [NEW] [src/data/products.ts](file:///c:/Users/lenovo/Desktop/GLOBAL/global-leisure-experts/src/data/products.ts)
- 6 sample product categories with demo product data (clearly marked as SAMPLE)

#### [NEW] [src/data/faqs.ts](file:///c:/Users/lenovo/Desktop/GLOBAL/global-leisure-experts/src/data/faqs.ts)
- FAQ content for inspection, testing, consultancy, trading, request process

#### [NEW] [src/data/navigation.ts](file:///c:/Users/lenovo/Desktop/GLOBAL/global-leisure-experts/src/data/navigation.ts)
- Navigation structure matching the route map

#### [NEW] [src/data/projects.ts](file:///c:/Users/lenovo/Desktop/GLOBAL/global-leisure-experts/src/data/projects.ts)
- Generic application categories (no fake project claims)

---

### Phase 3 — Core Components

Reusable UI components forming the design system.

#### [NEW] [src/components/Header.tsx](file:///c:/Users/lenovo/Desktop/GLOBAL/global-leisure-experts/src/components/Header.tsx)
- Sticky header with transparent→solid transition on scroll
- Desktop nav: Logo, About, Services, Industries, Products, Resources, Contact, [Request Inspection] CTA
- Mobile hamburger menu
- Keyboard accessible, `aria` labels

#### [NEW] [src/components/MobileNavigation.tsx](file:///c:/Users/lenovo/Desktop/GLOBAL/global-leisure-experts/src/components/MobileNavigation.tsx)
- Full-screen mobile menu with smooth open/close animations
- All navigation links working

#### [NEW] [src/components/Footer.tsx](file:///c:/Users/lenovo/Desktop/GLOBAL/global-leisure-experts/src/components/Footer.tsx)
- Premium dark footer with Company, Services, Resources, Contact columns
- Legal links, copyright

#### [NEW] [src/components/Logo.tsx](file:///c:/Users/lenovo/Desktop/GLOBAL/global-leisure-experts/src/components/Logo.tsx)
- SVG-based GLE technical monogram (geometric, inspection-themed)
- Variants: primary, white, monochrome

#### [NEW] [src/components/WhatsAppButton.tsx](file:///c:/Users/lenovo/Desktop/GLOBAL/global-leisure-experts/src/components/WhatsAppButton.tsx)
- Floating WhatsApp CTA, configurable via env variable
- Only renders when `NEXT_PUBLIC_WHATSAPP_NUMBER` is set

#### [NEW] [src/components/SectionHeading.tsx](file:///c:/Users/lenovo/Desktop/GLOBAL/global-leisure-experts/src/components/SectionHeading.tsx)
- Reusable eyebrow + heading + description pattern

#### [NEW] [src/components/ScrollReveal.tsx](file:///c:/Users/lenovo/Desktop/GLOBAL/global-leisure-experts/src/components/ScrollReveal.tsx)
- Framer Motion scroll-triggered reveal wrapper

#### [NEW] [src/components/Breadcrumbs.tsx](file:///c:/Users/lenovo/Desktop/GLOBAL/global-leisure-experts/src/components/Breadcrumbs.tsx)
- Auto-generated breadcrumbs with JSON-LD BreadcrumbList

#### [NEW] [src/components/ServiceCard.tsx](file:///c:/Users/lenovo/Desktop/GLOBAL/global-leisure-experts/src/components/ServiceCard.tsx)
- Premium service card with number, icon, description, hover animation, accent line

#### [NEW] [src/components/IndustryCard.tsx](file:///c:/Users/lenovo/Desktop/GLOBAL/global-leisure-experts/src/components/IndustryCard.tsx)
- Industry grid card with image placeholder, name, description, arrow

#### [NEW] [src/components/ProductCard.tsx](file:///c:/Users/lenovo/Desktop/GLOBAL/global-leisure-experts/src/components/ProductCard.tsx)
- B2B product card with image, name, category, Request Quote CTA

#### [NEW] [src/components/CTASection.tsx](file:///c:/Users/lenovo/Desktop/GLOBAL/global-leisure-experts/src/components/CTASection.tsx)
- Reusable call-to-action section

---

### Phase 4 — Homepage (Cinematic Experience)

Build the full homepage with all 14+ sections as specified.

#### [NEW] [src/app/page.tsx](file:///c:/Users/lenovo/Desktop/GLOBAL/global-leisure-experts/src/app/page.tsx)
- Composes all homepage sections in order

#### [NEW] Homepage sections (as separate components):
- `src/components/home/Hero.tsx` — Full-screen cinematic hero with dark overlay, technical grid, HUD elements, heading, CTAs, scroll indicator. CSS gradient/pattern background (video placeholder ready).
- `src/components/home/CompanyIntro.tsx` — Split-screen section
- `src/components/home/CoreServices.tsx` — 4 premium service cards
- `src/components/home/InspectionVisualization.tsx` — Signature inspection section with animated points
- `src/components/home/ProcessTimeline.tsx` — 6-step horizontal/vertical timeline
- `src/components/home/IndustriesSection.tsx` — 8-industry grid
- `src/components/home/TechnicalExcellence.tsx` — Dark section with 5 principles
- `src/components/home/TechnicalDashboard.tsx` — Design demo dashboard (clearly labeled SAMPLE)
- `src/components/home/ProductsPreview.tsx` — Products/trading preview
- `src/components/home/ProjectsPreview.tsx` — Applications gallery preview
- `src/components/home/ResourcesPreview.tsx` — Resources preview
- `src/components/home/RequestInspectionCTA.tsx` — CTA section
- `src/components/home/ContactPreview.tsx` — Contact preview

---

### Phase 5 — Internal Pages

#### [NEW] [src/app/about/page.tsx](file:///c:/Users/lenovo/Desktop/GLOBAL/global-leisure-experts/src/app/about/page.tsx)
- Company overview, licensed activities, values, technical expertise positioning

#### [NEW] [src/app/services/page.tsx](file:///c:/Users/lenovo/Desktop/GLOBAL/global-leisure-experts/src/app/services/page.tsx)
- Services overview with links to 4 detail pages

#### [NEW] Service detail pages:
- `src/app/services/industrial-installation-inspection/page.tsx`
- `src/app/services/technical-testing-analysis/page.tsx`
- `src/app/services/inspection-consultancy/page.tsx`
- `src/app/services/industrial-trading/page.tsx`
- Each with: hero, description, process, key areas, CTA, JSON-LD Service schema

#### [NEW] [src/app/industries/page.tsx](file:///c:/Users/lenovo/Desktop/GLOBAL/global-leisure-experts/src/app/industries/page.tsx)
- 8 industry cards with "Our services can support..." phrasing

#### [NEW] [src/app/products/page.tsx](file:///c:/Users/lenovo/Desktop/GLOBAL/global-leisure-experts/src/app/products/page.tsx)
- B2B catalogue with search, category filter, product grid

#### [NEW] [src/app/products/[slug]/page.tsx](file:///c:/Users/lenovo/Desktop/GLOBAL/global-leisure-experts/src/app/products/[slug]/page.tsx)
- Product detail: image, specs, applications, Request Quote, WhatsApp enquiry, related products

#### [NEW] [src/app/projects/page.tsx](file:///c:/Users/lenovo/Desktop/GLOBAL/global-leisure-experts/src/app/projects/page.tsx)
- Application gallery with generic categories

#### [NEW] [src/app/resources/page.tsx](file:///c:/Users/lenovo/Desktop/GLOBAL/global-leisure-experts/src/app/resources/page.tsx)
- Resources hub linking to sub-pages

#### [NEW] [src/app/resources/company-profile/page.tsx](file:///c:/Users/lenovo/Desktop/GLOBAL/global-leisure-experts/src/app/resources/company-profile/page.tsx)
#### [NEW] [src/app/resources/articles/page.tsx](file:///c:/Users/lenovo/Desktop/GLOBAL/global-leisure-experts/src/app/resources/articles/page.tsx)
#### [NEW] [src/app/resources/faq/page.tsx](file:///c:/Users/lenovo/Desktop/GLOBAL/global-leisure-experts/src/app/resources/faq/page.tsx)
- FAQ with accordion, FAQPage JSON-LD schema

#### [NEW] [src/app/contact/page.tsx](file:///c:/Users/lenovo/Desktop/GLOBAL/global-leisure-experts/src/app/contact/page.tsx)
- Contact details (configurable), contact form, WhatsApp CTA

#### [NEW] [src/app/privacy-policy/page.tsx](file:///c:/Users/lenovo/Desktop/GLOBAL/global-leisure-experts/src/app/privacy-policy/page.tsx)
#### [NEW] [src/app/terms/page.tsx](file:///c:/Users/lenovo/Desktop/GLOBAL/global-leisure-experts/src/app/terms/page.tsx)

---

### Phase 6 — Forms

#### [NEW] [src/components/forms/InspectionRequestForm.tsx](file:///c:/Users/lenovo/Desktop/GLOBAL/global-leisure-experts/src/components/forms/InspectionRequestForm.tsx)
- React Hook Form + Zod validation
- All fields: Company Name, Contact Person, Email, Phone/WhatsApp, Service Required, Equipment/Installation, Location, Preferred Date, Project Description, Document Upload, Image Upload
- File type/size validation
- Success state UI

#### [NEW] [src/components/forms/ContactForm.tsx](file:///c:/Users/lenovo/Desktop/GLOBAL/global-leisure-experts/src/components/forms/ContactForm.tsx)
#### [NEW] [src/components/forms/QuoteRequestForm.tsx](file:///c:/Users/lenovo/Desktop/GLOBAL/global-leisure-experts/src/components/forms/QuoteRequestForm.tsx)

#### [NEW] [src/app/request-inspection/page.tsx](file:///c:/Users/lenovo/Desktop/GLOBAL/global-leisure-experts/src/app/request-inspection/page.tsx)
- Dedicated high-conversion page with the inspection request form

#### [NEW] [src/lib/validations.ts](file:///c:/Users/lenovo/Desktop/GLOBAL/global-leisure-experts/src/lib/validations.ts)
- Shared Zod schemas for form validation

---

### Phase 7 — SEO, Structured Data, Performance & Accessibility

#### [NEW] [src/app/layout.tsx](file:///c:/Users/lenovo/Desktop/GLOBAL/global-leisure-experts/src/app/layout.tsx)
- Root layout with Manrope font, Organization JSON-LD, analytics script tags (conditional)
- HTML `lang="en"` `dir="ltr"`

#### [MODIFY] Every page.tsx — unique `metadata` export with title, description, OpenGraph, Twitter cards

#### [NEW] [src/app/sitemap.ts](file:///c:/Users/lenovo/Desktop/GLOBAL/global-leisure-experts/src/app/sitemap.ts)
- Dynamic sitemap covering all public routes

#### [NEW] [src/app/robots.ts](file:///c:/Users/lenovo/Desktop/GLOBAL/global-leisure-experts/src/app/robots.ts)
- Allow public pages, block `/api/`

#### [NEW] [src/app/not-found.tsx](file:///c:/Users/lenovo/Desktop/GLOBAL/global-leisure-experts/src/app/not-found.tsx)
- Polished 404 page with "Return Home" CTA

#### [NEW] [src/lib/metadata.ts](file:///c:/Users/lenovo/Desktop/GLOBAL/global-leisure-experts/src/lib/metadata.ts)
- Helper to generate consistent metadata

#### [NEW] [src/lib/structured-data.ts](file:///c:/Users/lenovo/Desktop/GLOBAL/global-leisure-experts/src/lib/structured-data.ts)
- JSON-LD generators: Organization, Service, Product, FAQPage, BreadcrumbList

#### [NEW] [next.config.ts](file:///c:/Users/lenovo/Desktop/GLOBAL/global-leisure-experts/next.config.ts)
- Security headers, image optimization config

#### [NEW] [src/app/manifest.ts](file:///c:/Users/lenovo/Desktop/GLOBAL/global-leisure-experts/src/app/manifest.ts)
- Web manifest for PWA-readiness

---

### Phase 8 — Polish, QA & Deployment

#### [NEW] [README.md](file:///c:/Users/lenovo/Desktop/GLOBAL/global-leisure-experts/README.md)
- Installation, development, environment variables, build, deployment instructions

#### Final QA:
- `npm run lint` — fix all ESLint errors
- `npm run build` — fix all TypeScript/build errors
- Verify all routes work
- Verify forms validate
- Verify responsive design
- Verify accessibility (semantic HTML, focus states, alt text, contrast)

---

## Verification Plan

### Automated Tests
```bash
npm run lint
npm run build
```

### Manual Verification
- Navigate all routes — no 404s on expected pages
- Test mobile menu functionality
- Test form validation (required fields, email, phone, file upload)
- Verify WhatsApp button renders only when env var is set
- Check responsive layout at 320px, 768px, 1024px, 1440px, 1920px
- Verify `prefers-reduced-motion` respected
- Check all structured data with Google's Rich Results Test
- Verify sitemap.xml and robots.txt accessible
