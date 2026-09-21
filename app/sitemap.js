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
    '/guides/how-many-photos-can-i-email',
    '/guides/android-photos-too-large',
    '/guides/resize-vs-compress-photo-for-email',
    '/guides/compress-png-for-email',
    '/guides/jpeg-vs-png-for-email',
    '/guides/scanned-documents-too-large',
  ];
  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));
}
