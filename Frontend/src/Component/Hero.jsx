import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import './Hero.css';
import image1 from "../assets/images/img1.jpg";
import image2 from "../assets/images/img2.jpg";
import image3 from "../assets/images/img3.jpg";
import image4 from "../assets/images/img4.jpg";
import image5 from "../assets/images/img5.png";
import image6 from "../assets/images/img6.png";
import image7 from "../assets/images/img7.png";
import image8 from "../assets/images/img8.png";
function Hero({ currentSlide, slides }) {
  // Array of image URLs
  const images = [image1, image2, image3, image4, image5, image6, image7, image8];

  return (
    <main>
      <div className="hero-container">
        <h1 className="hero-title">Get your next</h1>
        <div className="hero-subtitle">
          <h2>{slides[currentSlide]}</h2>
        </div>

        {/* Dots */}
        <div className="dots-container">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`slide-dot ${currentSlide === index ? 'active' : ''}`}
            />
          ))}
        </div>

        {/* Image Grid */}
        <div className="image-grid">
          {images.map((image, index) => (
            <div key={index} className="image-box">
              <img src={image} alt={`Slide ${index}`} className="image" />
            </div>
          ))}
        </div>

        {/* How it works */}
        <div className="how-it-works">
          <button>
            <span>Here's how it works</span>
            <FaChevronDown />
          </button>
        </div>
      </div>
    </main>
  );
}

export default Hero;
