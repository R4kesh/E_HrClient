// import React from 'react'
// import Tooltip from './Dashboard/ToolTip';
// import TooltipNew from './Dashboard/ToolTipnew';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';


// function LandingDashboardContent() {
//   return (
//     <div >
      
//          <main className="ml-4 -mt-24">
//         <header className="flex justify-between items-center">
          
         
//         </header>

//         {/* Cards Section */}
//         <div>
//   {/* First Row */}
//   <div className="grid grid-cols-6">
//     <div className="group hover:scale-110 transition-transform duration-300 ">
//     <span className="absolute mt-44 ml-24 rounded-full bg-red-600 py-1 px-1 text-xs text-white">
//     15
//   </span>
//       <TooltipNew 
//    icon={faDoorOpen} 
//    style={{ color: '#15579d', fontSize: '2rem' }} 
     
// // img="https://cdn-icons-png.flaticon.com/512/3230/3230599.png"
//   title="Priority" 
//         value="Priority levels can be used to arrange the patient list in the EHR, ensuring that the most critical cases are seen first. " 
//       />

//   <FontAwesomeIcon icon={faDoorOpen} style={{ color: '#15579d', fontSize: '2rem' }} />

    
//     </div>
//     <div className="group hover:scale-110 transition-transform duration-300">
//     <span className="absolute mt-44 ml-24 rounded-full bg-red-600 py-1 px-1 text-xs text-white">
//     22
//   </span>
//       <TooltipNew 
//       icon={faDoorOpen} 
//       style={{ color: '#15579d', fontSize: '2rem' }} 
//       // img="https://cdn0.iconfinder.com/data/icons/medical-services-set-2-1/64/x-17-512.png"
//         title="Patients" 
//         value="The total number of individuals receiving healthcare services in the system, currently at 100." 
//       />
//     </div>
//     <div className="group hover:scale-110 transition-transform duration-300">
//     <span className="absolute mt-44 ml-24 rounded-full bg-red-600 py-1 px-1 text-xs text-white">
//     25
//   </span>
//       <TooltipNew 
//       icon={faDoorOpen} 
//       style={{ color: '#15579d', fontSize: '2rem' }} 
//       // img={"https://cdn-icons-png.flaticon.com/512/4138/4138912.png"}
//         title="Docs & image" 
//         value="The number of medical devices connected or being tracked within the system, currently at 40." 
//       />
//     </div>
//     <div className="group hover:scale-110 transition-transform duration-300">
//       <TooltipNew 
//       icon={faDoorOpen} 
//       style={{ color: '#15579d', fontSize: '2rem' }} 
//       // img={"https://cdn-icons-png.flaticon.com/512/5220/5220369.png"}
//         title="Programs" 
//         value="The total number of healthcare programs or initiatives actively running in the system, currently at 125." 
//       />
//     </div>

//     {/* Row 2 */}
//     <div className="group hover:scale-110 transition-transform duration-300">
//       <TooltipNew 
//       icon={faDoorOpen} 
//       style={{ color: '#15579d', fontSize: '2rem' }} 
//       // img={"https://cdn-icons-png.flaticon.com/512/2221/2221756.png"}
//         title="Charge Slips" 
//         value="Documents that capture the details of services provided to patients for billing purposes." 
//       />
//     </div>
//     <div className="group hover:scale-110 transition-transform duration-300">
//       <TooltipNew 
//       icon={faDoorOpen} 
//       style={{ color: '#15579d', fontSize: '2rem' }} 
//       // img={"https://cdn-icons-png.flaticon.com/512/8489/8489916.png"}
//         title="Open Items" 
//         value="Tasks or items that are pending action or resolution in the system." 
//       />
      
//     </div>
//   </div>

//   {/* Second Row */}
//   <div className="grid grid-cols-6 -mt-64">
//     <div className="group hover:scale-110 transition-transform duration-300">
   
//       <TooltipNew 
//       icon={faDoorOpen} 
//       style={{ color: '#15579d', fontSize: '2rem' }} 
//       // img={"https://cdn-icons-png.flaticon.com/512/11902/11902792.png"}
//         title="Held" 
//         value="Items or processes that are temporarily on hold, awaiting further action." 
//       />
      
//     </div>
//     <div className="group hover:scale-110 transition-transform duration-300">
//       <TooltipNew 
//       icon={faDoorOpen} 
//       style={{ color: '#15579d', fontSize: '2rem' }} 
//       // img={"https://cdn-icons-png.flaticon.com/512/9745/9745691.png"}
//         title="Health Watcher" 
//         value="A tool to monitor and track key health metrics and alerts for patients." 
//       />
//     </div>

//     {/* Row 3 */}
//     <div className="group hover:scale-110 transition-transform duration-300">
//       <TooltipNew 
//       icon={faDoorOpen} 
//       style={{ color: '#15579d', fontSize: '2rem' }} 
//       // img={'https://vynamic.com/content/uploads/sites/4/2023/07/InteropEHR.png'}
//         title="Inbound CIE" 
//         value="Incoming clinical information exchange data being processed in the system." 
//       />
//     </div>
//     <div className="group hover:scale-110 transition-transform duration-300">
//     <span className="absolute mt-44 ml-24 rounded-full bg-red-600 py-1 px-1 text-xs text-white">
//     18
//   </span>
//       <TooltipNew 
//       icon={faDoorOpen} 
//       style={{ color: '#15579d', fontSize: '2rem' }} 
//       // img={"https://cdn-icons-png.flaticon.com/512/8802/8802461.png"}
//         title="Messages" 
//         value="Secure communication between healthcare providers and patients or staff members." 
//       />
//     </div>
//     <div className="group hover:scale-110 transition-transform duration-300">
//       <TooltipNew 
//       icon={faDoorOpen} 
//       style={{ color: '#15579d', fontSize: '2rem' }} 
//       // img={'https://cdn-icons-png.flaticon.com/512/1687/1687065.png'}
//         title="Pharmacy Requests" 
//         value="Requests submitted for prescription refills or medication-related services." 
//       />
       
//     </div>
//     <div className="group hover:scale-110 transition-transform duration-300">
//       <TooltipNew 
//       icon={faDoorOpen} 
//       style={{ color: '#15579d', fontSize: '2rem' }} 
//       // img={"https://cdn-icons-png.flaticon.com/512/3974/3974877.png"}
//         title="Prescriptions" 
//         value="Details of medications prescribed to patients, currently managed in the system." 
//       />
//     </div>
//   </div>
// </div>


//         {/* Statistics and Table */}
//         <div className="grid grid-cols-3 gap-4 mt-8">
//           <div className="col-span-2 bg-white p-4 rounded-lg shadow">
//             <h2 className="font-bold text-lg">Statistics</h2>
//             <div className="mt-4 h-48 bg-gray-400 rounded animate-pulse"></div>
//           </div>
//           <div className="bg-white p-4 rounded-lg shadow">
//             <h2 className="font-bold text-lg">Total Monitored Check-ins</h2>
//             <div className="mt-4 h-48 bg-gray-400 rounded animate-pulse"></div>
//           </div>
//         </div>

//         {/* Patients Table */}
//         <div className="mt-8 bg-white p-4 rounded-lg shadow">
//           <h2 className="font-bold text-lg mb-4">Patients</h2>
//           <table className="w-full border-collapse border border-gray-300">
//             <thead>
//               <tr className="bg-gray-100">
//                 <th className="border border-gray-300 p-2">Patient ID</th>
//                 <th className="border border-gray-300 p-2">Patient Name</th>
//                 <th className="border border-gray-300 p-2">Unmonitored Check-ins</th>
//                 <th className="border border-gray-300 p-2">Total Monitoring</th>
//                 <th className="border border-gray-300 p-2">Provider Name</th>
//                 <th className="border border-gray-300 p-2">Alerts</th>
//               </tr>
//             </thead>
//             <tbody>
//               {[
//                 { id: "PT001", name: "Michael Scott", unmonitored: 25, total: 60, provider: "Dr. Michael", alert: "Abnormal" },
//                 { id: "PT002", name: "Dwight Schrute", unmonitored: 20, total: 50, provider: "Dr. Dwight", alert: "Normal" },
//                 { id: "PT003", name: "Jim Halpert", unmonitored: 41, total: 45, provider: "Dr. Jim", alert: "Abnormal" },
//               ].map((patient) => (
//                 <tr key={patient.id} className="hover:bg-gray-100">
//                   <td className="border border-gray-300 p-2">{patient.id}</td>
//                   <td className="border border-gray-300 p-2">{patient.name}</td>
//                   <td className="border border-gray-300 p-2">{patient.unmonitored}</td>
//                   <td className="border border-gray-300 p-2">{patient.total}</td>
//                   <td className="border border-gray-300 p-2">{patient.provider}</td>
//                   <td className="border border-gray-300 p-2">{patient.alert}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//       </main>
//     </div>
//   )
// }

// const Card = ({ title, value }) => (
//     <div className="bg-white p-6 rounded-lg shadow text-center">
//       <h3 className="text-lg font-semibold">{title}</h3>
//       <p className="text-3xl font-bold mt-2">{value}</p>
//     </div>
//   );

  
// export default LandingDashboardContent


// Importing dependencies
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDoorOpen,
  faUserInjured,
  faFileAlt,
  faHeartbeat,
  faFileInvoice,
  faTasks,
  faPauseCircle,
  faFlag,
  faFileMedicalAlt,
  faEnvelope,
  faPrescriptionBottleAlt,
  faPills,
  faExclamationTriangle,
  faStethoscope
  
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const TooltipNew = ({ title, value, icon, style }) => {
  return (
    <StyledWrapper>
      <div className="item-hints">
        <div className="hint" data-position={4}>
          <FontAwesomeIcon icon={icon} style={style} className="hint-dot" />
          <div className="hint-content do--split-children">
            <p>{value}</p>
          </div>
        </div>
        <span className="hint-title">{title}</span>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .item-hints {
    cursor: pointer;
    text-align: center;
  }
  .hint-dot {
    font-size: 3rem;
    color: #15579d;
  }
  .hint-content {
    visibility: hidden;
    opacity: 0;
    background: #fff;
    border: 1px solid #ccc;
    padding: 10px;
    position: absolute;
    z-index: 10;
    margin-top: 10px;
    width: 200px;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }
  .hint:hover .hint-content {
    visibility: visible;
    opacity: 1;
  }
  .hint-title {
    margin-top: 8px;
    display: block;
    font-size: 1rem;
    color: #333;
  }
`;

function LandingDashboard() {
  const tooltipData = [
    { title: "Priority", value: "Arrange patient list by criticality.", icon: faFlag },
    { title: "Patients", value: "Number of individuals in the system.", icon: faUserInjured },
    { title: "Docs & Images", value: "Medical documents and images managed.", icon: faFileAlt },
    { title: "Programs", value: "Active healthcare programs.", icon: faHeartbeat },
    { title: "Charge Slips", value: "Billing documents for patient services.", icon: faFileInvoice },
    { title: "Open Items", value: "Pending tasks in the system.", icon: faTasks },
    { title: "Held", value: "Processes temporarily on hold.", icon: faPauseCircle },
    { title: "Health Watcher", value: "Monitor key health metrics.", icon: faStethoscope },
    { title: "Inbound CIE", value: "Processing incoming clinical data.", icon: faFileMedicalAlt },
    { title: "Messages", value: "Secure communication in the system.", icon: faEnvelope },
    { title: "Pharmacy Requests", value: "Requests for medication services.", icon: faPrescriptionBottleAlt },
    { title: "Prescriptions", value: "Medication details for patients.", icon: faPills },
  ];

  return (
    <div className="p-4">
      <main className="mt-2">
        <header className="flex justify-between items-center mb-8">
          {/* <h1 className="text-2xl font-bold">Dashboard Overview</h1> */}
        </header>

        {/* Cards Section */}
        <div className="grid grid-cols-4 gap-6 gap-y-10">
          {tooltipData.map((item, index) => (
            <div
              key={index}
              className="group hover:scale-105 transition-transform duration-300 text-center"
            >
              <TooltipNew
                title={item.title}
                value={item.value}
                icon={item.icon}
                style={{ fontSize: "3rem", color: "#15579d" }}
              />
            </div>
          ))}
        </div>



        
        {/* Statistics and Table */}
        <div className="grid grid-cols-3 gap-4 mt-14">
           <div className="col-span-2 bg-white p-4 rounded-lg shadow">
            <h2 className="font-bold text-lg">Statistics</h2>
             <div className="mt-4 h-48 bg-gray-400 rounded animate-pulse"></div>
          </div>
           <div className="bg-white p-4 rounded-lg shadow">
             <h2 className="font-bold text-lg">Total Monitored Check-ins</h2>
             <div className="mt-4 h-48 bg-gray-400 rounded animate-pulse"></div>
           </div>
        </div>

        {/* Patients Table */}
         <div className="mt-8 bg-white p-4 rounded-lg shadow">
           <h2 className="font-bold text-lg mb-4">Patients</h2>
          <table className="w-full border-collapse border border-gray-300">
             <thead>
               <tr className="bg-gray-100">
                 <th className="border border-gray-300 p-2">Patient ID</th>
                 <th className="border border-gray-300 p-2">Patient Name</th>
                 <th className="border border-gray-300 p-2">Unmonitored Check-ins</th>
                 <th className="border border-gray-300 p-2">Total Monitoring</th>
                 <th className="border border-gray-300 p-2">Provider Name</th>
                 <th className="border border-gray-300 p-2">Alerts</th>
               </tr>
           </thead>
            <tbody>
              {[
                { id: "PT001", name: "Michael Scott", unmonitored: 25, total: 60, provider: "Dr. Michael", alert: "Abnormal" },
                { id: "PT002", name: "Dwight Schrute", unmonitored: 20, total: 50, provider: "Dr. Dwight", alert: "Normal" },
                { id: "PT003", name: "Jim Halpert", unmonitored: 41, total: 45, provider: "Dr. Jim", alert: "Abnormal" },
              ].map((patient) => (
                <tr key={patient.id} className="hover:bg-gray-100">
                  <td className="border border-gray-300 p-2">{patient.id}</td>
                  <td className="border border-gray-300 p-2">{patient.name}</td>
                  <td className="border border-gray-300 p-2">{patient.unmonitored}</td>
                  <td className="border border-gray-300 p-2">{patient.total}</td>
                  <td className="border border-gray-300 p-2">{patient.provider}</td>
                  <td className="border border-gray-300 p-2">{patient.alert}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default LandingDashboard;
