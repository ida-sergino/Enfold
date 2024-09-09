import { NextResponse } from 'next/server';

export async function GET() {
  // Mock data for CSP violations
  const cspReport = {
    violations: [
      {
        'document-uri': 'http://localhost:3000',
        'referrer': '',
        'violated-directive': 'script-src',
        'effective-directive': 'script-src',
        'original-policy': "default-src 'self'; script-src 'self' 'unsafe-eval';",
        'disposition': 'enforce',
        'blocked-uri': 'inline',
        'line-number': 1,
        'column-number': 1,
        'source-file': 'http://localhost:3000',
        'status-code': 200,
        'script-sample': ''
      }
    ]
  };

  return NextResponse.json(cspReport);
}