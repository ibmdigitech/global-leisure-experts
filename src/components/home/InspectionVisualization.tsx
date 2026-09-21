'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';

const inspectionPoints = [
  { label: 'Structural Integrity', x: '20%', y: '30%' },
  { label: 'Equipment Condition', x: '75%', y: '25%' },
  { label: 'Safety Compliance', x: '60%', y: '70%' },
  { label: 'Installation Verification', x: '25%', y: '65%' },
];

export function InspectionVisualization() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-technical-teal mb-4">Inspection Focus</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-deep-navy mb-6">
              Systematic Technical Evaluation
            </h2>
            <p className="text-lg text-secondary-text leading-relaxed mb-8">
              Our inspection approach covers critical areas including structural integrity, equipment condition, safety compliance, and installation verification.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="aspect-[4/3] bg-gradient-to-br from-deep-navy to-industrial-blue rounded-3xl relative overflow-hidden">
              {inspectionPoints.map((point, i) => (
                <motion.div
                  key={point.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="absolute"
                  style={{ left: point.x, top: point.y }}
                >
                  <div className="relative">
                    <div className="h-3 w-3 rounded-full bg-technical-teal animate-pulse" />
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap">
                      <span className="text-xs font-medium text-white/80">{point.label}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
