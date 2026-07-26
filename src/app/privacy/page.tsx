import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export const metadata = {
  title: 'Privacy Policy — Inheriq',
  description: 'Inheriq Privacy Policy. Learn how we collect, use, and protect your data.',
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="relative z-10 pt-32 pb-20">
        <div className="container-custom max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold font-display mb-4">Privacy Policy</h1>
          <p className="text-text-secondary mb-10 text-sm">Last updated: July 2026</p>

          <div className="prose prose-invert prose-sm max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-bold mb-3">1. Information We Collect</h2>
              <p className="text-text-secondary leading-relaxed">
                We collect information you provide directly to us, including your name, email address,
                phone number, business name, and any other information you choose to provide when you
                create an account, contact us, or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">2. How We Use Your Information</h2>
              <p className="text-text-secondary leading-relaxed">
                We use the information we collect to provide, maintain, and improve our services,
                process transactions, send communications, and personalize your experience with
                our AI workforce platform.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">3. Data Security</h2>
              <p className="text-text-secondary leading-relaxed">
                We implement bank-grade encryption and security measures to protect your personal
                information. All data is stored on Indian servers and never leaves the country.
                We are SOC 2 compliant and follow all Indian data protection regulations.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">4. Data Sharing</h2>
              <p className="text-text-secondary leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties.
                We may share information with service providers who assist us in operating our
                platform, subject to strict confidentiality agreements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">5. Your Rights</h2>
              <p className="text-text-secondary leading-relaxed">
                You have the right to access, correct, or delete your personal information at any time.
                You may also request a copy of your data or ask us to stop processing your information.
                Contact us at privacy@inheriq.com to exercise these rights.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">6. Cookies</h2>
              <p className="text-text-secondary leading-relaxed">
                We use essential cookies to ensure our website functions properly and analytics
                cookies to understand how visitors interact with our site. You can control cookie
                settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">7. Contact Us</h2>
              <p className="text-text-secondary leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:privacy@inheriq.com" className="text-accent hover:underline">
                  privacy@inheriq.com
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
