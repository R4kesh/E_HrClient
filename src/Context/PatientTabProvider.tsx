// import React, { createContext, useContext, useState } from "react";

// // Define the shape of the context
// interface Patient {
//   patientId: string;
//   name: string; // Add any additional properties as needed
// }

// interface TabContextType {
//   tabs: Patient[];
//   activeTab: string | null;
//   addTab: (patient: Patient) => void;
//   closeTab: (patientId: string) => void;
//   setActiveTab: (patientId: string) => void;
// }

// // Create a default context with an empty object or appropriate values
// const TabContext = createContext<TabContextType>({
//   tabs: [],
//   activeTab: null,
//   addTab: () => {},
//   closeTab: () => {},
//   setActiveTab: () => {},
// });

// export const PatientTabProvider: React.FC = ({ children }) => {
//   const [tabs, setTabs] = useState<Patient[]>([]);
//   const [activeTab, setActiveTab] = useState<string | null>(null);

//   const addTab = (patient: Patient) => {
//     if (!tabs.find((tab) => tab.patientId === patient.patientId)) {
//       setTabs([...tabs, patient]);
//     }
//     setActiveTab(patient.patientId);
//   };

//   const closeTab = (patientId: string) => {
//     setTabs(tabs.filter((tab) => tab.patientId !== patientId));
//     if (activeTab === patientId && tabs.length > 1) {
//       setActiveTab(tabs[tabs.length - 2]?.patientId || null);
//     }
//   };

//   return (
//     <TabContext.Provider
//       value={{ tabs, activeTab, addTab, closeTab, setActiveTab }}
//     >
//       {children}
//     </TabContext.Provider>
//   );
// };

// export const useTabs = () => useContext(TabContext);


import React, { createContext, useContext, useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

const TabContext = createContext<any>(null); // You can replace `any` with a specific type later

interface PatientTabProviderProps {
  children: ReactNode; // Ensures that the component can accept children
}

export const PatientTabProvider: React.FC<PatientTabProviderProps> = ({ children }) => {
  const [tabs, setTabs] = useState([]);
  const [activeTab, setActiveTab] = useState(null);

  console.log('providertab',tabs,'provactiveTab',activeTab);
  

  const addTab = (patient) => {
    console.log('addTabid',patient);
    
    if (!tabs.find((tab) => tab.id === patient.id)) {
      setTabs([...tabs, patient]);
    }
    setActiveTab(patient.id);
  };

  const closeTab = (id) => {
    console.log('closeTabid',id);

    setTabs(tabs.filter((tab) => tab.id !== id));
    if (activeTab === id && tabs.length > 1) {
      setActiveTab(tabs[tabs.length - 2]?.id || null);
    }
  };

  return (
    <TabContext.Provider value={{ tabs, activeTab, addTab, closeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  );
};

export const useTabs = () => useContext(TabContext);

