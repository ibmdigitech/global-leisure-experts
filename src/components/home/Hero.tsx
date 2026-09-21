'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { company } from '@/data/company';
import { ImageWithFallback } from '@/components/ImageWithFallback';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-deep-navy via-industrial-blue to-dark">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 via-transparent to-deep-navy/40" />
      </div>

      <ImageWithFallback
        src="/images/gle-hero-industrial-inspection.webp"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          {['SCAN', 'ANALYZE', 'VERIFY', 'REPORT'].map((item, i) => (
            <span
              key={item}
              className="text-xs font-bold text-white/60 uppercase tracking-widest"
              style={{ animationDelay: `${i * 200}ms` }}
            >
              {i > 0 && <span className="mr-3 text-technical-teal">●</span>}
              {item}
            </span>
          ))}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white tracking-tight mb-6 max-w-5xl mx-auto leading-[1.1]"
        >
          {company.heroHeadline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg sm:text-xl text-white/70 mb-10 max-w-2xl mx-auto"
        >
          {company.heroDescription}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/request-inspection"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-technical-teal px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white hover:text-deep-navy"
          >
            {company.primaryCTA}
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10"
          >
            {company.secondaryCTA}
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-white/50" />
      </div>
    </section>
  );
}
