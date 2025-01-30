import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const PhysicalTherapty = () => {


    const [rowCounts, setRowCounts] = useState({
        initial: 2,
        notes: 2,
        wound1: 2,
        wound2: 2,
        wound3: 2
      });
    
      const addRow = (section) => {
        setRowCounts(prev => ({
          ...prev,
          [section]: prev[section] + 1
        }));
      };
    
      // Component for the add row button
      const AddRowButton = ({ onClick }) => (
        <button
          onClick={onClick}
          className="flex items-center gap-2 mt-3 px-3 py-1.5 text-sm text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors"
        >
          <Plus size={16} />
          <span>Add Row</span>
        </button>
      );
  return (
    <div className="w-full max-w-6xl mx-auto bg-white shadow-lg rounded-lg">
    <div className="bg-blue-50 border-b border-blue-100 p-4 rounded-t-lg">
      <h1 className="text-xl font-semibold text-blue-900">
        Physical therapy Progress
      </h1>
    </div>
    <div className="p-6">
      <div className="space-y-6">
        {/* Wound Care Initial/Follow-up Subnotes */}
        <div className="border rounded-lg p-4">
          <div className="text-sm font-medium text-gray-700 mb-2">
            AMDS_Physical Therapy Progress
          </div>
          <div className="grid grid-cols-6 gap-2">
            {[...Array(rowCounts.initial)].map((_, rowIndex) => (
              <React.Fragment key={`initial-${rowIndex}`}>
                {[...Array(6)].map((_, colIndex) => (
                  <input
                    key={`initial-${rowIndex}-${colIndex}`}
                    type="text"
                    className="border border-gray-400 rounded-md p-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                ))}
              </React.Fragment>
            ))}
          </div>
          <AddRowButton onClick={() => addRow('initial')} />
        </div>

        {/* From Wounds 1-3 Initial/Follow up Notes */}
        <div className="border rounded-lg p-4">
          <div className="text-sm font-medium text-gray-700 mb-2">
            Fields from Range Of Motion Subnote
          </div>
          <div className="grid grid-cols-6 gap-2">
            {[...Array(rowCounts.notes)].map((_, rowIndex) => (
              <React.Fragment key={`notes-${rowIndex}`}>
                {[...Array(6)].map((_, colIndex) => (
                  <input
                    key={`notes-${rowIndex}-${colIndex}`}
                    type="text"
                    className="border border-gray-400 rounded-md p-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                ))}
              </React.Fragment>
            ))}
          </div>
          <AddRowButton onClick={() => addRow('notes')} />
        </div>

        {/* Details for Wound 1 */}
        <div className="border rounded-lg p-4">
          <div className="text-sm font-medium text-gray-700 mb-2">
            Active Range of Motion(AROM)_Passive Range of Motion (PROM)_Right Side Measured (degress)
          </div>
          <div className="grid grid-cols-6 gap-2">
            {[...Array(rowCounts.wound1)].map((_, rowIndex) => (
              <React.Fragment key={`wound1-${rowIndex}`}>
                {[...Array(6)].map((_, colIndex) => (
                  <input
                    key={`wound1-${rowIndex}-${colIndex}`}
                    type="text"
                    className="border border-gray-400 rounded-md p-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                ))}
              </React.Fragment>
            ))}
          </div>
          <AddRowButton onClick={() => addRow('wound1')} />
        </div>

        {/* Details for Wound 2 */}
        <div className="border rounded-lg p-4">
          <div className="text-sm font-medium text-gray-700 mb-2">
            Left Side Measured (degrees)
          </div>
          <div className="grid grid-cols-6 gap-2">
            {[...Array(rowCounts.wound2)].map((_, rowIndex) => (
              <React.Fragment key={`wound2-${rowIndex}`}>
                {[...Array(6)].map((_, colIndex) => (
                  <input
                    key={`wound2-${rowIndex}-${colIndex}`}
                    type="text"
                    className="border border-gray-400 rounded-md p-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                ))}
              </React.Fragment>
            ))}
          </div>
          <AddRowButton onClick={() => addRow('wound2')} />
        </div>

        {/* Details for Wound 3 */}
        <div className="border rounded-lg p-4">
          <div className="text-sm font-medium text-gray-700 mb-2">
            Fields from Gait Test Subnote
          </div>
          <div className="grid grid-cols-6 gap-2">
            {[...Array(rowCounts.wound3)].map((_, rowIndex) => (
              <React.Fragment key={`wound3-${rowIndex}`}>
                {[...Array(6)].map((_, colIndex) => (
                  <input
                    key={`wound3-${rowIndex}-${colIndex}`}
                    type="text"
                    className="border border-gray-400 rounded-md p-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                ))}
              </React.Fragment>
            ))}
          </div>
          <AddRowButton onClick={() => addRow('wound3')} />
        </div>

        <div className="border rounded-lg p-4">
          <div className="text-sm font-medium text-gray-700 mb-2">
            Field from Walking Endure Test
          </div>
          <div className="grid grid-cols-6 gap-2">
            {[...Array(rowCounts.wound1)].map((_, rowIndex) => (
              <React.Fragment key={`wound1-${rowIndex}`}>
                {[...Array(6)].map((_, colIndex) => (
                  <input
                    key={`wound1-${rowIndex}-${colIndex}`}
                    type="text"
                    className="border border-gray-400 rounded-md p-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                ))}
              </React.Fragment>
            ))}
          </div>
          <AddRowButton onClick={() => addRow('wound1')} />
        </div>

        <div className="border rounded-lg p-4">
          <div className="text-sm font-medium text-gray-700 mb-2">
            Field from physical Therapy Evaluation_Right Upper Extremity Details
          </div>
          <div className="grid grid-cols-6 gap-2">
            {[...Array(rowCounts.wound1)].map((_, rowIndex) => (
              <React.Fragment key={`wound1-${rowIndex}`}>
                {[...Array(6)].map((_, colIndex) => (
                  <input
                    key={`wound1-${rowIndex}-${colIndex}`}
                    type="text"
                    className="border border-gray-400 rounded-md p-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                ))}
              </React.Fragment>
            ))}
          </div>
          <AddRowButton onClick={() => addRow('wound1')} />
        </div>

        <div className="border rounded-lg p-4">
          <div className="text-sm font-medium text-gray-700 mb-2">
           Left Upper Extremity Details
          </div>
          <div className="grid grid-cols-6 gap-2">
            {[...Array(rowCounts.wound1)].map((_, rowIndex) => (
              <React.Fragment key={`wound1-${rowIndex}`}>
                {[...Array(6)].map((_, colIndex) => (
                  <input
                    key={`wound1-${rowIndex}-${colIndex}`}
                    type="text"
                    className="border border-gray-400 rounded-md p-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                ))}
              </React.Fragment>
            ))}
          </div>
          <AddRowButton onClick={() => addRow('wound1')} />
        </div>

        <div className="border rounded-lg p-4">
          <div className="text-sm font-medium text-gray-700 mb-2">
           Right Lower Extremity Details
          </div>
          <div className="grid grid-cols-6 gap-2">
            {[...Array(rowCounts.wound1)].map((_, rowIndex) => (
              <React.Fragment key={`wound1-${rowIndex}`}>
                {[...Array(6)].map((_, colIndex) => (
                  <input
                    key={`wound1-${rowIndex}-${colIndex}`}
                    type="text"
                    className="border border-gray-400 rounded-md p-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                ))}
              </React.Fragment>
            ))}
          </div>
          <AddRowButton onClick={() => addRow('wound1')} />
        </div>


        <div className="border rounded-lg p-4">
          <div className="text-sm font-medium text-gray-700 mb-2">
           Left Lower Extremity Details
          </div>
          <div className="grid grid-cols-6 gap-2">
            {[...Array(rowCounts.wound1)].map((_, rowIndex) => (
              <React.Fragment key={`wound1-${rowIndex}`}>
                {[...Array(6)].map((_, colIndex) => (
                  <input
                    key={`wound1-${rowIndex}-${colIndex}`}
                    type="text"
                    className="border border-gray-400 rounded-md p-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                ))}
              </React.Fragment>
            ))}
          </div>
          <AddRowButton onClick={() => addRow('wound1')} />
        </div>


        <div className="border rounded-lg p-4">
          <div className="text-sm font-medium text-gray-700 mb-2">
           Spine,Ribs,Pelvis Details
          </div>
          <div className="grid grid-cols-6 gap-2">
            {[...Array(rowCounts.wound1)].map((_, rowIndex) => (
              <React.Fragment key={`wound1-${rowIndex}`}>
                {[...Array(6)].map((_, colIndex) => (
                  <input
                    key={`wound1-${rowIndex}-${colIndex}`}
                    type="text"
                    className="border border-gray-400 rounded-md p-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                ))}
              </React.Fragment>
            ))}
          </div>
          <AddRowButton onClick={() => addRow('wound1')} />
        </div>

        <div className="border rounded-lg p-4">
          <div className="text-sm font-medium text-gray-700 mb-2">
          Head and Neck Details
          </div>
          <div className="grid grid-cols-6 gap-2">
            {[...Array(rowCounts.wound1)].map((_, rowIndex) => (
              <React.Fragment key={`wound1-${rowIndex}`}>
                {[...Array(6)].map((_, colIndex) => (
                  <input
                    key={`wound1-${rowIndex}-${colIndex}`}
                    type="text"
                    className="border border-gray-400 rounded-md p-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                ))}
              </React.Fragment>
            ))}
          </div>
          <AddRowButton onClick={() => addRow('wound1')} />
        </div>



      </div>
    </div>
  </div>
  )
}

export default PhysicalTherapty
