export const metadata = {
  title: 'Gmail Attachment Size Limit: How Many MB Can You Really Send? (2026)',
  description:
    'Gmail caps attachments at 25 MB — but the real limit is lower than you think. See exact numbers, why big photos bounce, and how to shrink them in seconds.',
};

export default function GmailLimitGuide() {
  return (
    <article className="wrap article">
      <h1>Gmail Attachment Size Limit: How Many MB Can You Really Send?</h1>
      <p className="meta">Updated September 2026 · 4 min read</p>

      <p className="lead">
        The short answer: <strong>Gmail accepts attachments up to 25 MB per email.</strong> But if
        you have ever attached a few phone photos and watched the message bounce right back, you
        know the real-world limit is lower. Here is what is actually going on — and the fastest way
        to fix it.
      </p>

      <h2>The 25 MB limit applies to the whole email, not each file</h2>
      <p>
        Gmail&apos;s 25 MB cap covers <em>everything</em> in the message: all attachments plus the
        message text itself (which is then encoded, adding roughly a third again in size). That
        means:
      </p>
      <ul>
        <li>One 24 MB video can pass on its own — but not with photos attached alongside it.</li>
        <li>Six 5 MB photos (30 MB total) will bounce, even though each file is &quot;under 25 MB&quot;.</li>
        <li>
          Emails you <em>receive</em> are capped at 50 MB — so an oversized message to you still
          gets through, but your reply with the same file attached may not.
        </li>
      </ul>

      <h2>Why the receiving side often rejects less than 25 MB</h2>
      <p>
        The 25 MB rule is Gmail&apos;s own limit. But an email travels across multiple servers, and
        <strong> the strictest server on the route wins</strong>. Many corporate mail servers
        (Exchange, Proofpoint, Mimegate gateways) enforce 10 MB or even 5 MB. So a 22 MB
        attachment can sail out of Gmail and still bounce with an error like{' '}
        <em>&quot;552 Message size exceeds limit&quot;</em> — from the other side.
      </p>

      <h2>What Gmail does when you exceed 25 MB</h2>
      <p>
        If you attach more than 25 MB using the Gmail web interface, Gmail does not reject the
        message outright. Instead it automatically uploads the files to Google Drive and inserts a
        Drive link. That works fine — <em>if</em> the recipient can open Drive links. Clients who
        block external links, or anyone on a locked-down corporate machine, often cannot. A
        compressed file attached directly is still the most reliable option.
      </p>

      <h2>Safe image sizes in practice</h2>
      <table className="limits">
        <thead>
          <tr>
            <th>Situation</th>
            <th>Keep attachments under</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Gmail → Gmail</td>
            <td>25 MB total</td>
          </tr>
          <tr>
            <td>Gmail → Outlook.com / Microsoft 365</td>
            <td>20 MB total</td>
          </tr>
          <tr>
            <td>Gmail → a company address</td>
            <td>10 MB total (often less)</td>
          </tr>
          <tr>
            <td>Several photos, unknown recipient</td>
            <td>1–2 MB per photo</td>
          </tr>
        </tbody>
      </table>

      <h2>The 30-second fix: compress before you attach</h2>
      <p>
        Modern phones save photos at 3–8 MB each — huge for a screen that only shows them at
        message width. Compressing to roughly 1 MB per photo keeps them looking sharp in the inbox
        while fitting a dozen images into a single email.
      </p>
      <p>
        <a href="/">Use the free compressor on this site</a>: drag your photos in, choose{' '}
        <strong>1 MB</strong> as the target, and download the results. Everything runs in your
        browser, so nothing is uploaded anywhere and it takes seconds.
      </p>

      <h2>Quick comparison: fix it yourself vs other options</h2>
      <ul>
        <li>
          <strong>Compress to ~1 MB per photo</strong> — attaches like a normal file, works with
          every recipient. Best default.
        </li>
        <li>
          <strong>Google Drive link</strong> — fine for Gmail-to-Gmail, but corporate firewalls and
          shared inboxes often block it, and large Drive videos expire permissions.
        </li>
        <li>
          <strong>Send as ZIP</strong> — barely helps: photos are already compressed, so zipping a
          24 MB batch of JPEGs saves only a few percent.
        </li>
        <li>
          <strong>Insert inline instead of attaching</strong> — Gmail offers to resize photos when
          you insert them into the body; picking &quot;Small&quot; also shrinks them, but gives you
          little control over the result.
        </li>
      </ul>

      <h2>Related guides</h2>
      <ul>
        <li>
          <a href="/guides/outlook-attachment-size-limit">Outlook attachment size limits explained</a>
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
          Compress my photos for email →
        </a>
      </p>
    </article>
  );
}
