// components/ActivePatient.js
import React from "react";
import { useTabs } from "../../Context/PatientTabProvider";

const ActivePatient = () => {
  const { tabs, activeTab } = useTabs();
  console.log('tabs',tabs,'activeTab',activeTab);
  
  const activePatient = tabs.find((tab) => tab.id === activeTab);
  console.log('activePatient',activePatient);
  

  if (!activePatient) {
    return <div className="p-4">No patient selected.</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Patient Details</h2>
      <p>ID: {activePatient.id}</p>
      <p>Name: {activePatient.firstName}</p>
    </div>
  );
};

export default ActivePatient;
