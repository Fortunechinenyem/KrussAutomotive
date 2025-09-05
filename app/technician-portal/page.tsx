"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
  Timestamp,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import InspectionReport from "@/components/InspectionReport";
import {
  FaCar,
  FaClipboardList,
  FaHistory,
  FaUser,
  FaChartLine,
  FaBell,
  FaSearch,
  FaFilter,
  FaPlusCircle,
  FaSync,
  FaSignOutAlt,
} from "react-icons/fa";

// Define the report interface
interface InspectionReport {
  id: string;
  vehicleMake?: string;
  vehicleModel?: string;
  vin?: string;
  createdAt?: Timestamp;
  status?: "pending" | "completed" | "in-progress";
  technicianId?: string;
  // Add other fields as needed
}

export default function TechnicianPortal() {
  const [user, loading, error] = useAuthState(auth);
  const [isTechnician, setIsTechnician] = useState<boolean | null>(null);
  const [recentReports, setRecentReports] = useState<InspectionReport[]>([]);
  const [stats, setStats] = useState({ total: 0, completed: 0, pending: 0 });
  const [activeTab, setActiveTab] = useState("dashboard");
  const router = useRouter();

  useEffect(() => {
    const checkUserRole = async () => {
      if (user) {
        try {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists()) {
            const isTech = userDoc.data().role === "technician";
            setIsTechnician(isTech);

            if (isTech) {
              // Fetch recent reports
              const reportsQuery = query(
                collection(db, "inspections"),
                where("technicianId", "==", user.uid)
              );

              const reportsSnapshot = await getDocs(reportsQuery);
              const reportsData = reportsSnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
              })) as InspectionReport[];

              // Sort by date if available, otherwise keep original order
              const sortedReports = reportsData.sort((a, b) => {
                const dateA = a.createdAt?.toDate?.() || new Date(0);
                const dateB = b.createdAt?.toDate?.() || new Date(0);
                return dateB.getTime() - dateA.getTime();
              });

              setRecentReports(sortedReports.slice(0, 5));

              // Calculate stats
              const total = reportsData.length;
              const completed = reportsData.filter(
                (r) => r.status === "completed"
              ).length;
              const pending = reportsData.filter(
                (r) => r.status === "pending" || r.status === "in-progress"
              ).length;

              setStats({ total, completed, pending });
            }
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

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      router.push("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const formatDate = (timestamp: Timestamp | undefined) => {
    if (!timestamp) return "N/A";
    try {
      const date = timestamp.toDate();
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch (error) {
      console.error("Error formatting date:", error);
      return "Invalid Date";
    }
  };

  const getStatusBadge = (status: string | undefined) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "in-progress":
        return "bg-blue-100 text-blue-800";
      case "pending":
      default:
        return "bg-amber-100 text-amber-800";
    }
  };

  const getStatusText = (status: string | undefined) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "in-progress":
        return "In Progress";
      case "pending":
        return "Pending";
      default:
        return "Pending";
    }
  };

  if (loading || isTechnician === null) {
    return (
      <div className="py-20 min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-blue-800 font-medium">
            Loading Technician Portal...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-gray-800">
              Kruss Technician Portal
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 text-gray-500 hover:text-blue-600 transition-colors">
              <FaBell className="text-xl" />
              <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>

            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <FaUser className="text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">
                  {user?.displayName || "Technician"}
                </p>
                <p className="text-xs text-gray-500">Technician</p>
              </div>
            </div>

            <button
              onClick={handleSignOut}
              className="p-2 text-gray-500 hover:text-red-600 transition-colors"
              title="Sign Out"
            >
              <FaSignOutAlt className="text-lg" />
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="container mx-auto px-4 mt-6">
        <div className="flex border-b">
          <button
            className={`px-6 py-3 font-medium flex items-center gap-2 ${
              activeTab === "dashboard"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("dashboard")}
          >
            <FaChartLine />
            Dashboard
          </button>
          <button
            className={`px-6 py-3 font-medium flex items-center gap-2 ${
              activeTab === "inspections"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("inspections")}
          >
            <FaClipboardList />
            Inspections
          </button>
          <button
            className={`px-6 py-3 font-medium flex items-center gap-2 ${
              activeTab === "history"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("history")}
          >
            <FaHistory />
            History
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome back, {user?.displayName || "Technician"}!
          </h1>
          <p className="text-gray-600">
            Here's your inspection overview and recent activity.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Inspections</p>
                <p className="text-3xl font-bold text-gray-800">
                  {stats.total}
                </p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <FaClipboardList className="text-blue-600 text-xl" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Completed</p>
                <p className="text-3xl font-bold text-green-600">
                  {stats.completed}
                </p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <FaClipboardList className="text-green-600 text-xl" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Pending</p>
                <p className="text-3xl font-bold text-amber-600">
                  {stats.pending}
                </p>
              </div>
              <div className="bg-amber-100 p-3 rounded-lg">
                <FaClipboardList className="text-amber-600 text-xl" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Reports */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800">
                  Recent Inspection Reports
                </h2>
                <button className="text-blue-600 text-sm font-medium flex items-center gap-1">
                  <FaSync className="text-xs" />
                  Refresh
                </button>
              </div>

              <div className="p-6">
                {recentReports.length > 0 ? (
                  <div className="space-y-4">
                    {recentReports.map((report) => (
                      <div
                        key={report.id}
                        className="flex justify-between items-center p-4 border border-gray-100 rounded-lg hover:bg-blue-50 transition-colors"
                      >
                        <div>
                          <h3 className="font-medium text-gray-800">
                            {report.vehicleMake || "Unknown Make"}{" "}
                            {report.vehicleModel || "Unknown Model"}
                          </h3>
                          <p className="text-sm text-gray-500">
                            VIN: {report.vin || "N/A"} •{" "}
                            {formatDate(report.createdAt)}
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadge(
                              report.status
                            )}`}
                          >
                            {getStatusText(report.status)}
                          </span>
                          <button className="text-blue-600 text-sm font-medium">
                            View
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <FaClipboardList className="text-gray-300 text-4xl mx-auto mb-3" />
                    <p className="text-gray-500">No inspection reports yet</p>
                    <button className="mt-4 text-blue-600 font-medium flex items-center gap-1 mx-auto">
                      <FaPlusCircle />
                      Create your first report
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Quick Actions & New Inspection */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Quick Actions
              </h2>
              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 p-3 text-left bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">
                  <FaPlusCircle className="text-blue-600" />
                  <span>New Inspection</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 text-left bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                  <FaHistory className="text-gray-600" />
                  <span>View History</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 text-left bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                  <FaSearch className="text-gray-600" />
                  <span>Search Reports</span>
                </button>
              </div>
            </div>

            {/* New Inspection Card */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl shadow-lg p-6 text-white">
              <h2 className="text-xl font-semibold mb-3">
                Start New Inspection
              </h2>
              <p className="text-blue-100 mb-4">
                Create a comprehensive vehicle inspection report with our
                digital form.
              </p>
              <button className="w-full bg-white text-blue-600 font-semibold py-3 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
                <FaPlusCircle />
                New Inspection
              </button>
            </div>
          </div>
        </div>

        {/* Inspection Report Component - Only show when inspections tab is active */}
        {activeTab === "inspections" && (
          <div className="mt-12">
            <InspectionReport />
          </div>
        )}
      </div>
    </div>
  );
}
