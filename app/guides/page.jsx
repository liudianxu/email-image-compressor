export const metadata = {
  title: 'Guides: Email Attachment Limits & Image Compression',
  description:
    'Plain-English guides to email attachment limits (Gmail, Outlook, corporate servers) and how to compress images without losing visible quality.',
};

const guides = [
  {
    href: '/guides/gmail-attachment-size-limit',
    title: 'Gmail Attachment Size Limit: How Many MB Can You Really Send?',
    desc: 'Gmail caps attachments at 25 MB — but the real-world limit is lower. Exact numbers and why big photo batches bounce.',
  },
  {
    href: '/guides/outlook-attachment-size-limit',
    title: 'Outlook Attachment Size Limit: The 20 MB Rule and How to Beat It',
    desc: 'Outlook.com and Microsoft 365 reject over 20 MB, and Exchange servers often block far less. Common error messages decoded.',
  },
  {
    href: '/guides/attachment-too-large',
    title: 'Attachment Too Large to Send? Every Cause and Fix',
    desc: 'Your email bounced even though the file seemed small? Find your situation and skip straight to the fix.',
  },
  {
    href: '/guides/compress-image-without-losing-quality',
    title: 'How to Compress an Image Without Losing Quality',
    desc: 'Why photos are so big, what compression actually removes, and how 8 MB shrinks to 1 MB while looking identical on screen.',
  },
  {
    href: '/guides/iphone-photos-too-large',
    title: 'iPhone Photos Too Large to Email? The Real Fix',
    desc: 'Apple Mail bounces your photos or crushes them to mush. Why iPhones shoot multi-MB photos and what to do instead.',
  },
  {
    href: '/guides/how-many-photos-can-i-email',
    title: 'How Many Photos Can You Email?',
    desc: 'Full-size phone photos vs compressed: exact counts for Gmail, Outlook, Yahoo and corporate servers.',
  },
  {
    href: '/guides/android-photos-too-large',
    title: 'Android Photos Too Large to Email? Samsung, Pixel & Xiaomi Fix',
    desc: '108 MP sensors and HDR processing make Android photos huge. How to shrink them without losing visible quality.',
  },
  {
    href: '/guides/resize-vs-compress-photo-for-email',
    title: 'Resize or Compress a Photo for Email? What Actually Works',
    desc: 'Two different levers, and the order that gets an 8 MB photo to 1 MB while still looking sharp.',
  },
  {
    href: '/guides/compress-png-for-email',
    title: 'PNG Too Large for Email? Why PNGs Are Huge and the Fastest Fix',
    desc: 'PNGs are often 10x larger than needed for email. When JPEG is right, when PNG is required.',
  },
  {
    href: '/guides/jpeg-vs-png-for-email',
    title: 'JPEG vs PNG for Email Attachments: Which Should You Send?',
    desc: 'A one-minute decision guide — plus what to do with HEIC and WebP files your recipient cannot open.',
  },
  {
    href: '/guides/scanned-documents-too-large',
    title: 'Scanned Documents Too Large to Email?',
    desc: 'Contracts, IDs and scanned PDFs that bounce off upload portals — and how to make them tiny but readable.',
  },
];

export default function GuidesIndex() {
  return (
    <div className="wrap article">
      <h1>Guides</h1>
      <p className="meta">Updated September 2026</p>
      <p className="sub">
        Everything about email attachment limits and image compression, in plain English. Every
        guide pairs with the <a href="/">free browser-based compressor</a> on this site.
      </p>
      <ul className="guides-list">
        {guides.map((g) => (
          <li key={g.href}>
            <a href={g.href}>{g.title}</a>
            <p>{g.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
