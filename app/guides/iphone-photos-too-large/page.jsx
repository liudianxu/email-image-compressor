export const metadata = {
  title: 'iPhone Photos Too Large to Email? Here Is the Real Fix (2026)',
  description:
    'Apple Mail says your photos are too big or silently converts them to low quality. Why iPhones shoot 3-8 MB photos and how to send them full-size-looking at 1 MB.',
};

export default function IPhoneGuide() {
  return (
    <article className="wrap article">
      <h1>iPhone Photos Too Large to Email? Here Is the Real Fix</h1>
      <p className="meta">Updated September 2026 · 4 min read</p>

      <p className="lead">
        You picked your ten best vacation shots, hit share → Mail, and Apple tells you the message
        is too big — or quietly downsizes the photos into blurry mush. Both are fixable. Here is
        why it happens and what to do instead.
      </p>

      <h2>Why iPhone photos are so large</h2>
      <ul>
        <li>
          <strong>Big sensors.</strong> Recent iPhones shoot 12–48 MP photos. Each file lands at
          roughly 2–8 MB in HEIC (Apple&apos;s space-saving format).
        </li>
        <li>
          <strong>HEIC itself.</strong> Windows computers and many web forms cannot even open HEIC,
          so the iPhone converts to JPEG when sharing — and that JPEG balloons to 4–10 MB.
        </li>
        <li>
          <strong>Burst and Live Photos</strong> attach extra frames and motion data that email
          strips out anyway.
        </li>
      </ul>
      <p>
        Ten such photos is 40–80 MB. Gmail bounces at 25 MB, Outlook at 20 MB, and most corporate
        servers at 10 MB. Apple Mail&apos;s workaround — asking to downsize to{' '}
        <em>&quot;Small&quot;</em> — crushes photos to around 100 KB, which looks terrible.
      </p>

      <h2>The fix: compress to ~1 MB before sharing</h2>
      <p>
        On your iPhone (or computer), open{' '}
        <a href="/">this site&apos;s free image compressor</a> in Safari:
      </p>
      <ol>
        <li>Tap the drop area, select your photos from the library.</li>
        <li>
          Choose the <strong>1 MB</strong> target — that keeps a 1600-pixel-wide, sharp-looking
          photo that fits <em>dozens</em> of images in one email.
        </li>
        <li>Download the compressed copies and attach those in Mail.</li>
      </ol>
      <p>
        Everything runs on-device in the browser — no upload, no app to install, no watermark, and
        it works on iPad and Mac exactly the same way.
      </p>

      <h2>What about Apple&apos;s built-in options?</h2>
      <ul>
        <li>
          <strong>Mail&apos;s &quot;Small / Medium / Large / Actual&quot; prompt</strong> — Small is
          ~100 KB (blurry), Large is ~1–2 MB but you cannot pick per-photo control, and Actual
          bounces. No setting means &quot;exactly 1 MB, best quality&quot;.
        </li>
        <li>
          <strong>iCloud Link sharing</strong> — works person-to-person, but corporate recipients
          often cannot open it, and the link is tied to your account.
        </li>
        <li>
          <strong>Settings → Camera → Formats → Most Compatible</strong> — shoots JPEG instead of
          HEIC, which helps compatibility, not size. Future photos are still multi-MB.
        </li>
      </ul>

      <h2>A note on HEIC for Windows users</h2>
      <p>
        If photos arrived as <code>.heic</code> files and your Windows machine cannot open them,
        run them through the compressor too — it accepts HEIC where the browser supports it and
        outputs plain JPEG that opens everywhere.
      </p>

      <h2>Rules of thumb for emailing from an iPhone</h2>
      <ul>
        <li>Up to ~10 photos: compress to 1 MB each, attach normally.</li>
        <li>Dozens of photos or video: that is a file-share job, not email.</li>
        <li>
          Sending to a company address: keep the whole email under 10 MB — see{' '}
          <a href="/guides/outlook-attachment-size-limit">Outlook limits</a>.
        </li>
      </ul>

      <h2>Related guides</h2>
      <ul>
        <li>
          <a href="/guides/gmail-attachment-size-limit">Gmail attachment size limits explained</a>
        </li>
        <li>
          <a href="/guides/compress-image-without-losing-quality">
            How to compress an image without losing quality
          </a>
        </li>
      </ul>

      <p className="cta">
        <a className="btn" href="/">
          Compress my iPhone photos →
        </a>
      </p>
    </article>
  );
}
