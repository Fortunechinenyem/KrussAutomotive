import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#0c4187] mb-4">
            Contact Kruss Automotive
          </h1>
          <p className="text-lg text-[#0c4187]/80 max-w-2xl mx-auto">
            Have questions or need assistance? Reach out to our team - we're
            here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-[#f5f7e6] p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-[#0c4187] mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              <div>
                <label className="block text-[#0c4187] mb-2">Your Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-[#7f870c]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2cbbd4]"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-[#0c4187] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-[#7f870c]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2cbbd4]"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-[#0c4187] mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-[#7f870c]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2cbbd4]"
                  placeholder="+234 9025301696"
                />
              </div>
              <div>
                <label className="block text-[#0c4187] mb-2">
                  Your Message
                </label>
                <textarea
                  className="w-full px-4 py-2 border border-[#7f870c]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2cbbd4]"
                  rows={4}
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-[#2cbbd4] hover:bg-[#2395a9] text-white font-medium rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <div className="bg-[#e6edf7] p-8 rounded-xl shadow-md mb-8">
              <h2 className="text-2xl font-semibold text-[#0c4187] mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <FaMapMarkerAlt
                    className="text-[#7f870c] mt-1 mr-4"
                    size={20}
                  />
                  <div>
                    <h3 className="text-lg font-medium text-[#0c4187] mb-1">
                      Our Location
                    </h3>
                    <p className="text-[#0c4187]/80">
                      123 Automotive Street, Tech City, TC 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaPhone className="text-[#7f870c] mt-1 mr-4" size={20} />
                  <div>
                    <h3 className="text-lg font-medium text-[#0c4187] mb-1">
                      Phone Numbers
                    </h3>
                    <p className="text-[#0c4187]/80">
                      +234 9025301696 (Service)
                    </p>
                    <p className="text-[#0c4187]/80">
                      +234 9025301696 (Support)
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaEnvelope className="text-[#7f870c] mt-1 mr-4" size={20} />
                  <div>
                    <h3 className="text-lg font-medium text-[#0c4187] mb-1">
                      Email Address
                    </h3>
                    <p className="text-[#0c4187]/80">service@krussauto.com</p>
                    <p className="text-[#0c4187]/80">support@krussauto.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaClock className="text-[#7f870c] mt-1 mr-4" size={20} />
                  <div>
                    <h3 className="text-lg font-medium text-[#0c4187] mb-1">
                      Working Hours
                    </h3>
                    <p className="text-[#0c4187]/80">
                      Monday - Saturday: 8:00 AM - 8:00 PM
                    </p>
                    <p className="text-[#0c4187]/80">
                      Sunday: Emergency Services Only
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 h-64 rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.80123456789!2d77.5945627!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnNDAuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
