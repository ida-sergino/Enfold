import { NextResponse } from 'next/server';
import { fetchCSPReports } from '@/app/hooks/fetch/fetchCSPReports';

export async function GET() {
  const { violations, error } = await fetchCSPReports();

  if (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  return NextResponse.json({ violations });
}