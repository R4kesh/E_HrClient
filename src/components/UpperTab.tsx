

import React from "react";
import PatientSearch from "./PatientSearch";
import { FiRefreshCw, FiSettings } from "react-icons/fi";
import { AiOutlineDashboard, AiOutlineCalendar } from "react-icons/ai";
import { Link } from "react-router-dom";
import PatientTabs from "./patientTab/PatientTab";


const UpperTab = () => {

  
    const handleRefresh = () => {
      window.location.reload(); // This will reload the entire window
    };
  return (
    <div className="bg-blue-800 text-white flex items-center justify-between px-3 py-2 shadow-md">
      {/* Left Side: Tabs */}
      <div className="flex items-center space-x-4">
        {/* Patient Search */}
        <PatientSearch />
        
        {/* <PatientSearch /> */}



        {/* Dashboard Tab */}
        {/* <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-300 transition duration-300">
          <AiOutlineDashboard size={20} />
         <Link to={"/"}> <span className="text-sm font-medium">Dashboard</span></Link>
        </div> */}

        {/* Appointments Tab */}
        <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-300 transition duration-300">
        <PatientTabs/>
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

