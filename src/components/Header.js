import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <h2 className="logo"><span>A</span>va.</h2>
      <nav className="navigation">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
