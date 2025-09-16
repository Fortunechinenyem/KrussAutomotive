"use client";
import {
  FaPlusCircle,
  FaHistory,
  FaSearch,
  FaCalendarAlt,
} from "react-icons/fa";

interface QuickActionsProps {
  // Add any props if needed
}

const QuickActions = ({}: QuickActionsProps) => {
  const actions = [
    { icon: FaPlusCircle, label: "New Inspection", color: "blue" as const },
    { icon: FaHistory, label: "View History", color: "gray" as const },
    { icon: FaSearch, label: "Search Reports", color: "gray" as const },
    { icon: FaCalendarAlt, label: "Schedule", color: "gray" as const },
  ];

  const colorClasses = {
    blue: "bg-blue-50 text-blue-700 hover:bg-blue-100",
    gray: "bg-gray-50 text-gray-700 hover:bg-gray-100",
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Quick Actions
      </h2>
      <div className="space-y-3">
        {actions.map((action, index) => {
          const IconComponent = action.icon;
          return (
            <button
              key={index}
              className={`w-full flex items-center gap-3 p-3 text-left rounded-lg transition-colors ${
                colorClasses[action.color]
              }`}
            >
              <IconComponent
                className={
                  action.color === "blue" ? "text-blue-600" : "text-gray-600"
                }
              />
              <span>{action.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;
