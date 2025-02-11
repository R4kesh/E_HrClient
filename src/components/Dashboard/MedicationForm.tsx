import React, { useState } from "react";

function MedicationForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    medicine: "",
    pharmacy: "",
    pharmacyDetails: "",
    status: "",
    statusDetails: "",
    dosage: "",
    dosageDetails: "",
    form: "",
    formDetails: "",
    date: "",
    refills: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-sm font-semibold mb-4">Select Medication</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-2">
          <label className="block">
            <span className="text-gray-700">Choose a medicine</span>
            <input type="text" name="medicine" value={formData.medicine} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
          </label>

          <label className="block">
            <span className="text-gray-700">Pharmacy</span>
            <input type="text" name="pharmacy" value={formData.pharmacy} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
          </label>

          <label className="block">
            <span className="text-gray-700">Pharmacy Details</span>
            <textarea name="pharmacyDetails" value={formData.pharmacyDetails} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
          </label>

          <label className="block">
            <span className="text-gray-700">Status</span>
            <select name="status" value={formData.status} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required>
              <option value="">Select</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </label>

          <label className="block">
            <span className="text-gray-700">Status Details</span>
            <input type="text" name="statusDetails" value={formData.statusDetails} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
          </label>

          <label className="block">
            <span className="text-gray-700">Dosage</span>
            <input type="text" name="dosage" value={formData.dosage} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
          </label>

          <label className="block">
            <span className="text-gray-700">Dosage Details</span>
            <input type="text" name="dosageDetails" value={formData.dosageDetails} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
          </label>

          <label className="block">
            <span className="text-gray-700">Form</span>
            <input type="text" name="form" value={formData.form} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
          </label>

          <label className="block">
            <span className="text-gray-700">Form Details</span>
            <input type="text" name="formDetails" value={formData.formDetails} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
          </label>

          <label className="block">
            <span className="text-gray-700">Date</span>
            <input type="date" name="date" value={formData.date} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
          </label>

          <label className="block">
            <span className="text-gray-700">Refills</span>
            <input type="number" name="refills" value={formData.refills} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
          </label>
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  );
}

export default MedicationForm;