import {
  FaCar,
  FaTools,
  FaOilCan,
  FaCarBattery,
  FaCarCrash,
} from "react-icons/fa";
import { ComponentType, SVGProps } from "react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  cng: boolean;
}

export const services: Service[] = [
  {
    id: "preventive",
    title: "Preventive Maintenance",
    description: "Regular check-ups to keep your vehicle running smoothly...",
    icon: FaTools,
    cng: false,
  },
  {
    id: "diagnostics",
    title: "Advanced Diagnostics",
    description: "State-of-the-art diagnostic tools...",
    icon: FaCarBattery,
    cng: false,
  },
  {
    id: "oil",
    title: "Oil & Filter Change",
    description: "High-quality oil and filter replacements...",
    icon: FaOilCan,
    cng: false,
  },
  {
    id: "cng",
    title: "CNG Services",
    description: "Professional CNG installation...",
    icon: FaCar,
    cng: true,
  },
  {
    id: "body",
    title: "Body Repair",
    description: "Expert collision repair...",
    icon: FaCarCrash,
    cng: false,
  },
  {
    id: "inspection",
    title: "Pre-Purchase Inspection",
    description: "Comprehensive vehicle inspection...",
    icon: FaCar,
    cng: false,
  },
] as const;

export const cngServices = [
  {
    id: "cng-install",
    title: "CNG Kit Installation",
    description:
      "Professional installation of government-approved CNG kits for all vehicle types.",
  },
  {
    id: "cng-maintenance",
    title: "CNG System Maintenance",
    description:
      "Regular maintenance and inspection of CNG systems for optimal performance and safety.",
  },
  {
    id: "cng-repair",
    title: "CNG System Repair",
    description: "Expert repair services for all CNG system components.",
  },
  {
    id: "cng-certification",
    title: "Certification & Documentation",
    description:
      "Assistance with all necessary certification and documentation for CNG vehicles.",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Taxi Fleet Owner",
    content:
      "Kruss Automotive transformed our fleet operations with their CNG conversion services. The fuel savings have been incredible!",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Individual Customer",
    content:
      "The team at Kruss is professional and knowledgeable. They explained everything about my car service in simple terms.",
    rating: 5,
  },
  {
    id: 3,
    name: "Vikram Singh",
    role: "Business Owner",
    content:
      "Their preventive maintenance program has saved us thousands in unexpected repairs. Highly recommended!",
    rating: 4,
  },
];
