'use client';

import { SectionWrapper, AnimatedCounter, SectionHeading, StaggerContainer, StaggerItem } from '@/components/ui';
import { TRUSTED_NUMBERS } from '@/lib/constants';

export function TrustedNumbers() {
  return (
    <SectionWrapper className="relative" id="trusted-numbers">
      <div className="container-custom">
        <SectionHeading
          badge="Why Inheriq"
          title="Built for India's Businesses"
          titleGradient="India's Businesses"
          subtitle="Designed specifically for the unique needs of 63 million Indian MSMEs."
        />

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {TRUSTED_NUMBERS.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="glass-card p-6 sm:p-8 text-center group">
                {/* Large number */}
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display mb-3 gradient-text">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                {/* Label */}
                <h3 className="text-base sm:text-lg font-semibold mb-2">{stat.label}</h3>
                {/* Description */}
                <p className="text-sm text-text-secondary leading-relaxed">{stat.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </SectionWrapper>
  );
}
