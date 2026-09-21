import { MetadataRoute } from 'next';
import { services } from '@/data/services';
import { products } from '@/data/products';
import { articles } from '@/data/articles';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gle.ae';

  const staticPages = [
    { url: baseUrl, priority: 1, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/about`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/services`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/industries`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/products`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/projects`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/resources`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/request-inspection`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/contact`, priority: 0.8, changeFrequency: 'monthly' as const },
  ];

  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    priority: 0.8 as const,
    changeFrequency: 'monthly' as const,
  }));

  const productPages = products.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    priority: 0.7 as const,
    changeFrequency: 'weekly' as const,
  }));

  const articlePages = articles.map((article) => ({
    url: `${baseUrl}/resources/articles/${article.slug}`,
    priority: 0.6 as const,
    changeFrequency: 'monthly' as const,
  }));

  const resourcePages = [
    { url: `${baseUrl}/resources/company-profile`, priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/resources/articles`, priority: 0.6, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/resources/faq`, priority: 0.6, changeFrequency: 'monthly' as const },
  ];

  return [
    ...staticPages,
    ...servicePages,
    ...productPages,
    ...resourcePages,
    ...articlePages,
    {
      url: `${baseUrl}/privacy-policy`,
      priority: 0.3,
      changeFrequency: 'yearly',
    },
    {
      url: `${baseUrl}/terms`,
      priority: 0.3,
      changeFrequency: 'yearly',
    },
  ];
}
