import { NextRequest, NextResponse } from 'next/server';
import { fetchAllPages } from '@/app/hooks/fetch/fetchAllPages';

export async function GET(req: NextRequest) {
  try {
    const pages = await fetchAllPages(); // Fetch the pages data
    return NextResponse.json({ pages });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}