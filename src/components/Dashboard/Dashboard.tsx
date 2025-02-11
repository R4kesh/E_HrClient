// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FiChevronDown, FiChevronUp, FiX, FiArrowUp } from "react-icons/fi";

// const Button = ({ children, onClick, variant, size, className }) => {
//   const baseStyles = "px-4 py-2 rounded-lg focus:outline-none";
//   const variantStyles = {
//     ghost: "bg-transparent hover:bg-gray-200",
//   };
//   const sizeStyles = {
//     sm: "text-sm",
//     md: "text-base",
//   };

//   return (
//     <button
//       onClick={onClick}
//       className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
//     >
//       {children}
//     </button>
//   );
// };

// const Card = ({ children, className }) => {
//   return (
//     <div className={`rounded-lg shadow-md bg-white ${className}`}>{children}</div>
//   );
// };

// const CardContent = ({ children }) => {
//   return <div className="text-gray-800 p-4">{children}</div>;
// };

// const cardsData = [
//   {
//     id: "Vitals",
//     title: "Vitals",
//     content: "Pulmonary function tests, Dr. Penny Puffer, Tel: 555-555-1049, 1047 Healthcare Drive, Portland, OR 97005, Scheduled date: 08/17/2012.",
//   },
//   {
//     id: "medications",
//     title: "Medications",
//     content: "Albuterol 0.09 MG/ACTUAT - 2 puffs every 6 hours PRN wheezing (Active).",
//   },
//   {
//     id: "problem-list",
//     title: "Problem List",
//     content: "Coastal Chondritis (Onset: Aug 15, 2012, Active), Asthma (Onset: Sept 25, 2011, Active).",
//   },
// ];

// const Dashboard = () => {
//   const [visibleCards, setVisibleCards] = useState(cardsData);
//   const [collapsedCards, setCollapsedCards] = useState({});
//   const [draggedCard, setDraggedCard] = useState(null);

//   const toggleCollapse = (id) => {
//     setCollapsedCards((prev) => ({ ...prev, [id]: !prev[id] }));
//   };

//   const removeCard = (id) => {
//     setVisibleCards((prev) => prev.filter((card) => card.id !== id));
//   };

//   const swapCards = (fromIndex, toIndex) => {
//     const updatedCards = [...visibleCards];
//     const [removed] = updatedCards.splice(fromIndex, 1);
//     updatedCards.splice(toIndex, 0, removed);
//     setVisibleCards(updatedCards);
//   };

//   const handleDragStart = (e, card, index) => {
//     setDraggedCard({ card, index });
//     e.currentTarget.style.opacity = '0.4';
//   };

//   const handleDragEnd = (e) => {
//     e.currentTarget.style.opacity = '1';
//     setDraggedCard(null);
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//     e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
//   };

//   const handleDragLeave = (e) => {
//     e.currentTarget.style.backgroundColor = '';
//   };

//   const handleDrop = (e, targetIndex) => {
//     e.preventDefault();
//     e.currentTarget.style.backgroundColor = '';

//     if (draggedCard && draggedCard.index !== targetIndex) {
//       swapCards(draggedCard.index, targetIndex);
//     }
//   };

//   return (
//     <div className="flex h-screen bg-gray-50">
//       {/* Main Content */}
//       <div className="flex-1 p-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           <AnimatePresence>
//             {visibleCards.map((card, index) => (
//               <motion.div
//                 key={card.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 layout
//                 className="rounded-lg shadow-md bg-white overflow-hidden"
//                 draggable
//                 onDragStart={(e) => handleDragStart(e, card, index)}
//                 onDragEnd={handleDragEnd}
//                 onDragOver={handleDragOver}
//                 onDragLeave={handleDragLeave}
//                 onDrop={(e) => handleDrop(e, index)}
//               >
//                 <Card>
//                   <div className="flex justify-between items-center bg-blue-100 px-4 py-2">
//                     <h3 className="text-lg font-bold text-blue-800">{card.title}</h3>
//                     <div className="flex space-x-2">
//                       <Button
//                         variant="ghost"
//                         size="sm"
//                         onClick={() => toggleCollapse(card.id)}
//                       >
//                         {collapsedCards[card.id] ? <FiChevronDown /> : <FiChevronUp />}
//                       </Button>
//                       <Button
//                         variant="ghost"
//                         size="sm"
//                         onClick={() => removeCard(card.id)}
//                       >
//                         <FiX />
//                       </Button>
//                       <Button
//                         variant="ghost"
//                         size="sm"
//                         onClick={() =>
//                           swapCards(
//                             index,
//                             index === 0 ? visibleCards.length - 1 : index - 1
//                           )
//                         }
//                       >
//                         <FiArrowUp />
//                       </Button>
//                     </div>
//                   </div>
//                   {!collapsedCards[card.id] && (
//                     <CardContent>
//                       <p>{card.content}</p>
//                     </CardContent>
//                   )}
//                 </Card>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </div>
//       </div>

//       {/* Sidebar Navigation */}
//       <div className="w-64 bg-blue-200 p-4">
//         <h3 className="text-xl font-bold mb-4 text-blue-900">Navigation</h3>
//         <ul className="space-y-2">
//           {cardsData.map((card) => (
//             <li key={card.id}>
//               <Button
//                 variant="ghost"
//                 className="w-full text-left text-blue-800 hover:text-blue-600"
//                 onClick={() =>
//                   setVisibleCards((prev) =>
//                     prev.find((c) => c.id === card.id)
//                       ? prev
//                       : [...prev, card]
//                   )
//                 }
//               >
//                 {card.title}
//               </Button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

/////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X, GripHorizontal, Maximize2, Minimize2, List, Grid, Layout } from "lucide-react";

// const Button = ({ children, onClick, variant, size, className }) => {
//   const baseStyles = "px-4 py-2 rounded-lg focus:outline-none";
//   const variantStyles = {
//     ghost: "bg-transparent hover:bg-gray-200",
//   };
//   const sizeStyles = {
//     sm: "text-sm",
//     md: "text-base",
//   };

//   return (
//     <button
//       onClick={onClick}
//       className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
//     >
//       {children}
//     </button>
//   );
// };

// const CardContent = ({ children }) => {
//   return <div className="text-gray-800 p-4">{children}</div>;
// };

// const Dashboard = () => {
//   const [cards, setCards] = useState([
//     { id: 'health', title: 'Health Composition', icon: '🫀', content: { Glucose: { value: '7.9 mmol/L', status: 'green' }, Cholesterol: { value: '195 mg/dL', status: 'red' }, Hemoglobin: { value: '9.6 mmol/L', status: 'green' } } },
//     { id: 'medications', title: 'Medications', icon: '💊', content: { Albuterol: { value: '2 puffs/6h', status: 'blue' }, 'Vitamin D': { value: '1000 IU daily', status: 'green' } } },
//     { id: 'allergies', title: 'Allergies', icon: '⚠️', content: { Penicillin: { value: 'Severe', status: 'red' }, Codeine: { value: 'Moderate', status: 'orange' } } },
//     { id: 'vitals', title: 'Vital Signs', icon: '📊', content: { 'BP': { value: '120/80', status: 'green' }, 'HR': { value: '72 bpm', status: 'green' } } }
//   ]);

//   const [showNav, setShowNav] = useState(false);
//   const [expandedId, setExpandedId] = useState(null);
//   const [viewModes, setViewModes] = useState({});
//   const [closedCards, setClosedCards] = useState({});
//   const [draggedCard, setDraggedCard] = useState(null);

//   const toggleViewMode = (id) => {
//     setViewModes(prev => ({
//       ...prev,
//       [id]: prev[id] === 'compact' ? 'normal' : prev[id] === 'normal' ? 'expanded' : 'compact'
//     }));
//   };

//   const closeCard = (id) => {
//     setClosedCards(prev => ({ ...prev, [id]: true }));
//   };

//   const openCard = (id) => {
//     setClosedCards(prev => ({ ...prev, [id]: false }));
//   };

//   const handleDragStart = (e, card, index) => {
//     setDraggedCard({ card, index });
//     e.currentTarget.style.opacity = '0.4';
//   };

//   const handleDragEnd = (e) => {
//     e.currentTarget.style.opacity = '1';
//     setDraggedCard(null);
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//     e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
//   };

//   const handleDragLeave = (e) => {
//     e.currentTarget.style.backgroundColor = '';
//   };

//   const handleDrop = (e, targetIndex) => {
//     e.preventDefault();
//     e.currentTarget.style.backgroundColor = '';

//     if (draggedCard && draggedCard.index !== targetIndex) {
//       const updatedCards = [...cards];
//       const [removed] = updatedCards.splice(draggedCard.index, 1);
//       updatedCards.splice(targetIndex, 0, removed);
//       setCards(updatedCards);
//     }
//   };

//   const renderCardContent = (card) => {
//     return (
//       <div className="p-4">
//         {Object.entries(card.content).map(([key, data]) => (
//           <div key={key} className="flex justify-between items-center mb-2">
//             <span className="text-gray-600">{key}</span>
//             <span className={`px-2 py-1 rounded text-sm ${
//               data.status === 'green' ? 'text-green-600 bg-green-50' :
//               data.status === 'red' ? 'text-red-600 bg-red-50' :
//               data.status === 'orange' ? 'text-orange-600 bg-orange-50' :
//               'text-blue-600 bg-blue-50'
//             }`}>
//               {data.value}
//             </span>
//           </div>
//         ))}
//       </div>
//     );
//   };

//   const getCardHeight = (viewMode, isExpanded) => {
//     if (isExpanded) return 'h-full';
//     switch (viewMode) {
//       case 'compact': return 'h-48';
//       case 'expanded': return 'h-96';
//       default: return 'h-64';
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-4">
//       {/* Navigation Toggle */}
//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         onClick={() => setShowNav(!showNav)}
//         className="fixed top-4 right-4 p-2 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all z-50"
//       >
//         <Menu size={24} />
//       </motion.button>

//       {/* Sidebar Navigation */}
//       <motion.div
//         initial={{ x: '100%' }}
//         animate={{ x: showNav ? 0 : '100%' }}
//         transition={{ type: 'spring', damping: 20 }}
//         className="fixed right-0 top-0 h-full w-64 bg-white shadow-xl z-40"
//       >
//         <div className="p-6 space-y-4">
//           <h2 className="text-lg font-semibold text-gray-800 mb-4">EHR Sections</h2>
//           {cards.map(card => (
//             <motion.button
//               key={card.id}
//               whileHover={{ x: 4 }}
//               onClick={() => openCard(card.id)}
//               className={`
//                 w-full text-left p-3 rounded-lg transition-colors
//                 flex items-center space-x-3
//                 ${closedCards[card.id] ? 'bg-gray-100' : 'bg-white hover:bg-blue-50'}
//               `}
//             >
//               <span className="text-xl">{card.icon}</span>
//               <span className="text-gray-700">{card.title}</span>
//             </motion.button>
//           ))}
//         </div>
//       </motion.div>

//       {/* Main Content */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto pt-16">
//         <AnimatePresence>
//           {cards.map((card, index) => !closedCards[card.id] && (
//             <motion.div
//               key={card.id}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.95 }}
//               className={`
//                 ${expandedId === card.id ? 'col-span-2 row-span-2' : ''}
//               `}
//               draggable
//               onDragStart={(e) => handleDragStart(e, card, index)}
//               onDragEnd={handleDragEnd}
//               onDragOver={handleDragOver}
//               onDragLeave={handleDragLeave}
//               onDrop={(e) => handleDrop(e, index)}
//             >
//               <div className={`
//                 bg-white rounded-xl shadow-sm border border-gray-100
//                 transform transition-all duration-200 relative
//                 ${getCardHeight(viewModes[card.id], expandedId === card.id)}
//               `}>
//                 {/* Card Header */}
//                 <div className="p-3 flex items-center justify-between border-b border-gray-100 bg-gray-50/50">
//                   <div className="flex items-center space-x-3">
//                     <div className="p-1 hover:bg-gray-100 rounded cursor-grab active:cursor-grabbing">
//                       <GripHorizontal size={16} className="text-gray-400" />
//                     </div>
//                     <h3 className="font-semibold text-gray-700 text-sm flex items-center">
//                       <span className="text-base mr-2">{card.icon}</span>
//                       {card.title}
//                     </h3>
//                   </div>
//                   <div className="flex space-x-1">
//                     <motion.button
//                       whileHover={{ scale: 1.1 }}
//                       whileTap={{ scale: 0.95 }}
//                       onClick={() => toggleViewMode(card.id)}
//                       className="p-1 hover:bg-gray-100 rounded-full transition-colors"
//                     >
//                       {viewModes[card.id] === 'compact' ? (
//                         <List size={14} />
//                       ) : viewModes[card.id] === 'normal' ? (
//                         <Grid size={14} />
//                       ) : (
//                         <Layout size={14} />
//                       )}
//                     </motion.button>
//                     <motion.button
//                       whileHover={{ scale: 1.1 }}
//                       whileTap={{ scale: 0.95 }}
//                       onClick={() => setExpandedId(expandedId === card.id ? null : card.id)}
//                       className="p-1 hover:bg-gray-100 rounded-full transition-colors"
//                     >
//                       {expandedId === card.id ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
//                     </motion.button>
//                     <motion.button
//                       whileHover={{ scale: 1.1 }}
//                       whileTap={{ scale: 0.95 }}
//                       onClick={() => closeCard(card.id)}
//                       className="p-1 hover:bg-gray-100 rounded-full transition-colors"
//                     >
//                       <X size={14} />
//                     </motion.button>
//                   </div>
//                 </div>
//                 {renderCardContent(card)}
//               </div>
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

///////////////////////////////////////////////////////////////////////////////

// import React, { useState,useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useParams } from "react-router-dom";
// import { useTabs } from "../../Context/TabProvider";
// import {
//   Menu,
//   X,
//   GripHorizontal,
//   Maximize2,
//   Minimize2,
//   List,
//   Grid,
//   Layout,
//   ChevronDown,
//   ChevronUp,
// } from "lucide-react";

// const Button = ({ children, onClick, variant, size, className }) => {
//   const baseStyles = "px-4 py-2 rounded-lg focus:outline-none";
//   const variantStyles = {
//     ghost: "bg-transparent hover:bg-gray-200",
//     primary: "bg-blue-500 text-white hover:bg-blue-600",
//   };
//   const sizeStyles = {
//     sm: "text-sm",
//     md: "text-base",
//   };

//   return (
//     <button
//       onClick={onClick}
//       className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
//     >
//       {children}
//     </button>
//   );
// };

// const CardContent = ({ children }) => {
//   return <div className="text-gray-800 p-4">{children}</div>;
// };

// const Dashboard = () => {
//   const { id } = useParams();
//   const { addTab } = useTabs();
 
//     const [activeTab, setActiveTab] = useState("Document");

//     useEffect(() => {

//       addTab({ id:"/dashboard", name:"Home", path:`/dashboard/${id}` });
    
//   }, [ id]);
  // const [cards, setCards] = useState([
  //   {
  //     id: "health",
  //     title: "Health Composition",
  //     icon: "🫀",
  //     content: {
  //       Glucose: { value: "7.9 mmol/L", status: "green" },
  //       Cholesterol: { value: "195 mg/dL", status: "red" },
  //       Hemoglobin: { value: "9.6 mmol/L", status: "green" },
  //     },
  //   },
  //   {
  //     id: "medications",
  //     title: "Medications",
  //     icon: "💊",
  //     content: {
  //       Albuterol: { value: "2 puffs/6h", status: "blue" },
  //       "Vitamin D": { value: "1000 IU daily", status: "green" },
  //     },
  //   },
  //   {
  //     id: "allergies",
  //     title: "Allergies",
  //     icon: "⚠️",
  //     content: {
  //       Penicillin: { value: "Severe", status: "red" },
  //       Codeine: { value: "Moderate", status: "orange" },
  //     },
  //   },
  //   {
  //     id: "vitals",
  //     title: "Vital Signs",
  //     icon: "📊",
  //     content: {
  //       BP: { value: "120/80", status: "green" },
  //       HR: { value: "72 bpm", status: "green" },
  //     },
  //   },
  //   {
  //     id: "notes",
  //     title: "Notes",
  //     icon: "📝",
  //     content: {
  //       note1: { value: "Patient is stable", status: "green" },
  //     },
  //   },
  //   {
  //     id: "immunotherapy",
  //     title: "Immunotherapy",
  //     icon: "💉",
  //     content: {
  //       "Immunotherapy Plan": { value: "Ongoing", status: "green" },
  //     },
  //   },
  //   {
  //     id: "problems",
  //     title: "Problems",
  //     icon: "⚠️",
  //     content: {
  //       "Chronic Pain": { value: "Ongoing", status: "orange" },
  //     },
  //   },
  //   {
  //     id: "plan-summary",
  //     title: "Plan Summary",
  //     icon: "📋",
  //     content: {
  //       "Treatment Plan": { value: "To be reviewed", status: "blue" },
  //     },
  //   },
  //   {
  //     id: "documents",
  //     title: "Documents",
  //     icon: "📑",
  //     content: {
  //       "Medical Records": { value: "Available", status: "green" },
  //     },
  //   },
  //   {
  //     id: "lab-orders",
  //     title: "Lab Orders",
  //     icon: "🔬",
  //     content: {
  //       "Blood Test": { value: "Ordered", status: "blue" },
  //     },
  //   },
  //   {
  //     id: "lab-results",
  //     title: "Lab Results",
  //     icon: "🧪",
  //     content: {
  //       "Blood Test": { value: "Pending", status: "yellow" },
  //     },
  //   },
  //   {
  //     id: "messages",
  //     title: "Messages",
  //     icon: "📩",
  //     content: {
  //       "Doctor's Message": { value: "Follow-up required", status: "orange" },
  //     },
  //   },
  //   {
  //     id: "quick-memos",
  //     title: "Quick Memos",
  //     icon: "🗒️",
  //     content: {
  //       "Reminder": { value: "Check medications", status: "green" },
  //     },
  //   },
  //   {
  //     id: "risk-factors",
  //     title: "Risk Factors",
  //     icon: "⚠️",
  //     content: {
  //       "High Cholesterol": { value: "Yes", status: "red" },
  //     },
  //   },
  //   {
  //     id: "health-watcher",
  //     title: "Health Watcher",
  //     icon: "👁️",
  //     content: {
  //       "Monitor": { value: "Stable", status: "green" },
  //     },
  //   },
  //   {
  //     id: "immunizations",
  //     title: "Immunizations",
  //     icon: "💉",
  //     content: {
  //       "Flu Vaccine": { value: "Completed", status: "green" },
  //     },
  //   },
  //   {
  //     id: "implantable-devices",
  //     title: "Implantable Devices",
  //     icon: "💎",
  //     content: {
  //       "Pacemaker": { value: "Active", status: "green" },
  //     },
  //   },
  //   {
  //     id: "encounters",
  //     title: "Encounters",
  //     icon: "📅",
  //     content: {
  //       "Last Visit": { value: "Jan 2025", status: "green" },
  //     },
  //   },
  //   {
  //     id: "family-connections",
  //     title: "Family Connections",
  //     icon: "👨‍👩‍👧",
  //     content: {
  //       "Spouse": { value: "John Doe", status: "green" },
  //     },
  //   },
  //   {
  //     id: "referrals",
  //     title: "Referrals",
  //     icon: "🔗",
  //     content: {
  //       "Cardiologist": { value: "Referred", status: "green" },
  //     },
  //   },
  // ]);
  

//   const [showNav, setShowNav] = useState(false);
//   const [expandedId, setExpandedId] = useState(null);
//   const [viewModes, setViewModes] = useState({});
//   const [closedCards, setClosedCards] = useState({});
//   const [draggedCard, setDraggedCard] = useState(null);
//   const [areAllCardsCollapsed, setAreAllCardsCollapsed] = useState(false);
//   const [collapsedContent, setCollapsedContent] = useState({});


//   const toggleAllCards = () => {
//     const newCollapsedState = {};
//     cards.forEach((card) => {
//       newCollapsedState[card.id] = !collapsedContent[card.id];
//     });
//     setCollapsedContent(newCollapsedState);
//   };

//   // Animation variants for the card content
//   const contentVariants = {
//     collapsed: {
//       height: 0,
//       opacity: 0,
//       transition: { duration: 0.3 },
//     },
//     expanded: {
//       height: "auto",
//       opacity: 1,
//       transition: { duration: 0.3 },
//     },
//   };

//   // Animation variants for drag
//   const dragVariants = {
//     dragging: {
//       scale: 1.05,
//       rotate: 2,
//       boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
//       transition: { duration: 0.2 },
//     },
//     idle: {
//       scale: 1,
//       rotate: 0,
//       boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
//       transition: { duration: 0.2 },
//     },
//   };



//   const toggleViewMode = (id) => {
//     setViewModes((prev) => ({
//       ...prev,
//       [id]:
//         prev[id] === "compact"
//           ? "normal"
//           : prev[id] === "normal"
//           ? "expanded"
//           : "compact",
//     }));
//   };

//   const closeCard = (id) => {
//     setClosedCards((prev) => ({ ...prev, [id]: true }));
//   };

//   const openCard = (id) => {
//     setClosedCards((prev) => ({ ...prev, [id]: false }));
//   };

//   const handleDragStart = (e, card, index) => {
//     setDraggedCard({ card, index });
//   };

//   const handleDragEnd = (e) => {
//     setDraggedCard(null);
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//   };

//   const handleDrop = (e, targetIndex) => {
//     e.preventDefault();

//     if (draggedCard && draggedCard.index !== targetIndex) {
//       const updatedCards = [...cards];
//       const [removed] = updatedCards.splice(draggedCard.index, 1);
//       updatedCards.splice(targetIndex, 0, removed);
//       setCards(updatedCards);
//     }
//   };



//   const renderCardContent = (card) => {
//     return (
//       <motion.div
//         initial={{ opacity: 0, height: 0 }}
//         animate={{ opacity: 1, height: collapsedContent[card.id] ? 0 : "auto" }}
//         transition={{ duration: 0.3 }}
//         className="overflow-hidden"
//       >
//         <div className="p-4 space-y-3">
//           {Object.entries(card.content).map(([key, data]) => (
//             <div key={key} className="flex justify-between items-center py-2 px-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
//               <span className="text-gray-600 font-medium">{key}</span>
//               <span className={`px-3 py-1 rounded-full text-sm font-medium shadow-sm ${
//                 data.status === 'green' ? 'text-green-700 bg-green-100 ring-1 ring-green-200' :
//                 data.status === 'red' ? 'text-red-700 bg-red-100 ring-1 ring-red-200' :
//                 data.status === 'orange' ? 'text-orange-700 bg-orange-100 ring-1 ring-orange-200' :
//                 'text-blue-700 bg-blue-100 ring-1 ring-blue-200'
//               }`}>
//                 {data.value}
//               </span>
//             </div>
//           ))}
//         </div>
//       </motion.div>
//     );
//   };

//   const getCardHeight = (viewMode, isExpanded) => {
//     if (isExpanded) return "h-full";
//     switch (viewMode) {
//       case "compact":
//         return "h-48";
//       case "expanded":
//         return "h-96";
//       default:
//         return "h-64";
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-4">
//       {/* Navigation Toggle */}
//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         onClick={() => setShowNav(!showNav)}
//         className="fixed top-26 right-4 p-2 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all z-50"
//       >
//         <Menu size={24} />
//       </motion.button>

//       {/* Sidebar Navigation */}
//       <motion.div
//         initial={{ x: "100%" }}
//         animate={{ x: showNav ? 0 : "100%" }}
//         transition={{ type: "spring", damping: 20 }}
//         className="fixed right-0 top-0 h-full w-64 bg-white shadow-xl z-40"
//       >
//         <div className="p-6 space-y-4">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-lg font-semibold text-gray-800">
//               EHR Sections
//             </h2>
//             {/* <Button
//               variant="primary"
//               size="sm"
//               onClick={toggleAllCards}
//               className="flex items-center space-x-2"
//             >
//               {areAllCardsCollapsed ? (
//                 <>
//                   <ChevronDown size={16} />
//                   <span>Expand All</span>
//                 </>
//               ) : (
//                 <>
//                   <ChevronUp size={16} />
//                   <span>Collapse All</span>
//                 </>
//               )}
//             </Button> */}


// <Button
//               variant="primary"
//               size="sm"
//               onClick={toggleAllCards}
//               className="flex items-center space-x-2"
//             >
//               {Object.values(collapsedContent).every(c => c) ? (
//                 <>
//                   <ChevronDown size={16} />
//                   <span>Expand All</span>
//                 </>
//               ) : (
//                 <>
//                   <ChevronUp size={16} />
//                   <span>Collapse All</span>
//                 </>
//               )}
//             </Button>


//           </div>
//           {cards.map((card) => (
//             <motion.button
//               key={card.id}
//               whileHover={{ x: 4 }}
//               onClick={() => openCard(card.id)}
//               className={`
//                 w-full text-left p-3 rounded-lg transition-colors
//                 flex items-center space-x-3 shadow-sm
//                 ${
//                   closedCards[card.id]
//                     ? "bg-gray-100"
//                     : "bg-white hover:bg-blue-50"
//                 }
//               `}
//             >
//               <span className="text-xl">{card.icon}</span>
//               <span className="text-gray-700 font-medium">{card.title}</span>
//             </motion.button>
//           ))}
//         </div>
//       </motion.div>

//       {/* Main Content */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto pt-16">
//         <AnimatePresence>
//           {cards.map(
//             (card, index) =>
//               !closedCards[card.id] && (
//                 <motion.div
//                   key={card.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, scale: 0.95 }}
//                   layout
//                   className={`
//                 ${expandedId === card.id ? "col-span-2 row-span-2" : ""}
//               `}
//                   draggable
//                   variants={dragVariants}
//                   // animate={draggedCard?.index === index ? "dragging" : "idle"}
//                   onDragStart={(e) => handleDragStart(e, card, index)}
//                   onDragEnd={handleDragEnd}
//                   onDragOver={handleDragOver}
//                   onDrop={(e) => handleDrop(e, index)}
//                 >
//                   <div
//                     className={`
//                 bg-white rounded-xl shadow-md border border-gray-100
//                 transform transition-all duration-200 relative
//                 hover:shadow-lg
//                 ${getCardHeight(viewModes[card.id], expandedId === card.id)}
//               `}
//                   >
//                     {/* Card Header */}
//                     <div className="p-3 flex items-center justify-between border-b border-gray-100 bg-gray-50/50 rounded-t-xl">
//                       <div className="flex items-center space-x-3">
//                         <div className="p-1.5 hover:bg-gray-100 rounded cursor-grab active:cursor-grabbing">
//                           <GripHorizontal size={16} className="text-gray-400" />
//                         </div>
//                         <h3 className="font-semibold text-gray-700 text-sm flex items-center">
//                           <span className="text-base mr-2">{card.icon}</span>
//                           {card.title}
//                         </h3>
//                       </div>
//                       <div className="flex space-x-1">
//                         <motion.button
//                           whileHover={{ scale: 1.1 }}
//                           whileTap={{ scale: 0.95 }}
//                           onClick={() => toggleViewMode(card.id)}
//                           className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
//                         >
//                           {viewModes[card.id] === "compact" ? (
//                             <List size={14} />
//                           ) : viewModes[card.id] === "normal" ? (
//                             <Grid size={14} />
//                           ) : (
//                             <Layout size={14} />
//                           )}
//                         </motion.button>
//                         <motion.button
//                           whileHover={{ scale: 1.1 }}
//                           whileTap={{ scale: 0.95 }}
//                           onClick={() =>
//                             setExpandedId(
//                               expandedId === card.id ? null : card.id
//                             )
//                           }
//                           className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
//                         >
//                           {expandedId === card.id ? (
//                             <Minimize2 size={14} />
//                           ) : (
//                             <Maximize2 size={14} />
//                           )}
//                         </motion.button>
//                         <motion.button
//                           whileHover={{ scale: 1.1 }}
//                           whileTap={{ scale: 0.95 }}
//                           onClick={() => closeCard(card.id)}
//                           className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
//                         >
//                           <X size={14} />
//                         </motion.button>
//                       </div>
//                     </div>
//                     {renderCardContent(card)}
//                   </div>
//                 </motion.div>
//               )
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

///////////////////////////////////////////////////////////////////////////////////////

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useParams } from "react-router-dom";
// import { useTabs } from "../../Context/TabProvider";
// import {
//   Menu,
//   X,
//   GripHorizontal,
//   Maximize2,
//   Minimize2,
//   List,
//   Grid,
//   Layout,
//   ChevronDown,
//   ChevronUp,
// } from "lucide-react";

// const Button = ({ children, onClick, variant, size, className }) => {
//   const baseStyles = "px-4 py-2 rounded-lg focus:outline-none";
//   const variantStyles = {
//     ghost: "bg-transparent hover:bg-gray-200",
//     primary: "bg-blue-500 text-white hover:bg-blue-600",
//   };
//   const sizeStyles = {
//     sm: "text-sm",
//     md: "text-base",
//   };

//   return (
//     <button
//       onClick={onClick}
//       className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
//     >
//       {children}
//     </button>
//   );
// };

// const Dashboard = () => {
//   const { id } = useParams();
//   const { addTab } = useTabs();
//   const [activeTab, setActiveTab] = useState("Document");
//   const [showNav, setShowNav] = useState(false);
//   const [expandedId, setExpandedId] = useState(null);
//   const [viewModes, setViewModes] = useState({});
//   const [closedCards, setClosedCards] = useState({});
//   const [draggedCard, setDraggedCard] = useState(null);
//   const [collapsedContent, setCollapsedContent] = useState({});
//   const [activeCardIndex, setActiveCardIndex] = useState(null);
   
    
//   const [cards, setCards] = useState([
//     {
//       id: "health",
//       title: "Health Composition",
//       icon: "🫀",
//       content: {
//         Glucose: { value: "7.9 mmol/L", status: "green" },
//         Cholesterol: { value: "195 mg/dL", status: "red" },
//         Hemoglobin: { value: "9.6 mmol/L", status: "green" },
//       },
//     },
//     {
//       id: "medications",
//       title: "Medications",
//       icon: "💊",
//       content: {
//         Albuterol: { value: "2 puffs/6h", status: "blue" },
//         "Vitamin D": { value: "1000 IU daily", status: "green" },
//       },
//     },
//     {
//       id: "allergies",
//       title: "Allergies",
//       icon: "⚠️",
//       content: {
//         Penicillin: { value: "Severe", status: "red" },
//         Codeine: { value: "Moderate", status: "orange" },
//       },
//     },
//     {
//       id: "vitals",
//       title: "Vital Signs",
//       icon: "📊",
//       content: {
//         BP: { value: "120/80", status: "green" },
//         HR: { value: "72 bpm", status: "green" },
//         BP2: { value: "120/80", status: "green" },
//         HR3: { value: "72 bpm", status: "green" },
//         BP4: { value: "120/80", status: "green" },
//         HR5: { value: "72 bpm", status: "green" },
//         BP6: { value: "120/80", status: "green" },
//         HR7: { value: "72 bpm", status: "green" },
//         BP8: { value: "120/80", status: "green" },
//         HR9: { value: "72 bpm", status: "green" },
//       },
//     },
//     {
//       id: "notes",
//       title: "Notes",
//       icon: "📝",
//       content: {
//         note1: { value: "Patient is stable", status: "green" },
//       },
//     },
//     {
//       id: "immunotherapy",
//       title: "Immunotherapy",
//       icon: "💉",
//       content: {
//         "Immunotherapy Plan": { value: "Ongoing", status: "green" },
//       },
//     },
//     {
//       id: "problems",
//       title: "Problems",
//       icon: "⚠️",
//       content: {
//         "Chronic Pain": { value: "Ongoing", status: "orange" },
//       },
//     },
//     {
//       id: "plan-summary",
//       title: "Plan Summary",
//       icon: "📋",
//       content: {
//         "Treatment Plan": { value: "To be reviewed", status: "blue" },
//       },
//     },
//     {
//       id: "documents",
//       title: "Documents",
//       icon: "📑",
//       content: {
//         "Medical Records": { value: "Available", status: "green" },
//       },
//     },
//     {
//       id: "lab-orders",
//       title: "Lab Orders",
//       icon: "🔬",
//       content: {
//         "Blood Test": { value: "Ordered", status: "blue" },
//       },
//     },
//     {
//       id: "lab-results",
//       title: "Lab Results",
//       icon: "🧪",
//       content: {
//         "Blood Test": { value: "Pending", status: "yellow" },
//       },
//     },
//     {
//       id: "messages",
//       title: "Messages",
//       icon: "📩",
//       content: {
//         "Doctor's Message": { value: "Follow-up required", status: "orange" },
//       },
//     },
//     {
//       id: "quick-memos",
//       title: "Quick Memos",
//       icon: "🗒️",
//       content: {
//         "Reminder": { value: "Check medications", status: "green" },
//       },
//     },
//     {
//       id: "risk-factors",
//       title: "Risk Factors",
//       icon: "⚠️",
//       content: {
//         "High Cholesterol": { value: "Yes", status: "red" },
//       },
//     },
//     {
//       id: "health-watcher",
//       title: "Health Watcher",
//       icon: "👁️",
//       content: {
//         "Monitor": { value: "Stable", status: "green" },
//       },
//     },
//     {
//       id: "immunizations",
//       title: "Immunizations",
//       icon: "💉",
//       content: {
//         "Flu Vaccine": { value: "Completed", status: "green" },
//       },
//     },
//     {
//       id: "implantable-devices",
//       title: "Implantable Devices",
//       icon: "💎",
//       content: {
//         "Pacemaker": { value: "Active", status: "green" },
//       },
//     },
//     {
//       id: "encounters",
//       title: "Encounters",
//       icon: "📅",
//       content: {
//         "Last Visit": { value: "Jan 2025", status: "green" },
//       },
//     },
//     {
//       id: "family-connections",
//       title: "Family Connections",
//       icon: "👨‍👩‍👧",
//       content: {
//         "Spouse": { value: "John Doe", status: "green" },
//       },
//     },
//     {
//       id: "referrals",
//       title: "Referrals",
//       icon: "🔗",
//       content: {
//         "Cardiologist": { value: "Referred", status: "green" },
//       },
//     },
//   ]);
//   useEffect(() => {
//     addTab({ id: "/dashboard", name: "Home", path: `/dashboard/${id}` });
//   }, [id]);

//   const closeCard = (cardId, e) => {
//     e.stopPropagation();
//     setClosedCards(prev => ({
//       ...prev,
//       [cardId]: true
//     }));
//     if (expandedId === cardId) {
//       setExpandedId(null);
//     }
//   };

//   const openCard = (cardId) => {
//     setClosedCards(prev => ({
//       ...prev,
//       [cardId]: false
//     }));
//   };

//   const handleDragStart = (e, card, index) => {
//     setDraggedCard({ card, index });
//   };

//   const handleDragEnd = () => {
//     setDraggedCard(null);
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//   };

//   const handleDrop = (e, targetIndex) => {
//     e.preventDefault();
//     if (draggedCard && draggedCard.index !== targetIndex) {
//       const updatedCards = [...cards];
//       const [removed] = updatedCards.splice(draggedCard.index, 1);
//       updatedCards.splice(targetIndex, 0, removed);
//       setCards(updatedCards);
//     }
//   };

//   const renderCardContent = (card) => {
//     return (
//       <motion.div
//         initial={{ opacity: 0, height: 0 }}
//         animate={{ opacity: 1, height: "auto" }}
//         exit={{ opacity: 0, height: 0 }}
//         transition={{ duration: 0.3 }}
//         className="overflow-hidden bg-white"
//       >
//         <div className="p-4 space-y-3">
//           {Object.entries(card.content).map(([key, data]) => (
//             <div key={key} className="flex justify-between items-center py-2 px-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
//               <span className="text-gray-600 font-medium">{key}</span>
//               <span className={`px-3 py-1 rounded-full text-sm font-medium shadow-sm ${
//                 data.status === 'green' ? 'text-green-700 bg-green-100 ring-1 ring-green-200' :
//                 data.status === 'red' ? 'text-red-700 bg-red-100 ring-1 ring-red-200' :
//                 data.status === 'orange' ? 'text-orange-700 bg-orange-100 ring-1 ring-orange-200' :
//                 'text-blue-700 bg-blue-100 ring-1 ring-blue-200'
//               }`}>
//                 {data.value}
//               </span>
//             </div>
//           ))}
//         </div>
//       </motion.div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-1">
//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         onClick={() => setShowNav(!showNav)}
//         className="fixed top-26 right-4 p-2 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all z-50"
//       >
//         <Menu size={24} />
//       </motion.button>

//       <div className="relative  mx-auto pt-4">
//         <div className="grid grid-cols-3 gap-4">
//           {cards.map((card, index) => !closedCards[card.id] && (
//             <motion.div
//               key={card.id}
//               className="relative"
//               style={{
//                 gridColumn: expandedId === card.id ? "span 3" : "span 1",
//                 zIndex: expandedId === card.id ? cards.length + 1 : cards.length - index,
//               }}
//               layout
//             >
//               <motion.div
//                 className={`bg-white rounded-lg shadow-md border border-gray-100 transition-all duration-200
//                   ${expandedId === card.id ? "transform-none" : "hover:-translate-y-1"}`}
//                 animate={{
//                   scale: expandedId === card.id ? 1 : 0.98,
//                 }}
//                 whileHover={{
//                   scale: expandedId === card.id ? 1 : 1.02,
//                   zIndex: cards.length + 2,
//                 }}
//                 draggable
//                 onDragStart={(e) => handleDragStart(e, card, index)}
//                 onDragEnd={handleDragEnd}
//                 onDragOver={handleDragOver}
//                 onDrop={(e) => handleDrop(e, index)}
//               >
//                 <div
//                   className={`p-3 flex items-center justify-between border-b border-gray-100 
//                     ${expandedId === card.id ? 'bg-blue-50' : 'bg-white'} 
//                     rounded-t-lg cursor-pointer`}
//                   onClick={() => setExpandedId(expandedId === card.id ? null : card.id)}
//                 >
//                   <div className="flex items-center space-x-3">
//                     <div className="p-1.5 hover:bg-gray-100 rounded cursor-grab active:cursor-grabbing">
//                       <GripHorizontal size={16} className="text-gray-400" />
//                     </div>
//                     <h3 className="font-semibold text-gray-700 text-sm flex items-center">
//                       <span className="text-base mr-2">{card.icon}</span>
//                       {card.title}
//                     </h3>
//                   </div>
//                   <div className="flex space-x-1">
//                     <motion.button
//                       whileHover={{ scale: 1.1 }}
//                       whileTap={{ scale: 0.95 }}
//                       onClick={(e) => closeCard(card.id, e)}
//                       className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
//                     >
//                       <X size={14} />
//                     </motion.button>
//                     {expandedId === card.id && (
//                       <motion.button
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.95 }}
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           setExpandedId(null);
//                         }}
//                         className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
//                       >
//                         <Minimize2 size={14} />
//                       </motion.button>
//                     )}
//                   </div>
//                 </div>
//                 <AnimatePresence>
//                   {expandedId === card.id && renderCardContent(card)}
//                 </AnimatePresence>
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Side Navigation for Closed Cards */}
//       <AnimatePresence>
//         {showNav && (
//           <motion.div
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{ type: "spring", damping: 20 }}
//             className="fixed right-0 top-0 h-full w-64 bg-white shadow-xl z-40 p-4"
//           >
//             <h2 className="text-lg font-semibold mb-4">Closed Cards</h2>
//             <div className="space-y-2">
//               {cards.map((card) => 
//                 closedCards[card.id] && (
//                   <motion.button
//                     key={card.id}
//                     onClick={() => openCard(card.id)}
//                     className="w-full flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg"
//                   >
//                     <span>{card.icon}</span>
//                     <span>{card.title}</span>
//                   </motion.button>
//                 )
//               )}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Dashboard;

//
/////////////////////////////////////////////////////////


// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useParams } from "react-router-dom";
// import { useTabs } from "../../Context/TabProvider";
// import {
//   Menu,
//   X,
//   GripHorizontal,
//   Maximize2,
//   Minimize2,
//   List,
//   Grid,
//   Layout,
//   ChevronDown,
//   ChevronUp,
// } from "lucide-react";
// import NotesForm from "./NotesForm";

// const Button = ({ children, onClick, variant, size, className }) => {
//   const baseStyles = "px-4 py-2 rounded-lg focus:outline-none";
//   const variantStyles = {
//     ghost: "bg-transparent hover:bg-gray-200",
//     primary: "bg-blue-500 text-white hover:bg-blue-600",
//   };
//   const sizeStyles = {
//     sm: "text-sm",
//     md: "text-base",
//   };

//   return (
//     <button
//       onClick={onClick}
//       className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
//     >
//       {children}
//     </button>
//   );
// };

// const VitalsForm = ({ onSubmit }) => {
//   const [formData, setFormData] = useState({
//     weight: '',
//     previousWeight: '',
//     weightChange: '',
//     height: '',
//     bmi: '',
//     pulse: '',
//     temperature: '',
//     respirationRate: '',
//     oxygenSaturation: '',
//     oxygenSupplement: '',
//     systolicBP: '',
//     diastolicBP: '',
//     bpLocation: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formData);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4 p-4">
//       <div className="grid grid-cols-3 gap-4">
//         {[
//           { label: 'Weight (kg)', name: 'weight' },
//           { label: 'Previous Weight (kg)', name: 'previousWeight' },
//           { label: 'Weight Change (kg)', name: 'weightChange' },
//           { label: 'Height (cm)', name: 'height' },
//           { label: 'BMI', name: 'bmi' },
//           { label: 'Pulse (bpm)', name: 'pulse' },
//           { label: 'Temperature (°C)', name: 'temperature' },
//           { label: 'Respiration Rate (breaths/min)', name: 'respirationRate' },
//           { label: 'Oxygen Saturation (%)', name: 'oxygenSaturation' },
//           { label: 'Oxygen Supplement', name: 'oxygenSupplement' },
//           { label: 'Systolic BP (mmHg)', name: 'systolicBP' },
//           { label: 'Diastolic BP (mmHg)', name: 'diastolicBP' },
//           { label: 'BP Measurement Location', name: 'bpLocation' }
//         ].map(field => (
//           <div key={field.name} className="flex flex-col">
//             <label className="text-sm text-gray-600 mb-1">{field.label}</label>
//             <input
//               type="text"
//               name={field.name}
//               value={formData[field.name]}
//               onChange={handleChange}
//               className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//         ))}
//       </div>
//       <button
//         type="submit"
//         className="w-40 align-middle bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600 transition-colors"
//       >
//         Submit Vitals
//       </button>
//     </form>
//   );
// };

// const Dashboard = () => {
//   const { id } = useParams();
//   const { addTab } = useTabs();
//   const [activeTab, setActiveTab] = useState("Document");
//   const [showNav, setShowNav] = useState(false);
//   const [expandedId, setExpandedId] = useState(null);
//   const [viewModes, setViewModes] = useState({});
//   const [closedCards, setClosedCards] = useState({});
//   const [draggedCard, setDraggedCard] = useState(null);
//   const [collapsedContent, setCollapsedContent] = useState({});
//   const [activeCardIndex, setActiveCardIndex] = useState(null);
   
    
//   const [cards, setCards] = useState([
//     {
//       id: "health",
//       title: "Health Composition",
//       icon: "🫀",
//       content: {
//         Glucose: { value: "7.9 mmol/L", status: "green" },
//         Cholesterol: { value: "195 mg/dL", status: "red" },
//         // Hemoglobin: { value: "9.6 mmol/L", status: "green" },
//       },
//     },
//     {
//       id: "medications",
//       title: "Medications",
//       icon: "💊",
//       content: {
//         Albuterol: { value: "2 puffs/6h", status: "blue" },
//         "Vitamin D": { value: "1000 IU daily", status: "green" },
//       },
//     },

//     {
//       id: "allergies",
//       title: "Allergies",
//       icon: "⚠️",
//       content: {
//         Penicillin: { value: "Severe", status: "red" },
//         Codeine: { value: "Moderate", status: "orange" },
//       },
//     },
//     {
//       id: "vitals",
//       title: "Vital Signs",
//       icon: "📊",
//       content: {
//         BP: { value: "120/80", status: "green" },
//         HR: { value: "72 bpm", status: "green" },
        
//       },
//     },
   
//     {
//       id: "notes",
//       title: "Notes",
//       icon: "📝",
//       content: {
//         note1: { value: "Patient is stable", status: "green" },
//       },
//     },
//     {
//       id: "immunotherapy",
//       title: "Immunotherapy",
//       icon: "💉",
//       content: {
//         "Immunotherapy Plan": { value: "Ongoing", status: "green" },
//       },
//     },
//     {
//       id: "problems",
//       title: "Problems",
//       icon: "⚠️",
//       content: {
//         "Chronic Pain": { value: "Ongoing", status: "orange" },
//       },
//     },
//     {
//       id: "plan-summary",
//       title: "Plan Summary",
//       icon: "📋",
//       content: {
//         "Treatment Plan": { value: "To be reviewed", status: "blue" },
//       },
//     },
//     {
//       id: "documents",
//       title: "Documents",
//       icon: "📑",
//       content: {
//         "Medical Records": { value: "Available", status: "green" },
//       },
//     },
//     {
//       id: "lab-orders",
//       title: "Lab Orders",
//       icon: "🔬",
//       content: {
//         "Blood Test": { value: "Ordered", status: "blue" },
//       },
//     },
//     {
//       id: "lab-results",
//       title: "Lab Results",
//       icon: "🧪",
//       content: {
//         "Blood Test": { value: "Pending", status: "yellow" },
//       },
//     },
//     {
//       id: "messages",
//       title: "Messages",
//       icon: "📩",
//       content: {
//         "Doctor's Message": { value: "Follow-up required", status: "orange" },
//       },
//     },
//     {
//       id: "quick-memos",
//       title: "Quick Memos",
//       icon: "🗒️",
//       content: {
//         "Reminder": { value: "Check medications", status: "green" },
//       },
//     },
//     {
//       id: "risk-factors",
//       title: "Risk Factors",
//       icon: "⚠️",
//       content: {
//         "High Cholesterol": { value: "Yes", status: "red" },
//       },
//     },
//     {
//       id: "health-watcher",
//       title: "Health Watcher",
//       icon: "👁️",
//       content: {
//         "Monitor": { value: "Stable", status: "green" },
//       },
//     },
//     {
//       id: "immunizations",
//       title: "Immunizations",
//       icon: "💉",
//       content: {
//         "Flu Vaccine": { value: "Completed", status: "green" },
//       },
//     },
//     {
//       id: "implantable-devices",
//       title: "Implantable Devices",
//       icon: "💎",
//       content: {
//         "Pacemaker": { value: "Active", status: "green" },
//       },
//     },
//     {
//       id: "encounters",
//       title: "Encounters",
//       icon: "📅",
//       content: {
//         "Last Visit": { value: "Jan 2025", status: "green" },
//       },
//     },
//     {
//       id: "family-connections",
//       title: "Family Connections",
//       icon: "👨‍👩‍👧",
//       content: {
//         "Spouse": { value: "John Doe", status: "green" },
//       },
//     },
//     {
//       id: "referrals",
//       title: "Referrals",
//       icon: "🔗",
//       content: {
//         "Cardiologist": { value: "Referred", status: "green" },
//       },
//     },
//   ]);

//   useEffect(() => {
//     addTab({ id: "/dashboard", name: "Home", path: `/dashboard/${id}` });
//   }, [id]);

//   const closeCard = (cardId, e) => {
//     e.stopPropagation();
//     setClosedCards(prev => ({
//       ...prev,
//       [cardId]: true
//     }));
//     if (expandedId === cardId) {
//       setExpandedId(null);
//     }
//   };

//   const openCard = (cardId) => {
//     setClosedCards(prev => ({
//       ...prev,
//       [cardId]: false
//     }));
//   };

//   const handleDragStart = (e, card, index) => {
//     setDraggedCard({ card, index });
//   };

//   const handleDragEnd = () => {
//     setDraggedCard(null);
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//   };

//   const handleDrop = (e, targetIndex) => {
//     e.preventDefault();
//     if (draggedCard && draggedCard.index !== targetIndex) {
//       const updatedCards = [...cards];
//       const [removed] = updatedCards.splice(draggedCard.index, 1);
//       updatedCards.splice(targetIndex, 0, removed);
//       setCards(updatedCards);
//       if (targetIndex < 2) {
//         setExpandedId(removed.id);
//       }
//     }
//   };


//   const handleVitalsSubmit = (vitalsData) => {
//     // Update the vitals card content with the submitted data
//     setCards(prevCards => prevCards.map(card => {
//       if (card.id === 'vitals') {
//         return {
//           ...card,
//           content: {
//             Weight: { value: `${vitalsData.weight} kg`, status: 'green' },
//             'Previous Weight': { value: `${vitalsData.previousWeight} kg`, status: 'green' },
//             'Weight Change': { value: `${vitalsData.weightChange} kg`, status: 'green' },
//             Height: { value: `${vitalsData.height} cm`, status: 'green' },
//             BMI: { value: vitalsData.bmi, status: 'green' },
//             Pulse: { value: `${vitalsData.pulse} bpm`, status: 'green' },
//             Temperature: { value: `${vitalsData.temperature} °C`, status: 'green' },
//             'Respiration Rate': { value: `${vitalsData.respirationRate} breaths/min`, status: 'green' },
//             'O2 Saturation': { value: `${vitalsData.oxygenSaturation}%`, status: 'green' },
//             'O2 Supplement': { value: vitalsData.oxygenSupplement, status: 'green' },
//             BP: { value: `${vitalsData.systolicBP}/${vitalsData.diastolicBP}`, status: 'green' },
//             'BP Location': { value: vitalsData.bpLocation, status: 'green' }
//           }
//         };
//       }
//       return card;
//     }));
//   };

//   const renderCardContent = (card) => {


//     if (card.id === 'vitals') {
//       return (
//         <motion.div
//           initial={{ opacity: 0, height: 0 }}
//           animate={{ opacity: 1, height: "auto" }}
//           exit={{ opacity: 0, height: 0 }}
//           transition={{ duration: 0.3 }}
//           className="overflow-hidden bg-white"
//         >
//           <VitalsForm onSubmit={handleVitalsSubmit} />
//         </motion.div>
//       );
//     }else if(card.id === 'notes'){
//       return (
//         <motion.div
//           initial={{ opacity: 0, height: 0 }}
//           animate={{ opacity: 1, height: "auto" }}
//           exit={{ opacity: 0, height: 0 }}
//           transition={{ duration: 0.3 }}
//           className="overflow-hidden bg-white"
//         >
//           <NotesForm onSubmit={handleVitalsSubmit} />
//         </motion.div>
//       );
//     }
//     return (
//       <motion.div
//         initial={{ opacity: 0, height: 0  }}
//         animate={{ opacity: 1, height: "auto"}}
//         exit={{ opacity: 0, height: 0 }}
//         transition={{ duration: 0.3 }}
//         className="overflow-hidden bg-white"
//       >
//         <div className="p-2 space-y-1 ">
//           {Object.entries(card.content).map(([key, data]) => (
//             <div key={key} className="flex justify-around items-center py-2 px-1 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
//               <span className="text-gray-600 font-medium">{key}</span>
//               <span className={`px-3 py-1 rounded-full text-sm font-medium shadow-sm ${
//                 data.status === 'green' ? 'text-green-700 bg-green-100 ring-1 ring-green-200' :
//                 data.status === 'red' ? 'text-red-700 bg-red-100 ring-1 ring-red-200' :
//                 data.status === 'orange' ? 'text-orange-700 bg-orange-100 ring-1 ring-orange-200' :
//                 'text-blue-700 bg-blue-100 ring-1 ring-blue-200'
//               }`}>
//                 {data.value}
//               </span>
//             </div>
//           ))}
//         </div>
//       </motion.div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-1">
//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         onClick={() => setShowNav(!showNav)}
//         className="fixed top-26 right-4 p-2 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all z-50"
//       >
//         <Menu size={24} />
//       </motion.button>

//       <div className="relative  mx-auto  pt-4 ">
//         <div className="grid grid-cols-3 gap-4 ">
//           {cards.slice(0, 3).map((card, index) => !closedCards[card.id] && (
//             <motion.div
//               key={card.id}
//               className="relative"
//               style={{
//                 gridColumn: "span 1",
//                 zIndex: cards.length + 1,
//               }}
//               layout
//             >
//               <motion.div
//                 className={`bg-white  rounded-lg shadow-md border border-gray-100 transition-all duration-200`}
//                 animate={{
//                   scale: 1,
//                 }}
//                 whileHover={{
//                   scale: 1.02,
//                   zIndex: cards.length + 2,
//                 }}
//                 draggable
//                 onDragStart={(e) => handleDragStart(e, card, index)}
//                 onDragEnd={handleDragEnd}
//                 onDragOver={handleDragOver}
//                 onDrop={(e) => handleDrop(e, index)}
//               >
//                 <div
//                   className={`p-3 flex items-center justify-between border-b border-gray-100 
//                     bg-blue-50 
//                     rounded-t-lg cursor-pointer`}
//                   onClick={() => setExpandedId(expandedId === card.id ? null : card.id)}
//                 >
//                   <div className="flex items-center space-x-3">
//                     <div className="p-1.5 hover:bg-gray-100 rounded cursor-grab active:cursor-grabbing">
//                       <GripHorizontal size={16} className="text-gray-400" />
//                     </div>
//                     <h3 className="font-semibold text-gray-700 text-sm flex items-center">
//                       <span className="text-base mr-2">{card.icon}</span>
//                       {card.title}
//                     </h3>
//                   </div>
//                   <div className="flex space-x-1">
//                     <motion.button
//                       whileHover={{ scale: 1.1 }}
//                       whileTap={{ scale: 0.95 }}
//                       onClick={(e) => closeCard(card.id, e)}
//                       className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
//                     >
//                       <X size={14} />
//                     </motion.button>
//                     {expandedId === card.id && (
//                       <motion.button
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.95 }}
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           setExpandedId(null);
//                         }}
//                         className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
//                       >
//                         <Minimize2 size={14} />
//                       </motion.button>
//                     )}
//                   </div>
//                 </div>
//                 <AnimatePresence>
//                   {renderCardContent(card)}
//                 </AnimatePresence>
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>
//         <div className="grid grid-cols-4 gap-4 mt-4 ">
//           {cards.slice(3).map((card, index) => !closedCards[card.id] && (
//             <motion.div
//               key={card.id}
//               className="relative"
//               style={{
//                 gridColumn: expandedId === card.id ? "span 2" : "span 1",
//                 gridRow: expandedId === card.id ? "span 2" : "auto",
//                 zIndex: expandedId === card.id ? cards.length + 1 : cards.length - index,
//               }}
//               layout
//             >
//               <motion.div
//                 className={`bg-white rounded-lg shadow-md border border-gray-100 transition-all duration-200
//                   ${expandedId === card.id ? "transform-none w-auto" : "hover:-translate-y-1"}`}
//                 animate={{
//                   scale: expandedId === card.id ? 1 : 0.98,
//                 }}
//                 whileHover={{
//                   scale: expandedId === card.id ? 1 : 1.02,
//                   zIndex: cards.length + 2,
//                 }}
//                 draggable
//                 onDragStart={(e) => handleDragStart(e, card, index + 3)}
//                 onDragEnd={handleDragEnd}
//                 onDragOver={handleDragOver}
//                 onDrop={(e) => handleDrop(e, index + 3)}
//               >
//                 <div
//                   className={`p-3 flex items-center justify-between border-b border-gray-100 
//                     ${expandedId === card.id ? 'bg-blue-50' : 'bg-white'} 
//                     rounded-t-lg cursor-pointer`}
//                   onClick={() => setExpandedId(expandedId === card.id ? null : card.id)}
//                 >
//                   <div className="flex items-center space-x-3">
//                     <div className="p-1.5 hover:bg-gray-100 rounded cursor-grab active:cursor-grabbing">
//                       <GripHorizontal size={16} className="text-gray-400" />
//                     </div>
//                     <h3 className="font-semibold text-gray-700 text-sm flex items-center">
//                       <span className="text-base mr-2">{card.icon}</span>
//                       {card.title}
//                     </h3>
//                   </div>
//                   <div className="flex space-x-1">
//                     <motion.button
//                       whileHover={{ scale: 1.1 }}
//                       whileTap={{ scale: 0.95 }}
//                       onClick={(e) => closeCard(card.id, e)}
//                       className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
//                     >
//                       <X size={14} />
//                     </motion.button>
//                     {expandedId === card.id && (
//                       <motion.button
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.95 }}
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           setExpandedId(null);
//                         }}
//                         className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
//                       >
//                         <Minimize2 size={14} />
//                       </motion.button>
//                     )}
//                   </div>
//                 </div>
//                 <AnimatePresence>
//                   {expandedId === card.id && renderCardContent(card)}
//                 </AnimatePresence>
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>

        
//       </div>

//       {/* Side Navigation for Closed Cards */}
//       <AnimatePresence>
//         {showNav && (
//           <motion.div
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{ type: "spring", damping: 20 }}
//             className="fixed right-0 top-0 h-full w-64 bg-white shadow-xl z-40 p-4"
//           >
//             <h2 className="text-lg font-semibold mb-4">Closed Cards</h2>
//             <div className="space-y-2">
//               {cards.map((card) => 
//                 closedCards[card.id] && (
//                   <motion.button
//                     key={card.id}
//                     onClick={() => openCard(card.id)}
//                     className="w-full flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg"
//                   >
//                     <span>{card.icon}</span>
//                     <span>{card.title}</span>
//                   </motion.button>
//                 )
//               )}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
      
//     </div>
//   );
// };

// export default Dashboard;

/////////////////////////////////////////////////////////

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

const Button = ({ children, onClick, variant, size, className }) => {
  const baseStyles = "px-4 py-2 rounded-lg focus:outline-none";
  const variantStyles = {
    ghost: "bg-transparent hover:bg-gray-200",
    primary: "bg-blue-500 text-white hover:bg-blue-600",
  };
  const sizeStyles = {
    sm: "text-sm",
    md: "text-base",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </button>
  );
};

const VitalsForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    weight: '',
    previousWeight: '',
    weightChange: '',
    height: '',
    bmi: '',
    pulse: '',
    temperature: '',
    respirationRate: '',
    oxygenSaturation: '',
    oxygenSupplement: '',
    systolicBP: '',
    diastolicBP: '',
    bpLocation: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: 'Weight (kg)', name: 'weight' },
          { label: 'Previous Weight (kg)', name: 'previousWeight' },
          { label: 'Weight Change (kg)', name: 'weightChange' },
          { label: 'Height (cm)', name: 'height' },
          { label: 'BMI', name: 'bmi' },
          { label: 'Pulse (bpm)', name: 'pulse' },
          { label: 'Temperature (°C)', name: 'temperature' },
          { label: 'Respiration Rate (breaths/min)', name: 'respirationRate' },
          { label: 'Oxygen Saturation (%)', name: 'oxygenSaturation' },
          { label: 'Oxygen Supplement', name: 'oxygenSupplement' },
          { label: 'Systolic BP (mmHg)', name: 'systolicBP' },
          { label: 'Diastolic BP (mmHg)', name: 'diastolicBP' },
          { label: 'BP Measurement Location', name: 'bpLocation' }
        ].map(field => (
          <div key={field.name} className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">{field.label}</label>
            <input
              type="text"
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}
      </div>
      <button
        type="submit"
        className="w-40 align-middle bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600 transition-colors"
      >
        Submit Vitals
      </button>
    </form>
  );
};

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
  const [cards, setCards] = useState([
    {
      id: "health",
      title: "Health Composition",
      icon: "🫀",
      content: {
        Glucose: { value: "7.9 mmol/L", status: "green" },
        Cholesterol: { value: "195 mg/dL", status: "red" },
      },
    },   {
      id: "immunizations",
      title: "Immunizations",
      icon: "💉",
      content: {
        "Flu Vaccine": { value: "Completed", status: "green" },
      },
    },
    {
      id: "immunotherapy",
      title: "Immunotherapy",
      icon: "💉",
      content: {
        "Immunotherapy Plan": { value: "Ongoing", status: "green" },
      },
    },
    
    {
      id: "vitals",
      title: "Vital Signs",
      icon: "📊",
      content: {
        BP: { value: "120/80", status: "green" },
        HR: { value: "72 bpm", status: "green" },
      },
    },
    {
      id: "notes",
      title: "Notes",
      icon: "📝",
      content: {
        note1: { value: "Patient is stable", status: "green" },
      },
    },
    
    {
      id: "allergies",
      title: "Allergies",
      icon: "⚠️",
      content: {
        Penicillin: { value: "Severe", status: "red" },
        Codeine: { value: "Moderate", status: "orange" },
      },
    },


    {
      id: "problems",
      title: "Problems",
      icon: "⚠️",
      content: {
        "Chronic Pain": { value: "Ongoing", status: "orange" },
      },
    },
    {
      id: "medications",
      title: "Medications",
      icon: "💊",
      content: {
        Albuterol: { value: "2 puffs/6h", status: "blue" },
        "Vitamin D": { value: "1000 IU daily", status: "green" },
      },
    },
    {
      id: "plan-summary",
      title: "Plan Summary",
      icon: "📋",
      content: {
        "Treatment Plan": { value: "To be reviewed", status: "blue" },
      },
    },
    {
      id: "documents",
      title: "Documents",
      icon: "📑",
      content: {
        "Medical Records": { value: "Available", status: "green" },
      },
    },
    {
      id: "lab-orders",
      title: "Lab Orders",
      icon: "🔬",
      content: {
        "Blood Test": { value: "Ordered", status: "blue" },
      },
    },
    {
      id: "lab-results",
      title: "Lab Results",
      icon: "🧪",
      content: {
        "Blood Test": { value: "Pending", status: "yellow" },
      },
    },
    {
      id: "messages",
      title: "Messages",
      icon: "📩",
      content: {
        "Doctor's Message": { value: "Follow-up required", status: "orange" },
      },
    },
    {
      id: "quick-memos",
      title: "Quick Memos",
      icon: "🗒️",
      content: {
        "Reminder": { value: "Check medications", status: "green" },
      },
    },
    {
      id: "risk-factors",
      title: "Risk Factors",
      icon: "⚠️",
      content: {
        "High Cholesterol": { value: "Yes", status: "red" },
      },
    },
    {
      id: "health-watcher",
      title: "Health Watcher",
      icon: "👁️",
      content: {
        "Monitor": { value: "Stable", status: "green" },
      },
    },
 
    {
      id: "implantable-devices",
      title: "Implantable Devices",
      icon: "💎",
      content: {
        "Pacemaker": { value: "Active", status: "green" },
      },
    },
    {
      id: "encounters",
      title: "Encounters",
      icon: "📅",
      content: {
        "Last Visit": { value: "Jan 2025", status: "green" },
      },
    },
    {
      id: "family-connections",
      title: "Family Connections",
      icon: "👨‍👩‍👧",
      content: {
        "Spouse": { value: "John Doe", status: "green" },
      },
    },
    {
      id: "referrals",
      title: "Referrals",
      icon: "🔗",
      content: {
        "Cardiologist": { value: "Referred", status: "green" },
      },
    },
  ]);

  useEffect(() => {
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
    setCards(prevCards => prevCards.map(card => {
      if (card.id === 'vitals') {
        return {
          ...card,
          content: {
            Weight: { value: `${vitalsData.weight} kg`, status: 'green' },
            'Previous Weight': { value: `${vitalsData.previousWeight} kg`, status: 'green' },
            'Weight Change': { value: `${vitalsData.weightChange} kg`, status: 'green' },
            Height: { value: `${vitalsData.height} cm`, status: 'green' },
            BMI: { value: vitalsData.bmi, status: 'green' },
            Pulse: { value: `${vitalsData.pulse} bpm`, status: 'green' },
            Temperature: { value: `${vitalsData.temperature} °C`, status: 'green' },
            'Respiration Rate': { value: `${vitalsData.respirationRate} breaths/min`, status: 'green' },
            'O2 Saturation': { value: `${vitalsData.oxygenSaturation}%`, status: 'green' },
            'O2 Supplement': { value: vitalsData.oxygenSupplement, status: 'green' },
            BP: { value: `${vitalsData.systolicBP}/${vitalsData.diastolicBP}`, status: 'green' },
            'BP Location': { value: vitalsData.bpLocation, status: 'green' }
          }
        };
      }
      return card;
    }));
  };

  const renderCardContent = (card) => {
    if (card.id === 'vitals') {
      return (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden bg-white"
        >
          <VitalsForm onSubmit={handleVitalsSubmit} />
        </motion.div>
      );
    } else if(card.id === 'notes') {
      return (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden bg-white"
        >
          <NotesForm onSubmit={handleVitalsSubmit} />
        </motion.div>
      );
    }else if(card.id === 'problems') {
      return (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden bg-white"
        >
          <ProblemForm onSubmit={handleVitalsSubmit} />
        </motion.div>
      );
    }else if(card.id === 'quick-memos') {
      return (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden bg-white"
        >
          <QuickMemoForm onSubmit={handleVitalsSubmit} />
        </motion.div>
      );
    }
    else if(card.id === 'medications') {
      return (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden bg-white"
        >
          <MedicationForm onSubmit={handleVitalsSubmit} />
        </motion.div>
      );
    }else if(card.id === 'health-watcher') {
      return (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden bg-white"
        >
          <HealthWatcher onSubmit={handleVitalsSubmit} />
        </motion.div>
      );
    }
    else if(card.id === 'allergies') {
      return (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden bg-white"
        >
          <AllergiesForm onSubmit={handleVitalsSubmit} />
        </motion.div>
      );
    }
    else if(card.id === 'risk-factors') {
      return (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden bg-white"
        >
          <RiskFactor onSubmit={handleVitalsSubmit} />
        </motion.div>
      );
    }
    else if(card.id === 'encounters') {
      return (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden bg-white"
        >
          <EncounterList onSubmit={handleVitalsSubmit} />
        </motion.div>
      );
    }
    else if(card.id === 'documents') {
      return (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden bg-white"
        >
          <DocumentsForm onSubmit={handleVitalsSubmit} />
        </motion.div>
      );
    }else if(card.id === 'lab-orders') {
      return (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden bg-white"
        >
          <LabOrderForm onSubmit={handleVitalsSubmit} />
        </motion.div>
      );
    }else if(card.id === 'implantable-devices') {
      return (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden bg-white"
        >
          <ImplantableDeviceForm onSubmit={handleVitalsSubmit} />
        </motion.div>
      );
    }
    else if(card.id === 'family-connections') {
      return (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden bg-white"
        >
          <FamilyConnectionForm onSubmit={handleVitalsSubmit} />
        </motion.div>
      );
    }
    else if(card.id === 'referrals') {
      return (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden bg-white"
        >
          <ReferralForm onSubmit={handleVitalsSubmit} />
        </motion.div>
      );
    }


    return (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden bg-white"
      >
        <div className="p-2 space-y-1">
          {Object.entries(card.content).map(([key, data]) => (
            <div key={key} className="flex justify-around items-center py-2 px-1 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
              <span className="text-gray-600 font-medium">{key}</span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium shadow-sm ${
                data.status === 'green' ? 'text-green-700 bg-green-100 ring-1 ring-green-200' :
                data.status === 'red' ? 'text-red-700 bg-red-100 ring-1 ring-red-200' :
                data.status === 'orange' ? 'text-orange-700 bg-orange-100 ring-1 ring-orange-200' :
                'text-blue-700 bg-blue-100 ring-1 ring-blue-200'
              }`}>
                {data.value}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-1">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowNav(!showNav)}
        className="fixed top-26 right-4 p-2 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all z-50"
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
            className="fixed right-0 top-0 h-full w-64 bg-white shadow-xl z-40 p-4"
          >
            <h2 className="text-lg font-semibold mb-4">Closed Cards</h2>
            <div className="space-y-2">
              {cards.map((card) => 
                closedCards[card.id] && (
                  <motion.button
                    key={card.id}
                    onClick={() => openCard(card.id)}
                    className="w-full flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg"
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

//       </div>
//     </div>
//   );
// };

export default Dashboard;












   
//     return (
//       <motion.div
//         initial={{ opacity: 0, height: 0 }}
//         animate={{ opacity: 1, height: "auto" }}
//         exit={{ opacity: 0, height: 0 }}
//         transition={{ duration: 0.3 }}
//         className="overflow-hidden bg-white"
//       >
//         <div className="p-2 space-y-1">
//           {Object.entries(card.content).map(([key, data]) => (
//             <div key={key} className="flex justify-around items-center py-2 px-1 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
//               <span className="text-gray-600 font-medium">{key}</span>
//               <span className={`px-3 py-1 rounded-full text-sm font-medium shadow-sm ${
//                 data.status === 'green' ? 'text-green-700 bg-green-100 ring-1 ring-green-200' :
//                 data.status === 'red' ? 'text-red-700 bg-red-100 ring-1 ring-red-200' :
//                 data.status === 'orange' ? 'text-orange-700 bg-orange-100 ring-1 ring-orange-200' :
//                 'text-blue-700 bg-blue-100 ring-1 ring-blue-200'
//               }`}>
//                 {data.value}
//               </span>
//             </div>
//           ))}
//         </div>
//       </motion.div>
//     );
//   };

//   return (

//     <div className="min-h-screen bg-gray-50 p-1">
//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         onClick={() => setShowNav(!showNav)}
//         className="fixed top-26 right-4 p-2 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all z-50"
//       >
//         <Menu size={24} />
//       </motion.button>

//       <div className="relative mx-auto pt-4">
//         {/* Top row grid */}
//         <div className="grid grid-cols-3 gap-4">
//           {cards.slice(0, 3).map((card, index) => !closedCards[card.id] && (
//             <motion.div
//               key={card.id}
//               className="relative"
//               style={{
//                 gridColumn: "span 1",
//                 zIndex: cards.length + 1,
//               }}
//               layout
//             >
//               <motion.div
//                 className={`bg-white rounded-lg shadow-md border border-gray-100 transition-all duration-200`}
//                 animate={{
//                   scale: 1,
//                 }}
//                 whileHover={{
//                   scale: 1.02,
//                   zIndex: cards.length + 2,
//                 }}
//                 draggable
//                 onDragStart={(e) => handleDragStart(e, card, index)}
//                 onDragEnd={handleDragEnd}
//                 onDragOver={handleDragOver}
//                 onDrop={(e) => handleDrop(e, index)}
//               >
//                 <div
//                   className={`p-3 flex items-center justify-between border-b border-gray-100 
//                     bg-blue-50 
//                     rounded-t-lg cursor-pointer`}
//                   onClick={() => setExpandedId(expandedId === card.id ? null : card.id)}
//                 >
//                   <div className="flex items-center space-x-3">
//                     <div className="p-1.5 hover:bg-gray-100 rounded cursor-grab active:cursor-grabbing">
//                       <GripHorizontal size={16} className="text-gray-400" />
//                     </div>
//                     <h3 className="font-semibold text-gray-700 text-sm flex items-center">
//                       <span className="text-base mr-2">{card.icon}</span>
//                       {card.title}
//                     </h3>
//                   </div>
//                   <div className="flex space-x-1">
//                     <motion.button
//                       whileHover={{ scale: 1.1 }}
//                       whileTap={{ scale: 0.95 }}
//                       onClick={(e) => closeCard(card.id, e)}
//                       className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
//                     >
//                       <X size={14} />
//                     </motion.button>
//                     {expandedId === card.id && (
//                       <motion.button
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.95 }}
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           setExpandedId(null);
//                         }}
//                         className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
//                       >
//                         <Minimize2 size={14} />
//                       </motion.button>
//                     )}
//                   </div>
//                 </div>
//                 <AnimatePresence>
//                   {renderCardContent(card)}
//                 </AnimatePresence>
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Bottom grid with masonry-like layout */}
//         <div className="grid grid-cols-4 auto-rows-min gap-4 mt-4">
//           {cards.slice(3).map((card, index) => !closedCards[card.id] && (
//             <motion.div
//               key={card.id}
//               className="relative"
//               style={{
//                 gridColumn: expandedId === card.id ? "span 2" : "span 1",
//                 gridRow: expandedId === card.id ? "span 6" : "auto",
//                 zIndex: expandedId === card.id ? cards.length + 1 : cards.length,
//               }}
//               layout
//             >
//               <motion.div
//                 className={`bg-white rounded-lg shadow-md border border-gray-100 transition-all duration-200
//                   ${expandedId === card.id ? "transform-none w-auto" : "hover:-translate-y-1"}`}
//                 animate={{
//                   scale: expandedId === card.id ? 1 : 0.98,
//                 }}
//                 whileHover={{
//                   scale: expandedId === card.id ? 1 : 1.02,
//                   zIndex: cards.length + 2,
//                 }}
//                 draggable
//                 onDragStart={(e) => handleDragStart(e, card, index + 3)}
//                 onDragEnd={handleDragEnd}
//                 onDragOver={handleDragOver}
//                 onDrop={(e) => handleDrop(e, index + 3)}
//               >
//                 <div
//                   className={`p-3 flex items-center justify-between border-b border-gray-100 
//                     ${expandedId === card.id ? 'bg-blue-50' : 'bg-white'} 
//                     rounded-t-lg cursor-pointer`}
//                   onClick={() => setExpandedId(expandedId === card.id ? null : card.id)}
//                 >
//                   <div className="flex items-center space-x-3">
//                     <div className="p-1.5 hover:bg-gray-100 rounded cursor-grab active:cursor-grabbing">
//                       <GripHorizontal size={16} className="text-gray-400" />
//                     </div>
//                     <h3 className="font-semibold text-gray-700 text-sm flex items-center">
//                       <span className="text-base mr-2">{card.icon}</span>
//                       {card.title}
//                     </h3>
//                   </div>
//                   <div className="flex space-x-1">
//                     <motion.button
//                       whileHover={{ scale: 1.1 }}
//                       whileTap={{ scale: 0.95 }}
//                       onClick={(e) => closeCard(card.id, e)}
//                       className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
//                     >
//                       <X size={14} />
//                     </motion.button>
//                     {expandedId === card.id && (
//                       <motion.button
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.95 }}
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           setExpandedId(null);
//                         }}
//                         className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
//                       >
//                         <Minimize2 size={14} />
//                       </motion.button>
//                     )}
//                   </div>
//                 </div>
//                 <AnimatePresence>
//                   {expandedId === card.id && renderCardContent(card)}
//                 </AnimatePresence>
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Side Navigation for Closed Cards */}
//       <AnimatePresence>
//         {showNav && (
//           <motion.div
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{ type: "spring", damping: 20 }}
//             className="fixed right-0 top-0 h-full w-64 bg-white shadow-xl z-40 p-4"
//           >
//             <h2 className="text-lg font-semibold mb-4">Closed Cards</h2>
//             <div className="space-y-2">
//               {cards.map((card) => 
//                 closedCards[card.id] && (
//                   <motion.button
//                     key={card.id}
//                     onClick={() => openCard(card.id)}
//                     className="w-full flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg"
//                   >
//                     <span>{card.icon}</span>
//                     <span>{card.title}</span>
//                   </motion.button>
//                 )
//               )}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Dashboard;