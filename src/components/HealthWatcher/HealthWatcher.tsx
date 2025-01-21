import React, { useState } from 'react';
import { motion } from 'framer-motion';

const HealthWatcher = () => {
  const [status, setStatus] = useState('');
  const [frequency, setFrequency] = useState('Days');
  const [patientViewable, setPatientViewable] = useState(false);
  const [completedHealthWatchers, setCompletedHealthWatchers] = useState([
    { title: 'Blood Test Reminder', status: 'Completed', dueDate: '02/01/2025' },
    { title: 'Check-up Appointment', status: 'Completed', dueDate: '03/01/2025' },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-r  py-10 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Left Column: Health Watcher Form (70%) */}
        <motion.div
          className="col-span-2 bg-white shadow-2xl rounded-xl p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-semibold text-gray-800 text-center mb-6">Health Watcher Form</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Two Inputs per Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="form-group">
                <label className="text-lg text-gray-700 font-medium mb-2">Provider:</label>
                <select name="provider" className="w-full p-4 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none">
                  <option>Other Provider</option>
                  {/* Add more options as needed */}
                </select>
              </div>

              <div className="form-group">
                <label className="text-lg text-gray-700 font-medium mb-2">Type:</label>
                <select name="type" className="w-full p-4 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none">
                  <option>Reminder</option>
                  <option>Question</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="form-group">
                <label className="text-lg text-gray-700 font-medium mb-2">Due:</label>
                <input type="date" className="w-full p-4 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none" />
                <span className="text-sm text-gray-500">+3wks, +6wks, +9wks, +12mos</span>
              </div>

              <div className="form-group">
                <label className="text-lg text-gray-700 font-medium mb-2">Frequency:</label>
                <select value={frequency} onChange={(e) => setFrequency(e.target.value)} className="w-full p-4 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none">
                  <option>Days</option>
                  <option>Weeks</option>
                  <option>Months</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="text-lg text-gray-700 font-medium mb-2">Text:</label>
              <textarea name="text" className="w-full p-4 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none"></textarea>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="form-group">
                <label className="text-lg text-gray-700 font-medium mb-2">Change Status:</label>
                <select value={status} onChange={(e) => setStatus(e.target.value)} className="w-full p-4 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none">
                  <option>Open</option>
                  <option>Advised</option>
                  <option>Ordered Booked</option>
                  <option>In Progress</option>
                  <option>Completed</option>
                  <option>Cancelled</option>
                  <option>Non Compliant</option>
                </select>
              </div>

              <div className="form-group flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={patientViewable}
                  onChange={() => setPatientViewable(!patientViewable)}
                  className="rounded-md focus:ring-teal-400"
                />
                <span className="text-lg text-gray-700 font-medium">Patient Viewable</span>
              </div>
            </div>

            <div className="form-group">
              <button type="submit" className="w-full py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-teal-400">
                Save Health Watcher
              </button>
            </div>
          </form>
        </motion.div>

        {/* Right Column: Completed Health Watchers List (30%) */}
        <motion.div
          className="bg-white shadow-2xl rounded-xl p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Completed Health Watchers</h2>
          
          <motion.div className="space-y-4">
            {completedHealthWatchers.map((entry, index) => (
              <motion.div
                key={index}
                className="bg-teal-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.3 }}
              >
                <h3 className="text-xl text-teal-600 font-semibold">{entry.title}</h3>
                <p className="text-gray-600">Status: {entry.status}</p>
                <p className="text-gray-600">Due: {entry.dueDate}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
};

export default HealthWatcher;
