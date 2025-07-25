import { db, storage } from "./firebase";
import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  updateDoc,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Inspection, User, Vehicle } from "./firebase-types";

// User Operations
export const createUser = async (userData: User) => {
  await setDoc(doc(db, "users", userData.uid), userData);
};

export const getUser = async (uid: string) => {
  const docSnap = await getDoc(doc(db, "users", uid));
  return docSnap.exists() ? (docSnap.data() as User) : null;
};

// Vehicle Operations
export const createVehicle = async (
  vehicleData: Omit<Vehicle, "id" | "createdAt">
) => {
  const vehicleRef = doc(collection(db, "vehicles"));
  const vehicle = {
    ...vehicleData,
    id: vehicleRef.id,
    createdAt: new Date(),
  };
  await setDoc(vehicleRef, vehicle);
  return vehicle;
};

export const getVehicleByVin = async (vin: string) => {
  const q = query(collection(db, "vehicles"), where("vin", "==", vin));
  const snapshot = await getDocs(q);
  return snapshot.docs[0]?.data() as Vehicle | undefined;
};

// Inspection Operations
export const createInspection = async (
  inspectionData: Omit<Inspection, "id" | "createdAt" | "updatedAt">
) => {
  const inspectionRef = doc(collection(db, "inspections"));
  const inspection = {
    ...inspectionData,
    id: inspectionRef.id,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  await setDoc(inspectionRef, inspection);
  return inspection;
};

export const getTechnicianInspections = async (
  technicianId: string,
  status?: InspectionStatus
) => {
  let q = query(
    collection(db, "inspections"),
    where("technicianId", "==", technicianId),
    orderBy("createdAt", "desc")
  );

  if (status) {
    q = query(q, where("status", "==", status));
  }

  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => doc.data() as Inspection);
};

export const updateInspection = async (
  id: string,
  updates: Partial<Inspection>
) => {
  const inspectionRef = doc(db, "inspections", id);
  await updateDoc(inspectionRef, {
    ...updates,
    updatedAt: new Date(),
  });
};

export const uploadInspectionFile = async (
  inspectionId: string,
  file: File
) => {
  const storageRef = ref(storage, `inspections/${inspectionId}/${file.name}`);
  await uploadBytes(storageRef, file);
  return await getDownloadURL(storageRef);
};
