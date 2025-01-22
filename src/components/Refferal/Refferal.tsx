import React, { useState, useRef } from "react";

const Referral = () => {
  const [selectedRow, setSelectedRow] = useState(null);
  const detailsCardRef = useRef(null);

  const statuses = [
    "Auth required",
    "Expired",
    "No longer use",
    "Ready for use",
    "Referral request",
    "Appeal",
    "Approved",
    "Closed",
    "Denied",
    "Pending appointment",
  ];

  const staticData = [
    {
      referralReason: "Consultation",
      referralNumber: "R12345",
      status: "Approved",
      createdDate: "2025-01-15",
      expireDate: "2025-02-15",
      referredTo: "Dr. John Doe",
      facility: "City Hospital",
      diagnosisCode: "D123",
      authorizationNumber: "A456",
      visitsMax: 5,
      amountMax: 1000,
      notes: "Urgent referral for immediate attention.",
    },
    {
      referralReason: "Surgery",
      referralNumber: "R54321",
      status: "Pending",
      createdDate: "2025-01-10",
      expireDate: "2025-03-10",
      referredTo: "Dr. Jane Smith",
      facility: "Health Care Center",
      diagnosisCode: "S456",
      authorizationNumber: "A789",
      visitsMax: 2,
      amountMax: 5000,
      notes: "Referral pending due to missing documents.",
    },
  ];

  const handleViewMore = (row) => {
    setSelectedRow(row);
    setTimeout(() => {
      detailsCardRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-5 px-4 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Form Section */}
        <div className="w-full lg:w-2/3 bg-white shadow-lg rounded-lg p-6 border border-gray-200">
          <h2 className="text-2xl font-semibold text-blue-800 mb-6 border-b pb-2">
            Create Referral
          </h2>
          <form className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InputField label="Referral Reason" placeholder="Enter reason" />
            <InputField label="Referral #" placeholder="Enter referral number" />
            <DropdownField label="Status" options={statuses} />
            <InputField label="Created Date" type="date" />
            <InputField label="Expire Date" type="date" />
            <InputField label="Referred To" placeholder="Doctor's name" />
            <InputField label="Facility" placeholder="Enter facility name" />
            <InputField label="Diagnosis Code" placeholder="Enter code" />
            <InputField label="Authorization #" placeholder="Enter authorization number" />
            <InputField label="Visits Max" placeholder="Enter maximum visits" />
            <InputField label="Amount Max" placeholder="Enter maximum amount" />
            <TextareaField label="Notes" placeholder="Enter additional details" />
            <div className="col-span-3 text-right">
              <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 shadow-md">
                Submit Referral
              </button>
            </div>
          </form>
        </div>

        {/* Details Card */}
        <div
          ref={detailsCardRef}
          className={`w-full lg:w-1/3 transition-all duration-500 ${
            selectedRow ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
          }`}
        >
          {selectedRow && (
            <DetailsCard data={selectedRow} onClose={() => setSelectedRow(null)} />
          )}
        </div>
      </div>

      {/* Table Section */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold text-blue-800 mb-4">Referral Table</h3>
        <div className="overflow-x-auto bg-white shadow-lg rounded-lg p-4 border border-gray-200">
          <table className="w-full table-auto border-collapse border border-gray-300">
            <thead className="bg-blue-50">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left text-gray-800">Referral #</th>
                <th className="border border-gray-300 px-4 py-2 text-left text-gray-800">Reason</th>
                <th className="border border-gray-300 px-4 py-2 text-left text-gray-800">Status</th>
                <th className="border border-gray-300 px-4 py-2 text-left text-gray-800">Actions</th>
              </tr>
            </thead>
            <tbody>
              {staticData.map((row, index) => (
                <tr key={index} className="hover:bg-blue-50">
                  <td className="border border-gray-300 px-4 py-2 text-gray-700">{row.referralNumber}</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-700">{row.referralReason}</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-700">{row.status}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      className="px-4 py-1 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-100"
                      onClick={() => handleViewMore(row)}
                    >
                      View More
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

/* Components */
const InputField = ({ label, type = "text", placeholder }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input
      type={type}
      className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300"
      placeholder={placeholder}
    />
  </div>
);

const DropdownField = ({ label, options }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <select className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300">
      <option value="">Select {label.toLowerCase()}</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

const TextareaField = ({ label, placeholder }) => (
  <div className="col-span-3">
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <textarea
      className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300"
      rows={3}
      placeholder={placeholder}
    />
  </div>
);

const DetailsCard = ({ data, onClose }) => (
  <div className="bg-gradient-to-br  from-blue-50 via-blue-100 to-blue-200 shadow-xl rounded-xl p-4 relative transition-transform duration-500 hover:scale-105 border border-gray-200">
    <button
      onClick={onClose}
      className="absolute top-4 right-4 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-blue-700 transition duration-300"
    >
      &#10005;
    </button>
    <h4 className="text-2xl font-bold text-blue-800 mb-6 text-center">
      Referral Details
    </h4>
    <div className="grid grid-cols-2 gap-4">
      {Object.entries(data).map(([key, value]) => (
        <div key={key} className="bg-white rounded-md p-4 shadow-md border border-gray-200">
          <span className="block text-xs font-medium text-gray-500 capitalize">
            {key.replace(/([A-Z])/g, " $1")}
          </span>
          <p className="text-gray-700 font-semibold">{value}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Referral;
