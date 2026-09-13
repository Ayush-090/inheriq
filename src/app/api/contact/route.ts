import { NextResponse } from 'next/server';
import { z } from 'zod';
import { saveSubmission } from '@/lib/data-store';

const contactSchema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email().max(150),
  phone: z.string().optional(),
  company: z.string().optional(),
  businessType: z.string().optional(),
  businessStage: z.string().optional(),
  city: z.string().optional(),
  helpNeeded: z.string().optional(),
  challenge: z.string().optional(),
  servicesRequired: z.string().optional(),
  budgetRange: z.string().optional(),
  source: z.string().optional(),
  message: z.string().max(5000).optional(),
  additionalInfo: z.string().optional(),
  sourceType: z.enum(['contact', 'onboarding']).default('contact'),
});

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const parsed = contactSchema.safeParse(payload);

    if (!parsed.success) {
      return NextResponse.json({ error: 'Validation failed' }, { status: 400 });
    }

    const record = await saveSubmission({
      ...parsed.data,
      status: 'New',
      sourceType: parsed.data.sourceType || 'contact',
    });

    return NextResponse.json({ ok: true, submission: record }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
