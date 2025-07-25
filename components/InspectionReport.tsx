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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user) return;

    const formData = new FormData(e.currentTarget);

    // Create default InspectionItem
    const defaultItem: InspectionItem = {
      condition: "good",
      notes: "",
    };

    // Helper function to get form values with proper typing
    const getFormValue = <T extends string | ConditionStatus>(
      key: string,
      defaultValue: T
    ): T => {
      const value = formData.get(key);
      return value ? (value as T) : defaultValue;
    };

    // Build complete inspection data
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
      // Upload files and create inspection
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
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields for inspection data */}
      <div>
        <label>
          Vehicle ID:
          <input name="vehicleId" type="text" required />
        </label>
      </div>

      <div>
        <label>
          Overall Condition:
          <select name="overallCondition" required defaultValue="good">
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="fair">Fair</option>
            <option value="poor">Poor</option>
          </select>
        </label>
      </div>

      {/* Exterior Section */}
      <fieldset>
        <legend>Exterior</legend>
        <div>
          <label>
            Body Panels Condition:
            <select name="exterior.bodyPanels.condition" defaultValue="good">
              <option value="excellent">Excellent</option>
              <option value="good">Good</option>
              <option value="fair">Fair</option>
              <option value="poor">Poor</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Body Panels Notes:
            <textarea name="exterior.bodyPanels.notes" />
          </label>
        </div>
        {/* Add similar fields for other exterior items */}
      </fieldset>

      {/* Add similar sections for interior, mechanical, and test drive */}

      <div>
        <label>
          Notes:
          <textarea name="notes" />
        </label>
      </div>

      <div>
        <label>
          Recommendations:
          <textarea name="recommendations" />
        </label>
      </div>

      <div>
        <label>
          Upload Files:
          <input
            type="file"
            onChange={(e) =>
              setFiles([...files, ...Array.from(e.target.files || [])])
            }
            multiple
          />
        </label>
      </div>

      <button type="submit">Save Inspection</button>
    </form>
  );
};

export default InspectionReport;
