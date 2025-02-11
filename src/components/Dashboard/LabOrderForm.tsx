import React, { useState } from "react";

function LabOrderForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    orderNumber: "",
    provider: "SMITH, TRACY MD",
    signers: "",
    folder: "Orders",
    orderDate: "2025-01-17",
    billTo: "Provider",
    priority: "Routine",
    department: "",
    facility: "",
    primaryInsurance: "AETNA / U.S. HEALTHCARE",
    primarySubscriberID: "10000044",
    primaryGroupPolicy: "825822-10-0",
    secondaryInsurance: "(None)",
    secondarySubscriberID: "",
    secondaryGroupPolicy: "",
    tertiaryInsurance: "(None)",
    tertiarySubscriberID: "",
    tertiaryGroupPolicy: "",
    dateOfInjury: "",
    ccProviders: "BABBIT - BABBIT, CASEY",
    comment: "",
    hold: false,
    highPriority: false,
    pscHold: false,
    assistant: false,
    confidential: false,
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

      <div className="grid grid-cols-3 gap-2">
        <div>
          <label className="block text-sm font-medium">Order #:</label>
          <input
            type="text"
            name="orderNumber"
            value={formData.orderNumber}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
          />
        </div>

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
          <label className="block text-sm font-medium">Signers:</label>
          <input
            type="text"
            name="signers"
            value={formData.signers}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
            placeholder="Select Signers"
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
          <label className="block text-sm font-medium">Order Date:</label>
          <input
            type="date"
            name="orderDate"
            value={formData.orderDate}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Bill To:</label>
          <select
            name="billTo"
            value={formData.billTo}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
          >
            <option value="Provider">Provider</option>
            <option value="Insurance">Insurance</option>
            <option value="Patient">Patient</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Priority:</label>
          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
          >
            <option value="Routine">Routine</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Department:</label>
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
            placeholder="Select Department"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Facility:</label>
          <input
            type="text"
            name="facility"
            value={formData.facility}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
            placeholder="Select Facility"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Primary Insurance:</label>
          <input
            type="text"
            name="primaryInsurance"
            value={formData.primaryInsurance}
            className="w-full mt-1 p-2 border rounded"
            readOnly
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Subscriber ID/Claim #:</label>
          <input
            type="text"
            name="primarySubscriberID"
            value={formData.primarySubscriberID}
            className="w-full mt-1 p-2 border rounded"
            readOnly
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Group/Policy:</label>
          <input
            type="text"
            name="primaryGroupPolicy"
            value={formData.primaryGroupPolicy}
            className="w-full mt-1 p-2 border rounded"
            readOnly
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Secondary Insurance:</label>
          <input
            type="text"
            name="secondaryInsurance"
            value={formData.secondaryInsurance}
            className="w-full mt-1 p-2 border rounded"
            readOnly
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Subscriber ID/Claim #:</label>
          <input
            type="text"
            name="secondarySubscriberID"
            value={formData.secondarySubscriberID}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Group/Policy:</label>
          <input
            type="text"
            name="secondaryGroupPolicy"
            value={formData.secondaryGroupPolicy}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Tertiary Insurance:</label>
          <input
            type="text"
            name="tertiaryInsurance"
            value={formData.tertiaryInsurance}
            className="w-full mt-1 p-2 border rounded"
            readOnly
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Date of Injury:</label>
          <input
            type="date"
            name="dateOfInjury"
            value={formData.dateOfInjury}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
          />
        </div>

        <div className="col-span-2">
          <label className="block text-sm font-medium">CC Providers:</label>
          <input
            type="text"
            name="ccProviders"
            value={formData.ccProviders}
            className="w-full mt-1 p-2 border rounded"
            readOnly
          />
        </div>

        <div className="col-span-2">
          <label className="block text-sm font-medium">Comment:</label>
          <textarea
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
            rows="3"
          ></textarea>
        </div>
      </div>

      {/* Checkbox Options */}
      <div className="mt-4 grid grid-cols-2 gap-4">
        {["hold", "highPriority", "pscHold", "assistant", "confidential"].map((option) => (
          <div key={option} className="flex items-center">
            <input type="checkbox" name={option} checked={formData[option]} onChange={handleChange} className="mr-2" />
            <label className="text-sm">{option.replace(/([A-Z])/g, " $1")}</label>
          </div>
        ))}
      </div>

      <button className="mt-6 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Submit</button>
    </div>
  );
}

export default LabOrderForm;
