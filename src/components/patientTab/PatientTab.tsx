
// import { useTabs } from "../../Context/PatientTabProvider";
// import { Link } from "react-router-dom";

// const PatientTabs = () => {
//   const { tabs, activeTab, setActiveTab, closeTab } = useTabs();

//   return (
//     <div className="flex space-x-2 bg-blue-800 rounded-md">
//       {tabs.map((tab) => (
//         <div key={tab.id} className="relative flex items-center">
//           <Link to={`/dashboard/${tab.id}`}>
//             <div
//               className={`px-2 py-1 rounded-md cursor-pointer ${
//                 activeTab === tab.id ? "bg-white text-blue-400" : "bg-gray-200 text-black"
//               }`}
//               onClick={() => setActiveTab(tab.id)} // Set active tab on click
//             >
//               {tab.firstName}
//             </div>
//           </Link>
//           <button
//             className="ml-5 text-red-500 absolute right-0"
//             onClick={(e) => {
//               e.stopPropagation(); // Prevent the event from propagating to the parent
//               closeTab(tab.id); // Call the closeTab function to remove the specific tab
//             }}
//           >
//             ×
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PatientTabs;


import { useTabs } from "../../Context/PatientTabProvider";
import { Link } from "react-router-dom";
import { X, User } from 'lucide-react';

const PatientTabs = () => {
  const { tabs, activeTab, setActiveTab, closeTab } = useTabs();

  return (
    <div className="flex items-center bg-gradient-to-r from-blue-900 to-blue-700 p-1.5 rounded-lg shadow-md overflow-x-auto">
      {tabs.map((tab) => (
        <div 
          key={tab.id} 
          className="flex items-center mr-2 last:mr-0 relative group"
        >
          <Link 
            to={`/dashboard/${tab.id}`} 
            className="contents"
          >
            <div
              className={`
                flex items-center space-x-2 pl-2  pr-6  rounded-md 
                transition-all duration-300 ease-in-out cursor-pointer
                ${activeTab === tab.id 
                  ? "bg-white text-blue-800 shadow-md" 
                  : "bg-blue-800 text-blue-200 hover:bg-blue-700"}
              `}
              onClick={() => setActiveTab(tab.id)}
            >
              <User className="w-4 h-4" />
              <span className="text-sm font-medium truncate max-w-[150px]">
                {tab.firstName}
              </span>
            </div>
          </Link>
          <button
            className="
              absolute right-0 top-1/2 -translate-y-1/2 
              text-red-400 hover:text-red-600 
              bg-transparent p-0.5 rounded-full
              opacity-0 group-hover:opacity-100 
              transition-all duration-300
            "
            onClick={(e) => {
              e.stopPropagation();
              closeTab(tab.id);
            }}
          >
            <X size={16} strokeWidth={2} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default PatientTabs;

