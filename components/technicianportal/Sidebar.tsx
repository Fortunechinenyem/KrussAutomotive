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
      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-10 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-20 transform transition-transform duration-300 
        ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        {/* Header for mobile */}
        <div className="flex justify-between items-center p-4 border-b md:hidden">
          <h2 className="font-semibold text-lg">Menu</h2>
          <button onClick={() => setIsSidebarOpen(false)}>
            <FaTimes className="text-xl text-gray-600 hover:text-gray-900" />
          </button>
        </div>

        {/* Nav Items */}
        <nav className="p-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`flex items-center gap-3 w-full text-left px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === item.id
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => {
                setActiveTab(item.id);
                setIsSidebarOpen(false);
              }}
            >
              {item.icon}
              {item.label}
            </button>
          ))}

          {/* Sign Out */}
          <button
            onClick={handleSignOut}
            className="flex items-center gap-3 w-full text-left px-4 py-2 rounded-lg font-medium text-red-600 hover:bg-red-50"
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
