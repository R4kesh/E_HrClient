// import React from 'react'

// const NewMessage = () => {
//   return (
//     <div className="flex h-screen bg-gray-50">
//     {/* Contacts Sidebar */}
//     <div className="bg-white shadow-md border-r w-64 p-4">
//       <div className="mb-4">
//         <label htmlFor="contactFilter" className="block text-gray-700 font-medium mb-1">
//           Filter Contacts
//         </label>
//         <select
//           id="contactFilter"
//           className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         >
//           <option value="all">All</option>
//           <option value="user">User</option>
//         </select>
//       </div>
//       <h3 className="text-lg font-medium text-gray-800 mb-2">Contacts</h3>
//       <ul className="space-y-2">
//         <li className="text-gray-600 hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">EHR User Only</li>
//         <li className="text-gray-600 hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">DL-#AcctManagement</li>
//         <li className="text-gray-600 hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">DL-#Appointments</li>
//         <li className="text-gray-600 hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">DL-#Billing</li>
//         {/* Add more contacts */}
//       </ul>
//     </div>

//     {/* Message Details */}
//     <div className="flex-1 p-6">
//       <div className="border-b pb-4 mb-4">
//         <h2 className="text-2xl font-bold text-gray-800">Route To</h2>
//         <div className="mt-4">
//           <label className="inline-flex items-center mr-4">
//             <input
//               type="radio"
//               name="actionType"
//               value="shared"
//               className="form-radio text-blue-500 focus:ring-blue-500"
//             />
//             <span className="ml-2 text-gray-700">Shared Action Item</span>
//           </label>
//           <label className="inline-flex items-center">
//             <input
//               type="radio"
//               name="actionType"
//               value="individual"
//               className="form-radio text-blue-500 focus:ring-blue-500"
//             />
//             <span className="ml-2 text-gray-700">Send Indiv. Action Items</span>
//           </label>
//         </div>
//       </div>

//       <div className="mt-6">
//         <label htmlFor="message" className="block text-lg font-medium text-gray-800 mb-2">
//           Message
//         </label>
//         <textarea
//           id="message"
//           className="w-full h-40 border border-gray-300 rounded px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           placeholder="Enter your message here..."
//         ></textarea>
//       </div>

//       <div className="mt-6">
//         <label htmlFor="routeDate" className="block text-lg font-medium text-gray-800 mb-2">
//           Route Date and Time
//         </label>
//         <p id="routeDate" className="text-gray-700">
//           1/18/2025 01:19 AM
//         </p>
//       </div>

//       <div className="mt-6">
//         <label htmlFor="messageType" className="block text-lg font-medium text-gray-800 mb-2">
//           Message Type
//         </label>
//         <div className="flex items-center">
//           <p className="text-gray-700 mr-2">Exam Room 1 - Patient Read</p>
//           <select
//             id="messageType"
//             className="border border-gray-300 rounded px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <option>Normal</option>
//             {/* Add more options */}
//           </select>
//         </div>
//       </div>

//       <div className="mt-6">
//         <label htmlFor="priority" className="block text-lg font-medium text-gray-800 mb-2">
//           Priority
//         </label>
//         <p id="priority" className="text-gray-700">Normal</p>
//       </div>

//       <div className="mt-6">
//         <label htmlFor="linkedItem" className="block text-lg font-medium text-gray-800 mb-2">
//           Linked/Routed Item
//         </label>
//         <p id="linkedItem" className="text-gray-700">No Item Attached</p>
//       </div>

//       <div className="mt-6">
//         <label htmlFor="patient" className="block text-lg font-medium text-gray-800 mb-2">
//           Patient
//         </label>
//         <p id="patient" className="text-gray-700">AMBROSE, SARA</p>
//       </div>
//     </div>
//   </div>
//   )
// }

// export default NewMessage


import React from 'react';

const NewMessage = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Contacts Sidebar */}
      <aside className="bg-white shadow-lg w-64 p-4 border-r">
        <div className="mb-6">
          <label
            htmlFor="contactFilter"
            className="block text-sm font-semibold text-gray-600 mb-2"
          >
            Filter Contacts
          </label>
          <select
            id="contactFilter"
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          >
            <option value="all">All</option>
            <option value="user">User</option>
          </select>
        </div>

        <h3 className="text-lg font-bold text-gray-800 mb-3">Contacts</h3>
        <ul className="space-y-2">
          <li className="text-gray-700 hover:bg-gray-100 rounded-lg px-3 py-2 cursor-pointer transition">
            EHR User Only
          </li>
          <li className="text-gray-700 hover:bg-gray-100 rounded-lg px-3 py-2 cursor-pointer transition">
            DL-#AcctManagement
          </li>
          <li className="text-gray-700 hover:bg-gray-100 rounded-lg px-3 py-2 cursor-pointer transition">
            DL-#Appointments
          </li>
          <li className="text-gray-700 hover:bg-gray-100 rounded-lg px-3 py-2 cursor-pointer transition">
            DL-#Billing
          </li>
        </ul>
      </aside>

      {/* Message Details */}
      <main className="flex-1 p-6">
        <div className="mb-6 pb-4 border-b">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Route To</h2>
          <div className="flex items-center space-x-6">
            <label className="inline-flex items-center text-gray-700">
              <input
                type="radio"
                name="actionType"
                value="shared"
                className="form-radio text-blue-500 focus:ring-blue-500"
              />
              <span className="ml-2">Shared Action Item</span>
            </label>
            <label className="inline-flex items-center text-gray-700">
              <input
                type="radio"
                name="actionType"
                value="individual"
                className="form-radio text-blue-500 focus:ring-blue-500"
              />
              <span className="ml-2">Send Indiv. Action Items</span>
            </label>
          </div>
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-lg font-semibold text-gray-800 mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            className="w-full h-32 border rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Enter your message here..."
          ></textarea>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="mb-6">
            <label
              htmlFor="routeDate"
              className="block text-lg font-semibold text-gray-800 mb-2"
            >
              Route Date and Time
            </label>
            <p id="routeDate" className="text-gray-700">1/18/2025 01:19 AM</p>
          </div>

          <div className="mb-6">
            <label
              htmlFor="messageType"
              className="block text-lg font-semibold text-gray-800 mb-2"
            >
              Message Type
            </label>
            <div className="flex items-center space-x-4">
              <p className="text-gray-700">Exam Room 1 - Patient Read</p>
              <select
                id="messageType"
                className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              >
                <option>Normal</option>
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="priority"
              className="block text-lg font-semibold text-gray-800 mb-2"
            >
              Priority
            </label>
            <p id="priority" className="text-gray-700">Normal</p>
          </div>

          <div className="mb-6">
            <label
              htmlFor="linkedItem"
              className="block text-lg font-semibold text-gray-800 mb-2"
            >
              Linked/Routed Item
            </label>
            <p id="linkedItem" className="text-gray-700">No Item Attached</p>
          </div>
        </div>

        <div>
          <label
            htmlFor="patient"
            className="block text-lg font-semibold text-gray-800 mb-2"
          >
            Patient
          </label>
          <p id="patient" className="text-gray-700">AMBROSE, SARA</p>
        </div>
      </main>
    </div>
  );
};

export default NewMessage;

