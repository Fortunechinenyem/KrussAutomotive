export type InspectionStatus =
  | "draft"
  | "in_progress"
  | "completed"
  | "approved"
  | "rejected";

export type ConditionStatus = "excellent" | "good" | "fair" | "poor";
// Removed "needs_attention" to match your component's conditionOptions

// Then define interfaces that use them
export interface InspectionItem {
  condition: ConditionStatus;
  notes: string;
  photos?: string[]; // Array of storage URLs
}

export interface Inspection {
  id: string;
  vehicleId: string;
  vehicleMake: string; // Added to match your component
  vehicleModel: string; // Added to match your component
  vehicleYear?: number; // Added to match your component
  vin?: string; // Made optional to match your component
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

  testDrive: {
    // Made non-optional to match your component
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
