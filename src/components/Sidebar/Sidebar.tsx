


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaSearch, FaStethoscope, FaHeartbeat, FaAllergies, FaPills, FaMicroscope, FaEnvelope, FaStickyNote, FaNotesMedical, FaFileMedicalAlt, FaTasks, FaBriefcaseMedical, FaClipboard, FaSyringe, FaHandHoldingMedical, FaHospitalUser, FaConnectdevelop } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import { useTabs } from '../../Context/TabProvider';

export function Sidebar() {
  const { id } = useParams();
  const { addTab } = useTabs();

  const [isPatientOpen, setIsPatientOpen] = useState(false);

  const [loading, setLoading] = useState(true);
  const [patient, setPatient] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const sidebarItems = [
    { label: 'Review of System', icon: <FaStethoscope size={18} />, path: `/reviewsystem/${id}` },
    { label: 'Vitals', icon: <FaHeartbeat size={18} />, path: `/vitals/${id}` },
    { label: 'Allergies', icon: <FaAllergies size={18} />, path: `/allergies/${id}` },
    { label: 'Medications', icon: <FaPills size={18} />, path: `/medication/${id}` },
    { label: 'Lab Orders', icon: <FaMicroscope size={18} />, path: `/LabOrders/${id}` },
    { label: 'Messages', icon: <FaEnvelope size={18} />, path: `/message/${id}` },
    { label: 'Quick Memo', icon: <FaStickyNote size={18} />, path: `/quickMemo/${id}` },
    { label: 'Health Watcher', icon: <FaNotesMedical size={18} />, path: `/healthWatcher/${id}` },
    { label: 'Encounters', icon: <FaFileMedicalAlt size={18} />, path: `/encounter/${id}` },
    { label: 'Problems', icon: <FaTasks size={18} />, path: `/problems/${id}` },
    { label: 'Notes', icon: <FaStickyNote size={18} />, path: `/notes/${id}` },
    { label: 'Plan Summary', icon: <FaBriefcaseMedical size={18} />, path: `/planSummary/${id}` },
    { label: 'Documents', icon: <FaClipboard size={18} />, path: `/document/${id}` },
    { label: 'Results', icon: <FaMicroscope size={18} />, path: `/result/${id}` },
    { label: 'Immunizations', icon: <FaSyringe size={18} />, path: `/immunizations/${id}` },
    { label: 'Immunotherapy', icon: <FaHandHoldingMedical size={18} />, path: `/immunotherapy/${id}` },
    { label: 'Risk Factors', icon: <FaHeartbeat size={18} />, path: `/riskfactor/${id}` },
    { label: 'Implantable Device', icon: <FaHospitalUser size={18} />, path: `/implimentableDevice/${id}` },
    { label: 'Family Connections', icon: <FaConnectdevelop size={18} />, path: `/familyConnection/${id}` },
    { label: 'Referrals', icon: <FaNotesMedical size={18} />, path: `/refferal/${id}` },
  ];

  const filteredItems = sidebarItems.filter(item =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase())
  );
  useEffect(() => {
    if (id) {
      fetchPatientDetails();
    }
  }, [id]);
    const fetchPatientDetails = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/patient/getPatient/${id}`);
      setPatient(response.data);
    } catch (error) {
      console.error("Error fetching patient details:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-64 bg-[#F8FCFF] shadow-md">
      <div className="p-4 bg-white rounded-lg">
  {loading ? (
    <div className="text-center text-gray-500">Loading...</div>
  ) : patient ? (
    <>
      <div className="flex flex-col items-center space-y-2">
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
          <div className="text-lg font-semibold text-[#002D62]">{patient.firstName} {patient.lastName}</div>
          <div className="text-sm text-[#002D62]">DOB: {patient.dateOfBirth}</div>
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
        <div className="text-sm text-[#002D62]">Phone: {patient.phoneNumber}</div>
        <div className="text-sm text-[#002D62]">Insurance: {patient.insuranceCarrier}</div>
        <div className=" text-sm text-[#002D62]">Plan: {patient.insurancePlanName}</div>
        <div>
          <button className="text-blue-600 hover:text-blue-800 text-xs">Pharmacy Details</button>
        </div>
        <div className="text-sm text-[#002D62]">Last Visit: {patient.lastVisit}</div>
        </div>
      </div>
    </>
  ) : (
    <div className="text-center text-gray-500">No patient data available</div>
  )}
</div>
        <div className="p-2">
          <div className="relative -mt-5">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-500" size={18} />
          </div>
          <ul className="space-y-1">
            {filteredItems.map((item, index) => (
              <Link key={index} to={item.path}>
                <li className="bg-[#EEF7FF] text-[#002D62] flex items-center gap-2 p-2 rounded-lg font-medium shadow-sm hover:shadow-lg hover:bg-blue-100 transition border-l-4 duration-100 transform hover:-translate-y-1">
                  {item.icon} {item.label}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
