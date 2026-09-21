'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { navigation, footerNavigation } from '@/data/navigation';
import { company } from '@/data/company';
import Link from 'next/link';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNavigation({ isOpen, onClose }: MobileNavigationProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] lg:hidden"
        >
          <div className="absolute inset-0 bg-black/50" onClick={onClose} />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-xl"
          >
            <div className="flex h-16 items-center justify-between px-4 border-b border-border">
              <span className="text-lg font-bold text-deep-navy">Menu</span>
              <button
                type="button"
                onClick={onClose}
                className="p-2 -mr-2"
                aria-label="Close menu"
              >
                <X className="h-6 w-6 text-primary-text" />
              </button>
            </div>
            <nav className="px-4 py-6 flex flex-col gap-4 overflow-y-auto h-full">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-base font-medium text-primary-text hover:text-technical-teal transition-colors"
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              ))}
              <div className="border-t border-border my-4" />
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-text">Services</p>
              {footerNavigation.services.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-secondary-text hover:text-technical-teal transition-colors"
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              ))}
              <div className="border-t border-border my-4" />
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-text">Resources</p>
              {footerNavigation.resources.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-secondary-text hover:text-technical-teal transition-colors"
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              ))}
              <div className="border-t border-border my-4" />
              <Link
                href="/request-inspection"
                className="inline-flex items-center justify-center rounded-full bg-technical-teal px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-industrial-blue"
                onClick={onClose}
              >
                {company.primaryCTA}
              </Link>
            </nav>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
