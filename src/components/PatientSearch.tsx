


// import React, { useState } from "react";
// import { FiSearch } from "react-icons/fi";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { useTabs } from "../Context/PatientTabProvider"

// const PatientSearch = () => {
//   const [isSearchActive, setIsSearchActive] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [suggestions, setSuggestions] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const toggleSearch = () => {
//     setIsSearchActive(!isSearchActive);
//     setSearchQuery(""); // Clear search query when toggling
//     setSuggestions([]);
//   };

//   const handleSearch = async (e) => {
//     const query = e.target.value;
//     setSearchQuery(query); // Set the search query in state
//     console.log('searchQuery', query); // Log the query being passed to the backend

//     if (query.length > 2) {
//       setLoading(true);
//       try {
//         const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/patient/Patientsearch`, {
//           query, // Send the query as part of the request body
//         });
//         console.log('Search response:', response.data); // Log the response from the backend
//         setSuggestions(response.data); // Update the suggestions state with the response
//       } catch (error) {
//         console.error("Error fetching search results:", error);
//       } finally {
//         setLoading(false); // Hide the loading state
//       }
//     } else {
//       setSuggestions([]); // Clear suggestions if query length is less than or equal to 2
//     }
//   };

//   return (
//     <div className="relative">
//       {/* Search Icon */}
//       {!isSearchActive && (
//         <div
//           className="flex items-center space-x-2 cursor-pointer hover:text-blue-300 transition duration-300"
//           onClick={toggleSearch}
//         >
//           <FiSearch size={20} />
//           <span className="text-sm font-medium">Search</span>
//         </div>
//       )}

//       {/* Search Input */}
//       {isSearchActive && (
//         <div className="flex items-center bg-white border border-gray-300 rounded-md shadow-sm">
//           <input
//             type="text"
//             value={searchQuery}
//             onChange={handleSearch}
//             placeholder="Search patients..."
//             className="w-full px-3 py-2 text-sm text-black bg-gray-100 outline-none"
//           />
//           <button
//             onClick={toggleSearch}
//             className="px-3 text-gray-500 hover:text-blue-300 transition duration-300"
//           >
//             Cancel
//           </button>
//         </div>
//       )}

//       {/* Suggestions Dropdown */}
//       {isSearchActive && suggestions.length > 0 && (
//         <div className="absolute top-12 w-full bg-white  text-black border border-gray-600  rounded-lg shadow-lg z-10">
//           {loading ? (
//             <div className="p-2 text-sm text-gray-500">Loading...</div>
//           ) : (
//             suggestions.map((patient) => (
//                 <Link
//                 key={patient.id}
//                 to={`/dashboard/${patient.id}`} // Navigate to the dynamic route
//                 className="block p-2 text-base hover:bg-gray-300 cursor-pointer"
//                 onClick={()=>{ setIsSearchActive(!isSearchActive)}}
//               >
//               <div
//                 key={patient.id}
//                 className="p-2 text-base  hover:bg-gray-300 cursor-pointer"
//               >
//                 {/* Display name and date of birth */}
//                 <div>
//                   <span className="font-medium text-black">{`${patient.firstName} ${patient.lastName}`}</span>
//                   <span className=" text-cyan-500 ml-6">DOB   :  
//                     {patient.dateOfBirth ? new Date(patient.dateOfBirth).toLocaleDateString() : "N/A"}
//                   </span>
//                 </div>
//               </div>
//                 </Link>
//             ))
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default PatientSearch;

// import React, { useState } from "react";
// import { FiSearch } from "react-icons/fi";
// import axios from "axios";
// import { useTabs } from "../Context/PatientTabProvider";
// import { Link } from "react-router-dom";

// const PatientSearch = () => {
//   const [isSearchActive, setIsSearchActive] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [suggestions, setSuggestions] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const { addTab } = useTabs(); // Importing addTab

//   const toggleSearch = () => {
//     setIsSearchActive(!isSearchActive);
//     setSearchQuery(""); // Clear search query when toggling
//     setSuggestions([]);
//   };

//   const handleSearch = async (e) => {
//     const query = e.target.value;
//     setSearchQuery(query); // Set the search query in state

//     if (query.length > 2) {
//       setLoading(true);
//       try {
//         const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/patient/Patientsearch`, {
//           query,
//         });
//         console.log('response.data',response.data)
//         setSuggestions(response.data); // Update the suggestions state with the response
//       } catch (error) {
//         console.error("Error fetching search results:", error);
//       } finally {
//         setLoading(false); // Hide the loading state
//       }
//     } else {
//       setSuggestions([]); // Clear suggestions if query length is less than or equal to 2
//     }
//   };

//   const handleSelectPatient = (patient) => {
//     console.log('patient',patient)
//     addTab(patient); // Add the patient to the tabs
//     setIsSearchActive(false); // Close the search input
//     setSearchQuery(""); // Clear the search query
//   };

//   return (
//     <div className="relative">
//       {/* Search Icon */}
//       {!isSearchActive && (
//         <div
//           className="flex items-center space-x-2 cursor-pointer hover:text-blue-300 transition duration-300"
//           onClick={toggleSearch}
//         >
//           <FiSearch size={20} />
//           <span className="text-sm font-medium">Search</span>
//         </div>
//       )}

//       {/* Search Input */}
//       {isSearchActive && (
//         <div className="flex items-center bg-white border border-gray-300 rounded-md shadow-sm">
//           <input
//             type="text"
//             value={searchQuery}
//             onChange={handleSearch}
//             placeholder="Search patients..."
//             className="w-full px-3 py-2 text-sm text-black bg-gray-100 outline-none"
//           />
//           <button
//             onClick={toggleSearch}
//             className="px-3 text-gray-500 hover:text-blue-300 transition duration-300"
//           >
//             Cancel
//           </button>
//         </div>
//       )}

//       {/* Suggestions Dropdown */}
//       {isSearchActive && suggestions.length > 0 && (
//         <div className="absolute top-12 w-full bg-white text-black border border-gray-600 rounded-lg shadow-lg z-10">
//           {loading ? (
//             <div className="p-2 text-sm text-gray-500">Loading...</div>
//           ) : (
//             suggestions.map((patient) => (
              // <Link
              //                 key={patient.id}
              //                 to={`/dashboard/${patient.id}`} // Navigate to the dynamic route
              //                 className="block p-2 text-base hover:bg-gray-300 cursor-pointer"
              //                 onClick={()=>{ setIsSearchActive(!isSearchActive)}}
              //               >
              
              // <div
              
              //   key={patient.id}
              //   className="block p-2 text-base hover:bg-gray-300 cursor-pointer"
              //   onClick={() => handleSelectPatient(patient)}
              // >
              //   {/* Display name and date of birth */}
              //   <div>
              //     <span className="font-medium text-black">{`${patient.firstName} ${patient.lastName}`}</span>
              //     <span className="text-cyan-500 ml-6">
              //       DOB: {patient.dateOfBirth ? new Date(patient.dateOfBirth).toLocaleDateString() : "N/A"}
              //     </span>
              //   </div>
              // </div>
              // </Link>
//             ))
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default PatientSearch;



import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import axios from "axios";
import { useTabs } from "../Context/PatientTabProvider";
import { Link } from "react-router-dom";

const PatientSearch = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [doctorSearchQuery, setDoctorSearchQuery] = useState("");
  const [patientSuggestions, setPatientSuggestions] = useState([]);
  const [doctorSuggestions, setDoctorSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const { addTab } = useTabs();

  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
    setSearchQuery("");
    setDoctorSearchQuery("");
    setPatientSuggestions([]);
    setDoctorSuggestions([]);
  };

  const handlePatientSearch = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length > 2) {
      setLoading(true);
      try {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/patient/Patientsearch`, {
          query,
        });
        setPatientSuggestions(response.data);
      } catch (error) {
        console.error("Error fetching patient search results:", error);
      } finally {
        setLoading(false);
      }
    } else {
      setPatientSuggestions([]);
    }
  };

  const handleDoctorSearch = async (e) => {
    const query = e.target.value;
    setDoctorSearchQuery(query);

    if (query.length > 2) {
      setLoading(true);
      try {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/patient/Doctorsearch`, {
          query,
        });
        setDoctorSuggestions(response.data);
      } catch (error) {
        console.error("Error fetching doctor search results:", error);
      } finally {
        setLoading(false);
      }
    } else {
      setDoctorSuggestions([]);
    }
  };

  const handleSelectPatient = (patient) => {
    addTab(patient);
    setIsSearchActive(false);
    setSearchQuery("");
  };

  const handleSelectDoctor = (doctor) => {
    console.log("Selected doctor:", doctor);
    setIsSearchActive(false);
    setDoctorSearchQuery("");
  };

  return (
    <div className="relative">
      {/* Search Icon */}
      {!isSearchActive && (
        <div
          className="flex items-center space-x-2 cursor-pointer hover:text-blue-300 transition duration-300"
          onClick={toggleSearch}
        >
          <FiSearch size={20} />
          <span className="text-sm font-medium">Search</span>
        </div>
      )}

      {/* Search Inputs */}
      {isSearchActive && (
        <div className="space-y-2">
          <div className="flex space-x-4">
            {/* Patient Search Input */}
            <div className="flex-1">
              <input
                type="text"
                value={searchQuery}
                onChange={handlePatientSearch}
                placeholder="Search patients..."
                className="w-full px-2 py-1 text-sm mt-1  text-gray-800 bg-white rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            {/* Doctor Search Input */}
            <div className="flex-1">
              <input
                type="text"
                value={doctorSearchQuery}
                onChange={handleDoctorSearch}
                placeholder="Search doctors..."
                className="w-full px-2 py-1 text-sm mt-1 text-gray-800 bg-white rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
          <button
            onClick={toggleSearch}
            className="px-4 py-1 text-gray-500 hover:text-blue-500 transition duration-300"
          >
            Cancel
          </button>
          </div>

          {/* Cancel Button */}
        </div>
      )}

      {/* Suggestions Dropdown */}
      {isSearchActive && (
        <div className="absolute top-12 w-80 bg-white text-gray-800 rounded-lg shadow-lg z-10">
          {/* Patient Suggestions */}
          {/* {searchQuery && patientSuggestions.length > 0 && (
            <div>
              <h3 className="p-4 font-bold text-gray-700">Patients</h3>
              {loading ? (
                <div className="p-4 text-sm text-gray-500">Loading...</div>
              ) : (
                patientSuggestions.map((patient) => (
                  
                  <div
                    key={patient.id}
                    className="block px-4 py-2 text-base hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleSelectPatient(patient)}
                  >
                    <span className="font-medium">{`${patient.firstName} ${patient.lastName}`}</span>
                    <span className="text-cyan-500 ml-6">
                      DOB: {patient.dateOfBirth ? new Date(patient.dateOfBirth).toLocaleDateString() : "N/A"}
                    </span>
                  </div>
                ))
              )}
            </div>
          )} */}

{searchQuery && patientSuggestions.length > 0 && (
  <div>
    <h3 className="p-4 font-bold text-gray-700">Patients</h3>
    {loading ? (
      <div className="p-4 text-sm text-gray-500">Loading...</div>
    ) : ( 
      patientSuggestions.map((patient) => (
        <Link
          key={patient.id}
          to={`/dashboard/${patient.id}`} // Navigate to the dynamic route
          className="block px-4 py-2 text-base hover:bg-gray-100 cursor-pointer"
        >
          <div onClick={() => handleSelectPatient(patient)}>
            <span className="font-medium">{`${patient.firstName} ${patient.lastName}`}</span>
            <span className="text-cyan-500 ml-6">
              DOB: {patient.dateOfBirth ? new Date(patient.dateOfBirth).toLocaleDateString() : "N/A"}
            </span>
          </div>
        </Link>
      ))
    )}
  </div>
)}


          {/* Doctor Suggestions */}
          {doctorSearchQuery && doctorSuggestions.length > 0 && (
            <div>
              <h3 className="p-4 font-bold text-gray-700">Doctors</h3>
              {loading ? (
                <div className="p-4 text-sm text-gray-500">Loading...</div>
              ) : (
                doctorSuggestions.map((doctor) => (
                  <div
                    key={doctor.doctorId}
                    className="block px-4 py-2 text-base hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleSelectDoctor(doctor)}
                  >
                    <span className="font-medium">{doctor.doctorName}</span>
                    <span className="text-cyan-500 ml-6">{doctor.specialization}</span>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PatientSearch;
