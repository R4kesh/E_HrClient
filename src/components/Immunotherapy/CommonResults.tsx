

import React, { useState, useEffect } from "react";
import axios from "axios";

const CommonResults = () => {
  const [columns, setColumns] = useState(1); // State to manage the number of columns for the first table
  const [cbcColumns, setCbcColumns] = useState(1); // State to manage the number of columns for the second table
  const [results, setResults] = useState([]); // State to hold data for the first table
  const [cbcResults, setCbcResults] = useState([]); // State to hold data for the second table
  const [lipidPanel, setLipidPanel] = useState([]);
  const [lipidPanelColumns, setLipidPanelColumns] = useState(1);
  const [urineTestData, setUrineTest] = useState([]);
  const [urineTestColumns, setUrineTestColumns] = useState(1);
  const [diabeticTestData, setDiabeticTest] = useState([]);
  const [diabeticTestColumns, setDiabeticTestColumns] = useState(1);
  const [thyroidPanelTests, setThyroidPanelTest] = useState([]);
  const [thyroidPanelColumns, setThyroidPanelColumns] = useState(1);
  const [GenitourinaryTests, setGenitourinaryTestsTest] = useState([]);
  const [GenitourinaryTestsColumns, setGenitourinaryTestsColumns] = useState(1);
  const [HepatitisSTDTests, setHepatitisSTDTests] = useState([]);
  const [HepatitisSTDTestsColumns, setHepatitisSTDTestsColumns] = useState(1);
  const [MiscellaneousTests, setMiscellaneousTests] = useState([]);
  const [MiscellaneousTestsColumns, setMiscellaneousTestsColumns] = useState(1);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [selectedOption, setSelectedOption] = useState("all"); // State to track selected filter option

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
          "Testosterone, Total",
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
          "VD Research Lab/Rapid Plasma Reagin",
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
          "Uric Acid",
        ];

        setLipidPanel(lipidPanel);
        setUrineTest(urineTestData);
        setDiabeticTest(diabeticTestData);
        setThyroidPanelTest(thyroidPanelTests);
        setGenitourinaryTestsTest(GenitourinaryTests);
        setHepatitisSTDTests(HepatitisSTDTests);
        setMiscellaneousTests(MiscellaneousTests);
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
  const addLipidPanelColumns = () => setLipidPanelColumns(lipidPanelColumns + 1);
  const addUrineTestColumns = () => setUrineTestColumns(urineTestColumns + 1);
  const addDiabeticTestColumns = () => setDiabeticTestColumns(diabeticTestColumns + 1);
  const addThyroidPanelColumns = () => setThyroidPanelColumns(thyroidPanelColumns + 1);
  const addGenitourinaryColumns = () => setGenitourinaryTestsColumns(GenitourinaryTestsColumns + 1);
  const addHepatitisSTDColumns = () => setHepatitisSTDTestsColumns(HepatitisSTDTestsColumns + 1);
  const addMiscellaneousTestsColumns = () => setMiscellaneousTestsColumns(MiscellaneousTestsColumns + 1);

  // Handle dropdown filter change
  const handleFilterChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Helper function to render a table
  const renderTable = (title, data, columns, addColumnsFunction, bgColor = "blue") => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <h2 className={`px-6 py-4 text-xl font-semibold text-gray-800 bg-gradient-to-r from-blue-600 to-blue-600 text-white`}>
        {title}
      </h2>
      <table className="min-w-full">
        <thead className={`bg-gradient-to-r from-blue-600 to-blue-600`}>
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
                    className="w-full px-4 py-2 border placeholder-[#6786b4] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
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

  // Loading or Error State
  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (error) return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>;

  return (
    <div className="bg-gradient-to-r  min-h-screen">
      <div className="max-w-7xl mx-auto space-y-12 p-6">
        {/* Filter Dropdown */}
        <div className="flex justify-start">
          <select
            value={selectedOption}
            onChange={handleFilterChange}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">Show All</option>
            <option value="commonResults">Common Results</option>
            <option value="completeBloodCount">Complete Blood Count</option>
            <option value="lipidPanel">Lipid Panel</option>
            <option value="urineTests">Urine Tests</option>
            <option value="diabeticTests">Diabetic Tests</option>
            <option value="thyroidPanelTests">Thyroid Panel Tests</option>
            <option value="genitourinaryTests">Genitourinary Tests</option>
            <option value="hepatitisSTDTests">Hepatitis/STD Tests</option>
            <option value="miscellaneousTests">Miscellaneous Tests</option>
          </select>
        </div>

        {/* Render Tables Based on Selected Option */}
        {(selectedOption === "all" || selectedOption === "commonResults") &&
          renderTable("Common Results", results, columns, addColumn, "blue")}
        {(selectedOption === "all" || selectedOption === "completeBloodCount") &&
          renderTable("Complete Blood Count", cbcResults, cbcColumns, addCbcColumn, "purple")}
        {(selectedOption === "all" || selectedOption === "lipidPanel") &&
          renderTable("Lipid Panel", lipidPanel, lipidPanelColumns, addLipidPanelColumns, "green")}
        {(selectedOption === "all" || selectedOption === "urineTests") &&
          renderTable("Urine Tests", urineTestData, urineTestColumns, addUrineTestColumns, "red")}
        {(selectedOption === "all" || selectedOption === "diabeticTests") &&
          renderTable("Diabetic Tests", diabeticTestData, diabeticTestColumns, addDiabeticTestColumns, "yellow")}
        {(selectedOption === "all" || selectedOption === "thyroidPanelTests") &&
          renderTable("Thyroid Panel Tests", thyroidPanelTests, thyroidPanelColumns, addThyroidPanelColumns, "indigo")}
        {(selectedOption === "all" || selectedOption === "genitourinaryTests") &&
          renderTable("Genitourinary Tests", GenitourinaryTests, GenitourinaryTestsColumns, addGenitourinaryColumns, "pink")}
        {(selectedOption === "all" || selectedOption === "hepatitisSTDTests") &&
          renderTable("Hepatitis/STD Tests", HepatitisSTDTests, HepatitisSTDTestsColumns, addHepatitisSTDColumns, "teal")}
        {(selectedOption === "all" || selectedOption === "miscellaneousTests") &&
          renderTable("Miscellaneous Tests", MiscellaneousTests, MiscellaneousTestsColumns, addMiscellaneousTestsColumns, "orange")}
      </div>
    </div>
  );
};

export default CommonResults;