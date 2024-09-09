export async function fetchCSPReports() {
  try {
    const response = await fetch('http://localhost:3000');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.text(); // Assuming the homepage returns HTML

    // Extract CSP violations from the HTML
    const violations = extractCSPViolations(data);

    return { violations };
  } catch (error: any) {
    return { error: error.message };
  }
}

// Function to extract CSP violations from HTML
function extractCSPViolations(html: string): any[] {
  const violations: any[] = [];
  const scriptRegex = /<script[^>]*>([\s\S]*?)<\/script>/gi;
  const styleRegex = /<style[^>]*>([\s\S]*?)<\/style>/gi;
  const imgRegex = /<img[^>]*src=["']([^"']*)["'][^>]*>/gi;
  let match;

  // Extract script violations
  while ((match = scriptRegex.exec(html)) !== null) {
    const scriptContent = match[1];
    if (scriptContent.includes('CSP violation')) {
      violations.push({
        'document-uri': 'http://localhost:3000',
        'referrer': '',
        'violated-directive': 'script-src',
        'effective-directive': 'script-src',
        'original-policy': "default-src 'self'; script-src 'self';",
        'disposition': 'enforce',
        'blocked-uri': 'inline',
        'line-number': match.index,
        'column-number': 1,
        'source-file': 'http://localhost:3000',
        'status-code': 200,
        'script-sample': scriptContent.trim()
      });
    }
  }

  // Extract style violations
  while ((match = styleRegex.exec(html)) !== null) {
    const styleContent = match[1];
    if (styleContent.includes('CSP violation')) {
      violations.push({
        'document-uri': 'http://localhost:3000',
        'referrer': '',
        'violated-directive': 'style-src',
        'effective-directive': 'style-src',
        'original-policy': "default-src 'self'; style-src 'self';",
        'disposition': 'enforce',
        'blocked-uri': 'inline',
        'line-number': match.index,
        'column-number': 1,
        'source-file': 'http://localhost:3000',
        'status-code': 200,
        'style-sample': styleContent.trim()
      });
    }
  }

  // Extract image violations
  while ((match = imgRegex.exec(html)) !== null) {
    const imgSrc = match[1];
    if (imgSrc.includes('CSP violation')) {
      violations.push({
        'document-uri': 'http://localhost:3000',
        'referrer': '',
        'violated-directive': 'img-src',
        'effective-directive': 'img-src',
        'original-policy': "default-src 'self'; img-src 'self';",
        'disposition': 'enforce',
        'blocked-uri': imgSrc,
        'line-number': match.index,
        'column-number': 1,
        'source-file': 'http://localhost:3000',
        'status-code': 200,
        'img-sample': imgSrc.trim()
      });
    }
  }

  return violations;
}