import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";

const LabResultBmp = () => {
  const [tests, setTests] = useState([
    { name: "Sodium", results: [""] },
    { name: "Potassium", results: [""] },
    { name: "Chloride", results: [""] },
    { name: "Carbon Dioxide", results: [""] },
    { name: "Glucose", results: [""] },
    { name: "Blood Urea Nitrogen", results: [""] },
    { name: "Creatinine", results: [""] },
    { name: "Calcium", results: [""] },
  ]);

  // Add a new result field for a specific test
  const addResultColumn = (rowIndex) => {
    const updatedTests = [...tests];
    updatedTests[rowIndex].results.push(""); // Add a blank result field
    setTests(updatedTests);
  };

  const handleResultChange = (rowIndex, colIndex, newValue) => {
    const updatedTests = [...tests];
    updatedTests[rowIndex].results[colIndex] = newValue; // Update specific result for a test
    setTests(updatedTests);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-6xl">
        <h2 className="text-3xl font-semibold text-[#002D62] text-center mb-8">Lab Results BMP</h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse text-left">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="py-3 px-6 text-left font-medium">Test</th>
                {/* Dynamically render "Result" columns */}
                {tests[0].results.map((_, colIndex) => (
                  <th key={colIndex} className="py-3 px-6 text-left font-medium">
                    Result {colIndex + 1}
                  </th>
                ))}
                <th className="py-3 px-6 text-left font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tests.map((test, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="odd:bg-white even:bg-gray-50 hover:bg-gray-100 transition-all duration-200"
                >
                  <td className="py-4 px-6 text-sm text-[#3972c7] font-semibold">{test.name}</td>
                  {/* Dynamically render inputs for each result */}
                  {test.results.map((result, colIndex) => (
                    <td key={colIndex} className="py-4 px-6">
                      <input
                        type="text"
                        value={result}
                        onChange={(e) => handleResultChange(rowIndex, colIndex, e.target.value)}
                        placeholder="Enter result"
                        className="w-full px-4 py-2 border placeholder-[#6786b4] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                      />
                    </td>
                  ))}
                  <td className="py-4 px-6">
                    <button
                      onClick={() => addResultColumn(rowIndex)}
                      className="bg-blue-600 text-white p-2 rounded-full shadow-md hover:bg-blue-700 transition"
                    >
                      <PlusIcon className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-blue-700 transition font-semibold text-lg">
            Save Results
          </button>
        </div>
      </div>
    </div>
  );
};

export default LabResultBmp;
