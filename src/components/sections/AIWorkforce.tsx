'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper, SectionHeading, GlowCard, StaggerContainer, StaggerItem, GradientText } from '@/components/ui';
import { AGENTS } from '@/lib/constants';
import { Check, ArrowRight, Sparkles, MessageSquare, Zap, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export function AIWorkforce() {
  const [selectedAgent, setSelectedAgent] = useState(0);
  const activeWorker = AGENTS[selectedAgent];

  return (
    <SectionWrapper id="ai-workforce">
      <div className="container-custom">
        <SectionHeading
          badge="Meet Your Digital Team"
          title="Meet Your 5 AI Employees"
          titleGradient="5 AI Employees"
          subtitle="Real business roles with specialized skills. Hire Arjun, Kavya, Rohan, Priya & Vikram to run your business 24/7."
        />

        {/* Worker Selector Pills */}
        <div className="flex gap-2 mb-10 overflow-x-auto pb-2 justify-start sm:justify-center">
          {AGENTS.map((agent, i) => {
            const Icon = agent.icon;
            return (
              <button
                key={agent.id}
                onClick={() => setSelectedAgent(i)}
                className={`px-4 py-3 rounded-2xl text-sm font-semibold whitespace-nowrap transition-all duration-300 flex items-center gap-3 border ${
                  i === selectedAgent
                    ? 'bg-accent/15 border-accent text-white shadow-lg shadow-accent/20 scale-[1.02]'
                    : 'bg-bg-card border-border text-text-secondary hover:border-border-hover hover:text-white'
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-xl bg-gradient-to-br ${agent.avatarBg} flex items-center justify-center text-xs text-white font-bold shadow-sm`}
                >
                  {agent.avatarInitials}
                </div>
                <span>{agent.personaName}</span>
                <span className="text-xs opacity-60 font-normal">({agent.roleTitle.split('&')[0]})</span>
              </button>
            );
          })}
        </div>

        {/* Highlighted Selected Worker Detail Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeWorker.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="glass-card p-6 sm:p-10 mb-16 border-accent/20 relative overflow-hidden"
          >
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Left Worker Persona Info */}
              <div className="lg:col-span-6 space-y-5">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${activeWorker.avatarBg} flex items-center justify-center text-xl font-bold text-white shadow-xl shadow-accent/20 shrink-0`}
                  >
                    {activeWorker.avatarInitials}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-2xl font-bold font-display">{activeWorker.name}</h3>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-success/15 text-success border border-success/30">
                        Available 24/7
                      </span>
                    </div>
                    <p className="text-sm text-text-secondary mt-0.5">{activeWorker.tagline}</p>
                  </div>
                </div>

                <p className="text-sm text-text-secondary leading-relaxed">
                  {activeWorker.description}
                </p>

                {/* Capabilities list */}
                <div className="space-y-2.5 pt-2">
                  {activeWorker.capabilities.map((cap) => (
                    <div key={cap} className="flex items-start gap-2.5 text-sm">
                      <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: activeWorker.color }} />
                      <span className="text-text-primary">{cap}</span>
                    </div>
                  ))}
                </div>

                {/* Language Pills */}
                <div className="flex items-center gap-2 flex-wrap pt-2">
                  <span className="text-xs text-text-muted font-medium">Languages:</span>
                  {activeWorker.languages.map((lang) => (
                    <span
                      key={lang}
                      className="px-2.5 py-1 rounded-lg text-xs border border-border bg-white/[0.03] text-text-secondary"
                    >
                      {lang}
                    </span>
                  ))}
                </div>

                <div className="pt-3">
                  <Link href="/demo" className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm">
                    <span>Hire {activeWorker.personaName} Today</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right Live Prompt & Output Preview Sandbox */}
              <div className="lg:col-span-6">
                <div className="bg-bg-primary/90 rounded-2xl p-5 sm:p-6 border border-border space-y-4 shadow-2xl">
                  <div className="flex items-center justify-between border-b border-border pb-3">
                    <div className="flex items-center gap-2 text-xs font-semibold text-text-secondary">
                      <Sparkles className="w-4 h-4 text-accent" />
                      <span>Live Task Simulation — {activeWorker.personaName}</span>
                    </div>
                    <span className="text-[10px] text-success font-medium">● Online on WhatsApp</span>
                  </div>

                  {/* User Prompt */}
                  <div className="space-y-1">
                    <span className="text-[11px] text-text-muted font-medium">BUSINESS OWNER REQUEST:</span>
                    <div className="p-3 rounded-xl bg-white/[0.04] text-xs text-text-secondary border border-border">
                      {activeWorker.samplePrompt}
                    </div>
                  </div>

                  {/* AI Response Output */}
                  <div className="space-y-1">
                    <span className="text-[11px] text-accent font-medium flex items-center gap-1">
                      <Zap className="w-3 h-3" /> {activeWorker.personaName.toUpperCase()}’S AUTOMATED ACTION:
                    </span>
                    <div
                      className="p-3.5 rounded-xl text-xs text-white leading-relaxed border"
                      style={{
                        backgroundColor: `${activeWorker.color}10`,
                        borderColor: `${activeWorker.color}30`,
                      }}
                    >
                      {activeWorker.sampleOutput}
                    </div>
                  </div>

                  {/* Worker Performance Stats */}
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-border">
                    {Object.entries(activeWorker.stats).map(([k, v]) => (
                      <div key={k} className="text-center p-2 rounded-lg bg-white/[0.02]">
                        <p className="text-xs text-text-muted capitalize">{k.replace(/([A-Z])/g, ' $1')}</p>
                        <p className="text-sm font-bold mt-0.5" style={{ color: activeWorker.color }}>
                          {v}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* 5 Worker Cards Grid Overview */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {AGENTS.map((agent, i) => {
            const Icon = agent.icon;
            return (
              <StaggerItem key={agent.id}>
                <GlowCard glowColor={agent.color} className="h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${agent.avatarBg} flex items-center justify-center text-base font-bold text-white shadow-md`}
                      >
                        {agent.avatarInitials}
                      </div>
                      <div>
                        <h4 className="text-base font-bold">{agent.name}</h4>
                        <p className="text-xs text-accent font-medium">{agent.roleTitle}</p>
                      </div>
                    </div>

                    <p className="text-xs text-text-secondary leading-relaxed mb-4">
                      {agent.tagline}
                    </p>

                    <ul className="space-y-2 mb-4">
                      {agent.capabilities.slice(0, 3).map((c) => (
                        <li key={c} className="text-xs text-text-secondary flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: agent.color }} />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => setSelectedAgent(i)}
                    className="w-full mt-2 py-2 px-3 rounded-xl border border-border bg-white/[0.02] text-xs font-semibold text-text-secondary hover:text-white hover:border-accent/40 transition-all flex items-center justify-center gap-1 group"
                  >
                    <span>View {agent.personaName}&apos;s Profile</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </GlowCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </SectionWrapper>
  );
}
