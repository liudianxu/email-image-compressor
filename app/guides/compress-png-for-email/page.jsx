export const metadata = {
  title: 'PNG Too Large for Email? Why PNGs Are Huge and the Fastest Fix',
  description:
    'PNG files are often 5-10x larger than they need to be for email. Why that happens, when PNG is actually required, and how to shrink it in your browser.',
};

export default function PngGuide() {
  return (
    <article className="wrap article">
      <h1>PNG Too Large for Email? Why PNGs Are Huge and the Fastest Fix</h1>
      <p className="meta">Updated September 2026 · 3 min read</p>

      <p className="lead">
        A screenshot or exported graphic saved as PNG can easily hit 5–20 MB — far past Gmail&apos;s
        25 MB and Outlook&apos;s 20 MB ceilings once you add a second file.{' '}
        <strong>The reason is simple: PNG is designed for perfect pixels, not small files.</strong>
      </p>

      <h2>Why PNG files get so big</h2>
      <ul>
        <li>
          <strong>PNG is lossless.</strong> Every single pixel is stored exactly. For a photograph
          with millions of subtle colour variations, that is enormously wasteful — JPEG&apos;s
          whole job is to exploit the fact that your eye cannot tell the difference.
        </li>
        <li>
          <strong>Screenshots are a worst case.</strong> A full-screen Retina screenshot is
          3000×2000 pixels of anti-aliased text and UI — 3–8 MB is normal.
        </li>
        <li>
          <strong>Design exports carry resolution you do not need.</strong> A 4000-pixel-wide PNG
          for a logo that will display 300 pixels wide on screen.
        </li>
      </ul>

      <h2>Should you convert it to JPEG?</h2>
      <p>
        For <strong>photographs and screenshots of photos</strong>: yes, always. JPEG at moderate
        quality can be 10–20× smaller with no visible difference on screen — and every email client
        since 1995 displays JPEG.
      </p>
      <p>
        For <strong>logos, line art, screenshots of text</strong>: converting to JPEG puts visible
        fuzz around sharp edges and text. Options there:
      </p>
      <ul>
        <li>Resize down to the size it will actually be viewed, then keep PNG.</li>
        <li>Use PNG-8 (256 colours) if the image has few colours.</li>
        <li>If a little softness is acceptable, JPEG at high quality (85+) still beats 12 MB of PNG for email.</li>
      </ul>

      <h2>The 30-second fix</h2>
      <p>
        <a href="/">Our browser-based compressor</a> takes PNG in and gives you a quality-tuned JPEG
        out, targeting a size you choose — 1 MB is safe for any inbox, 5 MB is generous. Transparent
        areas are flattened to white (email clients do not respect PNG transparency anyway).
      </p>
      <p>
        Nothing is uploaded: the conversion runs on your device using the browser&apos;s canvas
        engine, so you can run it on a contract scan or a client deck without handing the file to a
        stranger&apos;s server.
      </p>

      <h2>Quick reference</h2>
      <table className="limits">
        <thead>
          <tr>
            <th>Content</th>
            <th>Best bet for email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Photos</td>
            <td>JPEG, ~1 MB</td>
          </tr>
          <tr>
            <td>Screenshots</td>
            <td>Resize, then JPEG if text stays readable</td>
          </tr>
          <tr>
            <td>Logos / line art</td>
            <td>Resize; keep PNG only if edges must stay crisp</td>
          </tr>
          <tr>
            <td>Transparent images</td>
            <td>JPEG on white (email ignores transparency)</td>
          </tr>
        </tbody>
      </table>

      <h2>Related guides</h2>
      <ul>
        <li>
          <a href="/guides/compress-image-without-losing-quality">
            Compress an image without losing quality
          </a>
        </li>
        <li>
          <a href="/guides/jpeg-vs-png-for-email">JPEG vs PNG for email: which should you send?</a>
        </li>
        <li>
          <a href="/guides/how-many-photos-can-i-email">How many photos can you email?</a>
        </li>
      </ul>

      <p className="cta">
        <a className="btn" href="/">
          Shrink my PNG now →
        </a>
      </p>
    </article>
  );
}
