import { NextRequest, NextResponse } from 'next/server';
import { fetchAllFooterNavItems } from '@/app/hooks/fetch/fetchAllFooterNavItems';

export async function GET(req: NextRequest) {
  try {
    const pages = await fetchAllFooterNavItems(); // Fetch the pages data
    return NextResponse.json({ pages });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}