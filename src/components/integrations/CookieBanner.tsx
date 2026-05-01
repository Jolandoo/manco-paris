"use client";

import Script from "next/script";
import { useLocale } from "next-intl";

export function CookieBanner() {
  const locale = useLocale();

  return (
    <>
      <Script
        id="hu-manity-options"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `window.huOptions={appID:"manco-pariscom-4d36694",currentLanguage:"${locale}",blocking:false,globalCookie:false};`,
        }}
      />
      <Script
        id="hu-manity-banner"
        src="https://cdn.hu-manity.co/hu-banner.min.js"
        strategy="lazyOnload"
      />
    </>
  );
}
