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
import AllergiesPage from './pages/AllergiesPage';
import SamplePage from './pages/SamplePage';
import { PatientTabProvider } from './Context/PatientTabProvider';
import PatientTabs from './components/patientTab/PatientTab';
import ActivePatient from './components/activetab/ActivePatient';
import Medicationpage from './pages/Medicationpage';
import HealthWatcherPage from './pages/HealthWatcherPage';
import FamilyConnectionPage from './pages/FamilyConnectionPage';
import RefferalPage from './pages/RefferalPage';
import ProblemsPage from './pages/ProblemsPage';
import ImplimentationDevicePage from './pages/ImplimentableDevicePage';
import QuickMemoPage from './pages/QuickMemoPage';
import ResultPage from './pages/ResultPage';
import RiskFactorPage from './pages/RiskFactorPage';
import EncounterPage from './pages/EncounterPage';
import ImmunizationPage from './pages/ImmunizationPage';
import ImmunizationMain from './components/Immunization/ImmunizationMain';

import NotesPage from './pages/NotesPage';
import Sidebarr from './components/Sidebar'
import MessagePage from './pages/MessagePage';
function App() {
  return (
    <PatientTabProvider> 
    <TabsProvider>
   
      <Router>
        <Navbar />
        <UpperTab />
        {/* <PatientTabs/> */}
        {/* <ActivePatient/> */}
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
         <Route path="/allergies/:id" element={< AllergiesPage/>}/>
         <Route path="/sample/:id" element={< SamplePage/>}/>
         <Route path="/medication/:id" element={< Medicationpage/>}/>
         <Route path="/healthWatcher/:id" element={< HealthWatcherPage/>}/>
         <Route path="/familyConnection/:id" element={< FamilyConnectionPage/>}/>
         <Route path="/refferal/:id" element={<RefferalPage/>}/>
         <Route path="/problems/:id" element={<ProblemsPage/>}/>
         <Route path="/implimentableDevice/:id" element={<ImplimentationDevicePage/>}/>
         <Route path="/quickMemo/:id" element={<QuickMemoPage/>}/>

         <Route path="/result/:id" element={<ResultPage/>}/>
         <Route path="/riskfactor/:id" element={<RiskFactorPage/>}/>
         <Route path="/encounter/:id" element={<EncounterPage/>}/>
         <Route path="/immunizations/:id" element={<ImmunizationPage/>}/>
         <Route path="/notes/:id" element={<NotesPage/>}/>
         <Route path="/sidebar" element={<Sidebarr/>}/>
         <Route path="/message/:id" element={<MessagePage/>}/>

          </Routes>
        {/* </main> */}
      </Router>
      </TabsProvider>
      </PatientTabProvider>
  );
}

export default App;
