import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Kruss Automotive | Revolutionizing Vehicle Services",
  description:
    "Learn about Kruss Automotive - reinventing vehicle ownership, repair & maintenance through technology and exceptional service.",
  keywords:
    "automotive services, car maintenance, vehicle repair, CNG conversion, about Kruss Automotive",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
