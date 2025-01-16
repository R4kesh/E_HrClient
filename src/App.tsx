// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Sidebar } from './components/Sidebar'; // Make sure Sidebar is in the correct directory
// import Form from './components/Form'; // Make sure Form is in the correct directory
// import PatientList from './components/PatientList';
// import DoctorVitalsForm from './components/DoctorVitalForm';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         {/* Routes for the commented pages */}
//         <Route path="/:id" element={<Sidebar/>} />
//         <Route path="/form" element={<Form />} />
//         <Route path="/about" element={<h2>About Us</h2>} />
//         <Route path="/services" element={<h2>Our Services</h2>} />
//         <Route path="/contact" element={<h2>Contact Us</h2>} />
//         <Route path="/patientlist" element={< PatientList/>}/>
//         <Route path="/vitals/:id" element={< DoctorVitalsForm/>}/>

//       </Routes>
//     </Router>
//   );
// };

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route,Switch } from 'react-router-dom';

// import { Sidebar } from './components/Sidebar'; 
import Form from './components/Form'; // Make sure Form is in the correct directory
import PatientList from './components/PatientList';
import DoctorVitalsForm from './components/DoctorVitalForm';

import { TabsProvider } from './Context/TabProvider';
import Navbar from './components/Navbar/Navbar';
import InceptionSkin from './components/InceptionSkin';
import InceptionTabs from './components/InceptionTab';
import ROSSection from './components/ReviewSystem';
import Sidebar from './components/Sidebar/Sidebar';
import DashboardPage from './pages/DashboardPage';
import FormPage from './pages/FormPage';
import PatientListPage from './pages/PatientListPage';
import Tab from './components/Tab';
import VitalsPage from './pages/VitalsPage';
import InceptionPage from './pages/InceptionPage';
import UpperTab from './components/UpperTab';
import LandingDashboard from './pages/LandingDashboard';
import ReviewSystemPage from './pages/ReviewSystemPage';
import LabOrdersPage from './pages/LabOrdersPage';

function App() {
  return (
    <TabsProvider>
      <Router>
        <Navbar />
        <UpperTab />
        {/* <main className="container mx-auto p-6 sm:p-10"> */}
          <Routes>
          <Route path="/" element={<LandingDashboard/>} />
          <Route path="/dashboard/:id" element={<DashboardPage/>} />

         <Route path="/form" element={<FormPage />} />
         
         <Route path="/patientlist" element={< PatientListPage/>}/>


         <Route path="/vitals/:id" element={< VitalsPage/>}/>
         <Route path="/inception/:id" element={<InceptionPage/>}/>
         <Route path="/reviewsystem/:id" element={<ReviewSystemPage/>}/>
         <Route path="/LabOrders/:id" element={< LabOrdersPage/>}/>


          </Routes>
        {/* </main> */}
      </Router>
    </TabsProvider>
  );
}

export default App;
