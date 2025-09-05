"use client";
import {
  FaCar,
  FaTools,
  FaOilCan,
  FaCarBattery,
  FaCarCrash,
  FaShoppingBag,
  FaRunning,
  FaArrowRight,
  FaCheckCircle,
  FaUsers,
  FaAward,
  FaClock,
  FaCog,
  FaShieldAlt,
  FaMagic,
  FaRocket,
} from "react-icons/fa";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// Define types
interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  features: string[];
}

interface ServiceCardProps {
  service: Service;
  index: number;
}

interface AnimatedStatProps {
  number: string;
  label: string;
  icon: React.ReactNode;
  index: number;
}

interface Stat {
  number: string;
  label: string;
  icon: React.ReactNode;
}

interface ProcessStep {
  step: string;
  title: string;
  desc: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

// Animated Service Card Component
const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative group overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-2xl hover:shadow-3xl transition-all duration-700 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/images/carbon-fiber-pattern.png')]"></div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c4187] to-[#2cbbd4] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>

      {/* Animated Border */}
      <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-[#0c4187] to-[#2cbbd4] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

      <div className="relative p-8">
        {/* Icon Container */}
        <div className="relative mb-6">
          <div className="absolute -inset-4 bg-gradient-to-r from-[#0c4187] to-[#2cbbd4] rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
          <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#e6edf7] to-white shadow-lg group-hover:shadow-xl">
            <service.icon className="h-8 w-8 text-[#2cbbd4] group-hover:text-[#0c4187] transition-colors duration-500" />
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#2cbbd4] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        {/* Content */}
        <h3 className="text-2xl font-bold text-[#0c4187] mb-4 group-hover:text-[#2cbbd4] transition-colors duration-500">
          {service.title}
        </h3>

        <p className="text-gray-600 mb-6 leading-relaxed">
          {service.description}
        </p>

        {/* Features List */}
        <ul className="mb-8 space-y-3">
          {service.features.map((feature: string, idx: number) => (
            <li
              key={idx}
              className="flex items-center text-gray-600 group-hover:text-gray-700 transition-colors duration-500"
            >
              <div className="flex-shrink-0 w-6 h-6 bg-[#2cbbd4]/10 rounded-full flex items-center justify-center mr-3 group-hover:bg-[#2cbbd4]/20 transition-colors duration-500">
                <FaCheckCircle className="h-3 w-3 text-[#2cbbd4]" />
              </div>
              <span className="text-sm font-medium">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link
          href={`/services/${service.id}`}
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#2cbbd4] to-[#0c4187] text-white rounded-xl font-semibold hover:from-[#2395a9] hover:to-[#0a3266] transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl group/btn"
        >
          <span>Explore Service</span>
          <FaArrowRight className="h-4 w-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>

      {/* Bottom Gradient Bar */}
      <div className="h-1 bg-gradient-to-r from-[#2cbbd4] to-[#0c4187] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
};

// Animated Stat Component
const AnimatedStat = ({ number, label, icon, index }: AnimatedStatProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const statRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);

          // Animate number counting
          let start = 0;
          const end = parseInt(number.replace("+", "").replace("%", ""));
          const duration = 2000;
          const increment = end / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (statRef.current) {
      observer.observe(statRef.current);
    }

    return () => observer.disconnect();
  }, [number, isVisible]);

  return (
    <div
      ref={statRef}
      className="text-center transform transition-all duration-1000"
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#e6edf7] to-white shadow-lg mb-6">
        <div className="text-[#2cbbd4] text-2xl">{icon}</div>
        <div className="absolute -inset-4 bg-gradient-to-r from-[#0c4187] to-[#2cbbd4] rounded-2xl opacity-0 hover:opacity-5 transition-opacity duration-500"></div>
      </div>
      <div className="text-4xl font-bold text-[#0c4187] mb-2">
        {number.includes("%") || number.includes("+")
          ? `${count}${number.replace(/[0-9]/g, "")}`
          : count}
      </div>
      <div className="text-sm text-[#0c4187]/70 font-medium">{label}</div>
    </div>
  );
};

export default function Services() {
  const services: Service[] = [
    {
      id: "preventive",
      title: "Preventive Maintenance",
      description:
        "Regular check-ups to keep your vehicle running smoothly and prevent costly repairs.",
      icon: FaTools,
      features: [
        "Oil changes",
        "Filter replacements",
        "Fluid checks",
        "Brake inspection",
        "Tire rotation",
      ],
    },
    {
      id: "diagnostics",
      title: "Advanced Diagnostics",
      description:
        "State-of-the-art diagnostic tools to accurately identify and fix vehicle issues.",
      icon: FaCarBattery,
      features: [
        "Computer diagnostics",
        "Engine analysis",
        "Electrical systems",
        "Performance tuning",
        "Error code reading",
      ],
    },
    {
      id: "oil",
      title: "Oil & Filter Change",
      description:
        "High-quality oil and filter replacements to keep your engine running clean.",
      icon: FaOilCan,
      features: [
        "Synthetic oils",
        "Premium filters",
        "Complete inspection",
        "Fluid top-up",
        "Waste disposal",
      ],
    },
    {
      id: "cng",
      title: "CNG Services",
      description:
        "Professional CNG installation, maintenance and repair services with government approval.",
      icon: FaCar,
      features: [
        "Govt-approved kits",
        "Certified installation",
        "Safety testing",
        "Documentation",
        "Maintenance packages",
      ],
    },
    {
      id: "body",
      title: "Body Repair",
      description:
        "Expert collision repair and paint services to restore your vehicle to pristine condition.",
      icon: FaCarCrash,
      features: [
        "Dent removal",
        "Paint matching",
        "Frame repair",
        "Quality guarantee",
        "Insurance coordination",
      ],
    },
    {
      id: "inspection",
      title: "Pre-Purchase Inspection",
      description:
        "Comprehensive vehicle inspection before purchase to ensure your investment is sound.",
      icon: FaShieldAlt,
      features: [
        "140-point check",
        "Mechanical inspection",
        "Body assessment",
        "Detailed report",
        "Expert recommendation",
      ],
    },
    {
      id: "errand",
      title: "Auto-Errand as a Service",
      description:
        "Let us handle your vehicle-related errands - from DMV visits to part pickups.",
      icon: FaRunning,
      features: [
        "Paperwork handling",
        "Part sourcing",
        "Document filing",
        "Time saving",
        "Convenience focused",
      ],
    },
    {
      id: "delivery",
      title: "Vehicle Delivery Service",
      description:
        "We'll pick up and deliver your vehicle for service at your convenience.",
      icon: FaShoppingBag,
      features: [
        "Pickup service",
        "Secure transport",
        "Flexible timing",
        "Contactless",
        "Real-time tracking",
      ],
    },
  ];

  const stats: Stat[] = [
    { number: "500+", label: "Happy Clients", icon: <FaUsers /> },
    { number: "98%", label: "Satisfaction Rate", icon: <FaAward /> },
    { number: "24/7", label: "Support", icon: <FaClock /> },
    { number: "7+", label: "Years Experience", icon: <FaCog /> },
  ];

  const processSteps: ProcessStep[] = [
    {
      step: "01",
      title: "Consultation",
      desc: "We listen to your concerns and assess your vehicle's needs",
      icon: FaMagic,
    },
    {
      step: "02",
      title: "Diagnosis",
      desc: "Thorough inspection using advanced diagnostic equipment",
      icon: FaCarBattery,
    },
    {
      step: "03",
      title: "Solution",
      desc: "Transparent recommendations with detailed pricing",
      icon: FaShieldAlt,
    },
    {
      step: "04",
      title: "Execution",
      desc: "Precision work by certified technicians with quality parts",
      icon: FaRocket,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#e6edf7]/10 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#2cbbd4] rounded-full opacity-5 animate-float"></div>
        <div
          className="absolute top-1/2 -right-20 w-96 h-96 bg-[#0c4187] rounded-full opacity-5 animate-float-reverse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#2cbbd4] rounded-full opacity-5 animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Animated Badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-[#2cbbd4]/30 mb-10 shadow-lg animate-pulse">
              <span className="text-[#2cbbd4] text-sm font-semibold uppercase tracking-wider">
                Premium Automotive Excellence
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0c4187] mb-8 leading-tight">
              Exceptional{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-[#2cbbd4] to-[#0c4187] bg-clip-text text-transparent">
                  Automotive
                </span>
                <div className="absolute -inset-4 bg-gradient-to-r from-[#2cbbd4] to-[#0c4187] rounded-2xl opacity-10 blur-xl -z-10"></div>
              </span>{" "}
              Care
            </h1>

            <p className="text-xl md:text-2xl text-[#0c4187]/80 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Experience the pinnacle of automotive service with our certified
              technicians, cutting-edge technology, and unwavering commitment to
              excellence.
            </p>

            {/* Animated Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <AnimatedStat
                  key={index}
                  number={stat.number}
                  label={stat.label}
                  icon={stat.icon}
                  index={index}
                />
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/book-appointment"
                className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-[#2cbbd4] to-[#0c4187] text-white rounded-xl font-semibold hover:from-[#2395a9] hover:to-[#0a3266] transition-all duration-300 transform hover:-translate-y-1 shadow-2xl hover:shadow-3xl"
              >
                <span className="relative z-10">Book Premium Service</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#2395a9] to-[#0a3266] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-[#2cbbd4] text-[#2cbbd4] rounded-xl font-semibold hover:bg-[#2cbbd4] hover:text-white transition-all duration-300 transform hover:-translate-y-1"
              >
                Consult Our Experts
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0c4187] mb-6">
              Premium Service Portfolio
            </h2>
            <p className="text-xl text-[#0c4187]/70 max-w-2xl mx-auto">
              Discover our comprehensive range of automotive services designed
              to keep your vehicle performing at its absolute best.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          {/* Premium Consultation CTA */}
          <div className="relative bg-gradient-to-r from-[#0c4187] to-[#2cbbd4] rounded-3xl p-12 text-white overflow-hidden group">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('/images/carbon-fiber-pattern.png')]"></div>

            {/* Animated Elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-white rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-1000"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#2cbbd4] rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-1000"></div>

            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className="lg:w-2/3 mb-10 lg:mb-0">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Experience the Kruss Difference
                  </h2>
                  <p className="text-xl opacity-90 mb-8">
                    Our automotive specialists provide personalized
                    consultations to ensure your vehicle receives the exact care
                    it deserves.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      "Certified Technicians",
                      "Premium Parts",
                      "Lifetime Warranty",
                      "24/7 Support",
                    ].map((item) => (
                      <div key={item} className="flex items-center">
                        <FaCheckCircle className="h-5 w-5 text-[#2cbbd4] mr-3" />
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-10 py-5 bg-white text-[#0c4187] rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl group/btn"
                >
                  <span>Schedule Consultation</span>
                  <FaArrowRight className="h-5 w-5 ml-3 transform group-hover/btn:translate-x-2 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-28 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0c4187] mb-6">
              Our Excellence Process
            </h2>
            <p className="text-xl text-[#0c4187]/70 max-w-2xl mx-auto">
              Every service follows our meticulous process to ensure
              unparalleled quality and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group relative">
                <div className="relative mb-8">
                  <div className="absolute -inset-6 bg-gradient-to-r from-[#0c4187] to-[#2cbbd4] rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                  <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#e6edf7] to-white shadow-lg group-hover:shadow-xl">
                    <step.icon className="h-8 w-8 text-[#2cbbd4] group-hover:text-[#0c4187] transition-colors duration-500" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#2cbbd4] rounded-full flex items-center justify-center text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-[#0c4187] mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
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
            transform: translateY(-20px) rotate(5deg);
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
            transform: translateY(15px) rotate(-5deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-reverse {
          animation: float-reverse 10s ease-in-out infinite;
        }
        .animate-pulse {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}
