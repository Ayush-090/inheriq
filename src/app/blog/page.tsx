'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SectionWrapper, GradientText, GlowCard, CursorGlow, StaggerContainer, StaggerItem } from '@/components/ui';
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight, Clock, Tag } from 'lucide-react';
import Link from 'next/link';

const blogPosts = [
  {
    title: 'How AI is Transforming Indian MSMEs in 2026',
    excerpt: 'Discover how 63 million Indian small businesses are leveraging AI to compete with large enterprises.',
    category: 'AI Trends',
    readTime: '5 min read',
    date: 'July 2026',
  },
  {
    title: 'Why Your Business Needs an AI Sales Agent',
    excerpt: 'Stop losing leads. Learn how AI sales agents are booking 3x more meetings for Indian businesses.',
    category: 'Sales',
    readTime: '4 min read',
    date: 'July 2026',
  },
  {
    title: 'WhatsApp Business Automation: The Complete Guide',
    excerpt: 'Everything you need to know about automating your business communication via WhatsApp.',
    category: 'WhatsApp',
    readTime: '7 min read',
    date: 'June 2026',
  },
  {
    title: 'AI vs. Chatbots: What\'s the Real Difference?',
    excerpt: 'Chatbots answer questions. AI agents do actual work. Here\'s why that distinction matters.',
    category: 'Education',
    readTime: '3 min read',
    date: 'June 2026',
  },
  {
    title: 'The Future of HR for Small Businesses',
    excerpt: 'How AI HR agents are eliminating paperwork and giving small business owners their time back.',
    category: 'HR',
    readTime: '5 min read',
    date: 'May 2026',
  },
  {
    title: 'Building Trust: Why Data Security Matters for MSMEs',
    excerpt: 'How Inheriq keeps your business data safe with bank-grade encryption and Indian servers.',
    category: 'Security',
    readTime: '4 min read',
    date: 'May 2026',
  },
];

export default function BlogPage() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main className="relative z-10 pt-24">
        <SectionWrapper>
          <div className="container-custom">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-white/[0.03] text-sm mb-6"
              >
                <BookOpen className="w-4 h-4 text-accent" />
                <span className="text-text-secondary">Blog & Insights</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl font-bold font-display tracking-tight mb-6"
              >
                Insights for{' '}
                <GradientText>Indian Businesses</GradientText>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-text-secondary max-w-xl mx-auto"
              >
                Tips, guides, and stories about AI, business automation, and growing your MSME.
              </motion.p>
            </div>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {blogPosts.map((post) => (
                <StaggerItem key={post.title}>
                  <GlowCard glowColor="#5B8CFF" className="h-full flex flex-col">
                    {/* Category & meta */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-accent/10 text-accent">
                        <Tag className="w-3 h-3 inline mr-1" />
                        {post.category}
                      </span>
                      <span className="text-xs text-text-muted flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold mb-3 leading-snug">{post.title}</h3>

                    {/* Excerpt */}
                    <p className="text-sm text-text-secondary leading-relaxed flex-1 mb-4">{post.excerpt}</p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-xs text-text-muted">{post.date}</span>
                      <span className="text-xs text-accent flex items-center gap-1 group cursor-pointer">
                        Read More <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </GlowCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
