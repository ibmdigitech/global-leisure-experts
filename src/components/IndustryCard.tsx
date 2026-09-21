import { industries } from '@/data/industries';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export function IndustryCard({ industry }: { industry: typeof industries[0] }) {
  return (
    <ScrollReveal>
      <Link
        href="/industries"
        className="group block bg-white rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-technical-teal/30 hover:-translate-y-1"
      >
        <div className="aspect-[16/10] bg-gradient-to-br from-deep-navy to-industrial-blue relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-technical-teal/20 transition-colors">
              <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-bold text-deep-navy mb-2 group-hover:text-technical-teal transition-colors">
            {industry.name}
          </h3>
          <p className="text-sm text-secondary-text leading-relaxed mb-4">
            {industry.description}
          </p>
          <div className="flex items-center gap-2 text-sm font-semibold text-technical-teal group-hover:gap-3 transition-all">
            <span>Learn More</span>
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </Link>
    </ScrollReveal>
  );
}
