"use client";

import Script from "next/script";

const HUMANITY_ID = process.env.NEXT_PUBLIC_HUMANITY_SITE_ID;

export function CookieBanner() {
  if (!HUMANITY_ID) return null;

  return (
    <Script
      id="hu-manity-banner"
      src={`https://widget.hu-manity.co/hu-banner.min.js?siteId=${HUMANITY_ID}`}
      strategy="lazyOnload"
    />
  );
}
