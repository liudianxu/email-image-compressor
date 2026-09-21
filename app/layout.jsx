import './globals.css';

export const metadata = {
  title: 'Compress Images for Email (Outlook & Gmail) — Free & Private',
  description:
    'Shrink JPG and PNG images to fit email attachment limits. Targets Outlook (20 MB) and Gmail (25 MB). Everything runs in your browser — your photos are never uploaded.',
  robots: { index: true, follow: true },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site">
          <div className="wrap">
            <a href="/" className="logo">
              CompressFor<span>.Email</span>
            </a>
            <nav className="simple">
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="site">
          <div className="wrap">
            <div className="links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Use</a>
            </div>
            <p>
              © {new Date().getFullYear()} CompressFor.Email — made for people who keep getting
              &quot;attachment too large&quot; bounce-backs.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
