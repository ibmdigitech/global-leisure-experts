'use client';

import { motion } from 'framer-motion';

const processSteps = [
  { number: '01', title: 'REQUEST', description: 'Client submits requirements.' },
  { number: '02', title: 'REVIEW', description: 'Technical requirements are reviewed.' },
  { number: '03', title: 'PLAN', description: 'Inspection/testing scope is organized.' },
  { number: '04', title: 'INSPECT', description: 'Technical inspection or testing is performed.' },
  { number: '05', title: 'ANALYZE', description: 'Findings and technical observations are evaluated.' },
  { number: '06', title: 'REPORT', description: 'Results are documented and communicated.' },
];

export function ProcessTimeline() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-technical-teal mb-4">Our Process</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-deep-navy">
            From Request to Technical Report
          </h2>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 w-12 h-12 rounded-full bg-technical-teal text-white flex items-center justify-center text-sm font-bold mb-4 shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-sm font-bold text-deep-navy mb-2">{step.title}</h3>
                <p className="text-xs text-secondary-text leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
