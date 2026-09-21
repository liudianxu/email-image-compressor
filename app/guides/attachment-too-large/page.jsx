export const metadata = {
  title: 'Attachment Too Large to Send? Every Cause and Fix, Explained',
  description:
    'Your email bounced with "attachment too large" even though the file seemed small? Here is every limit that can bite you — and how to get any file through.',
};

export default function TooLargeGuide() {
  return (
    <article className="wrap article">
      <h1>Attachment Too Large to Send? Every Cause and Fix</h1>
      <p className="meta">Updated September 2026 · 4 min read</p>

      <p className="lead">
        The bounce-back says the same thing every time — <em>&quot;attachment too large&quot;</em>{' '}
        — but the real cause differs. Find your situation below and skip straight to the fix.
      </p>

      <h2>1. Your attachments total more than your provider allows</h2>
      <p>
        The everyday case. Gmail caps at 25 MB, Outlook.com and Microsoft 365 at 20 MB, Yahoo at
        25 MB. The cap applies to <strong>all attachments plus encoding overhead combined</strong>,
        so six 5 MB photos bounce even though each is &quot;under the limit&quot;.
      </p>
      <p>
        <strong>Fix:</strong> compress images to ~1 MB each —{' '}
        <a href="/">the tool on this site</a> does it in seconds, in your browser. See exact
        numbers in our <a href="/guides/gmail-attachment-size-limit">Gmail</a> and{' '}
        <a href="/guides/outlook-attachment-size-limit">Outlook</a> limit guides.
      </p>

      <h2>2. The recipient&apos;s server has a lower limit</h2>
      <p>
        The sneakiest one: your email leaves fine, then bounces hours later with{' '}
        <em>&quot;552 message size exceeds limit&quot;</em>. Company mail servers commonly enforce
        10 MB, some just 5 MB. Nothing on your side ever showed an error.
      </p>
      <p>
        <strong>Fix:</strong> when emailing a business address, keep the whole message under 10
        MB. For images that means roughly 1 MB per photo.
      </p>

      <h2>3. Photos are huge and you did not notice</h2>
      <p>
        Phone photos run 3–8 MB each; screenshots pasted at full Retina resolution can be 5 MB.
        What looks like &quot;just a few pictures&quot; is often a 40 MB email.
      </p>
      <p>
        <strong>Fix:</strong> shrink before attaching. For iPhones specifically, see{' '}
        <a href="/guides/iphone-photos-too-large">why iPhone photos are too big to email</a>.
      </p>

      <h2>4. The file is a video, ZIP, or design file</h2>
      <p>
        Email was never meant for 200 MB videos or print-resolution artwork, and no amount of
        image compression will help.
      </p>
      <p>
        <strong>Fix:</strong> use a file share that expires (WeTransfer, Dropbox, Drive link) and
        paste the link into the email. Reserve attachments for documents and photos.
      </p>

      <h2>5. Zipping did nothing (and why)</h2>
      <p>
        ZIP only compresses data that has redundancy left. JPEG and HEIC photos are{' '}
        <em>already compressed</em> — a 24 MB batch of photos zips down to maybe 23 MB. People
        waste a lot of time here.
      </p>
      <p>
        <strong>Fix:</strong> re-compress the photos instead of archiving them. Quality-tuned JPEG
        at ~1 MB per image is the order-of-magnitude win. See{' '}
        <a href="/guides/compress-image-without-losing-quality">
          how to compress without visible quality loss
        </a>
        .
      </p>

      <h2>A size cheat sheet you can rely on</h2>
      <table className="limits">
        <thead>
          <tr>
            <th>You are sending…</th>
            <th>Do this</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1–10 photos</td>
            <td>Compress to ~1 MB each and attach</td>
          </tr>
          <tr>
            <td>Photos to a company address</td>
            <td>Compress harder; keep email under 10 MB</td>
          </tr>
          <tr>
            <td>Documents (PDF, DOCX)</td>
            <td>Usually fine — check total size first</td>
          </tr>
          <tr>
            <td>Video / huge files</td>
            <td>File-share link, not attachment</td>
          </tr>
        </tbody>
      </table>

      <h2>Related guides</h2>
      <ul>
        <li>
          <a href="/guides/gmail-attachment-size-limit">Gmail attachment size limits explained</a>
        </li>
        <li>
          <a href="/guides/outlook-attachment-size-limit">Outlook attachment size limits explained</a>
        </li>
        <li>
          <a href="/guides/iphone-photos-too-large">Why iPhone photos are too big to email</a>
        </li>
      </ul>

      <p className="cta">
        <a className="btn" href="/">
          Compress my attachments now →
        </a>
      </p>
    </article>
  );
}
