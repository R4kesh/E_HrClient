// import React, { useEffect, useState } from 'react';
// import { 
//   FaUser, FaHeartbeat, FaPills, FaShoppingCart, FaClipboardList, FaBell, FaNotesMedical, FaFileMedical, FaFileInvoice, FaSyringe, 
//   FaUsers, FaTasks, FaHistory, FaStickyNote, FaBriefcaseMedical, FaConnectdevelop, FaHandHoldingMedical, FaHospitalUser 
// } from 'react-icons/fa';
// import { MdKeyboardArrowDown } from 'react-icons/md';
// import { Link, useParams } from 'react-router-dom';
// import { useTabs } from '../Context/TabProvider';

// export function Sidebar() {
//   const { id } = useParams(); // Get patient ID from the route
  
//   const [isPatientOpen, setIsPatientOpen] = useState(false);

  

//   return (
//     <div className="flex h-full bg-white">
//       <div className="w-64 h-screen bg-white">
//         {/* Sidebar menu */}
//         <div className="p-4">
//           {/* Sidebar Header */}
//           {/* <div className="text-lg font-semibold text-gray-800 mb-6">Patient Management</div> */}

//           {/* Menu Items */}
//           <div className="space-y-3">
//             <Link to={`/vitals/${id}`}>
//               <button className="flex items-center text-gray-700 hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
//                 <FaHeartbeat size={20} className="mr-3 text-red-500" />
//                 Vitals
//               </button>
//             </Link>
//             <button className="flex items-center text-gray-700 hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
//               <FaClipboardList size={20} className="mr-3 text-blue-500" />
//               Allergies
//             </button>
//             <button className="flex items-center text-gray-700 hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
//               <FaPills size={20} className="mr-3 text-purple-500" />
//               Medications
//             </button>
//             <button className="flex items-center text-gray-700 hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
//               <FaShoppingCart size={20} className="mr-3 text-orange-500" />
//               Orders
//             </button>
//             <button className="flex items-center text-gray-700 hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
//               <FaBell size={20} className="mr-3 text-yellow-500" />
//               Messages
//             </button>
//             <button className="flex items-center text-gray-700 hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
//               <FaFileMedical size={20} className="mr-3 text-green-500" />
//               Advanced Directives
//             </button>
//             <button className="flex items-center text-gray-700 hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
//               <FaNotesMedical size={20} className="mr-3 text-blue-500" />
//               Health Watcher
//             </button>
//             <button className="flex items-center text-gray-700 hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
//               <FaFileInvoice size={20} className="mr-3 text-teal-500" />
//               Encounters
//             </button>
//             <button className="flex items-center text-gray-700 hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
//               <FaUsers size={20} className="mr-3 text-orange-500" />
//               Care Team
//             </button>
//             <button className="flex items-center text-gray-700 hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
//               <FaTasks size={20} className="mr-3 text-purple-500" />
//               Problems
//             </button>
//             <button className="flex items-center text-gray-700 hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
//               <FaStickyNote size={20} className="mr-3 text-yellow-500" />
//               Notes
//             </button>
//             <button className="flex items-center text-gray-700 hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
//               <FaBriefcaseMedical size={20} className="mr-3 text-green-500" />
//               Plan Summary
//             </button>
//             <button className="flex items-center text-gray-700 hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
//               <FaFileMedical size={20} className="mr-3 text-teal-500" />
//               Documents
//             </button>
//             <button className="flex items-center text-gray-700 hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
//               <FaFileInvoice size={20} className="mr-3 text-blue-500" />
//               Results
//             </button>
//             <button className="flex items-center text-gray-700 hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
//               <FaSyringe size={20} className="mr-3 text-red-500" />
//               Immunizations
//             </button>
//             <button className="flex items-center text-gray-700 hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
//               <FaHandHoldingMedical size={20} className="mr-3 text-green-500" />
//               Immunotherapy
//             </button>
//             <button className="flex items-center text-gray-700 hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
//               <FaHeartbeat size={20} className="mr-3 text-orange-500" />
//               Risk Factors
//             </button>
//             <button className="flex items-center text-gray-700 hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
//               <FaHospitalUser size={20} className="mr-3 text-purple-500" />
//               Implantable Devices
//             </button>
//             <button className="flex items-center text-gray-700 hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
//               <FaConnectdevelop size={20} className="mr-3 text-yellow-500" />
//               Family Connections
//             </button>
//             <button className="flex items-center text-gray-700 hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
//               <FaNotesMedical size={20} className="mr-3 text-teal-500" />
//               Referrals
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import {
//   HomeIcon,
//   CalendarIcon,
//   SettingsIcon,
//   LogOutIcon,
//   ChevronDownIcon,
//   ChevronUpIcon,
//   ChevronLeftIcon,
//   ChevronRightIcon,
// } from "lucide-react";

// const Sidebar = () => {
//   const [appointments, setAppointments] = useState([
//     { time: "8:00 AM", patient: "FERRY, ADAM", type: "PHYSICAL EXAM", duration: "60 min" },
//     { time: "9:00 AM", patient: "JANE DOE", type: "FOLLOW-UP", duration: "30 min" },
//     { time: "10:30 AM", patient: "JOHN SMITH", type: "CONSULTATION", duration: "45 min" },
//     { time: "11:00 AM", patient: "RACHEL GREEN", type: "PHYSICAL EXAM", duration: "60 min" },
//     { time: "1:00 PM", patient: "ROSS GELLER", type: "CHECKUP", duration: "30 min" },
//     { time: "2:00 PM", patient: "MONICA GELLER", type: "FOLLOW-UP", duration: "45 min" },
//     { time: "3:00 PM", patient: "CHANDLER BING", type: "CONSULTATION", duration: "60 min" },
//     { time: "4:30 PM", patient: "JOEY TRIBBIANI", type: "CHECKUP", duration: "30 min" },
//     { time: "5:00 PM", patient: "PHOEBE BUFFAY", type: "CONSULTATION", duration: "45 min" },
//     { time: "6:30 PM", patient: "RACHEL GREEN", type: "FOLLOW-UP", duration: "30 min" },
//   ]);

//   const [currentDate, setCurrentDate] = useState("");
//   const [selectedTab, setSelectedTab] = useState("dashboard");
//   const [isAppointmentsOpen, setIsAppointmentsOpen] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);

//   const appointmentsPerPage = 8;

//   // Calculate the number of pages
//   const totalPages = Math.ceil(appointments.length / appointmentsPerPage);

//   // Get appointments for the current page
//   const currentAppointments = appointments.slice(
//     (currentPage - 1) * appointmentsPerPage,
//     currentPage * appointmentsPerPage
//   );

//   // Fetch the current date in EST format
//   useEffect(() => {
//     const options = {
//       timeZone: "America/New_York",
//       weekday: "long",
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//     };
//     const now = new Date().toLocaleDateString("en-US", options);
//     setCurrentDate(now);
//   }, []);

//   const navItems = [
//     { label: "Dashboard", icon: HomeIcon, key: "dashboard", color: "text-blue-600" },
//     { label: "Appointments", icon: CalendarIcon, key: "appointments", color: "text-green-600" },
//     { label: "Settings", icon: SettingsIcon, key: "settings", color: "text-orange-600" },
//     { label: "Logout", icon: LogOutIcon, key: "logout", color: "text-red-600" },
//   ];

//   return (
//     <div className=" top-0 left-0 h-screen w-56 bg-white shadow-xl flex flex-col transition-all duration-300">
//       {/* Logo Section */}
//       <div className="p-5 border-b">
//         <h1 className="text-2xl font-bold text-blue-700">EHR System</h1>
//         <p className="text-sm text-gray-500">EST | {currentDate}</p>
//       </div>

//       {/* Navigation Section */}
//       <nav className="flex-grow">
//         {navItems.map((item) =>
//           item.key === "appointments" ? (
//             <div key={item.key}>
//               <button
//                 className={`flex items-center p-4 w-full text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition ${
//                   selectedTab === item.key ? "bg-blue-50 text-blue-700" : ""
//                 }`}
//                 onClick={() => {
//                   setSelectedTab(item.key);
//                   setIsAppointmentsOpen(!isAppointmentsOpen);
//                 }}
//               >
//                 <item.icon className={`w-5 h-5 mr-3 ${item.color}`} />
//                 <span className="text-sm font-medium">{item.label}</span>
//                 {isAppointmentsOpen ? (
//                   <ChevronUpIcon className="w-5 h-5 ml-auto" />
//                 ) : (
//                   <ChevronDownIcon className="w-5 h-5 ml-auto" />
//                 )}
//               </button>

//               {/* Appointments Dropdown */}
//               {isAppointmentsOpen && (
//                 <div
//                   className="bg-gray-50 rounded-md shadow-inner transition-all duration-300"
//                   style={{
//                     overflow: "hidden",
//                   }}
//                 >
//                   <div className="p-4 border-b">
//                     <h3 className="text-sm font-bold text-gray-600">Appointments</h3>
//                     <p className="text-xs text-gray-500">{currentDate}</p>
//                   </div>
//                   {currentAppointments.map((appointment, index) => (
//                     <div
//                       key={index}
//                       className="p-4 mx-4 mb-4 bg-white rounded-lg shadow hover:bg-gray-100 transition duration-200"
//                     >
//                       <h4 className="text-blue-700 font-semibold">
//                         {appointment.time}
//                       </h4>
//                       <p className="text-sm text-gray-700">{appointment.patient}</p>
//                       <p className="text-sm text-gray-600">
//                         {appointment.type} - {appointment.duration}
//                       </p>
//                     </div>
//                   ))}
//                   {/* Pagination */}
//                   <div className="flex items-center justify-between px-4 py-2 border-t">
//                     <button
//                       className="flex items-center px-3 py-1 text-sm text-gray-600 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
//                       disabled={currentPage === 1}
//                       onClick={() => setCurrentPage((prev) => prev - 1)}
//                     >
//                       <ChevronLeftIcon className="w-4 h-4" />
//                       Prev
//                     </button>
//                     <span className="text-sm text-gray-600">
//                       Page {currentPage} of {totalPages}
//                     </span>
//                     <button
//                       className="flex items-center px-3 py-1 text-sm text-gray-600 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
//                       disabled={currentPage === totalPages}
//                       onClick={() => setCurrentPage((prev) => prev + 1)}
//                     >
//                       Next
//                       <ChevronRightIcon className="w-4 h-4" />
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
//           ) : (
//             <button
//               key={item.key}
//               className={`flex items-center p-4 w-full text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition ${
//                 selectedTab === item.key ? "bg-blue-50 text-blue-700" : ""
//               }`}
//               onClick={() => setSelectedTab(item.key)}
//             >
//               <item.icon className={`w-5 h-5 mr-3 ${item.color}`} />
//               <span className="text-sm font-medium">{item.label}</span>
//             </button>
//           )
//         )}
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;

import React, { useState, useEffect } from "react";
import {
  HomeIcon,
  CalendarIcon,
  SettingsIcon,
  LogOutIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";

const Sidebar = () => {
  const [appointments, setAppointments] = useState([
    { time: "8:00 AM", patient: "FERRY, ADAM", type: "PHYSICAL EXAM", duration: "60 min" },
    { time: "9:00 AM", patient: "JANE DOE", type: "FOLLOW-UP", duration: "30 min" },
    { time: "10:30 AM", patient: "JOHN SMITH", type: "CONSULTATION", duration: "45 min" },
    { time: "11:00 AM", patient: "RACHEL GREEN", type: "PHYSICAL EXAM", duration: "60 min" },
    { time: "1:00 PM", patient: "ROSS GELLER", type: "CHECKUP", duration: "30 min" },
    { time: "2:00 PM", patient: "MONICA GELLER", type: "FOLLOW-UP", duration: "45 min" },
    { time: "3:00 PM", patient: "CHANDLER BING", type: "CONSULTATION", duration: "60 min" },
    { time: "4:30 PM", patient: "JOEY TRIBBIANI", type: "CHECKUP", duration: "30 min" },
    { time: "5:00 PM", patient: "PHOEBE BUFFAY", type: "CONSULTATION", duration: "45 min" },
    { time: "6:30 PM", patient: "RACHEL GREEN", type: "FOLLOW-UP", duration: "30 min" },
  ]);

  // const [currentDate, setCurrentDate] = useState("");
  const [selectedTab, setSelectedTab] = useState("dashboard");
  const [isAppointmentsOpen, setIsAppointmentsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentTimezone, setCurrentTimezone] = useState("America/New_York");
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  
  // Function to handle timezone change
  const handleTimezoneChange = (timezone) => {
    setCurrentTimezone(timezone);
  };
  
  // Update the date and time whenever timezone changes
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
  
      // Options for date formatting
      const dateOptions = {
        timeZone: currentTimezone,
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
  
      // Options for time formatting
      const timeOptions = {
        timeZone: currentTimezone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
  
      // Update state with formatted date and time
      setCurrentDate(now.toLocaleDateString("en-US", dateOptions));
      setCurrentTime(now.toLocaleTimeString("en-US", timeOptions));
    };
  
    // Initial update
    updateDateTime();
  
    // Update time every second
    const interval = setInterval(updateDateTime, 1000);
  
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentTimezone]);
  
  const appointmentsPerPage = 8;

  // Calculate the number of pages
  const totalPages = Math.ceil(appointments.length / appointmentsPerPage);

  // Get appointments for the current page
  const currentAppointments = appointments.slice(
    (currentPage - 1) * appointmentsPerPage,
    currentPage * appointmentsPerPage
  );

  // Fetch the current date in EST format
  useEffect(() => {
    const options = {
      timeZone: "America/New_York",
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const now = new Date().toLocaleDateString("en-US", options);
    setCurrentDate(now);
  }, []);

  const navItems = [
    { label: "Dashboard", icon: HomeIcon, key: "dashboard", color: "text-blue-600" },
    { label: "Appointments", icon: CalendarIcon, key: "appointments", color: "text-green-600" },
    // { label: "Settings", icon: SettingsIcon, key: "settings", color: "text-orange-600" },
    { label: "Logout", icon: LogOutIcon, key: "logout", color: "text-red-600" },
  ];

  const cardColors = [
    "bg-blue-100 border-blue-500",
    "bg-green-100 border-green-500",
    "bg-yellow-100 border-yellow-500",
    "bg-orange-100 border-orange-500",
    "bg-purple-100 border-purple-500",
  ];

  return (
    <div className=" top-0 left-0 h-screen w-64 bg-white  flex flex-col transition-all duration-300">
      {/* Logo Section */}
      {/* <div className="p-5 border-b">
        <h1 className="text-xl font-bold text-blue-700 animate-pulse">EST | {currentDate}</h1>
       
      </div> */}
 <div className="p-3 border-b">
  <div className="flex items-center justify-between">
    {/* Date and Time */}
    <div className="relative">
      <select
        className="block appearance-none bg-blue-700 text-white font-bold px-3 py-1   rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={currentTimezone}
        onChange={(e) => handleTimezoneChange(e.target.value)}
      >
        <option value="America/New_York">EST</option>
        <option value="America/Chicago">CST</option>
        <option value="America/Denver">MST</option>
        <option value="America/Los_Angeles">PST</option>
      </select>
    </div>
    <div className="ml-5">
      <h1 className="text-xs font-bold text-blue-700 animate-pulse">
        {currentDate}
      </h1>
      <h2 className="text-xs font-bold text-green-700">{currentTime}</h2>
    </div>

    {/* Timezone Dropdown */}
 
  </div>
</div>



      {/* Navigation Section */}
      <nav className="flex-grow">
        {navItems.map((item) =>
          item.key === "appointments" ? (
            <div key={item.key}>
              <button
                className={`flex items-center p-4 w-full text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition ${
                  selectedTab === item.key ? "bg-blue-50 text-blue-700" : ""
                }`}
                onClick={() => {
                  setSelectedTab(item.key);
                  setIsAppointmentsOpen(!isAppointmentsOpen);
                }}
              >
                <item.icon className={`w-5 h-5 mr-3 ${item.color}`} />
                <span className="text-sm font-medium">{item.label}</span>
                {isAppointmentsOpen ? (
                  <ChevronUpIcon className="w-5 h-5 ml-auto" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5 ml-auto" />
                )}
              </button>

              {/* Appointments Dropdown */}
              {isAppointmentsOpen && (
                <div className="bg-gray-50 rounded-md shadow-inner transition-all duration-300">
                  <div className="p-4 border-b">
                    <h3 className="text-sm font-bold text-gray-600">Appointments</h3>
                    <p className="text-xs text-gray-500">{currentDate}</p>
                  </div>
                  {currentAppointments.map((appointment, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between p-3 mb-3 border-l-4 shadow-sm rounded-lg hover:shadow-lg transition duration-200 transform hover:-translate-y-4 ${
                        cardColors[index % cardColors.length]
                      }`}
                    >
                      <div className="text-left">
                        <h4 className="text-blue-700 font-bold">{appointment.time}</h4>
                        <p className="text-sm text-gray-700">{appointment.patient}</p>
                        <p className="text-xs text-gray-600">
                          {appointment.type} - {appointment.duration}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-gray-500">EST</span>
                      </div>
                    </div>
                  ))}
                  {/* Pagination */}
                  <div className="flex items-center justify-between px-4 py-2 border-t bg-white">
                    <button
                      className="flex items-center px-3 py-1 text-sm text-gray-600 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage((prev) => prev - 1)}
                    >
                      <ChevronLeftIcon className="w-3 h-3" />
                      Prev
                    </button>
                    <span className="text-sm text-gray-900">
                      Page {currentPage} of {totalPages}
                    </span>
                    <button
                      className="flex items-center px-3 py-1 text-sm text-gray-600 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
                      disabled={currentPage === totalPages}
                      onClick={() => setCurrentPage((prev) => prev + 1)}
                    >
                      Next
                      <ChevronRightIcon className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <button
              key={item.key}
              className={`flex items-center p-4 w-full text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition ${
                selectedTab === item.key ? "bg-blue-50 text-blue-700" : ""
              }`}
              onClick={() => setSelectedTab(item.key)}
            >
              <item.icon className={`w-5 h-5 mr-3 ${item.color}`} />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          )
        )}
      </nav>
    </div>
  );
};

export default Sidebar;
