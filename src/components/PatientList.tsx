import React from "react";

const PatientList = () => {
  const patients = [
    {
      id: 1,
      profilePic: "https://via.placeholder.com/50",
      name: "John Doe",
      dob: "1990-05-15",
      phone: "(123) 456-7890",
      insuranceCarrier: "Blue Cross",
      planName: "Premium Plus",
      pharmacy: "CVS Pharmacy",
    },
    {
      id: 2,
      profilePic: "https://via.placeholder.com/50",
      name: "Jane Smith",
      dob: "1985-08-25",
      phone: "(987) 654-3210",
      insuranceCarrier: "United Health",
      planName: "Basic Plan",
      pharmacy: "Walgreens",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">
        Patient List
      </h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white rounded-lg shadow-lg">
          <thead className="bg-blue-700 text-white">
            <tr>
              <th className="border px-4 py-2 text-left">Profile</th>
              <th className="border px-4 py-2 text-left">Name</th>
              <th className="border px-4 py-2 text-left">DOB</th>
              <th className="border px-4 py-2 text-left">Phone</th>
              <th className="border px-4 py-2 text-left">Insurance Carrier</th>
              <th className="border px-4 py-2 text-left">Plan Name</th>
              <th className="border px-4 py-2 text-left">Pharmacy</th>
              <th className="border px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr
                key={patient.id}
                className="hover:bg-blue-50 transition-colors"
              >
                <td className="border px-4 py-2">
                  <img
                    src={patient.profilePic}
                    alt={`${patient.name}'s profile`}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </td>
                <td className="border px-4 py-2">{patient.name}</td>
                <td className="border px-4 py-2">{patient.dob}</td>
                <td className="border px-4 py-2">{patient.phone}</td>
                <td className="border px-4 py-2">{patient.insuranceCarrier}</td>
                <td className="border px-4 py-2">{patient.planName}</td>
                <td className="border px-4 py-2">{patient.pharmacy}</td>
                <td className="border px-4 py-2 text-center">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                    Chart
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientList;
