import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { ScrollReveal } from '@/components/ScrollReveal';
import { SectionHeading } from '@/components/SectionHeading';
import { CTASection } from '@/components/CTASection';
import { company } from '@/data/company';
import { licensedActivities } from '@/data/company';

export const metadata = {
  title: 'About Us | Global Leisure Experts LLC',
  description: 'Learn about Global Leisure Experts LLC, our licensed activities, and our commitment to industrial inspection and technical testing in the UAE.',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <WhatsAppButton />

      <main className="pt-16 lg:pt-20">
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="About Us"
              title="About Global Leisure Experts LLC"
              description="A UAE-based company focused on industrial inspection, technical testing, consultancy, and trading."
            />
            <div className="grid lg:grid-cols-2 gap-12 mt-12">
              <ScrollReveal>
                <div className="aspect-[4/3] bg-gradient-to-br from-deep-navy to-industrial-blue rounded-3xl relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="h-24 w-24 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                        <svg className="h-12 w-12 text-technical-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-3.03a1.5 1.5 0 01-.8-1.32v-6.12a1.5 1.5 0 011.5-1.5h13.2a1.5 1.5 0 011.5 1.5v6.12a1.5 1.5 0 01-.8 1.32l-5.1 3.03a1.5 1.5 0 01-1.34.03z" />
                        </svg>
                      </div>
                      <p className="text-white/60 text-sm">Industrial Engineering</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <h3 className="text-2xl font-bold text-deep-navy mb-4">Our Focus</h3>
                <p className="text-secondary-text leading-relaxed mb-6">
                  {company.name} is a UAE-based company providing industrial inspection consultancy, technical testing and analysis, and industrial trading solutions. We focus on delivering structured technical support for businesses across the Emirates.
                </p>
                <h3 className="text-2xl font-bold text-deep-navy mb-4">Licensed Activities</h3>
                <p className="text-secondary-text leading-relaxed mb-6">
                  Our operations are supported by the following licensed business activities:
                </p>
                <ul className="space-y-3">
                  {licensedActivities.map((activity) => (
                    <li key={activity.id} className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-technical-teal mt-2 shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-primary-text">{activity.name}</p>
                        <p className="text-xs text-secondary-text mt-0.5" dir="rtl">{activity.arabic}</p>
                        <p className="text-xs text-technical-teal font-mono mt-0.5">Code: {activity.code}</p>
                      </div>
                    </li>
                  ))}
                </ul>
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
