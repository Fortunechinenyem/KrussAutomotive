import { ReactNode } from "react";
import { Timestamp } from "firebase/firestore";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;

  cng?: boolean;
}

export interface ServiceDetailPageProps {
  params: {
    id: string;
  };
}

export interface ServiceDetail {
  features: string[];
  benefits: string[];
  icon: ReactNode;
}

export interface CNGService {
  id: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface InspectionReport {
  id: string;
  vehicleMake?: string;
  vehicleModel?: string;
  vin?: string;
  createdAt?: Timestamp;
  status?: "pending" | "completed" | "in-progress";
  technicianId?: string;
}

export interface Stats {
  total: number;
  completed: number;
  pending: number;
  inProgress: number;
}

export interface ChartData {
  labels: string[];
  datasets: {
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
  }[];
}

export interface MonthlyReportData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
    tension: number;
    fill: boolean;
  }[];
}

export interface ChartOptions {
  responsive: boolean;
  plugins: {
    legend: {
      position: "top" | "bottom" | "left" | "right";
    };
  };
  maintainAspectRatio: boolean;
}
