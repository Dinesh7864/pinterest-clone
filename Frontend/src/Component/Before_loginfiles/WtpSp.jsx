import React from 'react';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import './WtpSp.css'; // Import the external CSS file
import img1 from "../../assets/images/img1.webp";
import img2 from "../../assets/images/img2.webp";
import img3 from "../../assets/images/img3.webp";
import img4 from "../../assets/images/img4.webp";
import img5 from "../../assets/images/img5.webp";
import img6 from "../../assets/images/img6.webp";
import img7 from "../../assets/images/img7.webp";
import img8 from "../../assets/images/img8.webp";
function WtpSp({ showPassword, setShowPassword }) {
  
  // Array of image URLs
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];

  return (
    <section className="signup-section">
      <div className="signup-container">
        {/* Left side with image grid */}
        <div className="signup-image-grid">
          <div className="image-grid2">
            {images.map((image, index) => (
              <div key={index} className="image-box">
                <img src={image} alt={`Food inspiration ${index + 1}`} className="image" />
              </div>
            ))}
          </div>
          <div className="image-overlay" />
        </div>

        {/* Right side with sign-up form */}
        <div className="signup-form-container">
          <h2 className="signup-title">Welcome to Pinterest</h2>
          <p className="signup-subtitle">Find new ideas to try</p>
          <form className="signup-form">
            <div>
              <input type="email" placeholder="Email address" className="input-field" />
            </div>
            <div className="password-field">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Create a password" 
                className="input-field" 
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)} 
                className="password-toggle"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div>
              <input type="text" placeholder="dd-mm-yyyy" className="input-field" />
            </div>
            <button className="continue_button">Continue</button>
            <div className="separator">
              <div className="line"></div>
              <span className="or-text">OR</span>
            </div>
            <button className="google-button">
              <FaGoogle className="google-icon" />
              Continue as
            </button>
            <p className="terms-text">
              By continuing, you agree to Pinterest's Terms of Service and acknowledge that you've read our Privacy Policy, Notice at collection.
            </p>
            <p className="login-text">
              Already a member? <a href="#" className="login-link">Log in</a>
            </p>
          </form>
          <div className="business-account">
            <a href="#" className="business-link">Create a free business account</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WtpSp;
