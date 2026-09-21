import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { ScrollReveal } from '@/components/ScrollReveal';
import { SectionHeading } from '@/components/SectionHeading';
import { CTASection } from '@/components/CTASection';
import { articles } from '@/data/articles';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface ArticlePageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return {};
  return {
    title: `${article.title} | Global Leisure Experts LLC`,
    description: article.excerpt,
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const safeArticle = article;

  return (
    <>
      <Header />
      <WhatsAppButton />

      <main className="pt-16 lg:pt-20">
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <Link href="/resources/articles" className="inline-flex items-center gap-2 text-sm text-secondary-text hover:text-technical-teal mb-8">
              <ArrowLeft className="h-4 w-4" />
              Back to Articles
            </Link>

            <ScrollReveal>
              <div className="mb-8">
                <span className="inline-flex items-center rounded-full bg-light px-3 py-1 text-xs font-medium text-industrial-blue">
                  {safeArticle.category}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-deep-navy mb-4">
                {safeArticle.title}
              </h1>
              <div className="flex items-center gap-4 text-sm text-secondary-text mb-8">
                <span>{safeArticle.date}</span>
                <span>•</span>
                <span>{safeArticle.readTime}</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="prose prose-lg max-w-none">
                {safeArticle.content.split('\n').map((paragraph, i) => {
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={i} className="text-2xl font-bold text-deep-navy mt-8 mb-4">
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  }
                  if (paragraph.startsWith('- ')) {
                    return (
                      <li key={i} className="text-secondary-text ml-4">
                        {paragraph.replace('- ', '')}
                      </li>
                    );
                  }
                  if (paragraph.trim() === '') {
                    return <br key={i} />;
                  }
                  return (
                    <p key={i} className="text-secondary-text leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </>
  );
}
