'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ShieldCheck,
  Calendar,
  Zap,
} from 'lucide-react';
import { DemoModal } from '@/components/ui/DemoModal';

export function FinalCTA() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [roleInterest, setRoleInterest] = useState('all');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      setErrorMessage('Please provide a valid work email address.');
      return;
    }

    setIsSubmitting(true);
    setStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          company: company.trim() || undefined,
          helpNeeded: `Final CTA Ingestion: ${roleInterest.toUpperCase()}`,
          message: `Onboarding inquiry for ${roleInterest} workforce`,
          source: 'landing-page-final-cta',
          sourceType: 'onboarding',
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || 'Failed to submit onboarding request.');
      }

      setStatus('success');
    } catch (err: unknown) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50 border-b border-slate-200/80 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-500/10 rounded-full blur-[140px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Card */}
          <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 shadow-2xl border border-slate-800 relative overflow-hidden">
            {/* Top Badge */}
            <div className="text-center max-w-2xl mx-auto space-y-4 mb-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Ready to Transform Operations?</span>
              </div>

              {/* Exact Required Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
                Your Next Teammate <span className="text-blue-400">Could Be AI.</span>
              </h2>

              {/* Supporting Text */}
              <p className="text-base text-slate-300 leading-relaxed max-w-xl mx-auto">
                Explore specialized AI employees that handle sales, customer inquiries, HR, billing, and growth marketing around the clock. Keep your team in complete control with human approval checkpoints.
              </p>
            </div>

            {/* Inline Working Conversion Form */}
            <div className="max-w-xl mx-auto bg-slate-950/80 rounded-2xl border border-slate-800 p-6 sm:p-7 shadow-xl">
              {status === 'success' ? (
                <div className="text-center py-6 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-display">
                    Thank You, {name}!
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed max-w-md mx-auto">
                    Your request has been received. Our team will prepare a tailored walkthrough for <strong className="text-blue-400">{roleInterest.toUpperCase()}</strong> and reach out to <strong className="text-white">{email}</strong> within 1 business day.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setStatus('idle');
                      setName('');
                      setEmail('');
                      setCompany('');
                    }}
                    className="text-xs text-blue-400 hover:text-blue-300 font-semibold underline pt-2"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-red-950/60 border border-red-800 text-red-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="final-name" className="block text-xs font-semibold text-slate-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        id="final-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Rohan Sharma"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="final-email" className="block text-xs font-semibold text-slate-300 mb-1">
                        Work Email *
                      </label>
                      <input
                        id="final-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="rohan@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="final-company" className="block text-xs font-semibold text-slate-300 mb-1">
                        Company Name
                      </label>
                      <input
                        id="final-company"
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Sharma Industries"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="final-role" className="block text-xs font-semibold text-slate-300 mb-1">
                        Primary Role Needed
                      </label>
                      <select
                        id="final-role"
                        value={roleInterest}
                        onChange={(e) => setRoleInterest(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="all">Full Workforce (All 5 Roles)</option>
                        <option value="sales">Sales & Lead Qualification</option>
                        <option value="support">Customer Support (24/7)</option>
                        <option value="hr">HR & Staff Attendance</option>
                        <option value="finance">Finance & Invoice Recovery</option>
                        <option value="marketing">Marketing & WhatsApp Growth</option>
                      </select>
                    </div>
                  </div>

                  {/* Dual Action Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full sm:flex-1 py-3 text-xs justify-center shadow-lg shadow-blue-500/30"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Get Started</span>
                          <ArrowRight className="w-3.5 h-3.5 ml-1" />
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => setIsDemoModalOpen(true)}
                      className="w-full sm:w-auto py-3 px-5 rounded-xl border border-slate-700 text-xs font-semibold text-slate-200 hover:text-white hover:bg-slate-800 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Calendar className="w-3.5 h-3.5 text-blue-400" />
                      <span>Book a Demo</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Bottom Trust Row */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                7-day free trial demo
              </span>
              <span className="text-slate-700">•</span>
              <span>No credit card required</span>
              <span className="text-slate-700">•</span>
              <span className="flex items-center gap-1 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                Human-in-the-loop guarantee
              </span>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800/60 text-center text-[11px] text-slate-400">
              <span>Direct Inquiries:{' '}</span>
              <a href="mailto:admin@inheriq.in" className="text-blue-400 font-semibold hover:underline">admin@inheriq.in</a>
              <span> · Call:{' '}</span>
              <a href="tel:+916201328257" className="text-blue-400 font-semibold hover:underline">+91 6201328257</a>
              <span> / </span>
              <a href="tel:+91931688410" className="text-blue-400 font-semibold hover:underline">+91 931688410</a>
              <span> · Team: Ayush Bhardwaj &amp; Raghavendra Singh</span>
            </div>
          </div>
        </div>
      </div>

      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        defaultAgent={roleInterest}
      />
    </section>
  );
}
