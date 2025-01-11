import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/Sidebar'; // Make sure Sidebar is in the correct directory
import Form from './components/Form'; // Make sure Form is in the correct directory

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Routes for the commented pages */}
        <Route path="/" element={<Sidebar/>} />
        <Route path="/form" element={<Form />} />
        <Route path="/about" element={<h2>About Us</h2>} />
        <Route path="/services" element={<h2>Our Services</h2>} />
        <Route path="/contact" element={<h2>Contact Us</h2>} />
      </Routes>
    </Router>
  );
};

export default App;
