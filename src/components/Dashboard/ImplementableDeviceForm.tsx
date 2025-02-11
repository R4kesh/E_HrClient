import React, { useState } from "react";

function ImplantableDeviceForm({onSubmit}) {
  const [formData, setFormData] = useState({
    deviceID: "",
    implantedDevice: "",
    implantedSite: "",
    mriSafetyStatus: false,
    lotNumber: "",
    modelRef: "",
    manufacturer: "",
    implantedDate: "",
    serial: "",
    contact: "",
    surgeonSpecialist: "",
    manufacturedDate: "",
    comment: "",
    expirationDate: "",
    status: "Active",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-2">
        <div>
          <label className="block text-sm font-medium">Search Device ID:</label>
          <input
            type="text"
            name="deviceID"
            value={formData.deviceID}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Implanted Device:</label>
          <input
            type="text"
            name="implantedDevice"
            value={formData.implantedDevice}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Implanted Site:</label>
          <input
            type="text"
            name="implantedSite"
            value={formData.implantedSite}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            name="mriSafetyStatus"
            checked={formData.mriSafetyStatus}
            onChange={handleChange}
            className="mr-2"
          />
          <label className="text-sm font-medium">MRI Safety Status (Safe)</label>
        </div>

        <div>
          <label className="block text-sm font-medium">Lot Number:</label>
          <input
            type="text"
            name="lotNumber"
            value={formData.lotNumber}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Model/Ref:</label>
          <input
            type="text"
            name="modelRef"
            value={formData.modelRef}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Manufacturer:</label>
          <input
            type="text"
            name="manufacturer"
            value={formData.manufacturer}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Implanted Date:</label>
          <input
            type="date"
            name="implantedDate"
            value={formData.implantedDate}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Serial:</label>
          <input
            type="text"
            name="serial"
            value={formData.serial}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Contact:</label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Surgeon/Specialist:</label>
          <input
            type="text"
            name="surgeonSpecialist"
            value={formData.surgeonSpecialist}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Manufactured Date:</label>
          <input
            type="date"
            name="manufacturedDate"
            value={formData.manufacturedDate}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
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

        <div>
          <label className="block text-sm font-medium">Expiration Date:</label>
          <input
            type="date"
            name="expirationDate"
            value={formData.expirationDate}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Status:</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        <div className="col-span-2">
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ImplantableDeviceForm;
