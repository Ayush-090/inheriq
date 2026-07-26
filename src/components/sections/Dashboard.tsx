'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper, SectionHeading } from '@/components/ui';
import { DASHBOARD_AGENTS } from '@/lib/constants';
import { BarChart3, MessageSquare, TrendingUp, Bell } from 'lucide-react';

export function Dashboard() {
  const [activeAgent, setActiveAgent] = useState(0);
  const agent = DASHBOARD_AGENTS[activeAgent];

  return (
    <SectionWrapper id="dashboard">
      <div className="container-custom">
        <SectionHeading
          badge="Live Dashboard"
          title="One Dashboard. Complete Control."
          titleGradient="Complete Control."
          subtitle="See everything your AI workforce is doing in real-time. Click any agent to see their activity."
        />

        {/* Laptop mockup */}
        <div className="relative max-w-5xl mx-auto">
          {/* Glow */}
          <div className="absolute -inset-20 bg-accent/[0.04] blur-[120px] rounded-full" />

          {/* Screen */}
          <div className="relative glass-card p-3 sm:p-4 overflow-hidden">
            {/* Titlebar */}
            <div className="flex items-center justify-between mb-4 px-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                <div className="w-3 h-3 rounded-full bg-green-400/60" />
              </div>
              <div className="text-xs text-text-muted flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                dashboard.inheriq.com
              </div>
              <div className="w-16" />
            </div>

            {/* Dashboard content */}
            <div className="bg-bg-primary rounded-2xl p-4 sm:p-6 border border-border min-h-[450px]">
              {/* Agent tabs */}
              <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                {DASHBOARD_AGENTS.map((a, i) => (
                  <button
                    key={a.id}
                    onClick={() => setActiveAgent(i)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 flex items-center gap-2 ${
                      i === activeAgent
                        ? 'border text-white shadow-lg'
                        : 'text-text-secondary border border-transparent hover:bg-white/[0.04]'
                    }`}
                    style={i === activeAgent ? {
                      backgroundColor: `${a.color}15`,
                      borderColor: `${a.color}40`,
                      boxShadow: `0 4px 20px ${a.color}15`,
                    } : undefined}
                  >
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: a.color }}
                    />
                    {a.name}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={agent.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Metrics */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                    {Object.entries(agent.metrics).map(([key, val]) => (
                      <div
                        key={key}
                        className="p-4 rounded-xl border border-border bg-white/[0.02]"
                      >
                        <p className="text-xs text-text-secondary mb-1">{key}</p>
                        <p className="text-xl font-bold" style={{ color: agent.color }}>
                          {val}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="grid lg:grid-cols-2 gap-4">
                    {/* Chart */}
                    <div className="p-5 rounded-xl border border-border bg-white/[0.02]">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <BarChart3 className="w-4 h-4 text-text-secondary" />
                          <span className="text-sm font-medium">Weekly Trend</span>
                        </div>
                        <TrendingUp className="w-4 h-4 text-success" />
                      </div>
                      <div className="flex items-end gap-2 h-32">
                        {agent.chart.map((val, i) => {
                          const max = Math.max(...agent.chart);
                          const height = (val / max) * 100;
                          return (
                            <motion.div
                              key={i}
                              initial={{ height: 0 }}
                              animate={{ height: `${height}%` }}
                              transition={{ duration: 0.5, delay: i * 0.08 }}
                              className="flex-1 rounded-t-lg"
                              style={{
                                background: `linear-gradient(to top, ${agent.color}30, ${agent.color}80)`,
                              }}
                            />
                          );
                        })}
                      </div>
                      <div className="flex justify-between mt-2">
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d) => (
                          <span key={d} className="text-[10px] text-text-muted flex-1 text-center">{d}</span>
                        ))}
                      </div>
                    </div>

                    {/* Conversations */}
                    <div className="p-5 rounded-xl border border-border bg-white/[0.02]">
                      <div className="flex items-center gap-2 mb-4">
                        <MessageSquare className="w-4 h-4 text-text-secondary" />
                        <span className="text-sm font-medium">Recent Activity</span>
                        <Bell className="w-3.5 h-3.5 text-text-muted ml-auto" />
                      </div>
                      <div className="space-y-3">
                        {agent.conversations.map((conv) => (
                          <motion.div
                            key={conv.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-border"
                          >
                            <div
                              className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                              style={{ backgroundColor: `${agent.color}15`, color: agent.color }}
                            >
                              {conv.name[0]}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium truncate">{conv.name}</p>
                              <p className="text-xs text-text-secondary truncate">{conv.message}</p>
                            </div>
                            <div className="text-right shrink-0">
                              <p className="text-[10px] text-text-muted">{conv.time}</p>
                              <span
                                className="inline-block px-2 py-0.5 rounded-full text-[9px] font-medium mt-1"
                                style={{
                                  backgroundColor: `${agent.color}15`,
                                  color: agent.color,
                                }}
                              >
                                {conv.status}
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Base shadow */}
          <div className="h-4 bg-gradient-to-b from-white/[0.03] to-transparent rounded-b-3xl mx-4" />
        </div>
      </div>
    </SectionWrapper>
  );
}
