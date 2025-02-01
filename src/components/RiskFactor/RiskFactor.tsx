

import React, { useState } from 'react';
import { AlertTriangle, Plus, History, CheckCircle, RefreshCw, Calendar } from 'lucide-react';

const RiskFactor = () => {
  const [riskFactors, setRiskFactors] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [comments, setComments] = useState('');
  const [status, setStatus] = useState('Current');
  const [selectedFactor, setSelectedFactor] = useState('');

  const riskFactorOptions = [
    "Alcohol Use",
    "Does Not Exercise",
    "Illegal Drug Use",
    "Quit Smoking",
    "Smoking",
    "Obesity",
    "Diabetes",
    "Hypertension",
    "Heart Disease",
    "Depression"
  ];

  const addRiskFactor = () => {
    if (selectedFactor && comments) {
      setRiskFactors([...riskFactors, {
        id: Date.now(),
        factor: selectedFactor,
        date: selectedDate,
        status,
        comments,
        reviewed: false
      }]);
      setComments('');
      setStatus('Current');
      setSelectedFactor('');
    }
  };

  const removeRiskFactor = (id) => {
    setRiskFactors(riskFactors.filter(factor => factor.id !== id));
  };

  const toggleReview = (id) => {
    setRiskFactors(riskFactors.map(factor => 
      factor.id === id ? {...factor, reviewed: !factor.reviewed} : factor
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-fadeIn">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h1 className="text-2xl font-bold text-white flex items-center">
                  <AlertTriangle className="mr-2 h-6 w-6" />
                  Risk Factors
                </h1>
                <p className="text-blue-100">Patient Health Risk Assessment</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-700 rounded-lg p-2">
                  <Calendar className="h-5 w-5 text-white" />
                </div>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="rounded-lg border-0 bg-white/10 text-white px-3 py-2 focus:ring-2 focus:ring-white"
                />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Risk Factor Selection */}
              <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
                <h2 className="text-md font-semibold text-[#1c4b85] mb-4 flex items-center">
                  <Plus className="h-5 w-5 mr-2 text-blue-600" />
                  Add Risk Factor
                </h2>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {riskFactorOptions.map((factor) => (
                    <button
                      key={factor}
                      onClick={() => setSelectedFactor(factor)}
                      className={`flex items-center justify-center p-3 text-sm rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 hover:shadow-md group ${selectedFactor === factor ? 'bg-blue-100' : ''}`}
                    >
                      <span className="text-gray-700 group-hover:text-blue-600">{factor}</span>
                    </button>
                  ))}
                </div>

                {/* Comments and Status */}
                <textarea
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  placeholder="Enter comments"
                  className="w-full placeholder-[#6786b4] p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 mb-4"
                />
                <div className="flex space-x-4 mb-4">
                <select 
  value={status} 
  onChange={(e) => setStatus(e.target.value)} 
  className="w-full text-[#3972c7] p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
>
  <option value="Current">Current</option>
  <option value="Historic">Historic</option>
</select>
                  <button
                    onClick={addRiskFactor}
                    className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    Add Risk Factor
                  </button>
                </div>
              </div>

              {/* Active Risk Factors List */}
              <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
                <h2 className="text-md font-semibold text-[#1c4b85] mb-4 flex items-center">
                  <History className="h-5 w-5 mr-2 text-blue-600" />
                  Current Risk Factors
                </h2>
                <div className="space-y-3">
                  {riskFactors.map((factor) => (
                    <div 
                      key={factor.id}
                      className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-blue-50 transition-all duration-200 group"
                    >
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => toggleReview(factor.id)}
                          className={`rounded-full p-1 transition-colors duration-200 ${
                            factor.reviewed ? 'text-green-500 hover:text-green-600' : 'text-gray-400 hover:text-gray-500'
                          }`}
                        >
                          <CheckCircle className="h-5 w-5" />
                        </button>
                        <div>
                          <p className="font-medium text-gray-800">{factor.factor}</p>
                          <p className="text-sm text-gray-500">{factor.date}</p>
                          <p className="text-sm text-gray-500">{factor.comments}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {factor.status}
                        </span>
                        <button
                          onClick={() => removeRiskFactor(factor.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                        >
                          <RefreshCw className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                  {riskFactors.length === 0 && (
                    <div className="text-center py-6 text-gray-500">
                      No risk factors added yet
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 animate-fadeIn">
          <h2 className="text-md font-semibold text-[#1c4b85] mb-4">Risk Factor Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="text-sm font-medium text-blue-800">Total Risk Factors</h3>
              <p className="text-2xl font-bold text-blue-600">{riskFactors.length}</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="text-sm font-medium text-green-800">Reviewed</h3>
              <p className="text-2xl font-bold text-green-600">
                {riskFactors.filter(f => f.reviewed).length}
              </p>
            </div>
            <div className="bg-yellow-50 rounded-lg p-4">
              <h3 className="text-sm font-medium text-yellow-800">Pending Review</h3>
              <p className="text-2xl font-bold text-yellow-600">
                {riskFactors.filter(f => !f.reviewed).length}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskFactor;
