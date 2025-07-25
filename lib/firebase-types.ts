export type InspectionStatus =
  | "draft"
  | "in_progress"
  | "completed"
  | "approved"
  | "rejected";

export type ConditionStatus =
  | "excellent"
  | "good"
  | "fair"
  | "poor"
  | "needs_attention";

// Then define interfaces that use them
export interface InspectionItem {
  condition: ConditionStatus;
  notes: string;
  photos?: string[]; // Array of storage URLs
}

export interface Inspection {
  id: string;
  vehicleId: string;
  technicianId: string;
  status: InspectionStatus;
  overallCondition: ConditionStatus;
  notes?: string;
  recommendations?: string;

  exterior: {
    bodyPanels: InspectionItem;
    paint: InspectionItem;
    windows: InspectionItem;
    lights: InspectionItem;
    tires: InspectionItem;
  };

  interior: {
    seats: InspectionItem;
    dashboard: InspectionItem;
    electronics: InspectionItem;
    climateControl: InspectionItem;
    odometer: InspectionItem;
  };

  mechanical: {
    engine: InspectionItem;
    transmission: InspectionItem;
    brakes: InspectionItem;
    suspension: InspectionItem;
    exhaust: InspectionItem;
  };

  testDrive?: {
    acceleration: InspectionItem;
    braking: InspectionItem;
    steering: InspectionItem;
    unusualNoises: InspectionItem;
  };

  attachments?: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  uid: string;
  email: string;
  name: string;
  role: "technician" | "admin" | "manager";
  createdAt: Date;
  lastLogin?: Date;
}

export interface Vehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  vin: string;
  mileage: number;
  licensePlate?: string;
  createdAt: Date;
  lastInspectionDate?: Date;
}
