import React from 'react'
import Tooltip from './Dashboard/ToolTip';

function LandingDashboardContent() {
  return (
    <div>
      
         <main className="ml-4 p-8">
        <header className="flex justify-between items-center">
          
         
        </header>

        {/* Cards Section */}
        {/* <div className="grid grid-cols-4 gap-4 mt-8">
          <Tooltip title="Providers" value="60" />
          <Tooltip title="Patients" value="100" />
          <Tooltip title="Devices" value="40" />
          <Card title="Programs" value="125" />
        


        </div> */}

<div className="grid grid-cols-4 gap-4 mt-8">
  <RhombusTooltip title="Providers" value="60" />
  <RhombusTooltip title="Patients" value="100" />
  <RhombusTooltip title="Devices" value="40" />
  <RhombusCard title="Programs" value="125" />
</div>

        {/* Statistics and Table */}
        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="col-span-2 bg-white p-4 rounded-lg shadow">
            <h2 className="font-bold text-lg">Statistics</h2>
            <div className="mt-4 h-48 bg-gray-200 rounded animate-pulse"></div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="font-bold text-lg">Total Monitored Check-ins</h2>
            <div className="mt-4 h-48 bg-gray-200 rounded animate-pulse"></div>
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
  )
}

const Card = ({ title, value }) => (
    <div className="bg-white p-6 rounded-lg shadow text-center">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );

  const RhombusTooltip = ({ title, value }) => (
    <div className="relative w-24 h-24 transform rotate-45 bg-gradient-to-r from-blue-400 to-blue-600 shadow-md flex items-center justify-center">
      <div className="transform -rotate-45 text-white text-center">
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </div>
  );
  
  /* RhombusCard Component */
  const RhombusCard = ({ title, value }) => (
    <div className="relative w-24 h-24 transform rotate-45 bg-gradient-to-r from-green-400 to-green-600 shadow-md flex items-center justify-center">
      <div className="transform -rotate-45 text-white text-center">
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </div>
  );


  
export default LandingDashboardContent