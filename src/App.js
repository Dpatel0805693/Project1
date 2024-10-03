import React from 'react';
import { BrowserRouter as Router, Route, Routes, isRouteErrorResponse} from 'react-router-dom';
import Homepage from './Homepage';
import ContactPage from './ContactPage';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <Header />  
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/*<Route path="/about" element={< />} /> */}
        {/*<Route path="/projects" element={< />} /> */}
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default App;