"use client";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import Testimonials from "@/components/home/Testimonials";
import Link from "next/link";

export default function Home() {
  const [user] = useAuthState(auth);
  const [isTechnician, setIsTechnician] = useState(false);

  useEffect(() => {
    // Similar role check as in Navbar
    if (user) {
      setIsTechnician(true); // Replace with actual role check
    }
  }, [user]);
  return (
    <main>
      <HeroSection />

      <StatsSection />
      <ServicesGrid />
      <Testimonials />
      <section className="bg-[#0c4187] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Technician Tools</h2>
          <Link
            href="/auth/signup"
            className="inline-block bg-[#2cbbd4] hover:bg-[#2395a9] text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            Access Inspection Portal
          </Link>
        </div>
      </section>
    </main>
  );
}
