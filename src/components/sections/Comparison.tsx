'use client';

import { motion } from 'framer-motion';
import { SectionWrapper, SectionHeading, StaggerContainer, StaggerItem } from '@/components/ui';
import { COMPARISON } from '@/lib/constants';
import { X, Check, Zap } from 'lucide-react';

export function Comparison() {
  return (
    <SectionWrapper id="comparison">
      <div className="container-custom">
        <SectionHeading
          badge="Why Switch"
          title="Why We're Different"
          titleGradient="Different"
          subtitle="Stop juggling 10 different apps. Get one AI workforce that does it all."
        />

        <div className="max-w-4xl mx-auto">
          <StaggerContainer className="space-y-0">
            {/* Header */}
            <StaggerItem>
              <div className="grid grid-cols-3 gap-3 mb-3">
                <div className="text-sm font-semibold text-text-secondary px-4 py-3">
                  Feature
                </div>
                <div className="text-sm font-semibold text-red-400/80 px-4 py-3 text-center rounded-t-xl bg-red-400/[0.04] border border-red-400/10 border-b-0">
                  Traditional Software
                </div>
                <div className="text-sm font-semibold text-accent px-4 py-3 text-center rounded-t-xl bg-accent/[0.06] border border-accent/20 border-b-0">
                  <span className="flex items-center justify-center gap-1.5">
                    <Zap className="w-4 h-4" />
                    Inheriq
                  </span>
                </div>
              </div>
            </StaggerItem>

            {/* Rows */}
            {COMPARISON.rows.map((row, i) => (
              <StaggerItem key={i}>
                <motion.div
                  className="grid grid-cols-3 gap-3 group"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-sm font-medium px-4 py-4 border-b border-border flex items-center">
                    {row[0]}
                  </div>
                  <div className="text-sm text-text-secondary px-4 py-4 text-center border-b border-red-400/10 bg-red-400/[0.02] flex items-center justify-center gap-2">
                    <X className="w-3.5 h-3.5 text-red-400/60 shrink-0" />
                    <span className="text-left">{row[1]}</span>
                  </div>
                  <div className="text-sm px-4 py-4 text-center border-b border-accent/10 bg-accent/[0.03] flex items-center justify-center gap-2">
                    <Check className="w-3.5 h-3.5 text-success shrink-0" />
                    <span className="text-left text-white/90">{row[2]}</span>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}

            {/* Bottom rounded borders */}
            <div className="grid grid-cols-3 gap-3">
              <div />
              <div className="h-3 rounded-b-xl bg-red-400/[0.02] border border-red-400/10 border-t-0" />
              <div className="h-3 rounded-b-xl bg-accent/[0.03] border border-accent/20 border-t-0" />
            </div>
          </StaggerContainer>
        </div>
      </div>
    </SectionWrapper>
  );
}
