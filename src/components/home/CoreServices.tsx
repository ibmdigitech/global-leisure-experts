'use client';

import { ScrollReveal } from '@/components/ScrollReveal';
import { ServiceCard } from '@/components/ServiceCard';
import { services } from '@/data/services';

export function CoreServices() {
  return (
    <section className="py-16 lg:py-24 bg-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-12">
          {services.map((service) => (
            <ScrollReveal key={service.id}>
              <ServiceCard service={service} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
