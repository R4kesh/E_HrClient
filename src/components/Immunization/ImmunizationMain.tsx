import React, { useState } from "react";
import Schedule from "./Schedule";
import Immunization from "./Immunization";

const ImmunizationMain = () => {
  const [activeTab, setActiveTab] = useState("schedule");

  const renderTabContent = () => {
    switch (activeTab) {
      case "schedule":
        return <Schedule />;
      case "immunization":
        return <Immunization />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center ">
      <div className="w-full max-w-full bg-white rounded-lg shadow-md">
        {/* Tab Header */}
        <div className="flex justify-center border-b">
          <button
            className={`py-2 px-4 w-1/2 text-center font-medium transition-all duration-300 ${
              activeTab === "schedule"
                ? "border-b-4 border-blue-500 text-blue-500"
                : "text-gray-500 hover:text-blue-500"
            }`}
            onClick={() => setActiveTab("schedule")}
          >
            Schedule
          </button>
          <button
            className={`py-2 px-4 w-1/2 text-center font-medium transition-all duration-300 ${
              activeTab === "immunization"
                ? "border-b-4 border-blue-500 text-blue-500"
                : "text-gray-500 hover:text-blue-500"
            }`}
            onClick={() => setActiveTab("immunization")}
          >
            Immunization
          </button>
        </div>
        {/* Tab Content */}
        <div className="p-3">
          <div
            className="transition-opacity duration-500 ease-in-out"
            key={activeTab}
          >
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImmunizationMain;
