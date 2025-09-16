"use client";
import { FaCar, FaClipboardList, FaPlusCircle, FaSync } from "react-icons/fa";
import { InspectionReport } from "@/types";
import { Timestamp } from "firebase/firestore";

interface RecentReportsProps {
  recentReports: InspectionReport[];
  fetchData: () => void;
  formatDate: (timestamp: Timestamp | undefined) => string;
  getStatusBadge: (status: string | undefined) => string;
  getStatusText: (status: string | undefined) => string;
}

const RecentReports = ({
  recentReports,
  fetchData,
  formatDate,
  getStatusBadge,
  getStatusText,
}: RecentReportsProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100 flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">
          Recent Inspection Reports
        </h2>
        <button
          className="text-blue-600 text-sm font-medium flex items-center gap-1 hover:text-blue-800"
          onClick={fetchData}
        >
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
                className="flex justify-between items-center p-4 border border-gray-100 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer"
                onClick={() => {
                  /* Add view report functionality */
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <FaCar className="text-blue-600" />
                  </div>
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
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadge(
                      report.status
                    )}`}
                  >
                    {getStatusText(report.status)}
                  </span>
                  <button className="text-blue-600 text-sm font-medium hover:text-blue-800">
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
            <button className="mt-4 text-blue-600 font-medium flex items-center gap-1 mx-auto hover:text-blue-800">
              <FaPlusCircle />
              Create your first report
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentReports;
