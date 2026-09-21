import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { ScrollReveal } from '@/components/ScrollReveal';
import { CTASection } from '@/components/CTASection';
import { services, Service } from '@/data/services';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ImageWithFallback } from '@/components/ImageWithFallback';

const service = services.find((s) => s.id === 'consultancy');

if (!service) {
  notFound();
}

const safeService = service as Service;

export const metadata = {
  title: `Inspection Consultancy | Global Leisure Experts LLC`,
  description: safeService.shortDescription,
};

export default function InspectionConsultancyPage() {
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
                <p className="text-sm font-semibold uppercase tracking-widest text-technical-teal mb-4">Service 03</p>
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
                    src="/images/inspection-consultancy.webp"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="h-24 w-24 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                        <svg className="h-12 w-12 text-technical-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h.75m3 3h.375a.375.375 0 00.375-.375v-1.125a.375.375 0 00-.375-.375h-.375m0 0h-.375" />
                        </svg>
                      </div>
                      <p className="text-white/60 text-sm">Inspection Consultancy</p>
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

