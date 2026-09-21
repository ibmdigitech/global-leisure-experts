'use client';

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  inverse?: boolean;
  className?: string;
}

export function SectionHeading({ eyebrow, title, description, align = 'center', inverse = false, className = '' }: SectionHeadingProps) {
  const textColor = inverse ? 'text-white' : 'text-deep-navy';
  const descriptionColor = inverse ? 'text-white/70' : 'text-secondary-text';

  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'} ${className}`}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm font-semibold uppercase tracking-widest text-technical-teal mb-4"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight ${textColor} mb-6`}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-lg ${descriptionColor} leading-relaxed`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
