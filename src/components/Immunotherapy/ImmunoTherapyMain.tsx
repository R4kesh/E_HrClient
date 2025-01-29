import React, { useState } from 'react';
import DiabetesComponent from './DiabetesComponent';
import PainManagementComponent from './PainManagementComponent';

const options = [
  "Anticoagulation",
  "Common Results",
  "Diabetes",
  "Immunotherapy",
  "OB Prenatal",
  "Pain Management",
  "Physical Therapy Progress",
  "Vitals",
  "Wound Care for 1 to 3 Wounds",
  "Echo Results",
  "Hypertension Trending Blood Pressure",
  "Lab Results BMP",
  "Lab Results CMP",
  "Prenatal Visits",
  "Vitals",
];

const ImmunoTherapyMain = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const renderComponent = () => {
    switch (selectedCategory) {
      case "Diabetes":
        return <DiabetesComponent />;
      case "Pain Management":
        return <PainManagementComponent />;
        case "Pain Management":
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4 relative">
      {/* Selection Box (Top-Right Corner) */}
      <div className="absolute top-4 right-4 bg-white shadow-lg rounded-lg p-6 w-64">
        <h1 className="text-xl font-semibold text-gray-700 mb-4">
          Select a Category
        </h1>
        <div className="relative">
          <select
            className="block appearance-none w-full bg-gray-50 border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded-lg leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-sm"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="" disabled>
              Choose an option
            </option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Render the Selected Component (Left Side) */}
      <div className="mt-8 mr-80">
        {renderComponent()}
      </div>
    </div>
  );
};

export default ImmunoTherapyMain;