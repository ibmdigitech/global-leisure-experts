'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { navigation } from '@/data/navigation';
import { company } from '@/data/company';
import { MobileNavigation } from './MobileNavigation';
import Link from 'next/link';

interface HeaderProps {
  transparent?: boolean;
}

export function Header({ transparent = false }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[60] bg-deep-navy/90 backdrop-blur-md shadow-sm border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 lg:h-20 items-center justify-between">
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <Logo className="h-8 w-auto text-white" logoColor="#ffffff" />
            </Link>

            <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium transition-colors hover:text-technical-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-technical-teal focus-visible:ring-offset-2 rounded text-white/90"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/request-inspection"
                className="inline-flex items-center justify-center rounded-full bg-technical-teal px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-industrial-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-technical-teal focus-visible:ring-offset-2"
              >
                {company.primaryCTA}
              </Link>
            </div>

            <button
              type="button"
              className="lg:hidden p-2 -mr-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </header>

      <MobileNavigation isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
