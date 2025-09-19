"use client";
import Script from "next/script";

export default function Plausible({ domain }: { domain: string }) {
  return (
    <Script
      strategy="afterInteractive"
      src={`https://plausible.io/js/plausible.js`}
      data-domain={domain}
    />
  );
}
