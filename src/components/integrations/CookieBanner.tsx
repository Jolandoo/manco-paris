"use client";

import Script from "next/script";

export function CookieBanner() {
  return (
    <Script
      id="hu-manity-banner"
      src="https://cdn.hu-manity.co/hu-banner.min.js"
      strategy="lazyOnload"
    />
  );
}
