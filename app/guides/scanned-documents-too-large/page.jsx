export const metadata = {
  title: 'Scanned Documents Too Large to Email? Fix Scans, Contracts and IDs',
  description:
    'Scanned PDFs and phone photos of documents are often 5-30 MB. How to shrink scans and document photos so they send in one email — and stay readable.',
};

export default function ScannedDocsGuide() {
  return (
    <article className="wrap article">
      <h1>Scanned Documents Too Large to Email? Fix Scans, Contracts and IDs</h1>
      <p className="meta">Updated September 2026 · 4 min read</p>

      <p className="lead">
        You scanned a contract, photographed your ID, or exported a signed PDF — and now the email
        bounces. Document files blow past limits fast because scanners and phone cameras default to
        quality meant for archiving, not for sending.{' '}
        <strong>The good news: documents compress far better than photos, and stay perfectly
        readable.</strong>
      </p>

      <h2>What makes document files so heavy</h2>
      <ul>
        <li>
          <strong>Scanner defaults.</strong> 600 DPI colour scanning of a 5-page contract is easily
          30 MB.
        </li>
        <li>
          <strong>Phone photos of paper.</strong> People photograph documents with the same 4000-px
          camera setting used for landscapes — 5–8 MB per page.
        </li>
        <li>
          <strong>Embedded images in PDFs.</strong> Many &quot;PDF compression&quot; problems are
          really image-size problems inside the PDF.
        </li>
      </ul>

      <h2>How small do documents need to be?</h2>
      <table className="limits">
        <thead>
          <tr>
            <th>Destination</th>
            <th>Typical limit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Gmail</td>
            <td>25 MB</td>
          </tr>
          <tr>
            <td>Outlook.com / Microsoft 365</td>
            <td>20 MB</td>
          </tr>
          <tr>
            <td>Bank / government / HR upload portals</td>
            <td>2–10 MB per file (often 5 MB)</td>
          </tr>
          <tr>
            <td>Safe target for anything</td>
            <td>Under 2 MB per document</td>
          </tr>
        </tbody>
      </table>
      <p>
        Those portals are the real trap: many reject files over 5 MB, and some over 2 MB — even
        though your email would have sent fine.
      </p>

      <h2>Fixing photographed documents (the common case)</h2>
      <p>
        Phone photos of paper compress beautifully because they are mostly flat, low-detail
        surfaces. Run them through <a href="/">the browser compressor</a>:
      </p>
      <ol>
        <li>Select the document photos.</li>
        <li>
          Choose the <strong>1 MB</strong> target — text stays legible because the tool keeps the
          highest quality that fits.
        </li>
        <li>Download, then attach or upload.</li>
      </ol>
      <p>
        For best results when shooting: lay the page flat, fill the frame, avoid harsh shadows, and
        turn off flash. A clean, evenly-lit page compresses to a third of the size of a shadowed
        one at the same readability.
      </p>

      <h2>Smart scanning habits that save you every time</h2>
      <ul>
        <li>
          <strong>Use your phone&apos;s document scan mode</strong> (Google Drive scan, Notes app
          scan). It flattens perspective, boosts contrast, and outputs a PDF that is a fraction of a
          photo&apos;s size.
        </li>
        <li>
          <strong>Choose black &amp; white or greyscale</strong> for text-only pages. Colour mode
          can triple the file size for no benefit.
        </li>
        <li>
          <strong>Drop to 200–300 DPI</strong> for anything that will only be read on screen. 600
          DPI is for archival or printing.
        </li>
      </ul>

      <h2>Privacy note</h2>
      <p>
        Documents are the last files you want uploaded to a random server. The compressor on this
        site never uploads anything — processing happens inside your browser, so IDs, contracts, and
        medical paperwork stay on your device.
      </p>

      <h2>Related guides</h2>
      <ul>
        <li>
          <a href="/guides/attachment-too-large">&quot;Attachment too large&quot; — every cause and fix</a>
        </li>
        <li>
          <a href="/guides/resize-vs-compress-photo-for-email">Resize or compress? What actually works</a>
        </li>
        <li>
          <a href="/guides/gmail-attachment-size-limit">Gmail attachment size limits explained</a>
        </li>
      </ul>

      <p className="cta">
        <a className="btn" href="/">
          Shrink my scanned documents →
        </a>
      </p>
    </article>
  );
}
