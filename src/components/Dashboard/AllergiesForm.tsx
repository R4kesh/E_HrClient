import React, { useState } from "react";

function AllergiesForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    date: "",
    allergy: "",
    severity: "",
    status: "",
    reaction: "",
    treatment: "",
  });

  const options = {
    allergy: ["Penicillin", "Peanuts", "Latex", "Aspirin", "Sulfa Drugs", "Dairy", "Eggs", "Shellfish"],
    severity: ["Mild", "Mild to Moderate", "Moderate", "Moderate to Severe", "Severe", "Fatal"],
    status: ["Current", "History"],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="max-w-lg mx-auto p-6  bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Allergies Form</h2>
      
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <label className="block">
          <span className="text-gray-700">Date</span>
          <input type="date" name="date" value={formData.date} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </label>

        <label className="block">
          <span className="text-gray-700">Select Allergy</span>
          <select name="allergy" value={formData.allergy} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required>
            <option value="">Select Allergy</option>
            {options.allergy.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="text-gray-700">Severity</span>
          <select name="severity" value={formData.severity} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required>
            <option value="">Select Severity</option>
            {options.severity.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="text-gray-700">Status</span>
          <select name="status" value={formData.status} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required>
            <option value="">Select Status</option>
            {options.status.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="text-gray-700">Reaction</span>
          <input type="text" name="reaction" value={formData.reaction} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </label>

        <label className="block">
          <span className="text-gray-700">Treatment</span>
          <input type="text" name="treatment" value={formData.treatment} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </label>

        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AllergiesForm;
