
import React, { useState,useEffect } from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations
import { useParams } from "react-router-dom";
import { useTabs } from "../../Context/TabProvider";



const Medication = () => {
  const { id } = useParams(); 
  const { addTab } = useTabs();
  

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

  useEffect(() => {
    addTab({ id: "/medication", name: "Medication", path: `/medication/${id}` });
  }, [addTab]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-green-50 p-10">
      <div className="container mx-auto px-6">
       

        {/* Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Section: Form */}
          <section className="lg:col-span-2 bg-white shadow-xl rounded-lg p-8 border-l-4 border-blue-400 transition duration-300 transform hover:scale-105 hover:shadow-2xl">
            <motion.h2
              className="text-2xl font-bold text-gray-800 mb-6 "
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
              className="text-2xl font-bold text-gray-8000 mb-6 "
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
          <h3 className="text-2xl font-bold text-gray-800 mb-6 ">Medication List</h3>
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
