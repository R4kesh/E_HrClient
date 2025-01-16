// import React from "react";
// import { FiSearch, FiRefreshCw, FiSettings } from "react-icons/fi";
// import { AiOutlineDashboard, AiOutlineCalendar } from "react-icons/ai";

// const UpperTab = () => {
//   return (
//     <div className="bg-blue-800 text-white flex items-center justify-between px-4 py-3 shadow-md">
//       {/* Left Side: Tabs */}
//       <div className="flex items-center space-x-6">
//         {/* Search Tab */}
//         <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-300 transition duration-300">
//           <FiSearch size={20} />
//           <span className="text-sm font-medium">Search</span>
//         </div>

//         {/* Dashboard Tab */}
//         <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-300 transition duration-300">
//           <AiOutlineDashboard size={20} />
//           <span className="text-sm font-medium">Dashboard</span>
//         </div>

//         {/* Appointments Tab */}
//         <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-300 transition duration-300">
//           <AiOutlineCalendar size={20} />
//           <span className="text-sm font-medium">Appointments</span>
//         </div>
//       </div>

//       {/* Right Side: Actions */}
//       <div className="flex items-center space-x-6">
//         {/* Refresh Button */}
//         <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-300 transition duration-300">
//           <FiRefreshCw size={20} />
//           <span className="text-sm font-medium">Refresh</span>
//         </div>

//         {/* User Name */}
//         <div className="text-sm font-medium">John Doe</div>

//         {/* Settings Button */}
//         <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-300 transition duration-300">
//           <FiSettings size={20} />
//           <span className="text-sm font-medium">Settings</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UpperTab;

import React from "react";
import PatientSearch from "./PatientSearch";
import { FiRefreshCw, FiSettings } from "react-icons/fi";
import { AiOutlineDashboard, AiOutlineCalendar } from "react-icons/ai";
import { Link } from "react-router-dom";


const UpperTab = () => {

  
    const handleRefresh = () => {
      window.location.reload(); // This will reload the entire window
    };
  return (
    <div className="bg-blue-800 text-white flex items-center justify-between px-4 py-3 shadow-md">
      {/* Left Side: Tabs */}
      <div className="flex items-center space-x-6">
        {/* Patient Search */}
        <PatientSearch />

        {/* Dashboard Tab */}
        <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-300 transition duration-300">
          <AiOutlineDashboard size={20} />
         <Link to={"/"}> <span className="text-sm font-medium">Dashboard</span></Link>
        </div>

        {/* Appointments Tab */}
        <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-300 transition duration-300">
          <AiOutlineCalendar size={20} />
          <Link to={"/patientList"}><span className="text-sm font-medium">Appointments</span></Link>
        </div>
      </div>

      {/* Right Side: Actions */}
      <div className="flex items-center space-x-6">
        {/* Refresh Button */}
        <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-300 transition duration-300"
         onClick={handleRefresh}>
          <FiRefreshCw size={20} />
          <span className="text-sm font-medium">Refresh</span>
        </div>

  
        

        {/* Settings Button */}
        <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-300 transition duration-300">
          <FiSettings size={20} />
          <span className="text-sm font-medium">Settings</span>
        </div>
      </div>
    </div>
  );
};

export default UpperTab;

