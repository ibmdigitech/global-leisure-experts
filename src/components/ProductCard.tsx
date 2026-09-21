'use client';

import { products } from '@/data/products';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export function ProductCard({ product }: { product: typeof products[0] }) {
  return (
    <ScrollReveal>
      <Link
        href={`/products/${product.slug}`}
        className="group block bg-white rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-technical-teal/30 hover:-translate-y-1"
      >
        <div className="aspect-[4/3] bg-gradient-to-br from-light to-white relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-20 w-20 rounded-full bg-industrial-blue/10 flex items-center justify-center group-hover:bg-technical-teal/10 transition-colors">
              <svg className="h-10 w-10 text-industrial-blue group-hover:text-technical-teal transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
              </svg>
            </div>
          </div>
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-industrial-blue">
              {product.category}
            </span>
          </div>
          {product.isSample && (
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center rounded-full bg-safety-amber/90 px-3 py-1 text-xs font-medium text-deep-navy">
                Sample
              </span>
            </div>
          )}
        </div>
        <div className="p-6">
          <h3 className="text-lg font-bold text-deep-navy mb-2 group-hover:text-technical-teal transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-secondary-text leading-relaxed mb-4">
            {product.shortDescription}
          </p>
          <div className="flex items-center gap-2 text-sm font-semibold text-technical-teal group-hover:gap-3 transition-all">
            <span>View Details</span>
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </Link>
    </ScrollReveal>
  );
}
