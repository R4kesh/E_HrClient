// import React, { useState } from 'react';

// function InceptionSkin() {
//   const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

//   // Handle checkbox change
//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const option = event.target.value;
//     setSelectedOptions((prev) =>
//       event.target.checked
//         ? [...prev, option]
//         : prev.filter((item) => item !== option)
//     );
//   };

//   return (
//     <div className="min-h-screen bg-blue-50 py-12 px-6 sm:px-12">
//       <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
//         <h1 className="text-3xl font-bold text-center text-teal-700 mb-8">Inception Skin Form</h1>
//         <p className="text-lg text-gray-600 mb-6">
//           Please select the options that apply to the patient's skin condition.
//         </p>

//         <div className="space-y-6">
//           {['Acne', 'Dry Skin', 'Oily Skin', 'Hyperpigmentation', 'Redness', 'Sunburn', 'Wrinkles', 'Eczema'].map(
//             (option) => (
//               <div key={option} className="flex items-center space-x-3">
//                 <input
//                   type="checkbox"
//                   id={option}
//                   value={option}
//                   onChange={handleChange}
//                   className="w-5 h-5 text-teal-500 border-gray-300 rounded-md focus:ring-teal-500 focus:ring-2 transition duration-200"
//                 />
//                 <label htmlFor={option} className="text-lg text-gray-700 cursor-pointer">{option}</label>
//               </div>
//             )
//           )}
//         </div>

//         <button
//           type="button"
//           className="w-full mt-8 py-3 px-4 bg-teal-600 text-white text-lg font-semibold rounded-md shadow-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 transform transition-all hover:scale-105"
//         >
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// }

// export default InceptionSkin;


// import React, { useState } from 'react';

// const SkinSection = () => {
//   const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const option = event.target.value;
//     setSelectedOptions((prev) =>
//       event.target.checked
//         ? [...prev, option]
//         : prev.filter((item) => item !== option)
//     );
//   };

//   return (
//     <div className="space-y-6">
//       {['Acne', 'Dry Skin', 'Oily Skin', 'Hyperpigmentation', 'Redness', 'Sunburn', 'Wrinkles', 'Eczema'].map((option) => (
//         <div key={option} className="flex items-center space-x-3">
//           <input
//             type="checkbox"
//             id={option}
//             value={option}
//             onChange={handleChange}
//             className="w-5 h-5 text-teal-500 border-gray-300 rounded-md focus:ring-teal-500 focus:ring-2 transition duration-200"
//           />
//           <label htmlFor={option} className="text-lg text-gray-700 cursor-pointer">{option}</label>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SkinSection;

import React, { useEffect, useState } from 'react';

const SkinSection = ({ onChange }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [customCondition, setCustomCondition] = useState('');
  const [conditions, setConditions] = useState<string[]>([
    'Allergies like contact dermatitis and poison ivy rashes.',
    'Blisters.',
    'Bug bites, such as spider bites, tick bites and mosquito bites.',
    'Skin cancer, including melanoma.',
    'Skin infections like cellulitis.',
    'Skin rashes and dry skin.',
    'Skin disorders like acne, eczema, psoriasis and vitiligo.',
    'Skin lesions, such as moles, freckles and skin tags.',
    'Wounds, burns (including sunburns) and scars.',
  ]);

  useEffect(() => {
    onChange(selectedOptions); // Propagate changes upwards
  }, [selectedOptions, onChange]);
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const option = event.target.value;
    setSelectedOptions((prev) =>
      event.target.checked
        ? [...prev, option]
        : prev.filter((item) => item !== option)
    );
  };

  const handleAddCondition = () => {
    if (customCondition.trim()) {
      setConditions((prevConditions) => [...prevConditions, customCondition]);
      setCustomCondition(''); // Clear the input field after adding
    }
  };

  return (
    <div className="space-y-6">
      {/* List of conditions */}
      {conditions.map((option, index) => (
        <div key={index} className="flex items-center space-x-3">
          <input
            type="checkbox"
            id={option}
            value={option}
            onChange={handleChange}
            className="w-5 h-5 text-teal-500 border-gray-300 rounded-md focus:ring-teal-500 focus:ring-2 transition duration-200"
          />
          <label htmlFor={option} className="text-lg text-black font-light  cursor-pointer">{option}</label>
        </div>
      ))}

      
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Add a Custom Condition</h3>
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

export default SkinSection;
