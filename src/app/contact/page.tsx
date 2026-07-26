'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SectionWrapper, GradientText, CursorGlow } from '@/components/ui';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, MessageSquare, ArrowRight, Calendar } from 'lucide-react';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '', email: '', phone: '', business: '', message: '', submitted: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, submitted: true }));
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
                    { icon: Mail, label: 'Email us', value: 'hello@inheriq.com' },
                    { icon: Phone, label: 'Call us', value: '+91 98765 43210' },
                    { icon: MapPin, label: 'Based in', value: 'India 🇮🇳' },
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
                          <p className="font-medium">{item.value}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Calendly placeholder */}
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
                  <button className="btn-secondary text-sm w-full flex items-center justify-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Open Calendar
                  </button>
                </motion.div>
              </div>

              {/* Right — Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                {formState.submitted ? (
                  <div className="glass-card p-10 text-center">
                    <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-5">
                      <Send className="w-7 h-7 text-success" />
                    </div>
                    <h3 className="text-2xl font-bold font-display mb-3">Message Sent!</h3>
                    <p className="text-text-secondary">
                      We&apos;ll get back to you within 2 hours. Check your WhatsApp and email.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-8 space-y-5">
                    <h3 className="text-lg font-bold mb-2">Send us a message</h3>

                    <div>
                      <label className="block text-sm text-text-secondary mb-2">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-border text-white placeholder:text-text-muted focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/20 transition-all"
                        placeholder="Rajesh Patel"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-text-secondary mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-border text-white placeholder:text-text-muted focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/20 transition-all"
                        placeholder="rajesh@business.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-text-secondary mb-2">Phone (WhatsApp)</label>
                      <input
                        type="tel"
                        value={formState.phone}
                        onChange={(e) => setFormState(prev => ({ ...prev, phone: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-border text-white placeholder:text-text-muted focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/20 transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-text-secondary mb-2">Business Type</label>
                      <input
                        type="text"
                        value={formState.business}
                        onChange={(e) => setFormState(prev => ({ ...prev, business: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-border text-white placeholder:text-text-muted focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/20 transition-all"
                        placeholder="e.g., Dental Clinic, Restaurant, Gym"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-text-secondary mb-2">Message</label>
                      <textarea
                        rows={4}
                        value={formState.message}
                        onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-border text-white placeholder:text-text-muted focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/20 transition-all resize-none"
                        placeholder="Tell us about your business and what you'd like to automate..."
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full py-3.5">
                      <span className="flex items-center justify-center gap-2">
                        Send Message <ArrowRight className="w-4 h-4" />
                      </span>
                    </button>

                    <p className="text-xs text-text-muted text-center">
                      We&apos;ll respond within 2 hours · No spam, ever
                    </p>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
