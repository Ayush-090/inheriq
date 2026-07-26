'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { SectionWrapper, SectionHeading, GradientText } from '@/components/ui';
import { PROBLEMS } from '@/lib/constants';
import { CheckCircle2 } from 'lucide-react';

export function Problem() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(timelineRef, { once: true, margin: '-100px' });

  return (
    <SectionWrapper id="problem">
      <div className="container-custom">
        <SectionHeading
          badge="The Problem"
          title="Small businesses lose money every single day."
          subtitle="These problems cost Indian MSMEs crores every year. Most don't even realize it."
        />

        {/* Timeline */}
        <div ref={timelineRef} className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px">
            <motion.div
              className="w-full bg-gradient-to-b from-red-500/50 via-red-400/30 to-accent/50 rounded-full"
              initial={{ height: 0 }}
              animate={isInView ? { height: '100%' } : { height: 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
          </div>

          {/* Problem items */}
          <div className="space-y-6">
            {PROBLEMS.map((problem, i) => {
              const Icon = problem.icon;
              return (
                <motion.div
                  key={problem.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
                  className="relative flex items-start gap-5 pl-14 sm:pl-20"
                >
                  {/* Dot on line */}
                  <div className="absolute left-4 sm:left-6 top-3 w-4 h-4 rounded-full bg-red-500/20 border-2 border-red-500/50 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  </div>
                  
                  {/* Content */}
                  <div className="glass-card p-5 flex-1 group border-red-500/10 hover:border-red-500/20">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-red-400" />
                      </div>
                      <h3 className="text-lg font-semibold">{problem.title}</h3>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed">{problem.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Solution banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mt-12 relative"
          >
            <div className="absolute -inset-4 bg-accent/5 blur-[60px] rounded-full" />
            <div className="relative glass-card p-6 sm:p-8 text-center border-accent/20">
              <div className="flex items-center justify-center gap-3 mb-3">
                <CheckCircle2 className="w-7 h-7 text-success" />
                <h3 className="text-xl sm:text-2xl font-bold">
                  All solved by <GradientText>Inheriq.</GradientText>
                </h3>
              </div>
              <p className="text-text-secondary text-sm max-w-md mx-auto">
                One AI workforce handles everything — so you can focus on growing your business.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
