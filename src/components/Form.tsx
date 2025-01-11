// import React from 'react';

// function Form() {
//   return (
//     <div className="bg-gray-50 min-h-screen flex flex-col items-center">
//       <header className="bg-teal-500 w-full py-4 flex justify-between items-center px-4 sm:px-8">
//         <h1 className="text-white text-xl sm:text-2xl font-bold">MyCarePedia</h1>
//         <nav className="flex space-x-4 sm:space-x-6">
//           <a href="#" className="text-white hover:underline text-sm sm:text-base">Home</a>
//           <a href="#" className="text-white hover:underline text-sm sm:text-base">About Us</a>
//           <a href="#" className="text-white hover:underline text-sm sm:text-base">Services</a>
//           <a href="#" className="text-white hover:underline text-sm sm:text-base">Specialties</a>
//           <a href="#" className="text-white hover:underline text-sm sm:text-base">Contact Us</a>
//         </nav>
//         <button className="bg-white text-teal-500 px-3 py-2 rounded shadow text-sm sm:text-base">Log In</button>
//       </header>

//       <div className="w-full">
//         <img src="https://gctlinfosys.com/wp-content/uploads/2023/03/Hospital-Management-Software-1.jpg" alt="Banner" className="w-full h-auto" />
//       </div>

//       <main className="w-full max-w-7xl bg-white shadow-lg rounded-lg mt-6 sm:mt-10 p-4 sm:p-8">
//         <h2 className="text-xl sm:text-2xl font-bold mb-4">Appointment Form</h2>

//         <form>
//           <section className="mb-6 sm:mb-8">
//             <h3 className="text-lg font-semibold mb-2">Patient Information</h3>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
//               <div>
//                 <label className="block text-gray-600">First Name</label>
//                 <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-teal-500" placeholder="Enter your First Name" />
//               </div>
//               <div>
//                 <label className="block text-gray-600">Last Name</label>
//                 <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-teal-500" placeholder="Enter your Last Name" />
//               </div>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
//               <div>
//                 <label className="block text-gray-600">Date of Birth</label>
//                 <input type="date" className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-teal-500" />
//               </div>
//               <div>
//                 <label className="block text-gray-600">Gender</label>
//                 <select className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-teal-500">
//                   <option>Select Gender</option>
//                   <option>Male</option>
//                   <option>Female</option>
//                   <option>Other</option>
//                 </select>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
//               <div>
//                 <label className="block text-gray-600">Address</label>
//                 <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-teal-500" placeholder="Enter your Address" />
//               </div>
//               <div>
//                 <label className="block text-gray-600">Apt/Suite</label>
//                 <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-teal-500" placeholder="Enter Apt/Suite" />
//               </div>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
//               <div>
//                 <label className="block text-gray-600">City</label>
//                 <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-teal-500" placeholder="Enter your City" />
//               </div>
//               <div>
//                 <label className="block text-gray-600">State</label>
//                 <select className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-teal-500">
//                   <option>Select State</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-gray-600">Zip Code</label>
//                 <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-teal-500" placeholder="Enter your Zip Code" />
//               </div>
//             </div>
//           </section>

//           <section className="mb-6 sm:mb-8">
//             <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
//               <div>
//                 <label className="block text-gray-600">Email ID</label>
//                 <input type="email" className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-teal-500" placeholder="Enter your Email ID" />
//               </div>
//               <div>
//                 <label className="block text-gray-600">Phone Number</label>
//                 <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-teal-500" placeholder="Enter your Phone Number" />
//               </div>
//             </div>
          
//             <p className='mb-4
//             '>Choose How you u'd Like to receive Appointmnet Notification</p>
//             <div className="flex space-x-4">
//               <label className="flex items-center">
//                 <input type="radio" name="notification" className="text-teal-500 focus:ring-teal-500" />
//                 <span className="ml-2 text-gray-600">Email ID</span>
//               </label>
//               <label className="flex items-center">
//                 <input type="radio" name="notification" className="text-teal-500 focus:ring-teal-500" />
//                 <span className="ml-2 text-gray-600">Text</span>
//               </label>
//             </div>
//           </section>

//           <p className='mb-4 font-serif'>By selecting an option, you agree to receive appointment notifications via your chosen method. Message and data rates may apply. You can update your preferences or opt out at any time.</p>

//           <section className="mb-6 sm:mb-8">
//             <h3 className="text-lg font-semibold mb-2">Visit Details</h3>
//             <p className='mb-4'>Please select the type of visit that best suits your needs to ensure we provide the appropriate care and support.</p>
//             <div>
//               <label className="block text-gray-600">Select Type of Visit</label>
//               <select className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-teal-500">
//                 <option>Select Type of Visit</option>
//               </select>
//             </div>
//           </section>

//           <div className="flex justify-center space-x-4">
//             <button type="button" className="bg-gray-300 text-gray-700 px-4 py-2 rounded">Cancel</button>
//             <button type="submit" className="bg-teal-500 text-white px-4 py-2 rounded">Continue</button>
//           </div>
//         </form>
//       </main>

//       <footer className="bg-teal-500 w-full py-4 sm:py-6 mt-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 space-y-4 sm:space-y-0">
//         <div className="text-white text-sm sm:text-base">© 2024 MyCarePedia. All Rights Reserved</div>
//         <div className="flex space-x-4">
//           <a href="#" className="text-white hover:underline text-sm sm:text-base">Terms & Conditions</a>
//           <a href="#" className="text-white hover:underline text-sm sm:text-base">Sitemap</a>
//           <a href="#" className="text-white hover:underline text-sm sm:text-base">Privacy Policy</a>
//         </div>
//         <div className="flex items-center space-x-2">
//           <input type="email" placeholder="Enter Email Address" className="border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-teal-500 text-sm sm:text-base" />
//           <button className="bg-white text-teal-500 px-4 py-2 rounded text-sm sm:text-base">Join Our Newsletter</button>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default Form;




import React from 'react';

function Form() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center">
      <header className="bg-teal-500 w-full py-4 flex justify-between items-center px-4 sm:px-8">
        <h1 className="text-white text-xl sm:text-2xl font-bold">E_Hr</h1>
        <nav className="flex space-x-4 sm:space-x-6">
          <a href="#" className="text-white hover:underline text-sm sm:text-base">Home</a>
          <a href="#" className="text-white hover:underline text-sm sm:text-base">About Us</a>
          <a href="#" className="text-white hover:underline text-sm sm:text-base">Services</a>
          <a href="#" className="text-white hover:underline text-sm sm:text-base">Specialties</a>
          <a href="#" className="text-white hover:underline text-sm sm:text-base">Contact Us</a>
        </nav>
        <button className="bg-white text-teal-500 px-3 py-2 rounded shadow text-sm sm:text-base">Log In</button>
      </header>

      <div className="w-full">
        <img src="https://gctlinfosys.com/wp-content/uploads/2023/03/Hospital-Management-Software-1.jpg" alt="Banner" className="w-full h-auto" />
      </div>

      <main className="w-full max-w-7xl bg-gradient-to-r from-white to-teal-50 shadow-lg rounded-lg mt-6 sm:mt-10 p-4 sm:p-8">

        <h2 className="text-xl sm:text-2xl font-bold mb-4">Appointment Form</h2>

        <form>
          <section className="mb-6 sm:mb-8">
            <h3 className="text-lg font-semibold mb-2">Patient Information</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-600">First Name</label>
                <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-teal-500" placeholder="Enter your First Name" />
              </div>
              <div>
                <label className="block text-gray-600">Last Name</label>
                <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-teal-500" placeholder="Enter your Last Name" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-600">Date of Birth</label>
                <input type="date" className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-teal-500" />
              </div>
              <div>
                <label className="block text-gray-600">Gender</label>
                <select className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-teal-500">
                  <option>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-600">Address</label>
                <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-teal-500" placeholder="Enter your Address" />
              </div>
              <div>
                <label className="block text-gray-600">Apt/Suite</label>
                <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-teal-500" placeholder="Enter Apt/Suite" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-gray-600">City</label>
                <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-teal-500" placeholder="Enter your City" />
              </div>
              <div>
                <label className="block text-gray-600">State</label>
                <select className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-teal-500">
                  <option>Select State</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-600">Zip Code</label>
                <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-teal-500" placeholder="Enter your Zip Code" />
              </div>
            </div>
          </section>

          <section className="mb-6 sm:mb-8">
            <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-600">Email ID</label>
                <input type="email" className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-teal-500" placeholder="Enter your Email ID" />
              </div>
              <div>
                <label className="block text-gray-600">Phone Number</label>
                <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-teal-500" placeholder="Enter your Phone Number" />
              </div>
            </div>
          
            <p className='mb-4'>
              Choose How you'd Like to receive Appointment Notification
            </p>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input type="radio" name="notification" className="text-teal-500 focus:ring-teal-500" />
                <span className="ml-2 text-gray-600">Email ID</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="notification" className="text-teal-500 focus:ring-teal-500" />
                <span className="ml-2 text-gray-600">Text</span>
              </label>
            </div>
          </section>

          <p className='mb-4 font-serif'>
            By selecting an option, you agree to receive appointment notifications via your chosen method. Message and data rates may apply. You can update your preferences or opt out at any time.
          </p>

          <section className="mb-6 sm:mb-8">
            <h3 className="text-lg font-semibold mb-2">Visit Details</h3>
            <p className='mb-4'>Please select the type of visit that best suits your needs to ensure we provide the appropriate care and support.</p>
            <div>
              <label className="block text-gray-600">Select Type of Visit</label>
              <select className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-teal-500">
                <option>Select Type of Visit</option>
              </select>
            </div>
          </section>

          <div className="flex justify-center space-x-4">
            <button type="button" className="bg-gray-300 text-gray-700 px-4 py-2 rounded">Cancel</button>
            <button type="submit" className="bg-teal-500 text-white px-4 py-2 rounded">Continue</button>
          </div>
        </form>
      </main>

      <footer className="bg-teal-500 w-full py-4 sm:py-6 mt-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 space-y-4 sm:space-y-0">
        <div className="text-white text-sm sm:text-base">© 2024 MyCarePedia. All Rights Reserved</div>
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:underline text-sm sm:text-base">Terms & Conditions</a>
          <a href="#" className="text-white hover:underline text-sm sm:text-base">Sitemap</a>
          <a href="#" className="text-white hover:underline text-sm sm:text-base">Privacy Policy</a>
        </div>
        <div className="flex items-center space-x-2">
          <input type="email" placeholder="Enter Email Address" className="border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-teal-500 text-sm sm:text-base" />
          <button className="bg-white text-teal-500 px-4 py-2 rounded text-sm sm:text-base">Join Our Newsletter</button>
        </div>
      </footer>
    </div>
  );
}

export default Form;
