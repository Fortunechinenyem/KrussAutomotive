"use client";
import { useState, FormEvent } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";
import { createInspection, uploadInspectionFile } from "@/lib/firebase-service";
import {
  Inspection,
  InspectionItem,
  ConditionStatus,
} from "@/lib/firebase-types";

const InspectionReport = () => {
  const [user] = useAuthState(auth);
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>("general");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user) return;

    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);

    const defaultItem: InspectionItem = {
      condition: "good",
      notes: "",
    };

    const getFormValue = <T extends string | ConditionStatus>(
      key: string,
      defaultValue: T
    ): T => {
      const value = formData.get(key);
      return value ? (value as T) : defaultValue;
    };

    const inspectionData: Omit<Inspection, "id" | "createdAt" | "updatedAt"> = {
      vehicleId: getFormValue("vehicleId", ""),
      technicianId: user.uid,
      status: "draft",
      overallCondition: getFormValue<ConditionStatus>(
        "overallCondition",
        "good"
      ),
      notes: getFormValue("notes", ""),
      recommendations: getFormValue("recommendations", ""),

      exterior: {
        bodyPanels: {
          condition: getFormValue<ConditionStatus>(
            "exterior.bodyPanels.condition",
            "good"
          ),
          notes: getFormValue("exterior.bodyPanels.notes", ""),
        },
        paint: defaultItem,
        windows: defaultItem,
        lights: defaultItem,
        tires: defaultItem,
      },

      interior: {
        seats: defaultItem,
        dashboard: defaultItem,
        electronics: defaultItem,
        climateControl: defaultItem,
        odometer: defaultItem,
      },

      mechanical: {
        engine: defaultItem,
        transmission: defaultItem,
        brakes: defaultItem,
        suspension: defaultItem,
        exhaust: defaultItem,
      },

      testDrive: {
        acceleration: defaultItem,
        braking: defaultItem,
        steering: defaultItem,
        unusualNoises: defaultItem,
      },
    };

    try {
      const fileUrls = await Promise.all(
        files.map((file) => uploadInspectionFile(user.uid, file))
      );

      await createInspection({
        ...inspectionData,
        attachments: fileUrls,
      });

      alert("Inspection saved successfully!");
    } catch (error) {
      console.error("Error saving inspection:", error);
      alert("Failed to save inspection");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles([...files, ...Array.from(e.target.files)]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const conditionOptions = [
    { value: "excellent", label: "Excellent", color: "bg-green-500" },
    { value: "good", label: "Good", color: "bg-blue-500" },
    { value: "fair", label: "Fair", color: "bg-yellow-500" },
    { value: "poor", label: "Poor", color: "bg-red-500" },
  ];

  const sections = [
    { id: "general", label: "General Info" },
    { id: "exterior", label: "Exterior" },
    { id: "interior", label: "Interior" },
    { id: "mechanical", label: "Mechanical" },
    { id: "testDrive", label: "Test Drive" },
    { id: "attachments", label: "Attachments" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Vehicle Inspection Report
          </h1>

          {/* Navigation Tabs */}
          <div className="flex overflow-x-auto pb-2 mb-6">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-4 py-2 mr-2 rounded-lg font-medium transition-colors ${
                  activeSection === section.id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* General Information Section */}
            {activeSection === "general" && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-700 border-b pb-2">
                  General Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Vehicle ID
                    </label>
                    <input
                      name="vehicleId"
                      type="text"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Overall Condition
                    </label>
                    <select
                      name="overallCondition"
                      required
                      defaultValue="good"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {conditionOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Notes
                  </label>
                  <textarea
                    name="notes"
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Recommendations
                  </label>
                  <textarea
                    name="recommendations"
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            )}

            {/* Exterior Section */}
            {activeSection === "exterior" && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-700 border-b pb-2">
                  Exterior Inspection
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Body Panels Condition
                    </label>
                    <select
                      name="exterior.bodyPanels.condition"
                      defaultValue="good"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {conditionOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Body Panels Notes
                    </label>
                    <textarea
                      name="exterior.bodyPanels.notes"
                      rows={2}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {["paint", "windows", "lights", "tires"].map((item) => (
                  <div
                    key={item}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {item.charAt(0).toUpperCase() + item.slice(1)} Condition
                      </label>
                      <select
                        name={`exterior.${item}.condition`}
                        defaultValue="good"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        {conditionOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {item.charAt(0).toUpperCase() + item.slice(1)} Notes
                      </label>
                      <textarea
                        name={`exterior.${item}.notes`}
                        rows={2}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Interior Section */}
            {activeSection === "interior" && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-700 border-b pb-2">
                  Interior Inspection
                </h2>
                {[
                  "seats",
                  "dashboard",
                  "electronics",
                  "climateControl",
                  "odometer",
                ].map((item) => (
                  <div
                    key={item}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {item.charAt(0).toUpperCase() + item.slice(1)} Condition
                      </label>
                      <select
                        name={`interior.${item}.condition`}
                        defaultValue="good"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        {conditionOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {item.charAt(0).toUpperCase() + item.slice(1)} Notes
                      </label>
                      <textarea
                        name={`interior.${item}.notes`}
                        rows={2}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Mechanical Section */}
            {activeSection === "mechanical" && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-700 border-b pb-2">
                  Mechanical Inspection
                </h2>
                {[
                  "engine",
                  "transmission",
                  "brakes",
                  "suspension",
                  "exhaust",
                ].map((item) => (
                  <div
                    key={item}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {item.charAt(0).toUpperCase() + item.slice(1)} Condition
                      </label>
                      <select
                        name={`mechanical.${item}.condition`}
                        defaultValue="good"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        {conditionOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {item.charAt(0).toUpperCase() + item.slice(1)} Notes
                      </label>
                      <textarea
                        name={`mechanical.${item}.notes`}
                        rows={2}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Test Drive Section */}
            {activeSection === "testDrive" && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-700 border-b pb-2">
                  Test Drive
                </h2>
                {["acceleration", "braking", "steering", "unusualNoises"].map(
                  (item) => (
                    <div
                      key={item}
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    >
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {item.charAt(0).toUpperCase() + item.slice(1)}{" "}
                          Condition
                        </label>
                        <select
                          name={`testDrive.${item}.condition`}
                          defaultValue="good"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          {conditionOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {item.charAt(0).toUpperCase() + item.slice(1)} Notes
                        </label>
                        <textarea
                          name={`testDrive.${item}.notes`}
                          rows={2}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  )
                )}
              </div>
            )}

            {/* Attachments Section */}
            {activeSection === "attachments" && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-700 border-b pb-2">
                  Attachments
                </h2>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Upload Files
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                        >
                          <span>Upload files</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                            onChange={handleFileChange}
                            multiple
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, PDF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>

                {files.length > 0 && (
                  <div className="mt-4">
                    <h3 className="text-sm font-medium text-gray-700 mb-2">
                      Selected Files
                    </h3>
                    <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                      {files.map((file, index) => (
                        <li
                          key={index}
                          className="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
                        >
                          <div className="w-0 flex-1 flex items-center">
                            <svg
                              className="flex-shrink-0 h-5 w-5 text-gray-400"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="ml-2 flex-1 w-0 truncate">
                              {file.name}
                            </span>
                          </div>
                          <div className="ml-4 flex-shrink-0">
                            <button
                              type="button"
                              onClick={() => removeFile(index)}
                              className="font-medium text-red-600 hover:text-red-500"
                            >
                              Remove
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Form Actions */}
            <div className="flex justify-between pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={() => {
                  const currentIndex = sections.findIndex(
                    (s) => s.id === activeSection
                  );
                  if (currentIndex > 0) {
                    setActiveSection(sections[currentIndex - 1].id);
                  }
                }}
                disabled={activeSection === sections[0].id}
                className={`px-4 py-2 rounded-md font-medium ${
                  activeSection === sections[0].id
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Previous
              </button>

              {activeSection !== sections[sections.length - 1].id ? (
                <button
                  type="button"
                  onClick={() => {
                    const currentIndex = sections.findIndex(
                      (s) => s.id === activeSection
                    );
                    if (currentIndex < sections.length - 1) {
                      setActiveSection(sections[currentIndex + 1].id);
                    }
                  }}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-4 py-2 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    "Submit Inspection"
                  )}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InspectionReport;
