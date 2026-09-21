'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { faqs } from '@/data/faqs';

export function FAQAccordion() {
  const [openId, setOpenId] = useState<string | null>(null);
  const categories = Array.from(new Set(faqs.map((f) => f.category)));

  return (
    <div className="mt-12 space-y-4">
      {categories.map((category) => (
        <div key={category}>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-technical-teal mb-4">{category}</h3>
          <div className="space-y-3">
            {faqs.filter((f) => f.category === category).map((faq) => (
              <div key={faq.id} className="bg-light rounded-xl border border-border overflow-hidden">
                <button
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                  className="w-full flex items-center justify-between p-4 text-left"
                  aria-expanded={openId === faq.id}
                >
                  <span className="text-sm font-medium text-primary-text pr-4">{faq.question}</span>
                  {openId === faq.id ? (
                    <ChevronUp className="h-5 w-5 text-secondary-text shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-secondary-text shrink-0" />
                  )}
                </button>
                {openId === faq.id && (
                  <div className="px-4 pb-4">
                    <p className="text-sm text-secondary-text leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
