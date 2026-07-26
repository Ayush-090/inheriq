'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SectionWrapper, SectionHeading, GradientText, GlowCard, StaggerContainer, StaggerItem, CursorGlow } from '@/components/ui';
import { AGENTS } from '@/lib/constants';
import { motion } from 'framer-motion';
import { Check, Globe, Zap, ArrowRight, Workflow, BarChart3 } from 'lucide-react';
import Link from 'next/link';

export default function AgentsPage() {
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
              <span className="text-text-secondary">5 Specialized AI Agents</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight mb-6"
            >
              Your Complete{' '}
              <GradientText>AI Workforce</GradientText>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-text-secondary max-w-2xl mx-auto"
            >
              Each agent is a specialist. Together, they run your entire business operations — 24/7, in Hindi and English.
            </motion.p>
          </div>
        </SectionWrapper>

        {/* Individual Agent Sections */}
        {AGENTS.map((agent, agentIndex) => {
          const Icon = agent.icon;
          return (
            <SectionWrapper key={agent.id} id={agent.id}>
              <div className="container-custom">
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${agentIndex % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                  {/* Info */}
                  <div className={agentIndex % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center gap-3 mb-5">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center"
                        style={{ backgroundColor: `${agent.color}15` }}
                      >
                        <Icon className="w-7 h-7" style={{ color: agent.color }} />
                      </div>
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-bold font-display">{agent.name}</h2>
                        <p className="text-sm text-text-secondary">{agent.description}</p>
                      </div>
                    </div>

                    {/* Capabilities */}
                    <div className="space-y-3 mb-8">
                      {agent.capabilities.map((cap) => (
                        <div key={cap} className="flex items-start gap-3">
                          <Check className="w-5 h-5 mt-0.5 shrink-0" style={{ color: agent.color }} />
                          <span className="text-text-secondary">{cap}</span>
                        </div>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3 mb-8">
                      {Object.entries(agent.stats).map(([key, val]) => (
                        <div key={key} className="glass-card p-4 text-center">
                          <p className="text-lg font-bold" style={{ color: agent.color }}>{val}</p>
                          <p className="text-xs text-text-secondary mt-1 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                        </div>
                      ))}
                    </div>

                    <Link href="/demo" className="btn-primary inline-flex items-center gap-2">
                      <span className="flex items-center gap-2">
                        Try {agent.name} Free <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                  </div>

                  {/* Visual card */}
                  <div className={agentIndex % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <GlowCard glowColor={agent.color} hover={false} className="p-8">
                      {/* Integrations */}
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Workflow className="w-4 h-4 text-text-secondary" />
                          <span className="text-sm font-medium">Integrations</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {agent.integrations.map((int_name) => (
                            <span
                              key={int_name}
                              className="px-3 py-1.5 rounded-lg text-xs font-medium border border-border bg-white/[0.02]"
                            >
                              {int_name}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Languages */}
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Globe className="w-4 h-4 text-text-secondary" />
                          <span className="text-sm font-medium">Languages</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {agent.languages.map((lang) => (
                            <span
                              key={lang}
                              className="px-3 py-1.5 rounded-lg text-xs font-medium border border-border bg-white/[0.02]"
                              style={{ borderColor: `${agent.color}20` }}
                            >
                              {lang}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* ROI */}
                      <div className="p-4 rounded-xl border border-border bg-white/[0.02]">
                        <div className="flex items-center gap-2 mb-2">
                          <BarChart3 className="w-4 h-4" style={{ color: agent.color }} />
                          <span className="text-sm font-medium">Expected ROI</span>
                        </div>
                        <p className="text-sm text-text-secondary">
                          Businesses typically see a{' '}
                          <span className="font-semibold text-white">3-5x return</span>{' '}
                          within the first 30 days of deploying the {agent.name}.
                        </p>
                      </div>
                    </GlowCard>
                  </div>
                </div>
              </div>
            </SectionWrapper>
          );
        })}

        {/* CTA */}
        <SectionWrapper>
          <div className="container-custom text-center">
            <div className="relative">
              <div className="absolute -inset-20 bg-accent/[0.05] blur-[120px] rounded-full" />
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl font-bold font-display mb-6">
                  Ready to Deploy Your{' '}
                  <GradientText>AI Team?</GradientText>
                </h2>
                <p className="text-text-secondary mb-8 max-w-xl mx-auto">
                  Start with one agent or deploy all five. Your AI workforce begins working within 5 minutes.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link href="/contact" className="btn-primary text-base px-8 py-4">
                    <span className="flex items-center gap-2">Start Free <ArrowRight className="w-5 h-5" /></span>
                  </Link>
                  <Link href="/demo" className="btn-secondary text-base px-8 py-4">
                    Book Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
