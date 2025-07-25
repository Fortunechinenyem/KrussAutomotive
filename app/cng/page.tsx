import Image from "next/image";
import Link from "next/link";
import {
  FaGasPump,
  FaTools,
  FaShieldAlt,
  FaMoneyBillWave,
} from "react-icons/fa";

export default function CNGServices() {
  const features = [
    {
      icon: FaMoneyBillWave,
      title: "Cost Effective",
      description: "Save up to 50% on fuel costs compared to petrol/diesel",
    },
    {
      icon: FaShieldAlt,
      title: "Eco Friendly",
      description: "Reduces harmful emissions by up to 90%",
    },
    {
      icon: FaTools,
      title: "Expert Installation",
      description: "Certified technicians with 10+ years experience",
    },
    {
      icon: FaGasPump,
      title: "Govt Approved",
      description: "All installations come with proper certification",
    },
  ];

  const conversionSteps = [
    {
      step: "1",
      title: "Vehicle Inspection",
      desc: "Complete diagnostic check",
    },
    {
      step: "2",
      title: "Kit Selection",
      desc: "Choose appropriate CNG kit",
    },
    {
      step: "3",
      title: "Professional Installation",
      desc: "By certified technicians",
    },
    {
      step: "4",
      title: "Testing & Certification",
      desc: "Rigorous safety checks",
    },
    {
      step: "5",
      title: "Documentation",
      desc: "All paperwork completed",
    },
    {
      step: "6",
      title: "Aftercare Support",
      desc: "24/7 assistance",
    },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Hero Section - Fixed for mobile */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center mb-16">
          <div className="w-full lg:w-1/2 order-2 lg:order-1 mt-8 lg:mt-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0c4187] mb-4 sm:mb-6 leading-tight">
              Professional <span className="text-[#2cbbd4]">CNG Services</span>
            </h1>
            <p className="text-base sm:text-lg text-[#0c4187]/80 mb-6 sm:mb-8 max-w-2xl">
              Transform your vehicle with our certified CNG conversion and
              maintenance services. Enjoy significant fuel savings while
              reducing your environmental impact.
            </p>
            <Link
              href="/book-appointment"
              className="inline-flex items-center px-6 sm:px-8 py-2 sm:py-3 bg-[#2cbbd4] hover:bg-[#2395a9] text-white font-medium rounded-lg transition-all duration-300 shadow-lg text-sm sm:text-base"
            >
              Book Free Consultation
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </Link>
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/cng-pic.jpg"
                alt="Professional CNG Conversion"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#f5f7e6] p-4 sm:p-6 md:p-8 rounded-xl hover:shadow-md transition-all duration-300"
            >
              <div className="flex justify-center mb-3 sm:mb-5">
                <div className="bg-[#7f870c] p-3 sm:p-4 rounded-full text-white">
                  <feature.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#0c4187] mb-2 sm:mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-[#0c4187]/80 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Conversion Process */}
        <div className="bg-[#e6edf7] p-6 sm:p-8 md:p-12 rounded-xl mb-12 sm:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0c4187] mb-3 sm:mb-4">
              Our CNG Conversion Process
            </h2>
            <p className="text-base sm:text-lg text-[#0c4187]/80 max-w-2xl mx-auto">
              A seamless 6-step process to transform your vehicle safely and
              efficiently
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {conversionSteps.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className="bg-[#2cbbd4] text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mr-3 sm:mr-5 flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-[#0c4187] mb-1 sm:mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#0c4187]/80">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#0c4187] rounded-xl p-6 sm:p-8 md:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Ready for CNG Conversion?
          </h2>
          <p className="text-base sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Get a free consultation with our CNG experts to discuss the best
            solution for your vehicle.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link
              href="/book-appointment"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-2 sm:py-3 md:py-4 bg-[#2cbbd4] hover:bg-[#2395a9] text-white font-medium sm:font-semibold rounded-lg transition-all duration-300 shadow-lg text-sm sm:text-base"
            >
              Book CNG Consultation
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-2 sm:py-3 md:py-4 border border-white text-white font-medium sm:font-semibold rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-300 text-sm sm:text-base"
            >
              Contact Our Experts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
