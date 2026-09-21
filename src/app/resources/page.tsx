import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { ScrollReveal } from '@/components/ScrollReveal';
import { SectionHeading } from '@/components/SectionHeading';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Resources | Global Leisure Experts LLC',
  description: 'Access our company profile, technical articles, and frequently asked questions.',
};

const resources = [
  { title: 'Company Profile', desc: 'Download our professional company profile document.', href: '/resources/company-profile', icon: 'Document' },
  { title: 'Articles', desc: 'Technical articles and insights on industrial inspection and testing.', href: '/resources/articles', icon: 'BookOpen' },
  { title: 'FAQ', desc: 'Frequently asked questions about our services and processes.', href: '/resources/faq', icon: 'HelpCircle' },
];

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <WhatsAppButton />

      <main className="pt-16 lg:pt-20">
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Resources"
              title="Technical Resources"
              description="Access our company profile, technical articles, and frequently asked questions."
            />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 mt-12">
              {resources.map((item, i) => (
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
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-technical-teal">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
