import { ScriptProps } from "next/script";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Kruss Automotive Services",
  image: "https://krussauto.com/images/logo.jpg",
  "@id": "https://krussautoserve.com",
  url: "https://krussautoserve.com",
  telephone: "+911234567890",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Automotive Way",
    addressLocality: "Lagos",
    addressRegion: "TC",
    postalCode: "12345",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "12.9715987",
    longitude: "77.5945627",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "08:00",
    closes: "20:00",
  },
  sameAs: [
    "https://www.facebook.com/krussauto",
    "https://www.instagram.com/krussauto",
    "https://www.linkedin.com/company/krussauto",
  ],
};

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://krussautoserve.com",
    },
  ],
};

const StructuredData = ({ data }: { data: any }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export default StructuredData;
