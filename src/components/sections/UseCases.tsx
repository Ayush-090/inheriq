'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  PhoneCall,
  Headphones,
  Users,
  IndianRupee,
  Cpu,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Check,
  Calendar,
  Layers,
} from 'lucide-react';
import { DemoModal } from '@/components/ui/DemoModal';

interface UseCaseData {
  id: string;
  tabLabel: string;
  icon: typeof PhoneCall;
  accent: string;
  headline: string;
  description: string;
  workflowSteps: string[];
  metrics: { label: string; value: string }[];
  visualContent: {
    title: string;
    badge: string;
    details: { key: string; val: string }[];
    outputSample: string;
  };
}

const USE_CASES: UseCaseData[] = [
  {
    id: 'sales',
    tabLabel: 'Sales',
    icon: PhoneCall,
    accent: '#2563EB',
    headline: 'Accelerate Inbound Pipeline & Never Miss a Lead',
    description:
      'Qualify inbound website inquiries, WhatsApp chats, and customer calls in under 10 seconds. Arjun captures budget, timeline, and decision-maker details, booking qualified meetings straight to your calendar.',
    workflowSteps: [
      'Buyer submits inquiry via website or WhatsApp',
      'Sales AI qualifies budget, company size & urgency within 10s',
      'Schedules 30-min discovery slot directly on Google Calendar',
      'Syncs contact record and briefing notes into your CRM',
    ],
    metrics: [
      { label: 'Initial Response', value: '< 10s' },
      { label: 'Pipeline Velocity', value: '3.4x Faster' },
      { label: 'After-Hours Capture', value: '100%' },
    ],
    visualContent: {
      title: 'Inbound Lead Qualification Card',
      badge: 'Hot Lead · Meeting Booked',
      details: [
        { key: 'Lead Name', val: 'Vikram Joshi (Mehta Logistics)' },
        { key: 'Budget Status', val: 'Qualified (₹15L annual contract)' },
        { key: 'Scheduled Slot', val: 'Tomorrow at 11:30 AM IST' },
        { key: 'Calendar Invite', val: 'Dispatched to both parties' },
      ],
      outputSample: '“Namaste Vikram ji! I’ve reserved your discovery demo for tomorrow at 11:30 AM. A calendar invitation has been sent to your email.”',
    },
  },
  {
    id: 'support',
    tabLabel: 'Customer Support',
    icon: Headphones,
    accent: '#DB2777',
    headline: 'Deliver Instant 24/7 Resolution with Human Oversight',
    description:
      'Handle repetitive tier-1 customer questions instantly across voice and messaging. Support AI drafts verified responses adhering strictly to your company knowledge base, with one-click sign-off for human agents.',
    workflowSteps: [
      'Customer asks complex question on policy or order status',
      'Brain AI matches verified knowledge documents in seconds',
      'Drafts polite, accurate response in customer’s language',
      'Human support lead approves or edits before dispatch',
    ],
    metrics: [
      { label: 'Tier-1 Resolution', value: '94%' },
      { label: 'Languages Supported', value: '7+ Indian & English' },
      { label: 'Escalation Accuracy', value: '99.8%' },
    ],
    visualContent: {
      title: 'Customer Inquiry Resolution Gate',
      badge: 'Draft Ready · Signed Off',
      details: [
        { key: 'Customer', val: 'Sunita Rao (Bengaluru)' },
        { key: 'Inquiry Subject', val: 'Clinic Valet Parking & Timings' },
        { key: 'Language Detected', val: 'Hinglish / English' },
        { key: 'Manager Sign-off', val: 'Approved by Support Lead' },
      ],
      outputSample: '“Clinic is open 9 AM – 8 PM daily. We offer free valet parking right in front of the building entrance!”',
    },
  },
  {
    id: 'hr',
    tabLabel: 'HR',
    icon: Users,
    accent: '#7C3AED',
    headline: 'Automate Daily Staff Check-ins & Candidate Pre-Screening',
    description:
      'Eliminate chaotic WhatsApp groups. Kavya collects daily staff attendance, processes leave requests against company policies, and pre-screens inbound candidate resumes.',
    workflowSteps: [
      'Staff member submits morning attendance via WhatsApp',
      'HR AI verifies location, shift schedule, and overtime',
      'Answers employee queries on leave balance and tax slips',
      'Prepares daily attendance roll-call summary for leadership',
    ],
    metrics: [
      { label: 'Monthly Admin Saved', value: '40+ Hours' },
      { label: 'Attendance Accuracy', value: '99.8%' },
      { label: 'Candidate Pre-screen', value: '60s per CV' },
    ],
    visualContent: {
      title: 'Shift Roll-Call & Screening Summary',
      badge: 'Verified & Logged',
      details: [
        { key: 'Warehouse Staff', val: '44 Present / 2 Approved Leave' },
        { key: 'Overtime Log', val: '5.5 Hours (3 staff members)' },
        { key: 'Candidate Screening', val: '14 resumes parsed today' },
        { key: 'Top Candidates', val: '3 shortlisted for HR review' },
      ],
      outputSample: '“Attendance complete: 44 present, 2 on leave. Overtime hours logged into payroll database. Daily summary shared with Ops manager.”',
    },
  },
  {
    id: 'finance',
    tabLabel: 'Finance',
    icon: IndianRupee,
    accent: '#D97706',
    headline: 'Automate Invoice Delivery & Recover Overdue Receivables',
    description:
      'Generate GST-compliant invoices and dispatch polite, automated WhatsApp reminders with direct UPI payment links. Reconcile received payments straight to Tally Prime or your ledger.',
    workflowSteps: [
      'Invoice drafted upon order or milestone completion',
      'Finance AI sends polite WhatsApp notice with UPI link',
      'Client pays instantly via UPI, PhonePe, or Netbanking',
      'Payment reconciled automatically with Tally / Zoho Books',
    ],
    metrics: [
      { label: 'Dues Recovered', value: '96% on time' },
      { label: 'Recovery Speed', value: '4.2x Faster' },
      { label: 'Reconciliation', value: '100% Automated' },
    ],
    visualContent: {
      title: 'Automated Invoice & Collections Card',
      badge: 'UPI Payment Confirmed',
      details: [
        { key: 'Client', val: 'Sharma & Co. (Agra)' },
        { key: 'Invoice Reference', val: '#INV-1092 (₹18,500)' },
        { key: 'Payment Method', val: 'UPI Direct (Instant Receipt)' },
        { key: 'Ledger Status', val: 'Reconciled in Tally Prime' },
      ],
      outputSample: '“Payment confirmed! ₹18,500 received via UPI for Invoice #INV-1092. Official receipt has been delivered to customer WhatsApp.”',
    },
  },
  {
    id: 'operations',
    tabLabel: 'Operations',
    icon: Cpu,
    accent: '#059669',
    headline: 'Orchestrate Cross-Department Tasks & Prevent Bottlenecks',
    description:
      'Bridge the gap between sales promises, inventory fulfillment, and vendor check-ins. Operations AI monitors task status, prompts teams on upcoming deadlines, and sends daily 8 PM executive summaries.',
    workflowSteps: [
      'Sales closes deal or new client project commences',
      'Operations AI assigns onboarding checklist to respective teams',
      'Monitors fulfillment deadlines and flags bottlenecks early',
      'Delivers concise 8 PM daily briefing to business owners',
    ],
    metrics: [
      { label: 'Cross-Team Sync', value: '100% Automated' },
      { label: 'Daily Briefings', value: '8:00 PM Every Evening' },
      { label: 'Process Bottlenecks', value: 'Reduced by 70%' },
    ],
    visualContent: {
      title: 'Cross-Department Orchestration Card',
      badge: 'Milestone Completed',
      details: [
        { key: 'Active Workflows', val: '18 cross-department tasks' },
        { key: 'Pending Actions', val: '2 manager approvals' },
        { key: 'Daily Briefing', val: 'Delivered at 8:00 PM to WhatsApp' },
        { key: 'System Health', val: '99.9% uptime across all agents' },
      ],
      outputSample: '“Daily Executive Summary: 38 leads contacted, ₹3.1L revenue collected, 78 support tickets resolved. 0 unaddressed bottlenecks today.”',
    },
  },
];

export function UseCases() {
  const [activeTabId, setActiveTabId] = useState('sales');
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const activeUseCase = USE_CASES.find((u) => u.id === activeTabId) ?? USE_CASES[0];

  return (
    <section id="use-cases" className="py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="container-custom">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tailored By Department</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display tracking-tight">
            Built for Every Core <span className="text-blue-600">Business Function</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Click through our department solutions to see specialized workflows, measurable impact, and real-time interface previews.
          </p>
        </div>

        {/* Clickable Tabs Bar */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 max-w-4xl mx-auto">
          {USE_CASES.map((uc) => {
            const Icon = uc.icon;
            const isActive = activeTabId === uc.id;
            return (
              <button
                key={uc.id}
                type="button"
                onClick={() => setActiveTabId(uc.id)}
                className={`px-4 py-3 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 flex items-center gap-2.5 border ${
                  isActive
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20 scale-[1.02]'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{uc.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Active Use Case Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeUseCase.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="saas-card p-6 sm:p-10 max-w-5xl mx-auto bg-white"
          >
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Description & Workflow Steps */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span
                    className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md"
                    style={{
                      backgroundColor: `${activeUseCase.accent}15`,
                      color: activeUseCase.accent,
                    }}
                  >
                    {activeUseCase.tabLabel} Solution
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display mt-2.5 tracking-tight">
                    {activeUseCase.headline}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-2.5">
                    {activeUseCase.description}
                  </p>
                </div>

                {/* Workflow Steps */}
                <div className="space-y-2.5 pt-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Typical Workflow:
                  </p>
                  {activeUseCase.workflowSteps.map((step, idx) => (
                    <div key={step} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0 mt-0.5"
                        style={{ backgroundColor: activeUseCase.accent }}
                      >
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>

                {/* Metrics Row */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-100">
                  {activeUseCase.metrics.map((m) => (
                    <div key={m.label} className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <p className="text-base sm:text-lg font-black text-slate-900 font-display">
                        {m.value}
                      </p>
                      <p className="text-[11px] text-slate-500 font-medium truncate mt-0.5">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setIsDemoModalOpen(true)}
                    className="btn-primary text-xs py-2.5 px-5"
                  >
                    <span>Deploy {activeUseCase.tabLabel} AI</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </button>
                </div>
              </div>

              {/* Right Column: Visual Preview Card */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-slate-900 text-white p-5 border border-slate-800 shadow-xl space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div>
                      <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                        Live Simulation Card
                      </p>
                      <h4 className="text-xs font-bold text-white mt-0.5">
                        {activeUseCase.visualContent.title}
                      </h4>
                    </div>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      {activeUseCase.visualContent.badge}
                    </span>
                  </div>

                  {/* Details List */}
                  <div className="space-y-2 text-xs">
                    {activeUseCase.visualContent.details.map((d) => (
                      <div
                        key={d.key}
                        className="flex items-center justify-between py-1 border-b border-slate-800/80 text-[11px]"
                      >
                        <span className="text-slate-400">{d.key}:</span>
                        <span className="font-semibold text-slate-200">{d.val}</span>
                      </div>
                    ))}
                  </div>

                  {/* Generated Output */}
                  <div className="p-3 rounded-xl bg-slate-800/70 border border-slate-700/80 space-y-1">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-blue-400">
                      Automated Customer Message:
                    </p>
                    <p className="text-xs text-slate-200 leading-relaxed italic">
                      {activeUseCase.visualContent.outputSample}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        defaultAgent={activeTabId}
      />
    </section>
  );
}
