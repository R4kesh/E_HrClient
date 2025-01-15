// import React from 'react';
// import { Sidebar } from '../components/Sidebar';
// import Form from '../components/Form';
// import PatientList from '../components/PatientList';
// import Tab from '../components/Tab';

// const PatientListPage = () => {
//   return (
//     <div className="flex flex-col md:flex-row h-screen bg-white">
//       {/* Sidebar on the left */}
//       <div className="w-full h-screen md:w-64 bg-white ">
//         <Sidebar />
//       </div>

//       {/* Form on the right */}
//       <div className="flex-grow p-6 bg-green-500">
//       <Tab/>

//         <PatientList/>
//       </div>
//     </div>
//   );
// };

// export default PatientListPage;

// import React from 'react';
// import { Sidebar } from '../components/Sidebar';
// import Form from '../components/Form';
// import PatientList from '../components/PatientList';
// import Tab from '../components/Tab';
// import Footer from '../components/Footer/Footer';

// const PatientListPage = () => {
//   return (
//     <div className="flex flex-col md:flex-row h-screen bg-white">
//       {/* Sidebar on the left */}
//       <div className="w-full h-screen md:w-64 bg-white">
//         <Sidebar />
//       </div>

//       {/* Main content area */}
//       <div className="flex-grow  bg-green-500 relative">
//         {/* Tab component at the top-left */}
//         <div className="absolute top-0 left-0 w-full">
//           <Tab />
//         </div>

//         {/* PatientList below the Tab */}
//         <div className="mt-8"> {/* Add margin to make space for Tab */}
//           <PatientList />
//         </div>
//       </div>
//       <Footer/>
//     </div>
//   );
// };

// export default PatientListPage;

import React from 'react';
import { Sidebar } from '../components/Sidebar';
import PatientList from '../components/PatientList';
import Tab from '../components/Tab';
import Footer from '../components/Footer/Footer';

const PatientListPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Wrapper for Sidebar and Main Content */}
      <div className="flex flex-grow">
        {/* Sidebar */}
        <div className="w-full md:w-64 bg-white h-auto md:h-full">
         <div
           className="h-full overflow-y-auto"
           style={{
             scrollbarWidth: "thin", // For Firefox
             scrollbarColor: "#d1d5db #f3f4f6", // Thumb and track colors for Firefox
           }}
         >
           <style>
             {`
               /* Webkit-based browsers */
               .h-full::-webkit-scrollbar {
                 width: 6px;
               }
               .h-full::-webkit-scrollbar-thumb {
                 background-color: #d1d5db; /* Gray-300 */
                 border-radius: 4px;
               }
               .h-full::-webkit-scrollbar-thumb:hover {
                 background-color: #9ca3af; /* Gray-400 */
               }
               .h-full::-webkit-scrollbar-track {
                 background-color: #f3f4f6; /* Gray-100 */
               }
             `}
           </style>
           <Sidebar />
         </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col flex-grow bg-green-500">
          {/* Tab */}
          <div className="sticky top-0 left-0 w-full z-10">
            <Tab />
          </div>

          {/* PatientList */}
          <div className="flex-grow  ">
            <PatientList />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PatientListPage;
