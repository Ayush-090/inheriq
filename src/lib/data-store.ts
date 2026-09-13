import { promises as fs } from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'src', 'data');

async function ensureDataDir() {
  await fs.mkdir(DATA_DIR, { recursive: true });
}

export async function readJsonFile<T>(fileName: string, fallback: T): Promise<T> {
  await ensureDataDir();
  const filePath = path.join(DATA_DIR, fileName);

  try {
    const file = await fs.readFile(filePath, 'utf8');
    if (!file.trim()) {
      await writeJsonFile(fileName, fallback);
      return fallback;
    }
    return JSON.parse(file) as T;
  } catch {
    await writeJsonFile(fileName, fallback);
    return fallback;
  }
}

export async function writeJsonFile<T>(fileName: string, value: T): Promise<T> {
  await ensureDataDir();
  const filePath = path.join(DATA_DIR, fileName);
  await fs.writeFile(filePath, JSON.stringify(value, null, 2), 'utf8');
  return value;
}

export type SubmissionStatus = 'New' | 'Contacted' | 'Qualified' | 'Onboarded' | 'Rejected';

export type SubmissionRecord = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  businessType?: string;
  businessStage?: string;
  city?: string;
  helpNeeded?: string;
  challenge?: string;
  servicesRequired?: string;
  budgetRange?: string;
  source?: string;
  howHeard?: string;
  additionalInfo?: string;
  status: SubmissionStatus;
  notes?: string;
  dateSubmitted: string;
  createdAt: string;
  sourceType: 'contact' | 'onboarding';
};

export async function getSubmissions(): Promise<SubmissionRecord[]> {
  return readJsonFile<SubmissionRecord[]>('submissions.json', []);
}

export async function saveSubmission(submission: Omit<SubmissionRecord, 'id' | 'status' | 'createdAt' | 'dateSubmitted'> & { status?: SubmissionStatus }) {
  const submissions = await getSubmissions();
  const now = new Date();
  const record: SubmissionRecord = {
    ...submission,
    id: `${now.getTime()}-${Math.random().toString(16).slice(2, 8)}`,
    status: submission.status || 'New',
    createdAt: now.toISOString(),
    dateSubmitted: now.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
  } as SubmissionRecord;

  const next = [record, ...submissions];
  await writeJsonFile('submissions.json', next);
  return record;
}

export async function updateSubmissionStatus(id: string, updates: Partial<SubmissionRecord>) {
  const submissions = await getSubmissions();
  const next = submissions.map((item) => (item.id === id ? { ...item, ...updates } : item));
  await writeJsonFile('submissions.json', next);
  return next.find((item) => item.id === id) || null;
}

export type SeoPageRecord = {
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

export async function getSeoSettings(): Promise<Record<string, Partial<SeoPageRecord>>> {
  return readJsonFile<Record<string, Partial<SeoPageRecord>>>('seo-pages.json', {
    home: {},
    contact: {},
    demo: {},
    about: {},
    agents: {},
    industries: {},
    blog: {},
    careers: {},
    privacy: {},
    terms: {},
  });
}

export async function saveSeoSettings(page: string, values: Partial<SeoPageRecord>) {
  const settings = await getSeoSettings();
  const next = {
    ...settings,
    [page]: { ...(settings[page] || {}), ...values },
  };
  await writeJsonFile('seo-pages.json', next);
  return next[page];
}
