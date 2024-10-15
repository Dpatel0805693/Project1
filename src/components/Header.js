import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <h2 className="logo"><span>A</span>va.</h2>
      <nav className="navigation">
        <Link to="/">Home</Link>      
        <Link to="/about">About Me</Link> 
        <Link to="/projects">Projects</Link> 
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
