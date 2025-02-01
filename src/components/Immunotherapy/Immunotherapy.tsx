import React,{useEffect,useState} from 'react'

const Immunotherapy = () => {

    const [ImmunotherapyData,setImmunotherapyTest]=useState([]);
    const [ImmunotherapyColumns, setImmunotherapyColumns] = useState(1);


    useEffect(() => {
    const ImmunotherapyData = [
        "AMDS Immunotherapy",
        "Injection Date and Time",
        "Time Reaction Read",
        "Number of Injections",
        "Injections Performed By",
        "Pre Injection Vitals",
        "Post Injection Vitals",
        "BP Systolic",
        "BP Diastolic",
        "Pulse",
        "Respirations",
        "O2 Saturation",
        
        // Allergen 1 Details
        "Allergen 1 - Name",
        "Allergen 1 - Dilution",
        "Allergen 1 - Injection Site",
        "Allergen 1 - Dose",
        "Allergen 1 - Vial Expiration Date",
        "Allergen 1 - Lot #",
      
        // Allergen 2 Details
        "Allergen 2 - Name",
        "Allergen 2 - Dilution",
        "Allergen 2 - Injection Site",
        "Allergen 2 - Dose",
        "Allergen 2 - Vial Expiration Date",
        "Allergen 2 - Lot #",
      
        // Allergen 3 Details
        "Allergen 3 - Name",
        "Allergen 3 - Dilution",
        "Allergen 3 - Injection Site",
        "Allergen 3 - Dose",
        "Allergen 3 - Vial Expiration Date",
        "Allergen 3 - Lot #",
      
        // Allergen 4 Details
        "Allergen 4 - Name",
        "Allergen 4 - Dilution",
        "Allergen 4 - Injection Site",
        "Allergen 4 - Dose",
        "Allergen 4 - Vial Expiration Date",
        "Allergen 4 - Lot #"
      ];

      setImmunotherapyTest(ImmunotherapyData)
      

    }, []);
      

    const addImmunotherapyColumns = () => setImmunotherapyColumns(ImmunotherapyColumns+1)
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
    <h2 className="px-3 py-1 text-xl font-semibold text-gray-800 bg-gradient-to-r from-blue-600 to-blue-600 text-white">
    Immunotherapy
    </h2>
    <table className="min-w-full">
      <thead className="bg-gradient-to-r from-blue-600 to-blue-600">
        <tr>
          <th className="px-8  text-left text-sm font-semibold text-white uppercase tracking-wider">
            Test Name
          </th>
          {Array.from({ length: ImmunotherapyColumns }).map((_, index) => (
            <th
              key={index}
              className="px-8 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider"
            >
              Result {index + 1}
            </th>
          ))}
          <th className=" py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
            <button
              onClick={addImmunotherapyColumns}
              className="bg-white text-purple-600 px-4 py-2 rounded-lg shadow-md hover:bg-purple-50 transition duration-200"
            >
              Add Column
            </button>
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {ImmunotherapyData.map((test, index) => (
          <tr key={index} className="hover:bg-gray-50 transition duration-200">
            <td className="px-4 py-2 whitespace-nowrap font-semibold text-md text-[#3972c7]">
              {test} {/* Render CBC test name */}
            </td>
            {Array.from({ length: ImmunotherapyColumns }).map((_, immunotherapyIndex) => (
              <td key={immunotherapyIndex} className="px-8 py-4 whitespace-nowrap">
                <input
                  type="text"
                  className="w-full placeholder-[#6786b4] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
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

export default Immunotherapy
