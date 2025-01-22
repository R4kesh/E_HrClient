
import React, { useState,useEffect } from "react";
import { FaUser, FaBirthdayCake, FaUserTie, FaMoneyCheckAlt, FaInfoCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { useTabs } from "../../Context/TabProvider";

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

  useEffect(() => {
    addTab({ id:"/familyConnection", name: "Family Connection", path: `/familyConnection/${id}`});
  }, [addTab]);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-full mx-auto">
        
        {/* <header className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-teal-600">Family Connections Management</h1>
          <p className="text-lg text-gray-700 mt-4">Manage and update your family details effortlessly and with care.</p>
        </header> */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Form Section */}
          <motion.div 
            className="lg:col-span-7 bg-white rounded-lg shadow-xl p-10 border-2 border-teal-200 hover:border-teal-400 transition-all"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-semibold text-teal-600 mb-8">Add Family Member</h2>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  <FaUser className="inline-block text-teal-500 mr-2" />
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleInputChange}
                  placeholder="Enter full name"
                  className="w-full mt-2 px-5 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 transition-all"
                />
              </div>

              {/* Age Input */}
              <div>
                <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                  <FaBirthdayCake className="inline-block text-teal-500 mr-2" />
                  Age
                </label>
                <input
                  id="age"
                  name="age"
                  type="text"
                  value={form.age}
                  onChange={handleInputChange}
                  placeholder="Enter age (e.g., 84y)"
                  className="w-full mt-2 px-5 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 transition-all"
                />
              </div>

              {/* Relationship Dropdown */}
              <div>
                <label htmlFor="relationship" className="block text-sm font-medium text-gray-700">
                  <FaUserTie className="inline-block text-teal-500 mr-2" />
                  Relationship
                </label>
                <select
                  id="relationship"
                  name="relationship"
                  value={form.relationship}
                  onChange={handleInputChange}
                  className="w-full mt-2 px-5 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 transition-all"
                >
                  <option value="">Select Relationship</option>
                  <option value="Father">Father</option>
                  <option value="Mother">Mother</option>
                  <option value="Spouse">Spouse</option>
                  <option value="Child">Child</option>
                  <option value="Sibling">Sibling</option>
                  <option value="Grandparent">Grandparent</option>
                </select>
              </div>

              {/* Payer Dropdown */}
              <div>
                <label htmlFor="payer" className="block text-sm font-medium text-gray-700">
                  <FaMoneyCheckAlt className="inline-block text-teal-500 mr-2" />
                  Payer
                </label>
                <select
                  id="payer"
                  name="payer"
                  value={form.payer}
                  onChange={handleInputChange}
                  className="w-full mt-2 px-5 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 transition-all"
                >
                  <option value="Self">Self</option>
                  <option value="Responsible Party">Responsible Party</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-teal-600 text-white font-medium py-3 rounded-lg hover:bg-teal-700 focus:ring-2 focus:ring-teal-500 transition-all"
              >
                Add Member
              </button>
            </form>
          </motion.div>

          {/* Family Connections Listing in Cards */}
          <div className="lg:col-span-5 space-y-8">
            <h2 className="text-3xl font-semibold text-teal-600 mb-6">Family Connections</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {familyConnections.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 border-2 border-teal-200 hover:border-teal-400 transition-transform transform hover:scale-105"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className=" font-semibold text-teal-600">{member.name}</p>
                      <p className="text-sm text-gray-500">{member.relationship}</p>
                    </div>
                    <FaUser className="text-teal-500 text-4xl" />
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

        {/* Additional Information Section */}
        {/* <div className="mt-16 text-center">
          <div className="bg-teal-50 rounded-lg p-8 border-2 border-teal-200">
            <h3 className="text-3xl font-semibold text-teal-600">Why Family Connections Matter</h3>
            <p className="text-lg text-gray-700 mt-4">
              Managing family connections in a structured way ensures that everyone in your family is properly accounted for. Keeping accurate records of family members and their details allows for smoother communication and efficient handling of responsibilities, especially in critical scenarios.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Our system helps you maintain a reliable family record, ensuring that your loved ones are always in the loop.
            </p>
            <div className="mt-6">
              <FaInfoCircle className="inline-block text-teal-600 text-4xl" />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default FamilyConnections;
