import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Images/logo.png";
import "../styles/header.css";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Celestezoi" />
      </div>
      
      <div className="menu">
        <Link to="/" className="menu-item">Home</Link>
        <Link to="/home" className="menu-item">About Us</Link>
        <Link to="/home" className="menu-item">Beauty</Link>
        <Link to="/home" className="menu-item">Fashion</Link>
        <Link to="/home" className="menu-item">Magazines</Link>
        <Link to="/home" className="menu-item">Contact Us</Link>
        
        <a href="#" className="menu-item download-btn"> Download App</a>

      </div>
    </nav>
  );
};

export default Header;
