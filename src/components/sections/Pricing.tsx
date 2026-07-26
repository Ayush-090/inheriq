'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper, SectionHeading, StaggerContainer, StaggerItem, GradientText } from '@/components/ui';
import { PRICING_PLANS } from '@/lib/constants';
import { Check, Shield, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <SectionWrapper id="pricing">
      <div className="container-custom">
        <SectionHeading
          badge="Pricing"
          title="Simple, Transparent Pricing"
          titleGradient="Transparent Pricing"
          subtitle="Start free. Scale as you grow. No hidden charges."
        />

        {/* Billing toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-sm font-medium transition-colors ${!isAnnual ? 'text-white' : 'text-text-secondary'}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
              isAnnual ? 'bg-accent' : 'bg-white/10'
            }`}
          >
            <motion.div
              className="absolute top-1 w-5 h-5 rounded-full bg-white shadow-md"
              animate={{ left: isAnnual ? '32px' : '4px' }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          </button>
          <span className={`text-sm font-medium transition-colors ${isAnnual ? 'text-white' : 'text-text-secondary'}`}>
            Annual
            <span className="ml-2 text-xs text-success font-semibold">Save 20%</span>
          </span>
        </div>

        {/* Plans */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {PRICING_PLANS.map((plan) => (
            <StaggerItem key={plan.name}>
              <motion.div
                className={`relative rounded-2xl p-6 h-full flex flex-col ${
                  plan.highlighted
                    ? 'bg-gradient-to-b from-accent/[0.08] to-bg-card border-2 border-accent/30 shadow-xl shadow-accent/5'
                    : 'bg-bg-card border border-border'
                }`}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-white text-xs font-semibold shadow-lg shadow-accent/30">
                    {plan.badge}
                  </div>
                )}

                {/* Plan name */}
                <h3 className="text-lg font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-text-secondary mb-5">{plan.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-3xl sm:text-4xl font-bold font-display">
                    {plan.price === 'Custom' ? (
                      <GradientText>Custom</GradientText>
                    ) : isAnnual ? (
                      <>
                        <span className="line-through text-text-muted text-xl mr-2">{plan.price}</span>
                        ₹{Math.round(parseInt(plan.price.replace(/[₹,]/g, '')) * 0.8).toLocaleString('en-IN')}
                      </>
                    ) : (
                      plan.price
                    )}
                  </span>
                  {plan.period && (
                    <span className="text-text-secondary text-sm">{plan.period}</span>
                  )}
                </div>

                {/* CTA */}
                <Link
                  href={plan.name === 'Enterprise' ? '/contact' : '/demo'}
                  className={`w-full text-center py-3 rounded-xl text-sm font-semibold mb-6 transition-all duration-300 flex items-center justify-center gap-2 ${
                    plan.highlighted
                      ? 'btn-primary'
                      : 'btn-secondary'
                  }`}
                >
                  <span className="flex items-center justify-center gap-2">
                    {plan.cta}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>

                {/* Features */}
                <ul className="space-y-3 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <Check className={`w-4 h-4 mt-0.5 shrink-0 ${
                        plan.highlighted ? 'text-accent' : 'text-success'
                      }`} />
                      <span className="text-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10 flex items-center justify-center gap-2 text-sm text-text-secondary"
        >
          <Shield className="w-4 h-4 text-success" />
          7-Day Risk-Free Demo · No Credit Card Required · Cancel Anytime
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
