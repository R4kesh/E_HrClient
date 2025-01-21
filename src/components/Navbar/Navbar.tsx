
// import React, { useState,useEffect } from 'react';
// import { FaMoon, FaSun } from 'react-icons/fa';
// import { Link } from 'react-router-dom'; 
// import PatientSearch from '../PatientSearch';

// function Navbar() {
//   const [darkMode, setDarkMode] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   // Persist dark mode preference
//   useEffect(() => {
//     const savedTheme = localStorage.getItem("darkMode");
//     if (savedTheme === "true") {
//       setDarkMode(true);
//       document.documentElement.classList.add("dark");
//     }
//   }, []);

//   const toggleDarkMode = () => {
//     const newMode = !darkMode;
//     setDarkMode(newMode);
//     document.documentElement.classList.toggle("dark", newMode);
//     localStorage.setItem("darkMode", newMode);
//   };

//   const toggleMenu = () => setIsMenuOpen((prev) => !prev);
//   const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

//   return (
//     <nav
//       className={`bg-white ${darkMode ? "dark:bg-gray-900" : ""} border-b shadow-md p-2 h-12`}
//     >
//       <div className="max-w-full mx-auto  flex items-center justify-between ">
//         {/* Logo */}
//         <a href="#" className="text-2xl font-semibold dark:text-white text-gray-900">
//           Electronic Health Record
//         </a>

//         {/* Mobile menu toggle */}
//         <button
//           onClick={toggleMenu}
//           className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
//           aria-expanded={isMenuOpen}
//         >
//           <span className="sr-only">Open menu</span>
//           <svg
//             className="w-6 h-6"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M4 6h16M4 12h16m-7 6h7"
//             />
//           </svg>
//         </button>

//         {/* Navbar links */}
//         <div
//           className={`${
//             isMenuOpen ? "block" : "hidden"
//           } md:flex md:items-center w-full md:w-auto`}
//         >
//           <ul className="text-black items-start flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0  font-normal">
//             <li>
//              <Link to='/'> <a
                
//                 className=" dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
//               >
//                 Home
//               </a></Link>
//             </li>
           
//             <li>
//               <Link to='/aboutUs'><a
               
//                 className=" dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
//               >
//               Chart
//               </a></Link>
//             </li>
//             <li>
//             <Link to='/requestdemo'><a
//                 href="#"
//                 className=" dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
//               >
//                Modules
//               </a></Link>
//             </li>
//             <li>
//   <Link
//     to="/pricing" // Replace with the appropriate route path
//     className=" dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
//   >
//    Reports
//   </Link>
// </li>

//             {/* More Dropdown */}
//             <li className="relative">
              
//                 <a
//                 className="flex items-center   dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
//               >
                 
//                       Tools
                  
//               </a>
//             </li>
//             <li>
//               <Link to='/contactUs'><a
                
//                 className=" dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
//               >
              
//               </a></Link>
//             </li>
//             {/* More Dropdown */}
         
//           </ul>
//         </div>
       

//         <div className="flex items-center space-x-4">
//           <PatientSearch/>
//           <button
//             onClick={toggleDarkMode}
//             className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
//           >
//             {darkMode ? (
//               <FaMoon className="text-yellow-400" />
//             ) : (
//               <FaSun className="text-yellow-500" />
//             )}
//           </button>

//           <Link to="/login">
//             <button className="px-4 py-1 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-bold shadow-lg transition duration-300 ease-in-out">
//               Login
//             </button>
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PatientSearch from '../PatientSearch';
import { FiRefreshCw, FiSettings } from "react-icons/fi";


function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Persist dark mode preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme === 'true') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
    localStorage.setItem('darkMode', newMode);
  };

  // const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // const handleRefresh = () => {
  //   window.location.reload(); // This will reload the entire window
  // };

  return (
    <nav
      className={`bg-white ${
        darkMode ? 'dark:bg-gray-900' : ''
      } border-b shadow-md p-2`}
    >
      <div className="max-w-full mx-auto flex items-center justify-between">
        {/* Left Section: Logo and Navbar links */}
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <a
  href="#"
  className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 font-sans"
>
  Electronic Health Record
</a>


          {/* Navbar links */}
          <ul className="hidden md:flex space-x-6 font-normal">
            <li>
              <Link
                to="/"
                className="dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/aboutUs"
                className="dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
              >
                Chart
              </Link>
            </li>
            <li>
              <Link
                to="/requestdemo"
                className="dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
              >
                Modules
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className="dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
              >
                Reports
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
              >
                Tools
              </a>
            </li>
          </ul>
        </div>

        <div className="flex items-center space-x-4">
          {/* <PatientSearch />

          <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-300 transition duration-300"
         onClick={handleRefresh}>
          <FiRefreshCw size={20} />
          <span className="text-sm font-medium"></span>
        </div>

        <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-300 transition duration-300">
          <FiSettings size={20} />
          <span className="text-sm font-medium"></span>
        </div> */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            {darkMode ? (
              <FaMoon className="text-yellow-400" />
            ) : (
              <FaSun className="text-yellow-500" />
            )}
          </button>


          
          <Link to="/login">
            <button className="px-4 py-1 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-bold shadow-lg transition duration-300 ease-in-out">
              Login
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4">
          <ul className="font-normal">
            <li>
              <Link
                to="/"
                className="dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/aboutUs"
                className="dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
              >
                Chart
              </Link>
            </li>
            <li>
              <Link
                to="/requestdemo"
                className="dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
              >
                Modules
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className="dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
              >
                Reports
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
              >
                Tools
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;


