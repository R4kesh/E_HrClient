// import React from "react";
// import {
//   Card,
//   Typography,
//   List,
//   ListItem,
//   ListItemPrefix,
//   ListItemSuffix,
//   Chip,
//   Accordion,
//   AccordionHeader,
//   AccordionBody,
//   Alert,
//   Input,
// } from "@material-tailwind/react";
// import {
//   PresentationChartBarIcon,
//   ShoppingBagIcon,
//   UserCircleIcon,
//   Cog6ToothIcon,
//   InboxIcon,
//   PowerIcon,
// } from "@heroicons/react/24/solid";
// import {
//   ChevronRightIcon,
//   ChevronDownIcon,
//   CubeTransparentIcon,
//   MagnifyingGlassIcon,
// } from "@heroicons/react/24/outline";
 
// export function Sidebar() {
//   const [open, setOpen] = React.useState(0);
//   const [openAlert, setOpenAlert] = React.useState(true);
 
//   const handleOpen = (value) => {
//     setOpen(open === value ? 0 : value);
//   };
 
//   return (
//     <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
//       <div className="mb-2 flex items-center gap-4 p-4">
//         <img src="https://docs.material-tailwind.com/img/logo-ct-dark.png" alt="brand" className="h-8 w-8" />
//         <Typography variant="h5" color="blue-gray">
//           Sidebar
//         </Typography>
//       </div>
//       <div className="p-2">
//         <Input icon={<MagnifyingGlassIcon className="h-5 w-5" />} label="Search" />
//       </div>
//       <List>
//         <Accordion
//           open={open === 1}
//           icon={
//             <ChevronDownIcon
//               strokeWidth={2.5}
//               className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
//             />
//           }
//         >
//           <ListItem className="p-0" selected={open === 1}>
//             <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
//               <ListItemPrefix>
//                 <PresentationChartBarIcon className="h-5 w-5" />
//               </ListItemPrefix>
//               <Typography color="blue-gray" className="mr-auto font-normal">
//               Notes
//               </Typography>
//             </AccordionHeader>
//           </ListItem>
//           <AccordionBody className="py-1">
//             <List className="p-0">
//               <ListItem>
//                 <ListItemPrefix>
//                   <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
//                 </ListItemPrefix>
//                 Plan summary
//               </ListItem>
//               <ListItem>
//                 <ListItemPrefix>
//                   <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
//                 </ListItemPrefix>
//                 Reporting
//               </ListItem>
//               <ListItem>
//                 <ListItemPrefix>
//                   <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
//                 </ListItemPrefix>
//                 Projects
//               </ListItem>
//             </List>
//           </AccordionBody>
//         </Accordion>
//         <Accordion
//           open={open === 2}
//           icon={
//             <ChevronDownIcon
//               strokeWidth={2.5}
//               className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
//             />
//           }
//         >
//           <ListItem className="p-0" selected={open === 2}>
//             <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
//               <ListItemPrefix>
//                 <ShoppingBagIcon className="h-5 w-5" />
//               </ListItemPrefix>
//               <Typography color="blue-gray" className="mr-auto font-normal">
//               Plan summary
//               </Typography>
//             </AccordionHeader>
//           </ListItem>
//           <AccordionBody className="py-1">
//             <List className="p-0">
//               <ListItem>
//                 <ListItemPrefix>
//                   <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
//                 </ListItemPrefix>
//                 Orders
//               </ListItem>
//               <ListItem>
//                 <ListItemPrefix>
//                   <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
//                 </ListItemPrefix>
//                 Products
//               </ListItem>
//             </List>
//           </AccordionBody>
//         </Accordion>
//         <hr className="my-2 border-blue-gray-50" />
//         <ListItem>
//           <ListItemPrefix>
//             <InboxIcon className="h-5 w-5" />
//           </ListItemPrefix>
//           Inbox
//           <ListItemSuffix>
//             <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
//           </ListItemSuffix>
//         </ListItem>
//         <ListItem>
//           <ListItemPrefix>
//             <UserCircleIcon className="h-5 w-5" />
//           </ListItemPrefix>
//           Profile
//         </ListItem>
//         <ListItem>
//           <ListItemPrefix>
//             <Cog6ToothIcon className="h-5 w-5" />
//           </ListItemPrefix>
//           Settings
//         </ListItem>
//         <ListItem>
//           <ListItemPrefix>
//             <PowerIcon className="h-5 w-5" />
//           </ListItemPrefix>
//           Log Out
//         </ListItem>
//       </List>
//       <Alert open={openAlert} className="mt-auto" onClose={() => setOpenAlert(false)}>
//         <CubeTransparentIcon className="mb-4 h-12 w-12" />
//         <Typography variant="h6" className="mb-1">
//           Upgrade to PRO
//         </Typography>
//         <Typography variant="small" className="font-normal opacity-80">
//           Upgrade to Material Tailwind PRO and get even more components, plugins, advanced features
//           and premium.
//         </Typography>
//         <div className="mt-4 flex gap-3">
//           <Typography
//             as="a"
//             href="#"
//             variant="small"
//             className="font-medium opacity-80"
//             onClick={() => setOpenAlert(false)}
//           >
//             Dismiss
//           </Typography>
//           <Typography as="a" href="#" variant="small" className="font-medium">
//             Upgrade Now
//           </Typography>
//         </div>
//       </Alert>
//     </Card>
//   );
// }

//////////////////////////////////////////////////

// import React, { useState } from 'react';
// import { FaUser, FaShoppingCart, FaClipboardList, FaUsers, FaBell, FaCalendarAlt, FaTasks, FaHistory, FaStickyNote, FaDollarSign, FaFileMedicalAlt } from 'react-icons/fa';
// import { MdKeyboardArrowDown } from 'react-icons/md';

// export function Sidebar() {
//   const [isPatientOpen, setIsPatientOpen] = useState(false);
//   const [isResponsibleOpen, setIsResponsibleOpen] = useState(false);

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-64 bg-white shadow-md">
//         <div className="p-4 flex items-center space-x-2 border-b">
//           <FaFileMedicalAlt size={24} className="text-blue-600" />
//           <h1 className="text-lg font-semibold">Patient Management</h1>
//         </div>

//         {/* Patient Profile Section */}
//         <div className="p-4 border-b">
//           <div className="flex items-center space-x-4">
//             {/* Patient Image Circle */}
//             <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
//               <img
//                 src="https://via.placeholder.com/150" // Replace with actual patient image URL
//                 alt="Patient"
//                 className="w-full h-full object-cover rounded-full"
//               />
//             </div>

//             {/* Patient Info */}
//             <div>
//               <div className="font-semibold text-gray-800">John Doe</div>
//               <div className="text-sm text-gray-500">DOB: 01/01/1980</div>
//               <div className="text-sm text-gray-500">Phone: (123) 456-7890</div>
//               <div className="text-sm text-gray-500">Insurance: HealthCare Co.</div>
//               <div className="text-sm text-gray-500">Plan: Premium Plan</div>
//               <div className="text-sm text-gray-500">
//                 <button className="text-blue-600 hover:text-blue-800 text-xs">Pharmacy Details</button>
//               </div>
//               <div className="text-sm text-gray-500">Last Visit: 12/15/2024</div>
//             </div>
//           </div>
//         </div>

//         {/* Sidebar menu */}
//         <div className="p-4">
//           {/* Patient dropdown */}
//           <div>
//             <button
//               className="flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-600 py-2"
//               onClick={() => setIsPatientOpen(!isPatientOpen)}
//             >
//               <div className="flex items-center space-x-2">
//                 <FaUser size={20} className="text-purple-500 hover:text-indigo-500 transition duration-300" />
//                 <span>Notes</span>
//               </div>
//               <MdKeyboardArrowDown size={20} className={`${isPatientOpen ? 'transform rotate-180' : ''}`} />
//             </button>
//             {isPatientOpen && (
//               <div className="ml-6 mt-2 space-y-2">
//                 <button className="flex items-center text-gray-600 hover:text-blue-600">
//                   <FaClipboardList size={18} className="mr-2 text-green-500 hover:text-green-700 transition duration-300" />
//                   Orders
//                 </button>
//                 <button className="flex items-center text-gray-600 hover:text-blue-600">
//                   <FaShoppingCart size={18} className="mr-2 text-yellow-500 hover:text-yellow-700 transition duration-300" />
//                   Products
//                 </button>
//               </div>
//             )}
//           </div>

//           {/* Responsible Party dropdown */}
//           <div className="mt-4">
//             <button
//               className="flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-600 py-2"
//               onClick={() => setIsResponsibleOpen(!isResponsibleOpen)}
//             >
//               <div className="flex items-center space-x-2">
//                 <FaUsers size={20} className="text-blue-500 hover:text-blue-700 transition duration-300" />
//                 <span>Plan summary</span>
//               </div>
//               <MdKeyboardArrowDown size={20} className={`${isResponsibleOpen ? 'transform rotate-180' : ''}`} />
//             </button>
//             {isResponsibleOpen && (
//               <div className="ml-6 mt-2 ">
//                 <button className="flex items-center text-gray-600 hover:text-blue-600">
//                   <FaClipboardList size={18} className="mr-2 text-green-500 hover:text-green-700 transition duration-300" />
//                   Orders
//                 </button>
//                 <button className="flex items-center text-gray-600 hover:text-blue-600">
//                   <FaShoppingCart size={18} className="mr-2 text-yellow-500 hover:text-yellow-700 transition duration-300" />
//                   Products
//                 </button>
//               </div>
//             )}
//           </div>

//           {/* Other Menu Items */}
//           <div className="mt-4 space-y-2">
//             <button className="flex items-center text-gray-700 hover:text-blue-600">
//               <FaUser size={20} className="mr-2 text-purple-500 hover:text-indigo-500 transition duration-300" />
//               Allergies
//             </button>
//             <button className="flex items-center text-gray-700 hover:text-blue-600">
//               <FaDollarSign size={20} className="mr-2 text-green-500 hover:text-green-700 transition duration-300" />
//               Advanced directives
//             </button>
//             <button className="flex items-center text-gray-700 hover:text-blue-600">
//               <FaBell size={20} className="mr-2 text-orange-500 hover:text-orange-700 transition duration-300" />
//               Vitals
//             </button>
//             <button className="flex items-center text-gray-700 hover:text-blue-600">
//               <FaCalendarAlt size={20} className="mr-2 text-red-500 hover:text-red-700 transition duration-300" />
//               Health watcher
//             </button>
//             <button className="flex items-center text-gray-700 hover:text-blue-600">
//               <FaTasks size={20} className="mr-2 text-purple-500 hover:text-purple-700 transition duration-300" />
//               Medication
//             </button>
//             <button className="flex items-center text-gray-700 hover:text-blue-600">
//               <FaTasks size={20} className="mr-2 text-purple-500 hover:text-purple-700 transition duration-300" />
//               Messages
//             </button>
//             <button className="flex items-center text-gray-700 hover:text-blue-600">
//               <FaHistory size={20} className="mr-2 text-brown-500 hover:text-brown-700 transition duration-300" />
//               Orders
//             </button>
//             <button className="flex items-center text-gray-700 hover:text-blue-600">
//               <FaStickyNote size={20} className="mr-2 text-yellow-500 hover:text-yellow-700 transition duration-300" />
//               Results
//             </button>
//             <button className="flex items-center text-gray-700 hover:text-blue-600">
//               <FaStickyNote size={20} className="mr-2 text-yellow-500 hover:text-yellow-700 transition duration-300" />
//               Documents
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Main content area */}
//       <div className="flex-1 p-6">
//         <div className="text-center bg-gray-200 p-6 rounded-md shadow-sm">
//           <h2 className="text-xl font-semibold mb-2">Welcome!</h2>
//           <p>Please select an option from the sidebar.</p>
//         </div>
//       </div>
//     </div>
//   );
// }












///////////////////////////////////////////////////////

// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { FaUser, FaShoppingCart, FaClipboardList, FaUsers, FaBell, FaCalendarAlt, FaTasks, FaHistory, FaStickyNote, FaDollarSign, FaFileMedicalAlt } from 'react-icons/fa';
// import { MdKeyboardArrowDown } from 'react-icons/md';
// import { Link, useParams } from 'react-router-dom';
// import { useTabs } from '../Context/TabProvider';

// export function Sidebar() {
//   const { id } = useParams(); // Get patient ID from the route
// console.log("id",id);
//   const { addTab } = useTabs();

//   const [isPatientOpen, setIsPatientOpen] = useState(false);
//   const [isResponsibleOpen, setIsResponsibleOpen] = useState(false);
//   const [patient, setPatient] = useState(null); // State to store patient details
//   const [loading, setLoading] = useState(true); // Loading state

  
//   useEffect(() => {
//     if (id) {
//       fetchPatientDetails();
//     }
//   }, [id]);

//   const fetchPatientDetails = async () => {
//     try {
//       setLoading(true); // Set loading to true
//       const response = await axios.get(
//         `${import.meta.env.VITE_BASE_URL}/api/patient/${id}`
//       );
//       setPatient(response.data);
//     } catch (error) {
//       console.error("Error fetching patient details:", error);
//     } finally {
//       setLoading(false); // Set loading to false after API call
//     }
//   };

//   useEffect(() => {
//     addTab({ id: "/", name: "Home", path: `/${id}` });
//   }, [addTab]);

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-64 bg-white shadow-md">
//         <div className="p-4 flex items-center space-x-2 border-b">
//           <FaFileMedicalAlt size={24} className="text-blue-600" />
//           <h1 className="text-lg font-semibold">Patient Management</h1>
//         </div>

//         {/* Patient Profile Section */}
     
//         <div className="p-4 border-b">
//           {loading ? (
//             <div>Loading...</div>
//           ) : patient ? (
//             <div className="items-center space-x-4 ms-2">
//               <div className="w-24 h-24 ms-10 bg-gray-300 rounded-full flex items-center justify-center">
//                 <img
//                   src={`${import.meta.env.VITE_BASE_URL}${patient.patientImage}`}
//                   alt="Patient"
//                   className="w-full h-full object-cover rounded-full"
//                 />
//               </div>
//               <div>
//                 <div className="font-semibold text-gray-800">
//                   {patient.firstName} {patient.lastName}
//                 </div>
//                 <div className="text-sm text-gray-500">
//                   DOB: {patient.dateOfBirth}
//                 </div>
//                 <div className="text-sm text-gray-500">
//                   Phone: {patient.phoneNumber}
//                 </div>
//                 <div className="text-sm text-gray-500">
//                   Insurance: {patient.insuranceCarrier}
//                 </div>
//                 <div className="text-sm text-gray-500">
//                   Plan: {patient.insurancePlanName}
//                 </div>
//                 <div className="text-sm text-gray-500">
//                   <button className="text-blue-600 hover:text-blue-800 text-xs">
//                     Pharmacy Details
//                   </button>
//                 </div>
//                 <div className="text-sm text-gray-500">
//                   Last Visit: {patient.lastVisit}
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <div>No patient data available</div>
//           )}
//         </div>

//         {/* Sidebar menu */}
//         <div className="p-4">
//           {/* Patient dropdown */}
//           <div>
//             <button
//               className="flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-600 py-2"
//               onClick={() => setIsPatientOpen(!isPatientOpen)}
//             >
//               <div className="flex items-center space-x-2">
//                 <FaUser size={20} className="text-purple-500 hover:text-indigo-500 transition duration-300" />
//                 <span>Notes</span>
//               </div>
//               <MdKeyboardArrowDown size={20} className={`${isPatientOpen ? 'transform rotate-180' : ''}`} />
//             </button>
//             {isPatientOpen && (
//               <div className="ml-6 mt-2 space-y-2">
//                 <button className="flex items-center text-gray-600 hover:text-blue-600">
//                   <FaClipboardList size={18} className="mr-2 text-green-500 hover:text-green-700 transition duration-300" />
//                   Orders
//                 </button>
//                 <button className="flex items-center text-gray-600 hover:text-blue-600">
//                   <FaShoppingCart size={18} className="mr-2 text-yellow-500 hover:text-yellow-700 transition duration-300" />
//                   Products
//                 </button>
//               </div>
//             )}
//           </div>

      

//           {/* Other Menu Items */}
//           <div className="mt-4 space-y-2">
//             <Link to={`/inception/${id}`}><button className="flex items-center text-gray-700 hover:text-blue-600">
//               <FaUser size={20} className="mr-2 text-purple-500 hover:text-indigo-500 transition duration-300" />
//               Inception
//             </button></Link>
//             <Link to='/reviewsystem'><button className="flex items-center text-gray-700 hover:text-blue-600">
//               <FaDollarSign size={20} className="mr-2 text-green-500 hover:text-green-700 transition duration-300" />
//               Review of System
//             </button></Link>
//            <Link to={`/vitals/${id}`} ><button className="flex items-center text-gray-700 hover:text-blue-600">
//               <FaBell size={20} className="mr-2 text-orange-500 hover:text-orange-700 transition duration-300" />
//               Vitals
//             </button></Link> 
//             <button className="flex items-center text-gray-700 hover:text-blue-600">
//               <FaCalendarAlt size={20} className="mr-2 text-red-500 hover:text-red-700 transition duration-300" />
//               Health watcher
//             </button>
//             <button className="flex items-center text-gray-700 hover:text-blue-600">
//               <FaTasks size={20} className="mr-2 text-purple-500 hover:text-purple-700 transition duration-300" />
//               Medication
//             </button>
//             <button className="flex items-center text-gray-700 hover:text-blue-600">
//               <FaTasks size={20} className="mr-2 text-purple-500 hover:text-purple-700 transition duration-300" />
//               Messages
//             </button>
//             <button className="flex items-center text-gray-700 hover:text-blue-600">
//               <FaHistory size={20} className="mr-2 text-brown-500 hover:text-brown-700 transition duration-300" />
//               Orders
//             </button>
//             <button className="flex items-center text-gray-700 hover:text-blue-600">
//               <FaStickyNote size={20} className="mr-2 text-yellow-500 hover:text-yellow-700 transition duration-300" />
//               Results
//             </button>
//             <button className="flex items-center text-gray-700 hover:text-blue-600">
//               <FaStickyNote size={20} className="mr-2 text-yellow-500 hover:text-yellow-700 transition duration-300" />
//               Documents
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Main content area */}
//       <div className="flex-1 p-6">
//         <div className="text-center bg-gray-200 p-6 rounded-md shadow-sm">
//           <h2 className="text-xl font-semibold mb-2">Welcome!</h2>
//           <p>Please select an option from the sidebar.</p>
//         </div>
//       </div>
//     </div>
//   );
// }




import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaUser, FaShoppingCart, FaClipboardList, FaUsers, FaBell, FaCalendarAlt, FaTasks, FaHistory, FaStickyNote, FaDollarSign, FaFileMedicalAlt } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Link, useParams } from 'react-router-dom';
import { useTabs } from '../Context/TabProvider';

export function Sidebar() {
  const { id } = useParams(); // Get patient ID from the route
  const { addTab } = useTabs();

  const [isPatientOpen, setIsPatientOpen] = useState(false);
  const [patient, setPatient] = useState(null); // State to store patient details
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    if (id) {
      fetchPatientDetails();
    }
  }, [id]);

  const fetchPatientDetails = async () => {
    try {
      setLoading(true); // Set loading to true
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/patient/${id}`
      );
      setPatient(response.data);
    } catch (error) {
      console.error("Error fetching patient details:", error);
    } finally {
      setLoading(false); // Set loading to false after API call
    }
  };
console.log('patient',patient);

  useEffect(() => {
    addTab({ id: "/", name: "Home", path: `/${id}` });
  }, [addTab]);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4 flex items-center space-x-2 border-b">
          <FaFileMedicalAlt size={24} className="text-blue-600" />
          <h1 className="text-lg font-semibold">Patient Management</h1>
        </div>

        {/* Patient Profile Section */}
        <div className="p-4 border-b flex flex-col space-y-4">
  {loading ? (
    <div>Loading...</div>
  ) : patient ? (
    <>
      {/* Profile Image */}
      {console.log("Image URL:", `${import.meta.env.VITE_BASE_URL}${patient.patientImage}`)} {/* Add console.log here */}
      <div className="w-full h-32 bg-gray-300 rounded-lg overflow-hidden">
        <img
          src={`${import.meta.env.VITE_BASE_URL}${patient.patientImage}`}
          alt="Patient"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Profile Details */}
      <div className="flex flex-col space-y-2">
        <div className="font-semibold text-gray-800">
          {patient.firstName} {patient.lastName}
        </div>
        <div className="text-sm text-gray-500">
          DOB: {patient.dateOfBirth}
        </div>
        <div className="text-sm text-gray-500">
          Phone: {patient.phoneNumber}
        </div>
        <div className="text-sm text-gray-500">
          Insurance: {patient.insuranceCarrier}
        </div>
        <div className="text-sm text-gray-500">
          Plan: {patient.insurancePlanName}
        </div>
        <div className="text-sm text-gray-500">
          <button className="text-blue-600 hover:text-blue-800 text-xs">
            Pharmacy Details
          </button>
        </div>
        <div className="text-sm text-gray-500">
          Last Visit: {patient.lastVisit}
        </div>
      </div>
    </>
  ) : (
    <div>No patient data available</div>
  )}
</div>


        {/* Sidebar menu */}
        <div className="p-4">
          {/* Patient dropdown */}
          <div>
            <button
              className="flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-600 py-2"
              onClick={() => setIsPatientOpen(!isPatientOpen)}
            >
              <div className="flex items-center space-x-2">
                <FaUser size={20} className="text-purple-500 hover:text-indigo-500 transition duration-300" />
                <span>Notes</span>
              </div>
              <MdKeyboardArrowDown size={20} className={`${isPatientOpen ? 'transform rotate-180' : ''}`} />
            </button>
            {isPatientOpen && (
              <div className="ml-6 mt-2 space-y-2">
                <button className="flex items-center text-gray-600 hover:text-blue-600">
                  <FaClipboardList size={18} className="mr-2 text-green-500 hover:text-green-700 transition duration-300" />
                  Orders
                </button>
                <button className="flex items-center text-gray-600 hover:text-blue-600">
                  <FaShoppingCart size={18} className="mr-2 text-yellow-500 hover:text-yellow-700 transition duration-300" />
                  Products
                </button>
              </div>
            )}
          </div>

          {/* Other Menu Items */}
          <div className="mt-4 space-y-2">
            <Link to={`/inception/${id}`}><button className="flex items-center text-gray-700 hover:text-blue-600">
              <FaUser size={20} className="mr-2 text-purple-500 hover:text-indigo-500 transition duration-300" />
              Inception
            </button></Link>
            <Link to='/reviewsystem'><button className="flex items-center text-gray-700 hover:text-blue-600">
              <FaDollarSign size={20} className="mr-2 text-green-500 hover:text-green-700 transition duration-300" />
              Review of System
            </button></Link>
            <Link to={`/vitals/${id}`} ><button className="flex items-center text-gray-700 hover:text-blue-600">
              <FaBell size={20} className="mr-2 text-orange-500 hover:text-orange-700 transition duration-300" />
              Vitals
            </button></Link>
            <button className="flex items-center text-gray-700 hover:text-blue-600">
              <FaCalendarAlt size={20} className="mr-2 text-red-500 hover:text-red-700 transition duration-300" />
              Health watcher
            </button>
            <button className="flex items-center text-gray-700 hover:text-blue-600">
              <FaTasks size={20} className="mr-2 text-purple-500 hover:text-purple-700 transition duration-300" />
              Medication
            </button>
            <button className="flex items-center text-gray-700 hover:text-blue-600">
              <FaTasks size={20} className="mr-2 text-purple-500 hover:text-purple-700 transition duration-300" />
              Messages
            </button>
            <button className="flex items-center text-gray-700 hover:text-blue-600">
              <FaHistory size={20} className="mr-2 text-brown-500 hover:text-brown-700 transition duration-300" />
              Orders
            </button>
            <button className="flex items-center text-gray-700 hover:text-blue-600">
              <FaStickyNote size={20} className="mr-2 text-yellow-500 hover:text-yellow-700 transition duration-300" />
              Results
            </button>
            <button className="flex items-center text-gray-700 hover:text-blue-600">
              <FaStickyNote size={20} className="mr-2 text-yellow-500 hover:text-yellow-700 transition duration-300" />
              Documents
            </button>
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="flex-1 p-6">
        <div className="text-center bg-gray-200 p-6 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Welcome!</h2>
          <p>Please select an option from the sidebar.</p>
        </div>
      </div>
    </div>
  );
}
