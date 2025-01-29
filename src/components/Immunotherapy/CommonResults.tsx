
import React, { useState, useEffect } from "react";
import axios from "axios";

const CommonResults = () => {
  const [columns, setColumns] = useState(1); // State to manage the number of columns for the first table
  const [cbcColumns, setCbcColumns] = useState(1); // State to manage the number of columns for the second table
  const [results, setResults] = useState([]); // State to hold data for the first table
  const [cbcResults, setCbcResults] = useState([]); // State to hold data for the second table
  const [lipidPanel,setLipidPanel]=useState([]); 
  const [lipidPanelColumns, setlipidPanelColumns] = useState(1); // State to manage the number of columns for the second table
  const [urineTestData,seturineTest]=useState([]);
  const [urineTestColumns, seturineTestColumns] = useState(1);

  const [diabeticTestData,setdiabeticTest]=useState([]);
  const [diabeticTestColumns, setdiabeticTestColumns] = useState(1);

  const [thyroidPanelTests,setThyroidPanelTest]=useState([]);
  const [thyroidPanelColumns, setthyroidPanelColumns] = useState(1);

  const [GenitourinaryTests,setGenitourinaryTestsTest]=useState([]);
  const [GenitourinaryTestsColumns, setGenitourinaryTestsColumns] = useState(1);

  const [HepatitisSTDTests,setHepatitisSTDTests]=useState([]);
  const [HepatitisSTDTestsColumns, setHepatitisSTDTestsColumns] = useState(1);

  const [MiscellaneousTests,setMiscellaneousTests]=useState([]);
  const [MiscellaneousTestsColumns, setMiscellaneousTestsColumns] = useState(1);

  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  // Fetch data for both tables
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/assets/json/Immunotherapy/CommonResults.json`) // Replace with your backend URL
      .then((response) => {
        // Ensure data extraction matches the API response format
        if (Array.isArray(response.data.results)) {
          setResults(response.data.results); // Assuming response.data.results is an array for the first table
        } else {
          throw new Error("Unexpected response format for results");
        }

        // Sample hardcoded data for the second table (replace with actual API response)
        const completeBloodCountData = [
          "Basophils",
          "Basophils (Absolute)",
          "Eosinophils",
          "Eosinophils (Absolute)",
          "Hematocrit",
          "Hemoglobin",
          "Immature Granulocytes",
          "Immature Granulocytes (Absolute)",
          "Lymphocyte",
          "Lymphocyte (Absolute)",
          "Mean Corpuscular Hemoglobin",
          "Mean Corpuscular Hemoglobin Concentration",
          "Mean Corpuscular Volume",
          "Monocytes",
          "Monocyte (Absolute)",
          "Neutrophils",
          "Neutrophils (Absolute)",
          "Platelets",
          "RBC - Red Blood Cells",
          "Red Blood Cell Distribution Width",
          "White Blood Cells",
        ];
        setCbcResults(completeBloodCountData); // Set data for the second table

        const lipidPanel = [
            "Cholesterol, Total",
            "High Density Lipoprotein (Cholesterol)",
            "Low Density Lipoprotein (LDL-C)",
            "Triglycerides",
          ];


          const urineTestData = [
            "Bilirubin, Total",
            "Clarity",
            "Color",
            "Ketones",
            "Leukocyte esterase",
            "Nitrites",
            "Occult blood (Fecal Occult Blood Test)",
            "Odor",
            "pH",
            "Protein",
            "Specific Gravity (USG)",
            "Urine Culture and Sensitivity",
            "Urine Albumin/Creatinine",
          ];

          const diabeticTestData = [
            "Hemoglobin A1c",
            "Fasting Blood Glucose",
            "Insulin",
            "Oral Glucose Tolerance Test",
            "Random Blood Sugar",
          ];

          const thyroidPanelTests = [
            "Thyroid Stimulating Hormone",
            "T3 Total - Total Triiodothyronine",
            "T4 Free - Free Thyroxine",
            "T4 Total - Total Thyroxine",
            "TBG - Thyroxine-binding Globulin",
          ];

          const GenitourinaryTests = [
            "Estradiol (estrogen)",
            "Prostate-Specific Antigen",
            "Semen Analysis",
            "Testosterone, Free",
            "Testosterone, Total"
          ];

          const HepatitisSTDTests = [
            "Hepatitis A",
            "Hepatitis B Surface Antigen Test",
            "Hepatitis C",
            "Chlamydia",
            "Gonorrhea",
            "Gonorrhea/Chlamydia/Syphilis",
            "Herpes Simplex Virus",
            "HIV (Human Immunodeficiency Virus)",
            "Human Papillomavirus",
            "Syphilis",
            "VD Research Lab/Rapid Plasma Reagin"
          ];

          const MiscellaneousTests = [
            "25-Hydroxy Vitamin D (D3 or Vit D)",
            "1,25-Dihydroxy Vitamin D",
            "Vitamin B12",
            "C-Reactive Protein",
            "Group A Streptococcus test",
            "Group B Strep",
            "Cytomegalovirus",
            "Human Leukocyte Antigens",
            "Rheumatoid Arthritis Factor",
            "Rubella (German Measles)",
            "Uric Acid"
          ];
          
          
          
        setLipidPanel(lipidPanel)
        seturineTest(urineTestData)
        setdiabeticTest(diabeticTestData)
        setThyroidPanelTest(thyroidPanelTests)
        setGenitourinaryTestsTest(GenitourinaryTests)
        setHepatitisSTDTests(HepatitisSTDTests)
        setMiscellaneousTests(MiscellaneousTests)
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError("Failed to load data. Please try again.");
        setLoading(false);
      });
  }, []);

  // Functions to add columns
  const addColumn = () => setColumns(columns + 1);
  const addCbcColumn = () => setCbcColumns(cbcColumns + 1);
  const addlipidPanelColumns = () =>setlipidPanelColumns(lipidPanelColumns+1)
  const addurineTestColumns = () =>seturineTestColumns(urineTestColumns+1)
  const adddiabeticTestColumns = () =>setdiabeticTestColumns(diabeticTestColumns+1)
  const addthyroidPanelColumns = () =>setthyroidPanelColumns(thyroidPanelColumns+1)
  const addGenitourinaryColumns = () =>setGenitourinaryTestsColumns(GenitourinaryTestsColumns+1)
  const addHepatitisSTDColumns = () =>setHepatitisSTDTestsColumns(HepatitisSTDTestsColumns+1)
  const addMiscellaneousTestsColumns = () =>setMiscellaneousTestsColumns(MiscellaneousTestsColumns+1)

  // Loading or Error State
  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (error) return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>;

  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* First Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <h2 className="px-6 py-4 text-xl font-semibold text-gray-800 bg-gradient-to-r from-blue-600 to-blue-600 text-white">
            Common Results
          </h2>
          <table className="min-w-full">
            <thead className="bg-gradient-to-r from-blue-600 to-blue-600">
              <tr>
                <th className="px-8 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                  Test Name
                </th>
                {Array.from({ length: columns }).map((_, index) => (
                  <th
                    key={index}
                    className="px-8 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider"
                  >
                    Result {index + 1}
                  </th>
                ))}
                <th className=" py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                  <button
                    onClick={addColumn}
                    className="bg-white text-blue-600 px-4 py-2 rounded-lg shadow-md hover:bg-blue-50 transition duration-200"
                  >
                    Add Column
                  </button>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {results.map((test, index) => (
                <tr key={index} className="hover:bg-gray-50 transition duration-200">
                  <td className="px-4 py-2 whitespace-nowrap text-base font-medium text-gray-900">
                    {test} {/* Render test name */}
                  </td>
                  {Array.from({ length: columns }).map((_, colIndex) => (
                    <td key={colIndex} className="px-8 py-4 whitespace-nowrap">
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
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

        {/* Second Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <h2 className="px-3 py-1 text-xl font-semibold text-gray-800 bg-gradient-to-r from-blue-600 to-blue-600 text-white">
            Complete Blood Count
          </h2>
          <table className="min-w-full">
            <thead className="bg-gradient-to-r from-blue-600 to-blue-600">
              <tr>
                <th className="px-8  text-left text-sm font-semibold text-white uppercase tracking-wider">
                  Test Name
                </th>
                {Array.from({ length: cbcColumns }).map((_, index) => (
                  <th
                    key={index}
                    className="px-8 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider"
                  >
                    Result {index + 1}
                  </th>
                ))}
                <th className=" py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                  <button
                    onClick={addCbcColumn}
                    className="bg-white text-purple-600 px-4 py-2 rounded-lg shadow-md hover:bg-purple-50 transition duration-200"
                  >
                    Add Column
                  </button>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {cbcResults.map((test, index) => (
                <tr key={index} className="hover:bg-gray-50 transition duration-200">
                  <td className="px-4 py-2 whitespace-nowrap text-base font-medium text-gray-900">
                    {test} {/* Render CBC test name */}
                  </td>
                  {Array.from({ length: cbcColumns }).map((_, colIndex) => (
                    <td key={colIndex} className="px-8 py-4 whitespace-nowrap">
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
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

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <h2 className="px-3 py-1 text-xl font-semibold text-gray-800 bg-gradient-to-r from-blue-600 to-blue-600 text-white">
          Lipid Panel
          </h2>
          <table className="min-w-full">
            <thead className="bg-gradient-to-r from-blue-600 to-blue-600">
              <tr>
                <th className="px-8  text-left text-sm font-semibold text-white uppercase tracking-wider">
                  Test Name
                </th>
                {Array.from({ length: lipidPanelColumns }).map((_, index) => (
                  <th
                    key={index}
                    className="px-8 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider"
                  >
                    Result {index + 1}
                  </th>
                ))}
                <th className=" py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                  <button
                    onClick={addlipidPanelColumns}
                    className="bg-white text-purple-600 px-4 py-2 rounded-lg shadow-md hover:bg-purple-50 transition duration-200"
                  >
                    Add Column
                  </button>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {lipidPanel.map((test, index) => (
                <tr key={index} className="hover:bg-gray-50 transition duration-200">
                  <td className="px-4 py-2 whitespace-nowrap text-base font-medium text-gray-900">
                    {test} {/* Render CBC test name */}
                  </td>
                  {Array.from({ length: lipidPanelColumns }).map((_, lipidIndex) => (
                    <td key={lipidIndex} className="px-8 py-4 whitespace-nowrap">
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
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



        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <h2 className="px-3 py-1 text-xl font-semibold text-gray-800 bg-gradient-to-r from-blue-600 to-blue-600 text-white">
          Urinalysis/Urine Tests
          </h2>
          <table className="min-w-full">
            <thead className="bg-gradient-to-r from-blue-600 to-blue-600">
              <tr>
                <th className="px-8  text-left text-sm font-semibold text-white uppercase tracking-wider">
                  Test Name
                </th>
                {Array.from({ length: urineTestColumns }).map((_, index) => (
                  <th
                    key={index}
                    className="px-8 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider"
                  >
                    Result {index + 1}
                  </th>
                ))}
                <th className=" py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                  <button
                    onClick={addurineTestColumns}
                    className="bg-white text-purple-600 px-4 py-2 rounded-lg shadow-md hover:bg-purple-50 transition duration-200"
                  >
                    Add Column
                  </button>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {urineTestData.map((test, index) => (
                <tr key={index} className="hover:bg-gray-50 transition duration-200">
                  <td className="px-4 py-2 whitespace-nowrap text-base font-medium text-gray-900">
                    {test} {/* Render CBC test name */}
                  </td>
                  {Array.from({ length: urineTestColumns }).map((_, urineTestIndex) => (
                    <td key={urineTestIndex} className="px-8 py-4 whitespace-nowrap">
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
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



        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <h2 className="px-3 py-1 text-xl font-semibold text-gray-800 bg-gradient-to-r from-blue-600 to-blue-600 text-white">
          Diabetic/Glucose Tests
          </h2>
          <table className="min-w-full">
            <thead className="bg-gradient-to-r from-blue-600 to-blue-600">
              <tr>
                <th className="px-8  text-left text-sm font-semibold text-white uppercase tracking-wider">
                  Test Name
                </th>
                {Array.from({ length: diabeticTestColumns }).map((_, index) => (
                  <th
                    key={index}
                    className="px-8 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider"
                  >
                    Result {index + 1}
                  </th>
                ))}
                <th className=" py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                  <button
                    onClick={adddiabeticTestColumns}
                    className="bg-white text-purple-600 px-4 py-2 rounded-lg shadow-md hover:bg-purple-50 transition duration-200"
                  >
                    Add Column
                  </button>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {diabeticTestData.map((test, index) => (
                <tr key={index} className="hover:bg-gray-50 transition duration-200">
                  <td className="px-4 py-2 whitespace-nowrap text-base font-medium text-gray-900">
                    {test} {/* Render CBC test name */}
                  </td>
                  {Array.from({ length: diabeticTestColumns }).map((_, diabeticTestIndex) => (
                    <td key={diabeticTestIndex} className="px-8 py-4 whitespace-nowrap">
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
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


        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <h2 className="px-3 py-1 text-xl font-semibold text-gray-800 bg-gradient-to-r from-blue-600 to-blue-600 text-white">
          Thyroid Panel Tests
          </h2>
          <table className="min-w-full">
            <thead className="bg-gradient-to-r from-blue-600 to-blue-600">
              <tr>
                <th className="px-8  text-left text-sm font-semibold text-white uppercase tracking-wider">
                  Test Name
                </th>
                {Array.from({ length: thyroidPanelColumns }).map((_, index) => (
                  <th
                    key={index}
                    className="px-8 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider"
                  >
                    Result {index + 1}
                  </th>
                ))}
                <th className=" py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                  <button
                    onClick={addthyroidPanelColumns}
                    className="bg-white text-purple-600 px-4 py-2 rounded-lg shadow-md hover:bg-purple-50 transition duration-200"
                  >
                    Add Column
                  </button>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {thyroidPanelTests.map((test, index) => (
                <tr key={index} className="hover:bg-gray-50 transition duration-200">
                  <td className="px-4 py-2 whitespace-nowrap text-base font-medium text-gray-900">
                    {test} {/* Render CBC test name */}
                  </td>
                  {Array.from({ length: thyroidPanelColumns }).map((_, thyroidPanelTestIndex) => (
                    <td key={thyroidPanelTestIndex} className="px-8 py-4 whitespace-nowrap">
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
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


        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <h2 className="px-3 py-1 text-xl font-semibold text-gray-800 bg-gradient-to-r from-blue-600 to-blue-600 text-white">
          Genitourinary
          </h2>
          <table className="min-w-full">
            <thead className="bg-gradient-to-r from-blue-600 to-blue-600">
              <tr>
                <th className="px-8  text-left text-sm font-semibold text-white uppercase tracking-wider">
                  Test Name
                </th>
                {Array.from({ length: GenitourinaryTestsColumns }).map((_, index) => (
                  <th
                    key={index}
                    className="px-8 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider"
                  >
                    Result {index + 1}
                  </th>
                ))}
                <th className=" py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                  <button
                    onClick={addGenitourinaryColumns}
                    className="bg-white text-purple-600 px-4 py-2 rounded-lg shadow-md hover:bg-purple-50 transition duration-200"
                  >
                    Add Column
                  </button>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {GenitourinaryTests.map((test, index) => (
                <tr key={index} className="hover:bg-gray-50 transition duration-200">
                  <td className="px-4 py-2 whitespace-nowrap text-base font-medium text-gray-900">
                    {test} {/* Render CBC test name */}
                  </td>
                  {Array.from({ length: GenitourinaryTestsColumns }).map((_, GenitourinaryTestIndex) => (
                    <td key={GenitourinaryTestIndex} className="px-8 py-4 whitespace-nowrap">
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
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

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <h2 className="px-3 py-1 text-xl font-semibold text-gray-800 bg-gradient-to-r from-blue-600 to-blue-600 text-white">
          HepatitisSTD Tests
          </h2>
          <table className="min-w-full">
            <thead className="bg-gradient-to-r from-blue-600 to-blue-600">
              <tr>
                <th className="px-8  text-left text-sm font-semibold text-white uppercase tracking-wider">
                  Test Name
                </th>
                {Array.from({ length: HepatitisSTDTestsColumns }).map((_, index) => (
                  <th
                    key={index}
                    className="px-8 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider"
                  >
                    Result {index + 1}
                  </th>
                ))}
                <th className=" py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                  <button
                    onClick={addHepatitisSTDColumns}
                    className="bg-white text-purple-600 px-4 py-2 rounded-lg shadow-md hover:bg-purple-50 transition duration-200"
                  >
                    Add Column
                  </button>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {HepatitisSTDTests.map((test, index) => (
                <tr key={index} className="hover:bg-gray-50 transition duration-200">
                  <td className="px-4 py-2 whitespace-nowrap text-base font-medium text-gray-900">
                    {test} {/* Render CBC test name */}
                  </td>
                  {Array.from({ length: HepatitisSTDTestsColumns }).map((_, HepatitisSTDTestIndex) => (
                    <td key={HepatitisSTDTestIndex} className="px-8 py-4 whitespace-nowrap">
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
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


        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <h2 className="px-3 py-1 text-xl font-semibold text-gray-800 bg-gradient-to-r from-blue-600 to-blue-600 text-white">
          Miscellaneous Tests
          </h2>
          <table className="min-w-full">
            <thead className="bg-gradient-to-r from-blue-600 to-blue-600">
              <tr>
                <th className="px-8  text-left text-sm font-semibold text-white uppercase tracking-wider">
                  Test Name
                </th>
                {Array.from({ length: MiscellaneousTestsColumns }).map((_, index) => (
                  <th
                    key={index}
                    className="px-8 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider"
                  >
                    Result {index + 1}
                  </th>
                ))}
                <th className=" py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                  <button
                    onClick={addMiscellaneousTestsColumns}
                    className="bg-white text-purple-600 px-4 py-2 rounded-lg shadow-md hover:bg-purple-50 transition duration-200"
                  >
                    Add Column
                  </button>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {MiscellaneousTests.map((test, index) => (
                <tr key={index} className="hover:bg-gray-50 transition duration-200">
                  <td className="px-4 py-2 whitespace-nowrap text-base font-medium text-gray-900">
                    {test} {/* Render CBC test name */}
                  </td>
                  {Array.from({ length: MiscellaneousTestsColumns }).map((_, MiscellaneousTestIndex) => (
                    <td key={MiscellaneousTestIndex} className="px-8 py-4 whitespace-nowrap">
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
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

        
      </div>
    </div>
  );
};

export default CommonResults;



