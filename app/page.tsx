"use client";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import Testimonials from "@/components/home/Testimonials";
import Link from "next/link";
import CTAButton from "@/components/common/CTAButton";
import { FaPhoneAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";
import CTA from "@/components/home/CTA";

export default function Home() {
  const [user] = useAuthState(auth);
  const [isTechnician, setIsTechnician] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (user) {
      setIsTechnician(true);
    }
  }, [user]);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We provide comprehensive automotive services including preventive maintenance, CNG conversions, diagnostics, oil changes, body repairs, and vehicle delivery services.",
    },
    {
      question: "How do I book an appointment?",
      answer:
        "You can book an appointment through our website using the booking form, by calling us directly, or by visiting our service center during business hours.",
    },
    {
      question: "What are your working hours?",
      answer:
        "Our service center is open Monday to Friday from 8:00 AM to 6:00 PM, and Saturdays from 9:00 AM to 5:00 PM. Emergency services are available 24/7.",
    },
    {
      question: "Do you use genuine parts?",
      answer:
        "Yes, we only use genuine or OEM-equivalent parts for all repairs and replacements to ensure the best quality and performance for your vehicle.",
    },
    {
      question: "How long do typical services take?",
      answer:
        "Service duration varies by type: oil changes take about 30 minutes, while more complex services like diagnostics or body repairs may take several hours or days. We'll provide an estimated timeframe when you book.",
    },
    {
      question: "Do you offer warranties on your services?",
      answer:
        "Yes, we provide a 12-month warranty on all our services and parts. Specific warranty terms may vary by service type.",
    },
  ];

  return (
    <main>
      <HeroSection />
      <StatsSection />
      <ServicesGrid />
      <Testimonials />

      <section className="py-16 bg-[#e6edf7]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c4187] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[#0c4187]/80 max-w-2xl mx-auto">
              Find answers to common questions about our services and processes
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className={`w-full flex justify-between items-center p-6 text-left ${
                    activeIndex === index ? "bg-[#e6edf7]" : "bg-white"
                  }`}
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-medium text-[#0c4187]">
                    {faq.question}
                  </h3>
                  {activeIndex === index ? (
                    <FaChevronUp className="text-[#2cbbd4]" />
                  ) : (
                    <FaChevronDown className="text-[#2cbbd4]" />
                  )}
                </button>
                {activeIndex === index && (
                  <div className="p-6 bg-white text-gray-600 border-t border-gray-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-medium mb-5 shadow-sm">
              For Technicians
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0c4187] mb-4">
              Professional Inspection Portal
            </h2>

            <p className="text-lg text-gray-600 mb-10">
              Streamline your workflow with dedicated tools, smart reporting,
              and secure storage — all in one place.
            </p>

            <div className="flex justify-center mb-16">
              <Link
                href="/auth/signup"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2cbbd4] to-[#2395a9] hover:from-[#2395a9] hover:to-[#1a7687] text-white font-semibold px-7 py-3 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
              >
                Access Inspection Portal
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Digital Reports",
                desc: "Create professional, standardized inspection reports in minutes.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                ),
              },
              {
                title: "Efficient Workflow",
                desc: "Complete inspections faster with our intuitive, technician-friendly tools.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                ),
              },
              {
                title: "Secure Storage",
                desc: "Your inspection data is protected with top-grade encryption and auto-backups.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                ),
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center mb-5 shadow-inner">
                  <svg
                    className="w-7 h-7 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {feature.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </main>
  );
}
