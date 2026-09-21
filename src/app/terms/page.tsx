import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SectionHeading } from '@/components/SectionHeading';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service | Global Leisure Experts LLC',
  description: 'Terms of service for Global Leisure Experts LLC.',
};

export default function TermsPage() {
  return (
    <>
      <Header />

      <main className="pt-16 lg:pt-20">
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-secondary-text hover:text-technical-teal mb-8">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>

            <SectionHeading
              eyebrow="Legal"
              title="Terms of Service"
              description="Last updated: September 2025"
            />

            <div className="prose prose-slate mt-12 text-secondary-text leading-relaxed">
              <h3 className="text-lg font-bold text-deep-navy">1. Acceptance of Terms</h3>
              <p>
                By accessing or using the services of Global Leisure Experts LLC, you agree to be bound by these terms of service.
              </p>

              <h3 className="text-lg font-bold text-deep-navy mt-8">2. Services</h3>
              <p>
                Global Leisure Experts LLC provides industrial installation inspection consultancy, technical testing and analysis, inspection consultancy, and industrial trading services in the United Arab Emirates.
              </p>

              <h3 className="text-lg font-bold text-deep-navy mt-8">3. Limitation of Liability</h3>
              <p>
                Our services are provided on an as-is basis. We strive for accuracy and reliability but do not warrant that our services will be uninterrupted or error-free.
              </p>

              <h3 className="text-lg font-bold text-deep-navy mt-8">4. Contact Us</h3>
              <p>
                For any questions regarding these terms, please contact us through our contact page.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
