import {
  FaCar,
  FaTools,
  FaOilCan,
  FaCarBattery,
  FaCarCrash,
  FaRunning,
  FaShoppingBag,
} from "react-icons/fa";
import { ComponentType, SVGProps } from "react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  cng: boolean;
  category:
    | "maintenance"
    | "diagnostics"
    | "conversion"
    | "repair"
    | "inspection"
    | "errand"
    | "delivery";
}

export const services: readonly Service[] = [
  {
    id: "preventive",
    title: "Preventive Maintenance",
    description: "Regular check-ups to keep your vehicle running smoothly...",
    icon: FaTools,
    cng: false,
    category: "maintenance",
  },
  {
    id: "diagnostics",
    title: "Advanced Diagnostics",
    description: "State-of-the-art diagnostic tools...",
    icon: FaCarBattery,
    cng: false,
    category: "diagnostics",
  },
  {
    id: "oil",
    title: "Oil & Filter Change",
    description: "High-quality oil and filter replacements...",
    icon: FaOilCan,
    cng: false,
    category: "maintenance",
  },
  {
    id: "cng",
    title: "CNG Services",
    description: "Professional CNG installation...",
    icon: FaCar,
    cng: true,
    category: "conversion",
  },
  {
    id: "body",
    title: "Body Repair",
    description: "Expert collision repair...",
    icon: FaCarCrash,
    cng: false,
    category: "repair",
  },
  {
    id: "inspection",
    title: "Pre-Purchase Inspection",
    description: "Comprehensive vehicle inspection...",
    icon: FaCar,
    cng: false,
    category: "inspection",
  },
  {
    id: "errand",
    title: "Auto-Errand as a Service",
    description: "Let us handle your vehicle-related errands and paperwork...",
    icon: FaRunning,
    cng: false,
    category: "errand",
  },
  {
    id: "delivery",
    title: "Vehicle Delivery Service",
    description:
      "Convenient pickup and delivery for your vehicle service needs...",
    icon: FaShoppingBag,
    cng: false,
    category: "delivery",
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
  {
    id: 4,
    name: "Anjali Mehta",
    role: "Working Professional",
    content:
      "The auto-errand service saved me so much time! They handled all my vehicle paperwork while I was at work.",
    rating: 5,
  },
  {
    id: 5,
    name: "Sanjay Gupta",
    role: "Corporate Client",
    content:
      "The vehicle delivery service has streamlined our company's fleet maintenance. Excellent convenience and reliability.",
    rating: 5,
  },
];
