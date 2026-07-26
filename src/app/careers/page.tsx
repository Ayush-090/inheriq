'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SectionWrapper, GradientText, GlowCard, CursorGlow, StaggerContainer, StaggerItem } from '@/components/ui';
import { motion } from 'framer-motion';
import { Briefcase, ArrowRight, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';

const openRoles = [
  { title: 'Senior AI Engineer', location: 'Remote (India)', type: 'Full-time', department: 'Engineering' },
  { title: 'Full Stack Developer', location: 'Remote (India)', type: 'Full-time', department: 'Engineering' },
  { title: 'NLP Specialist (Hindi/Regional)', location: 'Remote (India)', type: 'Full-time', department: 'AI Research' },
  { title: 'Product Designer', location: 'Remote (India)', type: 'Full-time', department: 'Design' },
  { title: 'Customer Success Manager', location: 'Remote (India)', type: 'Full-time', department: 'Operations' },
  { title: 'Growth Marketing Lead', location: 'Remote (India)', type: 'Full-time', department: 'Marketing' },
];

export default function CareersPage() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main className="relative z-10 pt-24">
        <SectionWrapper>
          <div className="container-custom text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-white/[0.03] text-sm mb-6"
            >
              <Briefcase className="w-4 h-4 text-accent" />
              <span className="text-text-secondary">We&apos;re Hiring</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold font-display tracking-tight mb-6"
            >
              Build the Future of{' '}
              <GradientText>Work in India</GradientText>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-text-secondary"
            >
              Join our mission to give 63 million Indian businesses access to the world&apos;s best AI workforce.
            </motion.p>
          </div>
        </SectionWrapper>

        <SectionWrapper>
          <div className="container-custom max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold font-display mb-8">Open Positions</h2>
            <StaggerContainer className="space-y-4">
              {openRoles.map((role) => (
                <StaggerItem key={role.title}>
                  <GlowCard glowColor="#5B8CFF">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-bold mb-1">{role.title}</h3>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-text-secondary">
                          <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{role.location}</span>
                          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{role.type}</span>
                          <span className="px-2 py-0.5 rounded-md text-xs bg-accent/10 text-accent">{role.department}</span>
                        </div>
                      </div>
                      <Link
                        href="/contact"
                        className="btn-secondary text-sm px-5 py-2.5 shrink-0 flex items-center gap-2"
                      >
                        Apply <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </GlowCard>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <div className="mt-12 text-center text-text-secondary text-sm">
              Don&apos;t see a role that fits?{' '}
              <Link href="/contact" className="text-accent hover:underline">
                Send us your resume
              </Link>{' '}
              — we&apos;re always looking for exceptional people.
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
