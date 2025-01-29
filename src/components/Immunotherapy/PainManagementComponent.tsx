
  import React from 'react'
  
  const PainManagementComponent = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Pain Management</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Pain Level</label>
          <select className="mt-1 block w-full bg-gray-50 border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded-lg leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-sm">
            <option value="">Select Pain Level</option>
            <option value="mild">Mild</option>
            <option value="moderate">Moderate</option>
            <option value="severe">Severe</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Treatment Plan</label>
          <input
            type="text"
            className="mt-1 block w-full bg-gray-50 border border-gray-300 text-gray-700 py-2 px-3 rounded-lg leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-sm"
            placeholder="Enter treatment plan"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Notes</label>
          <textarea
            className="mt-1 block w-full bg-gray-50 border border-gray-300 text-gray-700 py-2 px-3 rounded-lg leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-sm"
            rows="4"
            placeholder="Add notes"
          />
        </div>
      </div>
    </div>
    )
  }
  
  export default PainManagementComponent
  