
// import React from 'react';
// import { useTabs } from '../Context/TabProvider';
// import { Link, useLocation, useNavigate } from 'react-router-dom';

// function Tab() {
//   const { tabs, removeTab } = useTabs();
//   const location = useLocation();  // Get the current route to highlight the active tab
//   const navigate = useNavigate();  // Use navigate for programmatic navigation

//   const handleTabClick = (tabId, path) => {
//     // Navigate to the selected tab's path
//     navigate(path);

//     // Optionally, you can add some logic here if you want to modify the tab data when it's clicked
//     console.log(`Navigating to: ${path}`);
//   };

//   return (
//     <header className="bg-teal-600 shadow-lg w-full h-10 py-4 px-4 flex justify-start items-center">
//       {/* <h1 className="text-white text-2xl font-bold i">E_Hr</h1> */}
      
//       {/* Tabs under Navbar */}
//       <div className="flex space-x-4">
//         {tabs.map((tab) => (
//           <div
//             key={tab.id}
//             className={`flex  items-center space-x-2 cursor-pointer ${location.pathname === tab.path ? 'font-semibold' : ''}`}
//             onClick={() => handleTabClick(tab.id, tab.path)}  // Navigate when tab is clicked
//           >
//             <div className="text-white">{tab.name}</div>
//             <button
//               onClick={(e) => {
//                 e.stopPropagation(); // Prevent closing tab when clicking the tab itself
//                 removeTab(tab.id);  // Remove the tab when the close button is clicked
//               }}
//               className="text-red-600 text-xl font-bold hover:bg-gray-200 rounded-full p-1"
//             >
//               X
//             </button>
//           </div>
//         ))}
//       </div>
//     </header>
//   );
// }

// export default Tab;

import React from 'react';
import { useTabs } from '../Context/TabProvider';
import { useLocation, useNavigate } from 'react-router-dom';

function Tab() {
  const { tabs, removeTab } = useTabs();
  const location = useLocation(); // Get the current route to highlight the active tab
  const navigate = useNavigate(); // Use navigate for programmatic navigation

  const handleTabClick = (tabId, path) => {
    navigate(path); // Navigate to the selected tab's path
  };

  return (
    <header className="bg-gradient-to-r from-blue-400 to-green-400 shadow-lg w-full px-2 py-1 flex items-center">
      <div className="flex space-x-2">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`flex items-center space-x-2 px-2 py-1 rounded-md cursor-pointer transform transition-all duration-300 ease-in-out 
            ${
              location.pathname === tab.path
                ? 'bg-white text-blue-600 shadow-md scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:scale-105'
            }`}
            onClick={() => handleTabClick(tab.id, tab.path)}
          >
            <div className="text-sm font-medium">{tab.name}</div>
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering navigation when closing a tab
                removeTab(tab.id); // Remove the tab
              }}
              className="text-red-500 text-sm font-bold hover:text-red-700 transition-colors duration-300"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </header>
  );
}

export default Tab;

