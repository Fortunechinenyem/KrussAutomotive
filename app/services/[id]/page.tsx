import { services } from "@/lib/constants";
import { notFound } from "next/navigation";
import {
  FaTools,
  FaCarBattery,
  FaOilCan,
  FaCar,
  FaCarCrash,
} from "react-icons/fa";
import CTAButton from "@/components/common/CTAButton";

export async function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }));
}

type Params = {
  id: string;
};

export default function ServiceDetail({ params }: { params: Params }) {
  const service = services.find((s) => s.id === params.id);

  if (!service) {
    notFound();
  }

  const serviceDetails = {
    preventive: {
      features: [
        "Regular oil and filter changes",
        "Brake system inspection",
        "Tire rotation and pressure check",
        "Fluid level checks and top-ups",
        "Battery performance testing",
        "Comprehensive 50-point inspection",
      ],
      benefits: [
        "Extends vehicle lifespan",
        "Prevents costly breakdowns",
        "Maintains optimal performance",
        "Improves fuel efficiency",
        "Preserves manufacturer warranty",
      ],
      icon: <FaTools className="text-[#2cbbd4] text-4xl mb-4" />,
    },
    diagnostics: {
      features: [
        "Advanced OBD-II scanning",
        "Computerized engine analysis",
        "Electrical system diagnostics",
        "Transmission diagnostics",
        "ABS and airbag system checks",
        "Real-time performance monitoring",
      ],
      benefits: [
        "Accurate problem identification",
        "Faster repair turnaround",
        "Prevents unnecessary part replacement",
        "Comprehensive system health report",
        "Saves time and money",
      ],
      icon: <FaCarBattery className="text-[#2cbbd4] text-4xl mb-4" />,
    },
    oil: {
      features: [
        "Full synthetic oil changes",
        "High-performance oil filters",
        "Oil system flush available",
        "Eco-friendly disposal",
        "Multi-point inspection included",
        "Oil life monitoring reset",
      ],
      benefits: [
        "Cleaner engine operation",
        "Reduced engine wear",
        "Improved fuel economy",
        "Extended engine life",
        "Professional-grade products",
      ],
      icon: <FaOilCan className="text-[#2cbbd4] text-4xl mb-4" />,
    },
    cng: {
      features: [
        "Government-approved CNG kits",
        "Professional installation",
        "CNG system maintenance",
        "Safety inspections",
        "Performance tuning",
        "Documentation assistance",
      ],
      benefits: [
        "50-60% fuel cost savings",
        "90% reduction in emissions",
        "Increased engine lifespan",
        "Dual fuel system flexibility",
        "Certified by RTO",
      ],
      icon: <FaCar className="text-[#2cbbd4] text-4xl mb-4" />,
    },
    body: {
      features: [
        "Collision repair",
        "Paint matching technology",
        "Dent removal",
        "Rust treatment",
        "Frame straightening",
        "Insurance claim assistance",
      ],
      benefits: [
        "Factory-quality repairs",
        "Color-match guarantee",
        "Advanced water-based paints",
        "Dust-free painting environment",
        "Lifetime warranty on repairs",
      ],
      icon: <FaCarCrash className="text-[#2cbbd4] text-4xl mb-4" />,
    },
    inspection: {
      features: [
        "150-point comprehensive check",
        "Engine performance analysis",
        "Undercarriage inspection",
        "Test drive evaluation",
        "Vehicle history verification",
        "Detailed inspection report",
      ],
      benefits: [
        "Peace of mind before purchase",
        "Identifies hidden problems",
        "Negotiation leverage on price",
        "Safety assurance",
        "Future maintenance planning",
      ],
      icon: <FaCar className="text-[#2cbbd4] text-4xl mb-4" />,
    },
  };

  const detail = serviceDetails[service.id as keyof typeof serviceDetails];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center">{detail.icon}</div>
          <h1 className="text-4xl font-bold text-[#0c4187] mb-4">
            {service.title}
          </h1>
          <p className="text-lg text-[#0c4187]/80 max-w-3xl mx-auto">
            {service.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-[#e6edf7] p-8 rounded-xl">
            <h2 className="text-2xl font-semibold text-[#0c4187] mb-6">
              Service Features
            </h2>
            <ul className="space-y-4">
              {detail.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-[#2cbbd4] text-white rounded-full p-1 mr-3 mt-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-[#0c4187]">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#f5f7e6] p-8 rounded-xl">
            <h2 className="text-2xl font-semibold text-[#0c4187] mb-6">
              Key Benefits
            </h2>
            <ul className="space-y-4">
              {detail.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-[#7f870c] text-white rounded-full p-1 mr-3 mt-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-[#0c4187]">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-[#0c4187] text-white p-8 rounded-xl mb-16">
          <h2 className="text-2xl font-semibold mb-6">Pricing Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-2">Basic Package</h3>
              <p className="text-[#2cbbd4] font-bold text-2xl mb-4">
                N30,000 - N50,000
              </p>
              <ul className="space-y-2 text-white/90">
                <li>Standard service</li>
                <li>Genuine parts</li>
                <li>6-month warranty</li>
              </ul>
            </div>
            <div className="bg-white/10 p-6 rounded-lg border-2 border-[#2cbbd4]">
              <h3 className="text-xl font-medium mb-2">Premium Package</h3>
              <p className="text-[#2cbbd4] font-bold text-2xl mb-4">
                N70,000 - N100,000
              </p>
              <ul className="space-y-2 text-white/90">
                <li>Comprehensive service</li>
                <li>High-performance parts</li>
                <li>1-year warranty</li>
                <li>Free follow-up check</li>
              </ul>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-2">Custom Solution</h3>
              <p className="text-[#2cbbd4] font-bold text-2xl mb-4">
                Contact Us
              </p>
              <ul className="space-y-2 text-white/90">
                <li>Tailored to your needs</li>
                <li>Vehicle-specific approach</li>
                <li>Flexible scheduling</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#0c4187] mb-6">
            Ready for {service.title}?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Schedule your service today and experience the Kruss Automotive
            difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/book-appointment" variant="primary">
              Book Now
            </CTAButton>
            <CTAButton href="/contact" variant="secondary">
              Ask a Question
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
}
