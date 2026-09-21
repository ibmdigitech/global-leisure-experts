import { services } from '@/data/services';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export function ServiceCard({ service }: { service: typeof services[0] }) {
  return (
    <ScrollReveal>
      <Link
        href={service.ctaLink}
        className="group relative block bg-white rounded-2xl border border-border p-6 lg:p-8 transition-all duration-300 hover:shadow-xl hover:border-technical-teal/30 hover:-translate-y-1"
      >
        <div className="flex items-start justify-between mb-6">
          <span className="text-sm font-bold text-technical-teal font-mono">{service.number}</span>
          <div className="h-10 w-10 rounded-full bg-light flex items-center justify-center text-industrial-blue group-hover:bg-technical-teal group-hover:text-white transition-colors">
            <span className="sr-only">{service.title}</span>
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <h3 className="text-xl font-bold text-deep-navy mb-3 group-hover:text-technical-teal transition-colors">
          {service.title}
        </h3>

        <p className="text-secondary-text text-sm leading-relaxed mb-6">
          {service.shortDescription}
        </p>

        <div className="flex items-center gap-2 text-sm font-semibold text-technical-teal group-hover:gap-3 transition-all">
          <span>{service.cta}</span>
          <ArrowRight className="h-4 w-4" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-technical-teal to-industrial-blue rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
      </Link>
    </ScrollReveal>
  );
}
