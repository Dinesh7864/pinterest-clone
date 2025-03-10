import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import ImgContainer from "../Before_loginfiles/ImgContainer";
import SearchIdea from "../Before_loginfiles/SearchIdea";
import ExplorenNext from "../Before_loginfiles/ExplorenNext";
import WtpSp from "../Before_loginfiles/WtpSp";
import Footer from "../Before_loginfiles/Footer";
import "./Login.css";
import Register from "./Register";

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      console.log("API Response:", data); // Debugging Step

      if (response.ok && data.access) {
        localStorage.setItem("accessToken", data.access); // ✅ Store token
        setIsAuthenticated(true); // ✅ Update state
        setShowLogin(false); // ✅ Close popup
        navigate("/profile"); // ✅ Redirect
      } else {
        alert("Invalid credentials!");
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("Network error. Please try again.");
    }
  };

  return (
    <div>
      {/* Navbar */}
      <section className="navbarbfl">
        <div className="inner_wrap">
          <div className="navbarbfl_left">
           
            <a href="#" className="brand">
              <b>Pinterest</b>
              <span>
                <svg height="24" width="24" viewBox="0 0 24 24" aria-label="Pinterest logo">
                  <path
                    fill="red"
                    d="M0 12c0 5.123 3.211 9.497 7.73 11.218-.11-.937-.227-2.482.025-3.566.217-.932 1.401-5.938 1.401-5.938s-.357-.715-.357-1.774c0-1.66.962-2.9 2.161-2.9 1.02 0 1.512.765 1.512 1.682 0 1.025-.653 2.557-.99 3.978-.281 1.189.597 2.159 1.769 2.159 2.123 0 3.756-2.239 3.756-5.471 0-2.861-2.056-4.86-4.991-4.86-3.398 0-5.393 2.549-5.393 5.184 0 1.027.395 2.127.889 2.726a.36.36 0 0 1 .083.343c-.091.378-.293 1.189-.332 1.355-.053.218-.173.265-.4.159-1.492-.694-2.424-2.875-2.424-4.627 0-3.769 2.737-7.229 7.892-7.229 4.144 0 7.365 2.953 7.365 6.899 0 4.117-2.595 7.431-6.199 7.431-1.211 0-2.348-.63-2.738-1.373 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12"
                  ></path>
                </svg>
              </span>
            </a>
            <a href="#">Explore</a>
          </div>
          <div className="navbarbfl_Right">
            <a href="#">About</a>
            <a href="#">Business</a>
            <a href="#">Blog</a>
            <a href="#" className="login-btn" onClick={() => setShowLogin(true)}>
              Log in
            </a>
            <a href="#" onClick={() => setShowSignup(true)}>
              Sign up
            </a>
          </div>
        </div>
      </section>

      {/* Login Popup */}
      {showLogin && (
        <div className="popup-overlay">
          <div className="popup">
            <span className="close" onClick={() => setShowLogin(false)}>&times;</span>
            <div className="popup-header">
            <svg height="24" width="24" viewBox="0 0 24 24" aria-label="Pinterest logo">
                  <path
                    fill="red"
                    d="M0 12c0 5.123 3.211 9.497 7.73 11.218-.11-.937-.227-2.482.025-3.566.217-.932 1.401-5.938 1.401-5.938s-.357-.715-.357-1.774c0-1.66.962-2.9 2.161-2.9 1.02 0 1.512.765 1.512 1.682 0 1.025-.653 2.557-.99 3.978-.281 1.189.597 2.159 1.769 2.159 2.123 0 3.756-2.239 3.756-5.471 0-2.861-2.056-4.86-4.991-4.86-3.398 0-5.393 2.549-5.393 5.184 0 1.027.395 2.127.889 2.726a.36.36 0 0 1 .083.343c-.091.378-.293 1.189-.332 1.355-.053.218-.173.265-.4.159-1.492-.694-2.424-2.875-2.424-4.627 0-3.769 2.737-7.229 7.892-7.229 4.144 0 7.365 2.953 7.365 6.899 0 4.117-2.595 7.431-6.199 7.431-1.211 0-2.348-.63-2.738-1.373 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12"
                  ></path>
                </svg>
              <h2>Welcome to Pinterest</h2>
            </div>
            <form onSubmit={handleLogin} className="popup-form">
              <label>Email</label>
              <input type="text" placeholder="Email" value={username} onChange={(e) => setUsername(e.target.value)} required />
              <label>Password</label>
              <div className="password-container">
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <span className="eye-icon">👁</span>
              </div>
              <a href="#" className="forgot-password">Forgot your password?</a>
              <button type="submit" className="login-button">Log in</button>
            </form>
            <div className="social-login">
              <p>OR</p>
              <button className="facebook-login">Continue with Facebook</button>
              <button className="google-login">Continue with Google</button>
            </div>
            <p className="terms">By continuing, you agree to Pinterest’s <a href="#">Terms of Service</a> and acknowledge our <a href="#">Privacy Policy</a>.</p>
            <p className="signup-text">Not on Pinterest yet? <a href="#">Sign up</a></p>
          </div>
        </div>
      )}
    {/* Signup Popup */}
{showSignup && (
  <div className="popup_register">
    <div className="popup-content_Register">
      {/* Close Button */}
      <span className="close" onClick={() => setShowSignup(false)}>
        &times;
      </span>

      {/* Register Component Appears Here */}
      <Register onClose={() => setShowSignup(false)} />
    </div>
  </div>
)}


      
      

      <ImgContainer />
      <SearchIdea />
      <ExplorenNext />
      <WtpSp />
      <Footer />
    </div>
  );
};

export default Login;
