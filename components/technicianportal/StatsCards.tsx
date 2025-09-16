"use client";
import {
  FaClipboardList,
  FaCheckCircle,
  FaTools,
  FaClock,
} from "react-icons/fa";
import { Stats } from "@/types";

interface StatsCardsProps {
  stats: Stats;
}

const StatsCards = ({ stats }: StatsCardsProps) => {
  const statItems = [
    {
      title: "Total Inspections",
      value: stats.total,
      icon: FaClipboardList,
      color: "blue" as const,
      progress: 100,
    },
    {
      title: "Completed",
      value: stats.completed,
      icon: FaCheckCircle,
      color: "green" as const,
      progress: stats.total > 0 ? (stats.completed / stats.total) * 100 : 0,
    },
    {
      title: "In Progress",
      value: stats.inProgress,
      icon: FaTools,
      color: "blue" as const,
      progress: stats.total > 0 ? (stats.inProgress / stats.total) * 100 : 0,
    },
    {
      title: "Pending",
      value: stats.pending,
      icon: FaClock,
      color: "amber" as const,
      progress: stats.total > 0 ? (stats.pending / stats.total) * 100 : 0,
    },
  ];

  const colorClasses = {
    blue: {
      bg: "bg-blue-100",
      text: "text-blue-600",
      progress: "bg-blue-600",
    },
    green: {
      bg: "bg-green-100",
      text: "text-green-600",
      progress: "bg-green-600",
    },
    amber: {
      bg: "bg-amber-100",
      text: "text-amber-600",
      progress: "bg-amber-600",
    },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {statItems.map((item, index) => {
        const IconComponent = item.icon;
        const colorClass = colorClasses[item.color];

        return (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-transform hover:scale-[1.02]"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">{item.title}</p>
                <p className={`text-3xl font-bold ${colorClass.text}`}>
                  {item.value}
                </p>
              </div>
              <div className={`${colorClass.bg} p-3 rounded-lg`}>
                <IconComponent className={`${colorClass.text} text-xl`} />
              </div>
            </div>
            <div className="mt-4">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`${colorClass.progress} h-2 rounded-full`}
                  style={{ width: `${item.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCards;
