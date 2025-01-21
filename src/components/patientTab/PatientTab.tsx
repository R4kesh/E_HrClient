// // components/PatientTabs.js
// import React from "react";
// import { useTabs } from "../../Context/PatientTabProvider";
// import { Link } from "react-router-dom";

// const PatientTabs = () => {
//   const { tabs, activeTab, setActiveTab, closeTab } = useTabs();

//   return (
//     <div className="flex space-x-2 bg-blue-800  rounded-md">
//       {tabs.map((tab) => (
//        <Link to={`/dashboard/${tab.id}`}>
//         <div
//           key={tab.id}
//           className={`px-2 py-1 rounded-md cursor-pointer ${
//             activeTab === tab.id ? "bg-white text-blue-400" : "bg-gray-200 text-black"
//           }`}
//           onClick={() => setActiveTab(tab.id)}
//         >
//           {tab.firstName } 
//           <button
//             className="ml-2 text-red-500"
//             onClick={(e) => {
//               // e.stopPropagation(); 
//               closeTab(tab.id);
//             }}
//           >
//             ×
//           </button>
//         </div>
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default PatientTabs;

import React from "react";
import { useTabs } from "../../Context/PatientTabProvider";
import { Link } from "react-router-dom";

const PatientTabs = () => {
  const { tabs, activeTab, setActiveTab, closeTab } = useTabs();

  return (
    <div className="flex space-x-2 bg-blue-800 rounded-md">
      {tabs.map((tab) => (
        <div key={tab.id} className="relative flex items-center">
          <Link to={`/dashboard/${tab.id}`}>
            <div
              className={`px-2 py-1 rounded-md cursor-pointer ${
                activeTab === tab.id ? "bg-white text-blue-400" : "bg-gray-200 text-black"
              }`}
              onClick={() => setActiveTab(tab.id)} // Set active tab on click
            >
              {tab.firstName}
            </div>
          </Link>
          <button
            className="ml-2 text-red-500 absolute right-0"
            onClick={(e) => {
              e.stopPropagation(); // Prevent the event from propagating to the parent
              closeTab(tab.id); // Call the closeTab function to remove the specific tab
            }}
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
};

export default PatientTabs;

