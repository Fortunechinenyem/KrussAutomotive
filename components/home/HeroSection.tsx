import CTAButton from "../common/CTAButton";
import { FaPlayCircle, FaShieldAlt, FaTools, FaClock } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 animate-zoom-in-out"
          style={{
            backgroundImage: "url('/images/hero.jpg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c4187]/95 via-[#0c4187]/85 to-[#0c4187]/70"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.jpg')] opacity-10"></div>
      </div>

      {/* Animated elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#2cbbd4] rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#0c4187] rounded-full opacity-5 animate-float"></div>

      <div className="relative z-10 container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12 py-28">
        {/* Text content */}
        <div className="text-center lg:text-left max-w-2xl">
          <div className="inline-flex items-center px-5 py-2 rounded-full mb-8 backdrop-blur-sm bg-white/10 border border-[#2cbbd4]/30">
            <span className="text-[#2cbbd4] text-sm md:text-base font-medium tracking-wide">
              Reinventing vehicle ownership & maintenance
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Premium Automotive{" "}
            <span className="relative">
              <span className="text-[#2cbbd4] relative z-10">Care</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-[#2cbbd4]/20 -rotate-2 -z-0"></span>
            </span>{" "}
            Redefined
          </h1>

          {/* Description */}
          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Experience the future of automotive services with our
            technology-driven approach. From diagnostics to maintenance and
            repairs, we deliver exceptional care for your vehicle.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-16">
            <CTAButton
              href="/services"
              variant="primary"
              className="group relative overflow-hidden"
            >
              <span className="relative z-10">Explore Services</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#2395a9] to-[#1a7687] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </CTAButton>
            <CTAButton
              href="/book-appointment"
              variant="secondary"
              className="group flex items-center justify-center gap-2"
            >
              <FaPlayCircle className="text-lg" />
              <span>Watch Introduction</span>
            </CTAButton>
          </div>

          {/* Stats/Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-8">
            {[
              {
                icon: <FaShieldAlt className="text-2xl text-[#2cbbd4]" />,
                text: "12-Month Warranty",
              },
              {
                icon: <FaTools className="text-2xl text-[#2cbbd4]" />,
                text: "Expert Technicians",
              },
              {
                icon: <FaClock className="text-2xl text-[#2cbbd4]" />,
                text: "Quick Service",
              },
              { text: "24/7 Support", highlight: true },
            ].map((item, index) => (
              <div key={index} className="text-center lg:text-left">
                <div className="flex flex-col items-center lg:items-start">
                  {item.icon && <div className="mb-2">{item.icon}</div>}
                  <p
                    className={`text-sm font-medium ${
                      item.highlight ? "text-[#2cbbd4]" : "text-white/80"
                    }`}
                  >
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual element - Could be replaced with an image or 3D model */}
        <div className="relative mt-10 lg:mt-0">
          <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden transform rotate-3">
            <div className="absolute inset-0 bg-gradient-to-br from-[#2cbbd4]/20 to-[#0c4187]/30 backdrop-blur-md border-2 border-white/10 rounded-2xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 bg-white/5 rounded-full border-2 border-[#2cbbd4]/30 animate-ping-slow"></div>
            </div>
          </div>

          {/* Floating elements */}
          <div className="absolute -top-5 -left-5 w-24 h-24 bg-[#2cbbd4] rounded-full opacity-20 animate-float-reverse"></div>
          <div className="absolute -bottom-5 -right-5 w-16 h-16 bg-white rounded-full opacity-10 animate-pulse"></div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#2cbbd4] rounded-full mt-2"></div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes zoom-in-out {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
          100% {
            transform: translateY(0) rotate(0deg);
          }
        }
        @keyframes float-reverse {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(15px) rotate(-5deg);
          }
          100% {
            transform: translateY(0) rotate(0deg);
          }
        }
        @keyframes ping-slow {
          0% {
            transform: scale(0.8);
            opacity: 0.8;
          }
          75%,
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.15;
          }
        }
        .animate-zoom-in-out {
          animation: zoom-in-out 20s ease-in-out infinite;
        }
        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
        .animate-float-reverse {
          animation: float-reverse 12s ease-in-out infinite;
        }
        .animate-ping-slow {
          animation: ping-slow 4s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
