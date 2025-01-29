

  import React from 'react'
  
  const DiabetesComponent = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Diabetes Management</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Blood Sugar Level</label>
            <select className="mt-1 block w-full bg-gray-50 border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded-lg leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-sm">
              <option value="">Select Blood Sugar Level</option>
              <option value="low">Low</option>
              <option value="normal">Normal</option>
              <option value="high">High</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Medication</label>
            <input
              type="text"
              className="mt-1 block w-full bg-gray-50 border border-gray-300 text-gray-700 py-2 px-3 rounded-lg leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-sm"
              placeholder="Enter medication"
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
  
  export default DiabetesComponent
  