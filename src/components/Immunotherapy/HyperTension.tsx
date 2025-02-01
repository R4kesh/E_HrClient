import React, { useState } from 'react';
import { Plus, Save } from 'lucide-react';

const HyperTension = () => {
  // Initialize with 3 empty reading columns as shown in the image
  const initialMeasurements = [
    { id: 1, name: 'BP Systolic', values: ['', '', ''] },
    { id: 2, name: 'BP Diastolic', values: ['', '', ''] }
  ];

  const [measurements, setMeasurements] = useState(initialMeasurements);
  const [readings, setReadings] = useState(['Reading 1', 'Reading 2', 'Reading 3']);

  const addColumn = () => {
    setReadings([...readings, `Reading ${readings.length + 1}`]);
    setMeasurements(measurements.map(m => ({
      ...m,
      values: [...m.values, '']
    })));
  };

  return (
    <div className="max-w-5xl mx-auto my-8 px-4">
      <div className="bg-blue-600 rounded-lg shadow-lg p-6 mb-8">
        <h1 className="text-2xl font-bold text-white">Hypertension Trending Blood Pressure</h1>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-blue-50">
                <th className="px-4 py-3 text-left text-sm font-semibold text-[#1c4b85] w-1/4">
                  Measure
                </th>
                {readings.map((reading, index) => (
                  <th key={index} className="px-4 py-3 text-left text-sm font-semibold text-[#1c4b85]">
                    {reading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {measurements.map((measurement, idx) => (
                <tr 
                  key={measurement.id}
                  className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50 hover:bg-blue-50 transition-colors'}
                >
                  <td className="px-4 py-3 text-sm text-[#3972c7] font-semibold border-b">
                    {measurement.name}
                  </td>
                  {measurement.values.map((value, valueIdx) => (
                    <td key={valueIdx} className="px-4 py-2 border-b">
                      <input
                        type="number"
                        value={value}
                        onChange={(e) => {
                          const newMeasurements = [...measurements];
                          newMeasurements[idx].values[valueIdx] = e.target.value;
                          setMeasurements(newMeasurements);
                        }}
                        placeholder="Enter value"
                        className="w-full p-2 border placeholder-[#6786b4] border-gray-300 rounded-md 
                                 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                                 transition-all"
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={addColumn}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 
                     text-white rounded-md transition-colors shadow-md"
          >
            <Plus className="w-4 h-4" />
            Add Reading
          </button>

          <button
            className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 
                     text-white rounded-md transition-colors shadow-md"
          >
            <Save className="w-4 h-4" />
            Save Readings
          </button>
        </div>
      </div>
    </div>
  );
};

export default HyperTension;