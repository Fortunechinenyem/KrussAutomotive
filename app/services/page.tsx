import {
  FaCar,
  FaTools,
  FaOilCan,
  FaCarBattery,
  FaCarCrash,
} from "react-icons/fa";
import ServiceCard from "@/components/services/ServiceCard";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      id: "preventive",
      title: "Preventive Maintenance",
      description:
        "Regular check-ups to keep your vehicle running smoothly and prevent costly repairs.",
      icon: FaTools,
      cng: false,
    },
    {
      id: "diagnostics",
      title: "Advanced Diagnostics",
      description:
        "State-of-the-art diagnostic tools to accurately identify and fix vehicle issues.",
      icon: FaCarBattery,
      cng: false,
    },
    {
      id: "oil",
      title: "Oil & Filter Change",
      description:
        "High-quality oil and filter replacements to keep your engine running clean.",
      icon: FaOilCan,
      cng: false,
    },
    {
      id: "cng",
      title: "CNG Services",
      description:
        "Professional CNG installation, maintenance and repair services.",
      icon: FaCar,
      cng: true,
    },
    {
      id: "body",
      title: "Body Repair",
      description:
        "Expert collision repair and paint services to restore your vehicle.",
      icon: FaCarCrash,
      cng: false,
    },
    {
      id: "inspection",
      title: "Pre-Purchase Inspection",
      description: "Comprehensive vehicle inspection before purchase.",
      icon: FaCar,
      cng: false,
    },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#0c4187] mb-4">
            Our Automotive Services
          </h1>
          <p className="text-lg text-[#0c4187]/80 max-w-3xl mx-auto">
            Comprehensive solutions for all your vehicle needs. From routine
            maintenance to specialized repairs, our certified technicians
            deliver exceptional service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#0c4187] to-[#2cbbd4] p-8 rounded-xl text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-4">
                Not Sure What Service You Need?
              </h2>
              <p className="mb-6">
                Our experts can assess your vehicle and recommend the right
                services to keep it running at its best.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-block bg-white hover:bg-gray-100 text-[#0c4187] font-medium px-8 py-3 rounded-lg transition-colors"
            >
              Get a Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
