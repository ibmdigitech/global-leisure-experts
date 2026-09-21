import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SectionHeading } from '@/components/SectionHeading';
import { ServiceCard } from '@/components/ServiceCard';
import { services } from '@/data/services';
import { company } from '@/data/company';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Services | Global Leisure Experts LLC',
  description: 'Explore our industrial inspection, technical testing, consultancy, and trading services.',
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <WhatsAppButton />

      <main className="pt-16 lg:pt-20">
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Services"
              title="Our Technical Services"
              description="Professional industrial inspection, technical testing, consultancy, and trading solutions."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-12">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-light">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-deep-navy mb-4">Need a Custom Solution?</h2>
            <p className="text-secondary-text mb-8 max-w-2xl mx-auto">
              Contact our technical team to discuss your specific requirements.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-technical-teal px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-industrial-blue"
            >
              {company.secondaryCTA}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
