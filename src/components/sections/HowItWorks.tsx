'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { SectionWrapper, SectionHeading } from '@/components/ui';
import { STEPS } from '@/lib/constants';

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <SectionWrapper id="how-it-works">
      <div className="container-custom">
        <SectionHeading
          badge="Simple Setup"
          title="Up and Running in 5 Minutes"
          titleGradient="5 Minutes"
          subtitle="No complicated setup. No technical knowledge. Just sign up and let your AI workforce handle the rest."
        />

        <div ref={ref} className="max-w-3xl mx-auto relative">
          {/* Animated connecting line */}
          <div className="absolute left-6 sm:left-8 top-8 bottom-8 w-px">
            <motion.div
              className="w-full rounded-full"
              style={{
                background: 'linear-gradient(to bottom, #5B8CFF, #7B61FF, #00D68F)',
              }}
              initial={{ height: 0 }}
              animate={isInView ? { height: '100%' } : { height: 0 }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            />
          </div>

          <div className="space-y-8">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ delay: 0.3 + i * 0.2, duration: 0.6 }}
                  className="relative flex gap-5 sm:gap-8 items-start pl-2"
                >
                  {/* Step number bubble */}
                  <div className="relative z-10 shrink-0">
                    <div
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-lg font-bold"
                      style={{
                        background: `linear-gradient(135deg, ${
                          i < 2 ? '#5B8CFF' : i < 4 ? '#7B61FF' : '#00D68F'
                        }20, transparent)`,
                        border: `1px solid ${
                          i < 2 ? '#5B8CFF' : i < 4 ? '#7B61FF' : '#00D68F'
                        }30`,
                        color: i < 2 ? '#5B8CFF' : i < 4 ? '#7B61FF' : '#00D68F',
                      }}
                    >
                      {step.number}
                    </div>
                    {/* Pulse ring */}
                    {i === STEPS.length - 1 && (
                      <div className="absolute inset-0 rounded-2xl animate-ping bg-success/10" style={{ animationDuration: '2s' }} />
                    )}
                  </div>

                  {/* Content */}
                  <div className="glass-card p-5 sm:p-6 flex-1 group">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon
                        className="w-5 h-5"
                        style={{
                          color: i < 2 ? '#5B8CFF' : i < 4 ? '#7B61FF' : '#00D68F',
                        }}
                      />
                      <h3 className="text-lg font-bold">{step.title}</h3>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
