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

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#0c4187] mb-4">
            Professional CNG Services
          </h1>
          <p className="text-lg text-[#0c4187]/80 max-w-3xl mx-auto">
            Transform your vehicle with our certified CNG conversion and
            maintenance services. Enjoy significant fuel savings while reducing
            your environmental impact.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#f5f7e6] p-6 rounded-xl text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-[#7f870c] p-4 rounded-full text-white">
                  <feature.icon className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#0c4187] mb-2">
                {feature.title}
              </h3>
              <p className="text-[#0c4187]/80">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Conversion Process */}
        <div className="bg-[#e6edf7] p-8 rounded-xl mb-16">
          <h2 className="text-3xl font-bold text-[#0c4187] mb-6 text-center">
            Our CNG Conversion Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
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
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="bg-[#2cbbd4] text-white w-8 h-8 rounded-full flex items-center justify-center mr-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-[#0c4187]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[#0c4187]/80 pl-12">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#0c4187] mb-6">
            Ready for CNG Conversion?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Get a free consultation with our CNG experts to discuss the best
            solution for your vehicle.
          </p>
          <Link
            href="/book-appointment?service=cng"
            className="inline-block bg-[#2cbbd4] hover:bg-[#2395a9] text-white font-medium px-8 py-3 rounded-lg transition-colors"
          >
            Book CNG Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
