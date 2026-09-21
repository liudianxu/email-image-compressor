'use client';

import Script from 'next/script';
import { useEffect, useRef } from 'react';

const CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

/**
 * Loads the AdSense library once, and only when NEXT_PUBLIC_ADSENSE_CLIENT is set.
 * Nothing renders (and no Google script is fetched) until then — the site stays
 * clean before approval.
 */
export function AdSenseScript() {
  if (!CLIENT) return null;
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${CLIENT}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}

/**
 * A single responsive display slot. Renders nothing without a publisher ID.
 * Usage: <AdSlot slot="1234567890" />
 */
export function AdSlot({ slot, label = 'Advertisement' }) {
  const pushed = useRef(false);

  useEffect(() => {
    if (!CLIENT || pushed.current) return;
    pushed.current = true;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      /* AdSense not ready yet — harmless */
    }
  }, []);

  if (!CLIENT || !slot) return null;

  return (
    <div className="ad-slot">
      <span className="ad-label">{label}</span>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={CLIENT}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
