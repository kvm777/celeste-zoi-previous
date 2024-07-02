import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/Images/logo.png";
import "../styles/header.css";
import Hamburger from 'hamburger-react'



const Header = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/"><img src={logo} alt="Celestezoi" /></Link>
        <div className="hamburger">
          <Hamburger toggled={isOpen} toggle={setOpen} className="hamburger"/>
        </div> 
      </div>
      
      <div className="menu">
      <NavLink exact to="/" className="menu-item" activeClassName="active">Home</NavLink>
      <NavLink to="/about-us" className="menu-item" activeClassName="active">About Us</NavLink>
      <NavLink to="/beauty" className="menu-item" activeClassName="active">Beauty</NavLink>
      <NavLink to="/fashion" className="menu-item" activeClassName="active">Fashion</NavLink>
      <NavLink to="/magazines" className="menu-item" activeClassName="active">Magazines</NavLink>
      <NavLink to="/contact-us" className="menu-item" activeClassName="active">Contact Us</NavLink>
      <Link href="#" className="menu-item download-btn">Download App</Link>

      </div>
    </nav>
  );
};

export default Header;
