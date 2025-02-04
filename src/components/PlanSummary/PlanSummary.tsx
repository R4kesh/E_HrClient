import React, { useState,useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaInfoCircle, FaFilter, FaArrowLeft, FaCheckCircle } from 'react-icons/fa';
import { useParams } from "react-router-dom";
import { useTabs } from "../../Context/TabProvider";

const PlanSummaryPage = () => {
  const { id } = useParams();
  const { addTab } = useTabs();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showSummary, setShowSummary] = useState(false);
  const [filter, setFilter] = useState({ year: '', month: '', day: '' });
  

  useEffect(() => {

    addTab({ id:"/planSummary", name:"Plan Summary", path:`/planSummary/${id}` });
  
}, [ id]);

  const plans = [
    {
      name: 'Physical Therapy Evaluation',
      date: '2025-01-20',
      details: 'This evaluation involves assessing mobility, pain, and overall physical health to recommend therapy exercises.',
      history: [
        { date: '2025-01-15', action: 'Initial Consultation' },
        { date: '2025-01-17', action: 'Follow-up Discussion' },
        { date: '2025-01-19', action: 'Pre-evaluation Setup' },
        { date: '2025-01-20', action: 'Evaluation Completed' },
        { date: '2025-01-21', action: 'Report Delivered' },
      ],
    },
    {
      name: 'Dermatology Visit',
      date: '2025-01-25',
      details: 'This visit focuses on assessing skin health, diagnosing any conditions, and providing treatment or skincare advice.',
      history: [
        { date: '2025-01-20', action: 'Skin Assessment Scheduled' },
        { date: '2025-01-22', action: 'Initial Skin Analysis' },
        { date: '2025-01-24', action: 'Treatment Recommendation' },
        { date: '2025-01-25', action: 'Visit Completed' },
        { date: '2025-01-26', action: 'Post-Visit Feedback' },
      ],
    },
    {
      name: 'Diabetes Visit',
      date: '2025-02-01',
      details: 'This visit involves monitoring blood sugar levels, reviewing medications, and providing dietary advice for diabetes management.',
      history: [
        { date: '2025-01-28', action: 'Dietary Plan Discussion' },
        { date: '2025-01-30', action: 'Medication Review' },
        { date: '2025-01-31', action: 'Blood Sugar Test' },
        { date: '2025-02-01', action: 'Visit Completed' },
        { date: '2025-02-02', action: 'Follow-up Scheduled' },
      ],
    },
  ];

  const filteredHistory = (history) => {
    return history.filter((item) => {
      const [year, month, day] = item.date.split('-');
      return (
        (!filter.year || filter.year === year) &&
        (!filter.month || filter.month === month) &&
        (!filter.day || filter.day === day)
      );
    });
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 p-6 flex flex-col space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Heading */}
      <div className="bg-blue-600 text-white p-4 rounded-t-2xl text-start text-2xl font-semibold flex items-center gap-2">
  <FaCalendarAlt />
  <span>Plan Summary</span>
</div>

      {/* Plan List and Details */}
      <div className="flex space-x-6">
        {/* Left Section: Plan List */}
        <motion.div
          className="bg-white shadow-lg rounded-lg p-4 w-1/3"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-lg font-semibold text-[#1c4b85] mb-4">Visits & Evaluations</h2>
          <div className="space-y-4">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`p-4 text-base font-semibold text-[#1c4b85] border rounded-lg cursor-pointer flex items-center space-x-2 ${selectedPlan === plan ? 'bg-blue-50 border-blue-600' : 'hover:bg-gray-50'}`}
                onClick={() => {
                  setSelectedPlan(plan);
                  setShowSummary(false);
                }}
              >
                <FaInfoCircle className="text-blue-600" />
                <div>
                  <div className="text-sm font-semibold text-[#1c4b85]">{plan.name}</div>
                  <div className="text-sm text-gray-600">Date: {plan.date}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Section: Detailed View */}
        <motion.div
          className="bg-white shadow-lg rounded-lg p-4 w-2/3"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {selectedPlan ? (
            !showSummary ? (
              <>
                <h2 className="text-base font-semibold text-[#1c4b85] mb-4">{selectedPlan.name}</h2>
                <div className="text-sm text-gray-600 mb-2">Date: {selectedPlan.date}</div>
                <p className="text-gray-800 mb-4">{selectedPlan.details}</p>
                <h3 className="font-semibold text-gray-700 mb-2">History:</h3>
                <ul className="space-y-2">
                  {selectedPlan.history.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-center space-x-2">
                      <FaCheckCircle className="text-green-600" />
                      <span>{item.date} - {item.action}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  onClick={() => setShowSummary(true)}
                >
                  Visit Summary
                </button>
              </>
            ) : (
              <>
                <h2 className="text-lg font-semibold text-[#1c4b85] mb-4">Summary of {selectedPlan.name}</h2>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-gray-700">History:</h3>
                  <div className="flex items-center space-x-2">
                    <FaFilter className="text-gray-600" />
                    <select
                      className="border border-gray-300 rounded-lg px-2 py-1"
                      value={filter.year}
                      onChange={(e) => setFilter({ ...filter, year: e.target.value })}
                    >
                      <option value="">Year</option>
                      <option value="2025">2025</option>
                    </select>
                    <select
                      className="border border-gray-300 rounded-lg px-2 py-1"
                      value={filter.month}
                      onChange={(e) => setFilter({ ...filter, month: e.target.value })}
                    >
                      <option value="">Month</option>
                      <option value="01">January</option>
                      <option value="02">February</option>
                    </select>
                    <select
                      className="border border-gray-300 rounded-lg px-2 py-1"
                      value={filter.day}
                      onChange={(e) => setFilter({ ...filter, day: e.target.value })}
                    >
                      <option value="">Day</option>
                      {[...Array(31)].map((_, i) => (
                        <option key={i} value={(i + 1).toString().padStart(2, '0')}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <ul className="space-y-2">
                  {filteredHistory(selectedPlan.history).map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-center space-x-2">
                      <FaCheckCircle className="text-green-600" />
                      <span>{item.date} - {item.action}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className="mt-4 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 flex items-center space-x-2"
                  onClick={() => setShowSummary(false)}
                >
                  <FaArrowLeft />
                  <span>Back to Details</span>
                </button>
              </>
            )
          ) : (
            <div className="text-gray-600">Select a plan to view details.</div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PlanSummaryPage;
