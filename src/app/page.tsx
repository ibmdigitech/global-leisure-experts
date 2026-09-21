import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { ScrollReveal, FadeIn } from '@/components/ScrollReveal';
import { SectionHeading } from '@/components/SectionHeading';
import { ServiceCard } from '@/components/ServiceCard';
import { IndustryCard } from '@/components/IndustryCard';
import { ProductCard } from '@/components/ProductCard';
import { ProcessTimeline } from '@/components/ProcessTimeline';
import { InspectionVisualization } from '@/components/InspectionVisualization';
import { TechnicalDashboard } from '@/components/TechnicalDashboard';
import { CTASection } from '@/components/CTASection';
import { services } from '@/data/services';
import { industries } from '@/data/industries';
import { products } from '@/data/products';
import { company } from '@/data/company';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />
      <WhatsAppButton />

      <main>
        {/* HERO */}
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-deep-navy via-industrial-blue to-dark">
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }} />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 via-transparent to-deep-navy/40" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <div className="flex items-center justify-center gap-3 mb-8">
                {['SCAN', 'ANALYZE', 'VERIFY', 'REPORT'].map((item, i) => (
                  <span
                    key={item}
                    className="text-xs font-bold text-white/60 uppercase tracking-widest"
                    style={{ animationDelay: `${i * 200}ms` }}
                  >
                    {i > 0 && <span className="mr-3 text-technical-teal">●</span>}
                    {item}
                  </span>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white tracking-tight mb-6 max-w-5xl mx-auto leading-[1.1]">
                {company.heroHeadline}
              </h1>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-lg sm:text-xl text-white/70 mb-10 max-w-2xl mx-auto">
                {company.heroDescription}
              </p>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/request-inspection"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-technical-teal px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white hover:text-deep-navy"
                >
                  {company.primaryCTA}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10"
                >
                  {company.secondaryCTA}
                </Link>
              </div>
            </FadeIn>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-6 w-6 text-white/50" />
          </div>
        </section>

        {/* COMPANY INTRODUCTION */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <ScrollReveal>
                <div className="aspect-[4/3] bg-gradient-to-br from-deep-navy to-industrial-blue rounded-3xl relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="h-24 w-24 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                        <svg className="h-12 w-12 text-technical-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-3.03a1.5 1.5 0 01-.8-1.32v-6.12a1.5 1.5 0 011.5-1.5h13.2a1.5 1.5 0 011.5 1.5v6.12a1.5 1.5 0 01-.8 1.32l-5.1 3.03a1.5 1.5 0 01-1.34.03z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 13.5l3.75-2.25M12 18.75l-3.75 2.25" />
                        </svg>
                      </div>
                      <p className="text-white/60 text-sm">Industrial Engineering</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-sm font-semibold uppercase tracking-widest text-technical-teal mb-4">
                  {company.name}
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-deep-navy mb-6">
                  Technical Expertise Built Around Precision
                </h2>
                <p className="text-lg text-secondary-text leading-relaxed mb-8">
                  {company.name} provides industrial inspection consultancy, technical testing and analysis, and industrial trading solutions for businesses requiring dependable technical support.
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-base font-semibold text-technical-teal hover:gap-3 transition-all"
                >
                  Explore Our Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CORE SERVICES */}
        <section className="py-16 lg:py-24 bg-light">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="What We Do"
              title="Core Technical Services"
              description="Professional industrial services built around inspection, testing, consultancy, and trading."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-12">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* SIGNATURE INSPECTION VISUALIZATION */}
        <InspectionVisualization />

        {/* PROCESS */}
        <ProcessTimeline />

        {/* INDUSTRIES */}
        <section className="py-16 lg:py-24 bg-light">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Industries"
              title="Industries We Support"
              description="Our services can support businesses across a range of industrial sectors."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-12">
              {industries.map((industry) => (
                <IndustryCard key={industry.id} industry={industry} />
              ))}
            </div>
          </div>
        </section>

        {/* TECHNICAL EXCELLENCE */}
        <section className="py-16 lg:py-24 bg-deep-navy">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Our Principles"
              title="Precision Behind Every Technical Decision"
              description="Five principles that guide our approach to industrial inspection and technical services."
              align="left"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mt-12">
              {[
                { title: 'PRECISION', desc: 'Careful technical evaluation' },
                { title: 'INTEGRITY', desc: 'Clear and responsible reporting' },
                { title: 'SAFETY', desc: 'Safety-conscious inspection thinking' },
                { title: 'RELIABILITY', desc: 'Structured and dependable service' },
                { title: 'RESPONSIVENESS', desc: 'Clear communication throughout the engagement' },
              ].map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.1}>
                  <div className="text-center lg:text-left">
                    <div className="h-px w-12 bg-technical-teal mb-4" />
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">{item.title}</h3>
                    <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* TECHNICAL DASHBOARD */}
        <TechnicalDashboard />

        {/* PRODUCTS */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Industrial Trading"
              title="Products & Industrial Supplies"
              description="Browse our industrial product catalogue. Contact us for availability and pricing."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
              {products.slice(0, 6).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-base font-semibold text-technical-teal hover:gap-3 transition-all"
              >
                View All Products
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* APPLICATIONS / PROJECTS */}
        <section className="py-16 lg:py-24 bg-light">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Applications"
              title="Applications & Use Cases"
              description="Examples of how our services can be applied across industrial contexts."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-12">
              {[
                { title: 'Industrial Installation Inspection', desc: 'Comprehensive evaluation of industrial equipment and infrastructure.' },
                { title: 'Technical Equipment Assessment', desc: 'Technical evaluation of operational readiness and condition.' },
                { title: 'Testing & Analysis', desc: 'Material testing, performance evaluation, and technical measurement.' },
                { title: 'Industrial Supply', desc: 'Sourcing and supply of industrial products and equipment.' },
              ].map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.1}>
                  <div className="bg-white rounded-2xl border border-border p-6 lg:p-8">
                    <div className="h-10 w-10 rounded-full bg-technical-teal/10 flex items-center justify-center mb-4">
                      <span className="text-sm font-bold text-technical-teal font-mono">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <h3 className="text-lg font-bold text-deep-navy mb-2">{item.title}</h3>
                    <p className="text-sm text-secondary-text leading-relaxed">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-base font-semibold text-technical-teal hover:gap-3 transition-all"
              >
                View All Applications
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* RESOURCES */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Resources"
              title="Technical Resources"
              description="Access our company profile, technical articles, and frequently asked questions."
            />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 mt-12">
              {[
                { title: 'Company Profile', desc: 'Download our professional company profile.', href: '/resources/company-profile' },
                { title: 'Articles', desc: 'Technical articles and insights.', href: '/resources/articles' },
                { title: 'FAQ', desc: 'Frequently asked questions about our services.', href: '/resources/faq' },
              ].map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.1}>
                  <Link
                    href={item.href}
                    className="block bg-light rounded-2xl border border-border p-6 lg:p-8 transition-all duration-300 hover:shadow-xl hover:border-technical-teal/30 hover:-translate-y-1"
                  >
                    <div className="h-12 w-12 rounded-full bg-technical-teal/10 flex items-center justify-center mb-4">
                      <svg className="h-6 w-6 text-technical-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A9 9 0 006 18c1.052 0 2.062-.18 3-.512m0-13.042A8.967 8.967 0 0118 3.75c1.052 0 2.062.18 3 .512v14.25A9 9 0 0118 18c-1.052 0-2.062-.18-3-.512" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-deep-navy mb-2">{item.title}</h3>
                    <p className="text-sm text-secondary-text leading-relaxed mb-4">{item.desc}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-technical-teal group-hover:gap-3 transition-all">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* REQUEST INSPECTION CTA */}
        <section className="py-16 lg:py-24 bg-light">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <CTASection />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
