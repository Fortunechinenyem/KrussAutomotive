"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/lib/firebase";
import { redirect } from "next/navigation";
import InspectionReport from "@/components/InspectionReport";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function TechnicianPortal() {
  const [user, loading] = useAuthState(auth);
  const [isTechnician, setIsTechnician] = useState<boolean | null>(null);

  useEffect(() => {
    const checkUserRole = async () => {
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setIsTechnician(userData.role === "technician");
        } else {
          setIsTechnician(false);
        }
      }
    };

    checkUserRole();
  }, [user]);

  if (loading || isTechnician === null) return <p>Loading...</p>;
  if (!user) redirect("/auth/signin");
  if (!isTechnician) redirect("/unauthorized");

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-[#0c4187] mb-6">
        Welcome, Technician!
      </h1>
      <InspectionReport />
    </div>
  );
}
