import React from 'react'
import Footer from '../components/Footer/Footer'
import LandingDashboardContent from '../components/LandingDashboardContent'
import Sidebar from '../components/Sidebar'

function LandingDashboard() {
  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Wrapper for Sidebar and Main Content */}
      <div className="flex flex-grow">
        {/* Sidebar */}
        <div className="w-full md:w-64 bg-white h-auto md:h-full">
          <div className="h-full overflow-y-auto"
           style={{
            scrollbarWidth: "thin", // For Firefox
            scrollbarColor: "#d1d5db #f3f4f6", // Thumb and track colors for Firefox
          }}>
            <Sidebar />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col flex-grow bg-gray-100">
          {/* Tab */}
          <div className=" top-0 left-0 w-full z-10">
            {/* <Tab /> */}
          </div>

          {/* PatientList */}
          <div className="flex-grow  ">
            <LandingDashboardContent />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default LandingDashboard