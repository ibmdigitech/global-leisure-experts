'use client';

import { motion } from 'framer-motion';

export function InspectionVisualization() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-technical-teal mb-4">Signature Section</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-deep-navy mb-6">
              Precision Behind Every Inspection
            </h2>
            <p className="text-lg text-secondary-text leading-relaxed mb-8">
              Our inspection methodology combines systematic assessment with technical precision, ensuring comprehensive evaluation of industrial installations and equipment.
            </p>

            <div className="space-y-4">
              {['PRESSURE', 'STRUCTURAL', 'CONDITION', 'SAFETY'].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="h-3 w-3 rounded-full bg-technical-teal" />
                  <span className="text-sm font-bold text-deep-navy font-mono tracking-wider">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-deep-navy to-industrial-blue rounded-3xl relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-0 border-2 border-dashed border-white/20 rounded-full"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-4 border-2 border-dashed border-technical-teal/30 rounded-full"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-white mb-2">GLE</div>
                      <div className="text-xs text-white/60 uppercase tracking-widest">Inspection</div>
                    </div>
                  </div>

                  {[0, 90, 180, 270].map((angle, i) => (
                    <motion.div
                      key={angle}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      style={{
                        transform: `rotate(${angle}deg) translate(0, -120px) rotate(-${angle}deg)`,
                      }}
                    >
                      <div className="h-2 w-2 rounded-full bg-safety-amber" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
