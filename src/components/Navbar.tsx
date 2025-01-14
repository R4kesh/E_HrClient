// import React from 'react';
// import { useTabs } from '../Context/TabProvider';
// import { Link, useLocation } from 'react-router-dom';

// function Navbar() {
//   const { tabs, removeTab } = useTabs();
//   const location = useLocation();  // Get the current route to highlight the active tab

//   const handleTabClick = (tabId) => {
//     // You can add logic here if you want to change the current page when tab is clicked
//     console.log(`Tab clicked: ${tabId}`);
//   };

//   return (
//     <header className="bg-teal-600 shadow-lg w-full py-4 px-6 flex justify-between items-center">
//       <h1 className="text-white text-2xl font-bold">E_Hr</h1>
      
//       {/* Tabs under Navbar */}
//       <div className="flex space-x-4">
//         {tabs.map((tab) => (
//           <div
//             key={tab.id}
//             className={`flex items-center space-x-2 cursor-pointer ${
//               location.pathname === tab.path ? 'font-semibold' : ''
//             }`}
//             onClick={() => handleTabClick(tab.id)}
//           >
//             <div className="text-white">{tab.name}</div>
//             <button
//               onClick={(e) => {
//                 e.stopPropagation(); // Prevent closing tab when clicking the tab itself
//                 removeTab(tab.id);
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

// export default Navbar;


import React from 'react';
import { useTabs } from '../Context/TabProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
  const { tabs, removeTab } = useTabs();
  const location = useLocation();  // Get the current route to highlight the active tab
  const navigate = useNavigate();  // Use navigate for programmatic navigation

  const handleTabClick = (tabId, path) => {
    // Navigate to the selected tab's path
    navigate(path);

    // Optionally, you can add some logic here if you want to modify the tab data when it's clicked
    console.log(`Navigating to: ${path}`);
  };

  return (
    <header className="bg-teal-600 shadow-lg w-full h-10 py-4 px-4 flex justify-start items-center">
      {/* <h1 className="text-white text-2xl font-bold i">E_Hr</h1> */}
      
      {/* Tabs under Navbar */}
      <div className="flex space-x-4">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`flex  items-center space-x-2 cursor-pointer ${location.pathname === tab.path ? 'font-semibold' : ''}`}
            onClick={() => handleTabClick(tab.id, tab.path)}  // Navigate when tab is clicked
          >
            <div className="text-white">{tab.name}</div>
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent closing tab when clicking the tab itself
                removeTab(tab.id);  // Remove the tab when the close button is clicked
              }}
              className="text-red-600 text-xl font-bold hover:bg-gray-200 rounded-full p-1"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </header>
  );
}

export default Navbar;
