import { NextResponse } from 'next/server';
import { getSeoSettingsForPage } from '@/lib/seo';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page') || 'home';
  const data = await getSeoSettingsForPage(page);
  return NextResponse.json({ page, seo: data });
}
