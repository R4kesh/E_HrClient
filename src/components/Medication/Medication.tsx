// import React from "react";

// const Medication = () => {
//   return (
//     <div className="bg-gradient-to-r from-yellow-100 to-blue-100 min-h-screen py-10">
//       <div className="container mx-auto px-6">
//         {/* Page Title */}
//         <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
//           Medication Management
//         </h1>

//         {/* Medication Cards */}
//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {/* Medication Details Card */}
//           <div className="bg-white shadow-md rounded-lg p-6 transform transition hover:scale-105 hover:shadow-lg">
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4">
//               Medication Details
//             </h2>
//             <div className="mb-4">
//               <label className="block text-gray-600 mb-2">Medication Name</label>
//               <input
//                 type="text"
//                 placeholder="Enter medication name"
//                 className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-600 mb-2">Form</label>
//               <select className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
//                 <option value="">Select form</option>
//                 <option value="Tablet">Tablet</option>
//                 <option value="Capsule">Capsule</option>
//                 <option value="Liquid">Liquid</option>
//                 <option value="Injection">Injection</option>
//               </select>
//             </div>
//             <button className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600">
//               Save Details
//             </button>
//           </div>

//           {/* Pharmacy Details Card */}
//           <div className="bg-white shadow-md rounded-lg p-6 transform transition hover:scale-105 hover:shadow-lg">
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4">
//               Pharmacy Details
//             </h2>
//             <div className="mb-4">
//               <label className="block text-gray-600 mb-2">Pharmacy Name</label>
//               <input
//                 type="text"
//                 placeholder="Enter pharmacy name"
//                 className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-600 mb-2">Refills Available</label>
//               <input
//                 type="number"
//                 placeholder="Enter refill count"
//                 className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
//               />
//             </div>
//             <button className="w-full bg-green-500 text-white p-3 rounded-md hover:bg-green-600">
//               Save Pharmacy Info
//             </button>
//           </div>

//           {/* Prescription Details Card */}
//           <div className="bg-white shadow-md rounded-lg p-6 transform transition hover:scale-105 hover:shadow-lg">
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4">
//               Prescription Details
//             </h2>
//             <div className="mb-4">
//               <label className="block text-gray-600 mb-2">Prescription Date</label>
//               <input
//                 type="date"
//                 className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-600 mb-2">Status</label>
//               <select className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400">
//                 <option value="">Select status</option>
//                 <option value="Active">Active</option>
//                 <option value="Inactive">Inactive</option>
//                 <option value="Expired">Expired</option>
//               </select>
//             </div>
//             <button className="w-full bg-indigo-500 text-white p-3 rounded-md hover:bg-indigo-600">
//               Save Prescription
//             </button>
//           </div>
//         </div>

//         {/* Additional Fields */}
//         <div className="mt-10 bg-white shadow-md rounded-lg p-6 transform transition hover:scale-105 hover:shadow-lg">
//           <h2 className="text-2xl font-semibold text-gray-800 mb-4">
//             Additional Information
//           </h2>
//           <div className="grid gap-6 md:grid-cols-2">
//             <div className="mb-4">
//               <label className="block text-gray-600 mb-2">Insurance Plan</label>
//               <select className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400">
//                 <option value="">Select plan</option>
//                 <option value="Plan A">Plan A</option>
//                 <option value="Plan B">Plan B</option>
//                 <option value="No Plan">No Plan</option>
//               </select>
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-600 mb-2">Provider</label>
//               <input
//                 type="text"
//                 placeholder="Search provider"
//                 className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
//               />
//             </div>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-600 mb-2">Notes</label>
//             <textarea
//               rows="4"
//               placeholder="Enter additional notes"
//               className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
//             ></textarea>
//           </div>
//           <button className="w-full bg-red-500 text-white p-3 rounded-md hover:bg-red-600">
//             Save Notes
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Medication;


// import React, { useState } from "react";

// const Medication = () => {
//   const [selectedMedicine, setSelectedMedicine] = useState("");
//   const [medicationData, setMedicationData] = useState({});

//   // Mock medication data (could be fetched from backend or API)
//   const medicines = [
//     { name: "Paracetamol", dosage: "500mg", form: "Tablet", refills: 3, pharmacy: "ABC Pharmacy", status: "Active" },
//     { name: "Ibuprofen", dosage: "200mg", form: "Capsule", refills: 2, pharmacy: "XYZ Pharmacy", status: "Inactive" },
//     { name: "Amoxicillin", dosage: "250mg", form: "Liquid", refills: 1, pharmacy: "DEF Pharmacy", status: "Active" },
//   ];

//   const handleMedicineChange = (event) => {
//     const medicineName = event.target.value;
//     setSelectedMedicine(medicineName);
//     const selected = medicines.find((med) => med.name === medicineName);
//     setMedicationData(selected || {});
//   };

//   return (
//     <div className="bg-gradient-to-r from-blue-100 via-white to-green-100 min-h-screen py-10">
//       <div className="container mx-auto px-6">
//         {/* Page Header */}
//         {/* <header className="mb-10 text-center">
//           <h1 className="text-5xl font-bold text-gray-800 mb-4">Medication Management</h1>
//           <p className="text-lg text-gray-600">
//             Search for medications, refill prescriptions, and manage pharmacy details effortlessly.
//           </p>
//         </header> */}

//         {/* Search Section */}
//         <section className="mb-10">
//           <div className="bg-white shadow-lg rounded-lg p-8">
//             <h2 className="text-3xl font-semibold text-gray-800 mb-6">Search and Manage Medications</h2>
//             <form>
//               <div className="grid gap-6 md:grid-cols-2">
//                 {/* Medicine Dropdown */}
//                 <div>
//                   <label className="block text-gray-600 mb-2">Select Medication</label>
//                   <select
//                     value={selectedMedicine}
//                     onChange={handleMedicineChange}
//                     className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//                   >
//                     <option value="">Choose a medicine</option>
//                     {medicines.map((medicine, index) => (
//                       <option key={index} value={medicine.name}>
//                         {medicine.name}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 {/* Pharmacy Field */}
//                 <div>
//                   <label className="block text-gray-600 mb-2">Pharmacy</label>
//                   <input
//                     type="text"
//                     value={medicationData.pharmacy || ""}
//                     readOnly
//                     placeholder="Pharmacy will autofill"
//                     className="w-full p-3 border rounded-md bg-gray-100 focus:outline-none"
//                   />
//                 </div>
//               </div>

//               <div className="grid gap-6 md:grid-cols-3 mt-6">
//                 {/* Dosage Field */}
//                 <div>
//                   <label className="block text-gray-600 mb-2">Dosage</label>
//                   <input
//                     type="text"
//                     value={medicationData.dosage || ""}
//                     readOnly
//                     placeholder="Dosage will autofill"
//                     className="w-full p-3 border rounded-md bg-gray-100 focus:outline-none"
//                   />
//                 </div>

//                 {/* Form Field */}
//                 <div>
//                   <label className="block text-gray-600 mb-2">Form</label>
//                   <input
//                     type="text"
//                     value={medicationData.form || ""}
//                     readOnly
//                     placeholder="Form will autofill"
//                     className="w-full p-3 border rounded-md bg-gray-100 focus:outline-none"
//                   />
//                 </div>

//                 {/* Refills Field */}
//                 <div>
//                   <label className="block text-gray-600 mb-2">Refills Left</label>
//                   <input
//                     type="number"
//                     value={medicationData.refills || ""}
//                     readOnly
//                     placeholder="Refills will autofill"
//                     className="w-full p-3 border rounded-md bg-gray-100 focus:outline-none"
//                   />
//                 </div>
//               </div>
//             </form>
//           </div>
//         </section>

//         {/* Cards Section */}
//         <section>
//           <h2 className="text-3xl font-semibold text-gray-800 mb-6">Medication Details</h2>
//           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//             {medicines.map((medicine, index) => (
//               <div
//                 key={index}
//                 className="bg-white shadow-md rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-lg"
//               >
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">{medicine.name}</h3>
//                 <p className="text-gray-600">Dosage: {medicine.dosage}</p>
//                 <p className="text-gray-600">Form: {medicine.form}</p>
//                 <p className="text-gray-600">Pharmacy: {medicine.pharmacy}</p>
//                 <p className="text-gray-600">Refills Left: {medicine.refills}</p>
//                 <p className="text-gray-600">Status: {medicine.status}</p>
//                 <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
//                   Refill
//                 </button>
//               </div>
//             ))}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Medication;

import React, { useState } from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations

const Medication = () => {
  const [selectedMedicine, setSelectedMedicine] = useState("");
  const [medicationData, setMedicationData] = useState({});

  // Mock data for medications (replace with real backend data)
  const medicines = [
    {
      name: "Paracetamol",
      dosage: "500mg",
      form: "Tablet",
      refills: 3,
      pharmacy: "ABC Pharmacy",
      status: "Active",
      date: "2025-01-15",
      relatedCards: [
        { title: "Usage", description: "Take 1 tablet every 6 hours." },
        { title: "Warnings", description: "Avoid alcohol during usage." },
      ],
    },
    {
      name: "Ibuprofen",
      dosage: "200mg",
      form: "Capsule",
      refills: 2,
      pharmacy: "XYZ Pharmacy",
      status: "Inactive",
      date: "2025-01-10",
      relatedCards: [
        { title: "Side Effects", description: "May cause drowsiness." },
        { title: "Alternative", description: "Consult a doctor if pain persists." },
      ],
    },
    {
      name: "Amoxicillin",
      dosage: "250mg",
      form: "Liquid",
      refills: 1,
      pharmacy: "DEF Pharmacy",
      status: "Active",
      date: "2025-01-12",
      relatedCards: [{ title: "Storage", description: "Keep refrigerated at 2-8°C." }],
    },
  ];

  const handleMedicineChange = (event) => {
    const medicineName = event.target.value;
    setSelectedMedicine(medicineName);
    const selected = medicines.find((med) => med.name === medicineName);
    setMedicationData(selected || {});
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-green-50 p-10">
      <div className="container mx-auto px-6">
        {/* Header */}
        {/* <header className="mb-12 text-center">
          <motion.h1
            className="text-5xl font-bold text-gray-800 mb-4 font-['Poppins']"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Medication Management
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 font-['Roboto']"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9 }}
          >
            Efficiently manage and track your medications and prescriptions.
          </motion.p>
        </header> */}

        {/* Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Section: Form */}
          <section className="lg:col-span-2 bg-white shadow-xl rounded-lg p-8 border-l-4 border-blue-400 transition duration-300 transform hover:scale-105 hover:shadow-2xl">
            <motion.h2
              className="text-3xl font-semibold text-gray-800 mb-6 font-['Poppins']"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Medication Form
            </motion.h2>
            <form>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Medication Selection */}
                <div>
                  <label className="block text-gray-600 mb-2">Select Medication</label>
                  <select
                    value={selectedMedicine}
                    onChange={handleMedicineChange}
                    className="w-full p-3 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                  >
                    <option value="">Choose a medicine</option>
                    {medicines.map((medicine, index) => (
                      <option key={index} value={medicine.name}>
                        {medicine.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Pharmacy */}
                <div>
                  <label className="block text-gray-600 mb-2">Pharmacy</label>
                  <input
                    type="text"
                    value={medicationData.pharmacy || ""}
                    readOnly
                    placeholder="Pharmacy will autofill"
                    className="w-full p-3 border rounded-md bg-gray-100 focus:outline-none transition duration-300"
                  />
                </div>

                {/* Status */}
                <div>
                  <label className="block text-gray-600 mb-2">Status</label>
                  <input
                    type="text"
                    value={medicationData.status || ""}
                    readOnly
                    placeholder="Status will autofill"
                    className="w-full p-3 border rounded-md bg-gray-100 focus:outline-none transition duration-300"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-3 mt-6">
                {/* Dosage */}
                <div>
                  <label className="block text-gray-600 mb-2">Dosage</label>
                  <input
                    type="text"
                    value={medicationData.dosage || ""}
                    readOnly
                    placeholder="Dosage will autofill"
                    className="w-full p-3 border rounded-md bg-gray-100 focus:outline-none transition duration-300"
                  />
                </div>

                {/* Form */}
                <div>
                  <label className="block text-gray-600 mb-2">Form</label>
                  <input
                    type="text"
                    value={medicationData.form || ""}
                    readOnly
                    placeholder="Form will autofill"
                    className="w-full p-3 border rounded-md bg-gray-100 focus:outline-none transition duration-300"
                  />
                </div>

                {/* Date */}
                <div>
                  <label className="block text-gray-600 mb-2">Date</label>
                  <input
                    type="date"
                    value={medicationData.date || ""}
                    readOnly
                    placeholder="Date will autofill"
                    className="w-full p-3 border rounded-md bg-gray-100 focus:outline-none transition duration-300"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-3 mt-6">
                {/* Refills */}
                <div>
                  <label className="block text-gray-600 mb-2">Refills</label>
                  <input
                    type="number"
                    value={medicationData.refills || ""}
                    readOnly
                    placeholder="Refills will autofill"
                    className="w-full p-3 border rounded-md bg-gray-100 focus:outline-none transition duration-300"
                  />
                </div>
              </div>
            </form>
          </section>

          {/* Right Section: Dynamic Cards */}
          <aside className="bg-white shadow-xl rounded-lg p-8 border-l-4 border-blue-400 mt-10 lg:mt-0 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <motion.h3
              className="text-3xl font-semibold text-gray-800 mb-6 font-['Poppins']"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Medication Details
            </motion.h3>
            <div className="space-y-6">
              {medicationData.relatedCards &&
                medicationData.relatedCards.map((card, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-50 shadow-lg rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl"
                    whileHover={{ scale: 1.05 }}
                  >
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">{card.title}</h4>
                    <p className="text-gray-600">{card.description}</p>
                  </motion.div>
                ))}
            </div>
          </aside>
        </div>

        {/* Table Section: Medication List */}
        <div className="mt-16">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6 font-['Poppins']">Medication List</h3>
          <div className="overflow-x-auto bg-white shadow-xl rounded-lg">
            <table className="min-w-full table-auto">
              <thead className="bg-blue-200">
                <tr>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Medicine</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Dosage</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Form</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Refills</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Status</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Pharmacy</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Date</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-700">
                {medicines.map((medicine, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-blue-50 transition duration-300"
                  >
                    <td className="py-4 px-4">{medicine.name}</td>
                    <td className="py-4 px-4">{medicine.dosage}</td>
                    <td className="py-4 px-4">{medicine.form}</td>
                    <td className="py-4 px-4">{medicine.refills}</td>
                    <td className="py-4 px-4">{medicine.status}</td>
                    <td className="py-4 px-4">{medicine.pharmacy}</td>
                    <td className="py-4 px-4">{medicine.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medication;
