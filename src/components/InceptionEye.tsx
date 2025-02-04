

import React, { useEffect, useState } from 'react';

const EyeSection = ({onChange}) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [customConditions, setCustomConditions] = useState<string[]>([]);
  const [newCondition, setNewCondition] = useState('');

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
    if (newCondition.trim() !== '') {
      setCustomConditions((prev) => [...prev, newCondition]);
      setNewCondition('');
    }
  };

  return (
    <div className="space-y-8 p-6 bg-gray-50 rounded-lg shadow-md">

      {/* Checkboxes for Normal Conditions */}
      <div className="space-y-6">
        {[
          'Refractive errors',
          'Corneal disorders',
          'Retinal disorders',
          'Optic nerve-related conditions',
        ].map((option) => (
          <div key={option} className="flex items-center space-x-3">
            <input
              type="checkbox"
              id={option}
              value={option}
              onChange={handleChange}
              className="w-5 h-5 text-teal-500 border-gray-300 rounded-md focus:ring-teal-500 focus:ring-2 transition duration-200"
            />
            <label htmlFor={option} className="text-lg text-black cursor-pointer">
              {option}
            </label>
          </div>
        ))}

        <div>
          <h3 className="text-xl font-semibold text-teal-500 mb-2">Age-Related Eye Disorders</h3>
          <div className="space-y-3 pl-4">
            {[
              'Infections',
              'Injuries and trauma',
              'Cancer',
              'Congenital malformations',
            ].map((option) => (
              <div key={option} className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id={option}
                  value={option}
                  onChange={handleChange}
                  className="w-5 h-5 text-teal-500 border-gray-300 rounded-md focus:ring-teal-500 focus:ring-2 transition duration-200"
                />
                <label htmlFor={option} className="text-lg text-black cursor-pointer">
                  {option}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-teal-500 mb-2">Custom Conditions</h3>
          {customConditions.map((option) => (
            <div key={option} className="flex items-center space-x-3">
              <input
                type="checkbox"
                id={option}
                value={option}
                onChange={handleChange}
                className="w-5 h-5 text-teal-500 border-gray-300 rounded-md focus:ring-teal-500 focus:ring-2 transition duration-200"
              />
              <label htmlFor={option} className="text-lg text-black cursor-pointer">
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <input
          type="text"
          value={newCondition}
          onChange={(e) => setNewCondition(e.target.value)}
          placeholder="Add a condition not listed..."
          className="w-full px-4 py-2 border rounded-md focus:ring-teal-500 focus:ring-2 focus:outline-none"
        />
        <button
          onClick={handleAddCondition}
          className="px-4 py-2 bg-teal-600 text-white font-medium rounded-md shadow-lg hover:bg-teal-700 focus:ring-2 focus:ring-teal-500 focus:outline-none transform transition-all hover:scale-105"
        >
          Add Condition
        </button>
      </div>

      <div className="flex justify-end">
        <button
          onClick={() => console.log({ selectedConditions: selectedOptions })}
          className="px-6 py-3 bg-teal-600 text-white font-medium rounded-md shadow-lg hover:bg-teal-700 focus:ring-2 focus:ring-teal-500 focus:outline-none transform transition-all hover:scale-105"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default EyeSection;
