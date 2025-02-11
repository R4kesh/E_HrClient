import React, { useState } from "react";

function ReferralForm({onSubmit}) {
  const statuses = ["Pending", "Approved", "Rejected"];

  const [formData, setFormData] = useState({
    referralReason: "",
    referralNumber: "",
    status: "",
    createdDate: "",
    expireDate: "",
    referredTo: "",
    facility: "",
    diagnosisCode: "",
    authorizationNumber: "",
    visitsMax: "",
    amountMax: "",
    notes: "",
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
    alert("Referral submitted successfully!");
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-4">
        {/* Referral Reason */}
        <div>
          <label className="block text-sm font-medium">Referral Reason:</label>
          <input
            type="text"
            name="referralReason"
            value={formData.referralReason}
            onChange={handleChange}
            placeholder="Enter reason"
            className="w-full mt-1 p-2 border rounded"
            required
          />
        </div>

        {/* Referral Number */}
        <div>
          <label className="block text-sm font-medium">Referral #:</label>
          <input
            type="text"
            name="referralNumber"
            value={formData.referralNumber}
            onChange={handleChange}
            placeholder="Enter referral number"
            className="w-full mt-1 p-2 border rounded"
            required
          />
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm font-medium">Status:</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
            required
          >
            <option value="">Select status</option>
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>

        {/* Created Date */}
        <div>
          <label className="block text-sm font-medium">Created Date:</label>
          <input
            type="date"
            name="createdDate"
            value={formData.createdDate}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
            required
          />
        </div>

        {/* Expire Date */}
        <div>
          <label className="block text-sm font-medium">Expire Date:</label>
          <input
            type="date"
            name="expireDate"
            value={formData.expireDate}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
            required
          />
        </div>

        {/* Referred To */}
        <div>
          <label className="block text-sm font-medium">Referred To:</label>
          <input
            type="text"
            name="referredTo"
            value={formData.referredTo}
            onChange={handleChange}
            placeholder="Doctor's name"
            className="w-full mt-1 p-2 border rounded"
            required
          />
        </div>

        {/* Facility */}
        <div>
          <label className="block text-sm font-medium">Facility:</label>
          <input
            type="text"
            name="facility"
            value={formData.facility}
            onChange={handleChange}
            placeholder="Enter facility name"
            className="w-full mt-1 p-2 border rounded"
            required
          />
        </div>

        {/* Diagnosis Code */}
        <div>
          <label className="block text-sm font-medium">Diagnosis Code:</label>
          <input
            type="text"
            name="diagnosisCode"
            value={formData.diagnosisCode}
            onChange={handleChange}
            placeholder="Enter code"
            className="w-full mt-1 p-2 border rounded"
            required
          />
        </div>

        {/* Authorization Number */}
        <div>
          <label className="block text-sm font-medium">Authorization #:</label>
          <input
            type="text"
            name="authorizationNumber"
            value={formData.authorizationNumber}
            onChange={handleChange}
            placeholder="Enter authorization number"
            className="w-full mt-1 p-2 border rounded"
            required
          />
        </div>

        {/* Visits Max */}
        <div>
          <label className="block text-sm font-medium">Visits Max:</label>
          <input
            type="number"
            name="visitsMax"
            value={formData.visitsMax}
            onChange={handleChange}
            placeholder="Enter maximum visits"
            className="w-full mt-1 p-2 border rounded"
            required
          />
        </div>

        {/* Amount Max */}
        <div>
          <label className="block text-sm font-medium">Amount Max:</label>
          <input
            type="number"
            name="amountMax"
            value={formData.amountMax}
            onChange={handleChange}
            placeholder="Enter maximum amount"
            className="w-full mt-1 p-2 border rounded"
            required
          />
        </div>

        {/* Notes */}
        <div>
          <label className="block text-sm font-medium">Notes:</label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Enter additional details"
            className="w-full mt-1 p-2 border rounded"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Submit Referral
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReferralForm;
