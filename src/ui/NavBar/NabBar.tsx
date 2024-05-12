import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <>
      <div className="nav-bar">
        <div className="nav-bar-item">
          <a href="https://www.huffpost.com/" target="_blank">Book Appointment</a>
        </div>
        <div className="nav-bar-item">
          <a href="https://www.huffpost.com/" target="_blank">Hypnotherapy</a>
        </div>
        <div className="nav-bar-item">
          <a href="https://www.huffpost.com/" target="_blank">Meet River</a>
        </div>
        <div className="nav-bar-item">
          <a href="https://www.huffpost.com/" target="_blank">Contact Us</a>
        </div>
      </div>
    </>
  );
}

export default NavBar;
