// import React,{useState,useEffect} from 'react'

// const PainManagement = () => {

//     const [PainManagementData,setPainManagementData]=useState([]);
//     const [PainManagementColumn, setPainManagementColumns] = useState(1);

//     const [PainEnhanceData,setPainEnhanceData]=useState([]);
//     const [PainEnhanceColumn, setPainEnhanceColumns] = useState(1);

//     const [Pain1Data,setPain1Data]=useState([]);
//     const [Pain1DataColumn, setPain1DataColumns] = useState(1);

//     const [Pain2Data,setPain2Data]=useState([]);
//     const [Pain2DataColumn, setPain2DataColumns] = useState(1);

//     const [Pain3Data,setPain3Data]=useState([]);
//     const [Pain3DataColumn, setPain3DataColumns] = useState(1);

//     const [ PainLocation1Data,setPainLocation1Data]=useState([]);
//     const [PainLocation1Column, PainLocation1Columns] = useState(1);

//     const [ PainLocation2Data,setPainLocation2Data]=useState([]);
//     const [PainLocation2Column, PainLocation2Columns] = useState(1);


    

//     useEffect(() => {
//         const PainManagementData = [
//             "Current Pain Medications",
//             "Present Pain Level",
//             "Pain Level Last Visit",
//             "Spasms (Some, 1-10/hr, >10/hr, NA)",
//             "AM Stiffness (15, 30, 45, 60+ min, NA)"
//           ];

//           const PainEnhanceData=["Pain Control Method:"]

          
//           const Pain1Data = [
//             "Pain/Problem",
//             "Present Pain Level",
//             "Pain Level Last Visit",
//             "Spasms (Some, 1-10/hr, >10/hr, NA)",
//             "AM Stiffness (15, 30, 45, 60+ min, NA)",
//             "Treatments"
//           ];

//           const Pain2Data = [
//             "Pain/Problem",
//             "Present Pain Level",
//             "Spasms (Some, 1-10/hr, >10/hr, NA)",
//             "AM Stiffness (15, 30, 45, 60+ min, NA)",
//             "Treatments"
//           ];

//           const Pain3Data = [
//             "Pain/Problem",
//             "Present Pain Level",
//             "Pain Level Last Visit",
//             "Spasms (Some, 1-10/hr, >10/hr, NA)",
//             "AM Stiffness (15, 30, 45, 60+ min, NA)",
//             "Treatments"
//           ];

//           const PainLocation1Data = [
//             "Location",
//             "Present Pain Level",
//             "AM Stiffness (30, 45, 60+ min, --)"
//           ];

//           const PainLocation2Data = [
//             "Location",
//             "Present Pain Level",
//             "Pain Level Last Visit",
//             "AM Stiffness"
//           ];
          
          
          
          
          
          
    
//         setPainManagementData(PainManagementData)
//         setPainEnhanceData(PainEnhanceData)
//         setPain1Data(Pain1Data)
//         setPain2Data(Pain2Data)
//         setPain3Data(Pain3Data)
//         setPainLocation1Data(PainLocation1Data)
//         setPainLocation2Data(PainLocation2Data)



    
//       }, []);

//       const addPainManagementColumns = () =>setPainManagementColumns(PainManagementColumn+1)
//       const addPainEnhanceColumns = () =>setPainEnhanceColumns(PainEnhanceColumn+1)
//       const addPain1DataColumns = () =>setPain1DataColumns(Pain1DataColumn+1)
//       const addPain2DataColumns = () =>setPain2DataColumns(Pain2DataColumn+1)
//       const addPain3DataColumns = () =>setPain3DataColumns(Pain3DataColumn+1)
//       const addPainLocation1 = () =>PainLocation1Columns(PainLocation1Column+1)
//       const addPainLocation2 = () =>PainLocation2Columns(PainLocation2Column+1)





//   return (
//     <div className="bg-gradient-to-r from-blue-50 to-purple-50 min-h-screen">
//     <div className="max-w-7xl mx-auto space-y-12">

//     <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//           <h2 className="px-6 py-4 text-xl font-semibold text-gray-800 bg-gradient-to-r from-blue-600 to-blue-600 text-white">
//             Pain Management
//           </h2>
//           <table className="min-w-full">
//             <thead className="bg-gradient-to-r from-blue-600 to-blue-600">
//               <tr>
//                 <th className="px-8 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
//                   Measure
//                 </th>
//                 {Array.from({ length: PainManagementColumn }).map((_, index) => (
//                   <th
//                     key={index}
//                     className="px-8 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider"
//                   >
//                     Result {index + 1}
//                   </th>
//                 ))}
//                 <th className=" py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
//                   <button
//                     onClick={addPainManagementColumns}
//                     className="bg-white text-blue-600 px-4 py-2 rounded-lg shadow-md hover:bg-blue-50 transition duration-200"
//                   >
//                     Add Column
//                   </button>
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {PainManagementData.map((test, index) => (
//                 <tr key={index} className="hover:bg-gray-50 transition duration-200">
//                   <td className="px-4 py-2 whitespace-nowrap text-base font-medium text-gray-900">
//                     {test} {/* Render test name */}
//                   </td>
//                   {Array.from({ length: PainManagementColumn }).map((_, colIndex) => (
//                     <td key={colIndex} className="px-8 py-4 whitespace-nowrap">
//                       <input
//                         type="text"
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
//                         placeholder="Enter value"
//                       />
//                     </td>
//                   ))}
//                   <td className="px-8 py-4 whitespace-nowrap"></td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>


//         <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//           <h2 className="px-3 py-1 text-xl font-semibold text-gray-800 bg-gradient-to-r from-blue-600 to-blue-600 text-white">
//             Pain Enhanced Visit
//           </h2>
//           <table className="min-w-full">
//             <thead className="bg-gradient-to-r from-blue-600 to-blue-600">
//               <tr>
//                 <th className="px-8  text-left text-sm font-semibold text-white uppercase tracking-wider">
//                   Measure
//                 </th>
//                 {Array.from({ length: PainEnhanceColumn }).map((_, index) => (
//                   <th
//                     key={index}
//                     className="px-8 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider"
//                   >
//                     Result {index + 1}
//                   </th>
//                 ))}
//                 <th className=" py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
//                   <button
//                     onClick={addPainEnhanceColumns}
//                     className="bg-white text-purple-600 px-4 py-2 rounded-lg shadow-md hover:bg-purple-50 transition duration-200"
//                   >
//                     Add Column
//                   </button>
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {PainEnhanceData.map((test, index) => (
//                 <tr key={index} className="hover:bg-gray-50 transition duration-200">
//                   <td className="px-4 py-2 whitespace-nowrap text-base font-medium text-gray-900">
//                     {test} {/* Render CBC test name */}
//                   </td>
//                   {Array.from({ length: PainEnhanceColumn }).map((_, PainEnhanceIndex) => (
//                     <td key={PainEnhanceIndex} className="px-8 py-4 whitespace-nowrap">
//                       <input
//                         type="text"
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
//                         placeholder="Enter value"
//                       />
//                     </td>
//                   ))}
//                   <td className="px-8 py-4 whitespace-nowrap"></td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//           <h2 className="px-3 py-1 text-xl font-semibold text-gray-800 bg-gradient-to-r from-blue-600 to-blue-600 text-white">
//             Pain 1 Data
//           </h2>
//           <table className="min-w-full">
//             <thead className="bg-gradient-to-r from-blue-600 to-blue-600">
//               <tr>
//                 <th className="px-8  text-left text-sm font-semibold text-white uppercase tracking-wider">
//                   Measure
//                 </th>
//                 {Array.from({ length: Pain1DataColumn }).map((_, index) => (
//                   <th
//                     key={index}
//                     className="px-8 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider"
//                   >
//                     Result {index + 1}
//                   </th>
//                 ))}
//                 <th className=" py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
//                   <button
//                     onClick={addPain1DataColumns}
//                     className="bg-white text-purple-600 px-4 py-2 rounded-lg shadow-md hover:bg-purple-50 transition duration-200"
//                   >
//                     Add Column
//                   </button>
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {Pain1Data.map((test, index) => (
//                 <tr key={index} className="hover:bg-gray-50 transition duration-200">
//                   <td className="px-4 py-2 whitespace-nowrap text-base font-medium text-gray-900">
//                     {test} {/* Render CBC test name */}
//                   </td>
//                   {Array.from({ length: Pain1DataColumn }).map((_, PainEnhanceIndex) => (
//                     <td key={PainEnhanceIndex} className="px-8 py-4 whitespace-nowrap">
//                       <input
//                         type="text"
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
//                         placeholder="Enter value"
//                       />
//                     </td>
//                   ))}
//                   <td className="px-8 py-4 whitespace-nowrap"></td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>



//         <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//           <h2 className="px-3 py-1 text-xl font-semibold text-gray-800 bg-gradient-to-r from-blue-600 to-blue-600 text-white">
//             Pain 2 Data
//           </h2>
//           <table className="min-w-full">
//             <thead className="bg-gradient-to-r from-blue-600 to-blue-600">
//               <tr>
//                 <th className="px-8  text-left text-sm font-semibold text-white uppercase tracking-wider">
//                   Measure
//                 </th>
//                 {Array.from({ length: Pain2DataColumn }).map((_, index) => (
//                   <th
//                     key={index}
//                     className="px-8 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider"
//                   >
//                     Result {index + 1}
//                   </th>
//                 ))}
//                 <th className=" py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
//                   <button
//                     onClick={addPain2DataColumns}
//                     className="bg-white text-purple-600 px-4 py-2 rounded-lg shadow-md hover:bg-purple-50 transition duration-200"
//                   >
//                     Add Column
//                   </button>
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {Pain2Data.map((test, index) => (
//                 <tr key={index} className="hover:bg-gray-50 transition duration-200">
//                   <td className="px-4 py-2 whitespace-nowrap text-base font-medium text-gray-900">
//                     {test} {/* Render CBC test name */}
//                   </td>
//                   {Array.from({ length: Pain2DataColumn }).map((_, Pain2EnhanceIndex) => (
//                     <td key={Pain2EnhanceIndex} className="px-8 py-4 whitespace-nowrap">
//                       <input
//                         type="text"
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
//                         placeholder="Enter value"
//                       />
//                     </td>
//                   ))}
//                   <td className="px-8 py-4 whitespace-nowrap"></td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>


//         <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//           <h2 className="px-3 py-1 text-xl font-semibold text-gray-800 bg-gradient-to-r from-blue-600 to-blue-600 text-white">
//             Pain 3 Data
//           </h2>
//           <table className="min-w-full">
//             <thead className="bg-gradient-to-r from-blue-600 to-blue-600">
//               <tr>
//                 <th className="px-8  text-left text-sm font-semibold text-white uppercase tracking-wider">
//                   Measure
//                 </th>
//                 {Array.from({ length: Pain3DataColumn }).map((_, index) => (
//                   <th
//                     key={index}
//                     className="px-8 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider"
//                   >
//                     Result {index + 1}
//                   </th>
//                 ))}
//                 <th className=" py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
//                   <button
//                     onClick={addPain3DataColumns}
//                     className="bg-white text-purple-600 px-4 py-2 rounded-lg shadow-md hover:bg-purple-50 transition duration-200"
//                   >
//                     Add Column
//                   </button>
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {Pain3Data.map((test, index) => (
//                 <tr key={index} className="hover:bg-gray-50 transition duration-200">
//                   <td className="px-4 py-2 whitespace-nowrap text-base font-medium text-gray-900">
//                     {test} {/* Render CBC test name */}
//                   </td>
//                   {Array.from({ length: Pain3DataColumn }).map((_, Pain3EnhanceIndex) => (
//                     <td key={Pain3EnhanceIndex} className="px-8 py-4 whitespace-nowrap">
//                       <input
//                         type="text"
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
//                         placeholder="Enter value"
//                       />
//                     </td>
//                   ))}
//                   <td className="px-8 py-4 whitespace-nowrap"></td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>


//         <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//           <h2 className="px-3 py-1 text-xl font-semibold text-gray-800 bg-gradient-to-r from-blue-600 to-blue-600 text-white">
//             Pain Management Visit_Pain Location 1
//           </h2>
//           <table className="min-w-full">
//             <thead className="bg-gradient-to-r from-blue-600 to-blue-600">
//               <tr>
//                 <th className="px-8  text-left text-sm font-semibold text-white uppercase tracking-wider">
//                   Measure
//                 </th>
//                 {Array.from({ length: PainLocation1Column }).map((_, index) => (
//                   <th
//                     key={index}
//                     className="px-8 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider"
//                   >
//                     Result {index + 1}
//                   </th>
//                 ))}
//                 <th className=" py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
//                   <button
//                     onClick={addPainLocation1}
//                     className="bg-white text-purple-600 px-4 py-2 rounded-lg shadow-md hover:bg-purple-50 transition duration-200"
//                   >
//                     Add Column
//                   </button>
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {PainLocation1Data.map((test, index) => (
//                 <tr key={index} className="hover:bg-gray-50 transition duration-200">
//                   <td className="px-4 py-2 whitespace-nowrap text-base font-medium text-gray-900">
//                     {test} {/* Render CBC test name */}
//                   </td>
//                   {Array.from({ length: PainLocation1Column }).map((_, PainLocation1ColumnIndex) => (
//                     <td key={PainLocation1ColumnIndex} className="px-8 py-4 whitespace-nowrap">
//                       <input
//                         type="text"
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
//                         placeholder="Enter value"
//                       />
//                     </td>
//                   ))}
//                   <td className="px-8 py-4 whitespace-nowrap"></td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>



//         <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//           <h2 className="px-3 py-1 text-xl font-semibold text-gray-800 bg-gradient-to-r from-blue-600 to-blue-600 text-white">
//             Pain Management Visit_Pain Location 1
//           </h2>
//           <table className="min-w-full">
//             <thead className="bg-gradient-to-r from-blue-600 to-blue-600">
//               <tr>
//                 <th className="px-8  text-left text-sm font-semibold text-white uppercase tracking-wider">
//                   Measure
//                 </th>
//                 {Array.from({ length: PainLocation2Column }).map((_, index) => (
//                   <th
//                     key={index}
//                     className="px-8 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider"
//                   >
//                     Result {index + 1}
//                   </th>
//                 ))}
//                 <th className=" py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
//                   <button
//                     onClick={addPainLocation2}
//                     className="bg-white text-purple-600 px-4 py-2 rounded-lg shadow-md hover:bg-purple-50 transition duration-200"
//                   >
//                     Add Column
//                   </button>
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {PainLocation2Data.map((test, index) => (
//                 <tr key={index} className="hover:bg-gray-50 transition duration-200">
//                   <td className="px-4 py-2 whitespace-nowrap text-base font-medium text-gray-900">
//                     {test} {/* Render CBC test name */}
//                   </td>
//                   {Array.from({ length: PainLocation2Column }).map((_, PainLocation2ColumnIndex) => (
//                     <td key={PainLocation2ColumnIndex} className="px-8 py-4 whitespace-nowrap">
//                       <input
//                         type="text"
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
//                         placeholder="Enter value"
//                       />
//                     </td>
//                   ))}
//                   <td className="px-8 py-4 whitespace-nowrap"></td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>


//     </div>
//     </div>
//   )
// }

// export default PainManagement

import React, { useState, useEffect } from 'react';

const PainManagement = () => {
  const [PainManagementData, setPainManagementData] = useState([]);
  const [PainManagementColumn, setPainManagementColumns] = useState(1);

  const [PainEnhanceData, setPainEnhanceData] = useState([]);
  const [PainEnhanceColumn, setPainEnhanceColumns] = useState(1);

  const [Pain1Data, setPain1Data] = useState([]);
  const [Pain1DataColumn, setPain1DataColumns] = useState(1);

  const [Pain2Data, setPain2Data] = useState([]);
  const [Pain2DataColumn, setPain2DataColumns] = useState(1);

  const [Pain3Data, setPain3Data] = useState([]);
  const [Pain3DataColumn, setPain3DataColumns] = useState(1);

  const [PainLocation1Data, setPainLocation1Data] = useState([]);
  const [PainLocation1Column, setPainLocation1Columns] = useState(1);

  const [PainLocation2Data, setPainLocation2Data] = useState([]);
  const [PainLocation2Column, setPainLocation2Columns] = useState(1);

  const [selectedOption, setSelectedOption] = useState('all'); // Default to show all
  const [isFilterActive, setIsFilterActive] = useState(false); // Track if filter is active

  useEffect(() => {
    const PainManagementData = [
      'Current Pain Medications',
      'Present Pain Level',
      'Pain Level Last Visit',
      'Spasms (Some, 1-10/hr, >10/hr, NA)',
      'AM Stiffness (15, 30, 45, 60+ min, NA)',
    ];

    const PainEnhanceData = ['Pain Control Method:'];

    const Pain1Data = [
      'Pain/Problem',
      'Present Pain Level',
      'Pain Level Last Visit',
      'Spasms (Some, 1-10/hr, >10/hr, NA)',
      'AM Stiffness (15, 30, 45, 60+ min, NA)',
      'Treatments',
    ];

    const Pain2Data = [
      'Pain/Problem',
      'Present Pain Level',
      'Spasms (Some, 1-10/hr, >10/hr, NA)',
      'AM Stiffness (15, 30, 45, 60+ min, NA)',
      'Treatments',
    ];

    const Pain3Data = [
      'Pain/Problem',
      'Present Pain Level',
      'Pain Level Last Visit',
      'Spasms (Some, 1-10/hr, >10/hr, NA)',
      'AM Stiffness (15, 30, 45, 60+ min, NA)',
      'Treatments',
    ];

    const PainLocation1Data = [
      'Location',
      'Present Pain Level',
      'AM Stiffness (30, 45, 60+ min, --)',
    ];

    const PainLocation2Data = [
      'Location',
      'Present Pain Level',
      'Pain Level Last Visit',
      'AM Stiffness',
    ];

    setPainManagementData(PainManagementData);
    setPainEnhanceData(PainEnhanceData);
    setPain1Data(Pain1Data);
    setPain2Data(Pain2Data);
    setPain3Data(Pain3Data);
    setPainLocation1Data(PainLocation1Data);
    setPainLocation2Data(PainLocation2Data);
  }, []);

  const addPainManagementColumns = () => setPainManagementColumns(PainManagementColumn + 1);
  const addPainEnhanceColumns = () => setPainEnhanceColumns(PainEnhanceColumn + 1);
  const addPain1DataColumns = () => setPain1DataColumns(Pain1DataColumn + 1);
  const addPain2DataColumns = () => setPain2DataColumns(Pain2DataColumn + 1);
  const addPain3DataColumns = () => setPain3DataColumns(Pain3DataColumn + 1);
  const addPainLocation1 = () => setPainLocation1Columns(PainLocation1Column + 1);
  const addPainLocation2 = () => setPainLocation2Columns(PainLocation2Column + 1);

  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    setIsFilterActive(value !== 'all'); // Activate filter if not 'all'
  };

  // Helper function to render a table
  const renderTable = (title, data, columns, addColumnsFunction, bgColor = 'blue') => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <h2 className={`px-6 py-4 text-xl font-semibold text-gray-800 bg-gradient-to-r from-blue-600 to-blue-600 text-white`}>
        {title}
      </h2>
      <table className="min-w-full">
        <thead className={`bg-gradient-to-r from-blue-600 to-blue-600`}>
          <tr>
            <th className="px-8 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
              Measure
            </th>
            {Array.from({ length: columns }).map((_, index) => (
              <th
                key={index}
                className="px-8 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider"
              >
                Result {index + 1}
              </th>
            ))}
            <th className="py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
              <button
                onClick={addColumnsFunction}
                className={`bg-white text-${bgColor}-600 px-4 py-2 rounded-lg shadow-md hover:bg-${bgColor}-50 transition duration-200`}
              >
                Add Column
              </button>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((test, index) => (
            <tr key={index} className="hover:bg-gray-50 transition duration-200">
              <td className="px-4 py-2 whitespace-nowrap font-semibold text-md text-[#3972c7]">
                {test}
              </td>
              {Array.from({ length: columns }).map((_, colIndex) => (
                <td key={colIndex} className="px-8 py-4 whitespace-nowrap">
                  <input
                    type="text"
                    className="w-full placeholder-[#6786b4] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                    placeholder="Enter value"
                  />
                </td>
              ))}
              <td className="px-8 py-4 whitespace-nowrap"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="bg-gradient-to-r  min-h-screen">
      <div className="max-w-7xl mx-auto space-y-12 p-6">
        {/* Filter Dropdown */}
        <div className="flex justify-start">
          <select
            value={selectedOption}
            onChange={handleOptionChange}
            className="px-4 py-2 border text-[#3972c7] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">Show All</option>
            <option value="pain management">Pain Management</option>
            <option value="pain enhance visit">Pain Enhance Visit</option>
            <option value="pain1 data">Pain 1 Data</option>
            <option value="pain2 data">Pain 2 Data</option>
            <option value="pain3 data">Pain 3 Data</option>
            <option value="pain location 1">Pain Management Visit_Pain Location 1</option>
            <option value="pain location 2">Pain Management Visit_Pain Location 2</option>
          </select>
        </div>

        {/* Render All Tables if No Filter is Active */}
        {!isFilterActive && (
          <>
            {renderTable('Pain Management', PainManagementData, PainManagementColumn, addPainManagementColumns, 'blue')}
            {renderTable('Pain Enhanced Visit', PainEnhanceData, PainEnhanceColumn, addPainEnhanceColumns, 'purple')}
            {renderTable('Pain 1 Data', Pain1Data, Pain1DataColumn, addPain1DataColumns, 'green')}
            {renderTable('Pain 2 Data', Pain2Data, Pain2DataColumn, addPain2DataColumns, 'red')}
            {renderTable('Pain 3 Data', Pain3Data, Pain3DataColumn, addPain3DataColumns, 'yellow')}
            {renderTable('Pain Management Visit_Pain Location 1', PainLocation1Data, PainLocation1Column, addPainLocation1, 'indigo')}
            {renderTable('Pain Management Visit_Pain Location 2', PainLocation2Data, PainLocation2Column, addPainLocation2, 'pink')}
          </>
        )}

        {/* Render Only Selected Table if Filter is Active */}
        {isFilterActive && (
          <>
            {selectedOption === 'pain management' &&
              renderTable('Pain Management', PainManagementData, PainManagementColumn, addPainManagementColumns, 'blue')}
            {selectedOption === 'pain enhance visit' &&
              renderTable('Pain Enhanced Visit', PainEnhanceData, PainEnhanceColumn, addPainEnhanceColumns, 'purple')}
            {selectedOption === 'pain1 data' &&
              renderTable('Pain 1 Data', Pain1Data, Pain1DataColumn, addPain1DataColumns, 'green')}
            {selectedOption === 'pain2 data' &&
              renderTable('Pain 2 Data', Pain2Data, Pain2DataColumn, addPain2DataColumns, 'red')}
            {selectedOption === 'pain3 data' &&
              renderTable('Pain 3 Data', Pain3Data, Pain3DataColumn, addPain3DataColumns, 'yellow')}
            {selectedOption === 'pain location 1' &&
              renderTable('Pain Management Visit_Pain Location 1', PainLocation1Data, PainLocation1Column, addPainLocation1, 'indigo')}
            {selectedOption === 'pain location 2' &&
              renderTable('Pain Management Visit_Pain Location 2', PainLocation2Data, PainLocation2Column, addPainLocation2, 'pink')}
          </>
        )}
      </div>
    </div>
  );
};

export default PainManagement;
