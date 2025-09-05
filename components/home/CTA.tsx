import Image from "next/image";
import CTAButton from "../common/CTAButton";
import { FaShieldAlt, FaTools, FaStar, FaAward } from "react-icons/fa";

const CTA = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background with gradient and subtle pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c4187] via-[#1a5bb8] to-[#2cbbd4] opacity-95"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#2cbbd4] rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute inset-0 bg-[url('/images/carbon-fiber-pattern.jpg')] opacity-[0.03]"></div>
      </div>

      <div className="relative container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content Section */}
          <div className="lg:w-1/2 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
              <span className="text-white text-sm font-medium uppercase tracking-wider">
                Premium Automotive Care
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Experience the{" "}
              <span className="relative">
                <span className="text-[#2cbbd4] relative z-10">Difference</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-white/20 -rotate-2 -z-0"></span>
              </span>{" "}
              Today
            </h2>

            <p className="text-xl text-white/90 mb-10 max-w-lg leading-relaxed">
              Join thousands of satisfied customers who trust Kruss Automotive
              for exceptional vehicle care. From precision maintenance to
              advanced CNG solutions, we deliver excellence at every turn.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              {[
                {
                  icon: <FaStar className="text-2xl text-[#2cbbd4]" />,
                  value: "100 +",
                  label: "Happy Clients",
                },
                {
                  icon: <FaTools className="text-2xl text-[#2cbbd4]" />,
                  value: "7+",
                  label: "Years Experience",
                },
                {
                  icon: <FaShieldAlt className="text-2xl text-[#2cbbd4]" />,
                  value: "98%",
                  label: "Satisfaction Rate",
                },
                {
                  icon: <FaAward className="text-2xl text-[#2cbbd4]" />,
                  value: "24/7",
                  label: "Support",
                },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start mb-2">
                    {stat.icon}
                    <span className="text-2xl font-bold text-white ml-2">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-white/70 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <CTAButton
                href="/book-appointment"
                variant="primary"
                className="px-8 py-4 text-lg bg-white text-[#0c4187] hover:bg-gray-100 hover:scale-105 transform transition-all duration-300 shadow-2xl shadow-[#0c4187]/30"
              >
                Book Appointment Now
              </CTAButton>
              <CTAButton
                href="/contact"
                variant="outline"
                className="px-8 py-4 text-lg border-2 border-white text-white hover:bg-white hover:text-[#0c4187] transition-all duration-300"
              >
                Get a Quote
              </CTAButton>
            </div>
          </div>

          {/* Image/Illustration Section - FIXED */}
          <div className="lg:w-1/2 flex justify-center relative">
            <div className="relative w-full max-w-md">
              {/* Main illustration container - Fixed sizing */}
              <div className="relative z-10 flex items-center justify-center">
                <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
                  <Image
                    src="/images/c1.jpg"
                    alt="Professional car service"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                    sizes="(max-width: 768px) 320px, 384px"
                  />
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#2cbbd4] rounded-full opacity-20 animate-float"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-white rounded-full opacity-10 animate-float-reverse"></div>

              {/* Decorative rings - Adjusted positioning */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-96 h-96 border-4 border-white/10 rounded-full animate-pulse-slow"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-4 border-white/5 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-20 pt-12 border-t border-white/20">
          <p className="text-white/80 text-center mb-10 text-lg">
            Trusted by automotive enthusiasts and industry leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className="relative h-12 w-32 opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-110 grayscale hover:grayscale-0"
              >
                <div className="w-full h-full bg-white/10 rounded-lg backdrop-blur-sm flex items-center justify-center p-3">
                  <span className="text-white font-bold text-sm">
                    BRAND {item}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom animations */}
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
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.15;
            transform: scale(1.05);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-reverse {
          animation: float-reverse 8s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default CTA;
