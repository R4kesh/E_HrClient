// import React, { useState } from 'react';

// interface TestResult {
//   labResult: string;
//   outOfRange: 'Yes' | 'No';
//   flag: 'High' | 'Low' | 'Normal';
//   units: string;
//   site: string;
// }

// interface TestData {
//   [key: string]: TestResult;
// }

// const Anticoagulation: React.FC = () => {
//   const [selectedTest, setSelectedTest] = useState<string | null>(null);
//   const [testData, setTestData] = useState<TestData>({});
  
//   // Tests in the exact order from the image
//   const tests = [
//     'Current Dose',
//     'International Normalized Ratio',
//     'Target INR',
//     'Fibrinogen',
//     'Prothrombin Time',
//     'Partial Thromboplastin Time'
//   ];

//   // Label-only tests
//   const labelOnlyTests = [
//     'International Normalized Ratio',
//     'Target INR'
//   ];

//   const [date] = useState<string>(new Date().toLocaleDateString());

//   const CalendarIcon = () => (
//     <svg 
//       className="h-5 w-5"
//       fill="none" 
//       stroke="currentColor" 
//       viewBox="0 0 24 24" 
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path 
//         strokeLinecap="round" 
//         strokeLinejoin="round" 
//         strokeWidth={2} 
//         d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
//       />
//     </svg>
//   );

//   const ResultsDialog: React.FC<{ testName: string }> = ({ testName }) => {
//     const handleSave = () => {
//       setSelectedTest(null);
//     };

//     // Different display for label-only tests
//     if (labelOnlyTests.includes(testName)) {
//       return (
//         <div className="absolute right-0 top-0 mt-2 w-[300px] bg-white rounded-lg shadow-xl border border-gray-200 p-4 z-10">
//           <div className="text-sm font-medium text-gray-700 mb-3">
//             {testName} Value
//           </div>
//           <div className="flex items-center space-x-2">
//             <input 
//               className="p-2 border rounded w-full" 
//               placeholder="Enter value"
//             />
//           </div>
//           <div className="mt-4 flex justify-end space-x-2">
//             <button 
//               className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
//               onClick={() => setSelectedTest(null)}
//             >
//               Cancel
//             </button>
//             <button 
//               className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//               onClick={handleSave}
//             >
//               Save
//             </button>
//           </div>
//         </div>
//       );
//     }

//     // Full test display for other tests
//     return (
//       <div className="absolute right-0 top-0 mt-2 w-[600px] bg-white rounded-lg shadow-xl border border-gray-200 p-4 z-10">
//         <div className="grid grid-cols-7 gap-4 text-sm font-medium text-gray-700">
//           <div className="col-span-2">Test Name</div>
//           <div>Lab Result</div>
//           <div>Out of Range</div>
//           <div>Flag</div>
//           <div>Units</div>
//           <div>Range</div>
//           <div>Site</div>
//           <div>Stats</div>
//         </div>
//         <div className="grid grid-cols-7 gap-4 mt-2">
//           <div className="col-span-2">{testName}</div>
//           <input className="p-1 border rounded" />
//           <select className="p-1 border rounded">
//             <option>Yes</option>
//             <option>No</option>
//           </select>
//           <select className="p-1 border rounded">
//             <option>High</option>
//             <option>Low</option>
//             <option>Normal</option>
//           </select>
//           <input className="p-1 border rounded" />
//           <select className="p-1 border rounded">
//             <option>Lab 1</option>
//             <option>Lab 2</option>
//           </select>
          
//         </div>
//         <div className="mt-4 flex justify-end space-x-2">
//           <button 
//             className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
//             onClick={() => setSelectedTest(null)}
//           >
//             Cancel
//           </button>
//           <button 
//             className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//             onClick={handleSave}
//           >
//             Save
//           </button>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-8">
//       <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
//         <div className="bg-blue-600 text-white p-6 rounded-t-lg">
//           <div className="flex justify-between items-center">
//             <h1 className="text-2xl font-bold">Anticoagulation Management</h1>
//             <div className="flex items-center space-x-2">
//               <CalendarIcon />
//               <span>{date}</span>
//             </div>
//           </div>
//         </div>
        
//         <div className="p-6">
//           <div className="space-y-6">
//             {tests.map((test, index) => (
//               <div key={index} className="relative">
//                 <div 
//                   className="p-4 bg-white border rounded-lg hover:shadow-md cursor-pointer transition-all flex justify-between items-center"
//                   onClick={() => setSelectedTest(selectedTest === test ? null : test)}
//                 >
//                   <div className="flex items-center space-x-4">
//                     <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
//                       <span className="text-blue-600 font-semibold">{index + 1}</span>
//                     </div>
//                     <span className="font-medium text-gray-700">{test}</span>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <div className="h-2 w-2 rounded-full bg-green-500"></div>
//                     <span className="text-sm text-gray-500">Last updated: Today</span>
//                   </div>
//                 </div>
//                 {selectedTest === test && <ResultsDialog testName={test} />}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Anticoagulation;


import React, { useState } from 'react';

interface TestResult {
  labResult: string;
  outOfRange: 'Yes' | 'No';
  flag: 'High' | 'Low' | 'Normal';
  units: string;
  range: string;
  site: string;
  stats: string;
}

interface TestData {
  [key: string]: TestResult;
}

const Anticoagulation: React.FC = () => {
  const [selectedTest, setSelectedTest] = useState<string | null>(null);
  const [testData, setTestData] = useState<TestData>({});

  const tests = [
    'Current Dose',
    'International Normalized Ratio',
    'Target INR',
    'Fibrinogen',
    'Prothrombin Time',
    'Partial Thromboplastin Time'
  ];

  const [date] = useState<string>(new Date().toLocaleDateString());

  const CalendarIcon = () => (
    <svg 
      className="h-5 w-5"
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
      />
    </svg>
  );

  const ResultsDialog: React.FC<{ testName: string }> = ({ testName }) => {
    const handleSave = () => {
      setSelectedTest(null);
    };

    return (
      <div className=" right-0 top-0 mt-2 w-[600px] bg-white rounded-lg shadow-xl border border-gray-200 p-4 z-10">
        {/* Test Name */}
        <div className="text-lg font-medium text-gray-700 mb-3">{testName}</div>

        {/* Lab Result */}
        <input className="w-full p-2 border rounded mb-3" placeholder="Lab Result" />

        {/* Out of Range, Flag, Units */}
        <div className="grid grid-cols-3 gap-4 mb-3">
          <select className="p-2 border rounded">
            <option>Yes</option>
            <option>No</option>
          </select>
          <select className="p-2 border rounded">
            <option>High</option>
            <option>Low</option>
            <option>Normal</option>
          </select>
          <input className="p-2 border rounded" placeholder="Units" />
        </div>

        {/* Range, Site, Stats */}
        <div className="grid grid-cols-3 gap-4">
          <input className="p-2 border rounded" placeholder="Range" />
          <select className="p-2 border rounded">
            <option>Lab 1</option>
            <option>Lab 2</option>
          </select>
          <input className="p-2 border rounded" placeholder="Stats" />
        </div>

        {/* Buttons */}
        <div className="mt-4 flex justify-end space-x-2">
          <button 
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            onClick={() => setSelectedTest(null)}
          >
            Cancel
          </button>
          <button 
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-blue-600 text-white p-6 rounded-t-lg">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl  font-bold">Anticoagulation Management</h1>
            <div className="flex items-center space-x-2">
              <CalendarIcon />
              <span>{date}</span>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <div className="space-y-6">
            {tests.map((test, index) => (
              <div key={index} className="relative">
                <div 
                  className="p-4 bg-white border rounded-lg hover:shadow-md cursor-pointer transition-all flex justify-between items-center"
                  onClick={() => setSelectedTest(selectedTest === test ? null : test)}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">{index + 1}</span>
                    </div>
                    <span className="font-medium text-gray-700">{test}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <span className="text-sm text-gray-500">Last updated: Today</span>
                  </div>
                </div>
                {selectedTest === test && <ResultsDialog testName={test} />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Anticoagulation;
