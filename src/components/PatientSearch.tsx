// import React, { useState } from "react";
// import axios from "axios";
// import { FiSearch } from "react-icons/fi";

// const PatientSearch = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [suggestions, setSuggestions] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const handleSearch = async (e) => {
//     const query = e.target.value;
//     setSearchQuery(query);

//     if (query.length > 2) { // Trigger search after 3+ characters
//       setLoading(true);

//       try {
//         const response = await axios.get("/api/search", {
//           params: { query },
//         });

//         setSuggestions(response.data);
//       } catch (error) {
//         console.error("Error fetching search results:", error);
//       } finally {
//         setLoading(false);
//       }
//     } else {
//       setSuggestions([]);
//     }
//   };

//   return (
//     <div className="relative w-full max-w-md mx-auto">
//       {/* Search Input */}
//       <div className="flex items-center bg-white border border-gray-300 rounded-md shadow-sm">
//         <FiSearch className="text-gray-400 ml-2" size={20} />
//         <input
//           type="text"
//           value={searchQuery}
//           onChange={handleSearch}
//           placeholder="Search patients by name..."
//           className="w-full px-3 py-2 text-sm outline-none"
//         />
//       </div>

//       {/* Suggestions Dropdown */}
//       {suggestions.length > 0 && (
//         <div className="absolute top-12 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
//           {loading ? (
//             <div className="p-2 text-sm text-gray-500">Loading...</div>
//           ) : (
//             suggestions.map((patient) => (
//               <div
//                 key={patient.id}
//                 className="p-2 text-sm hover:bg-gray-100 cursor-pointer"
//               >
//                 {`${patient.firstName} ${patient.lastName}`}
//               </div>
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
//     setSearchQuery(query);

//     if (query.length > 2) {
//       setLoading(true);
//       try {
//         const response = await axios.get("/api/search", {
//           params: { query },
//         });
//         setSuggestions(response.data);
//       } catch (error) {
//         console.error("Error fetching search results:", error);
//       } finally {
//         setLoading(false);
//       }
//     } else {
//       setSuggestions([]);
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
//             className="w-full  px-3 py-2 text-sm outline-none"
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
//         <div className="absolute top-12 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
//           {loading ? (
//             <div className="p-2 text-sm text-gray-500">Loading...</div>
//           ) : (
//             suggestions.map((patient) => (
//               <div
//                 key={patient.id}
//                 className="p-2 text-sm hover:bg-gray-100 cursor-pointer"
//               >
//                 {`${patient.firstName} ${patient.lastName}`}
//               </div>
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
//     setSearchQuery(query);  // Set the search query in state
//     console.log('searchQuery', query);  // Log the query being passed to the backend
  
//     if (query.length > 2) {
//       setLoading(true);
//       try {
//         const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/patient/Patientsearch`, {
//           params: { query },  // Use 'query' as the key for query parameter
//         });
//         console.log('Search response:', response.data);  // Log the response from the backend
//         setSuggestions(response.data);  // Update the suggestions state with the response
//       } catch (error) {
//         console.error("Error fetching search results:", error);
//       } finally {
//         setLoading(false);  // Hide the loading state
//       }
//     } else {
//       setSuggestions([]);  // Clear suggestions if query length is less than or equal to 2
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
//             className="w-full px-3 py-2 text-sm bg-blue-gray-400 outline-none"
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
//         <div className="absolute top-12 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
//           {loading ? (
//             <div className="p-2 text-sm text-gray-500">Loading...</div>
//           ) : (
//             suggestions.map((patient) => (
//               <div
//                 key={patient.id}
//                 className="p-2 text-sm hover:bg-gray-100 cursor-pointer"
//               >
//                 {/* Display name and date of birth */}
//                 <div>
//                   <span>{`${patient.firstName} ${patient.lastName}`}</span>
//                   <span className="text-gray-500 ml-2">
//                     {patient.dateOfBirth ? new Date(patient.dateOfBirth).toLocaleDateString() : "N/A"}
//                   </span>
//                 </div>
//               </div>
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
import { Link } from "react-router-dom";

const PatientSearch = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
    setSearchQuery(""); // Clear search query when toggling
    setSuggestions([]);
  };

  const handleSearch = async (e) => {
    const query = e.target.value;
    setSearchQuery(query); // Set the search query in state
    console.log('searchQuery', query); // Log the query being passed to the backend

    if (query.length > 2) {
      setLoading(true);
      try {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/patient/Patientsearch`, {
          query, // Send the query as part of the request body
        });
        console.log('Search response:', response.data); // Log the response from the backend
        setSuggestions(response.data); // Update the suggestions state with the response
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setLoading(false); // Hide the loading state
      }
    } else {
      setSuggestions([]); // Clear suggestions if query length is less than or equal to 2
    }
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

      {/* Search Input */}
      {isSearchActive && (
        <div className="flex items-center bg-white border border-gray-300 rounded-md shadow-sm">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search patients..."
            className="w-full px-3 py-2 text-sm text-black bg-gray-100 outline-none"
          />
          <button
            onClick={toggleSearch}
            className="px-3 text-gray-500 hover:text-blue-300 transition duration-300"
          >
            Cancel
          </button>
        </div>
      )}

      {/* Suggestions Dropdown */}
      {isSearchActive && suggestions.length > 0 && (
        <div className="absolute top-12 w-full bg-white  text-black border border-gray-600  rounded-lg shadow-lg z-10">
          {loading ? (
            <div className="p-2 text-sm text-gray-500">Loading...</div>
          ) : (
            suggestions.map((patient) => (
                <Link
                key={patient.id}
                to={`/dashboard/${patient.id}`} // Navigate to the dynamic route
                className="block p-2 text-base hover:bg-gray-300 cursor-pointer"
                onClick={()=>{ setIsSearchActive(!isSearchActive)}}
              >
              <div
                key={patient.id}
                className="p-2 text-base  hover:bg-gray-300 cursor-pointer"
              >
                {/* Display name and date of birth */}
                <div>
                  <span className="font-medium text-black">{`${patient.firstName} ${patient.lastName}`}</span>
                  <span className=" text-cyan-500 ml-6">DOB   :  
                    {patient.dateOfBirth ? new Date(patient.dateOfBirth).toLocaleDateString() : "N/A"}
                  </span>
                </div>
              </div>
                </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default PatientSearch;
