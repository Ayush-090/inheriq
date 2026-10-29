'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  XCircle,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  TrendingUp,
  AlertTriangle,
  Zap,
  Split,
  Layers,
} from 'lucide-react';

interface ComparisonItem {
  category: string;
  before: {
    title: string;
    description: string;
    metric: string;
  };
  after: {
    title: string;
    description: string;
    metric: string;
  };
}

const COMPARISONS: ComparisonItem[] = [
  {
    category: 'Lead Qualification & Sales',
    before: {
      title: 'Unanswered Calls & Slow Follow-ups',
      description: 'Inbound inquiries after 6 PM go cold. Reps spend hours manually typing WhatsApp follow-ups, resulting in dropped deals.',
      metric: '68% inquiries lost after hours',
    },
    after: {
      title: 'Sub-10s Automated Qualification',
      description: 'Sales AI captures buyer intent, validates budget, and schedules discovery calls directly into your sales team’s calendar.',
      metric: '3.4x faster pipeline velocity',
    },
  },
  {
    category: 'Customer Support',
    before: {
      title: 'Backlogged Queues & Inconsistent Answers',
      description: 'Staff answering the same 25 questions daily. Customer queries sit for hours, leading to churn and negative reviews.',
      metric: '4-hour average response lag',
    },
    after: {
      title: 'AI Drafting with 1-Click Human Sign-off',
      description: 'Brain AI drafts verified, policy-accurate responses in seconds. Human reviewers approve or edit with one click before sending.',
      metric: 'Under 10-second initial response',
    },
  },
  {
    category: 'HR & Staff Operations',
    before: {
      title: 'WhatsApp Group Chaos & Manual Logs',
      description: 'Attendance tracked across scattered messages. Hours wasted calculating monthly overtime, leave slips, and payroll sheets.',
      metric: '40+ hours/month on manual admin',
    },
    after: {
      title: 'Structured Check-ins & Automated Briefs',
      description: 'Staff check in via WhatsApp. HR AI verifies shifts, logs overtime automatically, and prepares structured reports for manager sign-off.',
      metric: '99.8% accurate attendance logs',
    },
  },
  {
    category: 'Invoicing & Cashflow',
    before: {
      title: 'Awkward Follow-ups & Delayed Receipts',
      description: 'Overdue invoices forgotten for weeks because no one enjoys sending awkward payment reminder messages.',
      metric: '25% of invoices overdue >30 days',
    },
    after: {
      title: 'Polite Reminders with Instant UPI Links',
      description: 'Finance AI sends polite, scheduled WhatsApp reminders with integrated UPI & payment links, auto-reconciling paid ledgers.',
      metric: '96% on-time payment recovery',
    },
  },
];

export function BeforeAfter() {
  const [activeView, setActiveView] = useState<'side-by-side' | 'tabbed'>('side-by-side');
  const [selectedTab, setSelectedTab] = useState<'before' | 'after'>('after');

  return (
    <section id="comparison" className="py-24 bg-white border-b border-slate-200/80">
      <div className="container-custom">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Before & After Transformation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display tracking-tight">
            Stop the Manual Grind. <span className="text-blue-600">Scale With AI.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            See the stark contrast between repetitive manual overhead and structured, AI-orchestrated workflows with human oversight.
          </p>

          {/* View Mode Toggle */}
          <div className="flex items-center justify-center gap-2 pt-2">
            <div className="inline-flex items-center p-1 rounded-xl bg-slate-100 border border-slate-200 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setActiveView('side-by-side')}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                  activeView === 'side-by-side'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Split className="w-3.5 h-3.5" />
                <span>Side-by-Side</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveView('tabbed')}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                  activeView === 'tabbed'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Single View</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tabbed Single View (Toggle Between Before vs After) */}
        {activeView === 'tabbed' && (
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex rounded-2xl bg-slate-100 p-1.5 max-w-sm mx-auto mb-8 border border-slate-200">
              <button
                type="button"
                onClick={() => setSelectedTab('before')}
                className={`flex-1 py-2 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                  selectedTab === 'before'
                    ? 'bg-red-500 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Without Inheriq</span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedTab('after')}
                className={`flex-1 py-2 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                  selectedTab === 'after'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Zap className="w-3.5 h-3.5" />
                <span>With Inheriq AI</span>
              </button>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {COMPARISONS.map((item) => {
                const isAfter = selectedTab === 'after';
                const data = isAfter ? item.after : item.before;
                return (
                  <motion.div
                    key={item.category}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.25 }}
                    className={`p-6 rounded-2xl border transition-all ${
                      isAfter
                        ? 'bg-blue-50/40 border-blue-200/80 shadow-xs'
                        : 'bg-red-50/40 border-red-200/80'
                    }`}
                  >
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                      {isAfter ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      ) : (
                        <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                      )}
                      <span>{data.title}</span>
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {data.description}
                    </p>
                    <div
                      className={`inline-block px-2.5 py-1 rounded-md text-[11px] font-bold ${
                        isAfter
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {data.metric}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

        {/* Side-by-Side Comparison Layout */}
        {activeView === 'side-by-side' && (
          <div className="max-w-5xl mx-auto space-y-4">
            {/* Header row */}
            <div className="hidden md:grid grid-cols-12 gap-4 pb-2 px-4 text-xs font-bold uppercase tracking-wider text-slate-500">
              <div className="col-span-3">Workflow Area</div>
              <div className="col-span-4 text-red-600 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4" />
                <span>Repetitive Manual Work (Before)</span>
              </div>
              <div className="col-span-5 text-blue-700 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                <span>Inheriq AI Workforce (After)</span>
              </div>
            </div>

            {/* Comparison cards */}
            {COMPARISONS.map((item) => (
              <div
                key={item.category}
                className="saas-card p-5 md:p-6 transition-all hover:border-blue-300"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
                  {/* Category Title */}
                  <div className="md:col-span-3">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {item.category}
                    </span>
                  </div>

                  {/* Before (Manual) */}
                  <div className="md:col-span-4 p-4 rounded-xl bg-red-50/50 border border-red-200/70 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-red-800">
                      <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                      <span>{item.before.title}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.before.description}
                    </p>
                    <span className="inline-block text-[10px] font-semibold text-red-700 bg-red-100/80 px-2 py-0.5 rounded">
                      {item.before.metric}
                    </span>
                  </div>

                  {/* After (Inheriq) */}
                  <div className="md:col-span-5 p-4 rounded-xl bg-blue-50/40 border border-blue-200/80 space-y-2 relative overflow-hidden">
                    <div className="flex items-center gap-2 text-xs font-bold text-blue-900">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{item.after.title}</span>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {item.after.description}
                    </p>
                    <div className="flex items-center gap-2 pt-1">
                      <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                        <TrendingUp className="w-3 h-3 text-emerald-600" />
                        {item.after.metric}
                      </span>
                      <span className="text-[10px] text-blue-700 font-medium">Human sign-off</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
