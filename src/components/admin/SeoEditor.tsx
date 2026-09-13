'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Save, ShieldCheck } from 'lucide-react';

type SeoState = {
  pageTitle: string;
  metaDescription: string;
  keywords: string;
  canonicalUrl: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
  index: boolean;
  follow: boolean;
};

const defaultPageState: SeoState = {
  pageTitle: '',
  metaDescription: '',
  keywords: '',
  canonicalUrl: '',
  ogTitle: '',
  ogDescription: '',
  ogImage: '',
  twitterTitle: '',
  twitterDescription: '',
  twitterImage: '',
  index: true,
  follow: true,
};

export function SeoEditor({ initialPages }: { initialPages: Record<string, Partial<SeoState>> }) {
  const router = useRouter();
  const [selectedPage, setSelectedPage] = useState('home');
  const [form, setForm] = useState<SeoState>({ ...defaultPageState, ...initialPages.home });
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handlePageChange = (page: string) => {
    setSelectedPage(page);
    setSaved(false);
    setForm({ ...defaultPageState, ...initialPages[page] });
  };

  const updateField = (field: keyof SeoState, value: string | boolean) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  async function handleSave() {
    setSaving(true);
    setSaved(false);
    try {
      const response = await fetch('/api/admin/seo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ page: selectedPage, values: form }),
      });

      if (!response.ok) {
        throw new Error('Failed');
      }

      setSaved(true);
      router.refresh();
    } finally {
      setSaving(false);
    }
  }

  return (
    <main className="min-h-screen bg-bg-primary text-white">
      <div className="container-custom py-10">
        <header className="mb-8 flex items-center justify-between gap-4 rounded-3xl border border-border bg-bg-card p-6">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-text-muted">SEO admin</p>
            <h1 className="mt-2 text-3xl font-bold">Manage public SEO</h1>
          </div>
          <button type="button" onClick={handleSave} className="btn-primary gap-2">
            <Save className="h-4 w-4" /> {saving ? 'Saving...' : 'Save SEO'}
          </button>
        </header>

        <div className="grid gap-8 xl:grid-cols-[260px_1fr]">
          <aside className="rounded-3xl border border-border bg-bg-card p-4">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-text-muted">Pages</p>
            <div className="space-y-2">
              {Object.keys(initialPages).map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => handlePageChange(page)}
                  className={`w-full rounded-xl border px-4 py-3 text-left text-sm transition ${selectedPage === page ? 'border-accent bg-accent/10 text-white' : 'border-border bg-white/[0.02] text-text-secondary'}`}
                >
                  {page.charAt(0).toUpperCase() + page.slice(1)}
                </button>
              ))}
            </div>
          </aside>

          <section className="rounded-3xl border border-border bg-bg-card p-6">
            {saved && (
              <div className="mb-6 flex items-center gap-2 rounded-xl border border-success/30 bg-success/10 px-4 py-3 text-sm text-success">
                <ShieldCheck className="h-4 w-4" /> SEO settings saved successfully.
              </div>
            )}

            <div className="grid gap-5 md:grid-cols-2">
              <label className="md:col-span-2">
                <span className="mb-2 block text-sm text-text-secondary">Page title</span>
                <input value={form.pageTitle} onChange={(e) => updateField('pageTitle', e.target.value)} className="w-full rounded-xl border border-border bg-white/[0.02] px-4 py-3 text-white" />
              </label>

              <label className="md:col-span-2">
                <span className="mb-2 block text-sm text-text-secondary">Meta description</span>
                <textarea value={form.metaDescription} onChange={(e) => updateField('metaDescription', e.target.value)} className="min-h-[100px] w-full rounded-xl border border-border bg-white/[0.02] px-4 py-3 text-white" />
              </label>

              <label className="md:col-span-2">
                <span className="mb-2 block text-sm text-text-secondary">Keywords</span>
                <input value={form.keywords} onChange={(e) => updateField('keywords', e.target.value)} className="w-full rounded-xl border border-border bg-white/[0.02] px-4 py-3 text-white" />
              </label>

              <label className="md:col-span-2">
                <span className="mb-2 block text-sm text-text-secondary">Canonical URL</span>
                <input value={form.canonicalUrl} onChange={(e) => updateField('canonicalUrl', e.target.value)} className="w-full rounded-xl border border-border bg-white/[0.02] px-4 py-3 text-white" />
              </label>

              <label>
                <span className="mb-2 block text-sm text-text-secondary">OG title</span>
                <input value={form.ogTitle} onChange={(e) => updateField('ogTitle', e.target.value)} className="w-full rounded-xl border border-border bg-white/[0.02] px-4 py-3 text-white" />
              </label>

              <label>
                <span className="mb-2 block text-sm text-text-secondary">OG image</span>
                <input value={form.ogImage} onChange={(e) => updateField('ogImage', e.target.value)} className="w-full rounded-xl border border-border bg-white/[0.02] px-4 py-3 text-white" />
              </label>

              <label className="md:col-span-2">
                <span className="mb-2 block text-sm text-text-secondary">OG description</span>
                <textarea value={form.ogDescription} onChange={(e) => updateField('ogDescription', e.target.value)} className="min-h-[90px] w-full rounded-xl border border-border bg-white/[0.02] px-4 py-3 text-white" />
              </label>

              <label>
                <span className="mb-2 block text-sm text-text-secondary">X/Twitter title</span>
                <input value={form.twitterTitle} onChange={(e) => updateField('twitterTitle', e.target.value)} className="w-full rounded-xl border border-border bg-white/[0.02] px-4 py-3 text-white" />
              </label>

              <label>
                <span className="mb-2 block text-sm text-text-secondary">X/Twitter image</span>
                <input value={form.twitterImage} onChange={(e) => updateField('twitterImage', e.target.value)} className="w-full rounded-xl border border-border bg-white/[0.02] px-4 py-3 text-white" />
              </label>

              <label className="md:col-span-2">
                <span className="mb-2 block text-sm text-text-secondary">X/Twitter description</span>
                <textarea value={form.twitterDescription} onChange={(e) => updateField('twitterDescription', e.target.value)} className="min-h-[90px] w-full rounded-xl border border-border bg-white/[0.02] px-4 py-3 text-white" />
              </label>

              <label className="flex items-center gap-3 rounded-xl border border-border bg-white/[0.02] px-4 py-3">
                <input type="checkbox" checked={form.index} onChange={(e) => updateField('index', e.target.checked)} />
                <span className="text-sm text-text-secondary">Index page</span>
              </label>

              <label className="flex items-center gap-3 rounded-xl border border-border bg-white/[0.02] px-4 py-3">
                <input type="checkbox" checked={form.follow} onChange={(e) => updateField('follow', e.target.checked)} />
                <span className="text-sm text-text-secondary">Follow links</span>
              </label>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
