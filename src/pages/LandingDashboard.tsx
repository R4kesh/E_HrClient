import React from 'react'
import { Sidebar } from '../components/Sidebar'
import Footer from '../components/Footer/Footer'
import LandingDashboardContent from '../components/LandingDashboardContent'

function LandingDashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Wrapper for Sidebar and Main Content */}
      <div className="flex flex-grow">
        {/* Sidebar */}
        <div className="w-full md:w-64 bg-white h-auto md:h-full">
          <div className="h-full overflow-y-auto">
            <Sidebar />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col flex-grow bg-gray-200">
          {/* Tab */}
          <div className="sticky top-0 left-0 w-full z-10">
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