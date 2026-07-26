'use client';

import { SectionWrapper, SectionHeading, GlowCard, StaggerContainer, StaggerItem } from '@/components/ui';
import { INDUSTRIES } from '@/lib/constants';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function Industries() {
  return (
    <SectionWrapper id="industries">
      <div className="container-custom">
        <SectionHeading
          badge="Industries"
          title="Built for Every Indian Business"
          titleGradient="Every Indian Business"
          subtitle="From clinics to restaurants, our AI workforce adapts to your specific industry needs."
        />

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {INDUSTRIES.map((industry) => {
            const Icon = industry.icon;
            return (
              <StaggerItem key={industry.name}>
                <GlowCard glowColor={industry.color} className="h-full">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${industry.color}12` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: industry.color }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-bold mb-1.5">{industry.name}</h3>
                      <p className="text-sm text-text-secondary leading-relaxed">{industry.description}</p>
                    </div>
                  </div>
                </GlowCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/industries"
            className="btn-secondary inline-flex items-center gap-2"
          >
            Explore All Industries <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
