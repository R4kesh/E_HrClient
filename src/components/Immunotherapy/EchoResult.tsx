import React, { useState } from 'react';
import { Plus, Save } from 'lucide-react';

const EchoResult = () => {
  // Initial echo measurements data
  const initialMeasurements = [
    { id: 1, name: 'Echo / Aortic Root/Aortic Root', values: ['', ''] },
    { id: 2, name: 'Echo / IVS (D)IVS (D)', values: ['', ''] },
    { id: 3, name: 'Echo / IVS (s)IVS (s)', values: ['', ''] },
    { id: 4, name: 'Echo / Left Atrium/Left Atrium', values: ['', ''] },
    { id: 5, name: 'Echo / Lv Diastole/LV Diastole', values: ['', ''] },
    { id: 6, name: 'Echo / LV Systole/LV Systole', values: ['', ''] },
    { id: 7, name: 'Echo / LVEF/LVEF', values: ['', ''] },
    { id: 8, name: 'Echo / LVPW (D)LVPW (D)', values: ['', ''] },
    { id: 9, name: 'Echo / LVPW (s)LVPW (s)', values: ['', ''] },
    { id: 10, name: 'Echo / Rv Diastole/RV Diastole', values: ['', ''] },
  ];

  const [measurements, setMeasurements] = useState(initialMeasurements);

  // Add new column to all measurements
  const addColumn = () => {
    setMeasurements(measurements.map(m => ({
      ...m,
      values: [...m.values, '']
    })));
  };

  return (
    <div className="max-w-6xl mx-auto my-8 bg-white rounded-lg shadow-lg">
      <div className="bg-blue-600 p-6 rounded-t-lg">
        <h1 className="text-2xl font-bold text-white">Echo Results</h1>
      </div>
      
      <div className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 w-1/3">
                  Measurements
                </th>
                {measurements[0].values.map((_, index) => (
                  <th key={index} className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Reading {index + 1}
                  </th>
                ))}
                <th className="w-20"></th>
              </tr>
            </thead>
            <tbody>
              {measurements.map((measurement, idx) => (
                <tr 
                  key={measurement.id}
                  className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                >
                  <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                    {measurement.name}
                  </td>
                  {measurement.values.map((value, valueIdx) => (
                    <td key={valueIdx} className="px-4 py-2">
                      <input
                        type="text"
                        value={value}
                        onChange={(e) => {
                          const newMeasurements = [...measurements];
                          newMeasurements[idx].values[valueIdx] = e.target.value;
                          setMeasurements(newMeasurements);
                        }}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </td>
                  ))}
                  <td className="px-4 py-2">
                    <Plus 
                      className="w-5 h-5 text-blue-600 cursor-pointer hover:text-blue-800"
                      onClick={() => {
                        const newMeasurements = [...measurements];
                        newMeasurements[idx].values.push('');
                        setMeasurements(newMeasurements);
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex justify-between">
          <button
            onClick={addColumn}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add Column
          </button>

          <button
            className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors"
          >
            <Save className="w-4 h-4" />
            Save Results
          </button>
        </div>
      </div>
    </div>
  );
};

export default EchoResult;