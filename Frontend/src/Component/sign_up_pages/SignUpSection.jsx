import React from 'react';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import './SignUpSection.css'; // Import the external CSS file
import image1 from '../../assets/images/img1.jpg';
import image2 from '../../assets/images/img2.jpg';
import image3 from '../../assets/images/img3.jpg';
import image4 from '../../assets/images/img4.jpg';
import image5 from '../../assets/images/img5.png';
import image6 from '../../assets/images/img6.png';
import image7 from '../../assets/images/img7.png';
import image8 from '../../assets/images/img8.png';
function SignUpSection({ showPassword, setShowPassword }) {
  const images = [image1, image2, image3, image4, image5, image6, image7, image8];

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

export default SignUpSection;
