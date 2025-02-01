// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { useTabs } from '../Context/TabProvider';

// const ROSSection = () => {
//   const { id } = useParams(); // Get patient ID from the route
//   console.log("id", id);
//   const { addTab } = useTabs();
    
//   const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({}); // To store selected answers for each condition
//   const [customCondition, setCustomCondition] = useState(''); // State for the custom condition input
//   const [conditions, setConditions] = useState([
//     { question: 'General', options: ['Weight changes', 'Fever', 'Fatigue'] },
//     { question: 'Skin', options: ['Rashes', 'Lesions', 'Changes in pigmentation'] },
//     { question: 'Head, Eyes, Ears, Nose, Throat (HEENT)', options: ['Headaches', 'Vision changes', 'Hearing loss', 'Sinus issues', 'Throat pain'] },
//     { question: 'Cardiovascular', options: ['Chest pain', 'Palpitations', 'Edema'] },
//     { question: 'Respiratory', options: ['Shortness of breath', 'Cough', 'Wheezing'] },
//     { question: 'Gastrointestinal', options: ['Nausea', 'Vomiting', 'Abdominal pain'] },
//     { question: 'Genitourinary', options: ['Urinary frequency', 'Incontinence', 'Pain'] },
//     { question: 'Musculoskeletal', options: ['Joint pain', 'Stiffness', 'Weakness'] },
//     { question: 'Neurological', options: ['Dizziness', 'Seizures', 'Memory issues'] },
//     { question: 'Endocrine', options: ['Excessive thirst', 'Heat intolerance'] },
//     { question: 'Hematologic/Lymphatic', options: ['Easy bruising', 'Swollen lymph nodes'] },
//     { question: 'Psychiatric', options: ['Anxiety', 'Depression', 'Mood swings'] },
//   ]);

//   const options = ['None', 'Mild', 'Moderate', 'Severe']; // Answer options for each condition

//   const handleAnswerChange = (question: string, answer: string) => {
//     setSelectedAnswers((prev) => ({
//       ...prev,
//       [question]: answer, // Set the selected answer for the given question
//     }));
//   };

//   const handleAddCondition = () => {
//     if (customCondition.trim() && !conditions.some(c => c.question === customCondition.trim())) {
//       setConditions((prevConditions) => [...prevConditions, { question: customCondition.trim(), options: [] }]);
//       setCustomCondition(''); // Clear the input after adding
//     }
//   };

//   useEffect(() => {
//     addTab({ id: "/reviewsystem", name: "ROS", path: `/reviewsystem/${id}` });
//   }, [addTab]);

//   return (
//     <div className="space-y-6 p-6 bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-bold text-gray-800 mb-4">Review of Systems</h2>
      
//       {/* Grid container for the conditions */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {conditions.map((condition, index) => (
//           <div key={index} className="space-y-3">
//             <div className="flex items-center">
//               <label htmlFor={`condition-${index}`} className="text-lg text-gray-700">{condition.question}</label>
//             </div>

//             {/* Answer Selection */}
//             <select
//               id={`condition-${index}`}
//               value={selectedAnswers[condition.question] || ''}
//               onChange={(e) => handleAnswerChange(condition.question, e.target.value)}
//               className="w-full px-4 py-2 border rounded-md focus:ring-teal-500 focus:border-teal-500"
//             >
//               <option value="">Select answer</option>
//               {condition.options.map((option) => (
//                 <option key={option} value={option}>{option}</option>
//               ))}
//             </select>
//           </div>
//         ))}
//       </div>

//       {/* Add Custom Condition */}
//       <div className="mt-6">
//         <h3 className="text-lg font-semibold text-gray-800 mb-2">Add Custom Condition</h3>
//         <div className="flex items-center space-x-3">
//           <input
//             type="text"
//             value={customCondition}
//             onChange={(e) => setCustomCondition(e.target.value)}
//             placeholder="Enter a custom condition"
//             className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
//           />
//           <button
//             onClick={handleAddCondition}
//             className="px-4 py-2 bg-teal-600 text-white rounded-md shadow-md hover:bg-teal-700 focus:ring-2 focus:ring-teal-500 focus:outline-none transform transition-all hover:scale-105"
//           >
//             Add
//           </button>
//         </div>
//         {customCondition && !customCondition.trim() && (
//           <p className="text-sm text-red-500 mt-1">Please enter a valid condition.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ROSSection;


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTabs } from '../Context/TabProvider';
import axios from 'axios'; // Import Axios

const ROSSection = () => {
  const { id } = useParams(); // Get patient ID from the route
  const { addTab } = useTabs();
  
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [customCondition, setCustomCondition] = useState('');
  const [conditions, setConditions] = useState([]); // Will hold conditions fetched from backend
  const options = ['None', 'Mild', 'Moderate', 'Severe']; // Answer options for each condition

  const handleAnswerChange = (question: string, answer: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [question]: answer,
    }));
  };

  const handleAddCondition = () => {
    if (customCondition.trim() && !conditions.some(c => c.question === customCondition.trim())) {
      setConditions((prevConditions) => [
        ...prevConditions,
        { question: customCondition.trim(), options: [] }
      ]);
      setCustomCondition('');
    }
  };

  // Fetch conditions from backend
  useEffect(() => {
    const fetchConditions = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/assets/json/reviewSytem.json`);
        setConditions(response.data); // Update the conditions state with fetched data
      } catch (error) {
        console.error("Error fetching ROS content:", error);
      }
    };

    fetchConditions();
  }, []);

  useEffect(() => {
    addTab({ id: "/reviewsystem", name: "ROS", path: `/reviewsystem/${id}` });
  }, [addTab]);

  return (
    <div className="space-y-6 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-[#002D62]  mb-4">Review of Systems</h2>
      
      {/* Grid container for the conditions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {conditions.map((condition, index) => (
          <div key={index} className="space-y-3">
            <div className="flex items-center">
              <label htmlFor={`condition-${index}`} className="text-md font-semibold text-[#1c4b85]">{condition.question}</label>
            </div>

            {/* Answer Selection */}
            <select
              id={`condition-${index}`}
              value={selectedAnswers[condition.question] || ''}
              onChange={(e) => handleAnswerChange(condition.question, e.target.value)}
              className="w-full px-4 py-2 border text-[#3972c7] rounded-md focus:ring-teal-500 focus:border-teal-500"
            >
              <option value="" >Select answer</option>
              {condition.options.map((option) => (
                <option  key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        ))}
      </div>

      {/* Add Custom Condition */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-[#002D62] mb-2">Add Custom Condition</h3>
        <div className="flex items-center space-x-3">
          <input
            type="text"
            value={customCondition}
            onChange={(e) => setCustomCondition(e.target.value)}
            placeholder="Enter a custom condition"
            className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          />
          <button
            onClick={handleAddCondition}
            className="px-4 py-2 bg-teal-600 text-white rounded-md shadow-md hover:bg-teal-700 focus:ring-2 focus:ring-teal-500 focus:outline-none transform transition-all hover:scale-105"
          >
            Add
          </button>
        </div>
        {customCondition && !customCondition.trim() && (
          <p className="text-sm text-red-500 mt-1">Please enter a valid condition.</p>
        )}
      </div>
    </div>
  );
};

export default ROSSection;
