import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SectionHeading } from '@/components/SectionHeading';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found | Global Leisure Experts LLC',
};

export default function NotFound() {
  return (
    <>
      <Header />

      <main className="pt-16 lg:pt-20 flex-1 flex items-center">
        <section className="py-16 lg:py-24 bg-white w-full">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-md mx-auto">
              <h1 className="text-6xl sm:text-7xl font-bold text-deep-navy mb-4">404</h1>
              <SectionHeading
                eyebrow="Error"
                title="Page Not Found"
                description="The page you are looking for does not exist or has been moved."
              />
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full bg-technical-teal px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-industrial-blue mt-8"
              >
                <ArrowLeft className="h-4 w-4" />
                Return Home
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
