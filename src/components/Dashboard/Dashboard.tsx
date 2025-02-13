
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams } from "react-router-dom";
import { useTabs } from "../../Context/TabProvider";
import {
  Menu,
  X,
  GripHorizontal,
  Maximize2,
  Minimize2,
  List,
  Grid,
  Layout,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import NotesForm from "./NotesForm";
import ProblemForm from "./ProblemForm";
import QuickMemoForm from "./QuickMemoForm";
import MedicationForm from "./MedicationForm";
import HealthWatcher from "./HealthWatcher";
import AllergiesForm from "./AllergiesForm";
import RiskFactor from "./RiskFactor";
import EncounterList from "./Encounterlist";
import DocumentsForm from "./Documentsform";
import LabOrderForm from "./LabOrderForm";
import ImplantableDeviceForm from "./ImplementableDeviceForm";
import FamilyConnectionForm from "./FamilyConnectionForm";
import ReferralForm from "./ReferralForm";
import axios from "axios";
import VitalForm from "./VitalForm";



const Dashboard = () => {
  const { id } = useParams();
  const { addTab } = useTabs();
  const [activeTab, setActiveTab] = useState("Document");
  const [showNav, setShowNav] = useState(false);
  const [expandedId, setExpandedId] = useState(null);
  const [viewModes, setViewModes] = useState({});
  const [closedCards, setClosedCards] = useState({});
  const [draggedCard, setDraggedCard] = useState(null);
  const [collapsedContent, setCollapsedContent] = useState({});
  const [activeCardIndex, setActiveCardIndex] = useState(null);
  const [collapsedCards, setCollapsedCards] = useState({});
  const [cards, setCards] = useState([])


  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BASE_URL}/assets/json/Dashboard/dashboard.json`)  // Replace with your actual file path
    .then(response => {
      setCards(response.data);  // Set the response data to state
      
    })
    .catch(err => {
      console.error('Error fetching dropdown data:', err);
     
    });

    addTab({ id: "/dashboard", name: "Home", path: `/dashboard/${id}` });
  }, [id]);

  const closeCard = (cardId, e) => {
    e.stopPropagation();
    setClosedCards(prev => ({
      ...prev,
      [cardId]: true
    }));
    if (expandedId === cardId) {
      setExpandedId(null);
    }
  };

  const openCard = (cardId) => {
    setClosedCards(prev => ({
      ...prev,
      [cardId]: false
    }));
  };

  const handleDragStart = (e, card, index) => {
    setDraggedCard({ card, index });
  };

  const handleDragEnd = () => {
    setDraggedCard(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetIndex) => {
    e.preventDefault();
    if (draggedCard && draggedCard.index !== targetIndex) {
      const updatedCards = [...cards];
      const [removed] = updatedCards.splice(draggedCard.index, 1);
      updatedCards.splice(targetIndex, 0, removed);
      setCards(updatedCards);
      if (targetIndex < 2) {
        setExpandedId(removed.id);
      }
    }
  };
  const toggleCollapse = (cardId, e) => {
    e.stopPropagation();
    setCollapsedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  const handleVitalsSubmit = (vitalsData) => {

  };


  const renderCardContent = (card) => {
    const formComponents = {
      vitals: VitalForm,
      notes: NotesForm,
      problems: ProblemForm,
      "quick-memos": QuickMemoForm,
      medications: MedicationForm,
      "health-watcher": HealthWatcher,
      allergies: AllergiesForm,
      "risk-factors": RiskFactor,
      encounters: EncounterList,
      documents: DocumentsForm,
      "lab-orders": LabOrderForm,
      "implantable-devices": ImplantableDeviceForm,
      "family-connections": FamilyConnectionForm,
      referrals: ReferralForm,
    };
  
    const FormComponent = formComponents[card.id];
  
    return (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden bg-white"
      >
        {FormComponent ? <FormComponent onSubmit={handleVitalsSubmit} /> : (
          <div className="p-2 space-y-1">
            {Object.entries(card.content).map(([key, data]) => (
              <div
                key={key}
                className="flex justify-around items-center py-2 px-1 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <span className="text-gray-600 font-medium">{key}</span>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium shadow-sm ${
                    data.status === "green"
                      ? "text-green-700 bg-green-100 ring-1 ring-green-200"
                      : data.status === "red"
                      ? "text-red-700 bg-red-100 ring-1 ring-red-200"
                      : data.status === "orange"
                      ? "text-orange-700 bg-orange-100 ring-1 ring-orange-200"
                      : "text-blue-700 bg-blue-100 ring-1 ring-blue-200"
                  }`}
                >
                  {data.value}
                </span>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    );
  };
  
  return (
    <div className="min-h-screen bg-gray-50 p-1">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowNav(!showNav)}
        className="fixed top-24 right-2 p-1 mt-2 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all z-50"
      >
        <Menu size={24} />
      </motion.button>

      <div className="relative mx-auto pt-4">
        {/* Top row grid */}
        <div className="grid grid-cols-3 gap-4">
          {cards.slice(0, 3).map((card, index) => !closedCards[card.id] && (
            <motion.div
              key={card.id}
              className="relative"
              style={{
                gridColumn: "span 1",
                zIndex: cards.length + 1,
              }}
              layout
            >
              <motion.div
                className={`bg-white rounded-lg shadow-md border border-gray-100 transition-all duration-200`}
                animate={{
                  scale: 1,
                }}
                whileHover={{
                  scale: 1.02,
                  zIndex: cards.length + 2,
                }}
                draggable
                onDragStart={(e) => handleDragStart(e, card, index)}
                onDragEnd={handleDragEnd}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, index)}
              >
                <div
                  className={`p-3 flex items-center justify-between border-b border-gray-100 
                    bg-blue-50 
                    rounded-t-lg`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-1.5 hover:bg-gray-100 rounded cursor-grab active:cursor-grabbing">
                      <GripHorizontal size={16} className="text-gray-400" />
                    </div>
                    <h3 className="font-semibold text-gray-700 text-sm flex items-center">
                      <span className="text-base mr-2">{card.icon}</span>
                      {card.title}
                    </h3>
                  </div>
                  <div className="flex space-x-1">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => toggleCollapse(card.id, e)}
                      className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      {collapsedCards[card.id] ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => closeCard(card.id, e)}
                      className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <X size={14} />
                    </motion.button>
                  </div>
                </div>
                <AnimatePresence>
                  {!collapsedCards[card.id] && renderCardContent(card)}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>

      
        {/* Bottom grid with masonry-like layout */}
        <div className="grid grid-cols-4 auto-rows-min gap-4 mt-4">
          {cards.slice(3).map((card, index) => !closedCards[card.id] && (
            <motion.div
              key={card.id}
              className="relative"
              style={{
                gridColumn: expandedId === card.id ? "span 2" : "span 1",
                gridRow: expandedId === card.id ? "span 6" : "auto",
                zIndex: expandedId === card.id ? cards.length + 1 : cards.length,
              }}
              layout
            >
              <motion.div
                className={`bg-white rounded-lg shadow-md border border-gray-100 transition-all duration-200
                  ${expandedId === card.id ? "transform-none w-auto" : "hover:-translate-y-1"}`}
                animate={{
                  scale: expandedId === card.id ? 1 : 0.98,
                }}
                whileHover={{
                  scale: expandedId === card.id ? 1 : 1.02,
                  zIndex: cards.length + 2,
                }}
                draggable
                onDragStart={(e) => handleDragStart(e, card, index + 3)}
                onDragEnd={handleDragEnd}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, index + 3)}
              >
                <div
                  className={`p-3 flex items-center justify-between border-b border-gray-100 
                    ${expandedId === card.id ? 'bg-blue-50' : 'bg-white'} 
                    rounded-t-lg cursor-pointer`}
                  onClick={() => setExpandedId(expandedId === card.id ? null : card.id)}
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-1.5 hover:bg-gray-100 rounded cursor-grab active:cursor-grabbing">
                      <GripHorizontal size={16} className="text-gray-400" />
                    </div>
                    <h3 className="font-semibold text-gray-700 text-sm flex items-center">
                      <span className="text-base mr-2">{card.icon}</span>
                      {card.title}
                    </h3>
                  </div>
                  <div className="flex space-x-1">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => closeCard(card.id, e)}
                      className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <X size={14} />
                    </motion.button>
                    {expandedId === card.id && (
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setExpandedId(null);
                        }}
                        className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
                      >
                        <Minimize2 size={14} />
                      </motion.button>
                    )}
                  </div>
                </div>
                <AnimatePresence>
                  {expandedId === card.id && renderCardContent(card)}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Side Navigation for Closed Cards */}
      <AnimatePresence>
        {showNav && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20 }} 
            className="fixed right-0 top-0 h-full w-64 bg-[#EEF7FF] border-l-4 rounded-xl  border-t-cyan-300  border-l-cyan-300 shadow-xl z-40 p-4"
          >
            <h2 className="text-lg font-semibold mb-4">Closed Cards</h2>
            <div className="space-y-2">
              {cards.map((card) => 
                closedCards[card.id] && (
                  <motion.button
                    key={card.id}
                    onClick={() => openCard(card.id)}
                    className="w-full flex items-center bg-light-blue-100 space-x-2 p-2 hover:bg-light-blue-200 rounded-lg"
                  >
                    <span>{card.icon}</span>
                    <span>{card.title}</span>
                  </motion.button>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dashboard;



//////////////////////////////////////////

// import React,{useEffect,useState} from "react";
// import { FiArrowLeft } from "react-icons/fi";
// import { GiHeartOrgan, GiKidneys, GiLungs } from "react-icons/gi";
// import { motion } from "framer-motion";
// import axios from 'axios';
// import { Link, useParams } from 'react-router-dom';

// const cardVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 },
// };

// const Dashboard = () => {
//   const { id } = useParams(); // Get patient ID from the route
//   const [isPatientOpen, setIsPatientOpen] = useState(false);
//   const [patient, setPatient] = useState(null); // State to store patient details
//   const [loading, setLoading] = useState(true); // Loading state

//   const cardVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
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
//   return (
//     <>
//     <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
//       {/* Left Section: Heart Rate Card */}
//       <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={cardVariants}
//           transition={{ duration: 0.7 }}
//           className="col-span-1 bg-white shadow-lg rounded-xl p-6"
//         >
//           <div className="relative">
//             {/* Rotating Human Body */}
//             <div className="w-full h-[300px] bg-gray-100 rounded-lg flex items-center justify-center relative">
//               <motion.div
//                 initial={{ rotate: 0 }}
//                 animate={{ rotate: 360 }}
//                 transition={{
//                   repeat: Infinity,
//                   duration: 10,
//                   ease: "linear",
//                 }}
//                 className="absolute w-40 h-40 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 animate-spin"
//               >
//                 {/* Placeholder: Add real 3D model here */}
//                 {/* <p className="text-sm text-white text-center mt-16 font-semibold">
//                   Rotating Human Body
//                 </p> */}
//               </motion.div>
//             </div>

//             {/* Highlighted Organs */}
//             <motion.div
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ duration: 0.7, delay: 0.3 }}
//               className="absolute top-6 left-6 bg-white p-4 shadow-lg rounded-md flex items-center space-x-2"
//             >
//               <GiHeartOrgan className="text-red-500" size={24} />
//               <div>
//                 <p className="text-sm font-medium text-gray-700">Heart Rate</p>
//                 <p className="text-xs text-gray-500">Date: 21 Jan 2024</p>
//               </div>
//             </motion.div>
//             <motion.div
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ duration: 0.7, delay: 0.5 }}
//               className="absolute top-36 left-10 bg-white p-4 shadow-lg rounded-md flex items-center space-x-2"
//             >
//               <GiKidneys className="text-green-500" size={24} />
//               <div>
//                 <p className="text-sm font-medium text-gray-700">Kidney Condition: 80%</p>
//                 <p className="text-xs text-gray-500">Date: 21 Jan 2024</p>
//               </div>
//             </motion.div>
//             <motion.div
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ duration: 0.7, delay: 0.7 }}
//               className="absolute top-52 right-8 bg-white p-4 shadow-lg rounded-md flex items-center space-x-2"
//             >
//               <GiLungs className="text-blue-500" size={24} />
//               <div>
//                 <p className="text-sm font-medium text-gray-700">Lungs Condition: 95%</p>
//                 <p className="text-xs text-gray-500">Date: 21 Jan 2024</p>
//               </div>
//             </motion.div>
//           </div>
//           <p className="mt-4 text-center font-semibold text-gray-700">
//   {patient ? patient.firstName : "Loading..."}
// </p>

//         </motion.div>

//       {/* Center Section: Age Card and Additional Notes */}
//       <div className="flex flex-col space-y-6 ">
//         {/* Age Card */}
//         <motion.div
        
//         initial="hidden"
//           animate="visible"
//           variants={cardVariants}
//           transition={{ duration: 0.8 }}
//           className="bg-white shadow-lg rounded-xl p-6"
//         >
//             {/* Patient Info Card */}
//               {/* <img
//                 src="https://via.placeholder.com/100"
//                 alt="Patient"
//                 className="w-24 h-24 rounded-full object-cover shadow-lg"
//               /> */}
//               <div>
//                 <h2 className="text-lg font-bold text-gray-800">{patient ? patient.firstName : "Loading..."} {patient ?patient.lastName: "Loading..."}</h2>
//                 <p className="text-sm text-gray-500">Age: 64 & Weight: 70 Kg</p>
//                 <p className="text-sm text-gray-500">Blood Group: A+</p>
//                 <p className="mt-2 text-sm font-medium text-red-500">
//                   Issues: Open Heart Surgery (21 Jan 2024)
//                 </p>
//               </div>
            
//         </motion.div>

//         {/* Additional Notes */}
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={cardVariants}
//           transition={{ duration: 0.8 }}
//           className="bg-white shadow-lg rounded-xl p-6"
//         >
//           <h3 className="text-lg font-bold text-gray-700">Additional Notes</h3>
//           <p className="text-sm text-gray-600">
//             Notes and further details can be added here.
//           </p>
//         </motion.div>
//       </div>

//       {/* Right Section: FitCard */}
//       <div className="fitCard flex min-h-[24em] min-w-[18em] flex-col items-center justify-center gap-[0.5rem] rounded-[1.5em] bg-[#def5fe] p-[0.5rem] font-monts text-[#0e3f84]">
//       <div className="flex h-[4em] w-full items-center justify-between rounded-[1.5em] bg-[#ffffff] p-[0.5rem]">
//         <svg viewBox="0 0 48 48" fill="none" height={48} width={48} xmlns="http://www.w3.org/2000/svg">
//           <path d="M37.99 38.293C37.785 34.785 34.733 32 31 32H17c-3.735 0-6.786 2.785-6.99 6.293m27.98 0A19.94 19.94 0 0 0 44 24c0-11.046-8.954-20-20-20S4 12.954 4 24a19.94 19.94 0 0 0 6.01 14.293m27.98 0A19.935 19.935 0 0 1 24 44a19.935 19.935 0 0 1-13.99-5.707M30 20a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" stroke="#B49A18" />
//         </svg>
//         <p className="text-[1.25rem] font-semibold">Manpreet</p>
//       </div>
//       <div className="flex h-fit w-full items-center justify-center gap-[0.5em]">
//         <div className="group relative flex h-[10em] w-[10em] items-center justify-center rounded-[1.5em] bg-[#ffffff] px-[0.5rem] pt-[1rem]">
//           <svg className="absolute left-1/2 top-[calc(50%+8px)] h-[9rem] w-[9rem] -translate-x-1/2 -translate-y-1/2" viewBox="0 0 160 160" fill="none" height={160} width={160} xmlns="http://www.w3.org/2000/svg">
//             <path d="M130.912 130.912a71.997 71.997 0 0 0-10.911-110.778A71.999 71.999 0 0 0 9.383 94.046a72.004 72.004 0 0 0 19.705 36.866" strokeWidth={16} strokeLinecap="round" stroke="#EEDC82" />
//             <path d="M146.65 52.764A72.004 72.004 0 0 0 69.647 8.748a71.998 71.998 0 0 0-40.559 122.164" className="duration-[1s] [stroke-dasharray:100] [stroke-dashoffset:-98] group-hover:[stroke-dashoffset:0]" pathLength={100} strokeWidth={16} strokeLinecap="round" stroke="#0e3f84" />
//           </svg>
//           <p className="text-[0.75rem] font-semibold">1729/2500 Steps</p>
//         </div>
//         <div className="flex h-[10em] flex-1 flex-col items-center justify-center gap-[0.5rem]">
//           <div className="flex w-full flex-1 items-center justify-center rounded-[1.5rem] bg-[#ffffff] group relative overflow-hidden">
//             <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[1rem] font-bold duration-300 group-hover:-translate-y-[300%]">
//               <svg viewBox="0 0 48 48" fill="none" height={48} width={48} xmlns="http://www.w3.org/2000/svg">
//                 <path d="m11 32 7-9 6 9 6-9 5 8h9" strokeWidth={4} strokeMiterlimit={2} strokeLinejoin="round" strokeLinecap="round" stroke="#B49A18" />
//                 <path d="M44 19c0-6.075-4.925-11-11-11-3.72 0-7.01 1.847-9 4.674A10.987 10.987 0 0 0 15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326 1.194-.397 2.562-1.016 4.01-1.826" strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="#B49A18" />
//               </svg>
//             </div>
//             <p className="absolute left-1/2 top-1/2 h-fit w-full -translate-x-1/2 translate-y-[150%] text-center text-[1rem] font-bold duration-300 group-hover:-translate-y-1/2">
//               98 bpm
//             </p>
//           </div>
//           <div className="flex w-full flex-1 items-center justify-center rounded-[1.5rem] bg-[#ffffff] group relative overflow-hidden">
//             <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[1rem] font-bold duration-300 group-hover:-translate-y-[300%]">
//               <svg viewBox="0 0 48 48" fill="none" height={48} width={48} xmlns="http://www.w3.org/2000/svg">
//                 <g clipPath="url(#a)">
//                   <path d="M47.32 28.378a1.776 1.776 0 0 0-1.98-.142c-2.977 1.71-6.122 2.578-9.35 2.578-10.37 0-18.807-8.437-18.807-18.808 0-3.242.869-6.383 2.582-9.336A1.775 1.775 0 0 0 17.738.073 24.833 24.833 0 0 0 5.04 8.7C1.743 12.976 0 18.096 0 23.508c0 13.503 10.985 24.489 24.488 24.489 5.412 0 10.533-1.742 14.81-5.04a24.817 24.817 0 0 0 8.632-12.69 1.774 1.774 0 0 0-.61-1.889ZM24.488 44.446c-11.545 0-20.937-9.393-20.937-20.938 0-7.788 4.457-14.876 11.23-18.438a21.423 21.423 0 0 0-1.149 6.936c0 12.329 10.03 22.36 22.358 22.36a21.49 21.49 0 0 0 6.948-1.154c-3.561 6.775-10.655 11.233-18.45 11.233Z" fill="#B49A18" />
//                 </g>
//                 <defs>
//                   <clipPath id="a">
//                     <path d="M0 0h48v48H0z" fill="#fff" />
//                   </clipPath>
//                 </defs>
//               </svg>
//             </div>
//             <p className="absolute left-1/2 top-1/2 h-fit w-full -translate-x-1/2 translate-y-[150%] text-center text-[1rem] font-bold duration-300 group-hover:-translate-y-1/2">
//               7.5 hrs
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="flex h-[4.5rem] w-full flex-row items-center justify-center gap-[0.5rem]">
//         <div className="flex h-full w-[10rem] items-center justify-center rounded-[1.5rem] bg-[#ffffff] group relative overflow-hidden">
//           <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[1rem] font-bold duration-300 group-hover:-translate-y-[300%]">
//             <svg viewBox="0 0 48 48" fill="none" height={48} width={48} xmlns="http://www.w3.org/2000/svg">
//               <path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z" strokeWidth={3} strokeLinecap="round" stroke="#B49A18" />
//               <path d="M18.804 27a5.999 5.999 0 0 0 10.392 0" strokeWidth={3} strokeLinecap="round" stroke="#B49A18" />
//               <path d="M18 15.75h-2a2.25 2.25 0 0 0 0 4.5h2a2.25 2.25 0 0 0 0-4.5Zm14 0h-2a2.25 2.25 0 0 0 0 4.5h2a2.25 2.25 0 0 0 0-4.5Z" strokeWidth=".25" strokeLinecap="round" stroke="#B49A18" fill="#B49A18" />
//             </svg>
//           </div>
//           <p className="absolute left-1/2 top-1/2 h-fit w-fit -translate-x-1/2 translate-y-[150%] text-left text-[1rem] font-bold duration-300 group-hover:-translate-y-1/2">
//             Happy
//           </p>
//         </div>
//         <div className="flex h-full w-[6.5rem] items-center justify-center rounded-[1.5rem] bg-[#ffffff] relative group overflow-hidden">
//           <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[1rem] font-bold duration-300 group-hover:-translate-y-[250%]">
//             <svg viewBox="0 0 48 52" fill="none" height={52} width={48} xmlns="http://www.w3.org/2000/svg">
//               <path d="M32.87 18.07c0-2.808 3.734-3.553 4.725-.925 2.397 6.356 4.144 12.042 4.144 15.116 0 9.797-7.942 17.739-17.74 17.739-9.796 0-17.738-7.942-17.738-17.739 0-3.303 2.016-9.62 4.688-16.544 3.463-8.97 5.194-13.455 7.33-13.696a3.641 3.641 0 0 1 2.04.38c1.907.995 1.907 5.886 1.907 15.67a5.322 5.322 0 0 0 10.643 0Z" strokeWidth={3} stroke="#B49A18" />
//               <path d="m20.452 50-.932-2.331a12.086 12.086 0 0 1 1.784-12.038 3.453 3.453 0 0 1 5.392 0 12.085 12.085 0 0 1 1.784 12.038l-.932 2.33" strokeWidth={3} stroke="#B49A18" />
//             </svg>
//           </div>
//           <p className="absolute left-1/2 top-1/2 h-fit w-fit -translate-x-1/2 translate-y-[150%] text-left text-[1rem] font-bold duration-300 group-hover:-translate-y-1/2">
//             1240cal
//           </p>
//         </div>
//       </div>
//       <div className="group relative flex h-[5em] w-full items-center justify-center overflow-hidden rounded-[1.5rem] bg-[#ffffff]">
//         <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[1rem] font-bold duration-500 group-hover:-translate-x-[250%]">
//           Today's Quote
//         </p>
//         <p className="absolute left-1/2 top-1/2 h-fit w-full -translate-y-1/2 translate-x-1/2 px-[1rem] text-left text-[0.75rem] font-bold duration-500 group-hover:-translate-x-1/2 text-center">
//           “The real workout starts when you want to stop.” – Ronnie Coleman
//         </p>
//       </div>
//     </div>

//       </div>
//     <div className="bg-gray-200 shadow-lg rounded-xl p-6 mt-2 hover:scale-105 ml-10 mr-10 w-auto">
//             <h3 className="text-lg font-bold text-gray-700 mb-4">Health Composition</h3>
//             <div className="grid grid-cols-2 gap-4">
//               <p className="text-sm text-gray-600">
//                 Glucose: <span className="text-green-600">7.9 mmol/L</span>
//               </p>
//               <p className="text-sm text-gray-600">
//                 Cholesterol: <span className="text-red-600">195 mg/dL</span>
//               </p>
//               <p className="text-sm text-gray-600">
//                 Hemoglobin: <span className="text-green-600">9.6 mmol/L</span>
//               </p>
//               <p className="text-sm text-gray-600">
//                 Thrombocyte: <span className="text-green-600">395 x109/L</span>
//               </p>
//               <p className="text-sm text-gray-600">
//                 Sodium: <span className="text-blue-600">140 mmol/L</span>
//               </p>
//               <p className="text-sm text-gray-600">
//                 Potassium: <span className="text-red-600">125 mmol/L</span>
//               </p>

//             </div>
//           </div>
//           </>

      
//   );
// };

// export default Dashboard;





