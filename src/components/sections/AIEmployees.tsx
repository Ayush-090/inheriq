'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  PhoneCall,
  Headphones,
  Users,
  IndianRupee,
  Megaphone,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  X,
  Shield,
  Layers,
  Zap,
  Terminal,
} from 'lucide-react';
import { DemoModal } from '@/components/ui/DemoModal';

export interface AgentDetail {
  id: string;
  name: string;
  roleTitle: string;
  shortDesc: string;
  icon: typeof PhoneCall;
  color: string;
  bgLight: string;
  availableFeatures: string[];
  exampleTasks: string[];
  samplePrompt: string;
  sampleOutput: string;
  integrations: string[];
  humanReviewRules: string;
}

export const AGENTS_DATA: AgentDetail[] = [
  {
    id: 'sales',
    name: 'Sales AI (Arjun)',
    roleTitle: 'Lead Qualification & Follow-up',
    shortDesc: 'Captures incoming leads across WhatsApp, voice, and web forms, qualifies budget and intent, and schedules meetings for your sales team.',
    icon: PhoneCall,
    color: '#2563EB',
    bgLight: '#EFF6FF',
    availableFeatures: [
      '24/7 Inbound lead capture & WhatsApp response within 10s',
      'Automated intent, timeline & budget qualification',
      'Google Calendar & CRM sync (Zoho, HubSpot, Sheets)',
      '30-day automated WhatsApp & email nurturing cadences',
    ],
    exampleTasks: [
      'Qualify inbound website form submissions within 60 seconds',
      'Verify buyer budget and schedule demo slots automatically',
      'Re-engage cold inquiries from past 90 days with special offers',
    ],
    samplePrompt: '“Follow up with client Ramesh regarding yesterday’s site demo and book a closing call.”',
    sampleOutput: '“Namaste Ramesh ji! Hope you found yesterday’s walkthrough valuable. Would 4 PM today work for a brief call to finalize details?”',
    integrations: ['WhatsApp Business API', 'Google Calendar', 'Zoho CRM', 'HubSpot', 'IndiaMart'],
    humanReviewRules: 'Sends routine booking confirmations autonomously. Escalates custom pricing requests or contract terms to human sales lead.',
  },
  {
    id: 'support',
    name: 'Customer Support AI (Priya)',
    roleTitle: 'Customer Inquiries & Response Drafting',
    shortDesc: 'Delivers instant tier-1 customer query answers in regional languages, drafts verified responses for agents, and routes edge cases.',
    icon: Headphones,
    color: '#DB2777',
    bgLight: '#FDF2F8',
    availableFeatures: [
      'Centralized Brain AI knowledge ingestion from company docs',
      'Human-in-the-loop review mode before sending responses',
      'Multi-channel inquiry triage (Web, WhatsApp, Email)',
      'Real-time sentiment and urgency escalation engine',
    ],
    exampleTasks: [
      'Answer repetitive customer questions on policies, hours, and status',
      'Draft suggested reply for complex ticket awaiting human approval',
      'Escalate refund requests exceeding ₹5,000 directly to support manager',
    ],
    samplePrompt: '“Customer is inquiring about warranty coverage for equipment purchased 3 months ago.”',
    sampleOutput: '“Your equipment is covered under our 1-year comprehensive manufacturer warranty. A technician inspection can be booked here: [Link]”',
    integrations: ['WhatsApp API', 'Zendesk', 'Freshdesk', 'Gmail', 'Website Widget'],
    humanReviewRules: 'Provides standard FAQ replies autonomously. High-value refunds, cancellations, and disputes strictly require human sign-off.',
  },
  {
    id: 'hr',
    name: 'HR AI (Kavya)',
    roleTitle: 'Recruitment & Employee Queries',
    shortDesc: 'Screens incoming candidate applications, collects daily staff check-ins on WhatsApp, and answers internal company policy questions.',
    icon: Users,
    color: '#7C3AED',
    bgLight: '#F5F3FF',
    availableFeatures: [
      'Resume pre-screening against job descriptions and rubrics',
      'Daily staff attendance & leave check-in collection via WhatsApp',
      'Employee handbook and benefits Q&A assistant',
      'Automated interview availability polling & scheduling',
    ],
    exampleTasks: [
      'Parse 50 candidate resumes and rank top 5 based on technical criteria',
      'Collect morning shift check-ins and notify warehouse supervisor',
      'Answer employee questions regarding paid time off and leave balances',
    ],
    samplePrompt: '“Check today’s staff attendance and calculate overtime for the logistics crew.”',
    sampleOutput: '“44 present, 2 on approved leave. Overtime log updated for 4 team members (total: 5.5 hours). Sent to supervisor for sign-off.”',
    integrations: ['WhatsApp', 'Google Sheets', 'Tally Prime', 'Razorpay Payroll', 'Slack'],
    humanReviewRules: 'Pre-screens candidates and tracks attendance automatically. Candidate rejection emails and salary changes require HR lead confirmation.',
  },
  {
    id: 'finance',
    name: 'Finance AI (Vikram)',
    roleTitle: 'Invoice & Finance Workflows',
    shortDesc: 'Generates GST-compliant invoices, delivers polite payment reminders with UPI links, reconciles accounts, and compiles daily cashflow summaries.',
    icon: IndianRupee,
    color: '#D97706',
    bgLight: '#FFFBEB',
    availableFeatures: [
      'GST invoice generation and delivery via WhatsApp/Email',
      'Automated polite overdue payment reminder schedules',
      'Direct UPI and payment gateway link embedding',
      'Daily 8 PM financial briefing (revenue, pending dues, receipts)',
    ],
    exampleTasks: [
      'Generate Invoice #1084 and dispatch via WhatsApp with instant UPI pay link',
      'Follow up on 12 invoices pending over 15 days with gentle reminders',
      'Reconcile daily bank receipts against outstanding ledger accounts',
    ],
    samplePrompt: '“Send payment reminder to Sharma Traders for pending Invoice #1042.”',
    sampleOutput: '“Dear Sharma ji, gentle reminder regarding Invoice #1042 (₹14,500 due). Pay conveniently via UPI: upi://pay?pa=inheriq@icici...”',
    integrations: ['Tally Prime', 'Razorpay', 'Zoho Books', 'PhonePe', 'UPI Direct'],
    humanReviewRules: 'Sends automated reminders based on pre-set rules. Invoices over ₹50,000 or credit note issuances require finance manager approval.',
  },
  {
    id: 'marketing',
    name: 'Marketing AI (Rohan)',
    roleTitle: 'Content & Campaign Assistance',
    shortDesc: 'Designs high-converting WhatsApp broadcasts, crafts festival announcements, and re-engages inactive customers with personalized offers.',
    icon: Megaphone,
    color: '#059669',
    bgLight: '#ECFDF5',
    availableFeatures: [
      'WhatsApp promotional campaign draft creator',
      'Multi-lingual copywriting (Hindi, English, Hinglish)',
      'Automated customer win-back and anniversary workflows',
      'Campaign engagement tracking (deliveries, clicks, conversions)',
    ],
    exampleTasks: [
      'Draft festive promotional campaign tailored for VIP clinic clients',
      'Generate 3 local language variations for upcoming seasonal sale',
      'Re-engage 120 past customers inactive for 60+ days with custom voucher',
    ],
    samplePrompt: '“Create a Diwali promotional WhatsApp blast for 10% off on all clinic services.”',
    sampleOutput: '“🎉 Diwali Special Offer! Get 10% off all consultations this festive week. Use code DIWALI10. Tap to reserve your preferred slot now.”',
    integrations: ['WhatsApp API', 'Instagram', 'Meta Ads', 'Canva API', 'Mailchimp'],
    humanReviewRules: 'Drafts copy and segments audiences autonomously. Final broadcast sends strictly require marketing manager approval.',
  },
];

export function AIEmployees() {
  const [activeModalAgent, setActiveModalAgent] = useState<AgentDetail | null>(null);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [selectedDemoAgent, setSelectedDemoAgent] = useState('all');

  const handleOpenExplore = (agent: AgentDetail) => {
    setActiveModalAgent(agent);
  };

  const handleDeployAgent = (agentId: string) => {
    setSelectedDemoAgent(agentId);
    setActiveModalAgent(null);
    setIsDemoModalOpen(true);
  };

  return (
    <section id="ai-employees" className="py-24 bg-white border-b border-slate-200/80">
      <div className="container-custom">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Specialized AI Roles</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display tracking-tight">
            Meet Your Specialized <span className="text-blue-600">AI Employees</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Pre-trained on real business workflows. Click any employee card to inspect available features, human-in-the-loop controls, and sample outputs.
          </p>

          <div className="flex items-center justify-center gap-4 text-xs text-slate-500 pt-1">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
              Available Features
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block" />
              Illustrative Demonstrations
            </span>
          </div>
        </div>

        {/* 5 Agent Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AGENTS_DATA.map((agent) => {
            const Icon = agent.icon;
            return (
              <div
                key={agent.id}
                tabIndex={0}
                role="button"
                aria-label={`Explore ${agent.name}`}
                onClick={() => handleOpenExplore(agent)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleOpenExplore(agent);
                  }
                }}
                className="saas-card p-6 flex flex-col justify-between cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 group"
              >
                <div>
                  {/* Top Bar with Icon and Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform"
                      style={{ backgroundColor: agent.color }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                      24/7 Active
                    </span>
                  </div>

                  {/* Title and Short Description */}
                  <h3 className="text-xl font-bold text-slate-900 font-display group-hover:text-blue-600 transition-colors">
                    {agent.name}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mt-1 mb-3">
                    {agent.roleTitle}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {agent.shortDesc}
                  </p>

                  {/* Example Tasks List */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-100 mb-6">
                    <p className="text-xs font-bold text-slate-900 tracking-wide uppercase">
                      Example Tasks:
                    </p>
                    {agent.exampleTasks.slice(0, 3).map((task) => (
                      <div key={task} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2
                          className="w-4 h-4 mt-0.5 shrink-0"
                          style={{ color: agent.color }}
                        />
                        <span>{task}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-2">
                  <div className="w-full py-2.5 px-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 group-hover:bg-blue-50 group-hover:border-blue-200 group-hover:text-blue-700 transition-all flex items-center justify-center gap-1.5">
                    <span>Explore Agent Profile</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Workforce Summary / Orchestrator */}
          <div className="saas-card p-6 flex flex-col justify-between bg-gradient-to-br from-slate-900 to-[#0F172A] text-white border-slate-800">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-5 border border-blue-500/30">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-display">
                Inheriq Brain AI OS
              </h3>
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-400 mt-1 mb-3">
                Centralized Memory & Governance
              </p>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                All 5 AI Employees sync through your central company knowledge base, adhering to your custom tone, brand rules, and manager sign-off thresholds.
              </p>
              <div className="space-y-2 text-xs text-slate-300 pt-3 border-t border-slate-800">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Synchronized cross-department memory</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Role-based permission controls</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setSelectedDemoAgent('all');
                setIsDemoModalOpen(true);
              }}
              className="mt-6 w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-blue-500/20"
            >
              <span>Deploy All 5 Employees</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Agent Detail Modal */}
      <AnimatePresence>
        {activeModalAgent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalAgent(null)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', duration: 0.4, bounce: 0.15 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
              role="dialog"
              aria-modal="true"
              aria-labelledby="agent-modal-title"
            >
              {/* Modal Header */}
              <div
                className="px-6 py-5 text-white flex items-center justify-between border-b"
                style={{ backgroundColor: '#0F172A' }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-xs"
                    style={{ backgroundColor: activeModalAgent.color }}
                  >
                    <activeModalAgent.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 id="agent-modal-title" className="text-lg font-bold font-display">
                      {activeModalAgent.name}
                    </h3>
                    <p className="text-xs text-slate-400">{activeModalAgent.roleTitle}</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveModalAgent(null)}
                  className="text-slate-400 hover:text-white p-2 rounded-xl hover:bg-slate-800 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto space-y-6 text-slate-800">
                {/* Description */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                    Role Overview
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {activeModalAgent.shortDesc}
                  </p>
                </div>

                {/* Available Capabilities */}
                <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block" />
                    <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900">
                      Available Features (Product Ready)
                    </h4>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-2 mt-2">
                    {activeModalAgent.availableFeatures.map((f) => (
                      <div key={f} className="flex items-start gap-2 text-xs text-emerald-900">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Real Prompt Simulation Sandbox */}
                <div className="rounded-2xl bg-slate-900 text-white p-4 sm:p-5 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                    <span className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                      <Terminal className="w-4 h-4 text-blue-400" />
                      Task Execution Simulation
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400">● Verified Sandbox</span>
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Business Request / Trigger:
                    </p>
                    <div className="p-2.5 rounded-lg bg-slate-800/80 text-xs text-slate-200 font-mono">
                      {activeModalAgent.samplePrompt}
                    </div>
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-blue-400 mb-1">
                      AI Generated Output (Ready for Approval):
                    </p>
                    <div className="p-3 rounded-lg bg-blue-950/40 border border-blue-900/60 text-xs text-blue-100 leading-relaxed">
                      {activeModalAgent.sampleOutput}
                    </div>
                  </div>
                </div>

                {/* Human-in-the-Loop Governance */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                    <Shield className="w-4 h-4 text-blue-600" />
                    <span>Human Approval Checkpoint Rules</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {activeModalAgent.humanReviewRules}
                  </p>
                </div>

                {/* Integrations */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Supported Integrations
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalAgent.integrations.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-slate-500 text-center sm:text-left">
                  Need custom rules? Agents can be trained on your internal SOPs.
                </span>
                <button
                  type="button"
                  onClick={() => handleDeployAgent(activeModalAgent.id)}
                  className="btn-primary w-full sm:w-auto text-xs py-2.5 px-5"
                >
                  <span>Book Demo for {activeModalAgent.name.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        defaultAgent={selectedDemoAgent}
      />
    </section>
  );
}
