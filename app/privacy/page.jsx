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

      <h2>Analytics and advertising</h2>
      <p>
        We may use privacy-friendly, aggregated analytics to count page views. If advertising is
        enabled in the future, third-party vendors (such as Google) may use cookies to serve ads
        based on prior visits. You can opt out of personalized advertising via Google Ads Settings.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy? Reach us at <a href="mailto:hello@compressfor.email">hello@compressfor.email</a>.
      </p>
    </div>
  );
}
