import React,{useEffect,useState} from "react";
import { FiArrowLeft } from "react-icons/fi";
import { GiHeartOrgan, GiKidneys, GiLungs } from "react-icons/gi";
import { motion } from "framer-motion";
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';



const Dashboard = () => {
  const { id } = useParams(); // Get patient ID from the route
  const [isPatientOpen, setIsPatientOpen] = useState(false);
  const [patient, setPatient] = useState(null); // State to store patient details
  const [loading, setLoading] = useState(true); // Loading state

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
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

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 p-6 font-sans">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center space-x-4 mb-8"
      >
        
      </motion.div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Anatomy Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          transition={{ duration: 0.7 }}
          className="col-span-1 bg-white shadow-lg rounded-xl p-6"
        >
          <div className="relative">
            {/* Rotating Human Body */}
            <div className="w-full h-[300px] bg-gray-100 rounded-lg flex items-center justify-center relative">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 10,
                  ease: "linear",
                }}
                className="absolute w-40 h-40 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 animate-spin"
              >
                {/* Placeholder: Add real 3D model here */}
                {/* <p className="text-sm text-white text-center mt-16 font-semibold">
                  Rotating Human Body
                </p> */}
              </motion.div>
            </div>

            {/* Highlighted Organs */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="absolute top-6 left-6 bg-white p-4 shadow-lg rounded-md flex items-center space-x-2"
            >
              <GiHeartOrgan className="text-red-500" size={24} />
              <div>
                <p className="text-sm font-medium text-gray-700">Heart Rate</p>
                <p className="text-xs text-gray-500">Date: 21 Jan 2024</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="absolute top-36 left-10 bg-white p-4 shadow-lg rounded-md flex items-center space-x-2"
            >
              <GiKidneys className="text-green-500" size={24} />
              <div>
                <p className="text-sm font-medium text-gray-700">Kidney Condition: 80%</p>
                <p className="text-xs text-gray-500">Date: 21 Jan 2024</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="absolute top-52 right-8 bg-white p-4 shadow-lg rounded-md flex items-center space-x-2"
            >
              <GiLungs className="text-blue-500" size={24} />
              <div>
                <p className="text-sm font-medium text-gray-700">Lungs Condition: 95%</p>
                <p className="text-xs text-gray-500">Date: 21 Jan 2024</p>
              </div>
            </motion.div>
          </div>
          <p className="mt-4 text-center font-semibold text-gray-700">
  {patient ? patient.firstName : "Loading..."}
</p>

        </motion.div>

        {/* Middle: Patient Info */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          transition={{ duration: 0.8 }}
          className="col-span-1 lg:col-span-2"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Patient Info Card */}
            <div className="bg-white shadow-lg rounded-xl p-6 flex items-center space-x-6">
              {/* <img
                src="https://via.placeholder.com/100"
                alt="Patient"
                className="w-24 h-24 rounded-full object-cover shadow-lg"
              /> */}
              <div>
                <h2 className="text-lg font-bold text-gray-800">{patient ? patient.firstName : "Loading..."} {patient ?patient.lastName: "Loading..."}</h2>
                <p className="text-sm text-gray-500">Age: 64 & Weight: 70 Kg</p>
                <p className="text-sm text-gray-500">Blood Group: A+</p>
                <p className="mt-2 text-sm font-medium text-red-500">
                  Issues: Open Heart Surgery (21 Jan 2024)
                </p>
              </div>
            </div>

            {/* Vital Stats */}
            <div className="bg-white shadow-lg rounded-xl p-6 grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Blood Pressure</p>
                <motion.p
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-lg font-semibold text-gray-800"
                >
                  120/70 mmHg
                </motion.p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Heart Rate</p>
                <motion.p
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-lg font-semibold text-gray-800"
                >
                  97 bpm
                </motion.p>
              </div>
            </div>
          </div>

          {/* Health Composition */}
          <div className="bg-white shadow-lg rounded-xl p-6 mt-6">
            <h3 className="text-lg font-bold text-gray-700 mb-4">Health Composition</h3>
            <div className="grid grid-cols-2 gap-4">
              <p className="text-sm text-gray-600">
                Glucose: <span className="text-green-600">7.9 mmol/L</span>
              </p>
              <p className="text-sm text-gray-600">
                Cholesterol: <span className="text-red-600">195 mg/dL</span>
              </p>
              <p className="text-sm text-gray-600">
                Hemoglobin: <span className="text-green-600">9.6 mmol/L</span>
              </p>
              <p className="text-sm text-gray-600">
                Thrombocyte: <span className="text-green-600">395 x109/L</span>
              </p>
              <p className="text-sm text-gray-600">
                Sodium: <span className="text-blue-600">140 mmol/L</span>
              </p>
              <p className="text-sm text-gray-600">
                Potassium: <span className="text-red-600">125 mmol/L</span>
              </p>

            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};




export default Dashboard;




