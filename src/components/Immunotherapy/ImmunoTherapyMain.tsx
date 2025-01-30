
import React, { useState } from 'react';
import DiabetesComponent from './DiabetesComponent';
import PainManagementComponent from './PainManagementComponent';
import WoundCare from './WoundCare';
import EchoResult from './EchoResult';
import HyperTension from './HyperTension';
import LabResultBmp from './LabResultBmp';
import LabResultCmp from './LabResultCmp';
import PrenatalVisit from './PrenatalVisit';
import Anticoagulation from './Anticoagulation';
import { motion } from 'framer-motion';

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

const cardColors = [
  "bg-blue-100 border-blue-500",
  "bg-green-100 border-green-500",
  "bg-yellow-100 border-yellow-500",
  "bg-orange-100 border-orange-500",
  "bg-purple-100 border-purple-500",
  "bg-pink-100 border-pink-500",
  "bg-teal-100 border-teal-500",
  "bg-red-100 border-red-500",
  "bg-indigo-100 border-indigo-500",
];

const ImmunoTherapyMain = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const renderComponent = () => {
    switch (selectedCategory) {
      case "Diabetes":
        return <DiabetesComponent />;
      case "Pain Management":
        return <PainManagementComponent />;
      case "Wound Care for 1 to 3 Wounds":
        return <WoundCare />;
      case "Echo Results":
        return <EchoResult />;
      case "Hypertension Trending Blood Pressure":
        return <HyperTension />;
      case "Lab Results BMP":
        return <LabResultBmp />;
      case "Lab Results CMP":
        return <LabResultCmp />;
      case "Prenatal Visits":
        return <PrenatalVisit />;
      case "Anticoagulation":
        return <Anticoagulation />;
      default:
        return <Anticoagulation/>;
    }
  };
  return (
    <div className="bg-gray-100 min-h-screen flex  space-x-6">
      {/* Left Side - Selected Component /}
      <div className="flex-1 bg-white  shadow-md rounded-lg">
        {renderComponent()}
      </div>

      {/ Right Side - Card Options with Smooth Scroll */}
      <div className="w-64 space-y-4     ">
        <h1 className="text-xl font-semibold text-gray-700 mb-4">Select a Category</h1>
        <div className="space-y-4 ">
          {options.map((option, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => setSelectedCategory(option)}
              className={cursor-pointer p-4  border-2 shadow-sm rounded-lg hover:shadow-lg transition border-l-4 duration-100 transform hover:-translate-y-6 text-center ${cardColors[index % cardColors.length]} ${
                selectedCategory === option ? "text-blue-700 font-bold border-opacity-100" : "text-slate-900 font-medium border-opacity-50 hover:border-opacity-80"
              }}
            >
              {option}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImmunoTherapyMain;
