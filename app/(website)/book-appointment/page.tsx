"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaCar,
  FaUser,
  FaPhone,
  FaTools,
  FaClock,
  FaCheckCircle,
  FaWhatsapp,
  FaArrowRight,
  FaShieldAlt,
  FaAward,
  FaCog,
  FaHeadset,
} from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

export default function BookAppointment() {
  const [selectedService, setSelectedService] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const services = [
    "Preventive Maintenance",
    "CNG Conversion",
    "Advanced Diagnostics",
    "Oil & Filter Change",
    "Body Repair",
    "Pre-Purchase Inspection",
    "Auto-Errand Service",
    "Vehicle Delivery Service",
  ];

  const vehicleTypes = [
    "Hatchback",
    "Sedan",
    "SUV",
    "Pickup Truck",
    "Commercial Vehicle",
    "Luxury Vehicle",
  ];

  const timeSlots = [
    "Morning (8:00 AM - 10:00 AM)",
    "Late Morning (10:00 AM - 12:00 PM)",
    "Afternoon (12:00 PM - 2:00 PM)",
    "Late Afternoon (2:00 PM - 4:00 PM)",
    "Evening (4:00 PM - 6:00 PM)",
  ];

  useEffect(() => {
    // Reset form when component mounts
    return () => {
      setIsSubmitting(false);
      setIsSuccess(false);
      setCurrentStep(1);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const vehicleType = formData.get("vehicleType") as string;
    const date = formData.get("date") as string;
    const time = formData.get("time") as string;
    const service = formData.get("service") as string;
    const details = (formData.get("details") as string) || "None";

    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const message =
      `*New Appointment Request - Kruss Automotive*\n\n` +
      `*Name:* ${name}\n` +
      `*Phone:* ${phone}\n` +
      `*Vehicle Type:* ${vehicleType}\n` +
      `*Preferred Date:* ${formattedDate}\n` +
      `*Preferred Time:* ${time}\n` +
      `*Service Needed:* ${service}\n` +
      `*Additional Details:* ${details}\n\n` +
      `_This appointment request was sent via the Kruss Automotive website_`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "2349025301696";

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank"
    );

    // Set success state after a small delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-[#e6edf7]/20 flex items-center justify-center px-4">
        <div className="text-center max-w-2xl bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
            <FaCheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#0c4187] mb-4">
            Appointment Requested!
          </h1>
          <p className="text-lg text-[#0c4187]/80 mb-8">
            Thank you for choosing Kruss Automotive. We've received your request
            and will contact you within 24 hours to confirm your appointment
            details.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#2cbbd4] to-[#0c4187] text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg"
            >
              Explore Services
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#2cbbd4] text-[#2cbbd4] font-medium rounded-xl hover:bg-[#2cbbd4] hover:text-white transition-all duration-300"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#e6edf7]/20 pt-24 pb-20">
      {/* Animated Background Elements */}
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

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-[#2cbbd4]/30 mb-8 shadow-lg">
            <span className="text-[#2cbbd4] text-sm font-semibold uppercase tracking-wider">
              Premium Automotive Care
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0c4187] mb-6 leading-tight">
            Schedule Your{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[#2cbbd4] to-[#0c4187] bg-clip-text text-transparent">
                Premium Service
              </span>
              <div className="absolute -inset-4 bg-gradient-to-r from-[#2cbbd4] to-[#0c4187] rounded-2xl opacity-10 blur-xl -z-10"></div>
            </span>
          </h1>
          <p className="text-xl text-[#0c4187]/80 max-w-3xl mx-auto leading-relaxed">
            Book an appointment with our expert technicians for exceptional
            automotive care. We'll confirm your slot within 24 hours.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              {/* Form Header */}
              <div className="bg-gradient-to-r from-[#0c4187] to-[#2cbbd4] p-6 text-white">
                <h2 className="text-2xl font-bold flex items-center">
                  <FaCalendarAlt className="mr-3" />
                  Appointment Details
                </h2>
                <p className="opacity-90 mt-2">
                  Complete the form below to request your service appointment
                </p>
              </div>

              {/* Progress Steps */}
              <div className="px-6 pt-6">
                <div className="flex justify-between items-center mb-8">
                  {[1, 2, 3].map((step) => (
                    <div key={step} className="flex flex-col items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          currentStep >= step
                            ? "bg-[#2cbbd4] text-white"
                            : "bg-gray-200 text-gray-400"
                        } transition-all duration-300`}
                      >
                        {step}
                      </div>
                      <span className="text-sm mt-2 text-[#0c4187]">
                        Step {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form Content */}
              <div className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label className="block text-sm font-medium text-[#0c4187] mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#2cbbd4]" />
                        <input
                          type="text"
                          name="name"
                          required
                          className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2cbbd4] focus:border-transparent transition-all duration-300"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <label className="block text-sm font-medium text-[#0c4187] mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#2cbbd4]" />
                        <input
                          type="tel"
                          name="phone"
                          required
                          className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2cbbd4] focus:border-transparent transition-all duration-300"
                          placeholder="+234 902 530 1696"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label className="block text-sm font-medium text-[#0c4187] mb-2">
                        Vehicle Type *
                      </label>
                      <div className="relative">
                        <FaCar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#2cbbd4] z-10" />
                        <select
                          name="vehicleType"
                          required
                          className="w-full pl-12 pr-10 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2cbbd4] focus:border-transparent appearance-none transition-all duration-300"
                        >
                          <option value="">Select Vehicle Type</option>
                          {vehicleTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                        <FiChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      </div>
                    </div>

                    <div className="relative">
                      <label className="block text-sm font-medium text-[#0c4187] mb-2">
                        Service Needed *
                      </label>
                      <div className="relative">
                        <FaTools className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#2cbbd4] z-10" />
                        <select
                          name="service"
                          required
                          value={selectedService}
                          onChange={(e) => setSelectedService(e.target.value)}
                          className="w-full pl-12 pr-10 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2cbbd4] focus:border-transparent appearance-none transition-all duration-300"
                        >
                          <option value="">Select Service</option>
                          {services.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                        <FiChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label className="block text-sm font-medium text-[#0c4187] mb-2">
                        Preferred Date *
                      </label>
                      <div className="relative">
                        <FaCalendarAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#2cbbd4]" />
                        <input
                          type="date"
                          name="date"
                          required
                          min={new Date().toISOString().split("T")[0]}
                          className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2cbbd4] focus:border-transparent transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <label className="block text-sm font-medium text-[#0c4187] mb-2">
                        Preferred Time *
                      </label>
                      <div className="relative">
                        <FaClock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#2cbbd4] z-10" />
                        <select
                          name="time"
                          required
                          className="w-full pl-12 pr-10 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2cbbd4] focus:border-transparent appearance-none transition-all duration-300"
                        >
                          <option value="">Select Time Slot</option>
                          {timeSlots.map((slot) => (
                            <option key={slot} value={slot}>
                              {slot}
                            </option>
                          ))}
                        </select>
                        <FiChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      </div>
                    </div>
                  </div>

                  {selectedService && (
                    <div>
                      <label className="block text-sm font-medium text-[#0c4187] mb-2">
                        Additional Details
                      </label>
                      <textarea
                        name="details"
                        className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2cbbd4] focus:border-transparent transition-all duration-300"
                        rows={3}
                        placeholder="Any specific issues, symptoms, or special requests?"
                      ></textarea>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 bg-gradient-to-r from-[#2cbbd4] to-[#0c4187] text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl ${
                      isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-t-2 border-r-2 border-white rounded-full animate-spin mr-2"></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        <span>Request Appointment</span>
                        <FaArrowRight className="ml-2" />
                      </>
                    )}
                  </button>

                  <div className="text-center">
                    <p className="text-sm text-[#0c4187]/70">
                      By submitting this form, you agree to our{" "}
                      <Link
                        href="/privacy"
                        className="text-[#2cbbd4] hover:underline"
                      >
                        Privacy Policy
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/terms"
                        className="text-[#2cbbd4] hover:underline"
                      >
                        Terms of Service
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Why Choose Us Card */}
            <div className="bg-gradient-to-br from-[#0c4187] to-[#2cbbd4] rounded-3xl p-6 text-white shadow-xl">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <FaAward className="mr-2" />
                Why Choose Kruss
              </h3>
              <ul className="space-y-4">
                {[
                  "ASE-certified master technicians",
                  "12-month service warranty on all repairs",
                  "Genuine OEM and premium aftermarket parts",
                  "State-of-the-art diagnostic equipment",
                  "Free post-service vehicle inspection",
                  "Complimentary pickup and delivery service",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheckCircle className="text-white mt-1 mr-3 flex-shrink-0" />
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Hours Card */}
            <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
              <h3 className="text-xl font-semibold text-[#0c4187] mb-4 flex items-center">
                <FaClock className="mr-2 text-[#2cbbd4]" />
                Service Hours
              </h3>
              <div className="space-y-4">
                {[
                  { days: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
                  { days: "Saturday", hours: "9:00 AM - 5:00 PM" },
                  { days: "Sunday", hours: "Emergency Services Only" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <span className="text-[#0c4187] font-medium">
                      {item.days}
                    </span>
                    <span className="text-[#0c4187]/80">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Contact Card */}
            <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
              <h3 className="text-xl font-semibold text-[#0c4187] mb-4 flex items-center">
                <FaHeadset className="mr-2 text-[#2cbbd4]" />
                Need Immediate Help?
              </h3>
              <p className="text-[#0c4187] mb-4">
                For urgent inquiries or emergency roadside assistance:
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaPhone className="text-[#2cbbd4] mr-3" />
                  <Link
                    href="tel:+2349025301696"
                    className="text-lg font-medium text-[#0c4187] hover:text-[#2cbbd4] transition-colors"
                  >
                    +234 902 530 1696
                  </Link>
                </div>
                <a
                  href="https://wa.me/2349025301696"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full py-3 bg-[#25D366] text-white rounded-xl font-medium hover:bg-[#128C7E] transition-colors"
                >
                  <FaWhatsapp className="mr-2" />
                  WhatsApp Now
                </a>
              </div>
            </div>

            {/* Guarantee Card */}
            <div className="bg-gradient-to-br from-[#e6edf7] to-white rounded-3xl p-6 shadow-xl border border-gray-100">
              <h3 className="text-xl font-semibold text-[#0c4187] mb-4 flex items-center">
                <FaShieldAlt className="mr-2 text-[#2cbbd4]" />
                Our Guarantee
              </h3>
              <p className="text-[#0c4187]/80 mb-4">
                We stand behind our work with a comprehensive satisfaction
                guarantee.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-[#0c4187]">
                  <FaCheckCircle className="text-[#2cbbd4] mr-2" />
                  Quality certified technicians
                </li>
                <li className="flex items-center text-sm text-[#0c4187]">
                  <FaCheckCircle className="text-[#2cbbd4] mr-2" />
                  Transparent pricing with no hidden fees
                </li>
                <li className="flex items-center text-sm text-[#0c4187]">
                  <FaCheckCircle className="text-[#2cbbd4] mr-2" />
                  On-time service completion
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

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
