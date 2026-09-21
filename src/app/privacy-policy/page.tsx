import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SectionHeading } from '@/components/SectionHeading';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Global Leisure Experts LLC',
  description: 'Privacy policy for Global Leisure Experts LLC.',
};

export default function PrivacyPolicyPage() {
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
              title="Privacy Policy"
              description="Last updated: September 2025"
            />

            <div className="prose prose-slate mt-12 text-secondary-text leading-relaxed">
              <h3 className="text-lg font-bold text-deep-navy">1. Information We Collect</h3>
              <p>
                Global Leisure Experts LLC collects information you provide directly to us through contact forms, inspection request forms, and quote request forms. This may include your name, email address, phone number, company name, and any details you provide in your message or request.
              </p>

              <h3 className="text-lg font-bold text-deep-navy mt-8">2. How We Use Your Information</h3>
              <p>
                We use the information we collect to respond to your enquiries, process inspection requests, provide quotes, and communicate with you about our services.
              </p>

              <h3 className="text-lg font-bold text-deep-navy mt-8">3. Data Security</h3>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
              </p>

              <h3 className="text-lg font-bold text-deep-navy mt-8">4. Contact Us</h3>
              <p>
                If you have any questions about this privacy policy, please contact us through our contact page.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
