'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Bell, ShieldCheck } from 'lucide-react';
import { useState, useEffect } from 'react';
import { getGoogleFormUrl } from '@/lib/site-config';

const notifications = [
  { text: 'Arjun booked 3 sales meetings on WhatsApp', color: '#5B8CFF', delay: 1 },
  { text: 'Kavya generated 46 payslips for warehouse staff', color: '#7B61FF', delay: 3.5 },
  { text: 'Rohan sent Diwali WhatsApp blast to 3,850 clients', color: '#00D68F', delay: 6 },
  { text: 'Vikram recovered ₹18,500 pending invoice via UPI', color: '#FFB547', delay: 8.5 },
  { text: 'Priya answered 78 customer queries in Hindi 24/7', color: '#FF6B8A', delay: 11 },
];

function DashboardMockup() {
  const [activeNotif, setActiveNotif] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNotif((prev) => (prev + 1) % notifications.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-[620px] mx-auto">
      {/* High impact glow backdrop */}
      <div className="absolute -inset-10 bg-gradient-to-tr from-accent/20 via-secondary/15 to-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Main dashboard card */}
      <motion.div
        initial={{ opacity: 0, y: 30, rotateX: 4 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="relative glass-strong p-5 sm:p-6 shadow-2xl border-white/10 rounded-3xl"
        style={{ perspective: '1000px' }}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between mb-5 border-b border-border pb-3">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
            <div className="w-3 h-3 rounded-full bg-green-400/80" />
            <span className="text-xs text-text-muted ml-2 font-mono">inheriq.app/dashboard</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-success bg-success/10 px-2.5 py-1 rounded-full border border-success/20">
            <span className="w-2 h-2 rounded-full bg-success animate-ping" />
            <span>5 Digital Workers Active</span>
          </div>
        </div>

        {/* AI Workers Pills Bar */}
        <div className="flex gap-2 mb-5 overflow-x-auto pb-1">
          {[
            { name: 'Arjun (Sales)', color: '#5B8CFF', active: true },
            { name: 'Kavya (HR)', color: '#7B61FF', active: false },
            { name: 'Rohan (Marketing)', color: '#00D68F', active: false },
            { name: 'Priya (Support)', color: '#FF6B8A', active: false },
            { name: 'Vikram (Finance)', color: '#FFB547', active: false },
          ].map((worker) => (
            <div
              key={worker.name}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-300 flex items-center gap-1.5 ${
                worker.active
                  ? 'bg-accent/20 text-accent border border-accent/40 shadow-sm'
                  : 'text-text-secondary border border-border bg-white/[0.02]'
              }`}
            >
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: worker.color }} />
              {worker.name}
            </div>
          ))}
        </div>

        {/* Metrics Row */}
        <div className="grid grid-cols-4 gap-2 sm:gap-3 mb-5">
          {[
            { label: 'Leads Contacted', value: '38', change: '+18 today' },
            { label: 'Meetings Booked', value: '12', change: '100% on WhatsApp' },
            { label: 'Queries Answered', value: '78', change: '<6s response' },
            { label: 'Revenue Recovered', value: '₹3.1L', change: '+96% dues' },
          ].map((metric) => (
            <div key={metric.label} className="bg-white/[0.03] rounded-xl p-2.5 sm:p-3 border border-border">
              <p className="text-[10px] text-text-muted font-medium truncate">{metric.label}</p>
              <p className="text-base sm:text-lg font-bold mt-0.5 text-white">{metric.value}</p>
              <p className="text-[9px] text-success font-medium mt-0.5 truncate">{metric.change}</p>
            </div>
          ))}
        </div>

        {/* Performance Chart Simulation */}
        <div className="bg-white/[0.02] rounded-2xl p-4 border border-border mb-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-text-secondary">Weekly Business Automation Output</span>
            <span className="text-xs text-success font-semibold">3.4x ROI Achieved ↑</span>
          </div>
          <div className="flex items-end gap-2 h-16">
            {[35, 52, 45, 68, 60, 82, 94].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.8, delay: 0.6 + i * 0.08 }}
                className="flex-1 rounded-t-md bg-gradient-to-t from-accent/30 via-accent/70 to-secondary"
              />
            ))}
          </div>
          <div className="flex justify-between mt-2">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d) => (
              <span key={d} className="text-[9px] text-text-muted flex-1 text-center font-medium">{d}</span>
            ))}
          </div>
        </div>

        {/* Live Conversation Stream */}
        <div className="space-y-2">
          {[
            { worker: 'Arjun', msg: 'Booked root canal appointment for Ramesh Kumar (4 PM)', time: '2m', tag: 'Sales' },
            { worker: 'Priya', msg: 'Answered clinic parking query in Hindi automatically', time: '5m', tag: 'Support' },
            { worker: 'Vikram', msg: 'Invoice #1290 (₹18,500) paid via UPI link', time: '12m', tag: 'Finance' },
          ].map((item, i) => (
            <motion.div
              key={item.worker + i}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 + i * 0.15 }}
              className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.03] border border-border"
            >
              <div className="w-8 h-8 rounded-xl bg-accent/20 flex items-center justify-center text-xs font-bold text-accent shrink-0">
                {item.worker[0]}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-white truncate">{item.worker} — {item.msg}</p>
              </div>
              <span className="text-[9px] px-2 py-0.5 rounded-md bg-accent/15 text-accent font-medium shrink-0">
                {item.tag}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Floating Animated Notification */}
      <motion.div
        key={activeNotif}
        initial={{ opacity: 0, y: 15, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4 }}
        className="absolute -top-5 -right-2 sm:-right-4 glass-strong px-4 py-3 flex items-center gap-3 shadow-2xl border-accent/30 z-20 rounded-2xl"
      >
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center text-white shrink-0 shadow-md">
          <Bell className="w-4 h-4" />
        </div>
        <div>
          <p className="text-xs font-bold text-white">{notifications[activeNotif].text}</p>
          <p className="text-[10px] text-text-muted">Inheriq AI Employee · Just Now</p>
        </div>
      </motion.div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background radial lights */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[700px] h-[700px] bg-accent/[0.08] rounded-full blur-[160px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-secondary/[0.08] rounded-full blur-[160px] animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 items-center">
          {/* Left Copy */}
          <div className="max-w-2xl">
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-xs sm:text-sm font-semibold mb-6 text-accent shadow-sm"
            >
              <Sparkles className="w-4 h-4" />
              <span>AI Employees: Your 24/7 Digital Team</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.08] font-display mb-6"
            >
              Hire Your First{' '}
              <span className="gradient-text">AI Employees Team</span> That Never Sleep.
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base sm:text-lg text-text-secondary leading-relaxed mb-8 max-w-xl"
            >
              Get Arjun, Kavya, Rohan, Priya & Vikram — a complete 24/7 digital team that handles your calls, WhatsApp, sales, marketing, customer support, invoicing, and HR without adding headcount.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <a href={getGoogleFormUrl()} target="_blank" rel="noreferrer" className="btn-primary text-base px-8 py-4 shadow-xl shadow-accent/25">
                <span className="flex items-center gap-2">
                  Get Inheriq AI <ArrowRight className="w-5 h-5" />
                </span>
              </a>
              <a href={getGoogleFormUrl()} target="_blank" rel="noreferrer" className="btn-secondary text-base px-7 py-4">
                Book 1-on-1 Demo
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap items-center gap-6 text-text-muted text-xs font-medium pt-2 border-t border-border"
            >
              <div className="flex items-center gap-2 text-text-secondary">
                <ShieldCheck className="w-4 h-4 text-success" />
                <span>7-Day Risk-Free Trial</span>
              </div>
              <div className="w-px h-4 bg-border hidden sm:block" />
              <div className="flex items-center gap-2 text-text-secondary">
                <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span>Supports Hindi, Hinglish & Regional</span>
              </div>
              <div className="w-px h-4 bg-border hidden md:block" />
              <div className="text-text-secondary hidden md:block">
                No Coding Needed
              </div>
            </motion.div>
          </div>

          {/* Right Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
