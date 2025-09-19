import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../styles/globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Kruss Automotive Services | Vehicle Maintenance & Repair",
    template: "%s | Kruss Automotive",
  },
  description:
    "Revolutionizing vehicle ownership, repair & maintenance experience using technology. Comprehensive automotive services including CNG conversion.",
  keywords: [
    "automotive services",
    "car maintenance",
    "vehicle repair",
    "CNG conversion",
    "car service center",
    "auto repair",
    "Kruss Automotive",
  ],
  authors: [{ name: "Kruss Automotive", url: "https://krussauto.com" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://krussauto.com",
    siteName: "Kruss Automotive",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kruss Automotive Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kruss Automotive Services",
    description:
      "Revolutionizing vehicle ownership experience through technology",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "GOOGLE_VERIFICATION_CODE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>
          {children}
          <GoogleAnalytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}
