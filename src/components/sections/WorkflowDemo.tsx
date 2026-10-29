'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play,
  RotateCcw,
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldAlert,
  Send,
  MessageSquare,
  Sparkles,
  UserCheck,
  Pause,
  AlertCircle,
  FileCheck2,
} from 'lucide-react';

interface WorkflowStep {
  id: number;
  name: string;
  badge: string;
  shortDesc: string;
}

const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    id: 1,
    name: 'Customer Inquiry',
    badge: '1. Inbound Received',
    shortDesc: 'Customer sends a WhatsApp query requesting urgent SLA terms',
  },
  {
    id: 2,
    name: 'Support AI Prepares Response',
    badge: '2. AI Draft Generated',
    shortDesc: 'Brain AI searches company knowledge base and drafts tailored answer',
  },
  {
    id: 3,
    name: 'Human Reviews Response',
    badge: '3. Human Approval Gate',
    shortDesc: 'Operations Manager inspects drafted reply and verifies accuracy',
  },
  {
    id: 4,
    name: 'Approved Next Action',
    badge: '4. Dispatched & Logged',
    shortDesc: 'Response sent via WhatsApp and recorded into permanent audit trail',
  },
];

export function WorkflowDemo() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [hasManuallyApproved, setHasManuallyApproved] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= 4) {
            setIsPlaying(false);
            return 4;
          }
          return prev + 1;
        });
      }, 3200);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying]);

  const handlePlayToggle = () => {
    if (currentStep >= 4) {
      setCurrentStep(1);
      setHasManuallyApproved(false);
      setIsPlaying(true);
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStep(1);
    setHasManuallyApproved(false);
  };

  const handleStepClick = (stepId: number) => {
    setIsPlaying(false);
    setCurrentStep(stepId);
  };

  const handleApproveAction = () => {
    setHasManuallyApproved(true);
    setCurrentStep(4);
  };

  return (
    <section id="how-it-works" className="py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="container-custom">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Workflow Engine</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display tracking-tight">
            See How Workflows Move From <span className="text-blue-600">Inquiry to Action</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Customer inquiry → Support AI prepares a response → Human reviews the response → Approved next action. Experience the live human-in-the-loop guarantee below.
          </p>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-amber-800 text-xs font-medium">
            <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span>Interactive Frontend Demonstration · Simulating Inheriq Orchestration</span>
          </div>
        </div>

        {/* Workflow Showcase Box */}
        <div className="max-w-4xl mx-auto">
          {/* Controls Bar & Step Tabs */}
          <div className="bg-white rounded-t-2xl border border-slate-200 p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xs">
            {/* Step selector pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
              {WORKFLOW_STEPS.map((step) => {
                const isActive = currentStep === step.id;
                const isPassed = currentStep > step.id;
                return (
                  <button
                    key={step.id}
                    type="button"
                    onClick={() => handleStepClick(step.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-xs'
                        : isPassed
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    <span>{step.id}.</span>
                    <span>{step.name.split(' ')[0]}</span>
                    {isPassed && <CheckCircle2 className="w-3 h-3 text-emerald-600" />}
                  </button>
                );
              })}
            </div>

            {/* Play / Reset buttons */}
            <div className="flex items-center gap-2 w-full md:w-auto justify-end">
              <button
                type="button"
                onClick={handlePlayToggle}
                className="btn-primary text-xs px-4 py-2 gap-1.5"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5 fill-current" />
                    <span>Pause Demo</span>
                  </>
                ) : currentStep >= 4 ? (
                  <>
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Replay Demo</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Play Demo</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="p-2 rounded-lg border border-slate-200 bg-slate-50 text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                title="Reset workflow to Step 1"
                aria-label="Reset workflow"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Workflow Canvas */}
          <div className="bg-white border-x border-b border-slate-200 rounded-b-2xl p-6 sm:p-8 shadow-md">
            {/* Stage Progress Bar */}
            <div className="relative mb-8">
              <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                <motion.div
                  className="h-full bg-blue-600"
                  animate={{ width: `${(currentStep / 4) * 100}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 mt-2">
                <span>Stage 1: Inquiry</span>
                <span>Stage 2: AI Draft</span>
                <span>Stage 3: Human Review</span>
                <span>Stage 4: Dispatched</span>
              </div>
            </div>

            {/* Animated Stage Display */}
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <motion.div
                  key="step-1"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">
                          Step 1: Customer Inquiry Received
                        </h4>
                        <p className="text-xs text-slate-500">Inbound WhatsApp Business Channel</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                      10:42:15 AM
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                      <span>Sender: Dr. Rajiv Mehta (Apex Healthcare)</span>
                      <span className="text-emerald-600 font-semibold">● Verified Contact</span>
                    </div>
                    <p className="text-sm text-slate-900 font-medium leading-relaxed bg-white p-3 rounded-lg border border-slate-200">
                      “Namaste Inheriq team, can our support response SLA be upgraded to sub-60-second priority coverage for our 24/7 clinic emergency desk?”
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs text-slate-500 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-blue-600" />
                      Inquiry routed to Inheriq Support AI within 1.2s
                    </span>

                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                    >
                      <span>Proceed to AI Drafting</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  key="step-2"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">
                          Step 2: Support AI Prepares Response
                        </h4>
                        <p className="text-xs text-slate-500">Brain AI consulted company knowledge & contract tier</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 border border-purple-200 font-semibold">
                      AI Generated · Confidence 99.4%
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-purple-50/50 border border-purple-200 space-y-2.5">
                    <div className="flex items-center justify-between text-xs text-purple-900 font-medium">
                      <span>Matched Knowledge Document: &ldquo;Healthcare Tier SLAs — Section 4.2&rdquo;</span>
                      <span className="text-purple-700 font-mono text-[11px]">Draft ID: #DRAFT-4091</span>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-purple-200 shadow-xs text-sm text-slate-800 leading-relaxed space-y-2">
                      <p>
                        “Namaste Dr. Mehta! Yes, our 24/7 Priority SLA tier guarantees sub-60-second automated response and instant triage for clinic emergencies. I have checked Apex Healthcare&apos;s current active setup, and we can enable this immediately without downtime. Would you like our operations manager to activate this for your account today?”
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-600 pt-1">
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      <span>Action Gate: Response held in review queue. Human manager approval required.</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="text-xs font-semibold text-slate-500 hover:text-slate-700"
                    >
                      ← Back to Inquiry
                    </button>

                    <button
                      type="button"
                      onClick={() => setCurrentStep(3)}
                      className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                    >
                      <span>Proceed to Human Review</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div
                  key="step-3"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center">
                        <UserCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">
                          Step 3: Human Reviews the Response
                        </h4>
                        <p className="text-xs text-slate-500">Human-in-the-Loop Verification Gate</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-amber-100 text-amber-800 font-bold">
                      AWAITING SIGN-OFF
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 space-y-3">
                    <div className="flex items-center justify-between text-xs text-amber-900">
                      <span className="font-semibold">Reviewer: Ananya Roy (Operations Lead)</span>
                      <span className="text-[11px] text-slate-500">Audit Status: Verification Pending</span>
                    </div>

                    <div className="p-3.5 rounded-lg bg-white border border-amber-200 text-xs text-slate-700 leading-relaxed">
                      <p className="font-semibold text-slate-900 mb-1">Proposed Response Review:</p>
                      <p className="text-slate-600 italic">
                        &ldquo;Namaste Dr. Mehta! Yes, our 24/7 Priority SLA tier guarantees sub-60-second automated response and instant triage...&rdquo;
                      </p>
                    </div>

                    {/* Interactive Reviewer Button */}
                    <div className="p-3 rounded-lg bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                      <div className="text-xs text-slate-600 flex items-center gap-2">
                        <ShieldAlert className="w-4 h-4 text-blue-600 shrink-0" />
                        <span>Manager check confirms pricing and healthcare compliance parameters.</span>
                      </div>

                      <button
                        type="button"
                        onClick={handleApproveAction}
                        className="btn-primary text-xs py-2 px-4 shrink-0 bg-emerald-600 hover:bg-emerald-700 shadow-emerald-500/20"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Click to Approve & Dispatch</span>
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="text-xs font-semibold text-slate-500 hover:text-slate-700"
                    >
                      ← Back to AI Draft
                    </button>

                    <button
                      type="button"
                      onClick={() => setCurrentStep(4)}
                      className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                    >
                      <span>Simulate Auto-Approval</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              )}

              {currentStep === 4 && (
                <motion.div
                  key="step-4"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">
                          Step 4: Approved Next Action Completed
                        </h4>
                        <p className="text-xs text-slate-500">Dispatched with Verified Human Authorization</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 font-bold">
                      SUCCESSFULLY EXECUTED
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200 space-y-3">
                    <div className="flex items-center justify-between text-xs text-emerald-900 font-medium">
                      <span>Status: Delivered to WhatsApp (+91 98XXX XXXXX)</span>
                      <span className="text-emerald-700 font-mono text-[11px]">Audit ID: #TXN-90248</span>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-emerald-200 text-sm text-slate-800 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700">
                        <Send className="w-3.5 h-3.5" />
                        <span>Message Sent to Customer</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        &ldquo;Namaste Dr. Mehta! Yes, our 24/7 Priority SLA tier guarantees sub-60-second automated response and instant triage for clinic emergencies. I have checked Apex Healthcare&apos;s current active setup, and we can enable this immediately...&rdquo;
                      </p>
                    </div>

                    {/* Immutable Audit Log Entry */}
                    <div className="p-3 rounded-lg bg-slate-900 text-white font-mono text-[11px] space-y-1">
                      <div className="text-slate-400 flex items-center gap-1.5">
                        <FileCheck2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Immutable Audit Trail Entry</span>
                      </div>
                      <p className="text-slate-300">
                        [10:42:38 AM] Human Sign-off: Ananya Roy (Ops Lead) | Action: WhatsApp Dispatch | Status: 200 OK
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(3)}
                      className="text-xs font-semibold text-slate-500 hover:text-slate-700"
                    >
                      ← Back to Review
                    </button>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Replay From Step 1</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
