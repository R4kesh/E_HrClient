

import React, { useState,useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams } from "react-router-dom";
import { useTabs } from "../../Context/TabProvider";

const HealthWatcher = () => {
  const { id } = useParams(); 
  const [status, setStatus] = useState('');
  const [frequency, setFrequency] = useState('Days');
  const [patientViewable, setPatientViewable] = useState(false);
  const [completedHealthWatchers] = useState([
    { title: 'Blood Test Reminder', status: 'Overdue', dueDate: '06/12/2025' },
    { title: 'Check-up Appointment', status: 'Complete', dueDate: '05/12/2025' },
    { title: 'X-Ray Follow-up', status: 'Complete', dueDate: '08/03/2025' },
    { title: 'Vaccination', status: 'Complete', dueDate: '07/28/2025' },
  ]);
  const { addTab } = useTabs();


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  useEffect(() => {
    addTab({ id: "/healthWatcher", name: "Health Watcher", path: `/healthWatcher/${id}` });
  }, [addTab]);

  return (
    <div className="min-h-screen bg-gradient-to-r py-6 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Left Column: Health Watcher Form */}
        <motion.div
          className="col-span-2 bg-white shadow-xl rounded-lg p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl font-bold text-[#002D62] text-center mb-4">Health Watcher Form</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold text-[#1c4b85] mb-1 block">Provider:</label>
                <select name="provider" className="w-full p-3 text-[#3972c7] bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400 focus:outline-none">
                  <option>Other Provider</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold text-[#1c4b85] mb-1 block">Type:</label>
                <select name="type" className="w-full p-3 text-[#3972c7] bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400 focus:outline-none">
                  <option>Reminder</option>
                  <option>Question</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold text-[#1c4b85] mb-1 block">Due:</label>
                <input type="date" className="w-full p-3 text-[#3972c7] bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400 focus:outline-none" />
                <span className="text-xs text-[#3972c7]">+3wks, +6wks, +9wks, +12mos</span>
              </div>
              <div>
                <label className="text-sm font-semibold text-[#1c4b85] mb-1 block">Frequency:</label>
                <select value={frequency} onChange={(e) => setFrequency(e.target.value)} className="w-full p-3 bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400 focus:outline-none">
                  <option>Days</option>
                  <option>Weeks</option>
                  <option>Months</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold text-[#1c4b85] mb-1 block">Text:</label>
              <textarea name="text" className="w-full p-3 bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400 focus:outline-none"></textarea>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold text-[#1c4b85] mb-1 block">Change Status:</label>
                <select value={status} onChange={(e) => setStatus(e.target.value)} className="w-full p-3 text-[#3972c7] bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400 focus:outline-none">
                  <option>Open</option>
                  <option>Advised</option>
                  <option>Ordered Booked</option>
                  <option>In Progress</option>
                  <option>Completed</option>
                  <option>Cancelled</option>
                  <option>Non Compliant</option>
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={patientViewable}
                  onChange={() => setPatientViewable(!patientViewable)}
                  className="rounded-md focus:ring-teal-400"
                />
                <span className="text-sm font-semibold text-[#1c4b85]">Patient Viewable</span>
              </div>
            </div>

            <div>
              <button type="submit" className="w-full py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-teal-400">
                Save Health Watcher
              </button>
            </div>
          </form>
        </motion.div>

        {/* Right Column: Completed Health Watchers List */}
        <div className="bg-white shadow-xl rounded-lg p-6">
          <h2 className="text-2xl font-medium text-[#002D62] mb-4 text-center">Completed Health Watchers</h2>
          <div className="space-y-4">
            {completedHealthWatchers.map((entry, index) => (
              <div
                key={index}
                className="flex justify-between  items-center border-b border-gray-300 pb-3"
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 7V3m8 4V3m-6 8h6m-3 4h3m-6 0H8m-3 0h3M21 21H3m16-3v3M8 18v3"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-[#1c4b85]">{entry.title}</h3>
                    <p className="text-xs text-gray-500">{entry.dueDate}</p>
                  </div>
                </div>
                <span
                  className={`px-3 py-1 text-xs font-medium rounded-md ${
                    entry.status === 'Overdue'
                      ? 'bg-red-500 text-white'
                      : 'bg-green-500 text-white'
                  }`}
                >
                  {entry.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthWatcher;

