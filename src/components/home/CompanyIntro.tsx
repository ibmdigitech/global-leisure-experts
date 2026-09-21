'use client';

import { ScrollReveal } from '@/components/ScrollReveal';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { company } from '@/data/company';
import { ImageWithFallback } from '@/components/ImageWithFallback';

export function CompanyIntro() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal>
            <div className="aspect-[4/3] bg-gradient-to-br from-deep-navy to-industrial-blue rounded-3xl relative overflow-hidden">
              <ImageWithFallback
                src="/images/gle-about-engineer.webp"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-80"
              />
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
            <p className="text-sm font-semibold uppercase tracking-widest text-technical-teal mb-4">
              {company.name}
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-deep-navy mb-6">
              Technical Expertise Built Around Precision
            </h2>
            <p className="text-lg text-secondary-text leading-relaxed mb-8">
              {company.name} provides industrial inspection consultancy, technical testing and analysis, and industrial trading solutions for businesses requiring dependable technical support.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-base font-semibold text-technical-teal hover:gap-3 transition-all"
            >
              Explore Our Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
