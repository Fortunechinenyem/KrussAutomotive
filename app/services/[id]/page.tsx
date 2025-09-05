"use client";
import { services } from "@/lib/constants";
import { notFound, useParams } from "next/navigation";
import {
  FaTools,
  FaCarBattery,
  FaOilCan,
  FaCar,
  FaCarCrash,
  FaRunning,
  FaShoppingBag,
  FaCheckCircle,
  FaClock,
  FaShieldAlt,
  FaCog,
  FaStar,
  FaArrowRight,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import CTAButton from "@/components/common/CTAButton";
import { ReactNode, useEffect, useRef, useState } from "react";
import Image from "next/image";

interface ServiceDetail {
  features: string[];
  benefits: string[];
  icon: ReactNode;
  image: string;
  process: string[];
  stats: { value: string; label: string; icon: ReactNode }[];
}

interface ServiceDetails {
  [key: string]: ServiceDetail;
}

export default function ServiceDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const service = services.find((s) => s.id === id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  if (!service) {
    notFound();
  }

  const serviceDetails: ServiceDetails = {
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
        "Extends vehicle lifespan by 40%",
        "Prevents costly breakdowns",
        "Maintains optimal performance",
        "Improves fuel efficiency by 15%",
        "Preserves manufacturer warranty",
      ],
      process: [
        "Initial vehicle assessment",
        "Comprehensive inspection",
        "Service recommendation",
        "Professional execution",
        "Quality verification",
        "Final delivery with report",
      ],
      stats: [
        {
          value: "40%",
          label: "Longer Engine Life",
          icon: <FaCog className="text-2xl" />,
        },
        {
          value: "15%",
          label: "Fuel Savings",
          icon: <FaOilCan className="text-2xl" />,
        },
        {
          value: "99%",
          label: "Reliability",
          icon: <FaShieldAlt className="text-2xl" />,
        },
      ],
      icon: <FaTools className="text-[#2cbbd4] text-6xl mb-6" />,
      image: "/images/k1.jpg",
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
      process: [
        "Connect diagnostic equipment",
        "Run comprehensive system scan",
        "Analyze error codes and data",
        "Identify root cause issues",
        "Generate detailed report",
        "Recommend precise solutions",
      ],
      stats: [
        {
          value: "30min",
          label: "Average Diagnosis",
          icon: <FaClock className="text-2xl" />,
        },
        {
          value: "98%",
          label: "Accuracy Rate",
          icon: <FaStar className="text-2xl" />,
        },
        {
          value: "500+",
          label: "Systems Scanned",
          icon: <FaCarBattery className="text-2xl" />,
        },
      ],
      icon: <FaCarBattery className="text-[#2cbbd4] text-6xl mb-6" />,
      image: "/images/k1.jpg",
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
        "Reduced engine wear by 50%",
        "Improved fuel economy",
        "Extended engine life",
        "Professional-grade products",
      ],
      process: [
        "Drain old oil completely",
        "Replace oil filter",
        "Add premium synthetic oil",
        "Inspect for leaks",
        "Reset maintenance indicator",
        "Quality check and cleanup",
      ],
      stats: [
        {
          value: "50%",
          label: "Less Wear",
          icon: <FaCog className="text-2xl" />,
        },
        {
          value: "20min",
          label: "Quick Service",
          icon: <FaClock className="text-2xl" />,
        },
        {
          value: "100%",
          label: "Quality Oil",
          icon: <FaOilCan className="text-2xl" />,
        },
      ],
      icon: <FaOilCan className="text-[#2cbbd4] text-6xl mb-6" />,
      image: "/images/c1.png",
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
        "60% fuel cost savings",
        "90% reduction in emissions",
        "Increased engine lifespan",
        "Dual fuel system flexibility",
        "Certified by RTO",
      ],
      process: [
        "Vehicle compatibility check",
        "Kit selection and approval",
        "Professional installation",
        "Safety testing and certification",
        "Performance optimization",
        "Documentation completion",
      ],
      stats: [
        {
          value: "60%",
          label: "Cost Savings",
          icon: <FaStar className="text-2xl" />,
        },
        {
          value: "90%",
          label: "Emission Reduction",
          icon: <FaShieldAlt className="text-2xl" />,
        },
        {
          value: "24hr",
          label: "Installation Time",
          icon: <FaClock className="text-2xl" />,
        },
      ],
      icon: <FaCar className="text-[#2cbbd4] text-6xl mb-6" />,
      image: "/images/c1.png",
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
      process: [
        "Damage assessment",
        "Repair planning and quote",
        "Structural repairs",
        "Body work and painting",
        "Quality inspection",
        "Final detailing",
      ],
      stats: [
        {
          value: "100%",
          label: "Color Match",
          icon: <FaStar className="text-2xl" />,
        },
        {
          value: "Lifetime",
          label: "Warranty",
          icon: <FaShieldAlt className="text-2xl" />,
        },
        {
          value: "500+",
          label: "Repairs Done",
          icon: <FaCarCrash className="text-2xl" />,
        },
      ],
      icon: <FaCarCrash className="text-[#2cbbd4] text-6xl mb-6" />,
      image: "/images/c1.png",
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
      process: [
        "Exterior inspection",
        "Interior evaluation",
        "Mechanical systems check",
        "Test drive assessment",
        "Computer diagnostics",
        "Comprehensive report generation",
      ],
      stats: [
        {
          value: "150",
          label: "Check Points",
          icon: <FaCheckCircle className="text-2xl" />,
        },
        {
          value: "98%",
          label: "Accuracy",
          icon: <FaStar className="text-2xl" />,
        },
        {
          value: "2hr",
          label: "Thorough Inspection",
          icon: <FaClock className="text-2xl" />,
        },
      ],
      icon: <FaCar className="text-[#2cbbd4] text-6xl mb-6" />,
      image: "/images/service-inspection.jpg",
    },
    errand: {
      features: [
        "DMV paperwork handling",
        "Vehicle registration renewal",
        "Part and accessory pickups",
        "Document delivery services",
        "Inspection station visits",
        "Custom errand requests",
      ],
      benefits: [
        "Saves 5+ hours weekly",
        "No more waiting in lines",
        "Expert handling of paperwork",
        "Convenient scheduling",
        "Real-time updates",
      ],
      process: [
        "Service request and details",
        "Document collection",
        "Errand execution",
        "Regular progress updates",
        "Task completion",
        "Delivery and documentation",
      ],
      stats: [
        {
          value: "5+",
          label: "Hours Saved",
          icon: <FaClock className="text-2xl" />,
        },
        {
          value: "100%",
          label: "Task Completion",
          icon: <FaCheckCircle className="text-2xl" />,
        },
        {
          value: "24/7",
          label: "Support",
          icon: <FaShieldAlt className="text-2xl" />,
        },
      ],
      icon: <FaRunning className="text-[#2cbbd4] text-6xl mb-6" />,
      image: "/images/c1.png",
    },
    delivery: {
      features: [
        "Vehicle pickup for service",
        "Post-service return delivery",
        "Loaner vehicle coordination",
        "Flexible scheduling",
        "Secure key handling",
        "Service report delivery",
      ],
      benefits: [
        "No need to leave home/work",
        "Seamless service experience",
        "Time-saving convenience",
        "Professional drivers",
        "Fully insured transport",
      ],
      process: [
        "Schedule pickup time",
        "Vehicle collection",
        "Service facility delivery",
        "Quality service execution",
        "Return delivery",
        "Service report handover",
      ],
      stats: [
        {
          value: "30min",
          label: "Pickup Window",
          icon: <FaClock className="text-2xl" />,
        },
        {
          value: "100%",
          label: "Insurance",
          icon: <FaShieldAlt className="text-2xl" />,
        },
        {
          value: "500+",
          label: "Deliveries",
          icon: <FaShoppingBag className="text-2xl" />,
        },
      ],
      icon: <FaShoppingBag className="text-[#2cbbd4] text-6xl mb-6" />,
      image: "/images/c1.png",
    },
  };

  const detail = serviceDetails[service.id];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#e6edf7]/20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#2cbbd4] rounded-full opacity-5 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0c4187] rounded-full opacity-5 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#2cbbd4]/10 border border-[#2cbbd4]/20 mb-6">
                <span className="text-[#2cbbd4] text-sm font-medium uppercase tracking-wider">
                  Premium Service
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0c4187] mb-6 leading-tight">
                {service.title}
              </h1>

              <p className="text-xl text-[#0c4187]/80 mb-8 leading-relaxed">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <CTAButton
                  href="/book-appointment"
                  variant="primary"
                  className="px-8 py-4 text-lg bg-gradient-to-r from-[#2cbbd4] to-[#0c4187] hover:from-[#2395a9] hover:to-[#0a3266]"
                >
                  Book This Service
                </CTAButton>
                <a
                  href="https://wa.me/2349025301696"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-6 py-4 bg-[#25D366] text-white rounded-xl font-semibold hover:bg-[#128C7E] transition-all duration-300"
                >
                  <FaWhatsapp className="h-5 w-5 mr-2" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="relative">
                <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={detail.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#2cbbd4] rounded-full opacity-20 animate-float"></div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-[#0c4187] rounded-full opacity-10 animate-float-reverse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {detail.stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-[#e6edf7] to-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#2cbbd4]/10 mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-[#0c4187] mb-2">
                  {stat.value}
                </div>
                <div className="text-lg text-[#0c4187]/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section ref={sectionRef} className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Features */}
            <div
              className={`transition-all duration-1000 transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-xl border border-gray-100">
                <h2 className="text-3xl font-bold text-[#0c4187] mb-8 flex items-center">
                  <FaCheckCircle className="text-[#2cbbd4] mr-3" />
                  Service Features
                </h2>
                <ul className="space-y-4">
                  {detail.features.map((feature, index) => (
                    <li key={index} className="flex items-start group">
                      <div className="bg-[#2cbbd4] text-white rounded-full p-2 mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <FaCheckCircle className="w-4 h-4" />
                      </div>
                      <span className="text-lg text-[#0c4187] group-hover:text-[#2cbbd4] transition-colors duration-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Benefits */}
            <div
              className={`transition-all duration-1000 transform delay-200 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="bg-gradient-to-br from-[#0c4187] to-[#2cbbd4] p-8 rounded-2xl shadow-xl text-white">
                <h2 className="text-3xl font-bold mb-8 flex items-center">
                  <FaStar className="text-white mr-3" />
                  Key Benefits
                </h2>
                <ul className="space-y-4">
                  {detail.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start group">
                      <div className="bg-white text-[#2cbbd4] rounded-full p-2 mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <FaStar className="w-4 h-4" />
                      </div>
                      <span className="text-lg group-hover:text-white/90 transition-colors duration-300">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Process */}
          <div
            className={`text-center mb-16 transition-all duration-1000 delay-400 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl font-bold text-[#0c4187] mb-4">
              Our Process
            </h2>
            <p className="text-xl text-[#0c4187]/70 mb-12 max-w-2xl mx-auto">
              We follow a meticulous process to ensure exceptional results for
              every service
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {detail.process.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#e6edf7] to-white rounded-2xl shadow-lg flex items-center justify-center group-hover:from-[#2cbbd4]/10 group-hover:to-[#0c4187]/10 transition-all duration-500">
                      <span className="text-2xl font-bold text-[#0c4187] group-hover:text-[#2cbbd4] transition-colors duration-500">
                        {index + 1}
                      </span>
                    </div>
                    <div className="absolute -z-10 inset-0 bg-gradient-to-r from-[#2cbbd4] to-[#0c4187] rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-[#0c4187] mb-3">
                    {step}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-r from-[#0c4187] to-[#2cbbd4] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Transparent Pricing</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Choose the package that best fits your needs and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Basic Package",
                price:
                  service.id === "errand"
                    ? "₦35,000 - ₦50,000"
                    : service.id === "delivery"
                    ? "₦50,000 - ₦70,000"
                    : "₦70,000 - ₦100,000",
                features:
                  service.id === "errand"
                    ? [
                        "Standard errand service",
                        "Local area coverage",
                        "Basic documentation",
                      ]
                    : service.id === "delivery"
                    ? [
                        "Local area delivery",
                        "Standard vehicle transport",
                        "Basic insurance coverage",
                      ]
                    : ["Standard service", "Genuine parts", "6-month warranty"],
                recommended: false,
              },
              {
                name: "Premium Package",
                price:
                  service.id === "errand"
                    ? "₦50,000 - ₦100,000"
                    : service.id === "delivery"
                    ? "₦35,000 - ₦50,000"
                    : "₦70,000 - ₦100,000",
                features:
                  service.id === "errand"
                    ? [
                        "Priority scheduling",
                        "Extended area coverage",
                        "Complex paperwork handling",
                        "Same-day service",
                      ]
                    : service.id === "delivery"
                    ? [
                        "Extended area coverage",
                        "Premium vehicle transport",
                        "Enhanced insurance",
                        "Express service",
                      ]
                    : [
                        "Comprehensive service",
                        "High-performance parts",
                        "1-year warranty",
                        "Free follow-up check",
                      ],
                recommended: true,
              },
              {
                name: "Custom Solution",
                price: "Contact Us",
                features:
                  service.id === "errand"
                    ? [
                        "Specialized errand services",
                        "Recurring service plans",
                        "Corporate solutions",
                      ]
                    : service.id === "delivery"
                    ? [
                        "Fleet delivery solutions",
                        "Long-distance transport",
                        "Custom scheduling",
                      ]
                    : [
                        "Tailored to your needs",
                        "Vehicle-specific approach",
                        "Flexible scheduling",
                      ],
                recommended: false,
              },
            ].map((pkg, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-3xl backdrop-blur-sm bg-white/10 border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  pkg.recommended
                    ? "border-[#2cbbd4] shadow-2xl"
                    : "border-white/20"
                }`}
              >
                {pkg.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#2cbbd4] text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4">{pkg.name}</h3>
                <div className="text-3xl font-bold text-[#2cbbd4] mb-6">
                  {pkg.price}
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <FaCheckCircle className="h-4 w-4 text-[#2cbbd4] mr-2" />
                      <span className="opacity-90">{feature}</span>
                    </li>
                  ))}
                </ul>
                <CTAButton
                  href={
                    pkg.price === "Contact Us"
                      ? "/contact"
                      : "/book-appointment"
                  }
                  variant={pkg.recommended ? "primary" : "outline"}
                  className="w-full justify-center py-4"
                >
                  {pkg.price === "Contact Us" ? "Get Quote" : "Select Plan"}
                </CTAButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-[#0c4187] mb-6">
            Ready for Exceptional Service?
          </h2>
          <p className="text-xl text-[#0c4187]/80 mb-10 max-w-2xl mx-auto">
            Experience the Kruss Automotive difference with our premium{" "}
            {service.title} service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CTAButton
              href="/book-appointment"
              variant="primary"
              className="px-8 py-4 text-lg bg-gradient-to-r from-[#2cbbd4] to-[#0c4187] hover:from-[#2395a9] hover:to-[#0a3266]"
            >
              Book Your Service Now
            </CTAButton>
            <a
              href="tel:+2349025301696"
              className="flex items-center px-8 py-4 border-2 border-[#2cbbd4] text-[#2cbbd4] rounded-xl font-semibold hover:bg-[#2cbbd4] hover:text-white transition-all duration-300"
            >
              <FaPhoneAlt className="h-5 w-5 mr-2" />
              Call: +234 902 530 1696
            </a>
          </div>
        </div>
      </section>

      {/* Custom Animations */}
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
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-reverse {
          animation: float-reverse 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
