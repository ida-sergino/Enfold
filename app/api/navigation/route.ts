import { NextRequest, NextResponse } from 'next/server';
import { fetchAllNavItems } from '@/app/hooks/fetch/fetchAllNavItems';

export async function GET(req: NextRequest) {
  try {
    const pages = await fetchAllNavItems(); // Fetch the pages data
    return NextResponse.json({ pages });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}