import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SectionHeading } from '@/components/SectionHeading';
import { InspectionRequestForm } from '@/components/forms/InspectionRequestForm';

export const metadata = {
  title: 'Request an Inspection | Global Leisure Experts LLC',
  description: 'Submit your industrial inspection request. Our technical team will review your requirements.',
};

export default function RequestInspectionPage() {
  return (
    <>
      <Header />
      <WhatsAppButton />

      <main className="pt-16 lg:pt-20">
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Get Started"
              title="Request an Inspection"
              description="Submit your requirements and our technical team will review your request."
            />

            <div className="mt-12 bg-light rounded-2xl border border-border p-6 lg:p-8">
              <InspectionRequestForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
