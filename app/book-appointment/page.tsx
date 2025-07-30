"use client";
import { useState } from "react";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaCar,
  FaUser,
  FaPhone,
  FaTools,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

export default function BookAppointment() {
  const [selectedService, setSelectedService] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const services = [
    "Preventive Maintenance",
    "CNG Conversion",
    "Diagnostics",
    "Oil Change",
    "Body Repair",
    "Auto-Errand Service",
    "Vehicle Delivery",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center max-w-2xl px-4">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
            <FaCheckCircle className="h-6 w-6 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-[#0c4187] mb-4">
            Appointment Requested!
          </h1>
          <p className="text-lg text-[#0c4187]/80 mb-8">
            Thank you for booking with Kruss Automotive. We've received your
            request and will contact you within 24 hours to confirm your
            appointment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#2cbbd4] hover:bg-[#2395a9] text-white font-medium rounded-lg transition-colors"
            >
              Explore Services
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 border border-[#0c4187] text-[#0c4187] font-medium rounded-lg hover:bg-[#e6edf7] transition-colors"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0c4187] mb-4">
            Schedule Your Service
          </h1>
          <p className="text-xl text-[#0c4187]/80 max-w-3xl mx-auto">
            Book an appointment with our expert technicians. We'll confirm your
            slot within 24 hours.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-[#0c4187] mb-6">
              Appointment Details
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="relative">
                  <label className="block text-sm font-medium text-[#0c4187] mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-3 top-3 text-[#7f870c]" />
                    <input
                      type="text"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2cbbd4] focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-[#0c4187] mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <FaPhone className="absolute left-3 top-3 text-[#7f870c]" />
                    <input
                      type="tel"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2cbbd4] focus:border-transparent"
                      placeholder="+234 902 530 1696"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-[#0c4187] mb-2">
                    Vehicle Type *
                  </label>
                  <div className="relative">
                    <FaCar className="absolute left-3 top-3 text-[#7f870c]" />
                    <select
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2cbbd4] focus:border-transparent appearance-none"
                    >
                      <option value="">Select Vehicle</option>
                      <option>Hatchback</option>
                      <option>Sedan</option>
                      <option>SUV</option>
                      <option>Commercial Vehicle</option>
                    </select>
                    <FiChevronDown className="absolute right-3 top-3 text-gray-400" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <label className="block text-sm font-medium text-[#0c4187] mb-2">
                      Preferred Date *
                    </label>
                    <div className="relative">
                      <FaCalendarAlt className="absolute left-3 top-3 text-[#7f870c]" />
                      <input
                        type="date"
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2cbbd4] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium text-[#0c4187] mb-2">
                      Preferred Time *
                    </label>
                    <div className="relative">
                      <FaClock className="absolute left-3 top-3 text-[#7f870c]" />
                      <select
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2cbbd4] focus:border-transparent appearance-none"
                      >
                        <option value="">Select Time</option>
                        <option>Morning (8am - 12pm)</option>
                        <option>Afternoon (12pm - 4pm)</option>
                        <option>Evening (4pm - 7pm)</option>
                      </select>
                      <FiChevronDown className="absolute right-3 top-3 text-gray-400" />
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-[#0c4187] mb-2">
                    Service Needed *
                  </label>
                  <div className="relative">
                    <FaTools className="absolute left-3 top-3 text-[#7f870c]" />
                    <select
                      required
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2cbbd4] focus:border-transparent appearance-none"
                    >
                      <option value="">Select Service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    <FiChevronDown className="absolute right-3 top-3 text-gray-400" />
                  </div>
                </div>

                {selectedService && (
                  <div>
                    <label className="block text-sm font-medium text-[#0c4187] mb-2">
                      Additional Details
                    </label>
                    <textarea
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2cbbd4] focus:border-transparent"
                      rows={3}
                      placeholder="Any specific issues or requests?"
                    ></textarea>
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 bg-[#2cbbd4] hover:bg-[#2395a9] text-white font-medium rounded-lg transition-colors flex items-center justify-center ${
                  isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  "Request Appointment"
                )}
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-[#e6edf7] rounded-xl p-6">
              <h3 className="text-xl font-semibold text-[#0c4187] mb-4">
                Why Choose Us
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FaCheckCircle className="text-[#7f870c] mt-1 mr-3 flex-shrink-0" />
                  <span className="text-[#0c4187]">
                    ASE-certified technicians
                  </span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-[#7f870c] mt-1 mr-3 flex-shrink-0" />
                  <span className="text-[#0c4187]">
                    12-month service warranty
                  </span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-[#7f870c] mt-1 mr-3 flex-shrink-0" />
                  <span className="text-[#0c4187]">
                    Genuine parts guarantee
                  </span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-[#7f870c] mt-1 mr-3 flex-shrink-0" />
                  <span className="text-[#0c4187]">
                    Free post-service inspection
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-[#f5f7e6] rounded-xl p-6">
              <h3 className="text-xl font-semibold text-[#0c4187] mb-4">
                Service Hours
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-[#0c4187]">Monday - Friday</span>
                  <span className="font-medium">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#0c4187]">Saturday</span>
                  <span className="font-medium">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#0c4187]">Sunday</span>
                  <span className="font-medium">Emergency Only</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-[#0c4187] mb-4">
                Need Immediate Help?
              </h3>
              <p className="text-[#0c4187] mb-4">
                For urgent inquiries or emergency services, please call:
              </p>
              <div className="flex items-center">
                <FaPhone className="text-[#7f870c] mr-3" />
                <Link
                  href="tel:+2349025301696"
                  className="text-xl font-medium text-[#2cbbd4] hover:underline"
                >
                  +234 902 530 1696
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
