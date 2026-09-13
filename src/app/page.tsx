'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ParticleBackground, CursorGlow } from '@/components/ui';
import { Hero } from '@/components/sections/Hero';
import { TrustedNumbers } from '@/components/sections/TrustedNumbers';
import { Problem } from '@/components/sections/Problem';
import { AIWorkforce } from '@/components/sections/AIWorkforce';
import { BrainAI } from '@/components/sections/BrainAI';
import { Dashboard } from '@/components/sections/Dashboard';
import { Comparison } from '@/components/sections/Comparison';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Industries } from '@/components/sections/Industries';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { FinalCTA } from '@/components/sections/FinalCTA';

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <CursorGlow />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <TrustedNumbers />
        <Problem />
        <AIWorkforce />
        <BrainAI />
        <Dashboard />
        <Comparison />
        <HowItWorks />
        <Industries />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
