export const metadata = {
  title: 'How to Compress an Image Without Losing Quality (Visually Lossless Guide)',
  description:
    'Why image files are so big, what compression actually removes, and how to shrink JPG/PNG photos to 1 MB while looking identical on screen.',
};

export default function CompressQualityGuide() {
  return (
    <article className="wrap article">
      <h1>How to Compress an Image Without Losing Quality</h1>
      <p className="meta">Updated September 2026 · 5 min read</p>

      <p className="lead">
        &quot;Compress without losing quality&quot; sounds like a contradiction. It is not — you
        just have to know <em>which</em> quality you are allowed to throw away. Done right, a photo
        can shrink from 8 MB to 1 MB and still look identical on any screen you would ever email
        it to.
      </p>

      <h2>First, why are photos so big?</h2>
      <p>
        A modern phone camera captures 12–50 megapixels. A 48 MP photo is 8000 pixels wide — but
        the screen it will be viewed on in an email client shows it at maybe 700 pixels wide. The
        other 7300 pixels of width are pure dead weight for email purposes.
      </p>
      <p>
        On top of that, phones save in HEIC or high-quality JPEG with very mild compression,
        optimized for editing and printing rather than sharing. So most of the &quot;size&quot; in
        your photo file is resolution and quality headroom you will never use.
      </p>

      <h2>The three levers of image size</h2>
      <ul>
        <li>
          <strong>Resolution</strong> (pixel dimensions). Halving width and height cuts file size
          to roughly a quarter. Downscaling from 8000 px to 1600 px costs nothing visually for
          email — nobody zooms into an attached photo at 5×.
        </li>
        <li>
          <strong>JPEG quality</strong> (how aggressively fine detail is approximated). Below about
          75 you start seeing blockiness; above it, differences are invisible at normal viewing
          distance.
        </li>
        <li>
          <strong>Format</strong>. PNG is lossless and huge for photos; JPEG is built exactly for
          this job. (Converting photos from PNG to JPEG alone often saves 80%.)
        </li>
      </ul>

      <h2>The trick: binary-search the quality</h2>
      <p>
        Crude compressors pick one quality setting and hope. A smarter approach: set your target
        file size (say 1 MB), then <strong>test quality levels from high to low until the file
        just barely fits</strong> — that is exactly what{' '}
        <a href="/">the compressor on this site</a> does. You get the highest quality that still
        lands under your limit, instead of a blunt &quot;quality 60 for everyone&quot;.
      </p>
      <p>
        And because it only starts shaving resolution (2400 → 1600 → 1100 px long edge) when
        quality alone cannot reach the target, screen-sharp results survive far longer than you
        would expect.
      </p>

      <h2>What &quot;lossless&quot; really means (and when you need it)</h2>
      <p>
        Truly lossless compression (PNG-optimized, lossless WebP, ZIP) can only shave 5–30% off a
        photo — nowhere near the 8× you need for email. It exists for graphics where every pixel
        must be bit-exact: logos, screenshots of text, medical imaging, files destined for
        re-editing.
      </p>
      <p>
        For photos viewed on screens, what you actually want is{' '}
        <strong>visually lossless</strong>: compression your eye cannot detect at normal viewing
        size. That is achievable at a fraction of the original size.
      </p>

      <h2>Practical numbers that work</h2>
      <table className="limits">
        <thead>
          <tr>
            <th>Purpose</th>
            <th>Long edge</th>
            <th>Target size</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Email to anyone, any server</td>
            <td>1100–1600 px</td>
            <td>~1 MB</td>
          </tr>
          <tr>
            <td>Slideshow-quality sharing</td>
            <td>1600–2400 px</td>
            <td>2–3 MB</td>
          </tr>
          <tr>
            <td>Print or later editing</td>
            <td>full resolution</td>
            <td>use a file share instead</td>
          </tr>
        </tbody>
      </table>

      <h2>Privacy bonus: compress in the browser, not on a server</h2>
      <p>
        Many &quot;free image compressors&quot; upload your photo to a server, process it there,
        and keep a copy you have no control over. If the photo is a contract scan, a family
        picture, or anything you would rather not hand to a stranger&apos;s hard drive, pick a tool
        that runs entirely in your browser. On{' '}
        <a href="/">this site&apos;s compressor</a> there is no upload step at all — your files
        never leave your device, and it works offline once loaded.
      </p>

      <h2>Related guides</h2>
      <ul>
        <li>
          <a href="/guides/gmail-attachment-size-limit">Gmail attachment size limits explained</a>
        </li>
        <li>
          <a href="/guides/outlook-attachment-size-limit">Outlook attachment size limits explained</a>
        </li>
        <li>
          <a href="/guides/iphone-photos-too-large">Why iPhone photos are too big to email — and the fix</a>
        </li>
      </ul>

      <p className="cta">
        <a className="btn" href="/">
          Shrink my images to 1 MB →
        </a>
      </p>
    </article>
  );
}
