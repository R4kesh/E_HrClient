import React,{useState,useEffect} from 'react'

const Vitals = () => {

    const [VitalsData,setVitalsData]=useState([]);
    const [VitalsColumns, setVitalsColumns] = useState(1);

    useEffect(() => {

    const VitalsData = [
        "BMI",
        "Height",
        "Weight",
        "BP Diastolic",
        "BP Systolic"
      ];

      setVitalsData(VitalsData)

    }, []);

    const addVitalsColumns=() =>setVitalsColumns(VitalsColumns+1)
      
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <h2 className="px-3 py-1 text-xl font-semibold text-gray-800 bg-gradient-to-r from-blue-600 to-blue-600 text-white">
      Vitals 
      </h2>
      <table className="min-w-full">
        <thead className="bg-gradient-to-r from-blue-600 to-blue-600">
          <tr>
            <th className="px-8  text-left text-sm font-semibold text-white uppercase tracking-wider">
              Measure
            </th>
            {Array.from({ length: VitalsColumns }).map((_, index) => (
              <th
                key={index}
                className="px-8 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider"
              >
                Reading {index + 1}
              </th>
            ))}
            <th className=" py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
              <button
                onClick={addVitalsColumns}
                className="bg-white text-purple-600 px-4 py-2 rounded-lg shadow-md hover:bg-purple-50 transition duration-200"
              >
                Add Column
              </button>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {VitalsData.map((test, index) => (
            <tr key={index} className="hover:bg-gray-50 transition duration-200">
              <td className="px-4 py-2 whitespace-nowrap text-base font-medium text-gray-900">
                {test} {/* Render CBC test name */}
              </td>
              {Array.from({ length: VitalsColumns }).map((_, vitalsIndex) => (
                <td key={vitalsIndex} className="px-8 py-4 whitespace-nowrap">
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
  )
}

export default Vitals
