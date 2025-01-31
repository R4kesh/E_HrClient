// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { FaMoon, FaSun } from 'react-icons/fa';

// const NavMenu = ({ title, items }) => {
//   return (
//     <div className="group relative">
//       <button className="px-4 py-2 text-gray-700 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 font-medium inline-flex items-center">
//         {title}
//         <svg className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//         </svg>
//       </button>
//       <div className="absolute left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-1 z-50">
//         <div className="py-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 backdrop-blur-sm backdrop-filter">
//           <div className="px-3 pb-2 mb-2 border-b border-gray-200 dark:border-gray-700">
//             <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
//               {title} Menu
//             </h3>
//           </div>
//           <div className="max-h-[calc(100vh-200px)] overflow-y-auto">
//             {items.map((item, index) => (
//               <div key={index} className="relative group/item">
//                 <Link
//                   to={item.link || '#'}
//                   className={`block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-150 first:rounded-t-lg ${item.subItems ? '' : 'last:rounded-b-lg'}`}
//                 >
//                   <span className="relative z-10 flex items-center">
//                     <span className="w-2 h-2 rounded-full bg-blue-500 opacity-0 group-hover/item:opacity-100 transition-opacity duration-150 absolute -left-4"></span>
//                     {item.name}
//                   </span>
//                 </Link>
//                 {item.subItems && (
//                   <div className="absolute left-full top-0 mt-0 ml-1 w-56 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-300 transform group-hover/item:translate-y-0 translate-y-1 z-50">
//                     <div className="py-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 backdrop-blur-sm backdrop-filter">
//                       {item.subItems.map((subItem, subIndex) => (
//                         <Link
//                           key={subIndex}
//                           to={subItem.link}
//                           className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg"
//                         >
//                           {subItem.name}
//                         </Link>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Navbar = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     const savedTheme = localStorage.getItem('darkMode');
//     if (savedTheme === 'true') {
//       setDarkMode(true);
//       document.documentElement.classList.add('dark');
//     }
//   }, []);

//   const toggleDarkMode = () => {
//     const newMode = !darkMode
//     setDarkMode(newMode);
//     document.documentElement.classList.toggle('dark', newMode);
//     localStorage.setItem('darkMode', newMode);
//   };

//   const menuItems = {
//     home: [
//       { name: 'Dashboard', link: '/' },
//       { name: 'Messages', link: '/messages' },
//       { name: 'Classic Schedule', link: '/classic-schedule' },
//       { name: 'Scheduler', link: '/scheduler' },
//       { name: 'Provider List View', link: '/provider-list' },
//     ],
//     chart: [
//       { name: 'Find Chart Item', link: '/find-chart' },
//       { name: 'Find Patient', link: '/find-patient' },
//     ],
//     modules: [
//       { name: 'Advanced Fax', link: '/advanced-fax' },
//       { name: 'Rooming', link: '/rooming' },
//     ],
//     reports: [
//       {
//         name: 'Order Manifest',
//         link: '/order-manifest',
//         subItems: [
//           { name: 'CIE Outbound', link: '/cie-outbound' },
//           { name: 'Prescription', link: '/prescription' },
//           { name: 'Rx Fix', link: '/rx-fix' },
//         ],
//       },
//       { name: 'Decision Support Feedback', link: '/decision-support' },
//       { name: 'Esend Status', link: '/esend-status' },
//       { name: 'Patient Reporting', link: '/patient-reporting' },
//       { name: 'Result Viewer', link: '/result-viewer' },
//     ],
//     tools: [
//       { name: 'Bulk Upload', link: '/bulk-upload' },
//       { name: 'Chart Reassign', link: '/chart-reassign' },
//       { name: 'CIE Inbound', link: '/cie-inbound' },
//       { name: 'CIE Outbound', link: '/cie-outbound' },
//       { name: 'Data Portability Expert', link: '/data-portability' },
//       { name: 'Rx Fix', link: '/rx-fix' },
//     ],
//     Admin: [
//       { name: 'Audit', link: '/Audit' },
//       { name: 'Health Watcher', link: '/messages', subItems: [
//         { name: 'HW Templates', link: '/HWTemplates' },
//         { name: 'HW Types', link: '/HWTypes' },
       
//       ], },
//       { name: 'Orders', link: '/classic-schedule', subItems: [
//         { name: 'Companies', link: '/Companies' },
//         { name: 'Departments', link: '/prescription' },
//         { name: 'Facilities', link: '/rx-fix' },
//         { name: 'Global Setup', link: '/Companies' },
//         { name: 'Import Lab Test', link: '/prescription' },
//         { name: 'Order sets', link: '/rx-fix' },
//         { name: 'Result sets', link: '/prescription' },
//         { name: 'Test Codes', link: '/rx-fix' },
//       ], },
//       { name: 'Prescriptions', link: '/scheduler', subItems: [
//         { name: 'Drug lookup', link: '/HWTemplates' },
//         { name: 'Drug Security', link: '/HWTypes' },
//         { name: 'Favorite Maintanance', link: '/HWTypes' },

       
//       ], },
//       { name: 'System setup', link: '/provider-list' , subItems: [
//         { name: 'Book marks', link: '/Companies' },
//         { name: 'Chart Folders', link: '/prescription' },
//         { name: 'Clinical staff', link: '/rx-fix' },
//         { name: 'Default Folders', link: '/Companies' },
//         { name: 'Distribution Lists', link: '/prescription' },
//         { name: 'Global settings', link: '/rx-fix' },
//         { name: 'ICD Pick Lists', link: '/prescription' },
//         { name: 'Immunizations', link: '/rx-fix' },
//         { name: 'Lookup Lists', link: '/rx-fix' },
//         { name: 'Patient Educations', link: '/rx-fix' },
//         { name: 'Reports', link: '/rx-fix' },
//         { name: 'Web links', link: '/rx-fix' },

//       ], },
//       { name: 'Templates', link: '/provider-list', subItems: [
//         { name: 'Content Export Library', link: '/Companies' },
//         { name: 'Library', link: '/prescription' },
//         { name: 'Note templates', link: '/rx-fix' },
//         { name: 'Patient Form Templates', link: '/Companies' },
//         { name: 'Sub Notes Templates', link: '/prescription' },
//         { name: 'Template fields', link: '/rx-fix' },
//         { name: 'Template types', link: '/prescription' },
//         { name: 'TexDoc Templates', link: '/rx-fix' },
//         { name: 'Visit Templates', link: '/rx-fix' },
        

//       ], },
//     ],
//     Help: [
//       { name: 'Hub', link: '/advanced-fax' },
//       { name: 'About', link: '/rooming' },
//     ],
//   };

//   return (
//     <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-lg">
//       <div className="max-w-full mx-auto px-4">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <a
//               href="#"
//               className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600"
//             >
//               Electronic Health Record
//             </a>
//           </div>

//           {/* Navigation Menu */}
//           <div className=" md:flex md:items-center ">
//             <NavMenu title="Home" items={menuItems.home} />
//             <NavMenu title="Chart" items={menuItems.chart} />
//             <NavMenu title="Modules" items={menuItems.modules} />
//             <NavMenu title="Reports" items={menuItems.reports} />
//             <NavMenu title="Tools" items={menuItems.tools} />
//             <NavMenu title="Admin" items={menuItems.Admin} />
//             <NavMenu title="Help" items={menuItems.Help} />
//           </div>

//           {/* Right side buttons */}
//           <div className="flex items-center space-x-4">
//             <button
//               onClick={toggleDarkMode}
//               className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200"
//             >
//               {darkMode ? (
//                 <FaMoon className="text-yellow-400" />
//               ) : (
//                 <FaSun className="text-yellow-500" />
//               )}
//             </button>

//             <Link to="/login">
//               <button className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-bold shadow-lg transition duration-300 ease-in-out">
//                 Login
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaMoon, FaSun, FaChevronRight, FaUserCircle } from "react-icons/fa";

const NavMenu = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubItems, setOpenSubItems] = useState(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const handleSubItemClick = (index) => {
    setOpenSubItems((prev) => (prev === index ? null : index));
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        onClick={toggleMenu}
        className="px-4 py-2 text-gray-700 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 font-medium inline-flex items-center"
      >
        {title}
        <svg
          className={`w-4 h-4 ml-1 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-0 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50">
          <div className="py-3">
            {items.map((item, index) => (
              <div key={index} className="px-3 py-2">
                {/* Main Item */}
                <div className="flex justify-between items-center">
                  <Link
                    to={item.link || "#"}
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg"
                  >
                    {item.name}
                  </Link>
                  {item.subItems && (
                    <button
                      onClick={() => handleSubItemClick(index)}
                      className="focus:outline-none"
                    >
                      <FaChevronRight
                        className={`text-gray-500 dark:text-gray-300 transition-transform ${
                          openSubItems === index ? "rotate-90" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* Subitems */}
                {item.subItems && openSubItems === index && (
                  <div className="-mt-20 ml-60 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                    {item.subItems.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.link}
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("darkMode", newMode);
  };

  const menuItems = {
    home: [
      { name: 'Dashboard', link: '/' },
      { name: 'Messages', link: '/messages' },
      { name: 'Classic Schedule', link: '/classic-schedule' },
      { name: 'Scheduler', link: '/scheduler' },
      { name: 'Provider List View', link: '/provider-list' },
    ],
    chart: [
      { name: 'Find Chart Item', link: '/find-chart' },
      { name: 'Find Patient', link: '/find-patient' },
    ],
    modules: [
      { name: 'Advanced Fax', link: '/advanced-fax' },
      { name: 'Rooming', link: '/rooming' },
    ],
    reports: [
      {
        name: 'Order Manifest',
        link: '/order-manifest',
        subItems: [
          { name: 'CIE Outbound', link: '/cie-outbound' },
          { name: 'Prescription', link: '/prescription' },
          { name: 'Rx Fix', link: '/rx-fix' },
        ],
      },
      { name: 'Decision Support Feedback', link: '/decision-support' },
      { name: 'Esend Status', link: '/esend-status' },
      { name: 'Patient Reporting', link: '/patient-reporting' },
      { name: 'Result Viewer', link: '/result-viewer' },
    ],
    tools: [
      { name: 'Bulk Upload', link: '/bulk-upload' },
      { name: 'Chart Reassign', link: '/chart-reassign' },
      { name: 'CIE Inbound', link: '/cie-inbound' },
      { name: 'CIE Outbound', link: '/cie-outbound' },
      { name: 'Data Portability Expert', link: '/data-portability' },
      { name: 'Rx Fix', link: '/rx-fix' },
    ],
    Admin: [
      { name: 'Audit', link: '/Audit' },
      { name: 'Health Watcher', link: '/messages', subItems: [
        { name: 'HW Templates', link: '/HWTemplates' },
        { name: 'HW Types', link: '/HWTypes' },
       
      ], },
      { name: 'Orders', link: '/classic-schedule', subItems: [
        { name: 'Companies', link: '/Companies' },
        { name: 'Departments', link: '/prescription' },
        { name: 'Facilities', link: '/rx-fix' },
        { name: 'Global Setup', link: '/Companies' },
        { name: 'Import Lab Test', link: '/prescription' },
        { name: 'Order sets', link: '/rx-fix' },
        { name: 'Result sets', link: '/prescription' },
        { name: 'Test Codes', link: '/rx-fix' },
      ], },
      { name: 'Prescriptions', link: '/scheduler', subItems: [
        { name: 'Drug lookup', link: '/HWTemplates' },
        { name: 'Drug Security', link: '/HWTypes' },
        { name: 'Favorite Maintanance', link: '/HWTypes' },

       
      ], },
      { name: 'System setup', link: '/provider-list' , subItems: [
        { name: 'Book marks', link: '/Companies' },
        { name: 'Chart Folders', link: '/prescription' },
        { name: 'Clinical staff', link: '/rx-fix' },
        { name: 'Default Folders', link: '/Companies' },
        { name: 'Distribution Lists', link: '/prescription' },
        { name: 'Global settings', link: '/rx-fix' },
        { name: 'ICD Pick Lists', link: '/prescription' },
        { name: 'Immunizations', link: '/rx-fix' },
        { name: 'Lookup Lists', link: '/rx-fix' },
        { name: 'Patient Educations', link: '/rx-fix' },
        { name: 'Reports', link: '/rx-fix' },
        { name: 'Web links', link: '/rx-fix' },

      ], },
      { name: 'Templates', link: '/provider-list', subItems: [
        { name: 'Content Export Library', link: '/Companies' },
        { name: 'Library', link: '/prescription' },
        { name: 'Note templates', link: '/rx-fix' },
        { name: 'Patient Form Templates', link: '/Companies' },
        { name: 'Sub Notes Templates', link: '/prescription' },
        { name: 'Template fields', link: '/rx-fix' },
        { name: 'Template types', link: '/prescription' },
        { name: 'TexDoc Templates', link: '/rx-fix' },
        { name: 'Visit Templates', link: '/rx-fix' },
        

      ], },
    ],
    Help: [
      { name: 'Hub', link: '/advanced-fax' },
      { name: 'About', link: '/rooming' },
    ],
  };

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-lg">
      <div className="max-w-full mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#"
              className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600"
            >
              Electronic Health Record
            </a>
          </div>

          {/* Navigation Menu */}
          <div className=" md:flex md:items-center ">
            <NavMenu title="Home" items={menuItems.home} />
            <NavMenu title="Chart" items={menuItems.chart} />
            <NavMenu title="Modules" items={menuItems.modules} />
            <NavMenu title="Reports" items={menuItems.reports} />
            <NavMenu title="Tools" items={menuItems.tools} />
            <NavMenu title="Admin" items={menuItems.Admin} />
            <NavMenu title="Help" items={menuItems.Help} />
          </div>

        


          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
          <FaUserCircle className="text-2xl text-gray-700 dark:text-gray-300" />
          <div className="flex flex-col ">
    <p className="text-lg font-semibold text-gray-700 dark:text-white">Rakesh</p>
    <p className="text-sm text-gray-500 dark:text-gray-400">(Staff)</p>
  </div>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              {darkMode ? (
                <FaMoon className="text-yellow-400" />
              ) : (
                <FaSun className="text-yellow-500" />
              )}
            </button>

            <Link to="/login">
              <button className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-bold shadow-lg transition duration-300 ease-in-out">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


