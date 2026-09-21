import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SectionHeading } from '@/components/SectionHeading';
import { IndustryCard } from '@/components/IndustryCard';
import { industries } from '@/data/industries';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Industries | Global Leisure Experts LLC',
  description: 'Industries supported by our industrial inspection, technical testing, consultancy, and trading services.',
};

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <WhatsAppButton />

      <main className="pt-16 lg:pt-20">
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Industries"
              title="Industries We Support"
              description="Our services can support businesses across a range of industrial sectors requiring technical inspection and testing."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-12">
              {industries.map((industry) => (
                <IndustryCard key={industry.id} industry={industry} />
              ))}
            </div>

            <div className="mt-16 text-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-base font-semibold text-technical-teal hover:gap-3 transition-all"
              >
                Explore Our Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
