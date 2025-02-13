

// import React from 'react';
// import { useTabs } from '../Context/TabProvider';
// import { useLocation, useNavigate } from 'react-router-dom';

// function Tab() {
//   const { tabs, removeTab } = useTabs();
//   const location = useLocation(); // Get the current route to highlight the active tab
//   const navigate = useNavigate(); // Use navigate for programmatic navigation

//   const handleTabClick = (tabId, path) => {
//     navigate(path); // Navigate to the selected tab's path
//   };

//   return (
//     <header className="bg-gradient-to-r from-blue-gray-200 to-blue-gray-200 shadow-lg h-8 w-full px-1  flex items-center">
//       <div className="flex space-x-1">
//         {tabs.map((tab) => (
//           <div
//             key={tab.id}
//             className={`flex items-center space-x-2 px-2 py-1 rounded-md cursor-pointer transform transition-all duration-300 ease-in-out 
//             ${
//               location.pathname === tab.path
//                 ? 'bg-white text-blue-600 shadow-md scale-105'
//                 : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:scale-105'
//             }`}
//             onClick={() => handleTabClick(tab.id, tab.path)}
//           >
//             <div className="text-sm font-medium">{tab.name}</div>
//             <button
//               onClick={(e) => {
//                 e.stopPropagation(); // Prevent triggering navigation when closing a tab
//                 removeTab(tab.id); // Remove the tab
//               }}
//               className="text-red-500 text-sm font-bold hover:text-red-700 transition-colors duration-300"
//             >
//               ×
//             </button>
//           </div>
//         ))}
//       </div>
//     </header>
//   );
// }

// export default Tab;



import React from 'react';
import { X } from 'lucide-react';
import { useTabs } from '../Context/TabProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const ProfessionalTabs = () => {
  const { tabs, removeTab } = useTabs();
  const location = useLocation();
  const navigate = useNavigate();

  const handleTabClick = (path) => {
    navigate(path);
  };

  return (
    <div className="bg-white border-b max-w-5xl "  style={{
      scrollbarWidth: "thin", // For Firefox
      scrollbarColor: "#e2e3e1 #f3f4f6", // Thumb and track colors for Firefox
    }}>
      <div className="flex overflow-x-auto px-1 py-2 space-x-2 ">
        {tabs.map((tab) => (
          <div 
            key={tab.id}
            className={`
             border-gray-300 border 
              flex items-center rounded-md px-3 py-1.5 text-sm font-medium 
              transition-all duration-200 ease-in-out cursor-pointer 
              relative group
              ${location.pathname === tab.path 
                ? 'bg-blue-100 text-blue-800 shadow-md' 
                : 'hover:bg-gray-100  text-gray-500 hover:text-gray-800'}
            `}
            onClick={() => handleTabClick(tab.path)}
          >
            <span className="mr-2 truncate max-w-[150px]">{tab.name}</span>
            
            <button 
              onClick={(e) => {
                e.stopPropagation();
                removeTab(tab.id);
              }}
              className="
              
                text-gray-500 hover:text-red-500 
                rounded-full p-0.5 
                hover:bg-red-50 
                transition-colors duration-200
                opacity-50 group-hover:opacity-100
              "
            >
              <X size={16} strokeWidth={2} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalTabs;