// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-blue-900 text-white mt-auto">
//       <div className="container mx-auto px-4 py-8 flex flex-wrap items-center justify-between">
//         {/* Logo */}
//         <div className="flex items-center space-x-4">
//           <div className="bg-blue-700 p-3 rounded-full animate-pulse">
//             <span className="text-lg font-bold">EHR+</span>
//           </div>
//           <h1 className="text-lg font-semibold tracking-wider">Your Health, Our Priority</h1>
//         </div>

//         {/* Navigation Links */}
//         <div className="flex space-x-6 mt-4 md:mt-0">
//           <a
//             href="#"
//             className="text-white hover:text-blue-300 transition duration-300"
//           >
//             Home
//           </a>
//           <a
//             href="#about"
//             className="text-white hover:text-blue-300 transition duration-300"
//           >
//             About Us
//           </a>
//           <a
//             href="#services"
//             className="text-white hover:text-blue-300 transition duration-300"
//           >
//             Services
//           </a>
//           <a
//             href="#contact"
//             className="text-white hover:text-blue-300 transition duration-300"
//           >
//             Contact
//           </a>
//         </div>

//         {/* Social Icons */}
//         <div className="flex items-center space-x-4 mt-4 md:mt-0">
//           <a
//             href="#"
//             className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 hover:bg-blue-500 transition duration-300"
//           >
//             <i className="fab fa-facebook-f"></i>
//           </a>
//           <a
//             href="#"
//             className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 hover:bg-blue-500 transition duration-300"
//           >
//             <i className="fab fa-twitter"></i>
//           </a>
//           <a
//             href="#"
//             className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 hover:bg-blue-500 transition duration-300"
//           >
//             <i className="fab fa-linkedin-in"></i>
//           </a>
//         </div>
//       </div>

//       {/* Footer Bottom */}
//       <div className="bg-blue-800 text-center py-4">
//         <p className="text-sm">
//           &copy; {new Date().getFullYear()} EHR+. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { FaHeart, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-8 flex flex-wrap items-center justify-between">
        {/* Logo and Heart Blinking Animation with Pulse Graph */}
        <div className="flex items-center space-x-4">
           <div className="bg-blue-700 p-3 rounded-full animate-pulse">
             <span className="text-lg font-bold">EHR+</span>
          </div>
          <h1 className="text-lg font-semibold tracking-wider">Your Health, Our Priority</h1>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="#"
            className="text-white hover:text-blue-300 transition duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-white hover:text-blue-300 transition duration-300"
          >
            About Us
          </a>
          <a
            href="#services"
            className="text-white hover:text-blue-300 transition duration-300"
          >
            Services
          </a>
          <a
            href="#contact"
            className="text-white hover:text-blue-300 transition duration-300"
          >
            Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 hover:bg-blue-500 transition duration-300"
          >
            <FaFacebookF className="text-white" />
          </a>
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 hover:bg-blue-500 transition duration-300"
          >
            <FaTwitter className="text-white" />
          </a>
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 hover:bg-blue-500 transition duration-300"
          >
            <FaLinkedinIn className="text-white" />
          </a>
        </div>
      </div>

      {/* Footer Additional Content */}
      <div className="container mx-auto px-4 py-8 flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-6">
          <h2 className="text-lg font-semibold">Quick Links</h2>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="text-white hover:text-blue-300 transition duration-300">Privacy Policy</a></li>
            <li><a href="#" className="text-white hover:text-blue-300 transition duration-300">Terms & Conditions</a></li>
            <li><a href="#" className="text-white hover:text-blue-300 transition duration-300">FAQ</a></li>
          </ul>
        </div>

        <div className="w-full md:w-1/3 mb-6">
          <h2 className="text-lg font-semibold">Contact Us</h2>
          <p className="mt-2 text-sm">Email: support@ehrplus.com</p>
          <p className="text-sm">Phone: (123) 456-7890</p>
        </div>

        <div className="w-full md:w-1/3 mb-6">
          <h2 className="text-lg font-semibold">Subscribe</h2>
          <p className="mt-2 text-sm">Get the latest updates delivered right to your inbox.</p>
          <div className="flex mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-md w-full"
            />
            <button className="bg-blue-700 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-blue-800 text-center py-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} EHR+. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

