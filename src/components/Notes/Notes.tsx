
// import {
//     FaUserMd,
//     FaClock,
//     FaCalendarAlt,
//     FaFolder,
//     FaCommentDots,
//     FaSignature,
//   } from "react-icons/fa";
  
//   export default function Notes() {
//     return (
//       <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//         <div className="bg-white w-full max-w-5xl p-10 rounded-lg shadow-lg transition-all duration-300">
//           {/* Header */}
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-2xl font-bold text-gray-800"> Note Section</h2>
           
//           </div>
  
//           {/* Form */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {/* Provider */}
//             <div>
//               <label className="flex items-center space-x-2 text-gray-700">
//                 <FaUserMd className="text-blue-500" />
//                 <span>Provider</span>
//               </label>
//               <select className="w-full mt-2 p-3 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500">
//                 <option>SMITH, TRACY, MD</option>
//               </select>
//             </div>
  
//             {/* Department */}
//             <div>
//               <label className="text-gray-700">Department</label>
//               <input
//                 type="text"
//                 value="ARCHES MEDICAL CENTER"
//                 className="w-full mt-2 p-3 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
  
//             {/* Signers */}
//             <div>
//               <label className="flex items-center space-x-2 text-gray-700">
//                 <FaSignature className="text-green-500" />
//                 <span>Signers</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="Add signers here"
//                 className="w-full mt-2 p-3 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
  
//             {/* Visit */}
//             <div>
//               <label className="text-gray-700">Visit</label>
//               <input
//                 type="text"
//                 value="Allergy_Immunology"
//                 className="w-full mt-2 p-3 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
  
//             {/* Template Type Dropdown */}
//             <div>
//               <label className="text-gray-700">Template Type</label>
//               <select className="w-full mt-2 p-3 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500">
//                 <option>Allergy-Immunology</option>
//                 <option>Cardiology</option>
//                 <option>Dermatology</option>
//                 <option>Electronic Case Report</option>
//                 <option>ENT</option>
//                 <option>Family Practice</option>
//                 <option>Gastroenterology</option>
//                 <option>Internal Medicine</option>
//                 <option>Mental Health</option>
//                 <option>OB-GYN</option>
//                 <option>Orthopedics</option>
//                 <option>Pain Management</option>
//                 <option>Pediatrics</option>
//                 <option>Podiatry</option>
//                 <option>Surgery</option>
//                 <option>Urgent Care</option>
//                 <option>Urology</option>
//               </select>
//             </div>
  
//             {/* Folder */}
//             <div>
//               <label className="flex items-center space-x-2 text-gray-700">
//                 <FaFolder className="text-yellow-500" />
//                 <span>Folder</span>
//               </label>
//               <input
//                 type="text"
//                 value="Notes"
//                 className="w-full mt-2 p-3 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
  
//             {/* ICD */}
//             <div className="relative">
//   <label className="text-gray-700">ICD</label>
//   <div className="mt-2 flex items-center">
//     <input
//       type="text"
//       placeholder="Click here to add codes"
//       className="w-full p-3 pl-10 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
//     />
//     <div className="absolute inset-y-0 left-0 mt-7 flex items-center pl-3 pointer-events-none">
//       <svg
//         className="w-5 h-5 text-gray-400 "
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//         ></path>
//       </svg>
//     </div>
//   </div>
// </div>
  
//             {/* Date */}
//             <div>
//               <label className="text-gray-700">Date</label>
//               <input
//                 type="datetime-local"
//                 value="2025-01-17T08:04"
//                 className="w-full mt-2 p-3 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
  
//             {/* Time Elapsed */}
//             <div>
//               <label className="text-gray-700">Time Elapsed</label>
//               <input
//                 type="text"
//                 placeholder="0:00"
//                 className="w-full mt-2 p-3 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
  
//             {/* Comment */}
//             <div className="col-span-2">
//               <label className="flex items-center space-x-2 text-gray-700">
//                 <FaCommentDots className="text-red-500" />
//                 <span>Comment</span>
//               </label>
//               <textarea
//                 rows="3"
//                 placeholder="Add your comment here"
//                 className="w-full mt-2 p-3 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
//               ></textarea>
//             </div>
  
//             {/* Status */}
//             <div>
//               <label className="text-gray-700">Status</label>
//               <select className="w-full mt-2 p-3 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500">
//                 <option>New</option>
//                 <option>Current</option>
//                 <option>Historic</option>
//               </select>
//             </div>
  
//             {/* Checkboxes */}
//             <div className="col-span-2 flex flex-wrap items-start gap-4">
//               <label className="flex items-center space-x-2">
//                 <input type="checkbox" />
//                 <span>Hold</span>
//               </label>
//               <label className="flex items-center space-x-2">
//                 <input type="checkbox" />
//                 <span>High Priority</span>
//               </label>
//               <label className="flex items-center space-x-2">
//                 <input type="checkbox" />
//                 <span>Assistant</span>
//               </label>
//               <label className="flex items-center space-x-2">
//                 <input type="checkbox" />
//                 <span>Confidential - Discuss with Patient</span>
//               </label>
//             </div>
//           </div>
  
//           {/* Footer Actions */}
//           <div className="flex justify-end space-x-4 mt-8">
//             <button className="px-6 py-2 bg-gray-300 text-gray-700 rounded-md shadow-sm hover:bg-gray-400">
//               Cancel
//             </button>
//             <button className="px-6 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600">
//               Save
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }
  

import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  FaUserMd,
  FaSignature,
  FaFolder,
  FaCommentDots,
} from "react-icons/fa";

export default function Notes() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/assets/json/notes.json`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching notes data:", error);
      });
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center  ">
      <div className="bg-white w-full  p-8 rounded-lg shadow-lg transition-all duration-300">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Note Section</h2>
        </div>

        {/* Form */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Provider */}
          <div>
            <label className="flex items-center space-x-2 text-gray-700">
              <FaUserMd className="text-blue-500" />
              <span>Provider</span>
            </label>
            <select
              className="w-full mt-2 p-3 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              defaultValue={data.defaultValues.provider}
            >
              {data.providers.map((provider, idx) => (
                <option key={idx}>{provider}</option>
              ))}
            </select>
          </div>

          {/* Department */}
          <div>
            <label className="text-gray-700">Department</label>
            <input
              type="text"
              value={data.defaultValues.department}
              className="w-full mt-2 p-3 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Signers */}
          <div>
            <label className="flex items-center space-x-2 text-gray-700">
              <FaSignature className="text-green-500" />
              <span>Signers</span>
            </label>
            <input
              type="text"
              placeholder="Add signers here"
              className="w-full mt-2 p-3 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Visit */}
          <div>
            <label className="text-gray-700">Visit</label>
            <input
              type="text"
              value={data.defaultValues.visit}
              className="w-full mt-2 p-3 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Template Type Dropdown */}
          <div>
            <label className="text-gray-700">Template Type</label>
            <select
              className="w-full mt-2 p-3 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              defaultValue={data.templateTypes[0]}
            >
              {data.templateTypes.map((type, idx) => (
                <option key={idx}>{type}</option>
              ))}
            </select>
          </div>

          {/* Folder */}
          <div>
            <label className="flex items-center space-x-2 text-gray-700">
              <FaFolder className="text-yellow-500" />
              <span>Folder</span>
            </label>
            <input
              type="text"
              value={data.defaultValues.folder}
              className="w-full mt-2 p-3 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Date */}
          <div>
            <label className="text-gray-700">Date</label>
            <input
              type="datetime-local"
              value={data.defaultValues.date}
              className="w-full mt-2 p-3 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Time Elapsed */}
          <div>
            <label className="text-gray-700">Time Elapsed</label>
            <input
              type="text"
              value={data.defaultValues.timeElapsed}
              className="w-full mt-2 p-3 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Comment */}
          <div className="col-span-2">
            <label className="flex items-center space-x-2 text-gray-700">
              <FaCommentDots className="text-red-500" />
              <span>Comment</span>
            </label>
            <textarea
              rows="3"
              placeholder="Add your comment here"
              className="w-full mt-2 p-3 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>

          {/* Status */}
          <div>
            <label className="text-gray-700">Status</label>
            <select
              className="w-full mt-2 p-3 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              defaultValue={data.statuses[0]}
            >
              {data.statuses.map((status, idx) => (
                <option key={idx}>{status}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex justify-end space-x-4 mt-8">
          <button className="px-6 py-2 bg-gray-300 text-gray-700 rounded-md shadow-sm hover:bg-gray-400">
            Cancel
          </button>
          <button className="px-6 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
