import React from 'react'

function LandingDashboardContent() {
  return (
    <div>
         <main className="ml-4 p-8">
        <header className="flex justify-between items-center">
          
         
        </header>

        {/* Cards Section */}
        <div className="grid grid-cols-4 gap-4 mt-8">
          <Card title="Providers" value="60" />
          <Card title="Patients" value="100" />
          <Card title="Devices" value="40" />
          <Card title="Programs" value="125" />
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
export default LandingDashboardContent