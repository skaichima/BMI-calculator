import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import logo from '../assets/logo.png'

function Navbar() {
  const [navbarColor, setNavbarColor] = useState('transparent');
  const [navbarShadow, setNavbarShadow] = useState('transparent');

  const changeBackground = () => {
    if (window.scrollY >= 100) {
        setNavbarColor('transparent');
        setNavbarShadow('rgba(0, 0, 0, 0.04) 0px 3px 5px');
      } else {
        setNavbarColor('transparent');
        setNavbarShadow('');
    }
};

useEffect(() => {
  window.addEventListener('scroll', changeBackground);
  return () => window.removeEventListener('scroll', changeBackground);
}, []);

  return (
    <nav className="navbar"  style={{backgroundColor: navbarColor, boxShadow: navbarShadow}}>
      <ul className="navlist">
        <li className="navlist-item">
          <Link className="list-item" to="/">Dashboard</Link>
        </li>
        <div className='navlist-item'>
          <img src={logo} alt="" />
        </div>
        <li className="navlist-item">
          <Link className="list-item" to="/bmi_calculator">BMI Calculator</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;