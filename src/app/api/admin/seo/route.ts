import { NextResponse } from 'next/server';
import { requireAdminSession } from '@/lib/admin-auth';
import { saveSeoSettings } from '@/lib/data-store';

export async function POST(request: Request) {
  const sessionUser = await requireAdminSession();
  if (!sessionUser) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const payload = await request.json();
  const { page, values } = payload;

  if (!page || !values) {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }

  const result = await saveSeoSettings(page, values);
  return NextResponse.json({ ok: true, seo: result });
}
