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
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0c4187] mb-6 leading-tight">
              Professional <span className="text-[#2cbbd4]">CNG Services</span>
            </h1>
            <p className="text-lg text-[#0c4187]/80 mb-8 max-w-2xl">
              Transform your vehicle with our certified CNG conversion and
              maintenance services. Enjoy significant fuel savings while
              reducing your environmental impact.
            </p>
            <Link
              href="/book-appointment"
              className="inline-flex items-center px-8 py-3 bg-[#2cbbd4] hover:bg-[#2395a9] text-white font-medium rounded-lg transition-all duration-300 shadow-lg"
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
          <div className="lg:w-1/2">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/cng-pic.jpg"
                alt="Professional CNG Conversion"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#f5f7e6] p-8 rounded-xl hover:shadow-md transition-all duration-300"
            >
              <div className="flex justify-center mb-5">
                <div className="bg-[#7f870c] p-4 rounded-full text-white">
                  <feature.icon className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#0c4187] mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-[#0c4187]/80 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-[#e6edf7] p-12 rounded-xl mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c4187] mb-4">
              Our CNG Conversion Process
            </h2>
            <p className="text-lg text-[#0c4187]/80 max-w-2xl mx-auto">
              A seamless 6-step process to transform your vehicle safely and
              efficiently
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conversionSteps.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className="bg-[#2cbbd4] text-white w-10 h-10 rounded-full flex items-center justify-center mr-5 flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#0c4187] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[#0c4187]/80">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#0c4187] rounded-xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for CNG Conversion?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a free consultation with our CNG experts to discuss the best
            solution for your vehicle.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/book-appointment"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#2cbbd4] hover:bg-[#2395a9] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg"
            >
              Book CNG Consultation
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-300"
            >
              Contact Our Experts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
