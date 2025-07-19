import Link from "next/link";
import { FaCalendarAlt, FaCar, FaUser, FaPhone } from "react-icons/fa";

export default function BookAppointment() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#0c4187] mb-4">
            Book Your Service
          </h1>
          <p className="text-lg text-[#0c4187]/80 max-w-2xl mx-auto">
            Schedule your vehicle service with our expert technicians. We'll get
            back to you within 24 hours to confirm.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-[#f5f7e6] p-8 rounded-xl shadow-md">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <label className="block text-[#0c4187] mb-2">Full Name</label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-3 text-[#7f870c]" />
                  <input
                    type="text"
                    className="w-full pl-10 pr-4 py-2 border border-[#7f870c]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2cbbd4]"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-[#0c4187] mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <FaPhone className="absolute left-3 top-3 text-[#7f870c]" />
                  <input
                    type="tel"
                    className="w-full pl-10 pr-4 py-2 border border-[#7f870c]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2cbbd4]"
                    placeholder="+234 9025301696"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-[#0c4187] mb-2">
                  Vehicle Type
                </label>
                <div className="relative">
                  <FaCar className="absolute left-3 top-3 text-[#7f870c]" />
                  <select className="w-full pl-10 pr-4 py-2 border border-[#7f870c]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2cbbd4]">
                    <option>Select Vehicle</option>
                    <option>Hatchback</option>
                    <option>Sedan</option>
                    <option>SUV</option>
                    <option>Commercial Vehicle</option>
                  </select>
                </div>
              </div>

              <div className="relative">
                <label className="block text-[#0c4187] mb-2">
                  Preferred Date
                </label>
                <div className="relative">
                  <FaCalendarAlt className="absolute left-3 top-3 text-[#7f870c]" />
                  <input
                    type="date"
                    className="w-full pl-10 pr-4 py-2 border border-[#7f870c]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2cbbd4]"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-[#0c4187] mb-2">
                Service Required
              </label>
              <textarea
                className="w-full px-4 py-2 border border-[#7f870c]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2cbbd4]"
                rows={4}
                placeholder="Describe the service you need..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 bg-[#2cbbd4] hover:bg-[#2395a9] text-white font-medium rounded-lg transition-colors"
            >
              Request Appointment
            </button>
          </form>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-[#0c4187] mb-4">
            Need immediate assistance?
          </h3>
          <p className="text-lg mb-6">
            Call us at{" "}
            <Link
              href="tel:+911234567890"
              className="text-[#2cbbd4] font-medium"
            >
              +234 9025301696
            </Link>{" "}
            or
            <Link
              href="mailto:service@krussauto.com"
              className="text-[#2cbbd4] font-medium ml-2"
            >
              service@krussauto.com
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
