// import { FaUserMd, FaClock, FaCalendarAlt, FaFolder, FaCommentDots } from "react-icons/fa";

// export default function Notes() {
//   return (
//     <div className="bg-gray-100 p-6 rounded-lg shadow-lg space-y-6">
//       <h2 className="text-lg font-bold text-gray-800 mb-4">EHR Note Section</h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {/* Provider and Department */}
//         <div>
//           <label className="flex items-center space-x-2 text-gray-700">
//             <FaUserMd className="text-blue-500" />
//             <span>Provider</span>
//           </label>
//           <select className="w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
//             <option>SMITH, TRACY, MD</option>
//             {/* Add more options */}
//           </select>
//         </div>

//         <div>
//           <label className="flex items-center space-x-2 text-gray-700">
//             <span>Department</span>
//           </label>
//           <input
//             type="text"
//             value="ARCHES MEDICAL CENTER"
//             className="w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//           />
//         </div>

//         {/* Visit and Template */}
//         <div>
//           <label className="flex items-center space-x-2 text-gray-700">
//             <span>Visit</span>
//           </label>
//           <input
//             type="text"
//             value="Allergy_Immunology"
//             className="w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//           />
//         </div>

//         <div>
//           <label className="flex items-center space-x-2 text-gray-700">
//             <span>Template</span>
//           </label>
//           <select className="w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
//             <option>(None)</option>
//             {/* Add more options */}
//           </select>
//         </div>

//         {/* Folder and ICD */}
//         <div>
//           <label className="flex items-center space-x-2 text-gray-700">
//             <FaFolder className="text-yellow-500" />
//             <span>Folder</span>
//           </label>
//           <input
//             type="text"
//             value="Notes"
//             className="w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//           />
//         </div>

//         <div>
//           <label className="flex items-center space-x-2 text-gray-700">
//             <span>ICD</span>
//           </label>
//           <input
//             type="text"
//             placeholder="Click here to add codes"
//             className="w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//           />
//         </div>

//         {/* Date and Time */}
//         <div>
//           <label className="flex items-center space-x-2 text-gray-700">
//             <FaCalendarAlt className="text-green-500" />
//             <span>Date</span>
//           </label>
//           <input
//             type="datetime-local"
//             value="2025-01-17T08:04"
//             className="w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//           />
//         </div>

//         <div>
//           <label className="flex items-center space-x-2 text-gray-700">
//             <FaClock className="text-purple-500" />
//             <span>Time Elapsed</span>
//           </label>
//           <input
//             type="text"
//             placeholder="0:00"
//             className="w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//           />
//         </div>

//         {/* Comment */}
//         <div className="col-span-2">
//           <label className="flex items-center space-x-2 text-gray-700">
//             <FaCommentDots className="text-red-500" />
//             <span>Comment</span>
//           </label>
//           <textarea
//             rows="3"
//             placeholder="Add your comment here"
//             className="w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//           ></textarea>
//         </div>

//         {/* Status */}
//         <div>
//           <label className="flex items-center space-x-2 text-gray-700">
//             <span>Status</span>
//           </label>
//           <select className="w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
//             <option>New</option>
//             <option>Current</option>
//             <option>Historic</option>
//           </select>
//         </div>

//         {/* Checkboxes */}
//         <div className="flex flex-wrap items-start gap-4 col-span-2">
//           <label className="flex items-center space-x-2">
//             <input type="checkbox" />
//             <span>Hold</span>
//           </label>
//           <label className="flex items-center space-x-2">
//             <input type="checkbox" />
//             <span>High Priority</span>
//           </label>
//           <label className="flex items-center space-x-2">
//             <input type="checkbox" />
//             <span>Assistant</span>
//           </label>
//           <label className="flex items-center space-x-2">
//             <input type="checkbox" />
//             <span>Confidential - Discuss with Patient</span>
//           </label>
//         </div>
//       </div>

//       {/* Action Buttons */}
//       <div className="flex justify-end space-x-4">
//         <button className="px-4 py-2 bg-gray-300 rounded-md">Cancel</button>
//         <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Save</button>
//       </div>
//     </div>
//   );
// }
import {
    FaUserMd,
    FaClock,
    FaCalendarAlt,
    FaFolder,
    FaCommentDots,
    FaSignature,
  } from "react-icons/fa";
  
  export default function Notes() {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white w-full max-w-5xl p-10 rounded-lg shadow-lg transition-all duration-300">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">EHR Note Section</h2>
           
          </div>
  
          {/* Form */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Provider */}
            <div>
              <label className="flex items-center space-x-2 text-gray-700">
                <FaUserMd className="text-blue-500" />
                <span>Provider</span>
              </label>
              <select className="w-full mt-2 p-3 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500">
                <option>SMITH, TRACY, MD</option>
              </select>
            </div>
  
            {/* Department */}
            <div>
              <label className="text-gray-700">Department</label>
              <input
                type="text"
                value="ARCHES MEDICAL CENTER"
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
                value="Allergy_Immunology"
                className="w-full mt-2 p-3 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
  
            {/* Template Type Dropdown */}
            <div>
              <label className="text-gray-700">Template Type</label>
              <select className="w-full mt-2 p-3 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500">
                <option>Allergy-Immunology</option>
                <option>Cardiology</option>
                <option>Dermatology</option>
                <option>Electronic Case Report</option>
                <option>ENT</option>
                <option>Family Practice</option>
                <option>Gastroenterology</option>
                <option>Internal Medicine</option>
                <option>Mental Health</option>
                <option>OB-GYN</option>
                <option>Orthopedics</option>
                <option>Pain Management</option>
                <option>Pediatrics</option>
                <option>Podiatry</option>
                <option>Surgery</option>
                <option>Urgent Care</option>
                <option>Urology</option>
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
                value="Notes"
                className="w-full mt-2 p-3 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
  
            {/* ICD */}
            <div>
              <label className="text-gray-700">ICD</label>
              <input
                type="text"
                placeholder="Click here to add codes"
                className="w-full mt-2 p-3 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
  
            {/* Date */}
            <div>
              <label className="text-gray-700">Date</label>
              <input
                type="datetime-local"
                value="2025-01-17T08:04"
                className="w-full mt-2 p-3 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
  
            {/* Time Elapsed */}
            <div>
              <label className="text-gray-700">Time Elapsed</label>
              <input
                type="text"
                placeholder="0:00"
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
              <select className="w-full mt-2 p-3 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500">
                <option>New</option>
                <option>Current</option>
                <option>Historic</option>
              </select>
            </div>
  
            {/* Checkboxes */}
            <div className="col-span-2 flex flex-wrap items-start gap-4">
              <label className="flex items-center space-x-2">
                <input type="checkbox" />
                <span>Hold</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" />
                <span>High Priority</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" />
                <span>Assistant</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" />
                <span>Confidential - Discuss with Patient</span>
              </label>
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
  