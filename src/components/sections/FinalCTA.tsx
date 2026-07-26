'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export function FinalCTA() {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/[0.08] blur-[150px] rounded-full" />
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-secondary/[0.06] blur-[150px] rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/[0.05] text-sm mb-8">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-accent font-medium">Start Your Free Trial Today</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight font-display mb-6">
            Ready to Hire Your{' '}
            <span className="gradient-text">AI Workforce?</span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-text-secondary leading-relaxed mb-10 max-w-xl mx-auto">
            Join hundreds of Indian businesses that already have their AI team working 24/7. 
            Setup takes just 5 minutes.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary text-base px-8 py-4 shadow-xl shadow-accent/20">
              <span className="flex items-center gap-2">
                Start Free <ArrowRight className="w-5 h-5" />
              </span>
            </Link>
            <Link href="/demo" className="btn-secondary text-base px-8 py-4">
              Book Demo
            </Link>
          </div>

          {/* Trust */}
          <div className="mt-8 flex items-center justify-center gap-6 text-text-muted text-xs">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              7-day free trial
            </span>
            <span className="w-px h-4 bg-border" />
            <span>No credit card</span>
            <span className="w-px h-4 bg-border hidden sm:block" />
            <span className="hidden sm:block">Cancel anytime</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
