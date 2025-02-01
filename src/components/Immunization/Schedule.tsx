import React from "react";

const Schedule = () => {
  return (
    <div className="bg-gray-100 min-h-screen w-auto p-1">
      

      <div className="flex justify-between items-center mb-3">
        <div className="flex space-x-4">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="viewOption"
              className="form-radio text-blue-600"
            />
            <span className="text-gray-700">View Schedule</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="viewOption"
              className="form-radio text-blue-600"
            />
            <span className="text-gray-700">View Patient History List</span>
          </label>
        </div>
        <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition">
          Export to Excel
        </button>
      </div>

      <p className="text-gray-600 mb-4">
        Immunization Schedule: (<span className="text-green-600">Green - Given/Administered</span>, <span className="text-blue-600">Blue - Scheduled/Due</span>, <span className="text-red-600">Red - Not Given</span>, <span className="font-bold">Bold indicates Required</span>). Click to view or add.
      </p>

      <div className="bg-white shadow-lg rounded-lg p-1">
        <h2 className="text-lg font-semibold text-[#002D62] mb-4">
          Customize Schedule for Patient
        </h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="border border-gray-300 px-2 py-1">Group/Age</th>
              <th className="border border-gray-300 px-2 py-1">Birth</th>
              <th className="border border-gray-300 px-2 py-1">1 month</th>
              <th className="border border-gray-300 px-2 py-1">2 months</th>
              <th className="border border-gray-300 px-2 py-1">4 months</th>
              <th className="border border-gray-300 px-2 py-1">6 months</th>
              <th className="border border-gray-300 px-2 py-1">12 months</th>
              <th className="border border-gray-300 px-2 py-1">18 months</th>
              <th className="border border-gray-300 px-2 py-1">4 years</th>
              <th className="border border-gray-300 px-2 py-1">10 years</th>
              <th className="border border-gray-300 px-2 py-1">13 years</th>
              <th className="border border-gray-300 px-2 py-1">18 years</th>
              <th className="border border-gray-300 px-2 py-1">50 years</th>
              <th className="border border-gray-300 px-2 py-1">65 years</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2 text-gray-700">
                Diphtheria, Tetanus, Pertussis
              </td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2 text-blue-600">
                DTaP#1
              </td>
              <td className="border border-gray-300 px-4 py-2 text-blue-600">
                DTaP#2
              </td>
              <td className="border border-gray-300 px-4 py-2 text-blue-600">
                DTaP#3
              </td>
              <td className="border border-gray-300 px-4 py-2 text-blue-600">
                DTaP#4
              </td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2 text-blue-600">
                DTaP#5
              </td>
              <td className="border border-gray-300 px-4 py-2 text-red-600 font-bold">
                TD (10 years)
              </td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2 text-gray-700">
                Haemophilus
              </td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2 text-blue-600">
                Hib#1
              </td>
              <td className="border border-gray-300 px-4 py-2 text-blue-600">
                Hib#2
              </td>
              <td className="border border-gray-300 px-4 py-2 text-blue-600">
                Hib#3
              </td>
              <td className="border border-gray-300 px-4 py-2 text-blue-600">
                Hib#4
              </td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2 text-gray-700">
                Hepatitis B
              </td>
              <td className="border border-gray-300 px-4 py-2 text-green-600">
                HepB#1
              </td>
              <td className="border border-gray-300 px-4 py-2 text-green-600">
                HepB#2
              </td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2 text-blue-600">
                HepB#3
              </td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2 text-gray-700">
                Inactivated Poliovirus
              </td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2 text-blue-600">
                IPV#1
              </td>
              <td className="border border-gray-300 px-4 py-2 text-blue-600">
                IPV#2
              </td>
              <td className="border border-gray-300 px-4 py-2 text-blue-600">
                IPV#3
              </td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2 text-blue-600">
                IPV#4
              </td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2 text-gray-700">
                Influenza
              </td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2 text-blue-600">
                Influenza (1 year)
              </td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2 text-gray-700">
                Measles, Mumps, Rubella
              </td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2 text-blue-600">
                MMR#1
              </td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2 text-blue-600">
                MMR#2
              </td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2 text-gray-700">
                Pneumococcal
              </td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2 text-blue-600">
                PCV#1
              </td>
              <td className="border border-gray-300 px-4 py-2 text-blue-600">
                PCV#2
              </td>
              <td className="border border-gray-300 px-4 py-2 text-blue-600">
                PCV#3
              </td>
              <td className="border border-gray-300 px-4 py-2 text-blue-600">
                PCV#4
              </td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2 text-blue-600">
                Pneumococcal
              </td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2 text-gray-700">
                Varicella
              </td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2 text-blue-600">
                Varicella
              </td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Schedule;