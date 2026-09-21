export const metadata = {
  title: 'Outlook Attachment Size Limit: The 20 MB Rule and How to Beat It (2026)',
  description:
    'Outlook.com and Microsoft 365 reject attachments over 20 MB — and Exchange servers often block far less. Exact limits, common errors, and how to shrink photos fast.',
};

export default function OutlookLimitGuide() {
  return (
    <article className="wrap article">
      <h1>Outlook Attachment Size Limit: The 20 MB Rule and How to Beat It</h1>
      <p className="meta">Updated September 2026 · 4 min read</p>

      <p className="lead">
        <strong>Outlook.com and Microsoft 365 reject attachments larger than 20 MB.</strong> If you
        are emailing someone at a company that runs Exchange, the ceiling can drop to 10 MB or
        less. Here is the full picture and what to do about it.
      </p>

      <h2>Outlook limits at a glance</h2>
      <table className="limits">
        <thead>
          <tr>
            <th>Service</th>
            <th>Attachment cap</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Outlook.com (consumer)</td>
            <td>20 MB per email</td>
          </tr>
          <tr>
            <td>Microsoft 365 (Exchange Online)</td>
            <td>20–25 MB, tenant-configurable</td>
          </tr>
          <tr>
            <td>On-premises Exchange</td>
            <td>10 MB by default; admins can set lower</td>
          </tr>
          <tr>
            <td>Receiving side of many companies</td>
            <td>5–10 MB after spam-gateway rules</td>
          </tr>
        </tbody>
      </table>

      <h2>The error messages you will see</h2>
      <ul>
        <li>
          <em>&quot;The attachment size exceeds the allowable limit&quot;</em> — Outlook itself
          refused to send; your files total over 20 MB.
        </li>
        <li>
          <em>&quot;552 5.3.4 Message size exceeds fixed limit&quot;</em> — your email left
          Outlook fine, but the <em>recipient&apos;s</em> server bounced it.
        </li>
        <li>
          <em>&quot;Attachment size condition not met&quot;</em> — a corporate transport rule
          blocked it before it even reached the mailbox.
        </li>
      </ul>
      <p>
        The middle one confuses people the most: the message sits in your Sent folder, but the
        client never received it. Always keep an eye on bounce-backs after sending large files to
        business addresses.
      </p>

      <h2>Why photos are the usual culprit</h2>
      <p>
        A single photo from a recent phone is 3–8 MB. Attach four of them to a reply in Outlook
        desktop and you are already flirting with the limit — before the email text and encoding
        overhead push it over. Screenshots pasted at full resolution can be surprisingly large
        too.
      </p>

      <h2>Microsoft&apos;s own workaround — and its catch</h2>
      <p>
        When you exceed the limit, new Outlook and Outlook on the web offer to upload the files to
        OneDrive and share a link instead. That works when the recipient can open OneDrive links.
        Two common failures:
      </p>
      <ul>
        <li>External recipients whose security policy blocks cloud-share links.</li>
        <li>Shared mailboxes and ticketing systems that cannot follow links at all.</li>
      </ul>
      <p>
        A directly-attached, sensibly compressed file never has those problems — it arrives as a
        plain attachment that every mail client since 1995 can open.
      </p>

      <h2>How to get photos under the limit in 30 seconds</h2>
      <p>
        <a href="/">Open the free compressor on this site</a>, drop your photos in, and pick{' '}
        <strong>1 MB</strong> per image (bulletproof) or <strong>5 MB</strong> (for a small batch
        going to Outlook.com). The tool finds the highest quality that fits your target size, and
        everything runs locally in your browser — no uploads, no sign-up, works on any device.
      </p>

      <h2>Rules of thumb</h2>
      <ul>
        <li>Emailing a business address? Keep the <strong>entire email</strong> under 10 MB.</li>
        <li>Sending many photos? ~1 MB per photo is plenty for on-screen viewing.</li>
        <li>
          Sending something that must stay full-resolution (print, legal)? Use a file share — do
          not fight the mail limit.
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
        <li>
          <a href="/guides/iphone-photos-too-large">Why iPhone photos are too big to email — and the fix</a>
        </li>
      </ul>

      <p className="cta">
        <a className="btn" href="/">
          Compress my photos for Outlook →
        </a>
      </p>
    </article>
  );
}
