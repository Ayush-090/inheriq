'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SectionWrapper, GradientText, CursorGlow, GlowCard } from '@/components/ui';
import { motion } from 'framer-motion';
import { Play, Calendar, Check, Shield, ArrowRight, Clock, Loader2, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { getGoogleFormUrl } from '@/lib/site-config';

export default function DemoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const openDemoForm = () => {
    window.open(getGoogleFormUrl(), '_blank', 'noopener,noreferrer');
  };

  const handleBookDemo = async () => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Demo request',
          email: 'ayushbhardwaj942006@gmail.com',
          message: 'Book demo CTA clicked',
          source: 'demo-page',
        }),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      setSubmitStatus('success');
      openDemoForm();
    } catch {
      setSubmitStatus('error');
      openDemoForm();
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
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-white/[0.03] text-sm mb-6"
                >
                  <Play className="w-4 h-4 text-accent" />
                  <span className="text-text-secondary">See It In Action</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl sm:text-5xl font-bold font-display tracking-tight mb-6"
                >
                  See Your{' '}
                  <GradientText>AI Workforce</GradientText>{' '}
                  in Action
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg text-text-secondary leading-relaxed mb-8"
                >
                  Book a personalized 15-minute demo. We&apos;ll show you exactly how Inheriq 
                  will work for your specific business.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-4 mb-8"
                >
                  {[
                    'See all 5 AI agents working live',
                    'Customized to your industry',
                    'Ask any question — no pressure',
                    'Get your 7-day free trial activated',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-success shrink-0" />
                      <span className="text-text-secondary">{item}</span>
                    </div>
                  ))}
                </motion.div>

                <div className="flex items-center gap-4 text-sm text-text-muted">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    15 minutes
                  </div>
                  <div className="w-px h-4 bg-border" />
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    No commitment
                  </div>
                </div>
              </div>

              {/* Right — Demo booking card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <GlowCard glowColor="#5B8CFF" hover={false} className="p-8">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                      <Calendar className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold font-display mb-3">Book Your Demo</h3>
                    <p className="text-sm text-text-secondary mb-8">
                      Tell us what you need and our team will follow up to arrange your personalized demo.
                    </p>

                    <div className="bg-white/[0.03] rounded-2xl border border-border overflow-hidden mb-6 p-6">
                      <button
                        type="button"
                        onClick={handleBookDemo}
                        disabled={isSubmitting}
                        className="btn-primary w-full justify-center gap-2"
                      >
                        {isSubmitting ? <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</> : <>Book your demo <Calendar className="w-4 h-4" /></>}
                      </button>
                      {submitStatus === 'success' && (
                        <p className="mt-4 flex items-center justify-center gap-2 text-sm text-success">
                          <CheckCircle2 className="w-4 h-4" /> Thanks! Your onboarding request has been received.
                        </p>
                      )}
                      {submitStatus === 'error' && (
                        <p className="mt-4 text-sm text-red-400">Something went wrong. Please try again.</p>
                      )}
                    </div>

                    <p className="text-xs text-text-muted">
                      Or email directly at{' '}
                      <a href="mailto:ayushbhardwaj942006@gmail.com" className="text-accent hover:underline">
                        ayushbhardwaj942006@gmail.com
                      </a>
                    </p>
                  </div>
                </GlowCard>
              </motion.div>
            </div>
          </div>
        </SectionWrapper>

        {/* Quick start CTA */}
        <SectionWrapper>
          <div className="container-custom text-center">
            <h2 className="text-2xl sm:text-3xl font-bold font-display mb-4">
              Don&apos;t want to wait?
            </h2>
            <p className="text-text-secondary mb-6">
              Start your 7-day free trial right now. No demo needed.
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              <span className="flex items-center gap-2">
                Start Free Now <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
