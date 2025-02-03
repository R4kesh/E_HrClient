import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const WoundCare = () => {
  // State to manage number of rows for each section
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
          Wound Care 
        </h1>
      </div>
      <div className="p-6">
        <div className="space-y-6">
          {/* Wound Care Initial/Follow-up Subnotes */}
          <div className="border rounded-lg p-4">
            <div className="text-sm font-semibold text-[#3972c7] mb-2">
              Wound Care Initial/Follow-up Subnotes
            </div>
            <div className="grid grid-cols-6 gap-2">
              {[...Array(rowCounts.initial)].map((_, rowIndex) => (
                <React.Fragment key={`initial-${rowIndex}`}>
                  {[...Array(6)].map((_, colIndex) => (
                    <input
                      key={`initial-${rowIndex}-${colIndex}`}
                      type="text"
                      className="border border-gray-200 rounded-md p-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    />
                  ))}
                </React.Fragment>
              ))}
            </div>
            <AddRowButton onClick={() => addRow('initial')} />
          </div>

          {/* From Wounds 1-3 Initial/Follow up Notes */}
          <div className="border rounded-lg p-4">
            <div className="text-sm font-semibold text-[#3972c7] mb-2">
              From Wounds 1-3 Initial/Follow up Notes
            </div>
            <div className="grid grid-cols-6 gap-2">
              {[...Array(rowCounts.notes)].map((_, rowIndex) => (
                <React.Fragment key={`notes-${rowIndex}`}>
                  {[...Array(6)].map((_, colIndex) => (
                    <input
                      key={`notes-${rowIndex}-${colIndex}`}
                      type="text"
                      className="border border-gray-200 rounded-md p-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    />
                  ))}
                </React.Fragment>
              ))}
            </div>
            <AddRowButton onClick={() => addRow('notes')} />
          </div>

          {/* Details for Wound 1 */}
          <div className="border rounded-lg p-4">
            <div className="text-sm font-semibold text-[#3972c7] mb-2">
              Details for Wound 1
            </div>
            <div className="grid grid-cols-6 gap-2">
              {[...Array(rowCounts.wound1)].map((_, rowIndex) => (
                <React.Fragment key={`wound1-${rowIndex}`}>
                  {[...Array(6)].map((_, colIndex) => (
                    <input
                      key={`wound1-${rowIndex}-${colIndex}`}
                      type="text"
                      className="border border-gray-200 rounded-md p-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    />
                  ))}
                </React.Fragment>
              ))}
            </div>
            <AddRowButton onClick={() => addRow('wound1')} />
          </div>

          {/* Details for Wound 2 */}
          <div className="border rounded-lg p-4">
            <div className="text-sm font-semibold text-[#3972c7] mb-2">
              Details for Wound 2
            </div>
            <div className="grid grid-cols-6 gap-2">
              {[...Array(rowCounts.wound2)].map((_, rowIndex) => (
                <React.Fragment key={`wound2-${rowIndex}`}>
                  {[...Array(6)].map((_, colIndex) => (
                    <input
                      key={`wound2-${rowIndex}-${colIndex}`}
                      type="text"
                      className="border border-gray-200 rounded-md p-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    />
                  ))}
                </React.Fragment>
              ))}
            </div>
            <AddRowButton onClick={() => addRow('wound2')} />
          </div>

          {/* Details for Wound 3 */}
          <div className="border rounded-lg p-4">
            <div className="text-sm font-semibold text-[#3972c7] mb-2">
              Details for Wound 3
            </div>
            <div className="grid grid-cols-6 gap-2">
              {[...Array(rowCounts.wound3)].map((_, rowIndex) => (
                <React.Fragment key={`wound3-${rowIndex}`}>
                  {[...Array(6)].map((_, colIndex) => (
                    <input
                      key={`wound3-${rowIndex}-${colIndex}`}
                      type="text"
                      className="border border-gray-200 rounded-md p-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    />
                  ))}
                </React.Fragment>
              ))}
            </div>
            <AddRowButton onClick={() => addRow('wound3')} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WoundCare;