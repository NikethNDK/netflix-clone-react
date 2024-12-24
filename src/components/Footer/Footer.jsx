import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <h4>Company</h4>
        <ul>
          <li>About Netflix</li>
          <li>Newsroom</li>
          <li>Company Assets</li>
          <li>Start watching</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Connect</h4>
        <ul>
          <li>Contact Us</li>
          <div className="social-icons">
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-facebook"></i>
          </div>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Legal</h4>
        <ul>
          <li>Terms and Conditions</li>
          <li>Privacy</li>
          <li>Cookie Preferences</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
