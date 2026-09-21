import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { ScrollReveal } from '@/components/ScrollReveal';
import { SectionHeading } from '@/components/SectionHeading';
import { ArrowLeft, Download } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Company Profile | Global Leisure Experts LLC',
  description: 'Download the Global Leisure Experts LLC company profile.',
};

export default function CompanyProfilePage() {
  return (
    <>
      <Header />
      <WhatsAppButton />

      <main className="pt-16 lg:pt-20">
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link href="/resources" className="inline-flex items-center gap-2 text-sm text-secondary-text hover:text-technical-teal mb-8">
              <ArrowLeft className="h-4 w-4" />
              Back to Resources
            </Link>

            <div className="max-w-3xl">
              <SectionHeading
                eyebrow="Company Profile"
                title="Global Leisure Experts LLC"
                description="Professional company profile document."
              />

              <ScrollReveal>
                <div className="bg-light rounded-2xl border border-border p-8 lg:p-12 mt-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-16 w-16 rounded-full bg-technical-teal/10 flex items-center justify-center">
                      <svg className="h-8 w-8 text-technical-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V11.25m9.75-6.75h-3.75m-3.75 0v3.75m0 0h3.75m-3.75 0H9.75" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-deep-navy">Company Profile</h3>
                      <p className="text-sm text-secondary-text">PDF Document</p>
                    </div>
                  </div>
                  <p className="text-secondary-text leading-relaxed mb-6">
                    Download our company profile to learn more about Global Leisure Experts LLC, our licensed activities, services, and technical capabilities.
                  </p>
                  <button
                    className="inline-flex items-center gap-2 rounded-full bg-technical-teal px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-industrial-blue"
                  >
                    <Download className="h-4 w-4" />
                    Download Company Profile
                  </button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
