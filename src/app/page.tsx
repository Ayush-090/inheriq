'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { AIEmployees } from '@/components/sections/AIEmployees';
import { WorkflowDemo } from '@/components/sections/WorkflowDemo';
import { BeforeAfter } from '@/components/sections/BeforeAfter';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { ProductPreview } from '@/components/sections/ProductPreview';
import { UseCases } from '@/components/sections/UseCases';
import { ControlTrust } from '@/components/sections/ControlTrust';
import { PricingSection } from '@/components/sections/PricingSection';
import { FinalCTA } from '@/components/sections/FinalCTA';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDFEFE] text-[#0A1128] dark:bg-[#070B18] dark:text-[#F8FAFC] font-sans antialiased selection:bg-blue-600/10 selection:text-blue-700 transition-colors duration-200">
      <Navbar />
      <main id="main-content" className="relative">
        {/* 1. Attention-Grabbing Hero with Animated 5-Agent Composition */}
        <Hero />

        {/* 2. Interactive AI Employees (Sales, Support, HR, Finance, Marketing) */}
        <AIEmployees />

        {/* 3. Live Workflow Demonstration with Play/Replay & Human Approval */}
        <WorkflowDemo />

        {/* 4. Before & After: Repetitive Manual Work vs AI-Assisted Workflows */}
        <BeforeAfter />

        {/* 5. How Inheriq Works: Choose -> Configure -> Assign & Review */}
        <HowItWorks />

        {/* 6. Interactive Product Preview: Sample Workforce Workspace */}
        <ProductPreview />

        {/* 7. Use Cases: Clickable Tabs (Sales, Support, HR, Finance, Operations) */}
        <UseCases />

        {/* 8. Control & Trust: Human Approval, Permissions & Audit Trail */}
        <ControlTrust />

        {/* 9. Transparent Pricing for Startups and SMBs */}
        <PricingSection />

        {/* 10. Final Conversion: “Your Next Teammate Could Be AI.” */}
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
