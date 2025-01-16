import React, { useEffect, useState } from 'react';
import { 
  FaUser, FaHeartbeat, FaPills, FaShoppingCart, FaClipboardList, FaBell, FaNotesMedical, FaFileMedical, FaFileInvoice, FaSyringe, 
  FaUsers, FaTasks, FaHistory, FaStickyNote, FaBriefcaseMedical, FaConnectdevelop, FaHandHoldingMedical, FaHospitalUser 
} from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Link, useParams } from 'react-router-dom';
import { useTabs } from '../Context/TabProvider';

export function Sidebar() {
  const { id } = useParams(); // Get patient ID from the route
  
  const [isPatientOpen, setIsPatientOpen] = useState(false);

  

  return (
    <div className="flex h-full bg-white">
      <div className="w-64 h-screen bg-white">
        {/* Sidebar menu */}
        <div className="p-4">
          {/* Sidebar Header */}
          {/* <div className="text-lg font-semibold text-gray-800 mb-6">Patient Management</div> */}

          {/* Menu Items */}
          <div className="space-y-3">
            <Link to={`/vitals/${id}`}>
              <button className="flex items-center text-gray-700 hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
                <FaHeartbeat size={20} className="mr-3 text-red-500" />
                Vitals
              </button>
            </Link>
            <button className="flex items-center text-gray-700 hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
              <FaClipboardList size={20} className="mr-3 text-blue-500" />
              Allergies
            </button>
            <button className="flex items-center text-gray-700 hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
              <FaPills size={20} className="mr-3 text-purple-500" />
              Medications
            </button>
            <button className="flex items-center text-gray-700 hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
              <FaShoppingCart size={20} className="mr-3 text-orange-500" />
              Orders
            </button>
            <button className="flex items-center text-gray-700 hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
              <FaBell size={20} className="mr-3 text-yellow-500" />
              Messages
            </button>
            <button className="flex items-center text-gray-700 hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
              <FaFileMedical size={20} className="mr-3 text-green-500" />
              Advanced Directives
            </button>
            <button className="flex items-center text-gray-700 hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
              <FaNotesMedical size={20} className="mr-3 text-blue-500" />
              Health Watcher
            </button>
            <button className="flex items-center text-gray-700 hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
              <FaFileInvoice size={20} className="mr-3 text-teal-500" />
              Encounters
            </button>
            <button className="flex items-center text-gray-700 hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
              <FaUsers size={20} className="mr-3 text-orange-500" />
              Care Team
            </button>
            <button className="flex items-center text-gray-700 hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
              <FaTasks size={20} className="mr-3 text-purple-500" />
              Problems
            </button>
            <button className="flex items-center text-gray-700 hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
              <FaStickyNote size={20} className="mr-3 text-yellow-500" />
              Notes
            </button>
            <button className="flex items-center text-gray-700 hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
              <FaBriefcaseMedical size={20} className="mr-3 text-green-500" />
              Plan Summary
            </button>
            <button className="flex items-center text-gray-700 hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
              <FaFileMedical size={20} className="mr-3 text-teal-500" />
              Documents
            </button>
            <button className="flex items-center text-gray-700 hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
              <FaFileInvoice size={20} className="mr-3 text-blue-500" />
              Results
            </button>
            <button className="flex items-center text-gray-700 hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
              <FaSyringe size={20} className="mr-3 text-red-500" />
              Immunizations
            </button>
            <button className="flex items-center text-gray-700 hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
              <FaHandHoldingMedical size={20} className="mr-3 text-green-500" />
              Immunotherapy
            </button>
            <button className="flex items-center text-gray-700 hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
              <FaHeartbeat size={20} className="mr-3 text-orange-500" />
              Risk Factors
            </button>
            <button className="flex items-center text-gray-700 hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
              <FaHospitalUser size={20} className="mr-3 text-purple-500" />
              Implantable Devices
            </button>
            <button className="flex items-center text-gray-700 hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
              <FaConnectdevelop size={20} className="mr-3 text-yellow-500" />
              Family Connections
            </button>
            <button className="flex items-center text-gray-700 hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
              <FaNotesMedical size={20} className="mr-3 text-teal-500" />
              Referrals
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
