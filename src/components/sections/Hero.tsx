'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Clock,
  PhoneCall,
  Headphones,
  Users,
  IndianRupee,
  Megaphone,
  Check,
  Play,
  UserCheck,
} from 'lucide-react';
import { DemoModal } from '@/components/ui/DemoModal';

interface AgentCardData {
  id: string;
  name: string;
  role: string;
  icon: typeof PhoneCall;
  accent: string;
  accentBg: string;
  status: string;
  task: string;
}

const HERO_AGENTS: AgentCardData[] = [
  {
    id: 'sales',
    name: 'Sales AI',
    role: 'Lead Qualification',
    icon: PhoneCall,
    accent: '#3B82F6',
    accentBg: 'rgba(59, 130, 246, 0.15)',
    status: 'In Call',
    task: 'Qualifying enterprise inquiry from Dr. Mehta',
  },
  {
    id: 'support',
    name: 'Support AI',
    role: 'Customer Inquiries',
    icon: Headphones,
    accent: '#EC4899',
    accentBg: 'rgba(236, 72, 153, 0.15)',
    status: 'Drafting',
    task: 'SLA upgrade inquiry · response ready for review',
  },
  {
    id: 'hr',
    name: 'HR AI',
    role: 'Recruiting & Queries',
    icon: Users,
    accent: '#8B5CF6',
    accentBg: 'rgba(139, 92, 246, 0.15)',
    status: 'Active',
    task: 'Screened 3 frontend resumes against job spec',
  },
  {
    id: 'finance',
    name: 'Finance AI',
    role: 'Invoice & Cashflow',
    icon: IndianRupee,
    accent: '#F59E0B',
    accentBg: 'rgba(245, 158, 11, 0.15)',
    status: 'Reconciled',
    task: '₹18,500 pending invoice recovered via UPI link',
  },
  {
    id: 'marketing',
    name: 'Marketing AI',
    role: 'Campaign Assistance',
    icon: Megaphone,
    accent: '#10B981',
    accentBg: 'rgba(16, 185, 129, 0.15)',
    status: 'Scheduled',
    task: 'Product update broadcast scheduled for 2:00 PM',
  },
];

const TASK_STAGES = [
  {
    stage: 'Assigned',
    title: 'Customer requested SLA pricing on WhatsApp',
    badge: '1. Task Inbound',
    time: '10:14 AM',
  },
  {
    stage: 'In Progress',
    title: 'Support AI drafted verified policy quote',
    badge: '2. AI Draft Ready',
    time: '10:14 AM',
  },
  {
    stage: 'Human Review',
    title: 'Operations Manager reviewed & signed off',
    badge: '3. Human Approved',
    time: '10:15 AM',
  },
  {
    stage: 'Completed',
    title: 'Response dispatched & logged to CRM audit trail',
    badge: '4. Dispatched',
    time: 'Just now',
  },
];

export function Hero() {
  const [activeStage, setActiveStage] = useState(0);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [selectedAgentHero, setSelectedAgentHero] = useState<string>('sales');

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % TASK_STAGES.length);
    }, 3600);
    return () => clearInterval(timer);
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#FDFEFE] to-white">
      {/* Subtle background grid & radial light */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="absolute -top-32 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[140px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Messaging */}
          <div className="lg:col-span-6 space-y-6 max-w-2xl">
            {/* Trust Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>AI Workforce Operating System for Startups & SMBs</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold tracking-tight font-display text-slate-900 leading-[1.08]"
            >
              Build Your <span className="text-blue-600">AI Workforce.</span>
            </motion.h1>

            {/* Supporting Headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl font-semibold text-slate-800 tracking-tight"
            >
              AI teammates that help your business sell, support, and scale.
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-base text-slate-600 leading-relaxed"
            >
              Bring specialized AI employees into your workflows, assign tasks, and keep people in control.
            </motion.p>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2"
            >
              <button
                type="button"
                onClick={() => handleScrollTo('ai-employees')}
                className="btn-primary text-base py-3.5 px-6 shadow-md shadow-blue-500/25 justify-center"
              >
                <span>Explore AI Employees</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <button
                type="button"
                onClick={() => handleScrollTo('how-it-works')}
                className="btn-secondary text-base py-3.5 px-6 justify-center"
              >
                <span>See How It Works</span>
              </button>
            </motion.div>

            {/* Trust and Control Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-600"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Human-in-the-Loop</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Configurable Roles</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Clock className="w-4 h-4 text-purple-600 shrink-0" />
                <span>Under 10s Response</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Animated Product Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            {/* Outer high-contrast dark composition wrapper */}
            <div className="relative rounded-2xl bg-[#0B1120] border border-slate-800 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.4)] p-4 sm:p-5 text-white overflow-hidden">
              {/* Workspace Header Visual */}
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-white tracking-wide">
                        Acme Dynamics Workspace
                      </span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-blue-500/20 text-blue-400 font-mono">
                        v2.4
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-400">
                      5 AI Employees Active · Approval Gates Enforced
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <UserCheck className="w-3 h-3" />
                    Reviewer Ready
                  </span>
                </div>
              </div>

              {/* 5 AI Employee Cards Row */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Workforce Roster
                  </span>
                  <span className="text-[10px] text-blue-400 font-medium">Click to inspect</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {HERO_AGENTS.map((agent) => {
                    const Icon = agent.icon;
                    const isSelected = selectedAgentHero === agent.id;
                    return (
                      <button
                        key={agent.id}
                        type="button"
                        onClick={() => setSelectedAgentHero(agent.id)}
                        className={`text-left p-2.5 rounded-xl border transition-all duration-200 ${
                          isSelected
                            ? 'bg-slate-800/90 border-blue-500 shadow-xs'
                            : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-800/40'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <div
                            className="w-6 h-6 rounded-lg flex items-center justify-center text-white"
                            style={{ backgroundColor: agent.accentBg }}
                          >
                            <Icon className="w-3.5 h-3.5" style={{ color: agent.accent }} />
                          </div>
                          <span
                            className="text-[9px] font-semibold px-1.5 py-0.5 rounded-md"
                            style={{
                              backgroundColor: `${agent.accent}20`,
                              color: agent.accent,
                            }}
                          >
                            {agent.status}
                          </span>
                        </div>
                        <p className="text-xs font-bold text-white truncate">{agent.name}</p>
                        <p className="text-[10px] text-slate-400 truncate">{agent.role}</p>
                      </button>
                    );
                  })}

                  {/* Selected Agent Summary Strip */}
                  <div className="col-span-2 sm:col-span-1 p-2.5 rounded-xl bg-blue-950/30 border border-blue-900/40 flex flex-col justify-between">
                    <p className="text-[9px] uppercase tracking-wider text-blue-400 font-semibold">
                      Current Task
                    </p>
                    <p className="text-[10px] text-slate-200 line-clamp-2 leading-tight mt-0.5">
                      {HERO_AGENTS.find((a) => a.id === selectedAgentHero)?.task}
                    </p>
                    <div className="text-[9px] text-emerald-400 flex items-center gap-1 mt-1 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      Active Live
                    </div>
                  </div>
                </div>
              </div>

              {/* Activity Feed: Task moving from Assigned to Completed */}
              <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-3 sm:p-3.5 space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-300">
                    <Clock className="w-3.5 h-3.5 text-blue-400" />
                    <span>Live Task Pipeline</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">
                    Step {activeStage + 1} of 4
                  </span>
                </div>

                {/* Progress Pipeline Bar */}
                <div className="grid grid-cols-4 gap-1.5">
                  {TASK_STAGES.map((s, index) => {
                    const isDone = index < activeStage;
                    const isCurrent = index === activeStage;
                    return (
                      <div
                        key={s.stage}
                        className={`h-1.5 rounded-full transition-all duration-500 ${
                          isDone
                            ? 'bg-emerald-500'
                            : isCurrent
                            ? 'bg-blue-500 shadow-xs shadow-blue-400'
                            : 'bg-slate-800'
                        }`}
                      />
                    );
                  })}
                </div>

                {/* Active Task Card */}
                <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800/80 flex items-start gap-2.5">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                      activeStage === 3
                        ? 'bg-emerald-500/20 text-emerald-400'
                        : 'bg-blue-500/20 text-blue-400'
                    }`}
                  >
                    {activeStage === 3 ? (
                      <Check className="w-3.5 h-3.5" />
                    ) : (
                      <Play className="w-3 h-3 fill-current" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400">
                        {TASK_STAGES[activeStage].badge}
                      </span>
                      <span className="text-[9px] text-slate-400">
                        {TASK_STAGES[activeStage].time}
                      </span>
                    </div>
                    <p className="text-xs text-slate-200 font-medium truncate mt-0.5">
                      {TASK_STAGES[activeStage].title}
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating UI Badges */}
              <div className="mt-3.5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                  Audit Trail: 100% Actions Logged
                </span>
                <button
                  type="button"
                  onClick={() => setIsDemoModalOpen(true)}
                  className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1"
                >
                  Schedule Live Walkthrough →
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        defaultAgent="sales"
      />
    </section>
  );
}
