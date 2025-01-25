
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const LabOrderMain = () => {
//   const [activeTab, setActiveTab] = useState('orders');
//   const [testType, setTestType] = useState('');
//   const [testCategory, setTestCategory] = useState('');
//   const [testTypes, setTestTypes] = useState([]);
//   const [testCategories, setTestCategories] = useState([]);
//   const [isCategoryEnabled, setIsCategoryEnabled] = useState(false);

//   // Fetch test types
//   const fetchTestTypes = async () => {
//     try {
//       const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/patient/testType`);
//       setTestTypes(response.data);
//     } catch (error) {
//       console.error('Error fetching test types:', error);
//     }
//   };

//   // Fetch tests by type
//   const fetchTestsByType = async (typeId) => {
//     try {
//       const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/patient/tests/${typeId}`);
//       setTestCategories(response.data);
//     } catch (error) {
//       console.error('Error fetching tests by type:', error);
//     }
//   };

//   // Handle test type selection
//   const handleTestTypeChange = (e) => {
//     const selectedType = e.target.value;
//     setTestType(selectedType);

//     const selectedTypeId = testTypes.find((type) => type.TestType === selectedType)?.id;
//     if (selectedTypeId) {
//       fetchTestsByType(selectedTypeId);
//       setIsCategoryEnabled(true);
//     } else {
//       setTestCategories([]);
//       setIsCategoryEnabled(false);
//     }
//   };

//   useEffect(() => {
//     fetchTestTypes();
//   }, []);

//   const handleTabChange = (tab) => setActiveTab(tab);

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <div className="max-w-1xl mx-auto p-4">
//         {/* Tab Section */}
//         <div className="h-10 flex justify-center border-b border-gray-300  gap-2">
//           <button
//             className={`px-1 py-  rounded-t-lg w-36 focus:outline-none transition duration-300 transform ${
//               activeTab === 'orders'
//                 ? 'bg-teal-500 text-white border-teal-600 scale-110 shadow-lg'
//                 : 'text-teal-500 hover:bg-teal-100 border-transparent bg-teal-100'
//             }`}
//             onClick={() => handleTabChange('orders')}
//           >
//             Orders
//           </button>

//           <button
//             className={`px-6 py-3 w-36 rounded-t-lg focus:outline-none transition duration-300 transform ${
//               activeTab === 'test'
//                 ? 'bg-teal-500 text-white border-teal-600 scale-110 shadow-lg'
//                 : 'text-teal-500 hover:bg-teal-100 border-transparent bg-teal-100'
//             }`}
//             onClick={() => handleTabChange('test')}
//           >
//             Test
//           </button>
//         </div>

//         {/* Tab Content */}
//         <div className="transition-all duration-500">
//           {activeTab === 'orders' && (
//             <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300">
//               <h2 className="text-xl font-semibold text-gray-800 mb-4">Lab Orders</h2>
//               <div className="text-gray-500">Content for Lab Orders...</div>
//             </div>
//           )}

// {activeTab === 'test' && (
//   <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300">
//     {/* <h2 className="text-xl font-semibold text-gray-800 mb-4">Test Selection</h2> */}
//     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//       {/* Test Type Dropdown */}
//       <div className="relative">
//         <label className="block text-sm font-medium text-gray-700">Type of Test</label>
//         <select
//           value={testType}
//           onChange={handleTestTypeChange}
//           className="w-full mt-2 px-4 py-3 border rounded-lg bg-white shadow-sm text-gray-700 focus:ring-teal-500 focus:border-teal-500 hover:ring-teal-300 transition duration-300"
//         >
//           <option value="" className="text-gray-500">
//             Select Type
//           </option>
//           {testTypes.map((type) => ( 
//             <option className="bg-gray-100 text-teal-700 hover:bg-teal-100 hover:text-teal-900 transition duration-200 ease-in-out" key={type.id} value={type.TestType}>
//               {type.TestType}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Test Category Dropdown */}
//       <div className="relative">
//         <label className="block text-sm font-medium text-gray-700">Test Category</label>
//         <div className="relative mt-2">
//           <select
//             value={testCategory}
//             onChange={(e) => setTestCategory(e.target.value)}
//             disabled={!isCategoryEnabled}
//             className={`w-full px-4 py-3 border rounded-lg transition-all duration-300 ${
//               isCategoryEnabled
//                 ? 'bg-white text-gray-700 border-teal-500 shadow-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500 hover:ring-1 hover:ring-teal-400 hover:border-teal-700'
//                 : 'bg-gray-200 text-gray-400 border-gray-300 cursor-not-allowed'
//             }`}
//           >
//             <option value="" className="text-gray-500">
//               {isCategoryEnabled ? 'Select Category' : 'Select Type First'}
//             </option>
//             {testCategories.map((category) => (
//               <option
//                 key={category.id}
//                 value={category.test}
//                 className="bg-gray-100 text-teal-700 hover:bg-teal-100 hover:text-teal-900 transition duration-200 ease-in-out"
//               >
//                 {category.test}
//               </option>
//             ))}
//           </select>
//         </div>
//         {!isCategoryEnabled && (
//           <p className="absolute text-xs text-red-500 mt-1">
//             Please select a test type first.
//           </p>
//         )}
//       </div>
//     </div>
//   </div>
// )}
 
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LabOrderMain;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useTabs } from '../../Context/TabProvider';


const LabOrderMain = () => {
  const [activeTab, setActiveTab] = useState('orders');
  const [testType, setTestType] = useState('');
  const [testCategory, setTestCategory] = useState('');
  const [testTypes, setTestTypes] = useState([]);
  const [testCategories, setTestCategories] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isCategoryEnabled, setIsCategoryEnabled] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [categoriesPerPage] = useState(16);
  const { id } = useParams(); // Get patient ID from the route
  console.log("id",id);
  const { addTab } = useTabs();


  // Fetch test types
  const fetchTestTypes = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/patient/testType`);
      setTestTypes(response.data);
    } catch (error) {
      console.error('Error fetching test types:', error);
    }
  };

  // Fetch test categories based on selected type
  const fetchTestsByType = async (typeId) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/patient/tests/${typeId}`);
      setTestCategories(response.data);
    } catch (error) {
      console.error('Error fetching test categories:', error);
    }
  };

  // Fetch test category data
  const fetchCategoryData = async (testId) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/patient/testCategoryData/${testId}`);
      setCategoryData(response.data);
    } catch (error) {
      console.error('Error fetching category data:', error);
    }
  };

  // Handle test type selection
  const handleTestTypeChange = (e) => {
    const selectedType = e.target.value;
    setTestType(selectedType);
    const selectedTypeId = testTypes.find((type) => type.TestType === selectedType)?.id;
    if (selectedTypeId) {
      fetchTestsByType(selectedTypeId);
      setIsCategoryEnabled(true);
    } else {
      setTestCategories([]);
      setIsCategoryEnabled(false);
    }
  };

  // Handle test category selection
  const handleTestCategoryChange = (e) => {
    setTestCategory(e.target.value);
    const selectedTestCategory = testCategories.find(
      (category) => category.test === e.target.value
    );
    if (selectedTestCategory) {
      fetchCategoryData(selectedTestCategory.id);
    }
  };

  // Handle category checkbox selection
  const handleCategoryCheckboxChange = (e) => {
    const category = e.target.value;
    if (e.target.checked) {
      setSelectedCategories((prev) => [...prev, category]);
    } else {
      setSelectedCategories((prev) => prev.filter((item) => item !== category));
    }
  };

  // Handle submit
  const handleSubmit = () => {
    console.log('Selected categories:', selectedCategories);
  };

  // Paginate categories based on current page
  const paginateCategories = (categories) => {
    const indexOfLastCategory = currentPage * categoriesPerPage;
    const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
    return categories.slice(indexOfFirstCategory, indexOfLastCategory);
  };

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate total pages
  const totalPages = Math.ceil(categoryData.category?.length / categoriesPerPage);

  useEffect(() => {
    fetchTestTypes();
  }, []);

  const handleTabChange = (tab) => setActiveTab(tab);

  const paginatedCategories = paginateCategories(categoryData.category || []);

  useEffect(() => {
    addTab({ id: "/LabOrders", name: "LabOrders", path: `/LabOrders/${id}` });
  }, [addTab]);


  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-1xl mx-auto p-4">
        {/* Tab Section */}
        <div className="h-10 flex justify-center border-b border-gray-300 gap-2">
          <button
            className={`px-1 py-2 rounded-t-lg w-36 focus:outline-none transition duration-300 transform ${
              activeTab === 'orders'
                ? 'bg-teal-500 text-white border-teal-600 scale-110 shadow-lg'
                : 'text-teal-500 hover:bg-teal-100 border-transparent bg-teal-100'
            }`}
            onClick={() => handleTabChange('orders')}
          >
            Orders
          </button>

          <button
            className={`px-6 py-2 w-36 rounded-t-lg focus:outline-none transition duration-300 transform ${
              activeTab === 'test'
                ? 'bg-teal-500 text-white border-teal-600 scale-110 shadow-lg'
                : 'text-teal-500 hover:bg-teal-100 border-transparent bg-teal-100'
            }`}
            onClick={() => handleTabChange('test')}
          >
            Test
          </button>
        </div>

        {/* Tab Content */}
        <div className="transition-all duration-500">
          {activeTab === 'orders' && (
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300">
              <h2 className="text-2xl font-bold text-gray-8000 mb-4">Lab Orders</h2>
              <div className="text-gray-500">Content for Lab Orders...</div>
            </div>
          )}

          {activeTab === 'test' && (
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Test Type Dropdown */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700">Type of Test</label>
                  <select
                    value={testType}
                    onChange={handleTestTypeChange}
                    className="w-full mt-2 px-4 py-3 border rounded-lg bg-white shadow-sm text-gray-700 focus:ring-teal-500 focus:border-teal-500 hover:ring-teal-300 transition duration-300"
                  >
                    <option value="" className="text-gray-500">
                      Select Type
                    </option>
                    {testTypes.map((type) => (
                      <option key={type.id} value={type.TestType} className="bg-gray-100 text-teal-700 hover:bg-teal-100 hover:text-teal-900 transition duration-200 ease-in-out">
                        {type.TestType}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Test Category Dropdown */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700">Test Category</label>
                  <select
                    value={testCategory}
                    onChange={handleTestCategoryChange}
                    disabled={!isCategoryEnabled}
                    className={`w-full px-4 py-3 border rounded-lg transition-all duration-300 ${
                      isCategoryEnabled
                        ? 'bg-white text-gray-700 border-teal-500 shadow-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500 hover:ring-1 hover:ring-teal-400 hover:border-teal-700'
                        : 'bg-gray-200 text-gray-400 border-gray-300 cursor-not-allowed'
                    }`}
                  >
                    <option value="" className="text-gray-500">
                      {isCategoryEnabled ? 'Select Category' : 'Select Type First'}
                    </option>
                    {testCategories.map((category) => (
                      <option key={category.id} value={category.test} className="bg-gray-100 text-teal-700 hover:bg-teal-100 hover:text-teal-900 transition duration-200 ease-in-out">
                        {category.test}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Category Checkbox List */}
                
              </div>
              <div className="border-t mt-6 pt-2">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Select Categories</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mt-4">
                    {paginatedCategories.map((category, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 bg-gray-50 p-2 rounded-lg shadow-sm hover:bg-teal-100 transition-all duration-300"
                      >
                        <input
                          type="checkbox"
                          id={`category-${category}`}
                          value={category}
                          onChange={handleCategoryCheckboxChange}
                          className="text-teal-600 border-gray-300 rounded focus:ring-teal-500 transition duration-200"
                        />
                        <label
                          htmlFor={`category-${category}`}
                          className="text-sm font-medium text-gray-700 hover:text-teal-600 transition duration-300"
                        >
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

              {/* Pagination Controls */}
              <div className="mt-6 flex justify-center">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-teal-500 text-white rounded-lg disabled:opacity-50"
                >
                  Previous
                </button>
                <span className="mx-4 text-sm font-medium text-gray-700">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-teal-500 text-white rounded-lg disabled:opacity-50"
                >
                  Next
                </button>
              </div>

              {/* Submit Button */}
              <div className="mt-6 text-center">
                <button
                  onClick={handleSubmit}
                  className="items-center px-6 py-2 bg-teal-500 text-white rounded-lg shadow-lg hover:bg-teal-600 focus:outline-none transition duration-300"
                >
                  Submit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LabOrderMain;



