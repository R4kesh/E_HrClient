import React, { useState } from "react";

function HealthWatcher({ onSubmit }) {
  const [formData, setFormData] = useState({
    provider: "",
    otherProvider: "",
    type: "",
    reminder: "",
    due: "",
    frequency: "",
    days: "",
    text: "",
    changeStatus: "Open",
    patientViewable: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-sm font-semibold mb-4">Health Watcher</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-2">
          <label className="block">
            <span className="text-gray-700">Provider</span>
            <input type="text" name="provider" value={formData.provider} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
          </label>

          <label className="block">
            <span className="text-gray-700">Other Provider</span>
            <input type="text" name="otherProvider" value={formData.otherProvider} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
          </label>

          <label className="block">
            <span className="text-gray-700">Type</span>
            <input type="text" name="type" value={formData.type} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
          </label>

          <label className="block">
            <span className="text-gray-700">Reminder</span>
            <input type="text" name="reminder" value={formData.reminder} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
          </label>

          <label className="block">
            <span className="text-gray-700">Due</span>
            <input type="date" name="due" value={formData.due} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
          </label>

          <label className="block">
            <span className="text-gray-700">Frequency</span>
            <select name="frequency" value={formData.frequency} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required>
              <option value="">Select</option>
              <option value="+3wks">+3 weeks</option>
              <option value="+6wks">+6 weeks</option>
              <option value="+9wks">+9 weeks</option>
              <option value="+12mos">+12 months</option>
            </select>
          </label>

          <label className="block">
            <span className="text-gray-700">Days</span>
            <input type="number" name="days" value={formData.days} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
          </label>

          <label className="block">
            <span className="text-gray-700">Text</span>
            <textarea name="text" value={formData.text} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required></textarea>
          </label>

          <label className="block">
            <span className="text-gray-700">Change Status</span>
            <select name="changeStatus" value={formData.changeStatus} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required>
              <option value="Open">Open</option>
              <option value="Closed">Closed</option>
            </select>
          </label>

          <label className="flex items-center">
            <input type="checkbox" name="patientViewable" checked={formData.patientViewable} onChange={handleChange} className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
            <span className="ml-2 text-gray-700">Patient Viewable</span>
          </label>
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  );
}

export default HealthWatcher;