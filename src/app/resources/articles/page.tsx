import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { ScrollReveal } from '@/components/ScrollReveal';
import { SectionHeading } from '@/components/SectionHeading';
import { articles } from '@/data/articles';
import { ArrowLeft, BookOpen } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Articles | Global Leisure Experts LLC',
  description: 'Technical articles and insights on industrial inspection, testing, and consultancy.',
};

export default function ArticlesPage() {
  return (
    <>
      <Header />
      <WhatsAppButton />

      <main className="pt-16 lg:pt-20">
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link href="/resources" className="inline-flex items-center gap-2 text-sm text-secondary-text hover:text-technical-teal mb-8">
              <ArrowLeft className="h-4 w-4" />
              Back to Resources
            </Link>

            <SectionHeading
              eyebrow="Articles"
              title="Technical Articles & Insights"
              description="Technical articles and insights on industrial inspection, testing, and consultancy."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
              {articles.map((article, i) => (
                <ScrollReveal key={article.id} delay={i * 0.1}>
                  <Link
                    href={`/resources/articles/${article.slug}`}
                    className="block bg-light rounded-2xl border border-border p-6 lg:p-8 transition-all duration-300 hover:shadow-xl hover:border-technical-teal/30 hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <BookOpen className="h-5 w-5 text-technical-teal" />
                      <span className="text-xs text-secondary-text">{article.date}</span>
                      <span className="text-xs text-secondary-text">•</span>
                      <span className="text-xs text-secondary-text">{article.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-deep-navy mb-2">{article.title}</h3>
                    <p className="text-sm text-secondary-text leading-relaxed mb-4">{article.excerpt}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-technical-teal">
                      Read Article <ArrowLeft className="h-4 w-4 rotate-180" />
                    </span>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
