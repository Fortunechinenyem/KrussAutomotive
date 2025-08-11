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

      <section className="py-16 bg-[#0c4187] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Exceptional Auto Care?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Schedule your service today and experience the difference
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton
              href="/book-appointment"
              variant="primary"
              className="bg-white text-[#0c4187] hover:bg-gray-100"
            >
              Book Appointment
            </CTAButton>
            <CTAButton
              href="tel:+2349025301696"
              variant="secondary"
              className="border-white text-white hover:bg-white/10 flex items-center gap-2"
            >
              <FaPhoneAlt /> Call Now
            </CTAButton>
          </div>
        </div>
      </section>
    </main>
  );
}
