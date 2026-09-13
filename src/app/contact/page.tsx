'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SectionWrapper, GradientText, CursorGlow } from '@/components/ui';
import { motion } from 'framer-motion';
import { ExternalLink, Phone, Mail, MapPin, MessageSquare, Calendar, CheckCircle2, Loader2 } from 'lucide-react';
import { getGoogleFormUrl } from '@/lib/site-config';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleBookDemo = () => {
    window.open(getGoogleFormUrl(), '_blank', 'noopener,noreferrer');
  };

  const handleContactSubmit = async () => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Website visitor',
          email: 'ayushbhardwaj942006@gmail.com',
          message: 'Contact page CTA clicked',
          source: 'contact-page',
        }),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      setSubmitStatus('success');
      handleBookDemo();
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <CursorGlow />
      <Navbar />
      <main className="relative z-10 pt-24">
        <SectionWrapper>
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left — Info */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-white/[0.03] text-sm mb-6"
                >
                  <MessageSquare className="w-4 h-4 text-accent" />
                  <span className="text-text-secondary">Get in Touch</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl sm:text-5xl font-bold font-display tracking-tight mb-6"
                >
                  Let&apos;s Build Your{' '}
                  <GradientText>AI Workforce</GradientText>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg text-text-secondary leading-relaxed mb-10"
                >
                  Whether you want to start free, book a demo, or just ask questions — 
                  we&apos;re here to help. Our team responds within 2 hours.
                </motion.p>

                <div className="space-y-5">
                  {[
                    { icon: Mail, label: 'Email', value: 'ayushbhardwaj942006@gmail.com', href: 'mailto:ayushbhardwaj942006@gmail.com' },
                    { icon: Phone, label: 'Phone', value: '+91 6201328257', href: 'tel:+916201328257' },
                    { icon: MapPin, label: 'Founder', value: 'Ayush Bhardwaj', href: '/' },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center gap-4"
                      >
                        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <p className="text-sm text-text-secondary">{item.label}</p>
                          {item.href === '/' ? (
                            <p className="font-medium">{item.value}</p>
                          ) : (
                            <a href={item.href} className="font-medium text-white hover:text-accent transition-colors">
                              {item.value}
                            </a>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Demo link */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-10 glass-card p-6"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Calendar className="w-5 h-5 text-accent" />
                    <h3 className="font-semibold">Book a Demo Call</h3>
                  </div>
                  <p className="text-sm text-text-secondary mb-4">
                    Schedule a 15-minute demo to see how Inheriq can transform your business operations.
                  </p>
                  <button
                    type="button"
                    onClick={handleBookDemo}
                    className="btn-secondary text-sm w-full flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    Book via Form
                  </button>
                </motion.div>
              </div>

              {/* Right — Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="glass-card overflow-hidden">
                  <div className="p-6 sm:p-8 pb-4">
                    <h3 className="text-lg font-bold mb-2">Tell us about your business</h3>
                    <p className="text-sm text-text-secondary">
                      Complete the form and our team will get back to you within 2 hours.
                    </p>
                  </div>
                  <div className="p-6 sm:p-8">
                    <div className="rounded-2xl border border-dashed border-border bg-white/[0.02] p-6 text-center">
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                        <MessageSquare className="h-5 w-5" />
                      </div>
                      <h4 className="mt-4 text-xl font-semibold">Start your onboarding</h4>
                      <p className="mt-2 text-sm text-text-secondary">
                        We use a Google Form to collect onboarding details in a structured way.
                      </p>
                      <button
                        type="button"
                        onClick={handleContactSubmit}
                        disabled={isSubmitting}
                        className="btn-primary mt-6 w-full justify-center gap-2"
                      >
                        {isSubmitting ? <><Loader2 className="h-4 w-4 animate-spin" /> Submitting...</> : <>Open onboarding form <ExternalLink className="h-4 w-4" /></>}
                      </button>
                      {submitStatus === 'success' && (
                        <p className="mt-4 flex items-center justify-center gap-2 text-sm text-success">
                          <CheckCircle2 className="h-4 w-4" /> Thanks! Your onboarding request is being sent.
                        </p>
                      )}
                      {submitStatus === 'error' && (
                        <p className="mt-4 text-sm text-red-400">Something went wrong. Please try again.</p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
