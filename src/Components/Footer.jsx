import React from "react";
import "../styles/footer.css";
import logo_1 from "../assets/Images/logo-1.png";

const Footer = () => {
  return (
    <footer>
      <div className="container footer-container">
        <div className="column">
          <h4>About Celeste Zoi</h4>
          <p>
            Celeste Zoi, sanctuary created by women, for women, where you can celebrate your individuality, connect
            with a supportive community, and enjoy a diverse range of services all under one roof.
          </p>
          {/* Social Media Icons */}
          <div className="social-icons">
            <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/yourpage" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/company/yourpage" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/yourpage" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
        <div className="column">
          <img src={logo_1} alt="Celestezoi" />
        </div>
        <div className="column">
          <h4>Contact Celeste Zoi</h4>
          <div className="contact-info">
            <div>
              <a href="/">
                <i className="fas fa-map-marker-alt"></i>
                <span>Visit our Location</span>
              </a>
              <p>H.No: 1-73/JH/4 & 11, Challa's arcade, beside Chandana Brothers, Gachibowli, Telangana 500081</p>
            </div>
            <div>
              <a href="/">
                <i className="far fa-envelope"></i>
                <span>Send us Email</span>
              </a>
              <p>celestezoi01@gmail.com</p>
            </div>
            <div>
            
              <a href="/">
              
                <i className="fas fa-phone-alt">  </i>
                <span>Looking For Enrollment</span>
              </a>
              <p>+ 91-234-567-8900</p>
             
            </div>
          </div>
        </div>
      </div>
      {/* Copyright notice */}
      <div className="text-center white p-3">
        &copy; 2024 All rights reserved - Celeste Zoi
      </div>
    </footer>
  );
};

export default Footer;
