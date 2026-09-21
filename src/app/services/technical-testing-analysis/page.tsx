import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { ScrollReveal } from '@/components/ScrollReveal';
import { SectionHeading } from '@/components/SectionHeading';
import { CTASection } from '@/components/CTASection';
import { services, Service } from '@/data/services';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ImageWithFallback } from '@/components/ImageWithFallback';

const service = services.find((s) => s.id === 'testing');

if (!service) {
  notFound();
}

const safeService = service as Service;

export const metadata = {
  title: `Technical Testing & Analysis | Global Leisure Experts LLC`,
  description: safeService.shortDescription,
};

export default function TechnicalTestingAnalysisPage() {
  return (
    <>
      <Header />
      <WhatsAppButton />

      <main className="pt-16 lg:pt-20">
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link href="/services" className="inline-flex items-center gap-2 text-sm text-secondary-text hover:text-technical-teal mb-8">
              <ArrowLeft className="h-4 w-4" />
              Back to Services
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal>
                <p className="text-sm font-semibold uppercase tracking-widest text-technical-teal mb-4">Service 02</p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-deep-navy mb-6">
                  {safeService.title}
                </h1>
                <p className="text-lg text-secondary-text leading-relaxed mb-8">
                  {safeService.fullDescription}
                </p>

                <div className="mb-8">
                  <h3 className="text-lg font-bold text-deep-navy mb-4">Key Areas</h3>
                  <ul className="space-y-3">
                    {safeService.keyAreas.map((area) => (
                      <li key={area} className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-technical-teal" />
                        <span className="text-secondary-text">{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/request-inspection"
                  className="inline-flex items-center gap-2 rounded-full bg-technical-teal px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-industrial-blue"
                >
                  Request an Inspection
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="aspect-[4/3] bg-gradient-to-br from-deep-navy to-industrial-blue rounded-3xl relative overflow-hidden">
                  <ImageWithFallback
                    src="/images/technical-testing-analysis.webp"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="h-24 w-24 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                        <svg className="h-12 w-12 text-technical-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                        </svg>
                      </div>
                      <p className="text-white/60 text-sm">Technical Testing & Analysis</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </>
  );
}
