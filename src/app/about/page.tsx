'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SectionWrapper, GradientText, GlowCard, CursorGlow, StaggerContainer, StaggerItem } from '@/components/ui';
import { motion } from 'framer-motion';
import { Target, Eye, Globe, Shield, Heart, Rocket, Users, MapPin } from 'lucide-react';

const values = [
  { icon: Heart, title: 'Built for India', description: 'Every feature is designed for Indian business owners — from Hindi support to UPI integration.', color: '#FF6B8A' },
  { icon: Shield, title: 'Trust First', description: 'Bank-grade security. Indian servers. Your data never leaves the country.', color: '#5B8CFF' },
  { icon: Users, title: 'Simplicity', description: 'If you can use WhatsApp, you can use Inheriq. No training needed.', color: '#7B61FF' },
  { icon: Rocket, title: 'AI-Native', description: 'Not bolted-on AI. Every agent is purpose-built with the latest AI models.', color: '#00D68F' },
];

const roadmap = [
  { quarter: 'Q3 2026', items: ['Launch Sales & Support Agents', 'Hindi + English support', 'WhatsApp integration', '100 beta customers'] },
  { quarter: 'Q4 2026', items: ['HR & Finance Agents', 'Tamil, Telugu, Marathi support', 'Voice calling capability', '1,000 customers'] },
  { quarter: 'Q1 2027', items: ['Marketing Agent', 'Advanced analytics dashboard', 'API for custom integrations', '5,000 customers'] },
  { quarter: 'Q2 2027', items: ['Industry-specific templates', 'Multi-location support', 'Enterprise features', '10,000 customers'] },
];

export default function AboutPage() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main className="relative z-10 pt-24">
        {/* Hero */}
        <SectionWrapper>
          <div className="container-custom text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-white/[0.03] text-sm mb-6"
            >
              <Globe className="w-4 h-4 text-accent" />
              <span className="text-text-secondary">About Inheriq</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight mb-6"
            >
              We&apos;re building the future of{' '}
              <GradientText>work for India.</GradientText>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto"
            >
              63 million Indian MSMEs deserve the same powerful tools that large enterprises have. 
              We&apos;re making that possible with AI.
            </motion.p>
          </div>
        </SectionWrapper>

        {/* Vision & Mission */}
        <SectionWrapper>
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <GlowCard glowColor="#5B8CFF" hover={false}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Eye className="w-6 h-6 text-accent" />
                  </div>
                  <h2 className="text-xl font-bold font-display">Our Vision</h2>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  A world where every small business in India has access to a tireless, 
                  intelligent workforce that speaks their language, understands their challenges, 
                  and works 24/7 to grow their business.
                </p>
              </GlowCard>

              <GlowCard glowColor="#7B61FF" hover={false}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <Target className="w-6 h-6 text-secondary" />
                  </div>
                  <h2 className="text-xl font-bold font-display">Our Mission</h2>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  Build the world&apos;s most trusted AI workforce platform for small businesses. 
                  Make enterprise-grade AI accessible to every MSME owner — 
                  in Hindi, English, and every regional language.
                </p>
              </GlowCard>
            </div>
          </div>
        </SectionWrapper>

        {/* Values */}
        <SectionWrapper>
          <div className="container-custom">
            <h2 className="text-3xl font-bold font-display text-center mb-12">
              What We <GradientText>Stand For</GradientText>
            </h2>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <StaggerItem key={value.title}>
                    <GlowCard glowColor={value.color} className="text-center h-full">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                        style={{ backgroundColor: `${value.color}12` }}
                      >
                        <Icon className="w-7 h-7" style={{ color: value.color }} />
                      </div>
                      <h3 className="text-base font-bold mb-2">{value.title}</h3>
                      <p className="text-sm text-text-secondary leading-relaxed">{value.description}</p>
                    </GlowCard>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </SectionWrapper>

        {/* Roadmap */}
        <SectionWrapper>
          <div className="container-custom">
            <h2 className="text-3xl font-bold font-display text-center mb-12">
              Our <GradientText>Roadmap</GradientText>
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {roadmap.map((item, i) => (
                <motion.div
                  key={item.quarter}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-6 flex gap-5"
                >
                  <div className="shrink-0">
                    <span className="inline-block px-3 py-1.5 rounded-lg bg-accent/10 text-accent text-sm font-bold">
                      {item.quarter}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {item.items.map((milestone) => (
                      <li key={milestone} className="flex items-center gap-2 text-sm text-text-secondary">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        {milestone}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* Local Language Focus */}
        <SectionWrapper>
          <div className="container-custom text-center">
            <div className="max-w-3xl mx-auto glass-card p-8 sm:p-12">
              <MapPin className="w-10 h-10 text-accent mx-auto mb-4" />
              <h2 className="text-2xl sm:text-3xl font-bold font-display mb-4">
                Local Language, <GradientText>Global Standards</GradientText>
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                We believe that language should never be a barrier to business growth. 
                Inheriq speaks Hindi, English, Tamil, Telugu, Marathi, and Bengali — 
                with more languages being added every month. Your customers and employees 
                interact with AI in the language they&apos;re most comfortable with.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {['हिंदी', 'English', 'தமிழ்', 'తెలుగు', 'मराठी', 'বাংলা'].map((lang) => (
                  <span key={lang} className="px-4 py-2 rounded-xl border border-accent/20 bg-accent/5 text-sm font-medium">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
