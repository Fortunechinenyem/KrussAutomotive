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
import {
  FaCar,
  FaCamera,
  FaChevronLeft,
  FaChevronRight,
  FaCheckCircle,
  FaTimes,
  FaUpload,
  FaTrash,
  FaExclamationTriangle,
  FaInfoCircle,
  FaFile,
} from "react-icons/fa";

const InspectionReport = () => {
  const [user] = useAuthState(auth);
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("general");
  const [progress, setProgress] = useState(0);
  const [formData, setFormData] = useState<Partial<Inspection>>({});
  const [validationErrors, setValidationErrors] = useState<
    Record<string, string>
  >({});

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user) return;

    // Validate form
    const errors: Record<string, string> = {};
    if (!formData.vehicleId) errors.vehicleId = "Vehicle ID is required";
    if (!formData.vehicleMake) errors.vehicleMake = "Vehicle make is required";
    if (!formData.vehicleModel)
      errors.vehicleModel = "Vehicle model is required";

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      setActiveSection("general");
      return;
    }

    setIsSubmitting(true);
    setValidationErrors({});

    const defaultItem: InspectionItem = {
      condition: "good",
      notes: "",
    };

    const inspectionData: Omit<Inspection, "id" | "createdAt" | "updatedAt"> = {
      vehicleId: formData.vehicleId || "",
      vehicleMake: formData.vehicleMake || "",
      vehicleModel: formData.vehicleModel || "",
      vehicleYear: formData.vehicleYear || new Date().getFullYear(),
      vin: formData.vin || "",
      technicianId: user.uid,
      status: "draft",
      overallCondition: formData.overallCondition || "good",
      notes: formData.notes || "",
      recommendations: formData.recommendations || "",

      exterior: {
        bodyPanels: {
          condition:
            (formData as any).exterior?.bodyPanels?.condition || "good",
          notes: (formData as any).exterior?.bodyPanels?.notes || "",
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

      // Show success animation
      setProgress(100);
      setTimeout(() => {
        alert("Inspection saved successfully!");
        // Reset form
        setFormData({});
        setFiles([]);
        setProgress(0);
        setActiveSection("general");
      }, 1000);
    } catch (error) {
      console.error("Error saving inspection:", error);
      alert("Failed to save inspection");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles([...files, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear validation error when field is updated
    if (validationErrors[name]) {
      setValidationErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const conditionOptions = [
    {
      value: "excellent",
      label: "Excellent",
      color: "bg-green-500",
      bgColor: "bg-green-50",
      textColor: "text-green-700",
    },
    {
      value: "good",
      label: "Good",
      color: "bg-blue-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
    },
    {
      value: "fair",
      label: "Fair",
      color: "bg-yellow-500",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-700",
    },
    {
      value: "poor",
      label: "Poor",
      color: "bg-red-500",
      bgColor: "bg-red-50",
      textColor: "text-red-700",
    },
  ];

  const sections = [
    { id: "general", label: "General Info", icon: <FaInfoCircle /> },
    { id: "exterior", label: "Exterior", icon: <FaCar /> },
    { id: "interior", label: "Interior", icon: <FaCar /> },
    { id: "mechanical", label: "Mechanical", icon: <FaCar /> },
    { id: "testDrive", label: "Test Drive", icon: <FaCar /> },
    { id: "attachments", label: "Attachments", icon: <FaCamera /> },
  ];

  const currentSectionIndex = sections.findIndex((s) => s.id === activeSection);
  const progressPercentage =
    ((currentSectionIndex + 1) / sections.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header with Progress */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">
                Vehicle Inspection Report
              </h1>
              <p className="text-blue-100">
                Complete the form below to document your vehicle inspection
              </p>
            </div>
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
              <div className="w-8 h-8 bg-white text-blue-600 rounded-full flex items-center justify-center font-bold">
                {currentSectionIndex + 1}
              </div>
              <span className="text-sm">of {sections.length}</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-6">
            <div className="flex justify-between text-sm text-blue-200 mb-2">
              <span>Progress</span>
              <span>{Math.round(progressPercentage)}% Complete</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2">
              <div
                className="bg-green-400 h-2 rounded-full transition-all duration-500 ease-in-out"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="p-6">
          {/* Navigation Tabs */}
          <div className="flex overflow-x-auto pb-4 mb-6 scrollbar-hide">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleSectionChange(section.id)}
                className={`flex flex-col items-center px-4 py-3 mr-2 rounded-xl font-medium transition-all duration-300 min-w-[120px] ${
                  activeSection === section.id
                    ? "bg-blue-100 text-blue-700 shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <span className="text-lg mb-1">{section.icon}</span>
                <span className="text-sm font-medium">{section.label}</span>
                {activeSection === section.id && (
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                )}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* General Information Section */}
            {activeSection === "general" && (
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-5 rounded-xl border border-blue-100">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <FaInfoCircle className="text-blue-600" />
                    General Information
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Vehicle ID *
                      </label>
                      <input
                        name="vehicleId"
                        type="text"
                        required
                        value={formData.vehicleId || ""}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                          validationErrors.vehicleId
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                        placeholder="Enter vehicle identification"
                      />
                      {validationErrors.vehicleId && (
                        <p className="text-red-500 text-sm mt-1">
                          {validationErrors.vehicleId}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        VIN Number
                      </label>
                      <input
                        name="vin"
                        type="text"
                        value={formData.vin || ""}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                        placeholder="Vehicle Identification Number"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Vehicle Make *
                      </label>
                      <input
                        name="vehicleMake"
                        type="text"
                        required
                        value={formData.vehicleMake || ""}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                          validationErrors.vehicleMake
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                        placeholder="e.g., Toyota, Honda"
                      />
                      {validationErrors.vehicleMake && (
                        <p className="text-red-500 text-sm mt-1">
                          {validationErrors.vehicleMake}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Vehicle Model *
                      </label>
                      <input
                        name="vehicleModel"
                        type="text"
                        required
                        value={formData.vehicleModel || ""}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                          validationErrors.vehicleModel
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                        placeholder="e.g., Camry, Civic"
                      />
                      {validationErrors.vehicleModel && (
                        <p className="text-red-500 text-sm mt-1">
                          {validationErrors.vehicleModel}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Vehicle Year
                      </label>
                      <input
                        name="vehicleYear"
                        type="number"
                        min="1900"
                        max={new Date().getFullYear() + 1}
                        value={formData.vehicleYear || ""}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                        placeholder="YYYY"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Overall Condition
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {conditionOptions.map((option) => (
                          <label
                            key={option.value}
                            className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors border ${
                              formData.overallCondition === option.value
                                ? `${option.bgColor} border-${option.color} shadow-inner`
                                : "bg-white border-gray-200 hover:bg-gray-50"
                            }`}
                          >
                            <input
                              type="radio"
                              name="overallCondition"
                              value={option.value}
                              checked={
                                formData.overallCondition === option.value
                              }
                              onChange={handleInputChange}
                              className="sr-only"
                            />
                            <div
                              className={`w-3 h-3 rounded-full ${option.color} mr-2`}
                            ></div>
                            <span
                              className={`text-sm font-medium ${
                                formData.overallCondition === option.value
                                  ? option.textColor
                                  : "text-gray-700"
                              }`}
                            >
                              {option.label}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                      Inspection Notes
                    </h3>
                    <textarea
                      name="notes"
                      rows={4}
                      value={formData.notes || ""}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                      placeholder="Enter any general notes about the inspection..."
                    />
                  </div>

                  <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                      Recommendations
                    </h3>
                    <textarea
                      name="recommendations"
                      rows={4}
                      value={formData.recommendations || ""}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                      placeholder="Enter any recommendations for the vehicle..."
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Other sections would follow the same pattern with enhanced UI */}
            {/* Exterior Section */}
            {activeSection === "exterior" && (
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-5 rounded-xl border border-blue-100">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <FaCar className="text-blue-600" />
                    Exterior Inspection
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="md:col-span-2">
                      <h3 className="text-lg font-medium text-gray-800 mb-3">
                        Body Panels
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Condition
                          </label>
                          <select
                            name="exterior.bodyPanels.condition"
                            defaultValue="good"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                          >
                            {conditionOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Notes
                          </label>
                          <textarea
                            name="exterior.bodyPanels.notes"
                            rows={2}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                            placeholder="Any notes about body panels..."
                          />
                        </div>
                      </div>
                    </div>

                    {["paint", "windows", "lights", "tires"].map((item) => (
                      <div
                        key={item}
                        className="bg-white p-4 rounded-lg border border-gray-200"
                      >
                        <h3 className="text-md font-medium text-gray-800 mb-3 capitalize">
                          {item}
                        </h3>
                        <div className="space-y-3">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Condition
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
                              Notes
                            </label>
                            <textarea
                              name={`exterior.${item}.notes`}
                              rows={2}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder={`Notes about ${item}...`}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Attachments Section */}
            {activeSection === "attachments" && (
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-5 rounded-xl border border-blue-100">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <FaCamera className="text-blue-600" />
                    Attachments
                  </h2>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Upload Inspection Photos & Documents
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-10 pb-8 border-2 border-dashed border-blue-300 rounded-xl bg-blue-50 transition-colors hover:bg-blue-100">
                      <div className="space-y-3 text-center">
                        <FaUpload className="mx-auto h-12 w-12 text-blue-400" />
                        <div className="flex flex-col text-sm text-blue-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none"
                          >
                            <span>Click to upload files</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              className="sr-only"
                              onChange={handleFileChange}
                              multiple
                              accept="image/*,.pdf"
                            />
                          </label>
                          <p className="text-blue-500">or drag and drop</p>
                        </div>
                        <p className="text-xs text-blue-400">
                          PNG, JPG, PDF up to 10MB each
                        </p>
                      </div>
                    </div>
                  </div>

                  {files.length > 0 && (
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-3">
                        Selected Files ({files.length})
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {files.map((file, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg"
                          >
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                <FaFile className="text-blue-600" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="text-sm font-medium text-gray-900 truncate">
                                  {file.name}
                                </p>
                                <p className="text-xs text-gray-500">
                                  {(file.size / 1024 / 1024).toFixed(2)} MB
                                </p>
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeFile(index)}
                              className="text-red-500 hover:text-red-700 transition-colors"
                              title="Remove file"
                            >
                              <FaTimes />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Form Actions */}
            <div className="flex justify-between pt-8 border-t border-gray-200">
              <button
                type="button"
                onClick={() => {
                  if (currentSectionIndex > 0) {
                    handleSectionChange(sections[currentSectionIndex - 1].id);
                  }
                }}
                disabled={currentSectionIndex === 0}
                className={`flex items-center px-5 py-3 rounded-lg font-medium transition-all ${
                  currentSectionIndex === 0
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                <FaChevronLeft className="mr-2" />
                Previous
              </button>

              {currentSectionIndex < sections.length - 1 ? (
                <button
                  type="button"
                  onClick={() => {
                    if (currentSectionIndex < sections.length - 1) {
                      handleSectionChange(sections[currentSectionIndex + 1].id);
                    }
                  }}
                  className="flex items-center px-5 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
                >
                  Next
                  <FaChevronRight className="ml-2" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex items-center px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors shadow-md hover:shadow-lg ${
                    isSubmitting ? "opacity-80 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <FaCheckCircle className="mr-2" />
                      Submit Inspection
                    </>
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
