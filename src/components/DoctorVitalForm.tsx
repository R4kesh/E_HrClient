import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTabs } from "../Context/TabProvider";

function DoctorVitalsForm() {
  const { id } = useParams(); // Get patient ID from the route
  console.log("id",id);
  const [submitted, setSubmitted] = useState(false);
  const [extraFields, setExtraFields] = useState([]);
  const { addTab } = useTabs();
  

  const handleAddField = () => {
    setExtraFields((prevFields) => [
      ...prevFields,
      { id: Date.now(), label: "Additional Field", value: "" },
    ]);
  };

  const handleExtraFieldChange = (id, value) => {
    setExtraFields((prevFields) =>
      prevFields.map((field) =>
        field.id === id ? { ...field, value } : field
      )
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(false); // Reset submission state

    // Collect form data
    const vitalsData = {
      weight: parseFloat(document.querySelector('[placeholder="Enter Weight"]').value),
      previousWeight: parseFloat(document.querySelector('[placeholder="Enter Previous Weight"]').value),
      weightChange: parseFloat(document.querySelector('[placeholder="Enter Weight Change"]').value),
      height: parseFloat(document.querySelector('[placeholder="Enter Height"]').value),
      bmi: parseFloat(document.querySelector('[placeholder="Enter BMI"]').value),
      pulse: parseInt(document.querySelector('[placeholder="Enter Pulse"]').value),
      temperature: parseFloat(document.querySelector('[placeholder="Enter Temperature"]').value),
      respirationRate: parseInt(document.querySelector('[placeholder="Enter Respiration Rate"]').value),
      oxygenSaturation: parseFloat(document.querySelector('[placeholder="Enter Oxygen Saturation"]').value),
      oxygenSupplement: document.querySelector('[placeholder="Enter Oxygen Supplement Details"]').value,
      systolicBP: parseInt(document.querySelector('[placeholder="Enter Systolic BP"]').value),
      diastolicBP: parseInt(document.querySelector('[placeholder="Enter Diastolic BP"]').value),
      bpLocation: document.querySelector('select').value,
      additionalFields: extraFields.map((field) => ({
        // label: field.label,
        value: field.value,
      })),
    };

    try {
      // Make POST request using axios
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/patient/vitals/${id}`, vitalsData);

      // Check response status
      if (response.status === 201 || response.status === 200) {
        console.log("Vitals saved successfully:", response.data);
        setSubmitted(true);
      } else {
        console.error("Error saving vitals:", response.statusText);
      }
    } catch (error) {
      console.error(
        "Error submitting vitals:",
        error.response?.data || error.message
      );
    }
  };
  useEffect(() => {
    addTab({ id: "/vitals", name: "vitals", path: `/vitals/${id}` });
  }, [addTab]);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-teal-100 min-h-screen flex flex-col">
      {/* Header */}
      {/* <header className="bg-teal-600 shadow-lg w-full py-4 px-6 flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">E_Hr</h1>
        <nav className="hidden sm:flex space-x-6">
          <a href="#" className="text-white hover:underline">Home</a>
          <a href="#" className="text-white hover:underline">Services</a>
          <a href="#" className="text-white hover:underline">Specialties</a>
          <a href="#" className="text-white hover:underline">Contact</a>
        </nav>
        <button className="bg-white text-teal-600 py-2 px-4 rounded shadow hover:bg-gray-100">
          Log In
        </button>
      </header> */}

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-6 sm:p-10">
        <div className="bg-white shadow-lg rounded-lg p-6 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 text-center mb-6">
            Patient Vitals Form
          </h2>
          {submitted && (
            <div
              className="mb-6 text-green-700 bg-green-100 border border-green-300 px-4 py-3 rounded"
              role="alert"
            >
              Patient vitals saved successfully!
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Section: Patient Info */}
            {/* <section>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                Patient Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-600">First Name</label>
                  <input
                    type="text"
                    className="mt-1 w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter First Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-600">Last Name</label>
                  <input
                    type="text"
                    className="mt-1 w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter Last Name"
                    required
                  />
                </div>
              </div>
            </section> */}

            {/* Section: Vitals */}
            <section>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                Vitals Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <label className="block text-gray-600">Weight (kg)</label>
                  <input
                    type="number"
                    step="0.1"
                    className="mt-1 w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter Weight"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-600">Previous Weight (kg)</label>
                  <input
                    type="number"
                    step="0.1"
                    className="mt-1 w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter Previous Weight"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-600">Weight Change (kg)</label>
                  <input
                    type="number"
                    step="0.1"
                    className="mt-1 w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter Weight Change"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-600">Height (cm)</label>
                  <input
                    type="number"
                    step="0.1"
                    className="mt-1 w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter Height"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-600">BMI</label>
                  <input
                    type="number"
                    step="0.1"
                    className="mt-1 w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter BMI"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-600">Pulse (bpm)</label>
                  <input
                    type="number"
                    className="mt-1 w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter Pulse"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-600">Temperature (°C)</label>
                  <input
                    type="number"
                    step="0.1"
                    className="mt-1 w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter Temperature"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-600">Respiration (breaths/min)</label>
                  <input
                    type="number"
                    className="mt-1 w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter Respiration Rate"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-600">Oxygen Saturation (%)</label>
                  <input
                    type="number"
                    step="0.1"
                    className="mt-1 w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter Oxygen Saturation"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-600">Oxygen Supplement</label>
                  <input
                    type="text"
                    className="mt-1 w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter Oxygen Supplement Details"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-600">Systolic BP</label>
                  <input
                    type="number"
                    className="mt-1 w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter Systolic BP"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-600">Diastolic BP</label>
                  <input
                    type="number"
                    className="mt-1 w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter Diastolic BP"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-600">Location (Arm Left/Right)</label>
                  <select
                    className="mt-1 w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-teal-500"
                    required
                  >
                    <option value="">Select Location</option>
                    <option value="Left Arm">Left Arm</option>
                    <option value="Right Arm">Right Arm</option>
                  </select>
                </div>
              </div>
            </section>

            {/* Additional Fields */}
            {extraFields.map((field) => (
              <div key={field.id} className="mt-4">
                <label className="block text-gray-600">{field.label}</label>
                <input
                  type="text"
                  value={field.value}
                  onChange={(e) => handleExtraFieldChange(field.id, e.target.value)}
                  className="mt-1 w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter Value"
                />
              </div>
            ))}

            {/* Add More Button */}
            <div className="text-center">
              <button
                type="button"
                onClick={handleAddField}
                className="bg-gray-200 text-teal-600 font-medium py-2 px-4 rounded-md shadow-md hover:bg-gray-300"
              >
                Add More Field
              </button>
            </div>

            {/* Submit Button */}
            <div className="text-center mt-6">
              <button
                type="submit"
                className="bg-teal-600 text-white font-medium py-3 px-6 rounded-md shadow-lg hover:bg-teal-700 transition-transform transform hover:scale-105"
              >
                Save Vitals
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-teal-600 py-6 text-center text-white text-sm sm:text-base">
        © {new Date().getFullYear()} MyCarePedia. All rights reserved.
      </footer>
    </div>
  );
}

export default DoctorVitalsForm;
