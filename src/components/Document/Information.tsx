
import React from 'react';

const Information = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center ">
      <div className="bg-white shadow-lg rounded-2xl w-full  -mt-48">
        {/* Header */}
        <div className="bg-blue-600 text-white p-4 rounded-t-2xl text-center text-2xl font-semibold">
          Document Information
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-3 gap-6 p-6">
          {/* Row 1 */}
          <div>
            <label className="block font-medium mb-1">Provider:</label>
            <input type="text" value="SMITH, TRACY, MD" readOnly className="w-full border rounded-lg px-3 py-2 bg-gray-50 focus:outline-none" />
          </div>
          <div>
            <label className="block font-medium mb-1">Dept:</label>
            <input type="text" value="ARCHES MEDICAL CENTER" readOnly className="w-full border rounded-lg px-3 py-2 bg-gray-50 focus:outline-none" />
          </div>
          <div>
            <label className="block font-medium mb-1">Signers:</label>
            <select className="w-full border rounded-lg px-3 py-2 focus:outline-none">
              <option>-</option>
            </select>
          </div>

          {/* Row 2 */}
          <div>
            <label className="block font-medium mb-1">Template:</label>
            <select className="w-full border rounded-lg px-3 py-2 focus:outline-none">
              <option>-</option>
            </select>
          </div>
          <div>
            <label className="block font-medium mb-1">Folder:</label>
            <input type="text" value="Docs" readOnly className="w-full border rounded-lg px-3 py-2 bg-gray-50 focus:outline-none" />
          </div>
          <div>
            <label className="block font-medium mb-1">Doc. Type:</label>
            <select className="w-full border rounded-lg px-3 py-2 focus:outline-none">
              <option>-</option>
            </select>
          </div>

          {/* Row 3 */}
          <div>
            <label className="block font-medium mb-1">ICD:</label>
            <input type="text" placeholder="Click here to add codes" className="w-full border rounded-lg px-3 py-2 focus:outline-none" />
          </div>
          <div>
            <label className="block font-medium mb-1">Date:</label>
            <input type="date" value="2025-01-17" className="w-full border rounded-lg px-3 py-2 focus:outline-none" />
          </div>
          <div>
            <label className="block font-medium mb-1">Status:</label>
            <input type="text" value="New" readOnly className="w-full border rounded-lg px-3 py-2 bg-gray-50 focus:outline-none" />
          </div>

          {/* Row 4 */}
          <div>
            <label className="block font-medium mb-1">Name:</label>
            <input type="text" className="w-full border rounded-lg px-3 py-2 focus:outline-none" />
          </div>
          <div>
            <label className="block font-medium mb-1">Description:</label>
            <input type="text" className="w-full border rounded-lg px-3 py-2 focus:outline-none" />
          </div>
        </div>

        {/* Additional Fields */}
        <div className="grid grid-cols-2 gap-6 px-6">
          <div>
            <label className="block font-medium mb-1">Document Ext:</label>
            <input type="text" value="TEXT" readOnly className="w-full border rounded-lg px-3 py-2 bg-gray-50 focus:outline-none" />
          </div>
          <div>
            <label className="block font-medium mb-1">Size:</label>
            <input type="text" value="0 bytes" readOnly className="w-full border rounded-lg px-3 py-2 bg-gray-50 focus:outline-none" />
          </div>
        </div>

        {/* Checkboxes */}
        <div className="grid grid-cols-3 gap-6 px-6 mt-4">
          <label className="inline-flex items-center">
            <input type="checkbox" className="mr-2" /> Hold
          </label>
          <label className="inline-flex items-center">
            <input type="checkbox" className="mr-2" /> High Priority
          </label>
          <label className="inline-flex items-center">
            <input type="checkbox" className="mr-2" /> Assistant
          </label>
          <label className="inline-flex items-center">
            <input type="checkbox" className="mr-2" /> Confidential - Only discuss w/patient
          </label>
          <label className="inline-flex items-center">
            <input type="checkbox" className="mr-2" /> Patient Viewable
          </label>
        </div>
      </div>
    </div>
  );
};

export default Information;

