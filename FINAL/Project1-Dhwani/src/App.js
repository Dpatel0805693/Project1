import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Aboutme from './components/Aboutme';
import Header from './components/Header';
import Homepage from './Homepage';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/*<Route path="/about" element={< />} /> */}
        {/*<Route path="/projects" element={< />} /> */}
        <Route path="/about-me" element={<Aboutme />} />
      </Routes>
    </Router>
  );
};

export default App;