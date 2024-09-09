import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

const getPages = async () => {
  // Fetch pages from the API
  const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/pages`);
  const dynamicRoutes = await response.json();

  // Map the API response to the required format for the sitemap
  const allPages = dynamicRoutes.pages.all_page.items.map((item: any) => ({
    url: item.url,
    changefreq: 'daily',
    priority: 0.7,
  }));

  // Fetch footer links from the API
  const footerResponse = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/footer`);
  const footerLinks = await footerResponse.json();

  // Map the footer links to the required format for the sitemap
  const footerPages = footerLinks.pages.all_footer.items[0].navigation.link.map((link: any) => ({
    url: link.href,
    changefreq: 'weekly',
    priority: 0.5,
  }));

  const staticRoutes = [
    { url: '/404', changefreq: 'weekly', priority: 0.8 },
  ];

  const pages = [
    ...staticRoutes,
    ...allPages,
    ...footerPages
  ];

  return pages;
};

export const generateSitemap = async () => {
  const links = await getPages();
  const stream = new SitemapStream({ hostname: `${process.env.NEXT_PUBLIC_SITE_URL}` });

  const xmlString = await streamToPromise(Readable.from(links).pipe(stream)).then((data) => data.toString());

  return xmlString;
};