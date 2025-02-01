import React, { useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';

function LabResultCmp() {
  const [labResults, setLabResults] = useState([
    { measure: 'CMP / Albumin', values: [''] },
    { measure: 'CMP / Alkaline Phos', values: [''] },
    { measure: 'CMP / ALT (SGPT)', values: [''] },
    { measure: 'CMP / AST (SSOT)', values: [''] },
    { measure: 'CMP / Bilirubin Total', values: [''] },
    { measure: 'CMP / BUN', values: [''] },
    { measure: 'CMP / BUN / Creatine', values: [''] },
    { measure: 'CMP / Calcium', values: [''] },
    { measure: 'CMP / Carbon Dioxide', values: [''] },
    { measure: 'CMP / Chloride', values: [''] },
    { measure: 'CMP / Creatine', values: [''] },
    { measure: 'CMP / GFR (calc)', values: [''] },
    { measure: 'CMP / Glucose', values: [''] },
    { measure: 'CMP / Potassium', values: [''] },
    { measure: 'CMP / Protein Total', values: [''] },
    { measure: 'CMP / Sodium', values: [''] },
  ]);

  // Function to add a new value column for each measure (row)
  const addValueColumn = (index) => {
    const updatedResults = [...labResults];
    updatedResults[index].values.push(''); // Add an empty value to the selected measure
    setLabResults(updatedResults);
  };

  // Function to handle the input change
  const handleInputChange = (index, valueIndex, value) => {
    const updatedResults = [...labResults];
    updatedResults[index].values[valueIndex] = value;
    setLabResults(updatedResults);
  };

  return (
    <div className="p-4 bg-gray-50 rounded-lg shadow-md max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-[#002D62] text-center mb-6">Lab Results CMP</h2>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="py-3 px-6 text-left text-sm font-medium">Measure</th>
            <th className="py-3 px-6 text-left text-sm font-medium">Values</th>
            <th className="py-3 px-6 text-left text-sm font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {labResults.map((result, index) => (
            <tr key={index} className="hover:bg-blue-50 transition-colors">
              <td className="py-3 px-6 text-sm text-[#3972c7] font-semibold">{result.measure}</td>
              <td className="py-3 px-6">
                <div className="flex gap-3">
                  {result.values.map((value, valueIndex) => (
                    <input
                      key={valueIndex}
                      type="text"
                      value={value}
                      onChange={(e) => handleInputChange(index, valueIndex, e.target.value)}
                      placeholder="Enter value"
                      className="w-full max-w-xs px-3 py-2 placeholder-[#6786b4] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  ))}
                </div>
              </td>
              <td className="py-3 px-6 text-center">
                <button
                  onClick={() => addValueColumn(index)}
                  className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                >
                  <PlusIcon className="w-5 h-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-6">
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-blue-700 transition font-semibold text-lg">
          Save Results
        </button>
      </div>
    </div>
  );
}

export default LabResultCmp;
