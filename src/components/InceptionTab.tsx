


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import InceptionSkin from './InceptionSkin';
import EarSection from './InceptionEar';
import PhysicalActivitySection from './InceptionPhysical';
import EyeSection from './InceptionEye';
import { useTabs } from '../Context/TabProvider';

function InceptionTabs() {
  const { id } = useParams(); // Get patient ID from route params
  
  const [activeTab, setActiveTab] = useState('skin');
  const [inceptionFields, setInceptionFields] = useState({
    skin: [],
    ear: [],
    physicalActivity: {},
    eye: [],
  });
  const { addTab } = useTabs();

  const handleTabChange = (tabName) => setActiveTab(tabName);

  const handleDataChange = (field, value) => {
    setInceptionFields((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/patient/inception`, {
        id,
        inceptionFields,
      });
    
      alert('Data saved successfully');
      console.log(response.data);
    } catch (error) {
      console.error(error);
      alert('Failed to save data');
    }
  };
  useEffect(() => {
    addTab({ id: "/inception", name: "Inception", path: `/inception/${id}` });
  }, [addTab]);

  return (
    <div className="min-h-screen bg-white py-6 px-4 sm:px-12">
      <div className="max-w-full mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="flex space-x-4 mb-8 border-b-2  border-teal-600">
          {['skin', 'ear', 'physicalActivity', 'eye'].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`flex-1 text-center py-2  text-black font-bold ${
                activeTab === tab ? 'text-teal-700 border-b-2 border-teal-600' : 'text-black'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'skin' && <InceptionSkin onChange={(data) => handleDataChange('skin', data)} />}
        {activeTab === 'ear' && <EarSection onChange={(data) => handleDataChange('ear', data)} />}
        {activeTab === 'physicalActivity' && (
          <PhysicalActivitySection onChange={(data) => handleDataChange('physicalActivity', data)} />
        )}
        {activeTab === 'eye' && <EyeSection onChange={(data) => handleDataChange('eye', data)} />}

        {/* Submit Button */}
        <button
          type="button"
          onClick={handleSubmit}
          className="w-full mt-8 py-3 px-4 bg-teal-600 text-white text-lg font-semibold rounded-md shadow-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 transform transition-all hover:scale-105"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default InceptionTabs;
