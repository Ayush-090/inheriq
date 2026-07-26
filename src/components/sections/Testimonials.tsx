'use client';

import { motion } from 'framer-motion';
import { SectionWrapper, SectionHeading, StaggerContainer, StaggerItem } from '@/components/ui';
import { TESTIMONIALS } from '@/lib/constants';
import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  return (
    <SectionWrapper id="testimonials">
      <div className="container-custom">
        <SectionHeading
          badge="Success Stories"
          title="Trusted by Indian Business Owners"
          titleGradient="Business Owners"
          subtitle="Real stories from real business owners who transformed their operations with Inheriq."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((testimonial, i) => (
            <StaggerItem key={testimonial.name}>
              <motion.div
                className="glass-card p-6 h-full flex flex-col"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-accent/20 mb-4" />

                {/* Content */}
                <p className="text-sm text-text-secondary leading-relaxed flex-1 mb-5">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center text-sm font-bold text-accent">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{testimonial.name}</p>
                    <p className="text-xs text-text-secondary">{testimonial.role}</p>
                    <p className="text-xs text-text-muted">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </SectionWrapper>
  );
}
