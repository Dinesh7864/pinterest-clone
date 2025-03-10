import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './SearchIdea.css'; // Import the external CSS file

function SearchSection() {
  return (
    <section className="search-section">
      <div className="search-container">
        {/* Left side with images */}
        <div className="search-image-container">
          <div className="search-image-box">
            <img 
              src="https://images.unsplash.com/photo-1562967914-608f82629710" 
              alt="Chicken dinner"
              className="search-image"
            />
          </div>
          <div className="search-input-box">
            <div className="search-input">
              <FaSearch className="search-icon" />
              <span className="search-text">easy chicken dinner</span>
            </div>
          </div>
        </div>

        {/* Right side with text */}
        <div className="search-text-container">
          <h2 className="search-title">
            Search for an idea
          </h2>
          <p className="search-description">
            What do you want to try next? Think of something you're into – such as 'easy chicken dinner' – and see what you find.
          </p>
          <button className="search-button">
            Explore
          </button>
        </div>
      </div>
    </section>
  );
}

export default SearchSection;
