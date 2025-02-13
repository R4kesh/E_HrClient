import React from 'react'
import { Sidebar } from '../components/Sidebar/Sidebar'
import Tab from '../components/Tab'
import Footer from '../components/Footer/Footer'
import Problems from '../components/Problems/Problems'

const ProblemsPage = () => {
  return (
    <div className="flex flex-col h-screen bg-white">
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
      <div className="flex flex-col flex-grow ">
        {/* Tab */}
        <div className=" top-0 left-0 w-full z-10">
          <Tab />
        </div>

        {/* PatientList */}
        <div className="flex-grow  ">
<Problems/>

        </div>
      </div>
    </div>

    {/* Footer */}
    <Footer />
  </div>
  )
}

export default ProblemsPage
