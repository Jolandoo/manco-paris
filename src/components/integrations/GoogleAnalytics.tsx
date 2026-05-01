"use client";

import Script from "next/script";

const GA_ID = "G-F72GYB06ES";
const GTM_ID = "GT-NBQQPNM";

export function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');gtag('config','${GTM_ID}');`,
        }}
      />
    </>
  );
}
