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
import {
  FaPhoneAlt,
  FaChevronDown,
  FaChevronUp,
  FaSearch,
  FaClipboardList,
  FaLock,
  FaClock,
  FaFileAlt,
  FaShieldAlt,
  FaRocket,
} from "react-icons/fa";
import CTA from "@/components/home/CTA";

export default function Home() {
  const [user] = useAuthState(auth);
  const [isTechnician, setIsTechnician] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

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

  // Filter FAQs based on search term
  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <HeroSection />
      <StatsSection />
      <ServicesGrid />
      <Testimonials />

      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-700 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-cyan-600 rounded-full opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-800 rounded-full opacity-10 animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-medium mb-5 shadow-lg">
              <FaLock className="w-3 h-3" />
              Secure Technician Portal
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Professional{" "}
              <span className="text-cyan-400">Inspection Portal</span>
            </h2>

            <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
              Advanced tools for automotive professionals to streamline
              inspections, generate detailed reports, and enhance workflow
              efficiency.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <Link
                href={user ? "/technician-portal" : "/auth/signup"}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
              >
                {user ? "Go to Portal" : "Get Started"}
                <FaRocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              {!user && (
                <Link
                  href="/auth/login"
                  className="inline-flex items-center gap-2 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold px-6 py-4 rounded-xl transition-all duration-300"
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Digital Inspection Reports",
                desc: "Create professional, standardized inspection reports with our intuitive digital forms.",
                icon: <FaFileAlt className="w-8 h-8" />,
                color: "from-cyan-500 to-blue-600",
              },
              {
                title: "Efficient Workflow",
                desc: "Complete inspections 40% faster with our technician-optimized interface and templates.",
                icon: <FaClock className="w-8 h-8" />,
                color: "from-emerald-500 to-green-600",
              },
              {
                title: "Secure Data Storage",
                desc: "All inspection data is protected with enterprise-grade encryption and automatic backups.",
                icon: <FaShieldAlt className="w-8 h-8" />,
                color: "from-violet-500 to-purple-600",
              },
              {
                title: "Template Library",
                desc: "Access a comprehensive library of inspection templates for all vehicle types and services.",
                icon: <FaClipboardList className="w-8 h-8" />,
                color: "from-amber-500 to-orange-600",
              },
              {
                title: "Real-time Collaboration",
                desc: "Share reports instantly with team members and customers for faster approvals.",
                icon: <FaRocket className="w-8 h-8" />,
                color: "from-rose-500 to-pink-600",
              },
              {
                title: "Mobile Accessibility",
                desc: "Access the portal from any device with full functionality on tablets and smartphones.",
                icon: <FaLock className="w-8 h-8" />,
                color: "from-blue-500 to-indigo-600",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-blue-100">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: "100 +", label: "Active Technicians" },
              { value: "15K+", label: "Monthly Inspections" },
              { value: "98%", label: "Satisfaction Rate" },
              { value: "40%", label: "Time Saved" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
              >
                <div className="text-3xl font-bold text-cyan-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-blue-100 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-200 rounded-full opacity-20 blur-xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0c4187] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[#0c4187]/80 max-w-2xl mx-auto">
              Everything you need to know about our services and processes
            </p>

            {/* Search bar */}
            <div className="max-w-md mx-auto mt-8 relative">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search questions..."
                  className="w-full px-5 py-4 pr-12 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2cbbd4] shadow-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <div
                  key={index}
                  className="mb-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <button
                    className={`w-full flex justify-between items-center p-6 text-left ${
                      activeIndex === index
                        ? "bg-gradient-to-r from-blue-50 to-indigo-50"
                        : "bg-white"
                    }`}
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="text-lg font-semibold text-[#0c4187] pr-4">
                      {faq.question}
                    </h3>
                    {activeIndex === index ? (
                      <FaChevronUp className="text-[#2cbbd4] flex-shrink-0" />
                    ) : (
                      <FaChevronDown className="text-[#2cbbd4] flex-shrink-0" />
                    )}
                  </button>
                  {activeIndex === index && (
                    <div className="p-6 bg-white text-gray-700 border-t border-gray-100 animate-fadeIn">
                      <div className="flex">
                        <div className="flex-shrink-0 mr-4 mt-1">
                          <div className="w-2 h-2 bg-[#2cbbd4] rounded-full"></div>
                        </div>
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-12 bg-white rounded-2xl shadow-lg">
                <div className="text-5xl text-gray-300 mb-4">?</div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  No results found
                </h3>
                <p className="text-gray-500">
                  Try different search terms or browse all questions
                </p>
              </div>
            )}
          </div>

          {/* Support CTA */}
          <div className="mt-16 text-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-[#0c4187] mb-4">
                Still have questions?
              </h3>
              <p className="text-gray-600 mb-6">
                Our team is here to help you with any inquiries
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="tel:+1234567890"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2cbbd4] to-[#2395a9] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  <FaPhoneAlt className="w-4 h-4" />
                  Call Support
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-[#2cbbd4] text-[#2cbbd4] font-semibold px-6 py-3 rounded-lg hover:bg-[#2cbbd4] hover:text-white transition-all"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
