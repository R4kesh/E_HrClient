
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaUser, FaShoppingCart, FaClipboardList,FaMicroscope, FaUsers,FaCog, FaBell, FaCalendarAlt, FaTasks, FaHistory, FaStickyNote, FaDollarSign, FaFileMedicalAlt,
  FaPills,FaFileMedical,FaNotesMedical,FaFileInvoice,FaBriefcaseMedical,FaConnectdevelop,FaSyringe
,FaHandHoldingMedical,FaHospitalUser,FaHeartbeat } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Link, useParams } from 'react-router-dom';
import { useTabs } from '../../Context/TabProvider';

export function Sidebar() {
  const { id } = useParams(); // Get patient ID from the route
  const { addTab } = useTabs();

  const [isPatientOpen, setIsPatientOpen] = useState(false);
  const [patient, setPatient] = useState(null); // State to store patient details
  const [loading, setLoading] = useState(true); // Loading state
  const [showMore, setShowMore] = useState(false);

  const toggleDetails = () => {
    setShowMore((prev) => !prev);
  };
  useEffect(() => {
    if (id) {
      fetchPatientDetails();
    }
  }, [id]);

  const fetchPatientDetails = async () => {
    try {
      setLoading(true); // Set loading to true
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/patient/getPatient/${id}`
      );
      setPatient(response.data);
    } catch (error) {
      console.error("Error fetching patient details:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    addTab({ id: "/dashboard", name: "Home", path: `/dashboard/${id}` });
  }, [addTab]);

  return (
    <div className="flex h-screen bg-gray-100">
     
      <div className="w-56 bg-white ">
<div className="p-4 bg-white rounded-lg">
  {loading ? (
    <div className="text-center text-gray-500">Loading...</div>
  ) : patient ? (
    <>
      <div className="flex flex-col items-center space-y-4">
        {/* Patient Image */}
        <div
          className="w-24 h-24 bg-gray-300 rounded-full overflow-hidden border-2 border-blue-500 cursor-pointer"
          onMouseEnter={() =>
            document.getElementById('details-section').classList.add('max-h-[300px]')
          }
          onMouseLeave={() =>
            document.getElementById('details-section').classList.remove('max-h-[300px]')
          }
        >
          <img
            src={`${import.meta.env.VITE_BASE_URL}${patient.patientImage}`}
            alt="Patient"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Patient Name */}
        <div
          className="text-center cursor-pointer"
          onMouseEnter={() =>
            document.getElementById('details-section').classList.add('max-h-[300px]')
          }
          onMouseLeave={() =>
            document.getElementById('details-section').classList.remove('max-h-[300px]')
          }
        >
          <div className="text-lg font-semibold text-gray-800">{patient.firstName} {patient.lastName}</div>
          <div className="text-sm text-gray-500">DOB: {patient.dateOfBirth}</div>
        </div>
      </div>

      {/* Additional Details Section (shown on hover) */}
      <div
        id="details-section"
        className="overflow-hidden max-h-0 transition-all duration-500 ease-in-out  rounded-md shadow-md  p-4 space-y-2"
      >
        <p></p>
        <br />

       
        <div className="bg-blue-gray-50 space-y-2 text-center">
        <div className="text-sm text-gray-600">Phone: {patient.phoneNumber}</div>
        <div className="text-sm text-gray-600">Insurance: {patient.insuranceCarrier}</div>
        <div className=" text-sm text-gray-600">Plan: {patient.insurancePlanName}</div>
        <div>
          <button className="text-blue-600 hover:text-blue-800 text-xs">Pharmacy Details</button>
        </div>
        <div className="text-sm text-gray-600">Last Visit: {patient.lastVisit}</div>
        </div>
      </div>
    </>
  ) : (
    <div className="text-center text-gray-500">No patient data available</div>
  )}
</div>





        {/* Sidebar menu */}
        <div className="p-2">
      

          {/* Other Menu Items */}
          <div className=" space-y-1 ">
            <Link to={`/inception/${id}`}><button className="flex items-center text-gray-700 hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
              <FaUser size={20} className="mr-2 text-purple-500 hover:text-indigo-500 transition duration-300" />
              Inception
            </button></Link>
            <Link to={`/reviewsystem/${id}`}><button className="flex items-center text-gray-700 hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
              <FaCog size={20} className="mr-2 text-green-500 hover:text-green-700 transition duration-300" />
              Review of System
            </button></Link>
            <Link to={`/vitals/${id}`} ><button className="flex items-center text-gray-700 hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
              <FaBell size={20} className="mr-2 text-orange-500 hover:text-orange-700 transition duration-300" />
              Vitals
            </button></Link>
            <Link to={`/allergies/${id}`} ><button className="flex items-center text-gray-700 hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
              <FaClipboardList size={20} className="mr-3 text-blue-500" />
              Allergies
            </button>
            </Link>
            <Link to={`/medication/${id}`} >
            <button className="flex items-center text-gray-700 hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
              <FaPills size={20} className="mr-3 text-purple-500" />
              Medications
            </button>
            </Link>
            <Link to={`/LabOrders/${id}`} ><button className="flex items-center text-gray-700 hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
              <FaMicroscope size={20} className="mr-3 text-orange-500" />
              Lab Orders
            </button>
            </Link>
            <button className="flex items-center text-gray-700 hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
              <FaBell size={20} className="mr-3 text-yellow-500" />
              Messages
            </button>
            <button className="flex text-sm items-center text-gray-700 hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
              <FaFileMedical size={20} className="mr-3 text-green-500" />
              Advanced Directives
            </button>
            <Link to={`/healthWatcher/${id}`} >
            <button className="flex items-center text-gray-700 hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
              <FaNotesMedical size={20} className="mr-3 text-blue-500" />
              Health Watcher
            </button>
            </Link>
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
            <button className="flex items-center text-gray-700 hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-2">
              <FaHospitalUser size={20} className="mr-3 text-purple-500" />
              Implantable Devices
            </button>
            <Link to={`/familyConnection/${id}`} >

            <button className="flex items-center text-gray-700 hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
              <FaConnectdevelop size={20} className="mr-3 text-yellow-500" />
              Family Connections
            </button>
            </Link>
            <Link to={`/refferal/${id}`} >

            <button className="flex items-center text-gray-700 hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
              <FaNotesMedical size={20} className="mr-3 text-teal-500" />
              Referrals
            </button>
            </Link>

            <button className="flex items-center text-gray-700 hover:text-teal-600 hover:bg-teal-50 py-2 rounded-lg transition duration-300 px-3">
              <FaDollarSign size={20} className="mr-3 text-teal-500" />
              Billing
            </button>
          </div>
        </div>
      </div>

      {/* Main content area */}
     
    </div>
  );
}