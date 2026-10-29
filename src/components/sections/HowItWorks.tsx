'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  UserPlus,
  Sliders,
  CheckCircle,
  Sparkles,
  ArrowRight,
  Shield,
  FileText,
  Lock,
  Send,
  UserCheck,
} from 'lucide-react';

const THREE_STEPS = [
  {
    step: '01',
    title: 'Choose an AI Employee',
    subtitle: 'Select specialized roles tailored to your business needs',
    description:
      'Pick pre-configured digital workers for Sales, Customer Support, HR, Finance, or Marketing. Each employee comes ready with domain knowledge and conversational fluency across regional Indian languages and English.',
    icon: UserPlus,
    accent: '#2563EB',
    badge: 'Step 1: Selection',
    visualPreview: (
      <div className="space-y-2 p-3.5 bg-slate-900 text-white rounded-xl text-xs font-mono">
        <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2">
          <span>Available Roles</span>
          <span className="text-emerald-400">5 Ready</span>
        </div>
        <div className="flex flex-wrap gap-1.5 pt-1">
          <span className="px-2 py-1 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
            ✓ Sales AI (Arjun)
          </span>
          <span className="px-2 py-1 rounded bg-pink-500/20 text-pink-300 border border-pink-500/30">
            ✓ Support AI (Priya)
          </span>
          <span className="px-2 py-1 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
            ✓ HR AI (Kavya)
          </span>
          <span className="px-2 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
            ✓ Finance AI (Vikram)
          </span>
        </div>
      </div>
    ),
  },
  {
    step: '02',
    title: 'Configure Role and Permissions',
    subtitle: 'Upload knowledge base & set human approval rules',
    description:
      'Train Brain AI with your pricing catalog, SOPs, and product PDFs. Define exact permissions: allow autonomous replies for routine FAQs while setting strict human review gates for quotes, refunds, and payroll.',
    icon: Sliders,
    accent: '#7C3AED',
    badge: 'Step 2: Configuration',
    visualPreview: (
      <div className="space-y-2 p-3.5 bg-slate-900 text-white rounded-xl text-xs">
        <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2 text-[11px] font-mono">
          <span>Permission Control Gate</span>
          <span className="text-blue-400 flex items-center gap-1">
            <Lock className="w-3 h-3" /> Enforced
          </span>
        </div>
        <div className="space-y-1.5 text-[11px]">
          <div className="flex items-center justify-between bg-slate-800/60 p-1.5 rounded">
            <span className="text-slate-300">FAQ Inquiries</span>
            <span className="text-emerald-400 font-semibold font-mono">Autonomous</span>
          </div>
          <div className="flex items-center justify-between bg-slate-800/60 p-1.5 rounded">
            <span className="text-slate-300">Quote Dispatch</span>
            <span className="text-amber-400 font-semibold font-mono">Review Required</span>
          </div>
          <div className="flex items-center justify-between bg-slate-800/60 p-1.5 rounded">
            <span className="text-slate-300">Invoices &gt; ₹20k</span>
            <span className="text-red-400 font-semibold font-mono">Sign-off Strict</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    step: '03',
    title: 'Assign Tasks and Review Results',
    subtitle: 'Deploy across channels & keep people in control',
    description:
      'Assign tasks through WhatsApp, Slack, or your workspace console. AI teammates execute repetitive work around the clock and present critical milestones for your one-click sign-off with full audit logging.',
    icon: CheckCircle,
    accent: '#059669',
    badge: 'Step 3: Execution',
    visualPreview: (
      <div className="space-y-2 p-3.5 bg-slate-900 text-white rounded-xl text-xs">
        <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2 text-[11px] font-mono">
          <span>Execution Status</span>
          <span className="text-emerald-400 font-semibold">● 100% Audited</span>
        </div>
        <div className="p-2 rounded bg-slate-800/60 border border-slate-700/80 space-y-1">
          <div className="flex items-center justify-between text-[11px]">
            <span className="text-white font-semibold">Lead Contact Completed</span>
            <span className="text-emerald-400 font-mono">Approved</span>
          </div>
          <p className="text-[10px] text-slate-400">
            Signed off by Ananya R. (Ops Lead) · Logged in CRM
          </p>
        </div>
      </div>
    ),
  },
];

export function HowItWorks() {
  const [selectedStep, setSelectedStep] = useState(0);

  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="container-custom">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>3-Step Onboarding</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display tracking-tight">
            How Inheriq <span className="text-blue-600">Works</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Choose an AI employee → Configure role and permissions → Assign tasks and review results. Get your automated workforce operational in minutes.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {THREE_STEPS.map((item, idx) => {
            const Icon = item.icon;
            const isSelected = selectedStep === idx;
            return (
              <motion.div
                key={item.step}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedStep(idx)}
                className={`saas-card p-6 flex flex-col justify-between cursor-pointer transition-all ${
                  isSelected
                    ? 'border-blue-500 shadow-md ring-2 ring-blue-500/10'
                    : 'hover:border-slate-300'
                }`}
              >
                <div>
                  {/* Step Badge & Number */}
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className="text-2xl font-black font-display tracking-tight"
                      style={{ color: item.accent }}
                    >
                      {item.step}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                      {item.badge}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0"
                      style={{ backgroundColor: item.accent }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 font-display leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs font-semibold text-slate-500 mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Visual Preview */}
                <div>{item.visualPreview}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
