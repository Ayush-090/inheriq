'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Search, ArrowUpDown, Eye, LogOut, ClipboardList, Filter, CheckCircle2, XCircle, Clock3 } from 'lucide-react';
import { useRouter } from 'next/navigation';

export type SubmissionStatus = 'New' | 'Contacted' | 'Qualified' | 'Onboarded' | 'Rejected';

type Submission = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  businessType?: string;
  businessStage?: string;
  helpNeeded?: string;
  challenge?: string;
  servicesRequired?: string;
  dateSubmitted: string;
  status: SubmissionStatus;
  notes?: string;
};

const statusOptions: SubmissionStatus[] = ['New', 'Contacted', 'Qualified', 'Onboarded', 'Rejected'];

export function AdminDashboardClient({ initialSubmissions }: { initialSubmissions: Submission[] }) {
  const router = useRouter();
  const [submissions, setSubmissions] = useState(initialSubmissions);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | SubmissionStatus>('All');
  const [sortBy, setSortBy] = useState<'date' | 'name'>('date');
  const [selectedId, setSelectedId] = useState(initialSubmissions[0]?.id ?? null);

  const filteredSubmissions = useMemo(() => {
    const value = search.trim().toLowerCase();
    const filtered = submissions.filter((item) => {
      const matchesStatus = statusFilter === 'All' || item.status === statusFilter;
      const haystack = [item.name, item.email, item.company, item.helpNeeded, item.businessType].join(' ').toLowerCase();
      const matchesSearch = !value || haystack.includes(value);
      return matchesStatus && matchesSearch;
    });

    return filtered.sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      return new Date(b.dateSubmitted).getTime() - new Date(a.dateSubmitted).getTime();
    });
  }, [search, sortBy, statusFilter, submissions]);

  const selectedSubmission = filteredSubmissions.find((item) => item.id === selectedId) ?? filteredSubmissions[0] ?? null;

  const totalLeads = submissions.length;
  const newCount = submissions.filter((item) => item.status === 'New').length;
  const qualifiedCount = submissions.filter((item) => item.status === 'Qualified').length;

  async function handleStatusChange(id: string, status: SubmissionStatus) {
    const response = await fetch(`/api/admin/submissions/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });

    if (!response.ok) {
      return;
    }

    const updated = await response.json();
    setSubmissions((current) => current.map((item) => (item.id === id ? { ...item, status: updated.submission.status } : item)));
  }

  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  }

  return (
    <main className="min-h-screen bg-bg-primary text-white">
      <div className="container-custom py-8">
        <header className="mb-8 flex flex-col gap-4 rounded-3xl border border-border bg-bg-card p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-text-muted">Admin dashboard</p>
            <h1 className="mt-2 text-3xl font-bold">Inheriq lead overview</h1>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/admin/seo" className="btn-secondary text-sm">Manage SEO</Link>
            <button type="button" onClick={handleLogout} className="btn-secondary text-sm gap-2">
              <LogOut className="h-4 w-4" /> Logout
            </button>
          </div>
        </header>

        <section className="mb-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-border bg-bg-card p-5">
            <p className="text-sm text-text-muted">Total onboarding submissions</p>
            <p className="mt-3 text-3xl font-bold">{totalLeads}</p>
          </div>
          <div className="rounded-2xl border border-border bg-bg-card p-5">
            <p className="text-sm text-text-muted">New submissions</p>
            <p className="mt-3 text-3xl font-bold text-accent">{newCount}</p>
          </div>
          <div className="rounded-2xl border border-border bg-bg-card p-5">
            <p className="text-sm text-text-muted">Qualified leads</p>
            <p className="mt-3 text-3xl font-bold text-success">{qualifiedCount}</p>
          </div>
        </section>

        <section className="rounded-3xl border border-border bg-bg-card p-4 md:p-6">
          <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search name, company or email"
                className="w-full rounded-xl border border-border bg-white/[0.02] py-2.5 pl-10 pr-4 text-white placeholder:text-text-muted"
              />
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <label className="flex items-center gap-2 rounded-xl border border-border bg-white/[0.02] px-3 py-2 text-sm text-text-secondary">
                <Filter className="h-4 w-4" />
                <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value as 'All' | SubmissionStatus)} className="bg-transparent text-white outline-none">
                  <option value="All" className="bg-bg-card">All statuses</option>
                  {statusOptions.map((option) => (
                    <option key={option} value={option} className="bg-bg-card">{option}</option>
                  ))}
                </select>
              </label>
              <button type="button" onClick={() => setSortBy((prev) => (prev === 'date' ? 'name' : 'date'))} className="btn-secondary text-sm gap-2">
                <ArrowUpDown className="h-4 w-4" /> Sort: {sortBy === 'date' ? 'Date' : 'Name'}
              </button>
            </div>
          </div>

          <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
            <div className="overflow-hidden rounded-2xl border border-border">
              <div className="grid grid-cols-[1.2fr_1fr_0.8fr_0.7fr] gap-3 border-b border-border bg-white/[0.02] px-4 py-3 text-xs uppercase tracking-[0.12em] text-text-muted">
                <span>Name</span>
                <span>Company</span>
                <span>Business</span>
                <span>Status</span>
              </div>
              <div className="max-h-[540px] overflow-auto">
                {filteredSubmissions.length === 0 ? (
                  <div className="flex min-h-[180px] items-center justify-center text-text-muted">No matches found.</div>
                ) : (
                  filteredSubmissions.map((submission) => (
                    <button
                      key={submission.id}
                      type="button"
                      onClick={() => setSelectedId(submission.id)}
                      className={`grid w-full grid-cols-[1.2fr_1fr_0.8fr_0.7fr] gap-3 border-b border-border px-4 py-4 text-left transition hover:bg-white/[0.02] ${selectedSubmission?.id === submission.id ? 'bg-accent/5' : ''}`}
                    >
                      <div>
                        <p className="font-semibold">{submission.name}</p>
                        <p className="text-xs text-text-muted">{submission.email}</p>
                      </div>
                      <div className="text-sm text-text-secondary">{submission.company || '-'}</div>
                      <div className="text-sm text-text-secondary">{submission.businessType || '-'}</div>
                      <div>
                        <span className="inline-flex rounded-full border border-border px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-text-secondary">
                          {submission.status}
                        </span>
                      </div>
                    </button>
                  ))
                )}
              </div>
            </div>

            {selectedSubmission ? (
              <aside className="rounded-2xl border border-border bg-white/[0.02] p-5">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm text-text-muted">Submission details</p>
                    <h2 className="text-xl font-bold">{selectedSubmission.name}</h2>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Eye className="h-5 w-5" />
                  </div>
                </div>

                <dl className="space-y-3 text-sm text-text-secondary">
                  <div className="flex justify-between gap-4"><dt>Email</dt><dd className="text-right text-white">{selectedSubmission.email}</dd></div>
                  <div className="flex justify-between gap-4"><dt>Phone</dt><dd className="text-right text-white">{selectedSubmission.phone || '-'}</dd></div>
                  <div className="flex justify-between gap-4"><dt>Company</dt><dd className="text-right text-white">{selectedSubmission.company || '-'}</dd></div>
                  <div className="flex justify-between gap-4"><dt>Stage</dt><dd className="text-right text-white">{selectedSubmission.businessStage || '-'}</dd></div>
                  <div className="flex justify-between gap-4"><dt>Requirements</dt><dd className="text-right text-white">{selectedSubmission.helpNeeded || '-'}</dd></div>
                  <div className="flex justify-between gap-4"><dt>Date</dt><dd className="text-right text-white">{selectedSubmission.dateSubmitted}</dd></div>
                </dl>

                <div className="mt-5">
                  <label className="mb-2 block text-sm text-text-secondary">Status</label>
                  <select
                    value={selectedSubmission.status}
                    onChange={(e) => handleStatusChange(selectedSubmission.id, e.target.value as SubmissionStatus)}
                    className="w-full rounded-xl border border-border bg-bg-primary px-3 py-2.5 text-white outline-none"
                  >
                    {statusOptions.map((option) => (
                      <option key={option} value={option} className="bg-bg-card">{option}</option>
                    ))}
                  </select>
                </div>

                <div className="mt-5">
                  <label className="mb-2 block text-sm text-text-secondary">Notes</label>
                  <textarea
                    readOnly
                    value={selectedSubmission.notes || 'No notes yet.'}
                    className="min-h-[110px] w-full resize-none rounded-xl border border-border bg-bg-primary px-3 py-2.5 text-white outline-none"
                  />
                </div>
              </aside>
            ) : null}
          </div>
        </section>
      </div>
    </main>
  );
}
