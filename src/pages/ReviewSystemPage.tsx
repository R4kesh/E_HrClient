import React from 'react'
import { Sidebar } from '../components/Sidebar/Sidebar'
import Tab from '../components/Tab'
import ROSSection from '../components/ReviewSystem'

const ReviewSystemPage = () => {
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
      <div className="mt-8 "> 
        <ROSSection/>
      </div>
    </div>
  </div>
  )
}

export default ReviewSystemPage
