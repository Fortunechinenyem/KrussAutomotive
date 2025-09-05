"use client";
import { useState, useRef, useEffect } from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaWhatsapp,
  FaPaperPlane,
  FaCheckCircle,
  FaUser,
  FaComment,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });

    // Reset submission status after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Our Location",
      details: ["Ikosi Ketu, Lagos, Nigeria"],
      link: "https://goo.gl/maps/example",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: <FaPhone className="text-2xl" />,
      title: "Phone Numbers",
      details: ["+234 9025301696 (Service)", "+234 9025301696 (Support)"],
      link: "tel:+2349025301696",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email Address",
      details: ["service@krussauto.com", "support@krussauto.com"],
      link: "mailto:service@krussauto.com",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: "Working Hours",
      details: [
        "Monday - Saturday: 8:00 AM - 8:00 PM",
        "Sunday: Emergency Services Only",
      ],
      color: "from-emerald-500 to-teal-400",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#e6edf7]/20 pt-24 pb-20">
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#2cbbd4] rounded-full opacity-5 animate-float"></div>
        <div
          className="absolute top-1/2 -right-20 w-96 h-96 bg-[#0c4187] rounded-full opacity-5 animate-float-reverse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#2cbbd4] rounded-full opacity-5 animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Header Section */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-[#2cbbd4]/30 mb-8 shadow-lg">
              <span className="text-[#2cbbd4] text-sm font-semibold uppercase tracking-wider">
                Get In Touch
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0c4187] mb-6 leading-tight">
              Contact{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-[#2cbbd4] to-[#0c4187] bg-clip-text text-transparent">
                  Kruss Automotive
                </span>
                <div className="absolute -inset-4 bg-gradient-to-r from-[#2cbbd4] to-[#0c4187] rounded-2xl opacity-10 blur-xl -z-10"></div>
              </span>
            </h1>

            <p className="text-xl text-[#0c4187]/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Have questions or need assistance? Our team of automotive experts
              is here to help you with all your vehicle needs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#2cbbd4] to-[#0c4187] rounded-3xl opacity-5 group-hover:opacity-10 transition-opacity duration-500 blur-xl"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
                <h2 className="text-2xl font-bold text-[#0c4187] mb-6 flex items-center">
                  <FaComment className="text-[#2cbbd4] mr-3" />
                  Send Us a Message
                </h2>

                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center mb-6">
                    <FaCheckCircle className="text-green-500 text-4xl mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-green-800 mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-green-600">
                      Thank you for contacting us. We'll get back to you within
                      24 hours.
                    </p>
                  </div>
                ) : null}

                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaUser className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2cbbd4] focus:border-transparent transition-all duration-300"
                      placeholder="Your Full Name"
                      required
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaEnvelope className="text-gray-400" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2cbbd4] focus:border-transparent transition-all duration-300"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaPhone className="text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2cbbd4] focus:border-transparent transition-all duration-300"
                      placeholder="+234 9025301696"
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <FaComment className="text-gray-400" />
                    </div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2cbbd4] focus:border-transparent transition-all duration-300 min-h-[120px]"
                      placeholder="How can we help you?"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-4 px-6 bg-gradient-to-r from-[#2cbbd4] to-[#0c4187] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
                  >
                    {isLoading ? (
                      <div className="flex items-center">
                        <div className="w-5 h-5 border-t-2 border-r-2 border-white rounded-full animate-spin mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <FaPaperPlane className="ml-2" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg hover:shadow-xl transition-all duration-300 group`}
                >
                  <div className="flex items-start">
                    <div className="bg-white/20 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">
                        {item.title}
                      </h3>
                      {item.details.map((detail, i) => (
                        <p key={i} className="opacity-90 mb-1 last:mb-0">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                  {item.link && (
                    <a
                      href={item.link}
                      className="inline-block mt-4 text-sm font-medium bg-white/20 hover:bg-white/30 py-2 px-4 rounded-lg transition-colors duration-300"
                    >
                      Get Directions
                    </a>
                  )}
                </div>
              ))}

              <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Quick Chat</h3>
                    <p className="opacity-90">
                      Message us directly on WhatsApp for instant support
                    </p>
                  </div>
                  <div className="bg-white/20 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <FaWhatsapp className="text-2xl" />
                  </div>
                </div>
                <a
                  href="https://wa.me/2349025301696"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-4 py-2 px-6 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
                >
                  <FaWhatsapp className="mr-2" />
                  Start Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="h-96 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.712686090851!2d3.3867227157698926!3d6.603041595242445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93a6a1c9b3a5%3A0x5dc7e5e5b5a5b5a5!2sKetu-Ikosi%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1620000000000!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
                title="Kruss Automotive Location"
              ></iframe>
            </div>
            <div className="p-6 bg-gradient-to-r from-[#0c4187] to-[#2cbbd4] text-white">
              <h3 className="text-xl font-semibold mb-2">Visit Our Workshop</h3>
              <p className="opacity-90">
                We're conveniently located in Ikosi Ketu with ample parking
                space for your vehicle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ/Quick Help Section */}
      <section className="relative py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0c4187] mb-4">
              Quick Help
            </h2>
            <p className="text-lg text-[#0c4187]/70 max-w-2xl mx-auto">
              Find answers to common questions about our services and booking
              process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                question: "How quickly can I get an appointment?",
                answer:
                  "We typically offer same-day or next-day appointments for most services.",
              },
              {
                question: "Do you offer emergency services?",
                answer:
                  "Yes, we provide emergency repair services even on Sundays for critical issues.",
              },
              {
                question: "What payment methods do you accept?",
                answer:
                  "We accept cash, bank transfers, and major credit cards for your convenience.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <h3 className="text-lg font-semibold text-[#0c4187] mb-3">
                  {item.question}
                </h3>
                <p className="text-[#0c4187]/70">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(5deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }
        @keyframes float-reverse {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(10px) rotate(-5deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-reverse {
          animation: float-reverse 10s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
