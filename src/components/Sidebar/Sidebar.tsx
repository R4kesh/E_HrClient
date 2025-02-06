
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { FaUser,FaClipboard, FaShoppingCart, FaClipboardList,FaMicroscope, FaUsers,FaCog, FaBell, FaCalendarAlt, FaTasks, FaHistory, FaStickyNote, FaDollarSign, FaFileMedicalAlt,
//   FaPills,FaFileMedical,FaNotesMedical,FaFileInvoice,FaBriefcaseMedical,FaConnectdevelop,FaSyringe
// ,FaHandHoldingMedical,FaHospitalUser,FaHeartbeat } from 'react-icons/fa';
// import { MdKeyboardArrowDown } from 'react-icons/md';
// import { Link, useParams } from 'react-router-dom';
// import { useTabs } from '../../Context/TabProvider';

// export function Sidebar() {
//   const { id } = useParams(); // Get patient ID from the route
//   const { addTab } = useTabs();

//   const [isPatientOpen, setIsPatientOpen] = useState(false);
//   const [patient, setPatient] = useState(null); // State to store patient details
//   const [loading, setLoading] = useState(true); // Loading state
//   const [showMore, setShowMore] = useState(false);

//   const toggleDetails = () => {
//     setShowMore((prev) => !prev);
//   };
//   useEffect(() => {
//     if (id) {
//       fetchPatientDetails();
//     }
//   }, [id]);

//   const fetchPatientDetails = async () => {
//     try {
//       setLoading(true); // Set loading to true
//       const response = await axios.get(
//         `${import.meta.env.VITE_BASE_URL}/api/patient/getPatient/${id}`
//       );
//       setPatient(response.data);
//     } catch (error) {
//       console.error("Error fetching patient details:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     addTab({ id: "/dashboard", name: "Home", path: `/dashboard/${id}` });
//   }, [addTab]);

//   return (
//     <div className="flex h-screen bg-gray-100">
     
//       <div className="w-64 bg-white ">
// <div className="p-4 bg-white rounded-lg">
//   {loading ? (
//     <div className="text-center text-gray-500">Loading...</div>
//   ) : patient ? (
//     <>
//       <div className="flex flex-col items-center space-y-4">
//         {/* Patient Image */}
//         <div
//           className="w-24 h-24 bg-gray-300 rounded-full overflow-hidden border-2 border-blue-500 cursor-pointer"
//           onMouseEnter={() =>
//             document.getElementById('details-section').classList.add('max-h-[300px]')
//           }
//           onMouseLeave={() =>
//             document.getElementById('details-section').classList.remove('max-h-[300px]')
//           }
//         >
//           <img
//             src={`${import.meta.env.VITE_BASE_URL}${patient.patientImage}`}
//             alt="Patient"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Patient Name */}
//         <div
//           className="text-center cursor-pointer"
//           onMouseEnter={() =>
//             document.getElementById('details-section').classList.add('max-h-[300px]')
//           }
//           onMouseLeave={() =>
//             document.getElementById('details-section').classList.remove('max-h-[300px]')
//           }
//         >
//           <div className="text-lg font-semibold text-gray-800">{patient.firstName} {patient.lastName}</div>
//           <div className="text-sm text-gray-500">DOB: {patient.dateOfBirth}</div>
//         </div>
//       </div>

//       {/* Additional Details Section (shown on hover) */}
//       <div
//         id="details-section"
//         className="overflow-hidden max-h-0 transition-all duration-500 ease-in-out  rounded-md shadow-md  p-4 space-y-2"
//       >
//         <p></p>
//         <br />

       
//         <div className="bg-blue-gray-50 space-y-2 text-center">
//         <div className="text-sm text-gray-600">Phone: {patient.phoneNumber}</div>
//         <div className="text-sm text-gray-600">Insurance: {patient.insuranceCarrier}</div>
//         <div className=" text-sm text-gray-600">Plan: {patient.insurancePlanName}</div>
//         <div>
//           <button className="text-blue-600 hover:text-blue-800 text-xs">Pharmacy Details</button>
//         </div>
//         <div className="text-sm text-gray-600">Last Visit: {patient.lastVisit}</div>
//         </div>
//       </div>
//     </>
//   ) : (
//     <div className="text-center text-gray-500">No patient data available</div>
//   )}
// </div>





// //         {/* Sidebar menu */}
// //         <div className="p-2">
      

// //           {/* Other Menu Items */}
// //           <div className=" space-y-1 ">
// //             {/* <Link to={`/inception/${id}`}><button className="flex items-center text-gray-700 hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
// //               <FaUser size={20} className="mr-2 text-purple-500 hover:text-indigo-500 transition duration-300" />
// //               Inception
// //             </button></Link> */}
// //             <Link to={`/reviewsystem/${id}`}><button className="flex items-center text-black hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
// //               <FaCog size={20} className="mr-2 text-green-500 hover:text-green-700 transition duration-300" />
// //               Review of System
// //             </button></Link>
// //             <Link to={`/vitals/${id}`} ><button className="flex items-center text-black hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
// //               <FaBell size={20} className="mr-2 text-orange-500 hover:text-orange-700 transition duration-300" />
// //               Vitals
// //             </button></Link>
// //             <Link to={`/allergies/${id}`} ><button className="flex items-center text-black hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
// //               <FaClipboardList size={20} className="mr-3 text-blue-500" />
// //               Allergies
// //             </button>
// //             </Link>
// //             <Link to={`/medication/${id}`} >
// //             <button className="flex items-center text-black hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
// //               <FaPills size={20} className="mr-3 text-purple-500" />
// //               Medications
// //             </button>
// //             </Link>
// //             <Link to={`/LabOrders/${id}`} ><button className="flex items-center text-black hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
// //               <FaMicroscope size={20} className="mr-3 text-orange-500" />
// //               Lab Orders
// //             </button>
// //             </Link>
// //             <Link to={`/message/${id}`} >
// //             <button className="flex items-center text-black hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
// //               <FaBell size={20} className="mr-3 text-yellow-500" />
// //               Messages
// //             </button>
// //             </Link>


// //             <Link to={`/quickMemo/${id}`} >
// //             <button className="flex items-center text-black hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
// //               <FaClipboard size={20} className="mr-3 text-yellow-500" />
// //               Quick Memos
// //             </button>
// //             </Link>

// //             {/* <button className="flex items-center text-gray-700 hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-1">
// //               <FaFileMedical size={20} className="mr-3 text-green-500" />
// //               Advanced Directives
// //             </button> */}

// //             <Link to={`/healthWatcher/${id}`} >
// //             <button className="flex items-center text-black hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
// //               <FaNotesMedical size={20} className="mr-3 text-blue-500" />
// //               Health Watcher
// //             </button>
// //             </Link>
// //             <Link to={`/encounter/${id}`} ><button className="flex items-center text-black hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
// //               <FaFileInvoice size={20} className="mr-3 text-teal-500" />
// //               Encounters
// //             </button></Link>
// //             {/* <button className="flex items-center text-gray-700 hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
// //               <FaUsers size={20} className="mr-3 text-orange-500" />
// //               Care Team
// //             </button> */}
// //             <Link to={`/problems/${id}`} >
// //             <button className="flex items-center text-black hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
// //               <FaTasks size={20} className="mr-3 text-purple-500" />
// //               Problems
// //             </button>
// //             </Link>
// //             <Link to={`/notes/${id}`} >
// //             <button className="flex items-center text-black hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
// //               <FaStickyNote size={20} className="mr-3 text-yellow-500" />
// //               Notes
// //             </button>
// //             </Link>
// //             <button className="flex items-center text-black hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
// //               <FaBriefcaseMedical size={20} className="mr-3 text-green-500" />
// //               Plan Summary
// //             </button>
// //             <button className="flex items-center text-black hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
// //               <FaFileMedical size={20} className="mr-3 text-teal-500" />
// //               Documents
// //             </button>
// //             <Link to={`/result/${id}`} ><button className="flex items-center text-black hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
// //           <FaFileInvoice size={20} className="mr-3 text-blue-500" />
// //               Results
// //             </button>
// //             </Link>
// //             <Link to={`/immunizations/${id}`} >
// //             <button className="flex items-center text-black hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
// //               <FaSyringe size={20} className="mr-3 text-red-500" />
// //               Immunizations
// //             </button>
// //             </Link>

// //             <Link to={`/immunotherapy/${id}`} > <button className="flex items-center text-black hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
// //               <FaHandHoldingMedical size={20} className="mr-3 text-green-500" />
// //               Immunotherapy
// //             </button></Link>
// //             <Link to={`/riskfactor/${id}`} ><button className="flex items-center text-black hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
// //               <FaHeartbeat size={20} className="mr-3 text-orange-500" />
// //               Risk Factors
// //             </button>
// //             </Link>
// //             <Link to={`/implimentableDevice/${id}`} >
// //             <button className="flex items-center text-black hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-2">
// //               <FaHospitalUser size={20} className="mr-3 text-purple-500" />
// //               Implantable Devices
// //             </button>
// //             </Link>


// //             <Link to={`/familyConnection/${id}`} >

// //             <button className="flex items-center text-black hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
// //               <FaConnectdevelop size={20} className="mr-3 text-yellow-500" />
// //               Family Connections
// //             </button>
// //             </Link>
// //             <Link to={`/refferal/${id}`} >

// //             <button className="flex items-center text-black hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
// //               <FaNotesMedical size={20} className="mr-3 text-teal-500" />
// //               Referrals
// //             </button>
// //             </Link>

// //             {/* <button className="flex items-center text-gray-700 hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
// //               <FaDollarSign size={20} className="mr-3 text-teal-500" />
// //               Billing
// //             </button> */}
// //           </div>
// //         </div>
// //       </div>

//       {/* Main content area */}
     
//     </div>
//   );
// }



// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { FaUser, FaClipboard, FaShoppingCart, FaClipboardList, FaMicroscope, FaUsers, FaCog, FaBell, FaCalendarAlt, FaTasks, FaHistory, FaStickyNote, FaDollarSign, FaFileMedicalAlt, FaPills, FaFileMedical, FaNotesMedical, FaFileInvoice, FaBriefcaseMedical, FaConnectdevelop, FaSyringe, FaHandHoldingMedical, FaHospitalUser, FaHeartbeat } from 'react-icons/fa';
// import { MdKeyboardArrowDown } from 'react-icons/md';
// import { Link, useParams } from 'react-router-dom';
// import { useTabs } from '../../Context/TabProvider';

// export function Sidebar() {
//   const { id } = useParams();
//   const { addTab } = useTabs();

//   const [isPatientOpen, setIsPatientOpen] = useState(false);
//   const [patient, setPatient] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [showMore, setShowMore] = useState(false);

//   const toggleDetails = () => {
//     setShowMore((prev) => !prev);
//   };

//   useEffect(() => {
//     if (id) {
//       fetchPatientDetails();
//     }
//   }, [id]);

//   const fetchPatientDetails = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/patient/getPatient/${id}`);
//       setPatient(response.data);
//     } catch (error) {
//       console.error("Error fetching patient details:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     addTab({ id: "/dashboard", name: "Home", path: `/dashboard/${id}` });
//   }, [addTab]);

//   return (
//     <div className="flex h-screen bg-gray-100">
//       <div className="w-64 bg-[#F8FCFF] shadow-md">
//         <div className="p-4 bg-white rounded-lg">
//           {loading ? (
//             <div className="text-center text-gray-500">Loading...</div>
//           ) : patient ? (
//             <>
//               <div className="flex flex-col items-center space-y-4">
//                 <div className="w-24 h-24 bg-gray-300 rounded-full overflow-hidden border-2 border-blue-500 cursor-pointer">
//                   <img
//                     src={`${import.meta.env.VITE_BASE_URL}${patient.patientImage}`}
//                     alt="Patient"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="text-center cursor-pointer">
//                   <div className="text-lg font-semibold text-gray-800">{patient.firstName} {patient.lastName}</div>
//                   <div className="text-sm text-gray-500">DOB: {patient.dateOfBirth}</div>
//                 </div>
//               </div>
//               <div id="details-section" className="overflow-hidden max-h-0 transition-all duration-500 ease-in-out rounded-md shadow-md p-4 space-y-2">
//                 <div className="bg-blue-gray-50 space-y-2 text-center">
//                   <div className="text-sm text-gray-600">Phone: {patient.phoneNumber}</div>
//                   <div className="text-sm text-gray-600">Insurance: {patient.insuranceCarrier}</div>
//                   <div className="text-sm text-gray-600">Plan: {patient.insurancePlanName}</div>
//                   <div>
//                     <button className="text-blue-600 hover:text-blue-800 text-xs">Pharmacy Details</button>
//                   </div>
//                   <div className="text-sm text-gray-600">Last Visit: {patient.lastVisit}</div>
//                 </div>
//               </div>
//             </>
//           ) : (
//             <div className="text-center text-gray-500">No patient data available</div>
//           )}
//         </div>

//         {/* Sidebar menu */}
//         <div className="p-2">
//           <ul className="space-y-2">
//             <li className="bg-[#002D62] text-white flex items-center gap-3 p-3 rounded-lg font-bold">
//               <FaUser size={20} />
//               Dashboard
//             </li>
//             <li className="bg-[#EEF7FF] text-[#002D62] flex items-center gap-3 p-3 rounded-lg font-medium">
//               <FaCalendarAlt size={18} />
//               Upcoming Appointment
//             </li>
//             <ul className="pl-6 space-y-1 text-[#002D62] font-medium">
//               <li className="flex items-center gap-2">
//                 <span className="text-[#00AEEF]">▶</span> Televist
//               </li>
//               <li className="flex items-center gap-2">
//                 <span className="text-[#00AEEF]">▶</span> In-person appointment
//               </li>
//             </ul>
//             <li className="bg-[#EEF7FF] text-[#002D62] flex items-center gap-3 p-3 rounded-lg font-medium">
//               <FaClipboard size={18} />
//               Feedback Review
//             </li>

//             <li className="bg-[#EEF7FF] text-[#002D62] flex items-center justify-between p-3 rounded-lg font-medium">
//               <div className="flex items-center gap-3">
//                 <FaClipboardList size={18} />
//                 Calendar Configuration
//               </div>
//               <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">1</span>
//             </li>

//             <li className="bg-[#EEF7FF] text-[#002D62] flex items-center justify-between p-3 rounded-lg font-medium">
//               <div className="flex items-center gap-3">
//                 <FaCog size={18} />
//                 Consultation Configuration
//               </div>
//               <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">1</span>
//             </li>

//             <li className="bg-[#EEF7FF] text-[#002D62] flex items-center gap-3 p-3 rounded-lg font-medium">
//               <FaUser size={18} />
//               Profile Info
//             </li>

//             <li className="bg-[#EEF7FF] text-[#002D62] flex items-center gap-3 p-3 rounded-lg font-medium">
//               <FaNotesMedical size={18} />
//               Patient Eligibility Summary
//             </li>

//             <li className="bg-[#EEF7FF] text-[#002D62] flex items-center justify-between p-3 rounded-lg font-medium">
//               <div className="flex items-center gap-3">
//                 <FaDollarSign size={18} />
//                 Payment
//               </div>
//               <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">1</span>
//             </li>

//             <li className="bg-[#EEF7FF] text-[#002D62] flex items-center gap-3 p-3 rounded-lg font-medium">
//               <FaSyringe size={18} />
//               Immunizations
//             </li>

//             <li className="bg-[#EEF7FF] text-[#002D62] flex items-center gap-3 p-3 rounded-lg font-medium">
//               <FaHandHoldingMedical size={18} />
//               Immunotherapy
//             </li>

//             <li className="bg-[#EEF7FF] text-[#002D62] flex items-center gap-3 p-3 rounded-lg font-medium">
//               <FaHeartbeat size={18} />
//               Risk Factors
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }


// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { FaUser, FaClipboard, FaShoppingCart, FaClipboardList, FaMicroscope, FaUsers, FaCog, FaBell, FaCalendarAlt, FaTasks, FaHistory, FaStickyNote, FaDollarSign, FaFileMedicalAlt, FaPills, FaFileMedical, FaNotesMedical, FaFileInvoice, FaBriefcaseMedical, FaConnectdevelop, FaSyringe, FaHandHoldingMedical, FaHospitalUser, FaHeartbeat } from 'react-icons/fa';
// import { MdKeyboardArrowDown } from 'react-icons/md';
// import { Link, useParams } from 'react-router-dom';
// import { useTabs } from '../../Context/TabProvider';

// export function Sidebar() {
//   const { id } = useParams(); // Get patient ID from the route
//   const { addTab } = useTabs();

//   const [isPatientOpen, setIsPatientOpen] = useState(false);
//   const [patient, setPatient] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [showMore, setShowMore] = useState(false);

//   useEffect(() => {
//     if (id) {
//       fetchPatientDetails();
//     }
//   }, [id]);

//   const fetchPatientDetails = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/patient/getPatient/${id}`);
//       setPatient(response.data);
//     } catch (error) {
//       console.error("Error fetching patient details:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     addTab({ id: "/dashboard", name: "Home", path: `/dashboard/${id}` });
//   }, [addTab]);

//   return (
//     <div className="flex h-screen bg-gray-100">
//       <div className="w-64 bg-[#F8FCFF] shadow-md">
//         <div className="p-4 bg-white rounded-lg">
//           {loading ? (
//             <div className="text-center text-gray-500">Loading...</div>
//           ) : patient ? (
//             <>
//               <div className="flex flex-col items-center space-y-4">
//                 <div className="w-24 h-24 bg-gray-300 rounded-full overflow-hidden border-2 border-blue-500 cursor-pointer">
//                   <img src={`${import.meta.env.VITE_BASE_URL}${patient.patientImage}`} alt="Patient" className="w-full h-full object-cover" />
//                 </div>
//                 <div className="text-center cursor-pointer">
//                   <div className="text-lg font-semibold text-gray-800">{patient.firstName} {patient.lastName}</div>
//                   <div className="text-sm text-gray-500">DOB: {patient.dateOfBirth}</div>
//                 </div>
//               </div>
//             </>
//           ) : (
//             <div className="text-center text-gray-500">No patient data available</div>
//           )}
//         </div>

//         <div className="p-2">
//           <ul className="space-y-2">
           
          
//             <li className="bg-[#EEF7FF] text-[#002D62] flex items-center gap-3 p-3 rounded-lg font-medium">
//               <FaClipboard size={18} /> Review of System
//             </li>
//             <li className="bg-[#EEF7FF] text-[#002D62] flex items-center gap-3 p-3 rounded-lg font-medium">
//               <FaBell size={18} /> Vitals
//             </li>
//             <li className="bg-[#EEF7FF] text-[#002D62] flex items-center gap-3 p-3 rounded-lg font-medium">
//               <FaCalendarAlt size={18} /> Allergies
//             </li>
//             <li className="bg-[#EEF7FF] text-[#002D62] flex items-center gap-3 p-3 rounded-lg font-medium">
//               <FaPills size={18} /> Medications
//             </li>
//             <li className="bg-[#EEF7FF] text-[#002D62] flex items-center gap-3 p-3 rounded-lg font-medium">
//               <FaMicroscope size={18} /> Lab Orders
//             </li>
//             <li className="bg-[#EEF7FF] text-[#002D62] flex items-center gap-3 p-3 rounded-lg font-medium">
//             <FaBell size={18} /> Messages
//             </li>
//             <li className="bg-[#EEF7FF] text-[#002D62] flex items-center gap-3 p-3 rounded-lg font-medium">
//             <FaClipboard size={18}/> Quick Memo
//             </li>
//             <li className="bg-[#EEF7FF] text-[#002D62] flex items-center gap-3 p-3 rounded-lg font-medium">
//               <FaMicroscope size={18} /> Health Watcher
//             </li>
//             <li className="bg-[#EEF7FF] text-[#002D62] flex items-center gap-3 p-3 rounded-lg font-medium">
//               <FaMicroscope size={18} /> Encounters
//             </li>
//             <li className="bg-[#EEF7FF] text-[#002D62] flex items-center gap-3 p-3 rounded-lg font-medium">
//               <FaMicroscope size={18} /> Problems
//             </li>
//             <li className="bg-[#EEF7FF] text-[#002D62] flex items-center gap-3 p-3 rounded-lg font-medium">
//               <FaMicroscope size={18} /> Notes
//             </li>
            // <li className="bg-[#EEF7FF] text-[#002D62] flex items-center gap-3 p-3 rounded-lg font-medium">
            //   <FaMicroscope size={18} /> Plan Summary
            // </li>
            // <li className="bg-[#EEF7FF] text-[#002D62] flex items-center gap-3 p-3 rounded-lg font-medium">
            //   <FaMicroscope size={18} /> Documents
            // </li>
            // <li className="bg-[#EEF7FF] text-[#002D62] flex items-center gap-3 p-3 rounded-lg font-medium">
            //   <FaMicroscope size={18} /> Results
            // </li>

            // <li className="bg-[#EEF7FF] text-[#002D62] flex items-center gap-3 p-3 rounded-lg font-medium">
            //   <FaSyringe size={18} /> Immunizations
            // </li>
            // <li className="bg-[#EEF7FF] text-[#002D62] flex items-center gap-3 p-3 rounded-lg font-medium">
            //   <FaHandHoldingMedical size={18} /> Immunotherapy
            // </li>
            // <li className="bg-[#EEF7FF] text-[#002D62] flex items-center gap-3 p-3 rounded-lg font-medium">
            //   <FaHeartbeat size={18} /> Risk Factors
            // </li>
            // <li className="bg-[#EEF7FF] text-[#002D62] flex items-center gap-3 p-3 rounded-lg font-medium">
            //   <FaMicroscope size={18} /> Implantable Device
            // </li>
            // <li className="bg-[#EEF7FF] text-[#002D62] flex items-center gap-3 p-3 rounded-lg font-medium">
            //   <FaMicroscope size={18} /> Family Connections
            // </li>
            // <li className="bg-[#EEF7FF] text-[#002D62] flex items-center gap-3 p-3 rounded-lg font-medium">
            //   <FaMicroscope size={18} /> Referrals
            // </li>
          
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }




// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { FaUser, FaClipboard, FaShoppingCart, FaClipboardList, FaMicroscope, FaUsers, FaCog, FaBell, FaCalendarAlt, FaTasks, FaHistory, FaStickyNote, FaDollarSign, FaFileMedicalAlt, FaPills, FaFileMedical,  FaFileInvoice, FaBriefcaseMedical, FaConnectdevelop, FaSyringe, FaHandHoldingMedical, FaHospitalUser, FaHeartbeat, FaFile, FaEnvelope, FaNotesMedical, FaStethoscope, FaProcedures, FaUserMd, FaBriefcase, FaBookMedical, FaAllergies, FaSearch } from 'react-icons/fa';
// import { MdKeyboardArrowDown } from 'react-icons/md';
// import { Link, useParams } from 'react-router-dom';
// import { useTabs } from '../../Context/TabProvider';

// export function Sidebar() {
//   const { id } = useParams();
//   const { addTab } = useTabs();

//   const [isPatientOpen, setIsPatientOpen] = useState(false);
//   const [patient, setPatient] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [showMore, setShowMore] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');

  // useEffect(() => {
  //   if (id) {
  //     fetchPatientDetails();
  //   }
  // }, [id]);

//   const fetchPatientDetails = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/patient/getPatient/${id}`);
//       setPatient(response.data);
//     } catch (error) {
//       console.error("Error fetching patient details:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSearch = (e) => {
//     setSearchQuery(e.target.value);
//   };
//   useEffect(() => {
//     addTab({ id: "/dashboard", name: "Home", path: `/dashboard/${id}` });
//   }, [addTab]);

//   return (
//     <div className="flex h-screen bg-gray-100">
//       <div className="w-64 bg-[#F8FCFF] shadow-md">
        


//  <div className="p-4 bg-white rounded-lg">
//   {loading ? (
//     <div className="text-center text-gray-500">Loading...</div>
//   ) : patient ? (
//     <>
//       <div className="flex flex-col items-center space-y-4">
        
//         <div
//           className="w-24 h-24 bg-gray-300 rounded-full overflow-hidden border-2 border-blue-500 cursor-pointer"
//           onMouseEnter={() =>
//             document.getElementById('details-section').classList.add('max-h-[300px]')
//           }
//           onMouseLeave={() =>
//             document.getElementById('details-section').classList.remove('max-h-[300px]')
//           }
//         >
//           <img
//             src={`${import.meta.env.VITE_BASE_URL}${patient.patientImage}`}
//             alt="Patient"
//             className="w-full h-full object-cover"
//           />
//         </div>

        
//         <div
//           className="text-center cursor-pointer"
//           onMouseEnter={() =>
//             document.getElementById('details-section').classList.add('max-h-[300px]')
//           }
//           onMouseLeave={() =>
//             document.getElementById('details-section').classList.remove('max-h-[300px]')
//           }
//         >
//           <div className="text-lg font-semibold text-gray-800">{patient.firstName} {patient.lastName}</div>
//           <div className="text-sm text-gray-500">DOB: {patient.dateOfBirth}</div>
//         </div>
//       </div>

     
//       <div
//         id="details-section"
//         className="overflow-hidden max-h-0 transition-all duration-500 ease-in-out  rounded-md shadow-md  p-4 space-y-2"
//       >
//         <p></p>
//         <br />

       
//         <div className="bg-blue-gray-50 space-y-2 text-center">
//         <div className="text-sm text-gray-600">Phone: {patient.phoneNumber}</div>
//         <div className="text-sm text-gray-600">Insurance: {patient.insuranceCarrier}</div>
//         <div className=" text-sm text-gray-600">Plan: {patient.insurancePlanName}</div>
//         <div>
//           <button className="text-blue-600 hover:text-blue-800 text-xs">Pharmacy Details</button>
//         </div>
//         <div className="text-sm text-gray-600">Last Visit: {patient.lastVisit}</div>
//         </div>
//       </div>
//     </>
//   ) : (
//     <div className="text-center text-gray-500">No patient data available</div>
//   )}
// </div> 
//         <div className="p-2 ">
//           <ul className="space-y-2 ">
//           <li className="bg-[#002D62] text-white flex items-center gap-3 p-3 rounded-lg font-bold ">
         
//             <input
//               type="text"
//               placeholder="Search..."
//               value={searchQuery}
//               onChange={handleSearch}
//               className="w-full p-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//             <FaSearch className="absolute left-3 top-3 text-gray-500" size={18} />
         
//             </li>
            
//             <Link to={`/reviewsystem/${id}`}> <li className="bg-[#EEF7FF] text-[#002D62] flex items-center gap-3 p-3  font-medium shadow-sm rounded-lg hover:shadow-lg hover:bg-blue-100 transition border-l-4 duration-100 transform hover:-translate-y-1">
//               <FaStethoscope size={18} /> Review of System
//             </li></Link>
//             <Link to={`/vitals/${id}`} ><li className="bg-[#EEF7FF] text-[#002D62] flex items-center gap-3 p-3  font-medium rounded-lg shadow-sm  hover:shadow-lg hover:bg-blue-100 transition border-l-4 duration-100 transform hover:-translate-y-1">
//               <FaHeartbeat size={18} /> Vitals
//             </li></Link>
//             <Link to={`/allergies/${id}`} ><li className="bg-[#EEF7FF] text-[#002D62] flex items-center gap-3 p-3 rounded-lg font-medium shadow-sm  hover:shadow-lg hover:bg-blue-100 transition border-l-4 duration-100 transform hover:-translate-y-1">
//               <FaAllergies size={18} /> Allergies
//             </li></Link>
//             <Link to={`/medication/${id}`} ><li className="bg-[#EEF7FF] text-[#002D62] flex items-center gap-3 p-3 rounded-lg font-medium shadow-sm  hover:shadow-lg hover:bg-blue-100 transition border-l-4 duration-100 transform hover:-translate-y-1">
//               <FaPills size={18} /> Medications
//             </li></Link>
//             <Link to={`/LabOrders/${id}`} ><li className="bg-[#EEF7FF] text-[#002D62] flex items-center gap-3 p-3 rounded-lg font-medium shadow-sm  hover:shadow-lg hover:bg-blue-100 transition border-l-4 duration-100 transform hover:-translate-y-1">
//               <FaMicroscope size={18} /> Lab Orders
//             </li></Link>
//             <Link to={`/message/${id}`} > <li className="bg-[#EEF7FF] text-[#002D62] flex items-center gap-3 p-3 rounded-lg font-medium shadow-sm  hover:shadow-lg hover:bg-blue-100 transition border-l-4 duration-100 transform hover:-translate-y-1">
//               <FaEnvelope size={18} /> Messages
//             </li></Link>
//             <Link to={`/quickMemo/${id}`} ><li className="bg-[#EEF7FF] text-[#002D62] flex items-center gap-3 p-3 rounded-lg font-medium shadow-sm  hover:shadow-lg hover:bg-blue-100 transition border-l-4 duration-100 transform hover:-translate-y-1">
//               <FaStickyNote size={18} /> Quick Memo
//             </li></Link>
//             <Link to={`/healthWatcher/${id}`} >
//             <li className="bg-[#EEF7FF] text-[#002D62] flex items-center gap-3 p-3 rounded-lg font-medium shadow-sm  hover:shadow-lg hover:bg-blue-100 transition border-l-4 duration-100 transform hover:-translate-y-1">
//               <FaNotesMedical size={18} /> Health Watcher
//             </li></Link>
//             <Link to={`/encounter/${id}`} > <li className="bg-[#EEF7FF] text-[#002D62] flex items-center gap-3 p-3 rounded-lg font-medium shadow-sm  hover:shadow-lg hover:bg-blue-100 transition border-l-4 duration-100 transform hover:-translate-y-1">
//               <FaFileMedicalAlt size={18} /> Encounters
//             </li></Link>
//             <Link to={`/problems/${id}`} ><li className="bg-[#EEF7FF] text-[#002D62] flex items-center gap-3 p-3 rounded-lg font-medium shadow-sm  hover:shadow-lg hover:bg-blue-100 transition border-l-4 duration-100 transform hover:-translate-y-1">
//               <FaTasks size={18} /> Problems
//             </li></Link>
//             <Link to={`/notes/${id}`} ><li className="bg-[#EEF7FF] text-[#002D62] flex items-center gap-3 p-3 rounded-lg font-medium shadow-sm  hover:shadow-lg hover:bg-blue-100 transition border-l-4 duration-100 transform hover:-translate-y-1">
//               <FaStickyNote size={18} /> Notes
//             </li></Link>
//             <li className="bg-[#EEF7FF] text-[#002D62] flex items-center gap-3 p-3 rounded-lg font-medium shadow-sm  hover:shadow-lg hover:bg-blue-100 transition border-l-4 duration-100 transform hover:-translate-y-1">
//             <FaBriefcaseMedical size={18} /> Plan Summary
//             </li>
//             <li className="bg-[#EEF7FF] text-[#002D62] flex items-center gap-3 p-3 rounded-lg font-medium shadow-sm  hover:shadow-lg hover:bg-blue-100 transition border-l-4 duration-100 transform hover:-translate-y-1">
//             <FaClipboard size={18}/> Documents
//             </li>
//             <Link to={`/result/${id}`} ><li className="bg-[#EEF7FF] text-[#002D62] flex items-center gap-3 p-3 rounded-lg font-medium shadow-sm hover:bg-blue-100  hover:shadow-lg transition border-l-4 duration-100 transform hover:-translate-y-1">
//               <FaMicroscope size={18} /> Results
//             </li></Link>

//             <Link to={`/immunizations/${id}`} > <li className="bg-[#EEF7FF] text-[#002D62] flex items-center gap-3 p-3 rounded-lg font-medium shadow-sm  hover:shadow-lg hover:bg-blue-100 transition border-l-4 duration-100 transform hover:-translate-y-1">
//               <FaSyringe size={18} /> Immunizations
//             </li></Link>
//             <Link to={`/immunotherapy/${id}`} ><li className="bg-[#EEF7FF] text-[#002D62] flex items-center gap-3 p-3 rounded-lg font-medium shadow-sm  hover:shadow-lg hover:bg-blue-100 transition border-l-4 duration-100 transform hover:-translate-y-1">
//               <FaHandHoldingMedical size={18} /> Immunotherapy
//             </li></Link>
//             <Link to={`/riskfactor/${id}`} ><li className="bg-[#EEF7FF] text-[#002D62] flex items-center gap-3 p-3 rounded-lg font-medium shadow-sm  hover:shadow-lg hover:bg-blue-100 transition border-l-4 duration-100 transform hover:-translate-y-1">
//               <FaHeartbeat size={18} /> Risk Factors
//             </li></Link>
//             <Link to={`/implimentableDevice/${id}`} ><li className="bg-[#EEF7FF] text-[#002D62] flex items-center gap-3 p-3 rounded-lg font-medium shadow-sm  hover:shadow-lg hover:bg-blue-100 transition border-l-4 duration-100 transform hover:-translate-y-1">
//             <FaHospitalUser size={18} /> Implantable Device
//             </li></Link>
//             <Link to={`/familyConnection/${id}`} ><li className="bg-[#EEF7FF] text-[#002D62] flex items-center gap-3 p-3 rounded-lg font-medium shadow-sm  hover:shadow-lg hover:bg-blue-100 transition border-l-4 duration-100 transform hover:-translate-y-1">
//             <FaConnectdevelop size={18} /> Family Connections
//             </li></Link>
//             <Link to={`/refferal/${id}`} ><li className="bg-[#EEF7FF] text-[#002D62] flex items-center gap-3 p-3 rounded-lg font-medium shadow-sm  hover:shadow-lg hover:bg-blue-100 transition border-l-4 duration-100 transform hover:-translate-y-1">
//             <FaNotesMedical size={18} /> Referrals
//             </li>
//             </Link>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaSearch, FaStethoscope, FaHeartbeat, FaAllergies, FaPills, FaMicroscope, FaEnvelope, FaStickyNote, FaNotesMedical, FaFileMedicalAlt, FaTasks, FaBriefcaseMedical, FaClipboard, FaSyringe, FaHandHoldingMedical, FaHospitalUser, FaConnectdevelop } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import { useTabs } from '../../Context/TabProvider';

export function Sidebar() {
  const { id } = useParams();
  const { addTab } = useTabs();

  const [isPatientOpen, setIsPatientOpen] = useState(false);

  const [loading, setLoading] = useState(true);
  const [patient, setPatient] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const sidebarItems = [
    { label: 'Review of System', icon: <FaStethoscope size={18} />, path: `/reviewsystem/${id}` },
    { label: 'Vitals', icon: <FaHeartbeat size={18} />, path: `/vitals/${id}` },
    { label: 'Allergies', icon: <FaAllergies size={18} />, path: `/allergies/${id}` },
    { label: 'Medications', icon: <FaPills size={18} />, path: `/medication/${id}` },
    { label: 'Lab Orders', icon: <FaMicroscope size={18} />, path: `/LabOrders/${id}` },
    { label: 'Messages', icon: <FaEnvelope size={18} />, path: `/message/${id}` },
    { label: 'Quick Memo', icon: <FaStickyNote size={18} />, path: `/quickMemo/${id}` },
    { label: 'Health Watcher', icon: <FaNotesMedical size={18} />, path: `/healthWatcher/${id}` },
    { label: 'Encounters', icon: <FaFileMedicalAlt size={18} />, path: `/encounter/${id}` },
    { label: 'Problems', icon: <FaTasks size={18} />, path: `/problems/${id}` },
    { label: 'Notes', icon: <FaStickyNote size={18} />, path: `/notes/${id}` },
    { label: 'Plan Summary', icon: <FaBriefcaseMedical size={18} />, path: `/planSummary/${id}` },
    { label: 'Documents', icon: <FaClipboard size={18} />, path: `/document/${id}` },
    { label: 'Results', icon: <FaMicroscope size={18} />, path: `/result/${id}` },
    { label: 'Immunizations', icon: <FaSyringe size={18} />, path: `/immunizations/${id}` },
    { label: 'Immunotherapy', icon: <FaHandHoldingMedical size={18} />, path: `/immunotherapy/${id}` },
    { label: 'Risk Factors', icon: <FaHeartbeat size={18} />, path: `/riskfactor/${id}` },
    { label: 'Implantable Device', icon: <FaHospitalUser size={18} />, path: `/implimentableDevice/${id}` },
    { label: 'Family Connections', icon: <FaConnectdevelop size={18} />, path: `/familyConnection/${id}` },
    { label: 'Referrals', icon: <FaNotesMedical size={18} />, path: `/refferal/${id}` },
  ];

  const filteredItems = sidebarItems.filter(item =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase())
  );
  useEffect(() => {
    if (id) {
      fetchPatientDetails();
    }
  }, [id]);
    const fetchPatientDetails = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/patient/getPatient/${id}`);
      setPatient(response.data);
    } catch (error) {
      console.error("Error fetching patient details:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-64 bg-[#F8FCFF] shadow-md">
      <div className="p-4 bg-white rounded-lg">
  {loading ? (
    <div className="text-center text-gray-500">Loading...</div>
  ) : patient ? (
    <>
      <div className="flex flex-col items-center space-y-2">
        {/* Patient Image */}
        <div
          className="w-24 h-24 bg-gray-300 rounded-full overflow-hidden border-2 border-blue-500 cursor-pointer"
          onMouseEnter={() =>
            document.getElementById('details-section').classList.add('max-h-[300px]')
          }
          onMouseLeave={() =>
            document.getElementById('details-section').classList.remove('max-h-[300px]')
          }
        >
          <img
            src={`${import.meta.env.VITE_BASE_URL}${patient.patientImage}`}
            alt="Patient"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Patient Name */}
        <div
          className="text-center cursor-pointer"
          onMouseEnter={() =>
            document.getElementById('details-section').classList.add('max-h-[300px]')
          }
          onMouseLeave={() =>
            document.getElementById('details-section').classList.remove('max-h-[300px]')
          }
        >
          <div className="text-lg font-semibold text-[#002D62]">{patient.firstName} {patient.lastName}</div>
          <div className="text-sm text-[#002D62]">DOB: {patient.dateOfBirth}</div>
        </div>
      </div>

      {/* Additional Details Section (shown on hover) */}
      <div
        id="details-section"
        className="overflow-hidden max-h-0 transition-all duration-500 ease-in-out  rounded-md shadow-md  p-4 space-y-2"
      >
        <p></p>
        <br />

       
        <div className="bg-blue-gray-50 space-y-2 text-center">
        <div className="text-sm text-[#002D62]">Phone: {patient.phoneNumber}</div>
        <div className="text-sm text-[#002D62]">Insurance: {patient.insuranceCarrier}</div>
        <div className=" text-sm text-[#002D62]">Plan: {patient.insurancePlanName}</div>
        <div>
          <button className="text-blue-600 hover:text-blue-800 text-xs">Pharmacy Details</button>
        </div>
        <div className="text-sm text-[#002D62]">Last Visit: {patient.lastVisit}</div>
        </div>
      </div>
    </>
  ) : (
    <div className="text-center text-gray-500">No patient data available</div>
  )}
</div>
        <div className="p-2">
          <div className="relative -mt-5">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-500" size={18} />
          </div>
          <ul className="space-y-1">
            {filteredItems.map((item, index) => (
              <Link key={index} to={item.path}>
                <li className="bg-[#EEF7FF] text-[#002D62] flex items-center gap-2 p-2 rounded-lg font-medium shadow-sm hover:shadow-lg hover:bg-blue-100 transition border-l-4 duration-100 transform hover:-translate-y-1">
                  {item.icon} {item.label}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
