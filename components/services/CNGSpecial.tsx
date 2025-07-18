import Link from "next/link";
import { FaGasPump, FaShieldAlt, FaMoneyBillWave } from "react-icons/fa";

const CNGSpecial = () => {
  const benefits = [
    {
      icon: FaMoneyBillWave,
      title: "Cost Savings",
      description: "Save up to 50% on fuel costs compared to petrol/diesel",
    },
    {
      icon: FaShieldAlt,
      title: "Eco-Friendly",
      description: "Reduces harmful emissions by up to 90%",
    },
    {
      icon: FaGasPump,
      title: "Govt Approved",
      description: "Certified installations with all documentation",
    },
  ];

  return (
    <div className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-8 text-white">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 mb-6 md:mb-0">
          <h3 className="text-2xl font-bold mb-4">Specialized CNG Services</h3>
          <p className="mb-6">
            Get expert CNG installation, maintenance, and repair services with
            our certified technicians. We provide end-to-end solutions for all
            your CNG conversion needs.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-white/20 p-2 rounded-full mr-3">
                  <benefit.icon className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold">{benefit.title}</h4>
                  <p className="text-sm text-white/90">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/cng"
            className="inline-flex items-center px-6 py-3 bg-white text-orange-600 rounded-full font-medium hover:bg-gray-100 transition-colors"
          >
            Explore CNG Services
          </Link>
        </div>
        <div className="md:w-1/3 flex justify-center">
          <div className="relative w-48 h-48">
            <img
              src="/images/cng-icon.png"
              alt="CNG Services"
              className="object-contain h-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CNGSpecial;
