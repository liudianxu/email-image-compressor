export const metadata = {
  title: 'How Many Photos Can You Email? (Gmail, Outlook, Yahoo + Real Numbers)',
  description:
    'Handy reference: how many phone photos fit in one email on Gmail, Outlook and Yahoo — at full size vs compressed. Plus the safe rule of thumb.',
};

export default function HowManyPhotosGuide() {
  return (
    <article className="wrap article">
      <h1>How Many Photos Can You Email?</h1>
      <p className="meta">Updated September 2026 · 3 min read</p>

      <p className="lead">
        Depends entirely on photo size — and phone photos are bigger than most people assume.{' '}
        <strong>At full size, 2–5 photos is the practical ceiling. Compressed to 1 MB each, 20–30
        fit comfortably.</strong> Here is the full table.
      </p>

      <h2>The numbers, provider by provider</h2>
      <table className="limits">
        <thead>
          <tr>
            <th>Provider</th>
            <th>Limit</th>
            <th>Full-size phone photos (~5 MB)</th>
            <th>Compressed to 1 MB</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Gmail</td>
            <td>25 MB</td>
            <td>4–5</td>
            <td>~24</td>
          </tr>
          <tr>
            <td>Outlook.com / Microsoft 365</td>
            <td>20 MB</td>
            <td>3–4</td>
            <td>~19</td>
          </tr>
          <tr>
            <td>Yahoo Mail</td>
            <td>25 MB</td>
            <td>4–5</td>
            <td>~24</td>
          </tr>
          <tr>
            <td>Corporate / Exchange address</td>
            <td>10 MB (often 5 MB)</td>
            <td>1–2</td>
            <td>~9</td>
          </tr>
        </tbody>
      </table>
      <p>
        Note the overhead: base64 encoding used by email inflates attachments by about a third
        before transmission, and the message body itself counts. So treat these as optimistic
        ceilings, not targets.
      </p>

      <h2>Why you hit the wall so fast</h2>
      <ul>
        <li>A recent iPhone or Android photo is <strong>3–8 MB</strong>.</li>
        <li>A screenshot pasted at full Retina size can be 2–5 MB.</li>
        <li>&quot;Just sending five pictures&quot; can be a 30 MB email.</li>
      </ul>

      <h2>The safe rule of thumb</h2>
      <ul>
        <li>
          <strong>Personal recipient, unknown device:</strong> compress to 1 MB per photo, send up
          to ~20.
        </li>
        <li>
          <strong>Business recipient:</strong> keep the whole email under 10 MB — that is ~8 photos
          at 1 MB.
        </li>
        <li>
          <strong>Someone needs print quality:</strong> do not email it. Use a file share and send
          the link.
        </li>
      </ul>
      <p>
        Tap the drop area on <a href="/">our free compressor</a>, choose the 1 MB target, and you
        can safely attach a couple dozen photos in one go — while a single full-size photo might
        have failed on its own.
      </p>

      <h2>Related guides</h2>
      <ul>
        <li>
          <a href="/guides/gmail-attachment-size-limit">Gmail attachment size limit explained</a>
        </li>
        <li>
          <a href="/guides/compress-image-without-losing-quality">
            Compress an image without losing quality
          </a>
        </li>
        <li>
          <a href="/guides/resize-vs-compress-photo-for-email">Resize or compress? What actually works</a>
        </li>
      </ul>

      <p className="cta">
        <a className="btn" href="/">
          Make my photos fit →
        </a>
      </p>
    </article>
  );
}
