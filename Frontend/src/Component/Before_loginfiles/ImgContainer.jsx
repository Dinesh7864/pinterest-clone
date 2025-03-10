import React, { useState, useEffect } from 'react'; // Add useState and useEffect
import './ImgContainer.css';
import img1 from "../../assets/images/img1.webp";
import img2 from "../../assets/images/img2.webp";
import img3 from "../../assets/images/img3.webp";
import img4 from "../../assets/images/img4.webp";
import img5 from "../../assets/images/img5.webp";
import img6 from "../../assets/images/img6.webp";
import img7 from "../../assets/images/img7.webp";
import img8 from "../../assets/images/img8.webp";

function ImgContainer() {
  // Define slides and currentSlide state within the component
  const slides = [
    'chai time snacks idea',
    'evening tea recipes',
    'Indian snack inspiration',
    'tea time treats'
  ];
  
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Auto-rotate slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    
    return () => clearInterval(timer);
  }, []);

  // Array of image URLs
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];

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
            {/* <FaChevronDown /> */}
          </button>
        </div>
      </div>
    </main>
  );
}

export default ImgContainer;