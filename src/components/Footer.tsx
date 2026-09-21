'use client';

import Link from 'next/link';
import { Logo } from './Logo';
import { footerNavigation } from '@/data/navigation';
import { company } from '@/data/company';
import { contactInfo } from '@/data/company';

export function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Logo className="h-8 w-auto text-white" />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              {company.descriptor}
            </p>
            <div className="space-y-2 text-sm">
              {contactInfo.phone && contactInfo.phone !== '+971 XX XXX XXXX' && (
                <p className="text-white/70">
                  <a href={`tel:${contactInfo.phone}`} className="hover:text-technical-teal transition-colors">
                    {contactInfo.phone}
                  </a>
                </p>
              )}
              {contactInfo.email && contactInfo.email !== 'info@gle.ae' && (
                <p className="text-white/70">
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-technical-teal transition-colors">
                    {contactInfo.email}
                  </a>
                </p>
              )}
              {contactInfo.whatsapp && (
                <p className="text-white/70">
                  <a
                    href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-technical-teal transition-colors"
                  >
                    WhatsApp
                  </a>
                </p>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-4">Company</h3>
            <ul className="space-y-3">
              {footerNavigation.company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/60 hover:text-technical-teal transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-4">Services</h3>
            <ul className="space-y-3">
              {footerNavigation.services.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/60 hover:text-technical-teal transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerNavigation.resources.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/60 hover:text-technical-teal transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/50">
            {company.copyright}
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-sm text-white/50 hover:text-technical-teal transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-white/50 hover:text-technical-teal transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
