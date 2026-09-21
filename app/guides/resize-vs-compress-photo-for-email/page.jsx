export const metadata = {
  title: 'Resize or Compress a Photo for Email? What Actually Works',
  description:
    'Downscaling resolution and compressing quality do different jobs. Here is which one to reach for, and the order that gets photos small without looking bad.',
};

export default function ResizeVsCompressGuide() {
  return (
    <article className="wrap article">
      <h1>Resize or Compress a Photo for Email? What Actually Works</h1>
      <p className="meta">Updated September 2026 · 4 min read</p>

      <p className="lead">
        People use the two words interchangeably, but they are different operations — and doing
        them in the right <em>order</em> is what gets an 8 MB photo down to 1 MB while still looking
        sharp in the inbox.
      </p>

      <h2>Resizing = changing pixel dimensions</h2>
      <p>
        A 4000×3000 photo becomes 1600×1200. File size scales roughly with the square of the
        change: quarter the width and height and you are at about one sixteenth the pixels. This is
        the single biggest lever, and it is nearly free visually — because the screen your recipient
        reads email on shows photos at roughly 600–1200 pixels wide anyway.
      </p>

      <h2>Compressing = keeping dimensions, discarding detail</h2>
      <p>
        The photo stays 4000 pixels wide, but the JPEG encoder approximates fine detail. This is
        where &quot;quality 85 vs quality 60&quot; comes in. Push too far and you get visible
        blocky patches, especially in skies, skin, and flat backgrounds.
      </p>

      <h2>The order that works: resize first, then compress</h2>
      <p>
        Compressing a full-resolution photo is fighting the wrong battle — you are spending quality
        to pay for pixels nobody will see. Downscale to a sensible width, then apply gentle
        compression, and the result looks better at the same file size.
      </p>
      <p>
        That is exactly how <a href="/">the compressor on this site</a> is built: it searches for
        the highest JPEG quality that fits your target size, and only starts downscaling the long
        edge (2400 → 1600 → 1100 px) when quality alone cannot get you there. You get the best
        picture that fits, not a blunt preset.
      </p>

      <h2>Which lever for which situation</h2>
      <table className="limits">
        <thead>
          <tr>
            <th>Goal</th>
            <th>Reach for</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Photo must fit a 1 MB email limit, still look good</td>
            <td>Both — resize to ~1600 px, then JPEG quality search</td>
          </tr>
          <tr>
            <td>Screenshot of text must stay readable</td>
            <td>Resize only; avoid heavy compression (edges fuzz)</td>
          </tr>
          <tr>
            <td>Sending to a print shop</td>
            <td>Neither — full resolution via file share</td>
          </tr>
          <tr>
            <td>&quot;File too large&quot; on a single photo</td>
            <td>Compress to 1 MB; one photo rarely needs 12 MP</td>
          </tr>
        </tbody>
      </table>

      <h2>Numbers to remember</h2>
      <ul>
        <li>1600 px wide is a great default for email — sharp on phones and laptops alike.</li>
        <li>1 MB per photo fits ~20 photos in a Gmail message.</li>
        <li>Quality below ~70 starts to show on large flat areas.</li>
      </ul>
      <p>
        Prefer not to think about any of this? Drop your photos into the tool, pick 1 MB, and it
        handles the order for you.
      </p>

      <h2>Related guides</h2>
      <ul>
        <li>
          <a href="/guides/compress-image-without-losing-quality">
            Compress an image without losing quality
          </a>
        </li>
        <li>
          <a href="/guides/how-many-photos-can-i-email">How many photos can you email?</a>
        </li>
        <li>
          <a href="/guides/attachment-too-large">&quot;Attachment too large&quot; — every cause and fix</a>
        </li>
      </ul>

      <p className="cta">
        <a className="btn" href="/">
          Resize and compress automatically →
        </a>
      </p>
    </article>
  );
}
