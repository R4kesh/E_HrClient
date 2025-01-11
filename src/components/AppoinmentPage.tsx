import { useState } from "react";

function AppointmentForm() {
 const [firstName, setFirstName] = useState("");
 const [lastName, setLastName] = useState("");
 const [dob, setDob] = useState("");
 const [gender, setGender] = useState("");
 const [city, setCity] = useState("");
 const [state, setState] = useState("");
 const [zipCode, setZipCode] = useState("");
 const [email, setEmail] = useState("");
 const [phone, setPhone] = useState("");
 const [agreeTerms, setAgreeTerms] = useState(false);
 const [selectedSpeciality, setSelectedSpeciality] = useState("");
 const [selectedDate, setSelectedDate] = useState("");
 const [selectedTime, setSelectedTime] = useState("");

 const handleSubmit = (e) => {
   e.preventDefault();
   // Handle form submission logic here
 };

 return (
   <div className="bg-gray-100 min-h-screen flex items-center justify-center">
     <form onSubmit={handleSubmit} className="max-w-lg w-full p-6 bg-white shadow-lg rounded-lg">
       <h2 className="text-3xl font-bold text-center mb-6">Patient Appointment Form</h2>
       <div className="mb-4">
         <label className="block text-sm font-medium text-gray-700">First Name</label>
         <input
           type="text"
           value={firstName}
           onChange={(e) => setFirstName(e.target.value)}
           className="mt-1 block w-full border border-gray-300 rounded-md p-2"
           required
         />
       </div>
       <div className="mb-4">
         <label className="block text-sm font-medium text-gray-700">Last Name</label>
         <input
           type="text"
           value={lastName}
           onChange={(e) => setLastName(e.target.value)}
           className="mt-1 block w-full border border-gray-300 rounded-md p-2"
           required
         />
       </div>
       <div className="mb-4">
         <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
         <input
           type="date"
           value={dob}
           onChange={(e) => setDob(e.target.value)}
           className="mt-1 block w-full border border-gray-300 rounded-md p-2"
           required
         />
       </div>
       <div className="mb-4">
         <label className="block text-sm font-medium text-gray-700">Gender</label>
         <select
           value={gender}
           onChange={(e) => setGender(e.target.value)}
           className="mt-1 block w-full border border-gray-300 rounded-md p-2"
           required
         >
           <option value="">Select Gender</option>
           <option value="male">Male</option>
           <option value="female">Female</option>
           <option value="other">Other</option>
         </select>
       </div>
       <div className="mb-4">
         <label className="block text-sm font-medium text-gray-700">City</label>
         <input
           type="text"
           value={city}
           onChange={(e) => setCity(e.target.value)}
           className="mt-1 block w-full border border-gray-300 rounded-md p-2"
           required
         />
       </div>
       <div className="mb-4">
         <label className="block text-sm font-medium text-gray-700">State</label>
         <input
           type="text"
           value={state}
           onChange={(e) => setState(e.target.value)}
           className="mt-1 block w-full border border-gray-300 rounded-md p-2"
           required
         />
       </div>
       <div className="mb-4">
         <label className="block text-sm font-medium text-gray-700">Zip Code</label>
         <input
           type="text"
           value={zipCode}
           onChange={(e) => setZipCode(e.target.value)}
           className="mt-1 block w-full border border-gray-300 rounded-md p-2"
           required
         />
       </div>
       <div className="mb-4">
         <label className="block text-sm font-medium text-gray-700">Email</label>
         <input
           type="email"
           value={email}
           onChange={( e) => setEmail(e.target.value)}
           className="mt-1 block w-full border border-gray-300 rounded-md p-2"
           required
         />
       </div>
       <div className="mb-4">
         <label className="block text-sm font-medium text-gray-700">Phone</label>
         <input
           type="tel"
           value={phone}
           onChange={(e) => setPhone(e.target.value)}
           className="mt-1 block w-full border border-gray-300 rounded-md p-2"
           required
         />
       </div>
       <div className="mb-4">
         <label className="flex items-center">
           <input
             type="checkbox"
             checked={agreeTerms}
             onChange={(e) => setAgreeTerms(e.target.checked)}
             className="mr-2"
             required
           />
           I agree to the terms and conditions
         </label>
       </div>
       <div className="mb-4">
         <label className="block text-sm font-medium text-gray-700">Speciality</label>
         <select
           value={selectedSpeciality}
           onChange={(e) => setSelectedSpeciality(e.target.value)}
           className="mt-1 block w-full border border-gray-300 rounded-md p-2"
           required
         >
           <option value="">Select Speciality</option>
           <option value="cardiology">Cardiology</option>
           <option value="dermatology">Dermatology</option>
           <option value="neurology">Neurology</option>
           <option value="pediatrics">Pediatrics</option>
           <option value="orthopedics">Orthopedics</option>
         </select>
       </div>
       <div className="mb-4">
         <label className="block text-sm font-medium text-gray-700">Appointment Date</label>
         <input
           type="date"
           value={selectedDate}
           onChange={(e) => setSelectedDate(e.target.value)}
           className="mt-1 block w-full border border-gray-300 rounded-md p-2"
           required
         />
       </div>
       <div className="mb-4">
         <label className="block text-sm font-medium text-gray-700">Appointment Time</label>
         <input
           type="time"
           value={selectedTime}
           onChange={(e) => setSelectedTime(e.target.value)}
           className="mt-1 block w-full border border-gray-300 rounded-md p-2"
           required
         />
       </div>
       <button
         type="submit"
         className="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600"
       >
         Schedule Appointment
       </button>
     </form>
   </div>
 );
}

export default AppointmentForm;