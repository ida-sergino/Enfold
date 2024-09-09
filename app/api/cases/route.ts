import { NextRequest, NextResponse } from 'next/server';
import { fetchAllCases } from '@/app/hooks/fetch/fetchAllCases';

export async function GET(req: NextRequest) {
  try {
    const cases = await fetchAllCases(); // Fetch the pages data
    return NextResponse.json({ cases });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}