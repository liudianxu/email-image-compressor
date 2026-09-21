export const metadata = {
  title: 'Privacy Policy — CompressFor.Email',
  description: 'How CompressFor.Email handles (and does not handle) your data.',
};

export default function PrivacyPage() {
  return (
    <div className="wrap privacy">
      <h1>Privacy Policy</h1>
      <p className="sub">Last updated: September 2026</p>

      <h2>Your images stay on your device</h2>
      <p>
        This tool compresses images entirely inside your browser using standard web APIs. Your
        images are never uploaded, transmitted, or stored on any server. Closing the tab erases
        everything.
      </p>

      <h2>No accounts, no tracking of your files</h2>
      <p>
        We do not require an account and do not collect the names or contents of files you process.
      </p>

      <h2>Cookies</h2>
      <p>
        This site itself sets no cookies and stores nothing on your device. A cookie is only used
        once advertising is enabled, as described below.
      </p>

      <h2>Analytics and advertising</h2>
      <p>
        We may use privacy-friendly, aggregated analytics (page counts, referrers, country) to
        understand which guides are useful. This data is not linked to any individual.
      </p>
      <p>
        We use third-party advertising companies to serve ads when you visit this website. These
        companies may use aggregated information (not your name, address, email address or
        telephone number) about your visits to this and other websites in order to provide
        advertisements about goods and services of interest to you.
      </p>
      <p>
        Specifically:
      </p>
      <ul>
        <li>
          Third-party vendors, including Google, use cookies to serve ads based on your prior
          visits to this website or other websites.
        </li>
        <li>
          Google&apos;s use of advertising cookies enables it and its partners to serve ads to you
          based on your visits to this site and/or other sites on the Internet.
        </li>
        <li>
          You may opt out of personalized advertising by visiting{' '}
          <a href="https://www.google.com/settings/ads" rel="nofollow noopener" target="_blank">
            Google Ads Settings
          </a>
          . You can also opt out of some third-party vendors&apos; use of cookies for personalized
          advertising at{' '}
          <a href="https://www.aboutads.info/choices/" rel="nofollow noopener" target="_blank">
            aboutads.info
          </a>
          .
        </li>
      </ul>

      <h2>Log data</h2>
      <p>
        Like most websites, our hosting provider (Vercel) records standard technical logs —
        requested page, timestamp, browser type, approximate location derived from IP address. These
        logs are used for security and reliability only and are not combined with any personal
        identifier.
      </p>

      <h2>Children&apos;s privacy</h2>
      <p>
        This site is not directed at children under 13 and we do not knowingly collect information
        from them.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        If this policy changes, the &quot;Last updated&quot; date above will change accordingly.
        Continued use of the site after an update constitutes acceptance of the revised policy.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy? Reach us at <a href="mailto:hello@compressfor.email">hello@compressfor.email</a>.
      </p>
    </div>
  );
}
