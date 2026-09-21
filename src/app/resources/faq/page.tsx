import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SectionHeading } from '@/components/SectionHeading';
import { FAQAccordion } from '@/components/FAQAccordion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'FAQ | Global Leisure Experts LLC',
  description: 'Frequently asked questions about our industrial inspection, testing, consultancy, and trading services.',
};

export default function FAQPage() {
  return (
    <>
      <Header />
      <WhatsAppButton />

      <main className="pt-16 lg:pt-20">
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <Link href="/resources" className="inline-flex items-center gap-2 text-sm text-secondary-text hover:text-technical-teal mb-8">
              <ArrowLeft className="h-4 w-4" />
              Back to Resources
            </Link>

            <SectionHeading
              eyebrow="FAQ"
              title="Frequently Asked Questions"
              description="Common questions about our industrial inspection, testing, consultancy, and trading services."
            />

            <FAQAccordion />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
