// import React, { useState } from "react";
// import { FaUser, FaBirthdayCake, FaUserTie, FaMoneyCheckAlt } from "react-icons/fa";

// const FamilyConnections = () => {
//   const [form, setForm] = useState({
//     name: "",
//     age: "",
//     relationship: "",
//     payer: "Self",
//   });

//   const [familyConnections, setFamilyConnections] = useState([
//     {
//       name: "AMBROSE, DUSTIN",
//       age: "84y",
//       time: "11·15·40",
//       relationship: "SELF",
//       payer: "Self",
//     },
//     {
//       name: "AMBROSE, SARA",
//       age: "82y",
//       time: "05·15·42",
//       relationship: "SPOUSE",
//       payer: "Responsible Party",
//     },
//   ]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (!form.name || !form.age || !form.relationship) {
//       alert("Please fill out all fields.");
//       return;
//     }
//     setFamilyConnections([...familyConnections, form]);
//     setForm({ name: "", age: "", relationship: "", payer: "Self" });
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-8">
//       <div className="max-w-5xl mx-auto">
//         {/* Header Section */}
//         <header className="text-center mb-8">
//           <h1 className="text-4xl font-bold text-indigo-700">Family Connections</h1>
//           <p className="text-gray-600 text-sm mt-2">Add and manage your family connections seamlessly.</p>
//         </header>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Form Section */}
//           <div className="bg-white rounded-lg shadow-xl p-8 border-2 border-indigo-200 hover:border-indigo-400 transition-all">
//             <h2 className="text-2xl font-semibold text-indigo-600 mb-6">Add Family Member</h2>
//             <form onSubmit={handleFormSubmit} className="space-y-6">
//               {/* Name Input */}
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   <FaUser className="inline-block text-indigo-500 mr-2" />
//                   Full Name
//                 </label>
//                 <input
//                   id="name"
//                   name="name"
//                   type="text"
//                   value={form.name}
//                   onChange={handleInputChange}
//                   placeholder="Enter full name"
//                   className="w-full mt-2 px-5 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 transition-all"
//                 />
//               </div>

//               {/* Age Input */}
//               <div>
//                 <label
//                   htmlFor="age"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   <FaBirthdayCake className="inline-block text-indigo-500 mr-2" />
//                   Age
//                 </label>
//                 <input
//                   id="age"
//                   name="age"
//                   type="text"
//                   value={form.age}
//                   onChange={handleInputChange}
//                   placeholder="Enter age (e.g., 84y)"
//                   className="w-full mt-2 px-5 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 transition-all"
//                 />
//               </div>

//               {/* Relationship Input */}
//               <div>
//                 <label
//                   htmlFor="relationship"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   <FaUserTie className="inline-block text-indigo-500 mr-2" />
//                   Relationship
//                 </label>
//                 <input
//                   id="relationship"
//                   name="relationship"
//                   type="text"
//                   value={form.relationship}
//                   onChange={handleInputChange}
//                   placeholder="Enter relationship (e.g., SPOUSE)"
//                   className="w-full mt-2 px-5 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 transition-all"
//                 />
//               </div>

//               {/* Payer Dropdown */}
//               <div>
//                 <label
//                   htmlFor="payer"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   <FaMoneyCheckAlt className="inline-block text-indigo-500 mr-2" />
//                   Payer
//                 </label>
//                 <select
//                   id="payer"
//                   name="payer"
//                   value={form.payer}
//                   onChange={handleInputChange}
//                   className="w-full mt-2 px-5 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 transition-all"
//                 >
//                   <option value="Self">Self</option>
//                   <option value="Responsible Party">Responsible Party</option>
//                 </select>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-indigo-600 text-white font-medium py-3 rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 transition-all"
//               >
//                 Add Member
//               </button>
//             </form>
//           </div>

//           {/* Family Connections Listing */}
//           <div className="bg-white rounded-lg shadow-xl p-8 border-2 border-indigo-200 hover:border-indigo-400 transition-all">
//             <h2 className="text-2xl font-semibold text-indigo-600 mb-6">
//               Family Connections
//             </h2>
//             <ul className="divide-y divide-gray-200">
//               {familyConnections.map((member, index) => (
//                 <li
//                   key={index}
//                   className="flex justify-between items-center py-4 hover:bg-indigo-50 transition-all"
//                 >
//                   <div className="flex items-center">
//                     <FaUser className="text-indigo-500 mr-3" />
//                     <div>
//                       <p className="font-medium text-gray-800">{member.name}</p>
//                       <p className="text-sm text-gray-500">{member.relationship}</p>
//                     </div>
//                   </div>
//                   <div className="text-right">
//                     <p className="font-medium text-gray-800">{member.age}</p>
//                     <p className="text-sm text-indigo-500">{member.time}</p>
//                     <p className="text-sm text-gray-600 mt-1">{member.payer}</p>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FamilyConnections;


// import React, { useState } from "react";
// import { FaUser, FaBirthdayCake, FaUserTie, FaMoneyCheckAlt } from "react-icons/fa";

// const FamilyConnections = () => {
//   const [form, setForm] = useState({
//     name: "",
//     age: "",
//     relationship: "",
//     payer: "Self",
//   });

//   const [familyConnections, setFamilyConnections] = useState([
//     {
//       name: "AMBROSE, DUSTIN",
//       age: "84y",
//       time: "11·15·40",
//       relationship: "SELF",
//       payer: "Self",
//     },
//     {
//       name: "AMBROSE, SARA",
//       age: "82y",
//       time: "05·15·42",
//       relationship: "SPOUSE",
//       payer: "Responsible Party",
//     },
//     {
//         name: "AMBROSE, DUSTIN",
//         age: "84y",
//         time: "11·15·40",
//         relationship: "SELF",
//         payer: "Self",
//       },
//       {
//         name: "AMBROSE, SARA",
//         age: "82y",
//         time: "05·15·42",
//         relationship: "SPOUSE",
//         payer: "Responsible Party",
//       },
//   ]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (!form.name || !form.age || !form.relationship) {
//       alert("Please fill out all fields.");
//       return;
//     }
//     setFamilyConnections([...familyConnections, form]);
//     setForm({ name: "", age: "", relationship: "", payer: "Self" });
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-8">
//       <div className="max-w-full mx-auto">
//         {/* Header Section */}
//         <header className="text-center mb-8">
//           <h1 className="text-4xl font-bold text-teal-600">Family Connections</h1>
//           <p className="text-gray-600 text-sm mt-2">Add and manage family member details.</p>
//         </header>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
//           {/* Form Section */}
//           <div className="lg:col-span-7 bg-white rounded-lg shadow-xl p-8 border-2 border-teal-200 hover:border-teal-400 transition-all">
//             <h2 className="text-2xl font-semibold text-teal-600 mb-6">Add Family Member</h2>
//             <form onSubmit={handleFormSubmit} className="space-y-6">
//               {/* Name Input */}
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                   <FaUser className="inline-block text-teal-500 mr-2" />
//                   Full Name
//                 </label>
//                 <input
//                   id="name"
//                   name="name"
//                   type="text"
//                   value={form.name}
//                   onChange={handleInputChange}
//                   placeholder="Enter full name"
//                   className="w-full mt-2 px-5 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 transition-all"
//                 />
//               </div>

//               {/* Age Input */}
//               <div>
//                 <label htmlFor="age" className="block text-sm font-medium text-gray-700">
//                   <FaBirthdayCake className="inline-block text-teal-500 mr-2" />
//                   Age
//                 </label>
//                 <input
//                   id="age"
//                   name="age"
//                   type="text"
//                   value={form.age}
//                   onChange={handleInputChange}
//                   placeholder="Enter age (e.g., 84y)"
//                   className="w-full mt-2 px-5 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 transition-all"
//                 />
//               </div>

//               {/* Relationship Input */}
//               <div>
//                 <label htmlFor="relationship" className="block text-sm font-medium text-gray-700">
//                   <FaUserTie className="inline-block text-teal-500 mr-2" />
//                   Relationship
//                 </label>
//                 <input
//                   id="relationship"
//                   name="relationship"
//                   type="text"
//                   value={form.relationship}
//                   onChange={handleInputChange}
//                   placeholder="Enter relationship (e.g., SPOUSE)"
//                   className="w-full mt-2 px-5 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 transition-all"
//                 />
//               </div>

//               {/* Payer Dropdown */}
//               <div>
//                 <label htmlFor="payer" className="block text-sm font-medium text-gray-700">
//                   <FaMoneyCheckAlt className="inline-block text-teal-500 mr-2" />
//                   Payer
//                 </label>
//                 <select
//                   id="payer"
//                   name="payer"
//                   value={form.payer}
//                   onChange={handleInputChange}
//                   className="w-full mt-2 px-5 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 transition-all"
//                 >
//                   <option value="Self">Self</option>
//                   <option value="Responsible Party">Responsible Party</option>
//                 </select>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-teal-600 text-white font-medium py-3 rounded-lg hover:bg-teal-700 focus:ring-2 focus:ring-teal-500 transition-all"
//               >
//                 Add Member
//               </button>
//             </form>
//           </div>

//           {/* Family Connections Listing in Cards */}
//           <div className="lg:col-span-5 space-y-8">
//             <h2 className="text-2xl font-semibold text-teal-600 mb-6">Family Connections</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
//               {familyConnections.map((member, index) => (
//                 <div key={index} className="bg-white rounded-lg shadow-lg p-6 border-2 border-teal-200 hover:border-teal-400 transition-all">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <p className="text-lg font-semibold text-teal-600">{member.name}</p>
//                       <p className="text-sm text-gray-500">{member.relationship}</p>
//                     </div>
//                     <FaUser className="text-teal-500 text-3xl" />
//                   </div>

//                   <div className="mt-4">
//                     <p className="text-sm text-gray-700">
//                       <span className="font-semibold">Age:</span> {member.age}
//                     </p>
//                     <p className="text-sm text-gray-700">
//                       <span className="font-semibold">Payer:</span> {member.payer}
//                     </p>
//                     <p className="text-sm text-teal-500">
//                       <span className="font-semibold">Time:</span> {member.time}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FamilyConnections;
import React, { useState } from "react";
import { FaUser, FaBirthdayCake, FaUserTie, FaMoneyCheckAlt, FaInfoCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const FamilyConnections = () => {
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

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-full mx-auto">
        {/* Header Section */}
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
