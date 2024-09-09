import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const robotsTxt = `
    User-agent: *
    Disallow: /api/
    Allow: /

    Sitemap: ${process.env.NEXT_PUBLIC_SITE_URL}/sitemap.xml
  `;

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}