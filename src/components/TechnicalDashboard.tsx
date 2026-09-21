'use client';

import { motion } from 'framer-motion';

interface TechnicalDashboardProps {
  title?: string;
}

export function TechnicalDashboard({ title = 'Sample Technical Workflow' }: TechnicalDashboardProps) {
  return (
    <section className="py-16 lg:py-24 bg-deep-navy">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-technical-teal mb-4">Technical Interface</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-white/60">Design demonstration only — not live system data</p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-white/70">Inspection Status</span>
                  <span className="text-technical-teal font-mono">80%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '80%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-technical-teal to-industrial-blue rounded-full"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-xs text-white/50 uppercase tracking-wider mb-1">Equipment</p>
                  <p className="text-sm text-white font-medium">Industrial Installation</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-xs text-white/50 uppercase tracking-wider mb-1">Assessment</p>
                  <p className="text-sm text-technical-teal font-medium">In Progress</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-xs text-white/50 uppercase tracking-wider mb-1">Testing</p>
                  <p className="text-sm text-white font-medium">Technical Analysis</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-xs text-white/50 uppercase-wider mb-1">Documentation</p>
                  <p className="text-sm text-safety-amber font-medium">Report Preparation</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-xs text-white/50 uppercase tracking-wider mb-3">Inspection Points</p>
                <div className="space-y-3">
                  {['PRESSURE', 'STRUCTURAL', 'CONDITION', 'SAFETY'].map((point, i) => (
                    <motion.div
                      key={point}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.15 }}
                      className="flex items-center gap-3"
                    >
                      <div className="h-2 w-2 rounded-full bg-technical-teal animate-pulse" />
                      <span className="text-sm text-white/80 font-mono">{point}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-xs text-white/50 uppercase tracking-wider mb-3">Technical Parameters</p>
                <div className="space-y-2">
                  {[
                    { label: 'Temperature', value: '42°C' },
                    { label: 'Pressure', value: '6.2 bar' },
                    { label: 'Humidity', value: '34%' },
                    { label: 'Vibration', value: '0.2 mm/s' },
                  ].map((param) => (
                    <div key={param.label} className="flex justify-between text-sm">
                      <span className="text-white/60">{param.label}</span>
                      <span className="text-white font-mono">{param.value}</span>
                    </div>
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
