import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { ScrollReveal } from '@/components/ScrollReveal';
import { SectionHeading } from '@/components/SectionHeading';
import { ProductCard } from '@/components/ProductCard';
import { QuoteRequestForm } from '@/components/forms/QuoteRequestForm';
import { products } from '@/data/products';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface ProductPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return {};
  return {
    title: `${product.name} | Global Leisure Experts LLC`,
    description: product.shortDescription,
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <>
      <Header />
      <WhatsAppButton />

      <main className="pt-16 lg:pt-20">
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link href="/products" className="inline-flex items-center gap-2 text-sm text-secondary-text hover:text-technical-teal mb-8">
              <ArrowLeft className="h-4 w-4" />
              Back to Products
            </Link>

            <div className="grid lg:grid-cols-2 gap-12">
              <ScrollReveal>
                <div className="aspect-[4/3] bg-gradient-to-br from-light to-white rounded-3xl border border-border relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-32 w-32 rounded-full bg-industrial-blue/10 flex items-center justify-center">
                      <svg className="h-16 w-16 text-industrial-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                      </svg>
                    </div>
                  </div>
                  {product.isSample && (
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center rounded-full bg-safety-amber/90 px-3 py-1 text-xs font-medium text-deep-navy">
                        Sample
                      </span>
                    </div>
                  )}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="mb-4">
                  <span className="inline-flex items-center rounded-full bg-light px-3 py-1 text-xs font-medium text-industrial-blue">
                    {product.category}
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-deep-navy mb-4">
                  {product.name}
                </h1>
                <p className="text-lg text-secondary-text leading-relaxed mb-8">
                  {product.technicalOverview}
                </p>

                <div className="mb-8">
                  <h3 className="text-lg font-bold text-deep-navy mb-4">Specifications</h3>
                  <div className="bg-light rounded-xl border border-border overflow-hidden">
                    <table className="w-full text-sm">
                      <tbody>
                        {Object.entries(product.specifications).map(([key, value]) => (
                          <tr key={key} className="border-b border-border last:border-b-0">
                            <td className="px-4 py-3 font-medium text-primary-text w-1/3">{key}</td>
                            <td className="px-4 py-3 text-secondary-text">{value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-bold text-deep-navy mb-4">Applications</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((app) => (
                      <span key={app} className="inline-flex items-center rounded-full bg-light px-3 py-1.5 text-xs font-medium text-primary-text">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                <QuoteRequestForm productSlug={product.slug} />
              </ScrollReveal>
            </div>
          </div>
        </section>

        {relatedProducts.length > 0 && (
          <section className="py-16 lg:py-24 bg-light">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SectionHeading
                eyebrow="Related Products"
                title="You May Also Need"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
                {relatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}
