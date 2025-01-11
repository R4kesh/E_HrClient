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

import React, { useState } from 'react';
import axios from 'axios';

function Form() {
  // State for form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    aptSuite: '',
    city: '',
    state: '',
    zipCode: '',
    emailId: '',
    phoneNumber: '',
    notificationMethod: '',
    visitType: '',
    file: null,  // For the image file
    insuranceCarrier: '',
    insurancePlanName: '',
    pharmacyDetails: '',
    pharmacyName: '',
    lastVisit: '',
  });

  const [file, setFile] = useState<File | null>(null); // New field for attachment file

  // State for validation errors
  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file upload change
  const handleImageChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  // Validate form data
  const validate = () => {
    const errors = {};
    if (!formData.firstName) errors.firstName = 'First name is required';
    if (!formData.lastName) errors.lastName = 'Last name is required';
    if (!formData.emailId) errors.emailId = 'Email is required';
    if (!formData.phoneNumber) errors.phoneNumber = 'Phone number is required';
    if (!formData.file) errors.file = 'Patient image is required';
    if (!formData.insuranceCarrier) errors.insuranceCarrier = 'Insurance carrier is required';
    if (!formData.insurancePlanName) errors.insurancePlanName = 'Insurance plan name is required';
    if (!formData.pharmacyDetails) errors.pharmacyDetails = 'Pharmacy details are required';
    if (!formData.pharmacyName) errors.pharmacyName = 'Pharmacy name is required';
    if (!formData.lastVisit) errors.lastVisit = 'Last visit date is required';
    // Add more validations as needed

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) return;  // Stop if validation fails

    const formDataToSend = new FormData();
    formDataToSend.append('firstName', formData.firstName);
    formDataToSend.append('lastName', formData.lastName);
    formDataToSend.append('dateOfBirth', formData.dateOfBirth);
    formDataToSend.append('gender', formData.gender);
    formDataToSend.append('address', formData.address);
    formDataToSend.append('aptSuite', formData.aptSuite);
    formDataToSend.append('city', formData.city);
    formDataToSend.append('state', formData.state);
    formDataToSend.append('zipCode', formData.zipCode);
    formDataToSend.append('emailId', formData.emailId);
    formDataToSend.append('phoneNumber', formData.phoneNumber);
    formDataToSend.append('notificationMethod', formData.notificationMethod);
    formDataToSend.append('visitType', formData.visitType);
    formDataToSend.append("files", file);
    formDataToSend.append('insuranceCarrier', formData.insuranceCarrier);
    formDataToSend.append('insurancePlanName', formData.insurancePlanName);
    formDataToSend.append('pharmacyDetails', formData.pharmacyDetails);
    formDataToSend.append('pharmacyName', formData.pharmacyName);
    formDataToSend.append('lastVisit', formData.lastVisit);

    try {
      // Post data to backend API (adjust URL accordingly)
      for (let [key, value] of formDataToSend.entries()) {
        console.log(key + ':', value);
      }
      console.log('formDataToSend', formDataToSend);
      await axios.post(`${import.meta.env.VITE_BASE_URL}/api/patient/patientDetails`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Patient data submitted successfully');
    } catch (error) {
      console.error('Error submitting data:', error);
      alert('There was an error submitting the form.');
    }
  };

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

        <form onSubmit={handleSubmit}>
          <section className="mb-6 sm:mb-8">
            <h3 className="text-lg font-semibold mb-2">Patient Information</h3>

            <div className="flex justify-center mb-4">
              <label className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center">
                <input
                  type="file"
                //   name="patientImage"
                  onChange={handleImageChange}
                  className="hidden"
                />
                {formData.file ? (
                  <img src={URL.createObjectURL(formData.file)} alt="Patient" className="w-full h-full rounded-full object-cover" />
                ) : (
                  <div className="text-teal-500 text-3xl">📸</div>
                )}
              </label>
              {errors.file && <span className="text-red-500 text-sm">{errors.file}</span>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-600">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter your First Name"
                />
                {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName}</span>}
              </div>
              <div>
                <label className="block text-gray-600">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter your Last Name"
                />
                {errors.lastName && <span className="text-red-500 text-sm">{errors.lastName}</span>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-600">Date of Birth</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <label className="block text-gray-600">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-teal-500"
                >
                  <option value="">Select Gender</option> {/* Default empty option to prevent empty selection */}
  <option value="Male">Male</option>
  <option value="Female">Female</option>
  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-600">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter your Address"
                />
              </div>
              <div>
                <label className="block text-gray-600">Apt/Suite</label>
                <input
                  type="text"
                  name="aptSuite"
                  value={formData.aptSuite}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter Apt/Suite"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-gray-600">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter your City"
                />
              </div>
              <div>
                <label className="block text-gray-600">State</label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-teal-500"
                >
                 <option value="">Select State</option>
  <option value="Andhra Pradesh">Andhra Pradesh</option>
  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
  <option value="Assam">Assam</option>
  <option value="Bihar">Bihar</option>
  <option value="Chhattisgarh">Chhattisgarh</option>
  <option value="Goa">Goa</option>
  <option value="Gujarat">Gujarat</option>
  <option value="Haryana">Haryana</option>
  <option value="Himachal Pradesh">Himachal Pradesh</option>
  <option value="Jharkhand">Jharkhand</option>
  <option value="Karnataka">Karnataka</option>
  <option value="Kerala">Kerala</option>
  <option value="Madhya Pradesh">Madhya Pradesh</option>
  <option value="Maharashtra">Maharashtra</option>
  <option value="Manipur">Manipur</option>
  <option value="Meghalaya">Meghalaya</option>
  <option value="Mizoram">Mizoram</option>
  <option value="Nagaland">Nagaland</option>
  <option value="Odisha">Odisha</option>
  <option value="Punjab">Punjab</option>
  <option value="Rajasthan">Rajasthan</option>
  <option value="Sikkim">Sikkim</option>
  <option value="Tamil Nadu">Tamil Nadu</option>
  <option value="Telangana">Telangana</option>
  <option value="Tripura">Tripura</option>
  <option value="Uttar Pradesh">Uttar Pradesh</option>
  <option value="Uttarakhand">Uttarakhand</option>
  <option value="West Bengal">West Bengal</option>
  <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
  <option value="Chandigarh">Chandigarh</option>
  <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
  <option value="Lakshadweep">Lakshadweep</option>
  <option value="Delhi">Delhi</option>
  <option value="Puducherry">Puducherry</option>
                  {/* Add other states */}
                </select>
              </div>
              <div>
                <label className="block text-gray-600">Zip Code</label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter your Zip Code"
                />
              </div>
            </div>
          </section>

          <section className="mb-6 sm:mb-8">
            <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-600">Email ID</label>
                <input
                  type="email"
                  name="emailId"
                  value={formData.emailId}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter your Email ID"
                />
                {errors.emailId && <span className="text-red-500 text-sm">{errors.emailId}</span>}
              </div>
              <div>
                <label className="block text-gray-600">Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter your Phone Number"
                />
                {errors.phoneNumber && <span className="text-red-500 text-sm">{errors.phoneNumber}</span>}
              </div>
            </div>
            <div>
              <label className="block text-gray-600">Notification Method</label>
              <select
                name="notificationMethod"
                value={formData.notificationMethod}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-teal-500"
              >
                <option>Select Notification Method</option>
                <option>Email</option>
                <option>Phone</option>
              </select>
            </div>
          </section>

          <section className="mb-6 sm:mb-8">
            <h3 className="text-lg font-semibold mb-2">Visit Details</h3>
            <div>
              <label className="block text-gray-600">Select Type of Visit</label>
              <select
                name="visitType"
                value={formData.visitType}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-teal-500"
              >
               <option value="">Select Type of Visit</option>
  <option value="General Checkup">General Checkup</option>
  <option value="Follow-up">Follow-up</option>
  <option value="Emergency">Emergency</option>
  <option value="Specialist Consultation">Specialist Consultation</option>
  <option value="Surgery Consultation">Surgery Consultation</option>
                {/* Add visit types */}
              </select>
            </div>
          </section>

          <section className="mb-6 sm:mb-8">
            <h3 className="text-lg font-semibold mb-2">Insurance Information</h3>
            <div>
              <label className="block text-gray-600">Insurance Carrier</label>
              <input
                type="text"
                name="insuranceCarrier"
                value={formData.insuranceCarrier}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-teal-500"
                placeholder="Enter Insurance Carrier"
              />
              {errors.insuranceCarrier && <span className="text-red-500 text-sm">{errors.insuranceCarrier}</span>}
            </div>
            <div>
              <label className="block text-gray-600">Insurance Plan Name</label>
              <input
                type="text"
                name="insurancePlanName"
                value={formData.insurancePlanName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-teal-500"
                placeholder="Enter Insurance Plan Name"
              />
              {errors.insurancePlanName && <span className="text-red-500 text-sm">{errors.insurancePlanName}</span>}
            </div>
          </section>

          <section className="mb-6 sm:mb-8">
            <h3 className="text-lg font-semibold mb-2">Pharmacy Information</h3>
            <div>
              <label className="block text-gray-600">Pharmacy Name</label>
              <input
                type="text"
                name="pharmacyName"
                value={formData.pharmacyName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-teal-500"
                placeholder="Enter Pharmacy Name"
              />
              {errors.pharmacyName && <span className="text-red-500 text-sm">{errors.pharmacyName}</span>}
            </div>
            <div>
              <label className="block text-gray-600">Pharmacy Details</label>
              <input
                type="text"
                name="pharmacyDetails"
                value={formData.pharmacyDetails}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-teal-500"
                placeholder="Enter Pharmacy Details"
              />
              {errors.pharmacyDetails && <span className="text-red-500 text-sm">{errors.pharmacyDetails}</span>}
            </div>
          </section>

          <section className="mb-6 sm:mb-8">
            <h3 className="text-lg font-semibold mb-2">Last Visit</h3>
            <div>
              <label className="block text-gray-600">Last Visit Date</label>
              <input
                type="date"
                name="lastVisit"
                value={formData.lastVisit}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-teal-500"
              />
              {errors.lastVisit && <span className="text-red-500 text-sm">{errors.lastVisit}</span>}
            </div>
          </section>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-teal-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-teal-600"
            >
              Submit
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Form;




