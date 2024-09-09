/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/robots",
        destination: "/robots.txt",
        permanent: true,
      },
      {
        source: "/sitemap",
        destination: "/sitemap.xml",
        permanent: true,
      },
    ];
  },
  images: {
    domains: [
      "images.unsplash.com",
      "assets.aceternity.com",
      "azure-eu-images.contentstack.com",
    ],
  },
};

export default nextConfig;
