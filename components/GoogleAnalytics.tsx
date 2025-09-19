"use client";

import { useEffect } from "react";
import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export default function GoogleAnalytics({
  measurementId,
}: {
  measurementId: string;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Fire a pageview when the route changes
  useEffect(() => {
    if (!measurementId) return;

    const url = pathname + (searchParams?.toString() ? `?${searchParams}` : "");
    window.gtag?.("event", "page_view", {
      page_path: url,
    });
  }, [pathname, searchParams, measurementId]);

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
          gtag('config', '${measurementId}', { send_page_view: false });
        `}
      </Script>
    </>
  );
}
