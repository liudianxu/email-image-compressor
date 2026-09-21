export const metadata = {
  title: 'JPEG vs PNG for Email Attachments: Which Should You Send?',
  description:
    'A one-minute decision guide: when to send JPEG, when PNG is worth the size, and what to do with HEIC and WebP files your recipient cannot open.',
};

export default function JpegVsPngGuide() {
  return (
    <article className="wrap article">
      <h1>JPEG vs PNG for Email Attachments: Which Should You Send?</h1>
      <p className="meta">Updated September 2026 · 3 min read</p>

      <p className="lead">
        <strong>Send photos as JPEG. Send screenshots of text or logos as PNG — but resized.</strong>{' '}
        That covers 95% of email cases. The reasoning, and the awkward formats nobody warns you
        about, below.
      </p>

      <h2>The trade in one line each</h2>
      <ul>
        <li>
          <strong>JPEG</strong> — compresses aggressively by approximating fine detail. Tiny files,
          no transparency, slight softness at edges. Built for photographs.
        </li>
        <li>
          <strong>PNG</strong> — stores every pixel exactly, supports transparency. Perfect edges,
          big files. Built for graphics.
        </li>
      </ul>

      <h2>Why this matters for email specifically</h2>
      <p>
        Email always has a size ceiling: 25 MB on Gmail, 20 MB on Outlook, 10 MB on many corporate
        servers. A photograph saved as PNG can be 10–20× bigger than the same photo as JPEG with no
        visible benefit on screen. That difference is the difference between one attachment and a
        dozen.
      </p>

      <h2>Decision table</h2>
      <table className="limits">
        <thead>
          <tr>
            <th>You are sending…</th>
            <th>Format</th>
            <th>Why</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>A photo</td>
            <td>JPEG, ~1 MB</td>
            <td>20× smaller, looks identical on screen</td>
          </tr>
          <tr>
            <td>A screenshot of text / code</td>
            <td>PNG, resized</td>
            <td>JPEG puts fuzz around letters</td>
          </tr>
          <tr>
            <td>A logo or icon</td>
            <td>PNG (resized) or high-quality JPEG</td>
            <td>Crisp edges matter; size does not need to be huge</td>
          </tr>
          <tr>
            <td>An image with transparency</td>
            <td>JPEG on a white background</td>
            <td>Most email clients ignore transparency anyway</td>
          </tr>
          <tr>
            <td>A chart or diagram</td>
            <td>PNG, or export as PDF</td>
            <td>Sharp lines and text</td>
          </tr>
        </tbody>
      </table>

      <h2>The formats that trip people up</h2>
      <ul>
        <li>
          <strong>HEIC</strong> (default on iPhones). Windows machines and many web tools cannot
          open it. Convert to JPEG before sending unless you know the recipient uses Apple devices.
        </li>
        <li>
          <strong>WebP</strong> (many websites and Android screenshots). Excellent compression, but
          older Outlook versions and some corporate systems show nothing at all. Convert to JPEG.
        </li>
        <li>
          <strong>TIFF / BMP / RAW</strong>. Never attach these to email — they can be 50 MB+ and
          few clients display them.
        </li>
      </ul>
      <p>
        <a href="/">Our compressor</a> accepts JPG, PNG, and WebP (and HEIC where the browser
        supports decoding), and always outputs plain JPEG — the format every mail client on earth
        displays. Hard to go wrong.
      </p>

      <h2>Related guides</h2>
      <ul>
        <li>
          <a href="/guides/compress-png-for-email">PNG too large for email? The fastest fix</a>
        </li>
        <li>
          <a href="/guides/compress-image-without-losing-quality">
            Compress an image without losing quality
          </a>
        </li>
        <li>
          <a href="/guides/gmail-attachment-size-limit">Gmail attachment size limits</a>
        </li>
      </ul>

      <p className="cta">
        <a className="btn" href="/">
          Convert and compress for email →
        </a>
      </p>
    </article>
  );
}
