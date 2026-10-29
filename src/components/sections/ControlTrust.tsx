'use client';

import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Lock,
  FileCheck,
  Eye,
  SlidersHorizontal,
  PowerOff,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

const TRUST_PILLARS = [
  {
    icon: ShieldCheck,
    color: '#2563EB',
    title: 'Human-in-the-Loop Approval Gates',
    description:
      'Never worry about an unvetted message or critical action going out. Configure granular approval rules requiring a manager’s one-click sign-off before external customer dispatch.',
    highlight: 'Mandatory sign-off for quotes, refunds, and payroll',
  },
  {
    icon: Lock,
    color: '#7C3AED',
    title: 'Role-Based Agent Permissions',
    description:
      'Enforce strict operational boundaries per AI employee. Sales AI cannot access internal HR payroll records; Support AI cannot generate unvetted invoices or execute financial disbursements.',
    highlight: 'Strict least-privilege boundary enforcement',
  },
  {
    icon: FileCheck,
    color: '#059669',
    title: 'Comprehensive Execution Audit Trail',
    description:
      'Every inbound trigger, Brain AI document lookup, generated draft, human reviewer approval, and outbound timestamp is recorded in an immutable, searchable activity ledger.',
    highlight: '100% of actions logged with author and timestamp',
  },
  {
    icon: Eye,
    color: '#D97706',
    title: 'Workspace Isolation & Data Privacy',
    description:
      'Your company documents, price lists, customer phone numbers, and WhatsApp chats are strictly partitioned to your workspace. Business data is never used to train public global models.',
    highlight: 'Zero training on private business knowledge',
  },
];

export function ControlTrust() {
  return (
    <section className="py-24 bg-white border-b border-slate-200/80">
      <div className="container-custom">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Governance & Security Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display tracking-tight">
            Complete Control. <span className="text-blue-600">Zero Surprises.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Inheriq is engineered so human leadership always maintains ultimate authority. Set permissions, enforce approval checkpoints, and review all actions with full transparency.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {TRUST_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="saas-card p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-5 shadow-xs"
                    style={{ backgroundColor: pillar.color }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 font-display mb-2.5">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{pillar.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Operational Guardrails Banner */}
        <div className="max-w-5xl mx-auto p-6 sm:p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
              Emergency Failsafe & Operational Safety
            </span>
            <h3 className="text-xl font-bold font-display text-white">
              Instant Kill-Switch & Real-time Override
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
              Pause any digital employee with a single click at any time. Managers can override, edit, or reject any generated draft before dispatch without impacting other active workflows.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="px-4 py-3 rounded-2xl bg-slate-800/80 border border-slate-700 text-xs font-mono text-emerald-400 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Guardrails: 100% Operational</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
