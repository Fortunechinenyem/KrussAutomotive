"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import InspectionReport from "@/components/InspectionReport";

export default function TechnicianPortal() {
  const [user, loading, error] = useAuthState(auth);
  const [isTechnician, setIsTechnician] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkUserRole = async () => {
      if (user) {
        try {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists()) {
            setIsTechnician(userDoc.data().role === "technician");
          } else {
            console.log("User document not found in Firestore");
            setIsTechnician(false);
          }
        } catch (err) {
          console.error("Firestore error:", err);
          setIsTechnician(false);
        }
      } else {
        setIsTechnician(false);
      }
    };

    if (!loading) {
      checkUserRole();
    }
  }, [user, loading]);

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push("/auth/signin");
      } else if (isTechnician === false) {
        router.push("/unauthorized");
      }
    }
  }, [user, loading, isTechnician, router]);

  if (loading || isTechnician === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container py-20 mt-9 mx-auto p-4">
      <h1 className="text-2xl font-bold text-[#0c4187] mb-6">
        Welcome, {user?.displayName || "Technician"}!
      </h1>
      <InspectionReport />
    </div>
  );
}
