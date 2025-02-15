// import React, { useState, useEffect } from 'react';
// import { Search, Plus, AlertCircle, X } from 'lucide-react';
// import { useParams } from "react-router-dom";
// import { useTabs } from '../../Context/TabProvider';
// import axios from 'axios';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// import { motion, AnimatePresence } from 'framer-motion';

// const Allergies = () => {
//   const { addTab } = useTabs();
//   const { id } = useParams(); 
//   const [formData, setFormData] = useState({
//     reviewed: false,
//     nkda: false,
//     date: '',
//     allergy: '',
//     severity: '',
//     status: '',
//     reaction: '',
//     treatment: ''
//   });

//   const [dropdownData, setDropdownData] = useState({
//     fields: {},
//     options: {}
//   });

//   const [loading, setLoading] = useState(true);  // Track loading state
//   const [error, setError] = useState(null);  // Track any errors

//   const mockAllergies = [
//     {
//       allergy: "Penicillin",
//       severity: "Moderate",
//       date: "2024-01-15",
//       status: "Current",
//       reaction: "Skin rash, itching",
//       treatment: "Antihistamines"
//     },
//     {
//       allergy: "Peanuts",
//       severity: "Severe",
//       date: "2024-01-10",
//       status: "Current",
//       reaction: "Difficulty breathing",
//       treatment: "Epinephrine auto-injector"
//     }
//   ];

//   // Fetch the dropdown data using Axios
//   useEffect(() => {
//     axios.get(`${import.meta.env.VITE_BASE_URL}/assets/json/allergies.json`)  // Replace with your actual file path
//       .then(response => {
//         setDropdownData(response.data);  // Set the response data to state
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error('Error fetching dropdown data:', err);
//         setError('Failed to load dropdown data');
//         setLoading(false);
//       });

//     addTab({ id: "/allergies", name: "Allergies", path:`/allergies/${id}` });
//   }, [addTab, id]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   const handleDragEnd = (result) => {
//     if (!result.destination) return;

//     const updatedAllergies = Array.from(allergies);
//     const [reorderedItem] = updatedAllergies.splice(result.source.index, 1);
//     updatedAllergies.splice(result.destination.index, 0, reorderedItem);

//     setAllergies(updatedAllergies);
//   };

//   const handleRemove = (id) => {
//     setAllergies(allergies.filter(allergy => allergy.id !== id));
//   };


//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
//       <div className="max-w-7xl mx-auto p-6">
//         <div className="flex items-center justify-between mb-8">
//           <div>
//             <h1 className="text-2xl font-bold  mb-2  text-[#002D62]">Allergy Management</h1>
//             <p className="text-gray-600">Track and manage patient allergies</p>
//           </div>
//           <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-lg">
//             <AlertCircle className="text-blue-600 w-5 h-5" />
//             <span className="text-sm text-[#1c4b85] font-medium">Active Allergies: {mockAllergies.length}</span>
//           </div>
//         </div>
        
//         <div className="flex gap-8 flex-col lg:flex-row">
//           {/* Form Section */}
//           <div className="lg:w-[70%]">
//             <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
//               <div className="border-b border-gray-100 bg-gray-50 px-6 py-4">
//                 <h2 className="text-lg font-semibold text-[#1c4b85]">Add New Allergy</h2>
//               </div>
              
//               <div className="p-6">
//                 <div className="flex gap-6 mb-8 bg-blue-50 p-4 rounded-lg">
//                   <label className="flex items-center space-x-2 cursor-pointer">
//                     <input
//                       type="checkbox"
//                       className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
//                       checked={formData.reviewed}
//                       onChange={(e) => setFormData({...formData, reviewed: e.target.checked})}
//                     />
//                     <span className="text-sm font-medium text-[#1c4b85]">Reviewed</span>
//                   </label>
//                   <label className="flex items-center space-x-2 cursor-pointer">
//                     <input
//                       type="checkbox"
//                       className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
//                       checked={formData.nkda}
//                       onChange={(e) => setFormData({...formData, nkda: e.target.checked})}
//                     />
//                     <span className="text-sm font-medium text-[#1c4b85]">NKDA</span>
//                   </label>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                   <div className="space-y-1.5">
//                     <label className="block text-sm font-semibold text-[#1c4b85]">
//                       {dropdownData.fields.date}
//                     </label>
//                     <input
//                       type="date"
//                       className="w-full rounded-lg  text-[#3972c7] border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors"
//                       value={formData.date}
//                       onChange={(e) => setFormData({...formData, date: e.target.value})}
//                     />
//                   </div>

//                   <div className="space-y-1.5">
//                     <label className="block text-sm font-semibold text-[#1c4b85]">
//                       {dropdownData.fields.allergy}
//                     </label>
//                     <div className="relative">
//                       <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
//                       <select
//                         className="w-full pl-10 py-2 text-[#3972c7] rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors"
//                         value={formData.allergy}
//                         onChange={(e) => setFormData({...formData, allergy: e.target.value})}
//                       >
//                         <option value="">Select Allergy</option>
//                         {dropdownData.options.allergy.map((option) => (
//                           <option key={option} value={option}>{option}</option>
//                         ))}
//                       </select>
//                     </div>
//                   </div>

//                   <div className="space-y-1.5">
//                     <label className="block text-sm font-semibold text-[#1c4b85]">
//                       {dropdownData.fields.severity}
//                     </label>
//                     <select
//                       className="w-full rounded-lg text-[#3972c7] border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors"
//                       value={formData.severity}
//                       onChange={(e) => setFormData({...formData, severity: e.target.value})}
//                     >
//                       <option value="">Select Severity</option>
//                       {dropdownData.options.severity.map((option) => (
//                         <option key={option} value={option}>{option}</option>
//                       ))}
//                     </select>
//                   </div>

//                   <div className="space-y-1.5">
//                     <label className="block text-sm font-semibold text-[#1c4b85]">
//                       {dropdownData.fields.status}
//                     </label>
//                     <select
//                       className="w-full rounded-lg text-[#3972c7] border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors"
//                       value={formData.status}
//                       onChange={(e) => setFormData({...formData, status: e.target.value})}
//                     >
//                       <option value="">Select Status</option>
//                       {dropdownData.options.status.map((option) => (
//                         <option key={option} value={option}>{option}</option>
//                       ))}
//                     </select>
//                   </div>
//                 </div>

//                 <div className="space-y-6 mb-8">
//                   <div className="space-y-1.5">
//                     <label className="block text-sm font-semibold text-[#1c4b85]">
//                       {dropdownData.fields.reaction}
//                     </label>
//                     <input
//                       type="text"
//                       className="w-full  py-2 placeholder-[#6786b4] border rounded text-[#3972c7] border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors"
//                       placeholder="Describe the allergic reaction"
//                       value={formData.reaction}
//                       onChange={(e) => setFormData({...formData, reaction: e.target.value})}
//                     />
//                   </div>

//                   <div className="space-y-1.5">
//                     <label className="block text-sm font-semibold text-[#1c4b85]">
//                       {dropdownData.fields.treatment}
//                     </label>
//                     <input
//                       type="text"
//                       className="w-full  py-2 border rounded placeholder-[#6786b4] text-[#3972c7] border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors"
//                       placeholder="Specify treatment protocol"
//                       value={formData.treatment}
//                       onChange={(e) => setFormData({...formData, treatment: e.target.value})}
//                     />
//                   </div>
//                 </div>

//                 <button className="flex items-center justify-center text-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium">
//                   <Plus className="w-5 h-5 mr-2" />
//                   Add Allergy Record
//                 </button>
//               </div>
//             </div>
//           </div>


//           {/* Cards Section */}
//           <div className="lg:w-[30%] space-y-4">
//             <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-4">
//               <h2 className="text-lg font-semibold text-[#1c4b85] mb-2">Active Allergies</h2>
//               <p className="text-sm text-gray-600">Current allergy records</p>
//             </div>
            
//             {mockAllergies.map((allergy, index) => (
//               <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
//                 <div className="flex justify-between items-start mb-4">
//                   <h3 className="font-semibold text-[#1c4b85] text-lg">{allergy.allergy}</h3>
//                   <span className={`px-3 py-1 rounded-full text-sm font-medium ${
//                     allergy.severity === 'Severe' 
//                       ? 'bg-red-100 text-red-800' 
//                       : allergy.severity === 'Moderate'
//                       ? 'bg-yellow-100 text-yellow-800'
//                       : 'bg-green-100 text-green-800'
//                   }`}>
//                     {allergy.severity}
//                   </span>
//                 </div>
//                 <div className="space-y-2 text-sm">
//                   <div className="flex items-center text-gray-600">
//                     <span className="font-medium mr-2">Date:</span>
//                     {allergy.date}
//                   </div>
//                   <div className="flex items-center text-gray-600">
//                     <span className="font-medium mr-2">Status:</span>
//                     {allergy.status}
//                   </div>
//                   <div className="flex items-center text-gray-600">
//                     <span className="font-medium mr-2">Reaction:</span>
//                     {allergy.reaction}
//                   </div>
//                   <div className="flex items-center text-gray-600">
//                     <span className="font-medium mr-2">Treatment:</span>
//                     {allergy.treatment}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>




//         </div>
//       </div>
//     </div>
//   );
// };

// export default Allergies;


import React, { useState, useEffect } from 'react';
import { Search, Plus, AlertCircle, X } from 'lucide-react';
import { useParams } from "react-router-dom";
import { useTabs } from '../../Context/TabProvider';
import axios from 'axios';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { motion, AnimatePresence } from 'framer-motion';

const Allergies = () => {
  const { addTab } = useTabs();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    reviewed: false,
    nkda: false,
    date: '',
    allergy: '',
    severity: '',
    status: '',
    reaction: '',
    treatment: ''
  });

  const [dropdownData, setDropdownData] = useState({
    fields: {},
    options: {}
  });

  const [loading, setLoading] = useState(true);  // Track loading state
  const [error, setError] = useState(null);  // Track any errors

  const [allergies, setAllergies] = useState([
    {
      id: '1',
      allergy: "Penicillin",
      severity: "Moderate",
      date: "2024-01-15",
      status: "Current",
      reaction: "Skin rash, itching",
      treatment: "Antihistamines"
    },
    {
      id: '2',
      allergy: "Peanuts",
      severity: "Severe",
      date: "2024-01-10",
      status: "Current",
      reaction: "Difficulty breathing",
      treatment: "Epinephrine auto-injector"
    }
  ]);

  // Fetch the dropdown data using Axios
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BASE_URL}/assets/json/allergies.json`)  // Replace with your actual file path
      .then(response => {
        setDropdownData(response.data);  // Set the response data to state
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching dropdown data:', err);
        setError('Failed to load dropdown data');
        setLoading(false);
      });

    addTab({ id: "/allergies", name: "Allergies", path: `/allergies/${id}` });
  }, [addTab, id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const handleDragEnd = (result) => {
    if (!result.destination) return; // Dropped outside the list

    const updatedAllergies = Array.from(allergies);
    const [reorderedItem] = updatedAllergies.splice(result.source.index, 1);
    updatedAllergies.splice(result.destination.index, 0, reorderedItem);

    setAllergies(updatedAllergies);
  };

  const handleRemove = (id) => {
    setAllergies(allergies.filter(allergy => allergy.id !== id));
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5F5F5' }}>

      <div className="max-w-7xl mx-auto p-6">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-2xl font-bold mb-2 text-formHeading_1">Allergy Management</h1>
            {/* <p className="text-gray-600">Track and manage patient allergies</p> */}
          </div>
          <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-lg">
            <AlertCircle className="text-blue-600 w-5 h-5" />
            <span className="text-sm text-[#1c4b85] font-medium">Active Allergies: {allergies.length}</span>
          </div>
        </div>

        <div className="flex gap-8 flex-col lg:flex-row">
          {/* Form Section */}
          <div className="lg:w-[70%]">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="border-b border-gray-100 bg-gray-50 px-6 py-4">
                <h2 className="text-lg font-semibold text-[#1c4b85]">Add New Allergy</h2>
              </div>

              <div className="p-6">
                <div className="flex gap-6 mb-8 bg-blue-50 p-4 rounded-lg">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      checked={formData.reviewed}
                      onChange={(e) => setFormData({ ...formData, reviewed: e.target.checked })}
                    />
                    <span className="text-sm font-medium text-[#1c4b85]">Reviewed</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      checked={formData.nkda}
                      onChange={(e) => setFormData({ ...formData, nkda: e.target.checked })}
                    />
                    <span className="text-sm font-medium text-[#1c4b85]">NKDA</span>
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-1.5">
                    <label className="block text-sm font-semibold text-[#1c4b85]">
                      {dropdownData.fields.date}
                    </label>
                    <input
                      type="date"
                      className="w-full rounded-lg text-[#3972c7] border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-sm font-semibold text-[#1c4b85]">
                      {dropdownData.fields.allergy}
                    </label>
                    <div className="relative">
                      <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      <select
                        className="w-full pl-10 py-2 text-[#3972c7] rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors"
                        value={formData.allergy}
                        onChange={(e) => setFormData({ ...formData, allergy: e.target.value })}
                      >
                        <option value="">Select Allergy</option>
                        {dropdownData.options.allergy.map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-sm font-semibold text-[#1c4b85]">
                      {dropdownData.fields.severity}
                    </label>
                    <select
                      className="w-full rounded-lg text-[#3972c7] border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors"
                      value={formData.severity}
                      onChange={(e) => setFormData({ ...formData, severity: e.target.value })}
                    >
                      <option value="">Select Severity</option>
                      {dropdownData.options.severity.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-sm font-semibold text-[#1c4b85]">
                      {dropdownData.fields.status}
                    </label>
                    <select
                      className="w-full rounded-lg text-[#3972c7] border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors"
                      value={formData.status}
                      onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    >
                      <option value="">Select Status</option>
                      {dropdownData.options.status.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-6 mb-8">
                  <div className="space-y-1.5">
                    <label className="block text-sm font-semibold text-[#1c4b85]">
                      {dropdownData.fields.reaction}
                    </label>
                    <input
                      type="text"
                      className="w-full py-2 placeholder-[#6786b4] border rounded text-[#3972c7] border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors"
                      placeholder="Describe the allergic reaction"
                      value={formData.reaction}
                      onChange={(e) => setFormData({ ...formData, reaction: e.target.value })}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-sm font-semibold text-[#1c4b85]">
                      {dropdownData.fields.treatment}
                    </label>
                    <input
                      type="text"
                      className="w-full py-2 border rounded placeholder-[#6786b4] text-[#3972c7] border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors"
                      placeholder="Specify treatment protocol"
                      value={formData.treatment}
                      onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                    />
                  </div>
                </div>

                <button className="flex items-center justify-center text-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium">
                  <Plus className="w-5 h-5 mr-2" />
                  Add Allergy Record
                </button>
              </div>
            </div>
          </div>

          {/* Cards Section */}
          <div className="lg:w-[30%] space-y-4">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-4">
              <h2 className="text-lg font-semibold text-[#1c4b85] mb-2">Active Allergies</h2>
              <p className="text-sm text-gray-600">Current allergy records</p>
            </div>

            <DragDropContext onDragEnd={handleDragEnd}>
              <Droppable droppableId="allergies">
                {(provided) => (
                  <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-4">
                    <AnimatePresence>
                      {allergies.map((allergy, index) => (
                        <Draggable key={allergy.id} draggableId={allergy.id} index={index}>
                          {(provided) => (
                            <motion.div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -20 }}
                              transition={{ duration: 0.3 }}
                              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative"
                            >
                              <button
                                onClick={() => handleRemove(allergy.id)}
                                className="absolute top-2 right-2 p-1 text-gray-400 hover:text-red-500 transition-colors"
                              >
                                <X className="w-5 h-5" />
                              </button>
                              <div className="flex justify-between items-start mb-4">
                                <h3 className="font-semibold text-[#1c4b85] text-lg">{allergy.allergy}</h3>
                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                  allergy.severity === 'Severe'
                                    ? 'bg-red-100 text-red-800'
                                    : allergy.severity === 'Moderate'
                                    ? 'bg-yellow-100 text-yellow-800'
                                    : 'bg-green-100 text-green-800'
                                }`}>
                                  {allergy.severity}
                                </span>
                              </div>
                              <div className="space-y-2 text-sm">
                                <div className="flex items-center text-gray-600">
                                  <span className="font-medium mr-2">Date:</span>
                                  {allergy.date}
                                </div>
                                <div className="flex items-center text-gray-600">
                                  <span className="font-medium mr-2">Status:</span>
                                  {allergy.status}
                                </div>
                                <div className="flex items-center text-gray-600">
                                  <span className="font-medium mr-2">Reaction:</span>
                                  {allergy.reaction}
                                </div>
                                <div className="flex items-center text-gray-600">
                                  <span className="font-medium mr-2">Treatment:</span>
                                  {allergy.treatment}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </Draggable>
                      ))}
                    </AnimatePresence>
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allergies;




