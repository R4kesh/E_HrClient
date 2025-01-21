import React from 'react';
import { Sidebar } from '../components/Sidebar';
import Form from '../components/Form';

const FormPage = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      {/* Sidebar on the left */}
      <div className="w-full h-screen md:w-56 bg-white ">
        <Sidebar />
      </div>

      {/* Form on the right */}
      <div className="flex-grow p-6 bg-gray-50">
        <Form />
      </div>
    </div>
  );
};

export default FormPage;
