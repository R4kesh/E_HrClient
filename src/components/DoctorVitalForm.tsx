// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useTabs } from "../Context/TabProvider";

// function DoctorVitalsForm() {
//   const { id } = useParams(); // Get patient ID from the route
//   console.log("id",id);
//   const [submitted, setSubmitted] = useState(false);
//   const [extraFields, setExtraFields] = useState([]);
//   const { addTab } = useTabs();

//   const handleAddField = () => {
//     setExtraFields((prevFields) => [
//       ...prevFields,
//       { id: Date.now(), label: "Comments", value: "" },
//     ]);
//   };

//   const handleExtraFieldChange = (id, value) => {
//     setExtraFields((prevFields) =>
//       prevFields.map((field) =>
//         field.id === id ? { ...field, value } : field
//       )
//     );
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitted(false); // Reset submission state

//     // Collect form data
//     const vitalsData = {
//       weight: parseFloat(document.querySelector('[placeholder="Enter Weight"]').value),
//       previousWeight: parseFloat(document.querySelector('[placeholder="Enter Previous Weight"]').value),
//       weightChange: parseFloat(document.querySelector('[placeholder="Enter Weight Change"]').value),
//       height: parseFloat(document.querySelector('[placeholder="Enter Height"]').value),
//       bmi: parseFloat(document.querySelector('[placeholder="Enter BMI"]').value),
//       pulse: parseInt(document.querySelector('[placeholder="Enter Pulse"]').value),
//       temperature: parseFloat(document.querySelector('[placeholder="Enter Temperature"]').value),
//       respirationRate: parseInt(document.querySelector('[placeholder="Enter Respiration Rate"]').value),
//       oxygenSaturation: parseFloat(document.querySelector('[placeholder="Enter Oxygen Saturation"]').value),
//       oxygenSupplement: document.querySelector('[placeholder="Enter Oxygen Supplement Details"]').value,
//       systolicBP: parseInt(document.querySelector('[placeholder="Enter Systolic BP"]').value),
//       diastolicBP: parseInt(document.querySelector('[placeholder="Enter Diastolic BP"]').value),
//       bpLocation: document.querySelector('select').value,
//       additionalFields: extraFields.map((field) => ({
//         // label: field.label,
//         value: field.value,
//       })),
//     };

//     try {
//       // Make POST request using axios
//       const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/patient/vitals/${id}`, vitalsData);

//       // Check response status
//       if (response.status === 201 || response.status === 200) {
//         console.log("Vitals saved successfully:", response.data);
//         setSubmitted(true);
//       } else {
//         console.error("Error saving vitals:", response.statusText);
//       }
//     } catch (error) {
//       console.error(
//         "Error submitting vitals:",
//         error.response?.data || error.message
//       );
//     }
//   };
//   useEffect(() => {
//     addTab({ id: "/vitals", name: "Vitals", path: `/vitals/${id}` });
//   }, [addTab]);

//   return (
//     <div className="bg-gradient-to-br from-black  to-white min-h-screen flex  flex-col">

//       {/* Main Content */}
//       <main className="flex-grow container  p-6 sm:p-1 md:p-1 ">
//         <div className="bg-white shadow-lg rounded-lg p-6 sm:p-1">
//           <h2 className="text-2xl sm:text-3xl font-semibold text-blue-800 text-center mb-6">
//             Patient Vitals Form
//           </h2>
//           {submitted && (
//             <div
//               className="mb-6 text-green-700 bg-green-100 border border-green-300 px-4 py-3 rounded"
//               role="alert"
//             >
//               Patient vitals saved successfully!
//             </div>
//           )}
//           <form onSubmit={handleSubmit} className="space-y-6">

//             {/* Section: Vitals */}
//             <section>

//               <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 space-x-4 gap-4">
//                 <div>
//                   <label className="block text-gray-600">Weight (kg)</label>
//                   <input
//                     type="number"
//                     step="0.1"
//                     className="mt-1 w-64 border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-teal-500"
//                     placeholder="Enter Weight"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-600">Previous Weight (kg)</label>
//                   <input
//                     type="number"
//                     step="0.1"
//                     className="mt-1 w-64 border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-teal-500"
//                     placeholder="Enter Previous Weight"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-600">Weight Change (kg)</label>
//                   <input
//                     type="number"
//                     step="0.1"
//                     className="mt-1 w-64 border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-teal-500"
//                     placeholder="Enter Weight Change"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-600">Height (cm)</label>
//                   <input
//                     type="number"
//                     step="0.1"
//                     className="mt-1 w-64 border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-teal-500"
//                     placeholder="Enter Height"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-600">BMI</label>
//                   <input
//                     type="number"
//                     step="0.1"
//                     className="mt-1 w-64 border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-teal-500"
//                     placeholder="Enter BMI"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-600">Pulse (bpm)</label>
//                   <input
//                     type="number"
//                     className="mt-1 w-64 border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-teal-500"
//                     placeholder="Enter Pulse"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-600">Temperature (°C)</label>
//                   <input
//                     type="number"
//                     step="0.1"
//                     className="mt-1 w-64 border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-teal-500"
//                     placeholder="Enter Temperature"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-600">Respiration (breaths/min)</label>
//                   <input
//                     type="number"
//                     className="mt-1 w-64 border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-teal-500"
//                     placeholder="Enter Respiration Rate"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-600">Oxygen Saturation (%)</label>
//                   <input
//                     type="number"
//                     step="0.1"
//                     className="mt-1 w-64 border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-teal-500"
//                     placeholder="Enter Oxygen Saturation"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-600">Oxygen Supplement</label>
//                   <input
//                     type="text"
//                     className="mt-1 w-64 border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-teal-500"
//                     placeholder="Enter Oxygen Supplement Details"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-600">Systolic BP</label>
//                   <input
//                     type="number"
//                     className="mt-1 w-64 border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-teal-500"
//                     placeholder="Enter Systolic BP"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-600">Diastolic BP</label>
//                   <input
//                     type="number"
//                     className="mt-1 w-64 border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-teal-500"
//                     placeholder="Enter Diastolic BP"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-600">Location (Arm Left/Right)</label>
//                   <select
//                     className="mt-1 w-64 border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-teal-500"
//                     required
//                   >
//                     <option value="">Select Location</option>
//                     <option value="Left Arm">Left Arm</option>
//                     <option value="Right Arm">Right Arm</option>
//                   </select>
//                 </div>
//               </div>
//             </section>

//             {/* Additional Fields */}
//             {extraFields.map((field) => (
//               <div key={field.id} className="mt-4">
//                 <label className="block text-gray-600">{field.label}</label>
//                 <input
//                   type="text"
//                   value={field.value}
//                   onChange={(e) => handleExtraFieldChange(field.id, e.target.value)}
//                   className="mt-1 w-64 border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-teal-500"
//                   placeholder="Enter Value"
//                 />
//               </div>
//             ))}

//             {/* Add More Button */}
//             <div className="text-center">
//               <button
//                 type="button"
//                 onClick={handleAddField}
//                 className="bg-gray-200 text-teal-600 font-medium py-2 px-4 rounded-md shadow-md hover:bg-gray-300"
//               >
//                 Add More Field
//               </button>
//             </div>

//             {/* Submit Button */}
//             <div className="text-center mt-6">
//               <button
//                 type="submit"
//                 className="bg-teal-600 text-white font-medium py-3 px-6 rounded-md shadow-lg hover:bg-teal-700 transition-transform transform hover:scale-105"
//               >
//                 Save Vitals
//               </button>
//             </div>
//           </form>
//         </div>
//       </main>

//     </div>
//   );
// }

// export default DoctorVitalsForm;

///////////////////////////////////////////////////////////////
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useTabs } from "../Context/TabProvider";
// import styled from 'styled-components';

// function DoctorVitalsForm() {
//   const { id } = useParams(); // Get patient ID from the route
//   const [submitted, setSubmitted] = useState(false);
//   const [extraFields, setExtraFields] = useState([]);
//   const [expanded, setExpanded] = useState(false);
//   const { addTab } = useTabs();

//   const handleAddField = () => {
//     setExtraFields((prevFields) => [
//       ...prevFields,
//       { id: Date.now(), label: "Comments", value: "" },
//     ]);
//   };

//   const handleExtraFieldChange = (id, value) => {
//     setExtraFields((prevFields) =>
//       prevFields.map((field) =>
//         field.id === id ? { ...field, value } : field
//       )
//     );
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitted(false); // Reset submission state

//     const vitalsData = {
//       weight: parseFloat(document.querySelector('[placeholder="Enter Weight"]').value),
//       previousWeight: parseFloat(
//         document.querySelector('[placeholder="Enter Previous Weight"]').value
//       ),
//       weightChange: parseFloat(
//         document.querySelector('[placeholder="Enter Weight Change"]').value
//       ),
//       height: parseFloat(document.querySelector('[placeholder="Enter Height"]').value),
//       bmi: parseFloat(document.querySelector('[placeholder="Enter BMI"]').value),
//       pulse: parseInt(document.querySelector('[placeholder="Enter Pulse"]').value),
//       temperature: parseFloat(
//         document.querySelector('[placeholder="Enter Temperature"]').value
//       ),
//       respirationRate: parseInt(
//         document.querySelector('[placeholder="Enter Respiration Rate"]').value
//       ),
//       oxygenSaturation: parseFloat(
//         document.querySelector('[placeholder="Enter Oxygen Saturation"]').value
//       ),
//       oxygenSupplement: document.querySelector(
//         '[placeholder="Enter Oxygen Supplement Details"]'
//       ).value,
//       systolicBP: parseInt(document.querySelector('[placeholder="Enter Systolic BP"]').value),
//       diastolicBP: parseInt(document.querySelector('[placeholder="Enter Diastolic BP"]').value),
//       bpLocation: document.querySelector("select").value,
//       additionalFields: extraFields.map((field) => ({
//         value: field.value,
//       })),
//     };

//     try {
//       const response = await axios.post(
//         `${import.meta.env.VITE_BASE_URL}/api/patient/vitals/${id}`,
//         vitalsData
//       );

//       if (response.status === 201 || response.status === 200) {
//         console.log("Vitals saved successfully:", response.data);
//         setSubmitted(true);
//       } else {
//         console.error("Error saving vitals:", response.statusText);
//       }
//     } catch (error) {
//       console.error(
//         "Error submitting vitals:",
//         error.response?.data || error.message
//       );
//     }
//   };

//   useEffect(() => {
//     addTab({ id: "/vitals", name: "Vitals", path: `/vitals/${id}` });
//   }, [addTab]);

//   const toggleExpand = () => {
//     setExpanded((prev) => !prev);
//   };

//   return (
//     <div className="bg-gradient-to-br from-black  to-white min-h-screen flex flex-col">
//       <main className="flex-grow container p-4 sm:p-1 md:p-1">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
//           <div className="bg-white shadow-lg rounded-lg p-4 sm:p-3 col-span-2">
//             <h2 className="text-xl sm:text-2xl font-semibold text-blue-800 text-center mb-4">
//               Patient Vitals Form
//             </h2>
//             {submitted && (
//               <div
//                 className="mb-4 text-green-700 bg-green-100 border border-green-300 px-4 py-3 rounded"
//                 role="alert"
//               >
//                 Patient vitals saved successfully!
//               </div>
//             )}
//             <form onSubmit={handleSubmit}>
//               <div
//                 className={`items-center transition-all duration-500 overflow-hidden ${
//                   expanded ? "max-h-full" : "max-h-32"
//                 }`}
//               >
//                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center">
//                   <div>
//                     <label className="block text-sm text-gray-600">Weight (kg)</label>
//                     <input
//                       type="number"
//                       step="0.1"
//                       className="w-full border rounded px-2 py-1"
//                       placeholder="Enter Weight"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm text-gray-600">Previous Weight (kg)</label>
//                     <input
//                       type="number"
//                       step="0.1"
//                       className="w-full border rounded px-2 py-1"
//                       placeholder="Enter Previous Weight"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm text-gray-600">Weight Change (kg)</label>
//                     <input
//                       type="number"
//                       step="0.1"
//                       className="w-full border rounded px-2 py-1"
//                       placeholder="Enter Weight Change"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm text-gray-600">Height (cm)</label>
//                     <input
//                       type="number"
//                       step="0.1"
//                       className="w-full border rounded px-2 py-1"
//                       placeholder="Enter Height"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm text-gray-600">BMI</label>
//                     <input
//                       type="number"
//                       step="0.1"
//                       className="w-full border rounded px-2 py-1"
//                       placeholder="Enter BMI"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm text-gray-600">Pulse (bpm)</label>
//                     <input
//                       type="number"
//                       className="w-full border rounded px-2 py-1"
//                       placeholder="Enter Pulse"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm text-gray-600">Temperature (°C)</label>
//                     <input
//                       type="number"
//                       step="0.1"
//                       className="w-full border rounded px-2 py-1"
//                       placeholder="Enter Temperature"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm text-gray-600">Respiration (breaths/min)</label>
//                     <input
//                       type="number"
//                       className="w-full border rounded px-2 py-1"
//                       placeholder="Enter Respiration Rate"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm text-gray-600">Oxygen Saturation (%)</label>
//                     <input
//                       type="number"
//                       step="0.1"
//                       className="w-full border rounded px-2 py-1"
//                       placeholder="Enter Oxygen Saturation"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm text-gray-600">Oxygen Supplement</label>
//                     <input
//                       type="text"
//                       className="w-full border rounded px-2 py-1"
//                       placeholder="Enter Oxygen Supplement Details"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm text-gray-600">Systolic BP</label>
//                     <input
//                       type="number"
//                       className="w-full border rounded px-2 py-1"
//                       placeholder="Enter Systolic BP"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm text-gray-600">Diastolic BP</label>
//                     <input
//                       type="number"
//                       className="w-full border rounded px-2 py-1"
//                       placeholder="Enter Diastolic BP"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm text-gray-600">BP Measurement Location</label>
//                     <select
//                       className="w-full border rounded px-2 py-1"
//                     >
//                       <option value="Right Arm">Right Arm</option>
//                       <option value="Left Arm">Left Arm</option>
//                       <option value="Right Leg">Right Leg</option>
//                       <option value="Left Leg">Left Leg</option>
//                     </select>
//                   </div>
//                   {extraFields.map((field) => (
//                     <div key={field.id}>
//                       <label className="block text-sm text-gray-600">{field.label}</label>
//                       <input
//                         type="text"
//                         value={field.value}
//                         onChange={(e) => handleExtraFieldChange(field.id, e.target.value)}
//                         className="w-full border rounded px-2 py-1"
//                       />
//                     </div>
//                   ))}

//                   <button
//                   type="button"
//                   onClick={handleAddField}
//                   className="bg-blue-500 hover:bg-blue-600 text-white h-8 mt-4  w-28 py-1  px-3 rounded"
//                 >
//                   Add Field
//                 </button>

//                 </div>
//                 <div className="text-center">

//               {/* <StyledWrapper> */}
//       <button>
//       Submit
//       </button>
//     {/* </StyledWrapper> */}
//               </div>
//               </div>
//           <div className="mt-3">

//             <ViewMore>
//   <button className="cta " onClick={toggleExpand}>
//     <span className="hover-underline-animation "> {expanded ? "View Less" : "View More"}</span>

//   </button>
// </ViewMore>

//           </div>

//             </form>
//           </div>

//           <div className="bg-gray-100 p-4 rounded-lg shadow-md">
//             <h3 className="text-lg font-semibold mb-3">Additional Information</h3>
//             <div className="grid grid-cols-1 gap-3">
//               <div className="bg-white p-4 rounded shadow">Card 1 Content</div>
//               <div className="bg-white p-4 rounded shadow">Card 2 Content</div>
//               <div className="bg-white p-4 rounded shadow">Card 3 Content</div>
//             </div>
//           </div>
//         </div>

//         <div className="mt-4 bg-gray-100 p-4 rounded-lg shadow-md">
//           <h3 className="text-lg font-semibold mb-3">Additional Card Section</h3>
//           <div className="bg-white p-4 rounded shadow">Card 4 Content</div>
//         </div>
//       </main>
//     </div>
//   );
// }

// const ViewMore = styled.div`
//   .cta {
//     border: none;
//     background: none;
//     cursor: pointer;

//   }

//   .cta span {
//     padding-bottom: 7px;
//     letter-spacing: 4px;
//     font-size: 14px;
//     padding-right: 15px;
//     color: #3a84f2;
//   }

//   .cta svg {
//     transform: translateX(-8px);
//     transition: all 0.3s ease;
//   }

//   .cta:hover svg {
//     transform: translateX(0);
//   }

//   .cta:active svg {
//     transform: scale(0.9);
//   }

//   .hover-underline-animation {
//     position: relative;
//     color:red;
//     padding-bottom: 60px;

//   }

//   .hover-underline-animation:after {
//     content: "";
//     position: absolute;
//     width: 85%;
//     transform: scaleX(0);
//     height: 2px;
//     bottom: 0;
//     left: 0;
//     background-color: #3a84f2;
//     transform-origin: bottom right;
//     transition: transform 0.25s ease-out;

//   }

//   .cta:hover .hover-underline-animation:after {
//     transform: scaleX(1);
//     transform-origin: bottom left;
//   }`;

// export default DoctorVitalsForm;

////////////////////////////////////////////////

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useTabs } from "../Context/TabProvider";
// import styled from 'styled-components';
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import Card from "../components/card/Card";
// import ROSSection from "./ReviewSystem";
// import PatientList from "./PatientList";
// import CardPreview from "./card/CardPreview";

// function DoctorVitalsForm() {
//   const { id } = useParams(); // Get patient ID from the route
//   const [submitted, setSubmitted] = useState(false);
//   const [extraFields, setExtraFields] = useState([]);
//   const [expanded, setExpanded] = useState(false);
//   const { addTab } = useTabs();

//   const handleAddField = () => {
//     setExtraFields((prevFields) => [
//       ...prevFields,
//       { id: Date.now(), label: "Comments", value: "" },
//     ]);
//   };

//   const handleExtraFieldChange = (id, value) => {
//     setExtraFields((prevFields) =>
//       prevFields.map((field) =>
//         field.id === id ? { ...field, value } : field
//       )
//     );
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitted(false); // Reset submission state

//     const vitalsData = {
//       weight: parseFloat(document.querySelector('[placeholder="Enter Weight"]').value),
//       previousWeight: parseFloat(
//         document.querySelector('[placeholder="Enter Previous Weight"]').value
//       ),
//       weightChange: parseFloat(
//         document.querySelector('[placeholder="Enter Weight Change"]').value
//       ),
//       height: parseFloat(document.querySelector('[placeholder="Enter Height"]').value),
//       bmi: parseFloat(document.querySelector('[placeholder="Enter BMI"]').value),
//       pulse: parseInt(document.querySelector('[placeholder="Enter Pulse"]').value),
//       temperature: parseFloat(
//         document.querySelector('[placeholder="Enter Temperature"]').value
//       ),
//       respirationRate: parseInt(
//         document.querySelector('[placeholder="Enter Respiration Rate"]').value
//       ),
//       oxygenSaturation: parseFloat(
//         document.querySelector('[placeholder="Enter Oxygen Saturation"]').value
//       ),
//       oxygenSupplement: document.querySelector(
//         '[placeholder="Enter Oxygen Supplement Details"]'
//       ).value,
//       systolicBP: parseInt(document.querySelector('[placeholder="Enter Systolic BP"]').value),
//       diastolicBP: parseInt(document.querySelector('[placeholder="Enter Diastolic BP"]').value),
//       bpLocation: document.querySelector("select").value,
//       additionalFields: extraFields.map((field) => ({
//         value: field.value,
//       })),
//     };

//     try {
//       const response = await axios.post(
//         `${import.meta.env.VITE_BASE_URL}/api/patient/vitals/${id}`,
//         vitalsData
//       );

//       if (response.status === 201 || response.status === 200) {
//         console.log("Vitals saved successfully:", response.data);
//         setSubmitted(true);
//       } else {
//         console.error("Error saving vitals:", response.statusText);
//       }
//     } catch (error) {
//       console.error(
//         "Error submitting vitals:",
//         error.response?.data || error.message
//       );
//     }
//   };

//   useEffect(() => {
//     addTab({ id: "/vitals", name: "Vitals", path: `/vitals/${id}` });
//   }, [addTab]);

//   const toggleExpand = () => {
//     setExpanded((prev) => !prev);
//   };

//   const [cards, setCards] = useState([
//     { id: "1", title: "Card 1", content: "Card 1 Content" },
//     { id: "2", title: "Card 2", content: "Card 2 Content" },
//     { id: "3", title: "Card 3", content: "Card 3 Content" },
//   ]);

//   const handleOnDragEnd = (result) => {
//     if (!result.destination) return;

//     const items = Array.from(cards);
//     const [reorderedItem] = items.splice(result.source.index, 1);
//     items.splice(result.destination.index, 0, reorderedItem);

//     setCards(items);
//   };

//   return (
//     <div className="bg-gradient-to-br  from-white  to-white min-h-screen flex flex-col">
//       <main className="flex-grow container p-4 sm:p-1 md:p-1 ">

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
//           <div className="bg-white shadow-lg rounded-lg p-4 h-auto sm:p-3 col-span-2 hover:shadow-2xl transition-all duration-500 transform hover:scale-100 border-2 border-transparent hover:border-gray-700 hover:rounded-xl">
//             <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
//               Patient Vitals Form
//             </h2>
//             {submitted && (
//               <div
//                 className="mb-4 text-green-700 bg-green-100 border border-green-300 px-4 py-3 rounded"
//                 role="alert"
//               >
//                 Patient vitals saved successfully!
//               </div>
//             )}
//             <form onSubmit={handleSubmit}>
//               <div className={`items-center transition-all duration-500 overflow-hidden ${expanded ? "max-h-full" : "max-h-64"}`}>
//                 <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-3 items-center">
//                   {["Weight", "Previous Weight", "Weight Change", "Height", "BMI", "Pulse", "Temperature", "Respiration Rate", "Oxygen Saturation", "Oxygen Supplement", "Systolic BP", "Diastolic BP"].map((label, idx) => (
//                     <div key={idx}>
//                       <label className="block text-sm text-gray-600">{label} (kg)</label>
//                       <input
//                         type="number"
//                         step="0.1"
//                         className="w-full border rounded px-2 py-1 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-300"
//                         placeholder={`Enter ${label}`}
//                         required
//                       />
//                     </div>
//                   ))}

//                   <div>
//                     <label className="block text-sm text-gray-600">BP Measurement Location</label>
//                     <select
//                       className="w-full border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-300"
//                     >
//                       <option value="Right Arm">Right Arm</option>
//                       <option value="Left Arm">Left Arm</option>
//                       <option value="Right Leg">Right Leg</option>
//                       <option value="Left Leg">Left Leg</option>
//                     </select>
//                   </div>

//                   {extraFields.map((field) => (
//                     <div key={field.id}>
//                       <label className="block text-sm text-gray-600">{field.label}</label>
//                       <input
//                         type="text"
//                         value={field.value}
//                         onChange={(e) => handleExtraFieldChange(field.id, e.target.value)}
//                         className="w-full border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-300"
//                       />
//                     </div>
//                   ))}

//                   <button
//                     type="button"
//                     onClick={handleAddField}
//                     className="bg-blue-500 hover:bg-blue-600 text-white h-8 mt-4 w-28 py-1 px-3 rounded"
//                   >
//                     Add Field
//                   </button>
//                 </div>
//                 <div className="text-center mt-4 ">
//                   <SubmitWrapper>
//                   <button  type="submit">
//         <span className="shadow" />
//         <span className="edge" />
//         <span className="front text"> Submit
//         </span>
//       </button>
//     </SubmitWrapper>
//                 </div>
//               </div>

//               <div className="mt-1">

//                 <ViewMore>
//       <button className="cta " onClick={toggleExpand}>
//         <span className="hover-underline-animation "> {expanded ? "View Less" : "View More"}</span>

//       </button>
//     </ViewMore>

//               </div>
//             </form>
//           </div>

//           <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-auto p-8">
//       <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
//         Additional Information
//       </h3>
//       <div className="flex flex-col gap-6 items-center">
//         <CardPreview title="ROS Section">
//           <ROSSection />
//         </CardPreview>
//         <CardPreview title="Patient List">
//           <PatientList/>
//         </CardPreview>

//       </div>
//     </div>

//         </div>

//         <div className="mt-4 h-64 bg-gray-100 p-4 rounded-lg shadow-md">
//           <h3 className="text-lg font-semibold mb-3">Additional Card Section</h3>
//          <div className="bg-white p-4 rounded shadow">Card 4 Content</div>
//        </div>
//       </main>
//     </div>
//   );
// }

// const ViewMore = styled.div`
//   .cta {
//     border: none;
//     background: none;
//     cursor: pointer;

//   }

//   .cta span {
//     padding-bottom: 7px;
//     letter-spacing: 4px;
//     font-size: 14px;
//     padding-right: 15px;
//     color: #3a84f2;
//   }

//   .cta svg {
//     transform: translateX(-8px);
//     transition: all 0.3s ease;
//   }

//   .cta:hover svg {
//     transform: translateX(0);
//   }

//   .cta:active svg {
//     transform: scale(0.9);
//   }

//   .hover-underline-animation {
//     position: relative;
//     color:red;
//     padding-bottom: 60px;

//   }

//   .hover-underline-animation:after {
//     content: "";
//     position: absolute;
//     width: 85%;
//     transform: scaleX(0);
//     height: 2px;
//     bottom: 0;
//     left: 0;
//     background-color: #3a84f2;
//     transform-origin: bottom right;
//     transition: transform 0.25s ease-out;

//   }

//   .cta:hover .hover-underline-animation:after {
//     transform: scaleX(1);
//     transform-origin: bottom left;
//   }`;

// const SubmitWrapper = styled.div`
// button {
//   position: relative;
//   border: none;
//   background: transparent;
//   padding: 0;
//   cursor: pointer;
//   outline-offset: 4px;
//   transition: filter 250ms;
//   user-select: none;
//   touch-action: manipulation;
//  }

//  .shadow {
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   border-radius: 12px;
//   background: hsl(0deg 0% 0% / 0.25);
//   will-change: transform;
//   transform: translateY(2px);
//   transition: transform
//      600ms
//      cubic-bezier(.3, .7, .4, 1);
//  }

//  .edge {
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   border-radius: 12px;
//   bbackground: linear-gradient(
//     to left,
//     hsl(120deg 50% 10%) 0%,
//     hsl(120deg 50% 20%) 8%,
//     hsl(120deg 50% 20%) 92%,
//     hsl(120deg 50% 10%) 100%
//   );

//  }

//  .front {
//   display: block;
//   position: relative;
//   padding: 6px 24px;
//   border-radius: 12px;
//   font-size: 1.1rem;
//   color: white;
//   background: #25ba39;
//   will-change: transform;
//   transform: translateY(-4px);
//   transition: transform
//      600ms
//      cubic-bezier(.3, .7, .4, 1);
//  }

//  button:hover {
//   filter: brightness(110%);
//  }

//  button:hover .front {
//   transform: translateY(-6px);
//   transition: transform
//      250ms
//      cubic-bezier(.3, .7, .4, 1.5);
//  }

//  button:active .front {
//   transform: translateY(-2px);
//   transition: transform 34ms;
//  }

//  button:hover .shadow {
//   transform: translateY(4px);
//   transition: transform
//      250ms
//      cubic-bezier(.3, .7, .4, 1.5);
//  }

//  button:active .shadow {
//   transform: translateY(1px);
//   transition: transform 34ms;
//  }

//  button:focus:not(:focus-visible) {
//   outline: none;
//  }`;

// export default DoctorVitalsForm;




import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTabs } from "../Context/TabProvider";
import styled from "styled-components";
import CardPreview from "./card/CardPreview";
import ROSSection from "./ReviewSystem";
import PatientList from "./PatientList";

function DoctorVitalsForm() {
  const { id } = useParams(); // Get patient ID from the route
  const [submitted, setSubmitted] = useState(false);
  const [labels, setLabels] = useState([]); // To store labels from JSON
  const [extraFields, setExtraFields] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const { addTab } = useTabs();

  const handleAddField = () => {
    setExtraFields((prevFields) => [
      ...prevFields,
      { id: Date.now(), label: "Comments", value: "" },
    ]);
  };

  const handleExtraFieldChange = (id, value) => {
    setExtraFields((prevFields) =>
      prevFields.map((field) =>
        field.id === id ? { ...field, value } : field
      )
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(false); // Reset submission state

    const vitalsData = {
      additionalFields: extraFields.map((field) => ({
        value: field.value,
      })),
    };

    // Add dynamic data collection for fetched labels
    labels.forEach((label) => {
      vitalsData[label.key] = document.querySelector(
        `[name="${label.key}"]`
      ).value;
    });

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/patient/vitals/${id}`,
        vitalsData
      );

      if (response.status === 201 || response.status === 200) {
        console.log("Vitals saved successfully:", response.data);
        setSubmitted(true);
      } else {
        console.error("Error saving vitals:", response.statusText);
      }
    } catch (error) {
      console.error(
        "Error submitting vitals:",
        error.response?.data || error.message
      );
    }
  };

  useEffect(() => {
    // Fetch labels from JSON
    const fetchLabels = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/assets/json/vitals.json`
        );
        setLabels(response.data); // Assuming the JSON structure is an array of label objects
      } catch (error) {
        console.error("Error fetching labels:", error.message);
      }
    };

    fetchLabels();
    addTab({ id: "/vitals", name: "Vitals", path: `/vitals/${id}` });
  }, [addTab]);

  const toggleExpand = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div className="bg-gradient-to-br from-white to-white min-h-screen flex flex-col">
      <main className="flex-grow container p-4 sm:p-1 md:p-1">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <div className="bg-white shadow-lg rounded-lg p-4 h-auto sm:p-3 col-span-2 hover:shadow-2xl transition-all duration-500 transform hover:scale-100 border-2 border-transparent hover:border-gray-700 hover:rounded-xl">
            <h2 className="text-2xl font-bold text-[#002D62] text-center mb-4">
              Patient Vitals Form
            </h2>
            {submitted && (
              <div
                className="mb-4 text-green-700 bg-green-100 border border-green-300 px-4 py-3 rounded"
                role="alert"
              >
                Patient vitals saved successfully!
              </div>
            )}
           <form onSubmit={handleSubmit}>
  <div
    className={`items-center transition-all duration-500 overflow-hidden ${
      expanded ? "max-h-full" : "max-h-64"
    }`}
  >
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-3 items-center">
      {labels.map((label) => (
        <div key={label.key}>
          <label className="block text-sm text-gray-600">
            {label.label} {label.unit && `(${label.unit})`}
          </label>
          {label.type === "select" ? (
            <select
              name={label.key}
              className="w-full border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-300"
              required={label.required}
            >
              {label.options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={label.type || "text"}
              step={label.step || "any"}
              name={label.key}
              className="w-full border rounded px-2 py-1 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-300"
              placeholder={` ${label.placeholder}`}
              required={label.required}
            />
          )}
        </div>
      ))}

      {extraFields.map((field) => (
        <div key={field.id}>
          <label className="block text-sm text-gray-600">
            {field.label}
          </label>
          <input
            type="text"
            value={field.value}
            onChange={(e) =>
              handleExtraFieldChange(field.id, e.target.value)
            }
            className="w-full border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-300"
          />
        </div>
      ))}

      <button
        type="button"
        onClick={handleAddField}
        className="bg-blue-500 hover:bg-blue-600 text-white h-8 mt-4 w-28 py-1 px-3 rounded"
      >
        Add Field
      </button>
    </div>
    <div className="text-center mt-4">
      <SubmitWrapper>
        <button type="submit">
          <span className="shadow" />
          <span className="edge" />
          <span className="front text">Submit</span>
        </button>
      </SubmitWrapper>
    </div>
  </div>
  <div className="mt-1">
    <ViewMore>
      <button className="cta" onClick={toggleExpand}>
        <span className="hover-underline-animation">
          {expanded ? "View Less" : "View More"}
        </span>
      </button>
    </ViewMore>
  </div>
</form>

          </div>
                     <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-auto p-8">
       <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
         Additional Information
       </h3>
       <div className="flex flex-col gap-6 items-center">
         <CardPreview title="ROS Section">
          <ROSSection />
        </CardPreview>
         <CardPreview title="Patient List">
           <PatientList/>
         </CardPreview>

      </div>
     </div>

         </div>

         <div className="mt-4 h-64 bg-gray-100 p-4 rounded-lg shadow-md">           <h3 className="text-lg font-semibold mb-3">Additional Card Section</h3>
         <div className="bg-white p-4 rounded shadow">Card 4 Content</div>
       </div>
      </main>
    </div>
  );
}

const ViewMore = styled.div`
  .cta {
    border: none;
    background: none;
    cursor: pointer;

  }

  .cta span {
    padding-bottom: 7px;
    letter-spacing: 4px;
    font-size: 14px;
    padding-right: 15px;
    color: #3a84f2;
  }

  .cta svg {
    transform: translateX(-8px);
    transition: all 0.3s ease;
  }

  .cta:hover svg {
    transform: translateX(0);
  }

  .cta:active svg {
    transform: scale(0.9);
  }

  .hover-underline-animation {
    position: relative;
    color:red;
    padding-bottom: 60px;

  }

  .hover-underline-animation:after {
    content: "";
    position: absolute;
    width: 85%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #3a84f2;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;

  }

  .cta:hover .hover-underline-animation:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }`;

const SubmitWrapper = styled.div`
button {
  position: relative;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  outline-offset: 4px;
  transition: filter 250ms;
  user-select: none;
  touch-action: manipulation;
 }

 .shadow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: hsl(0deg 0% 0% / 0.25);
  will-change: transform;
  transform: translateY(2px);
  transition: transform
     600ms
     cubic-bezier(.3, .7, .4, 1);
 }

 .edge {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  bbackground: linear-gradient(
    to left,
    hsl(120deg 50% 10%) 0%,
    hsl(120deg 50% 20%) 8%,
    hsl(120deg 50% 20%) 92%,
    hsl(120deg 50% 10%) 100%
  );

 }

 .front {
  display: block;
  position: relative;
  padding: 6px 24px;
  border-radius: 12px;
  font-size: 1.1rem;
  color: white;
  background: #25ba39;
  will-change: transform;
  transform: translateY(-4px);
  transition: transform
     600ms
     cubic-bezier(.3, .7, .4, 1);
 }

 button:hover {
  filter: brightness(110%);
 }

 button:hover .front {
  transform: translateY(-6px);
  transition: transform
     250ms
     cubic-bezier(.3, .7, .4, 1.5);
 }

 button:active .front {
  transform: translateY(-2px);
  transition: transform 34ms;
 }

 button:hover .shadow {
  transform: translateY(4px);
  transition: transform
     250ms
     cubic-bezier(.3, .7, .4, 1.5);
 }

 button:active .shadow {
  transform: translateY(1px);
  transition: transform 34ms;
 }

 button:focus:not(:focus-visible) {
  outline: none;
 }`;


export default DoctorVitalsForm;
