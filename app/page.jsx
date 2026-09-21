import CompressorTool from '@/components/CompressorTool';

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the maximum email attachment size?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gmail accepts attachments up to 25 MB. Outlook.com and Microsoft 365 reject anything over 20 MB. Many corporate mail servers enforce even lower limits around 10 MB. Compressing images to 1–10 MB before attaching avoids most bounce-backs.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I make a photo smaller to email it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Drag your photo into the tool above, pick a target size (1 MB is safe for any inbox), and download the compressed copy. The whole process runs in your browser, so it works even on slow connections and your photo never leaves your device.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are my images uploaded to a server?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. All compression happens locally in your browser using the HTML5 canvas API. There is no upload step, no server-side storage, and no account required.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does compressing an image reduce its quality?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Photos shared over email are usually viewed on a phone or laptop screen, so a well-tuned JPEG at moderate quality looks essentially identical. This tool binary-searches the highest quality that still fits under your target file size, so you only lose as much quality as strictly necessary.',
      },
    },
    {
      '@type': 'Question',
      name: 'What image formats are supported?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'JPG, PNG, and WebP files can be dropped in. Output is always JPG, which every email client can display. Transparent PNG areas are flattened to white.',
      },
    },
  ],
};

export default function HomePage() {
  return (
    <div className="wrap">
      <h1>Compress images for email</h1>
      <p className="sub">
        Got a &quot;file too large&quot; bounce-back? Shrink JPG and PNG photos to fit Outlook&apos;s
        20 MB and Gmail&apos;s 25 MB attachment limits — right in your browser, in seconds.
      </p>

      <CompressorTool />

      <section className="block">
        <h2>Email attachment limits you keep hitting</h2>
        <table className="limits">
          <thead>
            <tr>
              <th>Email provider</th>
              <th>Max attachment size</th>
              <th>Safe image budget</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Gmail</td>
              <td>25 MB</td>
              <td>~20 MB of images</td>
            </tr>
            <tr>
              <td>Outlook.com / Microsoft 365</td>
              <td>20 MB</td>
              <td>~15 MB of images</td>
            </tr>
            <tr>
              <td>Yahoo Mail</td>
              <td>25 MB</td>
              <td>~20 MB of images</td>
            </tr>
            <tr>
              <td>Typical corporate servers</td>
              <td>10 MB</td>
              <td>1–5 MB per image</td>
            </tr>
          </tbody>
        </table>
        <p className="note">
          When you attach several photos, they add up fast — five 8 MB phone photos already blow
          past most limits.
        </p>
      </section>

      <section className="block">
        <h2>How it works</h2>
        <div className="steps">
          <div className="step">
            <div className="n">1</div>
            <h3>Drop your photos</h3>
            <p>JPG, PNG or WebP — select as many as you need.</p>
          </div>
          <div className="step">
            <div className="n">2</div>
            <h3>Pick a target size</h3>
            <p>1 MB is bulletproof; 10 MB slides under Outlook&apos;s limit.</p>
          </div>
          <div className="step">
            <div className="n">3</div>
            <h3>Download &amp; attach</h3>
            <p>The tool keeps the best quality that fits your target.</p>
          </div>
        </div>
      </section>

      <section className="block">
        <h2>Guides: why your attachments bounce</h2>
        <ul className="guides-list">
          <li>
            <a href="/guides/gmail-attachment-size-limit">Gmail attachment size limit explained</a>
            <p>25 MB on paper, less in practice — see the exact numbers.</p>
          </li>
          <li>
            <a href="/guides/outlook-attachment-size-limit">Outlook attachment size limit explained</a>
            <p>20 MB at best, and corporate Exchange servers often block much less.</p>
          </li>
          <li>
            <a href="/guides/compress-image-without-losing-quality">
              Compress an image without losing quality
            </a>
            <p>How 8 MB photos shrink to 1 MB and still look identical on screen.</p>
          </li>
          <li>
            <a href="/guides/iphone-photos-too-large">iPhone photos too large to email</a>
            <p>The real fix when Mail says your photos are too big — without the blur.</p>
          </li>
          <li>
            <a href="/guides/attachment-too-large">&quot;Attachment too large&quot; — every cause and fix</a>
            <p>Bounced even though the file seemed small? Find your case here.</p>
          </li>
        </ul>
      </section>

      <section className="block">
        <h2>Frequently asked questions</h2>
        <details className="faq" open>
          <summary>What is the maximum email attachment size?</summary>
          <p>
            Gmail accepts up to 25 MB, Outlook up to 20 MB, and many corporate servers cap at
            10 MB. Compressing images to 1–10 MB before attaching avoids most bounce-backs.
          </p>
        </details>
        <details className="faq">
          <summary>How do I make a photo smaller to email it?</summary>
          <p>
            Drag your photo into the tool above, pick a target size, and download the compressed
            copy. It takes a few seconds.
          </p>
        </details>
        <details className="faq">
          <summary>Are my images uploaded to a server?</summary>
          <p>
            No. All compression runs locally in your browser. There is no upload step and no
            storage — your photos never leave your device.
          </p>
        </details>
        <details className="faq">
          <summary>Does compressing an image reduce its quality?</summary>
          <p>
            The tool finds the highest JPEG quality that still fits under your target size, so you
            only lose as much quality as strictly necessary — visually near-identical for email
            viewing.
          </p>
        </details>
        <details className="faq">
          <summary>What image formats are supported?</summary>
          <p>
            JPG, PNG, and WebP in; JPG out (every email client displays it). Transparent areas
            become white.
          </p>
        </details>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </div>
  );
}
