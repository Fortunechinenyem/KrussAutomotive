"use client";

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
