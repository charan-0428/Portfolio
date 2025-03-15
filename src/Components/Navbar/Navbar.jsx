import  { useState } from 'react';
import { Link } from 'react-router-dom';
import {  FaBars, FaTimes } from 'react-icons/fa';
import logoN from '../../assets/logo.png';
import './Navbar.css'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="navbar-logo">
        <div className="logo">
            <img src={logoN} alt="logo" />
           
          </div>
        </Link>

        <div className="mobile-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <div className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/project">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>

      
      </div>
    </nav>
  );
};

export default Navbar;