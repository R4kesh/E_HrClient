import React, { useState } from "react";

function RiskFactor({ onSubmit }) {
  const riskFactors = [
    "Alcohol Use",
    "Does Not Exercise",
    "Illegal Drug Use",
    "Quit Smoking",
    "Smoking",
    "Obesity",
    "Diabetes",
    "Hypertension",
    "Heart Disease",
    "Depression",
  ];

  const [formData, setFormData] = useState({
    riskFactor: "",
    status: "current",
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Risk Factor Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Risk Factor Dropdown */}
        <label className="block mb-2 font-medium">Risk Factor</label>
        <select
          name="riskFactor"
          value={formData.riskFactor}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4"
          required
        >
          <option value="">Select a Risk Factor</option>
          {riskFactors.map((factor, index) => (
            <option key={index} value={factor}>{factor}</option>
          ))}
        </select>

        {/* Status Radio Buttons */}
        <label className="block mb-2 font-medium">Status</label>
        <div className="mb-4">
          <label className="mr-4">
            <input
              type="radio"
              name="status"
              value="current"
              checked={formData.status === "current"}
              onChange={handleChange}
              className="mr-1"
            />
            Current
          </label>
          <label>
            <input
              type="radio"
              name="status"
              value="historic"
              checked={formData.status === "historic"}
              onChange={handleChange}
              className="mr-1"
            />
            Historic
          </label>
        </div>

        {/* Comments Box */}
        <label className="block mb-2 font-medium">Comments</label>
        <textarea
          name="comments"
          value={formData.comments}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4"
          rows="3"
          placeholder="Add comments..."
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default RiskFactor;
