import { NextResponse } from 'next/server';
import { requireAdminSession } from '@/lib/admin-auth';
import { updateSubmissionStatus } from '@/lib/data-store';

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const sessionUser = await requireAdminSession();
  if (!sessionUser) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await params;
  const data = await request.json();
  const updated = await updateSubmissionStatus(id, data);

  if (!updated) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  return NextResponse.json({ ok: true, submission: updated });
}
