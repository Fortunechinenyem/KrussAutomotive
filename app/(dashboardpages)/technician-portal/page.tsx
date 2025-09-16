// app/technician-portal/page.tsx
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
import { useEffect, useState, useCallback } from "react";
import InspectionReport from "@/components/InspectionReport";
import {
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaPlusCircle,
  FaHistory,
  FaCalendarAlt,
} from "react-icons/fa";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Import types
import {
  InspectionReport as InspectionReportType,
  Stats,
  ChartData,
  MonthlyReportData,
  ChartOptions,
} from "@/types";
import Sidebar from "@/components/technicianportal/Sidebar";
import Header from "@/components/technicianportal/Header";
import StatsCards from "@/components/technicianportal/StatsCards";
import RecentReports from "@/components/technicianportal/RecentReports";
import QuickActions from "@/components/technicianportal/QuickActions";
import Analytics from "@/components/technicianportal/Analytics";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

export default function TechnicianPortal() {
  const [user, loading, error] = useAuthState(auth);
  const [isTechnician, setIsTechnician] = useState<boolean | null>(null);
  const [recentReports, setRecentReports] = useState<InspectionReportType[]>(
    []
  );
  const [allReports, setAllReports] = useState<InspectionReportType[]>([]);
  const [stats, setStats] = useState<Stats>({
    total: 0,
    completed: 0,
    pending: 0,
    inProgress: 0,
  });
  const [activeTab, setActiveTab] = useState("dashboard");
  const [notifications, setNotifications] = useState(3);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const router = useRouter();

  // Fetch user data and reports
  const fetchData = useCallback(async () => {
    if (user) {
      try {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          const isTech = userDoc.data().role === "technician";
          setIsTechnician(isTech);

          if (isTech) {
            // Fetch reports
            const reportsQuery = query(
              collection(db, "inspections"),
              where("technicianId", "==", user.uid)
            );

            const reportsSnapshot = await getDocs(reportsQuery);
            const reportsData = reportsSnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            })) as InspectionReportType[];

            setAllReports(reportsData);

            // Sort by date if available
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
              (r) => r.status === "pending"
            ).length;
            const inProgress = reportsData.filter(
              (r) => r.status === "in-progress"
            ).length;

            setStats({ total, completed, pending, inProgress });
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
  }, [user]);

  useEffect(() => {
    if (!loading) {
      fetchData();
    }
  }, [user, loading, fetchData]);

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

  const formatDate = (timestamp: Timestamp | undefined): string => {
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

  const getStatusBadge = (status: string | undefined): string => {
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

  const getStatusText = (status: string | undefined): string => {
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

  // Chart data for reports by status
  const statusChartData: ChartData = {
    labels: ["Completed", "In Progress", "Pending"],
    datasets: [
      {
        data: [stats.completed, stats.inProgress, stats.pending],
        backgroundColor: [
          "rgba(16, 185, 129, 0.8)",
          "rgba(59, 130, 246, 0.8)",
          "rgba(245, 158, 11, 0.8)",
        ],
        borderColor: [
          "rgb(16, 185, 129)",
          "rgb(59, 130, 246)",
          "rgb(245, 158, 11)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Chart data for monthly reports
  const monthlyReportData: MonthlyReportData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Inspections",
        data: [12, 19, 8, 15, 22, 17, 24],
        backgroundColor: "rgba(59, 130, 246, 0.5)",
        borderColor: "rgb(59, 130, 246)",
        borderWidth: 2,
        tension: 0.3,
        fill: true,
      },
    ],
  };

  const chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
    maintainAspectRatio: false,
  };

  if (loading || isTechnician === null) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
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
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        handleSignOut={handleSignOut}
      />

      {/* Mobile sidebar backdrop */}
      {isMobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={() => setIsMobileSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <Header
          activeTab={activeTab}
          isProfileDropdownOpen={isProfileDropdownOpen}
          setIsProfileDropdownOpen={setIsProfileDropdownOpen}
          notifications={notifications}
          user={user}
          setIsMobileSidebarOpen={setIsMobileSidebarOpen}
        />

        {/* Main Content Area */}
        <main className="p-6">
          {/* Dashboard Tab */}
          {activeTab === "dashboard" && (
            <>
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
              <StatsCards stats={stats} />

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Reports */}
                <div className="lg:col-span-2">
                  <RecentReports
                    recentReports={recentReports}
                    fetchData={fetchData}
                    formatDate={formatDate}
                    getStatusBadge={getStatusBadge}
                    getStatusText={getStatusText}
                  />
                </div>

                {/* Quick Actions & New Inspection */}
                <div className="space-y-6">
                  {/* Quick Actions */}
                  <QuickActions />

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
            </>
          )}

          {/* Analytics Tab */}
          {activeTab === "reports" && (
            <Analytics
              statusChartData={statusChartData}
              monthlyReportData={monthlyReportData}
              chartOptions={chartOptions}
            />
          )}

          {activeTab === "inspections" && (
            <div className="mt-6">
              <InspectionReport />
            </div>
          )}

          {/* Placeholder for other tabs */}
          {(activeTab === "history" ||
            activeTab === "schedule" ||
            activeTab === "profile") && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center">
              <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                {activeTab === "history" && (
                  <FaHistory className="text-2xl text-gray-400" />
                )}
                {activeTab === "schedule" && (
                  <FaCalendarAlt className="text-2xl text-gray-400" />
                )}
                {activeTab === "profile" && (
                  <FaUser className="text-2xl text-gray-400" />
                )}
              </div>
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                {activeTab === "history" && "Inspection History"}
                {activeTab === "schedule" && "Schedule Management"}
                {activeTab === "profile" && "User Profile"}
              </h2>
              <p className="text-gray-500">This section is under development</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
