'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layers,
  CheckCircle2,
  Clock,
  UserCheck,
  AlertCircle,
  FileCheck2,
  PhoneCall,
  Headphones,
  Users,
  IndianRupee,
  Megaphone,
  Filter,
  Check,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

interface WorkspaceTask {
  id: string;
  title: string;
  agent: string;
  agentRole: string;
  status: 'Pending Approval' | 'In Progress' | 'Completed';
  approver: string;
  time: string;
  detail: string;
}

const SAMPLE_TASKS: WorkspaceTask[] = [
  {
    id: 'TSK-1042',
    title: 'Custom enterprise SLA quote for Apex Healthcare',
    agent: 'Arjun (Sales AI)',
    agentRole: 'Sales',
    status: 'Pending Approval',
    approver: 'Awaiting Ops Lead',
    time: '2m ago',
    detail: 'Verified customer budget ₹1.2L/yr. Proposal drafted according to Tier 2 pricing sheet.',
  },
  {
    id: 'TSK-1041',
    title: 'Refund verification for Order #89291 (Damaged goods)',
    agent: 'Priya (Support AI)',
    agentRole: 'Support',
    status: 'Pending Approval',
    approver: 'Awaiting Support Manager',
    time: '8m ago',
    detail: 'Customer submitted courier damage photos. Refund of ₹3,400 drafted for approval.',
  },
  {
    id: 'TSK-1040',
    title: 'Diwali VIP WhatsApp broadcast batch (2,400 contacts)',
    agent: 'Rohan (Marketing AI)',
    agentRole: 'Marketing',
    status: 'Pending Approval',
    approver: 'Awaiting Marketing Lead',
    time: '15m ago',
    detail: 'Promotional copy drafted in Hindi & English. Target audience: Inactive past 60 days.',
  },
  {
    id: 'TSK-1039',
    title: 'Pre-screening 14 candidate resumes for Accounts Specialist',
    agent: 'Kavya (HR AI)',
    agentRole: 'HR',
    status: 'In Progress',
    approver: 'Auto-scoring criteria',
    time: '24m ago',
    detail: 'Scoring candidates against GST and Tally experience requirements.',
  },
  {
    id: 'TSK-1038',
    title: 'Overdue invoice #1024 follow-up via WhatsApp UPI link',
    agent: 'Vikram (Finance AI)',
    agentRole: 'Finance',
    status: 'Completed',
    approver: 'Signed off by Finance Lead',
    time: '45m ago',
    detail: 'Reminder delivered. Client completed UPI payment of ₹18,500. Ledger reconciled.',
  },
  {
    id: 'TSK-1037',
    title: 'Staff attendance summary for morning warehouse shift',
    agent: 'Kavya (HR AI)',
    agentRole: 'HR',
    status: 'Completed',
    approver: 'Auto-verified with supervisor',
    time: '1h ago',
    detail: '42 present, 2 on leave. Overtime hours logged into payroll database.',
  },
];

export function ProductPreview() {
  const [filter, setFilter] = useState<'All' | 'Pending Approval' | 'In Progress' | 'Completed'>('All');
  const [tasks, setTasks] = useState<WorkspaceTask[]>(SAMPLE_TASKS);
  const [selectedTask, setSelectedTask] = useState<WorkspaceTask | null>(SAMPLE_TASKS[0]);

  const filteredTasks = tasks.filter((t) => {
    if (filter === 'All') return true;
    return t.status === filter;
  });

  const handleApprove = (id: string) => {
    setTasks((current) =>
      current.map((t) =>
        t.id === id
          ? {
              ...t,
              status: 'Completed',
              approver: 'Approved just now by You',
              time: 'Just now',
            }
          : t
      )
    );
    if (selectedTask?.id === id) {
      setSelectedTask((prev) =>
        prev
          ? {
              ...prev,
              status: 'Completed',
              approver: 'Approved just now by You',
              time: 'Just now',
            }
          : null
      );
    }
  };

  return (
    <section id="product-preview" className="py-24 bg-white border-b border-slate-200/80">
      <div className="container-custom">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Product Preview</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display tracking-tight">
            One Workspace. <span className="text-blue-600">Total Visibility.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Monitor all 5 AI employees, review pending approvals, inspect audit logs, and maintain full human control over every action.
          </p>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-mono">
            <span>Illustrative Sample Workspace · Click tasks to inspect and approve live</span>
          </div>
        </div>

        {/* Workspace Console Mockup */}
        <div className="max-w-6xl mx-auto rounded-3xl border border-slate-200 bg-white shadow-xl overflow-hidden">
          {/* Console Header Bar */}
          <div className="bg-[#0B1120] text-white p-5 sm:p-6 border-b border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <h3 className="text-base sm:text-lg font-bold font-display text-white">
                  Acme Dynamics — AI Workforce Console
                </h3>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Workspace ID: #INHQ-7819 · Organization Tier: Growth OS · Indian DPDP Compliant
              </p>
            </div>

            {/* Metrics pills */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-300">
                Processed Today: <strong className="text-white">184 tasks</strong>
              </span>
              <span className="text-xs px-3 py-1.5 rounded-xl bg-amber-500/20 border border-amber-500/30 text-amber-300 font-semibold">
                Needs Approval: {tasks.filter((t) => t.status === 'Pending Approval').length}
              </span>
            </div>
          </div>

          {/* Agents Mini Roster */}
          <div className="p-4 sm:p-5 bg-slate-50 border-b border-slate-200 grid grid-cols-2 sm:grid-cols-5 gap-3">
            {[
              { name: 'Arjun', role: 'Sales AI', status: 'In Call', icon: PhoneCall, color: '#2563EB' },
              { name: 'Priya', role: 'Support AI', status: 'Reviewing', icon: Headphones, color: '#DB2777' },
              { name: 'Kavya', role: 'HR AI', status: 'Idle', icon: Users, color: '#7C3AED' },
              { name: 'Vikram', role: 'Finance AI', status: 'Reconciling', icon: IndianRupee, color: '#D97706' },
              { name: 'Rohan', role: 'Marketing AI', status: 'Active', icon: Megaphone, color: '#059669' },
            ].map((a) => {
              const Icon = a.icon;
              return (
                <div
                  key={a.name}
                  className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs flex items-center gap-2.5"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white shrink-0"
                    style={{ backgroundColor: a.color }}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-slate-900 truncate">{a.name}</p>
                    <p className="text-[10px] text-slate-500 truncate">{a.status}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Main Console Content: Left Task Table, Right Detail Panel */}
          <div className="grid lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
            {/* Left: Task Queue Table */}
            <div className="lg:col-span-7 p-4 sm:p-6 space-y-4">
              {/* Filter Tabs */}
              <div className="flex items-center justify-between gap-2 overflow-x-auto pb-1">
                <div className="flex items-center gap-1.5">
                  {(['All', 'Pending Approval', 'In Progress', 'Completed'] as const).map((tab) => (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setFilter(tab)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                        filter === tab
                          ? 'bg-blue-600 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <span className="text-[11px] text-slate-500 shrink-0 hidden sm:inline">
                  {filteredTasks.length} tasks listed
                </span>
              </div>

              {/* Task Cards */}
              <div className="space-y-2.5">
                {filteredTasks.map((task) => {
                  const isSelected = selectedTask?.id === task.id;
                  return (
                    <div
                      key={task.id}
                      onClick={() => setSelectedTask(task)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-blue-50/60 border-blue-500 shadow-xs'
                          : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-[10px] font-mono text-slate-500 font-semibold">
                          {task.id} · {task.agent}
                        </span>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                            task.status === 'Pending Approval'
                              ? 'bg-amber-100 text-amber-800'
                              : task.status === 'In Progress'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-emerald-100 text-emerald-800'
                          }`}
                        >
                          {task.status}
                        </span>
                      </div>

                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-1">
                        {task.title}
                      </h4>

                      <div className="flex items-center justify-between text-[11px] text-slate-500 mt-2">
                        <span>{task.approver}</span>
                        <span>{task.time}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Task Detail & Approval Workbench */}
            <div className="lg:col-span-5 p-4 sm:p-6 bg-slate-50/50 flex flex-col justify-between">
              {selectedTask ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <div>
                      <span className="text-[10px] font-mono font-bold text-blue-600 uppercase">
                        Audit Card: {selectedTask.id}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900 font-display mt-0.5">
                        Task Details & Approval
                      </h4>
                    </div>
                    <span
                      className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                        selectedTask.status === 'Pending Approval'
                          ? 'bg-amber-100 text-amber-800 border border-amber-300'
                          : selectedTask.status === 'In Progress'
                          ? 'bg-blue-100 text-blue-800 border border-blue-200'
                          : 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                      }`}
                    >
                      {selectedTask.status}
                    </span>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-slate-700">Subject / Objective:</p>
                    <p className="text-sm font-medium text-slate-900 mt-1 leading-snug">
                      {selectedTask.title}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 space-y-2">
                    <p className="font-semibold text-slate-900 flex items-center gap-1.5">
                      <FileCheck2 className="w-4 h-4 text-blue-600" />
                      Agent Execution Summary:
                    </p>
                    <p className="text-slate-600 leading-relaxed">{selectedTask.detail}</p>
                  </div>

                  <div className="text-xs text-slate-600 space-y-1">
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="text-slate-500">Executing Agent:</span>
                      <span className="font-semibold text-slate-900">{selectedTask.agent}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="text-slate-500">Governance Gate:</span>
                      <span className="font-semibold text-slate-900">Human Approval Required</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-slate-500">Sign-off Status:</span>
                      <span className="font-semibold text-emerald-700">{selectedTask.approver}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  {selectedTask.status === 'Pending Approval' ? (
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => handleApprove(selectedTask.id)}
                        className="btn-primary w-full justify-center text-xs py-3 bg-emerald-600 hover:bg-emerald-700 shadow-emerald-500/20"
                      >
                        <Check className="w-4 h-4 mr-1" />
                        <span>Sign Off & Execute Task</span>
                      </button>
                      <p className="text-[10px] text-slate-500 text-center mt-1.5">
                        Action will immediately dispatch and write to the immutable audit trail.
                      </p>
                    </div>
                  ) : (
                    <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 text-center font-medium">
                      ✓ This task has been executed with verified human sign-off.
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-12 text-slate-400 text-xs">
                  Select a task from the list to view its audit details.
                </div>
              )}

              {/* Bottom Trust Note */}
              <div className="pt-4 border-t border-slate-200 text-[11px] text-slate-500 flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% of external actions support mandatory human review checkpoints.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
