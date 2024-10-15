import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ContactPage from './ContactPage';
import Homepage from './Homepage';
import Aboutme from './components/Aboutme';
import Header from './components/Header';
import PreviousProjects from './components/PreviousProjects';


const App = () => {
  return (
    <Router>
      <Header />  
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutme />} /> 
        <Route path="/projects" element={<PreviousProjects />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default App;