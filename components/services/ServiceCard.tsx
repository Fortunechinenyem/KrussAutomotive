import { Service } from "@/types";
import Link from "next/link";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <div className="p-6 flex-grow">
        <div className="flex items-center mb-4">
          <div
            className="p-3 rounded-lg"
            style={{ backgroundColor: "#2cbbd4", color: "white" }}
          >
            <service.icon className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold ml-4 text-gray-900">
            {service.title}
          </h3>
        </div>
        <p className="text-gray-600 mb-6">{service.description}</p>
      </div>
      <div className="px-6 pb-6">
        <Link
          href={`/services#${service.id}`}
          className="font-medium flex items-center transition-colors"
          style={{ color: "#2cbbd4" }}
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
  );
};

export default ServiceCard;
