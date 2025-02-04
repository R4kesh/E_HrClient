
import React, { useEffect, useState } from 'react';

const EarSection = ({onChange}) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [customCondition, setCustomCondition] = useState('');
  const [conditions, setConditions] = useState<string[]>([
    'Ear infections',
    'Eustachian tube dysfunction',
    'Swimmer’s ear (otitis externa)',
    'Ruptured eardrum',
    'Otosclerosis',
    'Perichondritis',
    'Vestibular neuritis',
    'Meniere’s disease',
    'Ear injury',
    'Ear tumors',
    'Symptoms of common ear conditions',
    'Ear pain.',
    'Ear infection.',
    'Clogged ears.',
    'Muffled hearing.',
    'Itchy ears.',
    'Nausea and vomiting.',
    'A feeling of fullness in your ears.',
    'Ear drainage.',
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
      setCustomCondition(''); // Clear input after adding
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
          <label htmlFor={option} className="text-lg text-black cursor-pointer">{option}</label>
        </div>
      ))}

      {/* Add Custom Condition */}
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

export default EarSection;
