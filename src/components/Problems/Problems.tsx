
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useTabs } from "../../Context/TabProvider";

const Problems = () => {
  const { id } = useParams();
  const { addTab } = useTabs();
  const [problemData, setProblemData] = useState([]);
  const [dropdownOptions, setDropdownOptions] = useState({ statuses: [], problems: [] });

  useEffect(() => {
    addTab({ id: "/problems", name: "Problems", path: `/problems/${id}` });

    // Fetch data from the server
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/assets/json/problems.json`)
      .then((response) => {
        setProblemData(response.data.problemHistory);
        setDropdownOptions(response.data.dropdownOptions);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [addTab, id]);

  return (
    <div className="min-h-screen bg-gray-50 py-4 px-6">
      <div className=" mx-auto space-y-12">
        {/* Form Section */}
        <div className="bg-gradient-to-r from-teal-50 via-white to-blue-50 shadow-md rounded-lg p-8 transition-transform transform hover:scale-105 duration-500">
          <h2 className="text-2xl font-bold text-[#002D62] mb-6 border-b pb-2">
            Add Problem Details
          </h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-[#1c4b85]">Reviewed</label>
              <input
                type="checkbox"
                className="mt-1 h-5 w-5 border-gray-300 rounded focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1c4b85]">No Known Problems</label>
              <input
                type="checkbox"
                className="mt-1 h-5 w-5 border-gray-300 rounded focus:ring-blue-500"
              />
            </div>
            <InputField label="Onset Date" type="date" />
            <InputField label="Encounter Date" type="date" />
            <DropdownField
              label="Status"
              options={dropdownOptions.statuses}
            />
            <InputField label="End Date" type="date" />
            <DropdownField
              label="Problem"
              options={dropdownOptions.problems}
            />
            <InputField label="Comment" type="text" placeholder="Enter comment" />
            <div className="col-span-2 text-right">
              <button className="px-6 py-2 bg-blue-600  text-white rounded-md shadow hover:bg-blue-700 transition-all duration-300">
                Add Problem
              </button>
            </div>
          </form>
        </div>

        {/* Table Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 duration-500">
          <h3 className="text-xl font-semibold text-[#002D62] mb-4">Problem History</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200">
              <thead className="bg-gradient-to-r from-blue-100 to-blue-200">
                <tr>
                  {[
                    "Reviewed",
                    "No Known Problems",
                    "Onset Date",
                    "Encounter Date",
                    "Status",
                    "End Date",
                    "Problem",
                    "Comment",
                  ].map((header, idx) => (
                    <th
                      key={idx}
                      className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-[#1c4b85]"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {problemData.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-blue-50 transition duration-300"
                  >
                    {Object.values(row).map((value, subIdx) => (
                      <td
                        key={subIdx}
                        className="border border-gray-300 px-4 py-2 text-[#1c4b85] text-sm"
                      >
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

/* Components */
const InputField = ({ label, type = "text", placeholder }) => (
  <div>
    <label className="block text-sm font-semibold text-[#1c4b85]">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="mt-1 block w-full p-2 border text-[#3972c7] placeholder-[#6786b4] border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
    />
  </div>
);

const DropdownField = ({ label, options }) => (
  <div>
    <label className="block text-sm font-semibold text-[#1c4b85]">{label}</label>
    <select className="mt-1 block w-full p-2 border text-[#3972c7] border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
      <option value="">Select {label.toLowerCase()}</option>
      {options.map((option, idx) => (
        <option key={idx} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default Problems;

