const BASE_URL = 'https://email-image-compressor.vercel.app';

export default function sitemap() {
  const routes = [
    '',
    '/privacy',
    '/terms',
    '/guides',
    '/guides/gmail-attachment-size-limit',
    '/guides/outlook-attachment-size-limit',
    '/guides/attachment-too-large',
    '/guides/compress-image-without-losing-quality',
    '/guides/iphone-photos-too-large',
  ];
  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));
}
