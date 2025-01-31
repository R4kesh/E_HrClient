import React, { useState } from 'react';

const PlanSummary = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      name: 'Physical Therapy Evaluation',
      date: '2025-01-20',
      details: 'This evaluation involves assessing mobility, pain, and overall physical health to recommend therapy exercises.',
    },
    {
      name: 'Dermatology Visit',
      date: '2025-01-25',
      details: 'This visit focuses on assessing skin health, diagnosing any conditions, and providing treatment or skincare advice.',
    },
    {
      name: 'Diabetes Visit',
      date: '2025-02-01',
      details: 'This visit involves monitoring blood sugar levels, reviewing medications, and providing dietary advice for diabetes management.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col space-y-6">
      {/* Heading */}
      <div className="text-blue-600 text-2xl font-bold">Plan Summary</div>

      {/* Plan List and Details */}
      <div className="flex space-x-6">
        {/* Left Section: Plan List */}
        <div className="bg-white shadow-md rounded-lg p-4 w-1/3">
          <h2 className="text-lg font-semibold mb-4">Visits & Evaluations</h2>
          <div className="space-y-4">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`p-4 border rounded-lg cursor-pointer ${selectedPlan === plan ? 'bg-blue-50 border-blue-600' : 'hover:bg-gray-50'}`}
                onClick={() => setSelectedPlan(plan)}
              >
                <div className="font-medium">{plan.name}</div>
                <div className="text-sm text-gray-600">Date: {plan.date}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section: Detailed View */}
        <div className="bg-white shadow-md rounded-lg p-4 w-2/3">
          {selectedPlan ? (
            <>
              <h2 className="text-lg font-semibold mb-4">{selectedPlan.name}</h2>
              <div className="text-sm text-gray-600 mb-2">Date: {selectedPlan.date}</div>
              <p className="text-gray-800">{selectedPlan.details}</p>
              <button
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                onClick={() => alert(`Summary of ${selectedPlan.name}`)}
              >
                Visit Summary
              </button>
            </>
          ) : (
            <div className="text-gray-600">Select a plan to view details.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlanSummary;
