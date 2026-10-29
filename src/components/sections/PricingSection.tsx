'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { DemoModal } from '@/components/ui/DemoModal';

interface Plan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  popular?: boolean;
  features: string[];
  ctaLabel: string;
}

const PLANS: Plan[] = [
  {
    id: 'starter',
    name: 'Starter OS',
    tagline: 'Ideal for small businesses automating 1 core workflow',
    price: '₹4,999',
    period: '/month',
    features: [
      '1 Specialized AI Employee (Sales, Support, or Finance)',
      'WhatsApp Business API integration',
      'Up to 1,000 automated conversations/month',
      'Central Brain AI memory (up to 5 documents)',
      'Standard human-in-the-loop review queue',
      'Email and chat support',
    ],
    ctaLabel: 'Start 7-Day Free Trial',
  },
  {
    id: 'growth',
    name: 'Growth Workforce OS',
    tagline: 'Complete 5-agent digital team for growing companies',
    price: '₹14,999',
    period: '/month',
    popular: true,
    features: [
      'All 5 AI Employees (Sales, Support, HR, Finance, Marketing)',
      'Unlimited WhatsApp & Web Widget conversations',
      'Full Brain AI memory with automated document re-indexing',
      'Custom human approval rules & escalation thresholds',
      'Integrations with Tally Prime, Razorpay, Zoho & HubSpot',
      'Daily 8:00 PM automated WhatsApp executive briefing',
      'Priority onboarding & dedicated account engineer',
    ],
    ctaLabel: 'Deploy Full Workforce',
  },
  {
    id: 'enterprise',
    name: 'Custom Enterprise',
    tagline: 'For high-volume operations requiring tailored workflows',
    price: 'Custom',
    period: 'tailored billing',
    features: [
      'Custom AI employee roles & custom LLM fine-tuning',
      'Unlimited conversations & dedicated high-throughput infrastructure',
      'Custom ERP integrations (SAP, Oracle, custom REST APIs)',
      'Custom role-based permissions & audit log export',
      'Dedicated SLA with sub-minute failover guarantees',
      'Enterprise data isolation & custom DPDP compliance',
    ],
    ctaLabel: 'Schedule Enterprise Demo',
  },
];

export function PricingSection() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState('growth');

  const handleSelectPlan = (planId: string) => {
    setSelectedPlanId(planId);
    setIsDemoModalOpen(true);
  };

  return (
    <section id="pricing" className="py-24 bg-white border-b border-slate-200/80">
      <div className="container-custom">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Pricing</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display tracking-tight">
            Predictable Pricing for <span className="text-blue-600">Growing Businesses</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            No hidden fees. Every plan includes human approval gates, centralized Brain AI memory, and 24/7 reliability.
          </p>

          <div className="flex items-center justify-center gap-3 text-xs text-slate-500 pt-1">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              7-Day Risk-Free Evaluation
            </span>
            <span>•</span>
            <span>Cancel anytime</span>
            <span>•</span>
            <span>No long-term lock-in</span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {PLANS.map((plan) => {
            const isPopular = plan.popular;
            return (
              <div
                key={plan.id}
                className={`saas-card p-7 sm:p-8 flex flex-col justify-between relative transition-all ${
                  isPopular
                    ? 'border-blue-500 shadow-xl ring-2 ring-blue-500/10'
                    : 'hover:border-slate-300'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-blue-600 text-white text-[11px] font-bold uppercase tracking-wider shadow-sm flex items-center gap-1">
                    <Zap className="w-3 h-3" />
                    <span>Most Popular</span>
                  </div>
                )}

                <div>
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-slate-900 font-display">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 min-h-[32px]">
                      {plan.tagline}
                    </p>
                  </div>

                  <div className="mb-6 pb-6 border-b border-slate-100 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-slate-900 font-display">
                      {plan.price}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">{plan.period}</span>
                  </div>

                  {/* Feature checklist */}
                  <div className="space-y-3 mb-8">
                    <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Included Capabilities:
                    </p>
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleSelectPlan(plan.id)}
                  className={`w-full py-3 px-4 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                    isPopular
                      ? 'btn-primary shadow-md shadow-blue-500/20'
                      : 'btn-secondary'
                  }`}
                >
                  <span>{plan.ctaLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        defaultAgent={selectedPlanId === 'starter' ? 'sales' : 'all'}
      />
    </section>
  );
}
