import { NextRequest, NextResponse } from 'next/server';
import { generateSitemap } from '@/app/core/utils/sitemap/generate-sitemap';

export async function GET(req: NextRequest) {
  try {
    const sitemap = await generateSitemap();
    return new NextResponse(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  } catch (error) {
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}