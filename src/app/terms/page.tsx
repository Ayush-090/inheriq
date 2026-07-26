import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export const metadata = {
  title: 'Terms of Service — Inheriq',
  description: 'Inheriq Terms of Service. Read our terms and conditions for using the platform.',
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="relative z-10 pt-32 pb-20">
        <div className="container-custom max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold font-display mb-4">Terms of Service</h1>
          <p className="text-text-secondary mb-10 text-sm">Last updated: July 2026</p>

          <div className="prose prose-invert prose-sm max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-bold mb-3">1. Acceptance of Terms</h2>
              <p className="text-text-secondary leading-relaxed">
                By accessing or using the Inheriq platform, you agree to be bound by these Terms
                of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">2. Description of Service</h2>
              <p className="text-text-secondary leading-relaxed">
                Inheriq provides an AI workforce platform that includes virtual AI agents for
                sales, HR, marketing, customer support, and finance operations. Our services
                are designed for small and medium businesses in India.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">3. Account Registration</h2>
              <p className="text-text-secondary leading-relaxed">
                To use our services, you must create an account and provide accurate, complete
                information. You are responsible for maintaining the confidentiality of your
                account credentials and for all activities under your account.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">4. Payment Terms</h2>
              <p className="text-text-secondary leading-relaxed">
                Subscription fees are billed monthly or annually as selected. All prices are in
                Indian Rupees (INR) and inclusive of applicable taxes. Refunds are processed as
                per our 7-day trial policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">5. Acceptable Use</h2>
              <p className="text-text-secondary leading-relaxed">
                You agree to use Inheriq only for lawful business purposes. You may not use our
                AI agents for spam, harassment, or any activity that violates applicable laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">6. Intellectual Property</h2>
              <p className="text-text-secondary leading-relaxed">
                All content, features, and functionality of the Inheriq platform are owned by
                Inheriq and are protected by intellectual property laws. Your business data
                remains your property at all times.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">7. Limitation of Liability</h2>
              <p className="text-text-secondary leading-relaxed">
                Inheriq shall not be liable for any indirect, incidental, or consequential
                damages arising from your use of our services. Our total liability shall not
                exceed the amount paid by you in the preceding 12 months.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">8. Governing Law</h2>
              <p className="text-text-secondary leading-relaxed">
                These terms shall be governed by the laws of India. Any disputes shall be
                subject to the exclusive jurisdiction of courts in India.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">9. Contact</h2>
              <p className="text-text-secondary leading-relaxed">
                For questions about these Terms, please contact us at{' '}
                <a href="mailto:legal@inheriq.com" className="text-accent hover:underline">
                  legal@inheriq.com
                </a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
