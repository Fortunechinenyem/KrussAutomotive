"use client";
import { Inter } from "next/font/google";
import "../../../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

import { ReactNode } from "react";

export default function TechnicianLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        {/* Technician-specific wrapper */}
        <div className="technician-portal">{children}</div>
      </body>
    </html>
  );
}
