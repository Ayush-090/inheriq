'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2, ShieldCheck, LockKeyhole } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Unauthorized');
      }

      router.push('/admin/dashboard');
      router.refresh();
    } catch {
      setError('Invalid admin credentials.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-bg-primary text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-3xl border border-border bg-bg-card p-8 shadow-2xl">
        <div className="mb-8 flex items-center justify-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
            <LockKeyhole className="h-6 w-6" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-text-muted">Admin portal</p>
            <h1 className="text-2xl font-bold">Inheriq access</h1>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="username" className="mb-2 block text-sm text-text-secondary">Username</label>
            <input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-xl border border-border bg-white/[0.02] px-4 py-3 text-white outline-none ring-0 placeholder:text-text-muted focus:border-accent/60"
              placeholder="admin"
              autoComplete="username"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="mb-2 block text-sm text-text-secondary">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-border bg-white/[0.02] px-4 py-3 text-white outline-none ring-0 placeholder:text-text-muted focus:border-accent/60"
              placeholder="••••••••"
              autoComplete="current-password"
              required
            />
          </div>

          {error && <p className="text-sm text-red-400">{error}</p>}

          <button type="submit" disabled={isSubmitting} className="btn-primary w-full justify-center gap-2">
            {isSubmitting ? <><Loader2 className="h-4 w-4 animate-spin" /> Signing in...</> : <> <ShieldCheck className="h-4 w-4" /> Sign in</>}
          </button>
        </form>
      </div>
    </main>
  );
}
