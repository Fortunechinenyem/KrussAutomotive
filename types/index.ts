import { ReactNode } from "react";

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
