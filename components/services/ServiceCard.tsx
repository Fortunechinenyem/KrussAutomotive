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
            style={{
              backgroundColor: service.cng ? "#7f870c" : "#2cbbd4",
              color: "white",
            }}
          >
            <service.icon className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold ml-4 text-gray-900">
            {service.title}
          </h3>
        </div>
        <p className="text-gray-600 mb-6">{service.description}</p>
        {service.cng && (
          <span className="inline-block bg-[#f5f7e6] text-[#7f870c] text-xs px-2 py-1 rounded-full mb-4">
            CNG Specialization
          </span>
        )}
      </div>
      <div className="px-6 pb-6">
        <Link
          href={`/services/detail?id=${service.id}`}
          className="text-[#2cbbd4] hover:text-[#2395a9] font-medium flex items-center transition-colors"
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
