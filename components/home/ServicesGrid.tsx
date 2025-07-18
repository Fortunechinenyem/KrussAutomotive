import Link from "next/link";
import { services } from "@/lib/constants";

const ServicesGrid = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Automotive Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From routine maintenance to specialized services, we provide
            end-to-end solutions for all your automotive needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-orange-100 text-orange-500">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold ml-4">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link
                  href={`/services#${service.id}`}
                  className="text-orange-500 hover:text-orange-600 font-medium flex items-center"
                >
                  Learn more
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {services.some((s) => s.cng) && (
          <div className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-8 text-white">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h3 className="text-2xl font-bold mb-2">
                  Specialized CNG Services
                </h3>
                <p className="mb-4">
                  Get expert CNG installation, maintenance, and repair services
                  with our certified technicians.
                </p>
                <Link
                  href="/cng"
                  className="inline-flex items-center px-6 py-2 bg-white text-orange-600 rounded-full font-medium hover:bg-gray-100 transition-colors"
                >
                  Explore CNG Services
                </Link>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <img
                  src="/images/cng-icon.png"
                  alt="CNG Services"
                  className="h-32 w-32 object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesGrid;
