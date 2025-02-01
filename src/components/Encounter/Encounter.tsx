// import React from 'react';
// import { Calendar, User, FileText, ChevronRight } from 'lucide-react';

// function Encounter() {
//   const encounters = [
//     { title: "MENTAL HEALTH EVAL", doctor: "JONES, CAMERON, MD", date: "12-13-17", status: "Booked" },
//     { title: "MENTAL HEALTH EVAL", doctor: "OSHEA, JAMIE, MD", date: "12-07-17", status: "Booked" },
//     { title: "OV - 2 PROBLEMS", doctor: "VANCE, RORY", date: "12-01-17", status: "Booked" },
//     { title: "PT RE-EVAL", doctor: "BABBIT, CASEY, MD", date: "11-21-17", status: "Booked" },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 p-6">
//       <div className="max-w-5xl mx-auto space-y-6 animate-fadeIn">
//         {/* Header */}
//         <div className="bg-white shadow-lg rounded-lg p-6 flex justify-between items-center">
//           <div className="space-y-1">
//             <h1 className="text-2xl font-bold text-gray-800">Encounters</h1>
//             <p className="text-gray-500">Manage all your patient encounters effectively</p>
//           </div>
//           <Calendar className="h-8 w-8 text-blue-600" />
//         </div>

//         {/* Encounter List */}
//         <div className="bg-white shadow-md rounded-lg p-4 divide-y divide-gray-200">
//           {encounters.map((encounter, index) => (
//             <div
//               key={index}
//               className="flex justify-between items-center p-4 hover:bg-blue-50 transition-colors duration-200 group"
//             >
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-700 group-hover:text-blue-600">
//                   {encounter.title}
//                 </h3>
//                 <p className="text-sm text-gray-500">{encounter.doctor}</p>
//               </div>
//               <div className="flex items-center space-x-6">
//                 <p className="text-sm text-gray-500">{encounter.date}</p>
//                 <span className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-600 font-medium">
//                   {encounter.status}
//                 </span>
//                 <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600" />
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Add Encounter Button */}
//         <div className="flex justify-center">
//           <button
//             className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none"
//           >
//             + Add New Encounter
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Encounter;


// import React from 'react';
// import { Calendar, User, FileText, ChevronRight, PlusCircle } from 'lucide-react';

// function Encounter() {
//   const encounters = [
//     { title: "MENTAL HEALTH EVAL", doctor: "JONES, CAMERON, MD", date: "12-13-17", status: "Booked" },
//     { title: "MENTAL HEALTH EVAL", doctor: "OSHEA, JAMIE, MD", date: "12-07-17", status: "Booked" },
//     { title: "OV - 2 PROBLEMS", doctor: "VANCE, RORY", date: "12-01-17", status: "Booked" },
//     { title: "PT RE-EVAL", doctor: "BABBIT, CASEY, MD", date: "11-21-17", status: "Booked" },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-100 to-teal-50 p-6">
//       <div className="max-w-6xl mx-auto space-y-8 animate-fadeIn">
//         {/* Header */}
//         <div className="bg-white shadow-lg rounded-lg p-6 flex justify-between items-center border-t-4 border-blue-600">
//           <div className="space-y-2">
//             <h1 className="text-2xl font-bold text-gray-800">Encounters</h1>
//             <p className="text-gray-600">Keep track of all your patient interactions</p>
//           </div>
//           <Calendar className="h-6 w-6 text-blue-600" />
//         </div>

//         {/* Encounter List */}
//         <div className="bg-white shadow-md rounded-lg p-6 divide-y divide-gray-200">
//           <h2 className="text-xl font-semibold text-gray-800 mb-4">Patient Encounters</h2>
//           {encounters.map((encounter, index) => (
//             <div
//               key={index}
//               className="flex justify-between items-center py-4 px-2 hover:bg-blue-50 transition-all duration-200 group rounded-lg"
//             >
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-700 group-hover:text-blue-600">
//                   {encounter.title}
//                 </h3>
//                 <p className="text-sm text-gray-500 group-hover:text-blue-500">{encounter.doctor}</p>
//               </div>
//               <div className="flex items-center space-x-6">
//                 <p className="text-sm text-gray-500 group-hover:text-gray-700">{encounter.date}</p>
//                 <span className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-600 font-medium group-hover:bg-blue-200">
//                   {encounter.status}
//                 </span>
//                 <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600" />
//               </div>
//             </div>
//           ))}
//           {encounters.length === 0 && (
//             <div className="text-center text-gray-500 py-8">No encounters available.</div>
//           )}
//         </div>

//         {/* Add Encounter Section */}
//         <div className="bg-white shadow-lg rounded-lg p-6 text-center">
//           <h3 className="text-xl font-bold text-gray-800 mb-4">Add New Encounter</h3>
//           <p className="text-gray-600 mb-6">
//             Create a new patient encounter to keep track of their health journey.
//           </p>
//           <button
//             className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2 transition-transform transform hover:scale-105 focus:outline-none"
//           >
//             <PlusCircle className="h-6 w-6" />
//             <span>Add Encounter</span>
//           </button>
//         </div>

//         {/* Summary Section */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="bg-blue-100 p-6 rounded-lg shadow-md text-center">
//             <h3 className="text-sm font-medium text-blue-800">Total Encounters</h3>
//             <p className="text-2xl font-bold text-blue-600">{encounters.length}</p>
//           </div>
//           <div className="bg-green-100 p-6 rounded-lg shadow-md text-center">
//             <h3 className="text-sm font-medium text-green-800">Upcoming Appointments</h3>
//             <p className="text-2xl font-bold text-green-600">3</p>
//           </div>
//           <div className="bg-yellow-100 p-6 rounded-lg shadow-md text-center">
//             <h3 className="text-sm font-medium text-yellow-800">Pending Approvals</h3>
//             <p className="text-2xl font-bold text-yellow-600">1</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Encounter;





import React, { useState, useEffect } from "react";
import axios from "axios";
import { Calendar, User, FileText, ChevronRight, PlusCircle } from "lucide-react";

function Encounter() {
  const [encounters, setEncounters] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch encounters from JSON file
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/assets/json/encounter.json`) // Update the path if necessary
      .then((response) => {
        setEncounters(response.data.encounters);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching encounters:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-teal-50 p-6">
      <div className="max-w-6xl mx-auto space-y-8 animate-fadeIn">
        {/* Header */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex justify-between items-center border-t-4 border-blue-600">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-[#002D62]">Encounters</h1>
            <p className="text-[#3972c7]">Keep track of all your patient interactions</p>
          </div>
          <Calendar className="h-6 w-6 text-blue-600" />
        </div>

        {/* Encounter List */}
        <div className="bg-white shadow-md rounded-lg p-6 divide-y divide-gray-200">
          <h2 className="text-xl font-semibold text-[#002D62] mb-4">Patient Encounters</h2>
          {loading ? (
            <div className="text-center text-gray-500 py-8">Loading encounters...</div>
          ) : (
            encounters.map((encounter, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-4 px-2 hover:bg-blue-50 transition-all duration-200 group rounded-lg"
              >
                <div>
                  <h3 className="text-lg font-semibold text-[#3972c7] group-hover:text-blue-600">
                    {encounter.title}
                  </h3>
                  <p className="text-sm text-gray-500 group-hover:text-blue-500">{encounter.doctor}</p>
                </div>
                <div className="flex items-center space-x-6">
                  <p className="text-sm text-gray-500 group-hover:text-gray-700">{encounter.date}</p>
                  <span className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-600 font-medium group-hover:bg-blue-200">
                    {encounter.status}
                  </span>
                  <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600" />
                </div>
              </div>
            ))
          )}
          {!loading && encounters.length === 0 && (
            <div className="text-center text-gray-500 py-8">No encounters available.</div>
          )}
        </div>

        {/* Add Encounter Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Add New Encounter</h3>
          <p className="text-gray-600 mb-6">
            Create a new patient encounter to keep track of their health journey.
          </p>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2 transition-transform transform hover:scale-105 focus:outline-none"
          >
            <PlusCircle className="h-6 w-6" />
            <span>Add Encounter</span>
          </button>
        </div>

        {/* Summary Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-100 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-sm font-medium text-blue-800">Total Encounters</h3>
            <p className="text-2xl font-bold text-blue-600">{encounters.length}</p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-sm font-medium text-green-800">Upcoming Appointments</h3>
            <p className="text-2xl font-bold text-green-600">3</p>
          </div>
          <div className="bg-yellow-100 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-sm font-medium text-yellow-800">Pending Approvals</h3>
            <p className="text-2xl font-bold text-yellow-600">1</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Encounter;
