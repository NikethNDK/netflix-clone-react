import React from "react";
import "./CompanyAssets.css";
import { Link } from "react-router-dom"; 
const CompanyAssets = () => {
  return (
    <div className="assets-section">
      <div className="assets-content">
        <h2>Looking for company assets?</h2>
        <p>Get more images and information about Netflix on our company site.</p>
        <Link to="/about-netflix" className="assets-button">
          Go to About Netflix
        </Link>
      </div>
    </div>
  );
};

export default CompanyAssets;
