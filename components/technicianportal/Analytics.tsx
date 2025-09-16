// components/TechnicianPortal/AnalyticsDashboard.tsx
"use client";
import { Doughnut, Line } from "react-chartjs-2";
import { ChartData, MonthlyReportData, ChartOptions } from "@/types";

interface AnalyticsDashboardProps {
  statusChartData: ChartData;
  monthlyReportData: MonthlyReportData;
  chartOptions: ChartOptions;
}

const Analytics = ({
  statusChartData,
  monthlyReportData,
  chartOptions,
}: AnalyticsDashboardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Inspection Analytics
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-gray-50 p-4 rounded-xl">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Reports by Status
          </h3>
          <div className="h-64">
            <Doughnut data={statusChartData} options={chartOptions} />
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-xl">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Monthly Reports
          </h3>
          <div className="h-64">
            <Line data={monthlyReportData} options={chartOptions} />
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Performance Metrics
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-blue-700">Average Completion Time</p>
            <p className="text-2xl font-bold text-blue-800">2.4 hrs</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-sm text-green-700">Completion Rate</p>
            <p className="text-2xl font-bold text-green-800">87%</p>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg">
            <p className="text-sm text-amber-700">Pending Actions</p>
            <p className="text-2xl font-bold text-amber-800">5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
