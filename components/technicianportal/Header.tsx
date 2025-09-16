"use client";
import {
  FaBell,
  FaSearch,
  FaUser,
  FaBars,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { User } from "firebase/auth";

interface HeaderProps {
  activeTab: string;
  isProfileDropdownOpen: boolean;
  setIsProfileDropdownOpen: (open: boolean) => void;
  notifications: number;
  user: User | null | undefined;
  setIsMobileSidebarOpen: (open: boolean) => void;
}

const Header = ({
  activeTab,
  isProfileDropdownOpen,
  setIsProfileDropdownOpen,
  notifications,
  user,
  setIsMobileSidebarOpen,
}: HeaderProps) => {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-10">
      <div className="px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden text-gray-500"
            onClick={() => setIsMobileSidebarOpen(true)}
          >
            <FaBars className="text-xl" />
          </button>
          <h1 className="text-xl font-bold text-gray-800">
            {activeTab === "dashboard" && "Dashboard"}
            {activeTab === "inspections" && "Inspections"}
            {activeTab === "history" && "History"}
            {activeTab === "reports" && "Analytics"}
            {activeTab === "schedule" && "Schedule"}
            {activeTab === "profile" && "Profile"}
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <div className="relative flex items-center">
              <FaSearch className="absolute left-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="relative">
            <button className="relative p-2 text-gray-500 hover:text-blue-600 transition-colors rounded-full hover:bg-gray-100">
              <FaBell className="text-xl" />
              {notifications > 0 && (
                <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </button>
          </div>

          <div className="relative">
            <button
              className="flex items-center gap-2 p-1 rounded-lg hover:bg-gray-100"
              onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
            >
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <FaUser className="text-blue-600" />
              </div>
              <div className="text-left hidden md:block">
                <p className="text-sm font-medium text-gray-800">
                  {user?.displayName || "Technician"}
                </p>
                <p className="text-xs text-gray-500">Technician</p>
              </div>
            </button>

            {isProfileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20 border border-gray-200">
                <div className="px-4 py-2 border-b border-gray-100">
                  <p className="text-sm font-medium text-gray-800">
                    {user?.displayName || "Technician"}
                  </p>
                  <p className="text-xs text-gray-500">{user?.email}</p>
                </div>
                <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2">
                  <FaUser className="text-gray-500" />
                  Profile
                </button>
                <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2">
                  <FaCog className="text-gray-500" />
                  Settings
                </button>
                <button
                  onClick={() => {
                    /* Handle sign out */
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                >
                  <FaSignOutAlt className="text-gray-500" />
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
