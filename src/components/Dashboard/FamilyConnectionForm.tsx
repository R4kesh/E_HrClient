import React, { useState } from "react";

function FamilyConnectionForm({onSubmit}) {
  const relationships = ["Father", "Mother", "Spouse", "Child", "Sibling", "Grandparent"];
  const payers = ["Self", "Responsible Party"];

  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    relationship: "",
    payer: "Self",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium">Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter full name"
            className="w-full mt-1 p-2 border rounded"
            required
          />
        </div>

        {/* Age */}
        <div>
          <label className="block text-sm font-medium">Age:</label>
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter age (e.g., 84y)"
            className="w-full mt-1 p-2 border rounded"
            required
          />
        </div>

        {/* Relationship */}
        <div>
          <label className="block text-sm font-medium">Relationship:</label>
          <select
            name="relationship"
            value={formData.relationship}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
            required
          >
            <option value="">Select Relationship</option>
            {relationships.map((rel) => (
              <option key={rel} value={rel}>
                {rel}
              </option>
            ))}
          </select>
        </div>

        {/* Payer */}
        <div>
          <label className="block text-sm font-medium">Payer:</label>
          <select
            name="payer"
            value={formData.payer}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
          >
            {payers.map((payer) => (
              <option key={payer} value={payer}>
                {payer}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default FamilyConnectionForm;
