import React, { useState } from "react";

function DocumentsForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    provider: "SMITH, TRACY, MD",
    department: "ARCHES MEDICAL CENTER",
    signers: "",
    template: "",
    folder: "Docs",
    docType: "",
    icd: "",
    date: "2025-01-17",
    status: "New",
    name: "",
    description: "",
    documentExt: "TEXT",
    size: "0 bytes",
    hold: false,
    highPriority: false,
    assistant: false,
    confidential: false,
    patientViewable: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">

      <div className="grid grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium">Provider:</label>
          <input
            type="text"
            name="provider"
            value={formData.provider}
            className="w-full mt-1 p-2 border rounded"
            readOnly
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Department:</label>
          <input
            type="text"
            name="department"
            value={formData.department}
            className="w-full mt-1 p-2 border rounded"
            readOnly
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Signers:</label>
          <input
            type="text"
            name="signers"
            value={formData.signers}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Template:</label>
          <input
            type="text"
            name="template"
            value={formData.template}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Folder:</label>
          <input
            type="text"
            name="folder"
            value={formData.folder}
            className="w-full mt-1 p-2 border rounded"
            readOnly
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Doc. Type:</label>
          <input
            type="text"
            name="docType"
            value={formData.docType}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">ICD:</label>
          <input
            type="text"
            name="icd"
            value={formData.icd}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
            placeholder="Click here to add codes"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Status:</label>
          <input
            type="text"
            name="status"
            value={formData.status}
            className="w-full mt-1 p-2 border rounded"
            readOnly
          />
        </div>

        <div className="col-span-2">
          <label className="block text-sm font-medium">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
          />
        </div>

        <div className="col-span-2">
          <label className="block text-sm font-medium">Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
            rows="3"
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium">Document Ext:</label>
          <input
            type="text"
            name="documentExt"
            value={formData.documentExt}
            className="w-full mt-1 p-2 border rounded"
            readOnly
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Size:</label>
          <input
            type="text"
            name="size"
            value={formData.size}
            className="w-full mt-1 p-2 border rounded"
            readOnly
          />
        </div>
      </div>

      {/* Checkbox Options */}
      <div className="mt-4 grid grid-cols-2 gap-4">
        {[
          { name: "hold", label: "Hold" },
          { name: "highPriority", label: "High Priority" },
          { name: "assistant", label: "Assistant" },
          { name: "confidential", label: "Confidential - Only discuss w/patient" },
          { name: "patientViewable", label: "Patient Viewable" },
        ].map((option) => (
          <div key={option.name} className="flex items-center">
            <input
              type="checkbox"
              name={option.name}
              checked={formData[option.name]}
              onChange={handleChange}
              className="mr-2"
            />
            <label className="text-sm">{option.label}</label>
          </div>
        ))}
      </div>

      {/* Submit Button */}
      <button className="mt-6 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
        Submit
      </button>
    </div>
  );
}

export default DocumentsForm;
