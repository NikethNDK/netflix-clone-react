import React from "react";
import "./InterestSection.css";

const InterestSection = () => {
  return (
    <div className="interest-section">
      <div className="interest-text">
        I'm interested in covering titles releasing in 
        <select className="month-dropdown">
          <option>December</option>
          <option>November</option>
          <option>October</option>
          {/* Add other months */}
        </select>
      </div>
      <div className="category-buttons">
        <button className="category-btn">🎥 Film</button>
        <button className="category-btn">📺 Series</button>
        <button className="category-btn">📚 Documentary</button>
        <button className="category-btn">👶 Kids</button>
        <button className="category-btn">🎥 Reality</button>
        <button className="category-btn">🎙️ Stand-Up Comedy</button>
        <button className="category-btn">🎮 Game</button>
      </div>
    </div>
  );
};

export default InterestSection;
