'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SectionWrapper, SectionHeading, GradientText, GlowCard, StaggerContainer, StaggerItem, CursorGlow } from '@/components/ui';
import { INDUSTRIES } from '@/lib/constants';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Zap } from 'lucide-react';
import Link from 'next/link';

const industryDetails = [
  {
    name: 'Healthcare & Clinics',
    workflows: [
      'Patient calls → AI books appointment → WhatsApp confirmation → Reminder before visit',
      'Missed appointment → AI follows up → Reschedules automatically',
      'Prescription ready → AI notifies patient via WhatsApp',
      'Monthly health camp → AI creates campaign → Sends to patient database',
    ],
  },
  {
    name: 'Restaurants & Cloud Kitchens',
    workflows: [
      'Customer inquiry → AI takes order details → Confirms via WhatsApp',
      'Delivery delayed → AI proactively updates customer',
      'Negative review → AI responds & offers resolution → Escalates if needed',
      'Weekend special → AI creates campaign → Sends to loyal customers',
    ],
  },
  {
    name: 'Retail & E-commerce',
    workflows: [
      'New order → AI confirms → Tracks delivery → Updates customer',
      'Low stock alert → AI notifies supplier → Creates purchase order',
      'Customer complaint → AI resolves → Offers replacement/refund',
      'Festive season → AI designs offers → Runs WhatsApp + social campaigns',
    ],
  },
  {
    name: 'Education & Coaching',
    workflows: [
      'Enrollment inquiry → AI qualifies → Schedules counseling session',
      'Fee due → AI sends reminder → Collects via UPI → Generates receipt',
      'Parent query → AI responds in preferred language → Shares progress',
      'New batch starting → AI campaigns to past leads → Books seats',
    ],
  },
  {
    name: 'Real Estate',
    workflows: [
      'Lead from portal → AI qualifies budget & location → Schedules site visit',
      'After site visit → AI follows up → Shares brochure → Handles objections',
      'Payment milestone → AI generates invoice → Sends reminder → Tracks collection',
      'New project launch → AI creates campaign → Targets qualified database',
    ],
  },
  {
    name: 'Professional Services',
    workflows: [
      'Client inquiry → AI schedules consultation → Sends calendar invite',
      'Project milestone → AI updates client → Shares deliverables',
      'Invoice due → AI sends reminder → Tracks payment → Generates report',
      'Referral program → AI asks for referrals → Rewards automatically',
    ],
  },
];

export default function IndustriesPage() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main className="relative z-10 pt-24">
        {/* Hero */}
        <SectionWrapper>
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-white/[0.03] text-sm mb-6"
            >
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-text-secondary">9+ Industries Served</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight mb-6"
            >
              Built for{' '}
              <GradientText>Your Industry</GradientText>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-text-secondary max-w-2xl mx-auto"
            >
              Pre-configured AI workflows for your specific industry. Your AI workforce understands your business from day one.
            </motion.p>
          </div>
        </SectionWrapper>

        {/* Industry cards overview */}
        <SectionWrapper>
          <div className="container-custom">
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {INDUSTRIES.map((industry) => {
                const Icon = industry.icon;
                return (
                  <StaggerItem key={industry.name}>
                    <GlowCard glowColor={industry.color} className="h-full">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                        style={{ backgroundColor: `${industry.color}12` }}
                      >
                        <Icon className="w-7 h-7" style={{ color: industry.color }} />
                      </div>
                      <h3 className="text-lg font-bold mb-2">{industry.name}</h3>
                      <p className="text-sm text-text-secondary leading-relaxed">{industry.description}</p>
                    </GlowCard>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </SectionWrapper>

        {/* Detailed workflows */}
        {industryDetails.map((detail, i) => (
          <SectionWrapper key={detail.name}>
            <div className="container-custom">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold font-display mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent text-sm font-bold">
                    {i + 1}
                  </span>
                  {detail.name}
                </h3>
                <div className="space-y-3">
                  {detail.workflows.map((workflow, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: j * 0.1 }}
                      className="glass-card p-4 flex items-start gap-3"
                    >
                      <Check className="w-5 h-5 text-success mt-0.5 shrink-0" />
                      <p className="text-sm text-text-secondary">{workflow}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </SectionWrapper>
        ))}

        {/* CTA */}
        <SectionWrapper>
          <div className="container-custom text-center">
            <h2 className="text-3xl sm:text-4xl font-bold font-display mb-6">
              Don&apos;t see your industry?{' '}
              <GradientText>Let&apos;s talk.</GradientText>
            </h2>
            <p className="text-text-secondary mb-8 max-w-xl mx-auto">
              Our AI workforce adapts to any business. Tell us about your industry and we&apos;ll build custom workflows for you.
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2 text-base px-8 py-4">
              <span className="flex items-center gap-2">Contact Us <ArrowRight className="w-5 h-5" /></span>
            </Link>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
