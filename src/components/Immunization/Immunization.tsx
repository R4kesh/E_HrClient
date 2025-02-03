import React from 'react'
import { FaSave, FaTimes, FaTrash, FaPrint } from "react-icons/fa";

const Immunization = () => {
    return (
        <div className="max-w-7xl mx-auto p-2 bg-gray-100">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-2xl font-bold text-[#002D62]">Immunization Record</h1>
            <div className="flex gap-2">
      {/* Save Button */}
      <button className="bg-blue-300 text-white px-2 h-5 rounded flex items-center gap-2 hover:bg-blue-600">
        <FaSave className="text-base" /> Save
      </button>

      {/* Cancel Button */}
      <button className="bg-gray-500 text-white px-2 h-5  rounded flex items-center gap-2 hover:bg-gray-600">
        <FaTimes className="text-lg" /> Cancel
      </button>

      {/* Delete Button */}
      <button className="bg-red-300 text-white px-2 py-2 h-5 rounded flex items-center gap-2 hover:bg-red-600">
        <FaTrash className="text-lg" /> Delete
      </button>

      {/* Print Button */}
      <button className="bg-green-300 text-white px-2 py-2 h-5 rounded flex items-center gap-2 hover:bg-green-600">
        <FaPrint className="text-lg" /> Print
      </button>
    </div>
          </div>
    
          {/* Top Section */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            {/* Immunization Name */}
            <div>
              <label className="block text-sm font-semibold text-[#1c4b85] mb-1">Immunization Name</label>
              <input
                type="text"
                placeholder="Enter name"
                className="w-full placeholder-[#6786b4] border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
    
            {/* Group Name */}
            <div>
              <label className="block text-sm font-semibold text-[#1c4b85] mb-1">Group Name</label>
              <select className="w-full border text-[#3972c7] rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500">
                <option value="">Select Group Name</option>
                <option value="group1">Group 1</option>
                <option value="group2">Group 2</option>
              </select>
            </div>
          </div>
    
          {/* Card Sections */}
          <div className="space-y-4">
            {/* Administration Card */}
            <div className="bg-white p-4 rounded shadow-md">
              <h2 className="text-lg text-[#002D62] font-bold mb-3">Administration</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <input type="checkbox" id="stateRegistries" />
                  <label htmlFor="stateRegistries" className="ml-2 text-sm text-gray-700">
                    Exclude from State Registries
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="immunizationReport" />
                  <label htmlFor="immunizationReport" className="ml-2 text-sm text-gray-700">
                    Exclude from Immunization Report
                  </label>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1c4b85] mb-1">Date/Time Given</label>
                  <input
                    type="datetime-local"
                    className="w-full border text-[#3972c7] rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1c4b85] mb-1">Facility/Location</label>
                  <select className="w-full text-[#3972c7] border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500">
                    <option value="">Select Facility/Location</option>
                    <option value="facility1">Facility 1</option>
                    <option value="facility2">Facility 2</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1c4b85] mb-1">Administering Clinician</label>
                  <select className="w-full text-[#3972c7] border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500">
                    <option value="">Select Clinician</option>
                    <option value="clinician1">Clinician 1</option>
                    <option value="clinician2">Clinician 2</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1c4b85] mb-1">Ordering Provider</label>
                  <select className="w-full text-[#3972c7] border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500">
                    <option value="">Select Provider</option>
                    <option value="provider1">Provider 1</option>
                    <option value="provider2">Provider 2</option>
                  </select>
                </div>
                {/* Add the remaining fields similarly */}
              </div>
            </div>
    
            {/* Medication and Procedure Details */}
            <div className="bg-white p-4 rounded shadow-md">
              <h2 className="text-lg text-[#002D62] font-bold mb-3">Medication and Procedure Details</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {/* Dosage */}
                <div>
                  <label className="block text-sm font-semibold text-[#1c4b85] mb-1">Dosage</label>
                  <input
                    type="text"
                    placeholder="Enter dosage"
                    className="w-full placeholder-[#6786b4] border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div className="col-span-2 flex items-center">
                  <label className="text-sm text-gray-700 mr-4">Private</label>
                  <input type="radio" name="fundType" className="mr-2" />
                  <label className="text-sm text-gray-700 mr-4">VFC</label>
                  <input type="radio" name="fundType" />
                </div>
                {/* Manufacturer, Lot Number */}
                {/* Add remaining fields */}
              </div>
            </div>
    
            {/* Vaccine Information */}
            <div className="bg-white p-4 rounded shadow-md">
              <h2 className="text-lg text-[#002D62] font-bold mb-3">Vaccine Information</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#1c4b85] mb-1">
                    Use Custom Information Sheet
                  </label>
                  <input
                    type="date"
                    className="w-full text-[#3972c7] border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1c4b85] mb-1">Reaction/Adverse Event</label>
                  <input
                    type="text"
                    placeholder="Enter reaction details"
                    className="w-full placeholder-[#6786b4] border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Immunization
