"use client";

import { useEffect } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export default function GoogleAnalytics() {
  const pathname = usePathname();

  const measurementId = process.env.NEXT_PUBLIC_GA_ID || "";

  // Fire a pageview when the route changes
  useEffect(() => {
    if (!measurementId) return;
    window.gtag?.("event", "page_view", {
      page_path: pathname,
    });
  }, [pathname, measurementId]);

  if (!measurementId) return null;

  return (
    <>
      {/* GA library */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      {/* GA config */}
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', { send_page_view: true });
        `}
      </Script>
    </>
  );
}
