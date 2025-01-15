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

import React from 'react';
import { Sidebar } from '../components/Sidebar';
import Form from '../components/Form';
import PatientList from '../components/PatientList';
import Tab from '../components/Tab';

const PatientListPage = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-white">
      {/* Sidebar on the left */}
      <div className="w-full h-screen md:w-64 bg-white">
        <Sidebar />
      </div>

      {/* Main content area */}
      <div className="flex-grow  bg-green-500 relative">
        {/* Tab component at the top-left */}
        <div className="absolute top-0 left-0 w-full">
          <Tab />
        </div>

        {/* PatientList below the Tab */}
        <div className="mt-8"> {/* Add margin to make space for Tab */}
          <PatientList />
        </div>
      </div>
    </div>
  );
};

export default PatientListPage;

