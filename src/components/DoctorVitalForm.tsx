
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { useTabs } from "../Context/TabProvider";
// import { ChevronDown, ChevronUp } from "lucide-react";

// function DoctorVitalsForm() {
//   const { id } = useParams();
//   const { addTab } = useTabs();
  
//   const [formState, setFormState] = useState({
//     fields: {},
//     extraFields: [],
//     submitted: false,
//     isCollapsed: false,
//     labels: [],
//     vitalCards: [],
//     expandedCardIndex: null,
//   });

//   const [draggedCard, setDraggedCard] = useState(null);
//   const [draggedOverCard, setDraggedOverCard] = useState(null);

//   useEffect(() => {
//     const initializeForm = async () => {
//       try {
//         const response = await fetch(`${import.meta.env.VITE_BASE_URL}/assets/json/vitals.json`);
//         const labels = await response.json();

//         setFormState((prev) => ({
//           ...prev,
//           labels,
//           fields: Object.fromEntries(labels.map((label) => [label.label, ""])),
//         }));
//       } catch (error) {
//         console.error("Error initializing form:", error);
//       }

//       addTab({ id: "/vitals", name: "Vitals", path: `/vitals/${id}` });
//     };

//     initializeForm();
//   }, [addTab, id]);

//   const handleChange = (e, label) => {
//     const { value } = e.target;
//     setFormState((prev) => ({
//       ...prev,
//       fields: { ...prev.fields, [label]: value },
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const timestamp = new Date().toLocaleString();

//     setFormState((prev) => ({
//       ...prev,
//       vitalCards: [...prev.vitalCards, { fields: prev.fields, timestamp }],
//       submitted: true,
//       fields: Object.fromEntries(prev.labels.map((label) => [label.label, ""])),
//     }));

//     setTimeout(() => setFormState((prev) => ({ ...prev, submitted: false })), 3000);
//   };

//   const removeVitalCard = (index) => {
//     setFormState((prev) => ({
//       ...prev,
//       vitalCards: prev.vitalCards.filter((_, i) => i !== index),
//     }));
//   };

//   const handleDragStart = (index) => {
//     setDraggedCard(index);
//   };

//   const handleDragOver = (e, index) => {
//     e.preventDefault();
//     setDraggedOverCard(index);
//   };

//   const handleDrop = () => {
//     if (draggedCard === null || draggedOverCard === null) return;
//     const updatedCards = [...formState.vitalCards];
//     const [draggedItem] = updatedCards.splice(draggedCard, 1);
//     updatedCards.splice(draggedOverCard, 0, draggedItem);
//     setFormState((prev) => ({ ...prev, vitalCards: updatedCards }));
//     setDraggedCard(null);
//     setDraggedOverCard(null);
//   };

//   return (
//     <div className="bg-gradient-to-br from-white to-white min-h-screen flex flex-col">
//       <main className="flex-grow container p-4">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
//           <div className="bg-white shadow-lg rounded-lg p-4 col-span-2">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-2xl font-bold text-[#002D62]">Patient Vitals Form</h2>
//               <button
//                 onClick={() => setFormState((prev) => ({ ...prev, isCollapsed: !prev.isCollapsed }))}
//                 className="p-2 hover:bg-gray-100 rounded-full"
//               >
//                 {formState.isCollapsed ? <ChevronDown size={24} /> : <ChevronUp size={24} />}
//               </button>
//             </div>
//             {formState.submitted && (
//               <div className="mb-4 text-green-700 bg-green-100 border px-4 py-3 rounded">
//                 Vitals saved successfully!
//               </div>
//             )}
//             <div className={`transition-all duration-300 ease-in-out ${formState.isCollapsed ? "h-0 overflow-hidden" : "h-auto"}`}>
//               <form onSubmit={handleSubmit}>
//                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
//                   {formState.labels.map((label, index) => (
//                     <div key={index} className="mb-3">
//                       <label className="block text-sm font-semibold text-[#1c4b85] mb-1">{label.label} {label.unit && `(${label.unit})`}:</label>
//                       <input
//                         type={label.type}
//                         placeholder={label.placeholder}
//                         step={label.step}
//                         required={label.required}
//                         className="w-full p-2 border rounded"
//                         value={formState.fields[label.label] || ""}
//                         onChange={(e) => handleChange(e, label.label)}
//                       />
//                     </div>
//                   ))}
//                 </div>
//                 <div className="mt-4 flex justify-end">
//                   <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Submit</button>
//                 </div>
//               </form>
//             </div>
//           </div>
//           <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-4">
//             <h3 className="text-2xl font-bold text-[#002D62] text-center mb-4">Vital Information</h3>
//             <div className="space-y-4">
//               {formState.vitalCards.map((card, index) => (
//                 <div key={index} className="bg-white p-4 rounded shadow relative" draggable onDragStart={() => handleDragStart(index)} onDragOver={(e) => handleDragOver(e, index)} onDrop={handleDrop}>
//                   <button onClick={() => removeVitalCard(index)} className="absolute top-2 right-2 text-red-500 hover:bg-red-50 rounded-full h-6 w-6 flex items-center justify-center">×</button>
//                   <div className="text-sm text-gray-500 mb-2">Recorded: {card.timestamp}</div>
//                             {formState.labels.map((label) => (
//                               <p key={label.label} className="text-sm">
//                                 <strong>{label.label}:</strong> {card.fields[label.label]} {label.unit}
//                               </p>
//                             ))}
//                           </div>
                
//               ))}
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default DoctorVitalsForm;


import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTabs } from "../Context/TabProvider";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

function DoctorVitalsForm() {
  const { id } = useParams();
  const { addTab } = useTabs();
  
  const [formState, setFormState] = useState({
    fields: {},
    extraFields: [],
    submitted: false,
    isCollapsed: false,
    labels: [],
    vitalCards: [],
    expandedCardIndex: null,
  });

  const [draggedCard, setDraggedCard] = useState(null);
  const [draggedOverCard, setDraggedOverCard] = useState(null);

  useEffect(() => {
    const initializeForm = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/assets/json/vitals.json`);
        const labels = await response.json();

        setFormState((prev) => ({
          ...prev,
          labels,
          fields: Object.fromEntries(labels.map((label) => [label.label, ""])),
        }));
      } catch (error) {
        console.error("Error initializing form:", error);
      }

      addTab({ id: "/vitals", name: "Vitals", path: `/vitals/${id}` });
    };

    initializeForm();
  }, [addTab, id]);

  const handleChange = (e, label) => {
    const { value } = e.target;
    setFormState((prev) => ({
      ...prev,
      fields: { ...prev.fields, [label]: value },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const timestamp = new Date().toLocaleString();

    setFormState((prev) => ({
      ...prev,
      vitalCards: [...prev.vitalCards, { fields: prev.fields, timestamp }],
      submitted: true,
      fields: Object.fromEntries(prev.labels.map((label) => [label.label, ""])),
    }));

    setTimeout(() => setFormState((prev) => ({ ...prev, submitted: false })), 3000);
  };

  const removeVitalCard = (index) => {
    setFormState((prev) => ({
      ...prev,
      vitalCards: prev.vitalCards.filter((_, i) => i !== index),
    }));
  };

  const toggleViewMore = (index) => {
    setFormState((prev) => ({
      ...prev,
      expandedCardIndex: prev.expandedCardIndex === index ? null : index,
    }));
  };

  const handleDragStart = (index) => {
    setDraggedCard(index);
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    setDraggedOverCard(index);
  };

  const handleDrop = () => {
    if (draggedCard === null || draggedOverCard === null) return;
    const updatedCards = [...formState.vitalCards];
    const [draggedItem] = updatedCards.splice(draggedCard, 1);
    updatedCards.splice(draggedOverCard, 0, draggedItem);
    setFormState((prev) => ({ ...prev, vitalCards: updatedCards }));
    setDraggedCard(null);
    setDraggedOverCard(null);
  };

  return (
    <div className="bg-gradient-to-br from-white to-white min-h-screen flex flex-col">
      <main className="flex-grow container p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <div className="bg-white shadow-lg rounded-lg p-4 col-span-2">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-[#002D62]">Patient Vitals Form</h2>
              <button
                onClick={() => setFormState((prev) => ({ ...prev, isCollapsed: !prev.isCollapsed }))}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                {formState.isCollapsed ? <ChevronDown size={24} /> : <ChevronUp size={24} />}
              </button>
            </div>
            {formState.submitted && (
              <div className="mb-4 text-green-700 bg-green-100 border px-4 py-3 rounded">
                Vitals saved successfully!
              </div>
            )}
            <div className={`transition-all duration-300 ease-in-out ${formState.isCollapsed ? "h-0 overflow-hidden" : "h-auto"}`}>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {formState.labels.map((label, index) => (
                    <div key={index} className="mb-3">
                      <label className="block text-sm font-semibold text-[#1c4b85] mb-1">{label.label} {label.unit && `(${label.unit})`}:</label>
                      <input
                        type={label.type}
                        placeholder={label.placeholder}
                        step={label.step}
                        required={label.required}
                        className="w-full p-2 border rounded"
                        value={formState.fields[label.label] || ""}
                        onChange={(e) => handleChange(e, label.label)}
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex justify-end">
                  <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Submit</button>
                </div>
              </form>
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-4">
            <h3 className="text-2xl font-bold text-[#002D62] text-center mb-4">Vital Information</h3>
            {formState.vitalCards.length > 0 ? (
            <div className="space-y-4">
  {formState.vitalCards.map((card, index) => (
    <motion.div
      key={index}
      className="bg-teal-50 p-4 rounded shadow relative cursor-pointer"
      draggable
      initial={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        transition: { duration: 0.2 }
      }}
      whileDrag={{
        scale: 1.05,
        opacity: 0.8,
        y: -10,
        boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.3)",
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      animate={{
        opacity: 1,
        transition: { type: "spring", stiffness: 300, damping: 25 },
      }}
      onDragStart={() => handleDragStart(index)}
      onDragOver={(e) => handleDragOver(e, index)}
      onDrop={handleDrop}
    >
      <button
        onClick={() => removeVitalCard(index)}
        className="absolute top-2 right-2 text-red-500 hover:bg-red-50 rounded-full h-6 w-6 flex items-center justify-center"
      >
        ×
      </button>
      <div className="text-sm text-gray-500 mb-2">Recorded: {card.timestamp}</div>
      {formState.labels.slice(0, formState.expandedCardIndex === index ? formState.labels.length : 2).map((label) => (
        <p key={label.label} className="text-sm">
          <strong>{label.label}:</strong> {card.fields[label.label]} {label.unit}
        </p>
      ))}
      <button
        onClick={() => toggleViewMore(index)}
        className="text-blue-500 mt-2 text-sm underline"
      >
        {formState.expandedCardIndex === index ? "View Less" : "View More"}
      </button>
    </motion.div>
  ))}
</div>

) : (
  <div className="flex flex-col items-center justify-center py-8 bg-white shadow-md rounded-lg">
    <p className="text-gray-600 text-lg font-medium">No vitals recorded</p>
    <p className="text-sm text-gray-500">You haven't added any vital information yet.</p>
  </div>
)}




          </div>
        </div>
      </main>
    </div>
  );
}

export default DoctorVitalsForm;


