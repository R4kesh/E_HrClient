
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
import { Calendar, User, FileText, Clock, Users, MessageSquare, AlertCircle, Building, CreditCard, ChevronDown, Plus, Shield } from 'lucide-react';


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


  const Card = ({ children, className = '' }) => (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden ${className}`}>
      {children}
    </div>
  );
  
  const CardHeader = ({ children, className = '' }) => (
    <div className={`px-6 py-4 ${className}`}>
      {children}
    </div>
  );
  
  const CardTitle = ({ children, className = '' }) => (
    <h2 className={`text-xl font-semibold ${className}`}>
      {children}
    </h2>
  );
  
  const CardContent = ({ children, className = '' }) => (
    <div className={`px-6 py-4 ${className}`}>
      {children}
    </div>
  );
  
  const InsuranceSection = ({ title, defaultInsurance = "", defaultSubscriber = "", defaultGroup = "", showNone = false }) => (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        <div className="flex items-center gap-2">
          <Shield className="h-4 w-4 text-blue-600" />
          {title}
        </div>
      </label>
      <select className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
        {showNone && <option>(None)</option>}
        {defaultInsurance && <option>{defaultInsurance}</option>}
      </select>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            placeholder="Subscriber ID/Claim #"
            defaultValue={defaultSubscriber}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Group/Policy"
            defaultValue={defaultGroup}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
    </div>
  );











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
    // console.log('Selected categories:', selectedCategories);
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
                ? 'bg-blue-600 text-white border-blue-600 scale-110 shadow-lg'
                : 'text-blue-800 hover:bg-blue-300 border-transparent bg-blue-200'
            }`}
            onClick={() => handleTabChange('orders')}
          >
            Orders
          </button>

          <button
            className={`px-6 py-2 w-36 rounded-t-lg focus:outline-none transition duration-300 transform ${
              activeTab === 'test'
                    ? 'bg-blue-600 text-white border-blue-600 scale-110 shadow-lg'
                : 'text-blue-800 hover:bg-blue-300 border-transparent bg-blue-200'
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
              
              <div className="min-h-screen bg-gray-50 p-6">
      <Card className="max-w-5xl mx-auto">
        <CardHeader className="bg-blue-600">
          <CardTitle className="text-white flex items-center gap-2">
            <FileText className="h-6 w-6" />
            Lab Order Form
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-blue-600" />
                    Order #
                  </div>
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-blue-600" />
                    Provider
                  </div>
                </label>
                <select className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>SMITH, TRACY MD</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-blue-600" />
                    Signers
                  </div>
                </label>
                <select className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Select Signers</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <div className="flex items-center gap-2">
                    <Building className="h-4 w-4 text-blue-600" />
                    Folder
                  </div>
                </label>
                <select className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Orders</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-blue-600" />
                    Order Date
                  </div>
                </label>
                <input
                  type="date"
                  defaultValue="2025-01-17"
                  className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bill To:</label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input type="radio" name="billTo" value="provider" className="mr-2" />
                    Provider
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="billTo" value="insurance" className="mr-2" defaultChecked />
                    Insurance
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="billTo" value="patient" className="mr-2" />
                    Patient
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-blue-600" />
                    Priority
                  </div>
                  
                </label>
                
                <select className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Routine</option>
                </select>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <div className="flex items-center gap-2">
                    <Building className="h-4 w-4 text-blue-600" />
                    Department
                  </div>
                </label>
                <select className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Select Department</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <div className="flex items-center gap-2">
                    <Building className="h-4 w-4 text-blue-600" />
                    Facility
                  </div>
                </label>
                <select className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Select Facility</option>
                </select>
              </div>

              {/* Insurance Sections */}
              <div className="space-y-6">
                <InsuranceSection 
                  title="Primary Insurance"
                  defaultInsurance="AETNA / U.S. HEALTHCARE"
                  defaultSubscriber="10000044"
                  defaultGroup="825822-10-0"
                />

                <InsuranceSection 
                  title="Secondary Insurance"
                  showNone={true}
                />

                <InsuranceSection 
                  title="Tertiary Insurance"
                  showNone={true}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-blue-600" />
                    Date of Injury
                  </div>
                </label>
                <input
                  type="date"
                  className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-blue-600" />
                  CC Providers
                </div>
              </label>
              <div className="flex gap-2">
                <select className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>BABBIT - BABBIT, CASEY</option>
                </select>
                <button className="p-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-blue-600" />
                  Comment
                </div>
              </label>
              <textarea
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                rows={3}
              />
            </div>

            <div className="flex flex-wrap gap-4">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600" />
                <span className="ml-2 text-sm text-gray-700">Hold</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600" />
                <span className="ml-2 text-sm text-gray-700">High Priority</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600" />
                <span className="ml-2 text-sm text-gray-700">PSC Hold</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600" />
                <span className="ml-2 text-sm text-gray-700">Assistant</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600" />
                <span className="ml-2 text-sm text-gray-700">Confidential-Only discuss w/patient</span>
              </label>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>





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
                          className="text-teal-600 border-gray-300 rounded focus:ring-blue-500 transition duration-200"
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
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50"
                >
                  Previous
                </button>
                <span className="mx-4 text-sm font-medium text-gray-700">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50"
                >
                  Next
                </button>
              </div>

              {/* Submit Button */}
              <div className="mt-6 text-center">
                <button
                  onClick={handleSubmit}
                  className="items-center px-6 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none transition duration-300"
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



