import React from 'react'
import { FaSearch } from "react-icons/fa";


const MessageToPortal = () => {
  return (
    <div className="bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-7xl p-4">
        <div className="flex items-center mb-5">
          {/* Search By Section */}
          <div className="mr-4">
            <h3 className="text-gray-700 font-medium mb-2">Search By</h3>
            <div className="flex items-center space-x-4">
              <label className="flex items-center text-gray-700">
                <input
                  type="radio"
                  name="searchBy"
                  value="patient"
                  className="form-radio text-blue-500 focus:ring-blue-500 mr-2"
                  defaultChecked
                />
                Patient
              </label>
              <label className="flex items-center text-gray-700">
                <input
                  type="radio"
                  name="searchBy"
                  value="responsibleParty"
                  className="form-radio text-blue-500 focus:ring-blue-500 mr-2"
                />
                Responsible Party
              </label>
            </div>
          </div>

          {/* Search Input and Button */}
          <div className="flex-1 flex items-center">
            <input
              type="text"
              placeholder="Search by Patient or Responsible Party"
              className="flex-1 py-2 px-4 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r-md">
              <FaSearch className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <h2 className="text-lg text-[#002D62] font-medium mb-2">Recipients</h2>
            <div className="bg-gray-200 rounded-md p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700 font-medium">Account Name</span>
                <span className="text-gray-700 font-medium">Account Email</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">AMBROSE JUSTIN</span>
                <span className="text-gray-600">DAMROSE@GMAIL.COM</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-lg text-[#002D62] font-medium mb-2">Patient</h2>
            <div className="bg-gray-200 rounded-md p-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-medium">
                  AMBROSE, SARA 05/15/1942 SSN: 528464
                </span>
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
                  Select Patient
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-lg text-[#002D62] font-medium mb-2">Message</h2>
          <textarea
            rows={8}
            className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your message here..."
          ></textarea>
        </div>

        <div className="flex justify-end mt-6">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
            Send
          </button>
          <button className="ml-4 text-gray-700 hover:text-gray-900">Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default MessageToPortal
