

import React, { useState, useEffect } from "react";
import { FaUser, FaBirthdayCake, FaUserTie, FaMoneyCheckAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { useTabs } from "../../Context/TabProvider";
import axios from "axios";


const FamilyConnections = () => {
  const { id } = useParams(); 
  const { addTab } = useTabs();
  const [form, setForm] = useState({
    name: "",
    age: "",
    relationship: "",
    payer: "Self",
  });

  const [familyConnections, setFamilyConnections] = useState([
    {
      name: "AMBROSE, DUSTIN",
      age: "84y",
      relationship: "SELF",
      payer: "Self",
    },
    {
      name: "AMBROSE, SARA",
      age: "82y",
      relationship: "SPOUSE",
      payer: "Responsible Party",
    },
  ]);

  const [dropdownData, setDropdownData] = useState({
    relationships: [],
    payers: [],
  });

  // Fetch dropdown options from the JSON file
  useEffect(() => {
   


    axios
    .get(`${import.meta.env.VITE_BASE_URL}/assets/json/familyConnection.json`)
    .then((response) => {
      setDropdownData(response.data);
      
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });

    addTab({ id: "/familyConnection", name: "Family Connection", path: `/familyConnection/${id}` });
  }, [addTab, id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.age || !form.relationship) {
      alert("Please fill out all fields.");
      return;
    }
    setFamilyConnections([...familyConnections, form]);
    setForm({ name: "", age: "", relationship: "", payer: "Self" });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Form Section */}
          <motion.div 
            className="lg:col-span-7 bg-white rounded-lg shadow-xl p-10 border-2 border-blue-200 hover:border-blue-400 transition-all"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl font-semibold text-[#002D62] mb-8">Add Family Member</h2>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#1c4b85]">
                  <FaUser className="inline-block text-blue-500 mr-2" />
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleInputChange}
                  placeholder="Enter full name"
                  className="w-full placeholder-[#6786b4] mt-2 px-5 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>

              {/* Age Input */}
              <div>
                <label htmlFor="age" className="block text-sm font-semibold text-[#1c4b85]">
                  <FaBirthdayCake className="inline-block text-blue-500 mr-2" />
                  Age
                </label>
                <input
                  id="age"
                  name="age"
                  type="text"
                  value={form.age}
                  onChange={handleInputChange}
                  placeholder="Enter age (e.g., 84y)"
                  className="w-full placeholder-[#6786b4] mt-2 px-5 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>

              {/* Relationship Dropdown */}
              <div>
                <label htmlFor="relationship" className="block text-sm font-semibold text-[#1c4b85]">
                  <FaUserTie className="inline-block text-blue-500 mr-2" />
                  Relationship
                </label>
                <select
                  id="relationship"
                  name="relationship"
                  value={form.relationship}
                  onChange={handleInputChange}
                  className="w-full mt-2 px-5 text-[#3972c7] py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-all"
                >
                  <option value="">Select Relationship</option>
                  {dropdownData.relationships.map((relationship, index) => (
                    <option key={index} value={relationship}>
                      {relationship}
                    </option>
                  ))}
                </select>
              </div>

              {/* Payer Dropdown */}
              <div>
                <label htmlFor="payer" className="block text-sm font-semibold text-[#1c4b85]">
                  <FaMoneyCheckAlt className="inline-block text-blue-500 mr-2" />
                  Payer
                </label>
                <select
                  id="payer"
                  name="payer"
                  value={form.payer}
                  onChange={handleInputChange}
                  className="w-full text-[#3972c7] mt-2 px-5 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-all"
                >
                  {dropdownData.payers.map((payer, index) => (
                    <option key={index} value={payer}>
                      {payer}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 transition-all"
              >
                Add Member
              </button>
            </form>
          </motion.div>

          {/* Family Connections Listing in Cards */}
          <div className="lg:col-span-5 space-y-8">
            <h2 className="text-2xl font-semibold text-[#002D62] mb-6">Family Connections</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {familyConnections.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 border-2 border-blue-200 hover:border-blue-400 transition-transform transform hover:scale-105"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className=" font-semibold text-blue-600">{member.name}</p>
                      <p className="text-sm text-gray-500">{member.relationship}</p>
                    </div>
                    <FaUser className="text-blue-500 text-4xl" />
                  </div>

                  <div>
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">Age:</span> {member.age}
                    </p>
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">Payer:</span> {member.payer}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyConnections;

