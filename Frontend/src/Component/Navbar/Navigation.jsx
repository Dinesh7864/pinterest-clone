// Import necessary dependencies
import React, { useState } from 'react';
import './Navigation.css'; // Import the external CSS file for styling
import LoginModal from "./LoginModal"; // Import the Login modal component
import SignupModal from './SignupModal'; // Import the Signup modal component

/**
 * Navigation Component
 * 
 * This component represents the navigation bar of the application. It includes:
 * - A company logo
 * - Navigation buttons (Explore, About, Business, Press)
 * - Login and Signup buttons that open corresponding modals
 * 
 * Props:
 * - `setIsLoggedIn` (function): A function to update the logged-in state of the user.
 */
function Navigation({ setIsLoggedIn }) {
  // State to manage the visibility of the login modal
  const [isOpen, setIsOpen] = useState(false);

  // State to manage the visibility of the signup modal
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  return (
    <>
      {/* Navigation Bar */}
      <nav className="navigation">
        <div className="nav-container">
          <div className="nav-content">

            {/* Left section - Logo, Company Name, and Explore button */}
            <div className="nav-left">
              {/* Pinterest Logo (SVG format) */}
              <svg height="24" width="24" viewBox="0 0 24 24" aria-label="Pinterest logo">
                <path fill="rgba(237, 8, 8, 0.867)" d="M0 12c0 5.123 3.211 9.497 7.73 11.218-.11-.937-.227-2.482.025-3.566.217-.932 1.401-5.938 1.401-5.938s-.357-.715-.357-1.774c0-1.66.962-2.9 2.161-2.9 1.02 0 1.512.765 1.512 1.682 0 1.025-.653 2.557-.99 3.978-.281 1.189.597 2.159 1.769 2.159 2.123 0 3.756-2.239 3.756-5.471 0-2.861-2.056-4.86-4.991-4.86-3.398 0-5.393 2.549-5.393 5.184 0 1.027.395 2.127.889 2.726a.36.36 0 0 1 .083.343c-.091.378-.293 1.189-.332 1.355-.053.218-.173.265-.4.159-1.492-.694-2.424-2.875-2.424-4.627 0-3.769 2.737-7.229 7.892-7.229 4.144 0 7.365 2.953 7.365 6.899 0 4.117-2.595 7.431-6.199 7.431-1.211 0-2.348-.63-2.738-1.373 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12"></path>
              </svg>

              {/* Company Name */}
              <span className='companyName'>Pinterest</span>

              {/* Explore Button */}
              <button className="nav-button">Explore</button>
            </div>

            {/* Right section - Navigation Links and Authentication Buttons */}
            <div className="nav-right">
              {/* Navigation Buttons */}
              <button className="nav-button">About</button>
              <button className="nav-button">Business</button>
              <button className="nav-button">Press</button>

              {/* Login Button - Opens Login Modal */}
              <button className="login-button" onClick={() => setIsOpen(true)}>Log in</button>

              {/* Signup Button - Opens Signup Modal */}
              <button className="signup-button" onClick={() => setIsSignupOpen(true)}>Sign up</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Login Modal Component
          - `isOpen`: Controls visibility of the modal.
          - `onClose`: Function to close the modal.
          - `setIsLoggedIn`: Updates login state when a user logs in.
      */}
      <LoginModal isOpen={isOpen} onClose={() => setIsOpen(false)} setIsLoggedIn={setIsLoggedIn} />

      {/* Signup Modal Component
          - `isOpen`: Controls visibility of the modal.
          - `onClose`: Function to close the modal.
          - `onSignup`: Closes the modal when signup is successful.
      */}
      <SignupModal isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} onSignup={() => setIsSignupOpen(false)} />
    </>
  );
}

// Export Navigation Component
export default Navigation;
