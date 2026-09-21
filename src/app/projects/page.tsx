import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { ScrollReveal } from '@/components/ScrollReveal';
import { SectionHeading } from '@/components/SectionHeading';
import { CTASection } from '@/components/CTASection';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Projects & Applications | Global Leisure Experts LLC',
  description: 'Examples of industrial inspection, testing, and trading applications.',
};

const applications = [
  { title: 'Industrial Installation Inspection', desc: 'Comprehensive evaluation of industrial equipment and infrastructure condition, safety, and operational readiness.' },
  { title: 'Technical Equipment Assessment', desc: 'Technical evaluation of operational readiness, condition, and performance of industrial assets.' },
  { title: 'Testing & Analysis', desc: 'Material testing, performance evaluation, and technical parameter measurement for informed decision-making.' },
  { title: 'Industrial Supply', desc: 'Sourcing and supply of industrial products, equipment, and technical supplies for business operations.' },
];

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <WhatsAppButton />

      <main className="pt-16 lg:pt-20">
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Applications"
              title="Projects & Applications"
              description="Examples of how our services can be applied across industrial contexts."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 mt-12">
              {applications.map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.1}>
                  <div className="bg-light rounded-2xl border border-border p-6 lg:p-8 transition-all duration-300 hover:shadow-xl hover:border-technical-teal/30 hover:-translate-y-1">
                    <div className="h-10 w-10 rounded-full bg-technical-teal/10 flex items-center justify-center mb-4">
                      <span className="text-sm font-bold text-technical-teal font-mono">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <h3 className="text-lg font-bold text-deep-navy mb-2">{item.title}</h3>
                    <p className="text-sm text-secondary-text leading-relaxed mb-4">{item.desc}</p>
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-technical-teal hover:gap-3 transition-all"
                    >
                      Learn More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </>
  );
}
