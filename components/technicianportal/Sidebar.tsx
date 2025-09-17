// components/technicianportal/Sidebar.tsx
"use client";
import {
  FaTimes,
  FaTachometerAlt,
  FaClipboardList,
  FaChartBar,
  FaHistory,
  FaCalendarAlt,
  FaUser,
  FaSignOutAlt,
  FaCar,
} from "react-icons/fa";

interface SidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  handleSignOut: () => void;
}

const Sidebar = ({
  isSidebarOpen,
  setIsSidebarOpen,
  activeTab,
  setActiveTab,
  handleSignOut,
}: SidebarProps) => {
  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: <FaTachometerAlt /> },
    { id: "inspections", label: "Inspections", icon: <FaClipboardList /> },
    { id: "reports", label: "Analytics", icon: <FaChartBar /> },
    { id: "history", label: "History", icon: <FaHistory /> },
    { id: "schedule", label: "Schedule", icon: <FaCalendarAlt /> },
    { id: "profile", label: "Profile", icon: <FaUser /> },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0 lg:static lg:z-auto`}
      >
        {/* Logo/Brand */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <FaCar className="text-white text-xl" />
            </div>
            <h1 className="text-xl font-bold text-gray-800">
              Kruss <span className="text-blue-600">Auto</span>
            </h1>
          </div>

          {/* Close button for mobile */}
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden">
            <FaTimes className="text-xl text-gray-600 hover:text-gray-900" />
          </button>
        </div>

        {/* Nav Items */}
        <nav className="p-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                activeTab === item.id
                  ? "bg-blue-100 text-blue-700 border-r-4 border-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => {
                setActiveTab(item.id);
                setIsSidebarOpen(false); // Close sidebar on mobile after selection
              }}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}

          {/* Sign Out */}
          <button
            onClick={handleSignOut}
            className="flex items-center gap-3 w-full text-left px-4 py-3 rounded-lg font-medium text-red-600 hover:bg-red-50 mt-4"
          >
            <FaSignOutAlt />
            Sign Out
          </button>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
