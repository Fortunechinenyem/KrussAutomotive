import {
  FaCar,
  FaTools,
  FaGasPump,
  FaCarCrash,
  FaCarBattery,
  FaOilCan,
} from "react-icons/fa";

export const services = [
  {
    id: "maintenance",
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
    id: "oil-change",
    title: "Oil & Filter Change",
    description:
      "High-quality oil and filter replacements to keep your engine running clean.",
    icon: FaOilCan,
    cng: false,
  },
  {
    id: "cng-installation",
    title: "CNG Installation",
    description:
      "Professional CNG kit installation with government-approved certification.",
    icon: FaGasPump,
    cng: true,
  },
  {
    id: "body-repair",
    title: "Body Repair & Paint",
    description:
      "Expert collision repair and paint services to restore your vehicle to its original condition.",
    icon: FaCarCrash,
    cng: false,
  },
  {
    id: "inspection",
    title: "Pre-Purchase Inspection",
    description:
      "Comprehensive vehicle inspection before purchase to ensure you make an informed decision.",
    icon: FaCar,
    cng: false,
  },
];

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
