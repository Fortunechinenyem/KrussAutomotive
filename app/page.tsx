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
    if (user) {
      setIsTechnician(true);
    }
  }, [user]);

  return (
    <main>
      <HeroSection />
      <StatsSection />
      <ServicesGrid />
      <Testimonials />

      {/* Sleek Technician Portal Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              For Technicians
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Professional Inspection Portal
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Streamline your workflow with our dedicated technician tools and
              reporting system.
            </p>

            <div className="flex justify-center">
              <Link
                href="/auth/signup"
                className="inline-block bg-[#2cbbd4] hover:bg-[#2395a9] text-white font-medium px-6 py-3 rounded-lg transition-colors"
              >
                Access Inspection Portal
              </Link>
            </div>

            <div className="mt-12 border-t border-gray-100 pt-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Digital Reports
                  </h3>
                  <p className="text-gray-600">
                    Create professional, standardized inspection reports
                  </p>
                </div>

                <div className="p-6 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Efficient Workflow
                  </h3>
                  <p className="text-gray-600">
                    Complete inspections faster with our intuitive tools
                  </p>
                </div>

                <div className="p-6 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Secure Storage
                  </h3>
                  <p className="text-gray-600">
                    All your data is protected and backed up automatically
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
