'use client';

import { motion } from 'framer-motion';
import { SectionWrapper, SectionHeading, GlowCard } from '@/components/ui';
import { BRAIN_AI_FEATURES } from '@/lib/constants';
import { Brain, Database, CheckCircle2 } from 'lucide-react';

export function BrainAI() {
  return (
    <SectionWrapper id="brain-ai" className="relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10">
        <SectionHeading
          badge="Centralized Intelligence"
          title="Powered by Inheriq Brain AI"
          titleGradient="Inheriq Brain AI"
          subtitle="Train once on your business catalog, prices and rules. All 5 AI employees instantly share the same brain."
        />

        <div className="grid lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          {/* Left Feature Cards */}
          <div className="lg:col-span-7 space-y-4">
            {BRAIN_AI_FEATURES.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                >
                  <GlowCard glowColor={feat.color} className="p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 mt-0.5"
                        style={{ backgroundColor: `${feat.color}15` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: feat.color }} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-1.5">{feat.title}</h3>
                        <p className="text-sm text-text-secondary leading-relaxed">{feat.description}</p>
                      </div>
                    </div>
                  </GlowCard>
                </motion.div>
              );
            })}
          </div>

          {/* Right Visual Brain Graphic */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card p-8 text-center relative overflow-hidden border-accent/20"
            >
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-accent/30 animate-pulse">
                <Brain className="w-10 h-10 text-white" />
              </div>

              <h3 className="text-xl font-bold font-display mb-2">Inheriq Central Brain</h3>
              <p className="text-xs text-text-secondary mb-6">
                Connected in real-time to your WhatsApp, Phone, Tally and Google Calendar
              </p>

              {/* Connected Agent Badges */}
              <div className="space-y-2">
                {[
                  { name: 'Arjun (Sales)', role: 'Lead Qualification and Booking' },
                  { name: 'Kavya (HR)', role: 'Attendance and Payslips' },
                  { name: 'Rohan (Marketing)', role: 'WhatsApp Campaigns' },
                  { name: 'Priya (Support)', role: '24/7 Voice and Chat Support' },
                  { name: 'Vikram (Finance)', role: 'GST Invoicing and Payments' },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-border text-left"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-success animate-ping" />
                      <span className="text-xs font-semibold text-white">{item.name}</span>
                    </div>
                    <span className="text-[10px] text-text-secondary">{item.role}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs text-text-muted">
                <span className="flex items-center gap-1">
                  <Database className="w-3.5 h-3.5 text-accent" /> 100% Encrypted
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-success" /> DPDP Compliant
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
