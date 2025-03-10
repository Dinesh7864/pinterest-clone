import React from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import './ExplorenNext.css'; // Import the external CSS file

function ExplorenNext() {
  return (
    <section className="makeup-section">
      <div className="container">
        {/* Left side with Pinterest card */}
        <div className="left-section">
          <div className="card">
            <div className="image-container">
              <button className="back-button">
                <FaChevronLeft className="icon" />
              </button>
              <img
                src="https://images.unsplash.com/photo-1588001832198-c15cff59b078"
                alt="Makeup tutorial"
                className="main-image"
              />
            </div>
            <div className="card-content">
              <h3 className="card-title">
                How to find the perfect lip shade for any occasion
              </h3>
              <div className="profile">
                <div className="profile-image">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb"
                    alt="Profile"
                  />
                </div>
                <div>
                  <p className="profile-name">Scout the City</p>
                  <p className="profile-followers">56.7k followers</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side with text */}
        <div className="right-section">
          <h2 className="main-heading">
            See it, make it,<br />try it, do it
          </h2>
          <p className="description">
            The best part of Pinterest is discovering new things and ideas from people around the world.
          </p>
          <button className="explore-button">Explore</button>
        </div>
      </div>
    </section>
  );
}

export default ExplorenNext;
