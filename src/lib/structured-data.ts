export function organizationJsonLd() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gle.ae';

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Global Leisure Experts LLC',
    url: baseUrl,
    description:
      'Professional industrial inspection, technical testing, analysis and consultancy solutions for businesses across the UAE.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'AE',
      addressLocality: 'United Arab Emirates',
    },
  };
}

export function serviceJsonLd({
  name,
  description,
  slug,
}: {
  name: string;
  description: string;
  slug: string;
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gle.ae';

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${baseUrl}/services/${slug}`,
    provider: {
      '@type': 'Organization',
      name: 'Global Leisure Experts LLC',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United Arab Emirates',
    },
  };
}

export function productJsonLd({
  name,
  description,
  slug,
  category,
}: {
  name: string;
  description: string;
  slug: string;
  category: string;
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gle.ae';

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    url: `${baseUrl}/products/${slug}`,
    category,
    brand: {
      '@type': 'Brand',
      name: 'Global Leisure Experts LLC',
    },
  };
}

export function faqPageJsonLd(faqs: { question: string; answer: string }[]) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gle.ae';

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
    url: `${baseUrl}/resources/faq`,
  };
}

export function breadcrumbListJsonLd(items: { name: string; href: string }[]) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gle.ae';

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.href.startsWith('http') ? item.href : `${baseUrl}${item.href}`,
    })),
  };
}
