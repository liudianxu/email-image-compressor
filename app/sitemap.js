const BASE_URL = 'https://email-image-compressor.vercel.app';

export default function sitemap() {
  const routes = ['', '/privacy', '/terms'];
  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));
}
