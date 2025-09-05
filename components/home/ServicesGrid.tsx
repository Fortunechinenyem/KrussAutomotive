import { useState } from "react";
import Link from "next/link";
import { services } from "@/lib/constants";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

// Define types for the component
type ServiceCategory =
  | "maintenance"
  | "diagnostics"
  | "conversion"
  | "repair"
  | "inspection"
  | "errand"
  | "delivery"
  | "all";

interface Category {
  id: ServiceCategory;
  name: string;
}

const ServicesGrid = () => {
  const [activeTab, setActiveTab] = useState<ServiceCategory>("all");
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const filteredServices =
    activeTab === "all"
      ? services
      : services.filter((service) => service.category === activeTab);

  const categories: Category[] = [
    { id: "all", name: "All Services" },
    { id: "maintenance", name: "Maintenance" },
    { id: "repair", name: "Repairs" },
    { id: "conversion", name: "Conversions" },
    { id: "diagnostics", name: "Diagnostics" },
    { id: "inspection", name: "Inspections" },
    { id: "errand", name: "Errands" },
    { id: "delivery", name: "Delivery" },
  ];

  // Define the features type with index signature
  type CategoryFeatures = {
    [key in ServiceCategory]?: string[];
  } & {
    default: string[];
  };

  // Simple feature descriptions for each service category
  const categoryFeatures: CategoryFeatures = {
    maintenance: [
      "Regular check-ups",
      "Oil changes",
      "Filter replacements",
      "Fluid services",
    ],
    repair: [
      "Expert technicians",
      "Quality parts",
      "Warranty included",
      "Quick turnaround",
    ],
    conversion: [
      "Govt-approved kits",
      "Certified installers",
      "Safety checks",
      "Documentation",
    ],
    diagnostics: [
      "Advanced tools",
      "Accurate diagnosis",
      "Detailed reports",
      "Expert analysis",
    ],
    inspection: [
      "Comprehensive check",
      "Detailed report",
      "Expert advice",
      "Transparent pricing",
    ],
    errand: [
      "Time saving",
      "Paperwork handling",
      "Convenient service",
      "Reliable execution",
    ],
    delivery: [
      "Pickup service",
      "Delivery option",
      "Time flexible",
      "Secure handling",
    ],
    default: [
      "Professional service",
      "Expert technicians",
      "Quality guarantee",
      "Customer satisfaction",
    ],
  };

  const getCategoryFeatures = (category: ServiceCategory): string[] => {
    return categoryFeatures[category] || categoryFeatures.default;
  };

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-white to-[#e6edf7]/30 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2cbbd4] rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0c4187] rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.jpg')] opacity-[0.02]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-[#2cbbd4]/10 border border-[#2cbbd4]/20 mb-6">
            <span className="text-[#2cbbd4] text-sm font-medium uppercase tracking-wider">
              Our Services
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0c4187] mb-4">
            Comprehensive Automotive Solutions
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#2cbbd4] to-[#0c4187] mx-auto mb-6"></div>
          <p className="text-lg text-[#0c4187]/70 max-w-2xl mx-auto">
            From routine maintenance to specialized services, we provide
            end-to-end solutions with cutting-edge technology and expert
            craftsmanship.
          </p>
        </div>

        {/* Category tabs - with scroll for many categories */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-2">
          <div className="inline-flex rounded-2xl shadow-lg bg-white p-1 border border-gray-100">
            {categories.map((category: Category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 whitespace-nowrap ${
                  activeTab === category.id
                    ? "bg-gradient-to-r from-[#0c4187] to-[#2cbbd4] text-white shadow-md"
                    : "text-[#0c4187] hover:text-[#2cbbd4] hover:bg-gray-50"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0c4187] to-[#2cbbd4] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>

              {/* Service content */}
              <div className="p-6">
                <div className="flex items-start mb-5">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br from-[#e6edf7] to-white 
                    group-hover:from-[#2cbbd4]/10 group-hover:to-[#0c4187]/10 
                    shadow-inner transition-all duration-500 ${
                      hoveredService === service.id ? "scale-110" : ""
                    }`}
                  >
                    <service.icon className="h-6 w-6 text-[#2cbbd4] group-hover:text-[#0c4187] transition-colors duration-500" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#0c4187] mb-3 group-hover:text-[#2cbbd4] transition-colors duration-500">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features list based on category */}
                <ul className="mb-6 space-y-2">
                  {getCategoryFeatures(service.category)
                    .slice(0, 3)
                    .map((feature: string, index: number) => (
                      <li
                        key={index}
                        className="flex items-center text-sm text-gray-500"
                      >
                        <FaCheckCircle className="h-4 w-4 text-[#2cbbd4] mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                </ul>

                <Link
                  href={`/services#${service.id}`}
                  className="inline-flex items-center text-[#2cbbd4] font-medium group-hover:text-[#0c4187] transition-colors duration-500"
                >
                  <span className="mr-2">Learn more</span>
                  <FaArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>

              {/* Bottom accent bar */}
              <div className="h-1 bg-gradient-to-r from-[#2cbbd4] to-[#0c4187] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Empty state when no services match filter */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="text-[#2cbbd4] text-6xl mb-4">🔧</div>
            <h3 className="text-xl font-bold text-[#0c4187] mb-2">
              No services found
            </h3>
            <p className="text-gray-600 mb-6">
              We don't have services in this category yet, but we're always
              expanding our offerings!
            </p>
            <button
              onClick={() => setActiveTab("all")}
              className="px-6 py-2 bg-[#0c4187] text-white rounded-lg font-medium hover:bg-[#2cbbd4] transition-colors"
            >
              View All Services
            </button>
          </div>
        )}

        {/* CNG Services Banner */}
        {services.some((s) => s.cng) && (
          <div className="mt-16 bg-gradient-to-r from-[#0c4187] to-[#2cbbd4] rounded-2xl p-8 text-white overflow-hidden relative">
            {/* Background pattern */}
            <div
              className="absolute inset-0 opacity-10 bg-[url('/images/carbon-fiber
            -pattern.jpg')]"
            ></div>

            <div className="flex flex-col md:flex-row items-center relative z-10">
              <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  Specialized CNG Conversion Services
                </h3>
                <p className="mb-6 opacity-90">
                  Get expert CNG installation, maintenance, and repair services
                  with our certified technicians. Save on fuel costs while
                  reducing your environmental impact.
                </p>
                <Link
                  href="/cng"
                  className="inline-flex items-center px-6 py-3 bg-white text-[#0c4187] rounded-full font-medium hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <span>Explore CNG Services</span>
                  <FaArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="relative">
                  <div className="w-48 h-48 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <div className="text-5xl text-white">⛽</div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#2cbbd4] rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-white rounded-full animate-ping"></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA section */}
        <div className="text-center mt-16">
          <p className="text-lg text-[#0c4187]/70 mb-6">
            Can't find what you're looking for?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#2cbbd4] to-[#0c4187] text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <span>Contact Our Experts</span>
            <FaArrowRight className="h-5 w-5 ml-3" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
