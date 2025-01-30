import React, { useState } from 'react';
import { Plus, Save } from 'lucide-react';

const PrenatalVisit = () => {
  const [fields, setFields] = useState([
    { id: 1, name: 'EGA', values: ['', ''] },
    { id: 2, name: 'Fundal Height', values: ['', ''] },
    { id: 3, name: 'Presentation', values: ['', ''] },
    { id: 4, name: 'FHR', values: ['', ''] },
    { id: 5, name: 'Movement', values: ['', ''] },
    { id: 6, name: 'Preterm Labor Signs', values: ['', ''] },
    { id: 7, name: 'Effacement', values: ['', ''] },
    { id: 8, name: 'Dilation', values: ['', ''] },
    { id: 9, name: 'Cervix Length', values: ['', ''] },
    { id: 10, name: 'BP Systolic', values: ['', ''] },
    { id: 11, name: 'BP Diastolic', values: ['', ''] },
    { id: 12, name: 'Weight', values: ['', ''] },
    { id: 13, name: 'Weight Change', values: ['', ''] },
    { id: 14, name: 'Glucose', values: ['', ''] },
    { id: 15, name: 'Protein', values: ['', ''] },
    { id: 16, name: 'Edema', values: ['', ''] },
    { id: 17, name: 'Pain', values: ['', ''] },
  ]);

  // Add new column to all fields
  const addColumn = () => {
    setFields(fields.map(f => ({
      ...f,
      values: [...f.values, '']
    })));
  };

  return (
    <div className="max-w-6xl mx-auto my-8  bg-white rounded-lg shadow-lg">
      <div className="bg-blue-600 p-6 rounded-t-lg">
        <h1 className="text-2xl font-bold text-white">Prenatal Visit</h1>
      </div>

      <div className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 w-1/3">Field</th>
                {fields[0].values.map((_, index) => (
                  <th key={index} className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Reading {index + 1}
                  </th>
                ))}
                <th className="w-20"></th>
              </tr>
            </thead>
            <tbody>
              {fields.map((field, idx) => (
                <tr key={field.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 text-sm text-gray-700 font-medium">{field.name}</td>
                  {field.values.map((value, valueIdx) => (
                    <td key={valueIdx} className="px-4 py-2">
                      <input
                        type="text"
                        value={value}
                        onChange={(e) => {
                          const newFields = [...fields];
                          newFields[idx].values[valueIdx] = e.target.value;
                          setFields(newFields);
                        }}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </td>
                  ))}
                  <td className="px-4 py-2">
                    <Plus
                      className="w-5 h-5 text-blue-600 cursor-pointer hover:text-blue-800"
                      onClick={() => {
                        const newFields = [...fields];
                        newFields[idx].values.push('');
                        setFields(newFields);
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

export default PrenatalVisit;
