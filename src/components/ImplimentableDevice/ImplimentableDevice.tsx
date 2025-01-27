


// import React, { useState } from 'react';
// import { Search, Calendar, ChevronDown } from 'lucide-react';

// const ImplantableDevice = () => {
//   const [implantedDate, setImplantedDate] = useState('');
//   const [manufacturedDate, setManufacturedDate] = useState('');
//   const [expirationDate, setExpirationDate] = useState('');
//   const [filterStatus, setFilterStatus] = useState('All');
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   // Dummy data for the table
//   const tableData = [
//     {
//       device: 'Cardiac Pacemaker',
//       site: 'Upper Chest',
//       manufacturer: 'Medtronic X100',
//       comments: 'Regular checkup required',
//       mriStatus: 'Conditional',
//       date: '2024-01-15'
//     },
//     {
//       device: 'Hip Implant',
//       site: 'Right Hip',
//       manufacturer: 'Johnson & Johnson HI200',
//       comments: 'Post-surgery observation',
//       mriStatus: 'Safe',
//       date: '2024-01-18'
//     },
//     {
//       device: 'Dental Implant',
//       site: 'Lower Jaw',
//       manufacturer: 'Straumann D150',
//       comments: 'Follow-up in 3 months',
//       mriStatus: 'Safe',
//       date: '2024-01-20'
//     }
//   ];

//   return (
//     <div className="p-2 bg-gray-50 min-h-screen">
//       {/* Header with Custom Dropdown */}
//       <div className="flex items-center justify-between mb-4 bg-white p-2 rounded-lg shadow-sm border border-gray-200">
//         <div className="flex items-center gap-2 relative">
//           <button
//             className="flex items-center gap-1 px-3 py-1.5 rounded hover:bg-gray-50 border border-gray-200"
//             onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//           >
//             <span className="text-sm font-medium">{filterStatus}</span>
//             <ChevronDown className="w-4 h-4" />
//           </button>
          
//           {/* Custom Dropdown Menu */}
//           {isDropdownOpen && (
//             <div className="absolute top-full left-0 mt-1 w-28 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-10">
//               {['All', 'Active', 'Inactive'].map((status) => (
//                 <button
//                   key={status}
//                   className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50"
//                   onClick={() => {
//                     setFilterStatus(status);
//                     setIsDropdownOpen(false);
//                   }}
//                 >
//                   {status}
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>
//         <div className="bg-blue-50 p-1.5 rounded-md border border-blue-100">
//           <label className="flex items-center gap-2">
//             <input type="checkbox" className="form-checkbox text-blue-600 rounded" />
//             <span className="text-sm text-blue-700">Reviewed</span>
//           </label>
//         </div>
//       </div>

//       {/* Rest of the component remains the same */}
//       {/* Main Form Grid */}
//       <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-200 mb-2">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-2">
//           {/* First Row */}
//           <div className="flex flex-col">
//             <label className="text-blue-600 text-sm font-medium mb-1.5">Search Device ID</label>
//             <div className="relative">
//               <input 
//                 type="text" 
//                 className="w-full border border-gray-300 rounded-md p-2 pr-8 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
//               />
//               <Search className="absolute right-2 top-2.5 w-4 h-4 text-gray-400" />
//             </div>
//           </div>
//           <div className="flex flex-col">
//             <label className="text-blue-600 text-sm font-medium mb-1.5">Implanted Device</label>
//             <input 
//               type="text" 
//               className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
//             />
//           </div>
//           <div className="flex flex-col">
//             <label className="text-blue-600 text-sm font-medium mb-1.5">Implanted Site</label>
//             <input 
//               type="text" 
//               className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
//             />
//           </div>
//           <div className="flex flex-col">
//             <label className="text-blue-600 text-sm font-medium mb-1.5">MRI Safety Status</label>
//             <select 
//               className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             >
//               <option>Safe</option>
//               <option>Conditional</option>
//               <option>Unsafe</option>
//             </select>
//           </div>

//           {/* Second Row */}
//           <div className="flex flex-col">
//             <label className="text-blue-600 text-sm font-medium mb-1.5">Lot Number</label>
//             <input 
//               type="text" 
//               className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
//             />
//           </div>
//           <div className="flex flex-col">
//             <label className="text-blue-600 text-sm font-medium mb-1.5">Model/Ref</label>
//             <input 
//               type="text" 
//               className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
//             />
//           </div>
//           <div className="flex flex-col">
//             <label className="text-blue-600 text-sm font-medium mb-1.5">Manufacturer</label>
//             <input 
//               type="text" 
//               className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
//             />
//           </div>
//           <div className="flex flex-col">
//             <label className="text-blue-600 text-sm font-medium mb-1.5">Implanted Date</label>
//             <div className="relative">
//               <input 
//                 type="date" 
//                 className="w-full border border-gray-300 rounded-md p-2 pr-8 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 value={implantedDate}
//                 onChange={(e) => setImplantedDate(e.target.value)}
//               />
//               <Calendar className="absolute right-2 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
//             </div>
//           </div>

//           {/* Third Row */}
//           <div className="flex flex-col">
//             <label className="text-blue-600 text-sm font-medium mb-1.5">Serial</label>
//             <input 
//               type="text" 
//               className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
//             />
//           </div>
//           <div className="flex flex-col">
//             <label className="text-blue-600 text-sm font-medium mb-1.5">Contact</label>
//             <input 
//               type="text" 
//               className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
//             />
//           </div>
//           <div className="flex flex-col">
//             <label className="text-blue-600 text-sm font-medium mb-1.5">Surgeon/Specialist</label>
//             <input 
//               type="text" 
//               className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
//             />
//           </div>
//           <div className="flex flex-col">
//             <label className="text-blue-600 text-sm font-medium mb-1.5">Manufactured Date</label>
//             <div className="relative">
//               <input 
//                 type="date" 
//                 className="w-full border border-gray-300 rounded-md p-2 pr-8 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 value={manufacturedDate}
//                 onChange={(e) => setManufacturedDate(e.target.value)}
//               />
//               <Calendar className="absolute right-2 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
//             </div>
//           </div>

//           {/* Fourth Row */}
//           <div className="flex flex-col md:col-span-2">
//             <label className="text-blue-600 text-sm font-medium mb-1.5">Comment</label>
//             <textarea 
//               className="w-full border border-gray-300 rounded-md p-2 text-sm h-20 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
//             />
//           </div>
//           <div className="flex flex-col">
//             <label className="text-blue-600 text-sm font-medium mb-1.5">Expiration Date</label>
//             <div className="relative">
//               <input 
//                 type="date" 
//                 className="w-full border border-gray-300 rounded-md p-2 pr-8 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 value={expirationDate}
//                 onChange={(e) => setExpirationDate(e.target.value)}
//               />
//               <Calendar className="absolute right-2 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
//             </div>
//           </div>
//           <div className="flex flex-col">
//             <label className="text-blue-600 text-sm font-medium mb-1.5">Status</label>
//             <div className="relative">
//               <select 
//                 className="w-full border border-gray-300 rounded-md p-2 appearance-none bg-white pr-8 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//               >
//                 <option>Active</option>
//                 <option>Inactive</option>
//                 <option>Pending</option>
//               </select>
//               <ChevronDown className="absolute right-2 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Button Section */}
//       <div className="flex justify-end gap-3 mb-6">
//         <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
//           Cancel
//         </button>
//         <button className="px-4 py-2 border border-red-300 rounded-md text-sm font-medium text-red-700 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
//           Delete Device
//         </button>
//         <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
//           Save
//         </button>
//       </div>

//       {/* Enhanced Table */}
//       <div className="bg-white rounded-lg shadow-sm border border-gray-500 overflow-hidden">
//         {/* Table Header */}
//         <div className="grid grid-cols-6 gap-4 bg-gray-400 p-3 text-sm font-medium text-gray-700 border-b border-gray-200">
//           <div>Implantable Devices</div>
//           <div>Implant Site</div>
//           <div>Manufacturer/Model</div>
//           <div>Comments</div>
//           <div>MRI Safety Status</div>
//           <div>Date</div>
//         </div>

//         {/* Table Body */}
//         <div className="divide-y divide-gray-200">
//           {tableData.map((row, index) => (
//             <div 
//               key={index} 
//               className="grid grid-cols-6 gap-4 p-3 text-sm text-gray-600 hover:bg-blue-50 transition-colors duration-150 ease-in-out cursor-pointer"
//             >
//               <div className="font-medium text-gray-900">{row.device}</div>
//               <div>{row.site}</div>
//               <div>{row.manufacturer}</div>
//               <div>{row.comments}</div>
//               <div>
//                 <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
//                   ${row.mriStatus === 'Safe' ? 'bg-green-100 text-green-800' : 
//                     row.mriStatus === 'Conditional' ? 'bg-yellow-100 text-yellow-800' : 
//                     'bg-red-100 text-red-800'}`}>
//                   {row.mriStatus}
//                 </span>
//               </div>
//               <div>{row.date}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImplantableDevice;


import React, { useState, useEffect } from 'react';
import { Search, Calendar, ChevronDown } from 'lucide-react';
import axios from "axios";


const ImplantableDevice = () => {
  const [implantedDate, setImplantedDate] = useState('');
  const [manufacturedDate, setManufacturedDate] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [filterOptions, setFilterOptions] = useState([]);

  useEffect(() => {
   

  axios
      .get(`${import.meta.env.VITE_BASE_URL}/assets/json/implimentableDevice.json`)
      .then((response) => {
        setTableData(response.data.tableData);
        setFilterOptions(response.data.filterOptions);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="p-2 bg-gray-50 min-h-screen">
      {/* Header with Custom Dropdown */}
      <div className="flex items-center justify-between mb-4 bg-white p-2 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center gap-2 relative">
          <button
            className="flex items-center gap-1 px-3 py-1.5 rounded hover:bg-gray-50 border border-gray-200"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span className="text-sm font-medium">{filterStatus}</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          
          {/* Custom Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-1 w-28 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-10">
              {filterOptions.map((status) => (
                <button
                  key={status}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50"
                  onClick={() => {
                    setFilterStatus(status);
                    setIsDropdownOpen(false);
                  }}
                >
                  {status}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="bg-blue-50 p-1.5 rounded-md border border-blue-100">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="form-checkbox text-blue-600 rounded" />
            <span className="text-sm text-blue-700">Reviewed</span>
          </label>
        </div>
      </div>

      {/* Main Form Grid */}
      <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-200 mb-2">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-2">
          {/* First Row */}
          <div className="flex flex-col">
            <label className="text-blue-600 text-sm font-medium mb-1.5">Search Device ID</label>
            <div className="relative">
              <input 
                type="text" 
                className="w-full border border-gray-300 rounded-md p-2 pr-8 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
              />
              <Search className="absolute right-2 top-2.5 w-4 h-4 text-gray-400" />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-blue-600 text-sm font-medium mb-1.5">Implanted Device</label>
            <input 
              type="text" 
              className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
            />
          </div>
          <div className="flex flex-col">
            <label className="text-blue-600 text-sm font-medium mb-1.5">Implanted Site</label>
            <input 
              type="text" 
              className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
            />
          </div>
          <div className="flex flex-col">
            <label className="text-blue-600 text-sm font-medium mb-1.5">MRI Safety Status</label>
            <select 
              className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option>Safe</option>
              <option>Conditional</option>
              <option>Unsafe</option>
            </select>
          </div>

          {/* Second Row */}
          <div className="flex flex-col">
            <label className="text-blue-600 text-sm font-medium mb-1.5">Lot Number</label>
            <input 
              type="text" 
              className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
            />
          </div>
          <div className="flex flex-col">
            <label className="text-blue-600 text-sm font-medium mb-1.5">Model/Ref</label>
            <input 
              type="text" 
              className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
            />
          </div>
          <div className="flex flex-col">
            <label className="text-blue-600 text-sm font-medium mb-1.5">Manufacturer</label>
            <input 
              type="text" 
              className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
            />
          </div>
          <div className="flex flex-col">
            <label className="text-blue-600 text-sm font-medium mb-1.5">Implanted Date</label>
            <div className="relative">
              <input 
                type="date" 
                className="w-full border border-gray-300 rounded-md p-2 pr-8 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={implantedDate}
                onChange={(e) => setImplantedDate(e.target.value)}
              />
              <Calendar className="absolute right-2 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Third Row */}
          <div className="flex flex-col">
            <label className="text-blue-600 text-sm font-medium mb-1.5">Serial</label>
            <input 
              type="text" 
              className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
            />
          </div>
          <div className="flex flex-col">
            <label className="text-blue-600 text-sm font-medium mb-1.5">Contact</label>
            <input 
              type="text" 
              className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
            />
          </div>
          <div className="flex flex-col">
            <label className="text-blue-600 text-sm font-medium mb-1.5">Surgeon/Specialist</label>
            <input 
              type="text" 
              className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
            />
          </div>
          <div className="flex flex-col">
            <label className="text-blue-600 text-sm font-medium mb-1.5">Manufactured Date</label>
            <div className="relative">
              <input 
                type="date" 
                className="w-full border border-gray-300 rounded-md p-2 pr-8 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={manufacturedDate}
                onChange={(e) => setManufacturedDate(e.target.value)}
              />
              <Calendar className="absolute right-2 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Fourth Row */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-blue-600 text-sm font-medium mb-1.5">Comment</label>
            <textarea 
              className="w-full border border-gray-300 rounded-md p-2 text-sm h-20 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
            />
          </div>
          <div className="flex flex-col">
            <label className="text-blue-600 text-sm font-medium mb-1.5">Expiration Date</label>
            <div className="relative">
              <input 
                type="date" 
                className="w-full border border-gray-300 rounded-md p-2 pr-8 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={expirationDate}
                onChange={(e) => setExpirationDate(e.target.value)}
              />
              <Calendar className="absolute right-2 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-blue-600 text-sm font-medium mb-1.5">Status</label>
            <div className="relative">
              <select 
                className="w-full border border-gray-300 rounded-md p-2 appearance-none bg-white pr-8 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option>Active</option>
                <option>Inactive</option>
                <option>Pending</option>
              </select>
              <ChevronDown className="absolute right-2 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Button Section */}
      <div className="flex justify-end gap-3 mb-6">
        <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Cancel
        </button>
        <button className="px-4 py-2 border border-red-300 rounded-md text-sm font-medium text-red-700 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
          Delete Device
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Save
        </button>
      </div>

      {/* Enhanced Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-500 overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-6 gap-4 bg-gray-400 p-3 text-sm font-medium text-gray-700 border-b border-gray-200">
          <div>Implantable Devices</div>
          <div>Implant Site</div>
          <div>Manufacturer/Model</div>
          <div>Comments</div>
          <div>MRI Safety Status</div>
          <div>Date</div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-gray-200">
          {tableData.map((row, index) => (
            <div 
              key={index} 
              className="grid grid-cols-6 gap-4 p-3 text-sm text-gray-600 hover:bg-blue-50 transition-colors duration-150 ease-in-out cursor-pointer"
            >
              <div className="font-medium text-gray-900">{row.device}</div>
              <div>{row.site}</div>
              <div>{row.manufacturer}</div>
              <div>{row.comments}</div>
              <div>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                  ${row.mriStatus === 'Safe' ? 'bg-green-100 text-green-800' : 
                    row.mriStatus === 'Conditional' ? 'bg-yellow-100 text-yellow-800' : 
                    'bg-red-100 text-red-800'}`}>
                  {row.mriStatus}
                </span>
              </div>
              <div>{row.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImplantableDevice;
