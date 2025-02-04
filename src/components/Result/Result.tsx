import React, { useState,useEffect } from 'react';
import { Save, Printer, File, Link2, Trash2, Eye, AlertCircle, Clock, Calendar, UserCircle, Building, FileText, Bell } from 'lucide-react';
import { useParams } from "react-router-dom";
import { useTabs } from "../../Context/TabProvider";

const Result = () => {
  const { id } = useParams();
  const { addTab } = useTabs();
  const [testRows, setTestRows] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Medical theme colors
  const theme = {
    primary: 'rgb(41, 128, 185)', // Medical blue
    secondary: 'rgb(26, 188, 156)', // Mint green
    accent: 'rgb(52, 152, 219)', // Light blue
    warning: 'rgb(243, 156, 18)', // Orange
    danger: 'rgb(231, 76, 60)', // Red
    success: 'rgb(46, 204, 113)' // Green
  };

  const companyOptions = [
    "Imaging", "Labs", "Imaging central", "Inhouse", "Labcorp",
    "SHCALAB", "SHCAMIC", "SHCAPATH", "SGCAARPROC", "SHCARPT"
  ];

  const resultOptions = [
    "Results", "Patient Consent Form", "Patient Intake Form",
    "Old Chart Items", "Orders", "Notes", "Admin", "Docs",
    "Meds", "Scans", "Signs"
  ];

  const handleSave = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  useEffect(() => {

    addTab({ id:"/result", name:"Result", path:`/result/${id}` });
  
}, [ id]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 p-6 animate-fadeIn">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6">
            <div className="flex justify-between items-center">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white">Results</h3>
                
              </div>
              <div className="flex space-x-3">
                <button 
                  onClick={handleSave}
                  className={`inline-flex items-center px-4 py-2 rounded-lg ${
                    isLoading ? 'bg-blue-400' : 'bg-white'
                  } text-blue-800 font-medium hover:bg-blue-50 transform hover:scale-105 transition-all shadow-lg`}
                >
                  <Save className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
                  {isLoading ? 'Saving...' : 'Save'}
                </button>
                <button className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-700 text-white font-medium hover:bg-blue-600 transform hover:scale-105 transition-all shadow-lg">
                  <Printer className="h-4 w-4 mr-2" />
                  Print
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6 space-y-8">
            {/* Provider & Department Section */}
            <div className="grid grid-cols-3 gap-6">
              <div className="group">
                <label className="flex items-center text-sm font-semibold text-[#1c4b85] mb-2 group-hover:text-blue-600 transition-colors">
                  <UserCircle className="h-4 w-4 mr-2" />
                  Provider
                </label>
                <select className="w-full text-[#3972c7] rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 hover:border-blue-400 transition-colors">
                  <option>MILLER ALEX MC</option>
                </select>
              </div>
              <div className="group">
                <label className="flex items-center text-sm font-semibold text-[#1c4b85] mb-2 group-hover:text-blue-600 transition-colors">
                  <Building className="h-4 w-4 mr-2" />
                  Department
                </label>
                <select className="w-full text-[#3972c7] rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 hover:border-blue-400 transition-colors">
                  <option>ARCHE'S MEDICAL CENTER</option>
                </select>
              </div>
              <div className="group">
                <label className="flex items-center text-sm font-semibold text-[#1c4b85] group-hover:text-blue-600 transition-colors">
                  <FileText className="h-4 w-4 mr-2" />
                  Folder
                </label>
                <select className="w-full text-[#3972c7] rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 hover:border-blue-400 transition-colors">
                  {resultOptions.map(option => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Signers Grid */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium text-[#1c4b85] mb-4">Authorized Signers</h3>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className="group">
                    <label className="flex items-center text-sm font-semibold text-[#1c4b85] mb-2 group-hover:text-blue-600 transition-colors">
                      Signer {num}
                    </label>
                    <select className="w-full text-[#3972c7] rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 hover:border-blue-400 transition-colors">
                      <option>Select Signer</option>
                    </select>
                  </div>
                ))}
              </div>
            </div>

            {/* DateTime Section */}
            <div className="grid grid-cols-4 gap-6">
              <div className="group">
                <label className="flex items-center text-sm font-semibold text-[#1c4b85] mb-2 group-hover:text-blue-600 transition-colors">
                  Company
                </label>
                <select className="w-full text-[#3972c7] rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 hover:border-blue-400 transition-colors">
                  {companyOptions.map(option => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
              {[
                { label: 'Collected', icon: Clock },
                { label: 'Date Performed', icon: Calendar },
                { label: 'Notified', icon: Bell }
              ].map((field) => (
                <div key={field.label} className="group">
                  <label className="flex items-center text-sm font-semibold text-[#1c4b85] group-hover:text-blue-600 transition-colors">
                    <field.icon className="h-4 w-4 mr-2 " />
                    {field.label}
                  </label>
                  <input
                    type={field.label === 'Date Performed' ? 'date' : 'datetime-local'}
                    className="w-full rounded-lg text-[#3972c7] border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 hover:border-blue-400 transition-colors"
                  />
                </div>
              ))}
            </div>

            {/* Template & Comments */}
            <div className="space-y-4 bg-white p-4 rounded-lg border border-gray-200">
              <div className="group">
                <label className="flex items-center text-sm font-semibold text-[#1c4b85] group-hover:text-blue-600 transition-colors">
                  Template
                </label>
                <select className="w-full rounded-lg text-[#3972c7] border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 hover:border-blue-400 transition-colors">
                  <option>Select Template</option>
                </select>
              </div>
              <div className="group">
                <label className="flex items-center text-sm font-semibold text-[#1c4b85] mb-2 group-hover:text-blue-600 transition-colors">
                  Comments
                </label>
                <textarea
                  rows={3}
                  className="w-full placeholder-[#6786b4] rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 hover:border-blue-400 transition-colors resize-none"
                  placeholder="Enter medical notes or comments..."
                />
              </div>
            </div>

            {/* Checkboxes */}
            <div className="flex flex-wrap gap-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
              {['Hold', 'High Priority', 'Assistant', 'Confidential', 'Patient Viewable'].map((label) => (
                <label key={label} className="flex items-center space-x-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 transition-colors"
                  />
                  <span className="text-sm text-gray-700 group-hover:text-blue-600 transition-colors">{label}</span>
                </label>
              ))}
            </div>

            {/* Results Table */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-4 bg-gradient-to-r from-blue-600 to-blue-700 flex justify-between items-center">
                <h3 className="text-lg font-medium text-white">Test Results</h3>
                <button
                  onClick={() => setTestRows([...testRows, {}])}
                  className="px-4 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transform hover:scale-105 transition-all shadow-lg"
                >
                  Add New Result
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      {['Test Name', 'Result Name', 'Results', 'Out of Range', 'Flag', 'Units', 'Range', 'Stat', 'Actions'].map((header) => (
                        <th key={header} className="px-6 py-3 text-left text-sm font-semibold text-[#1c4b85] uppercase tracking-wider">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {testRows.map((_, index) => (
                      <tr key={index} className="hover:bg-blue-50 transition-colors">
                        <td className="px-6 py-4">
                          <select className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                            {resultOptions.map(option => (
                              <option key={option}>{option}</option>
                            ))}
                          </select>
                        </td>
                        <td className="px-6 py-4">
                          <input type="text" className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                        </td>
                        <td className="px-6 py-4">
                          <input type="text" className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                        </td>
                        <td className="px-6 py-4 text-center">
                          <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                        </td>
                        <td className="px-6 py-4">
                          <select className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                            <option value="normal">Normal</option>
                            <option value="high">High</option>
                            <option value="low">Low</option>
                            <option value="critical">Critical</option>
                          </select>
                        </td>
                        <td className="px-6 py-4">
                          <input type="text" className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                        </td>
                        <td className="px-6 py-4">
                          <input type="text" className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                        </td>
                        <td className="px-6 py-4">
                          <input type="text" className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                        </td>
                        <td className="px-6 py-4">
                          <button
                            onClick={() => setTestRows(testRows.filter((_, i) => i !== index))}
                            className="text-red-600 hover:text-red-800 transition-colors"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;