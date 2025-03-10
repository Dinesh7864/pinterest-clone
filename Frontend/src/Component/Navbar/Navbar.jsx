import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, ChevronDown } from "lucide-react";
import "./navbar.css"; 
import SearchBar from "../SearchBar";
import Profile from "../Profile";

function Navbar({ search, setSearch }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
 
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/Login");
  };
  const [activeButton, setActiveButton] = useState(null);
  const handleButtonClick = (button, path) => {
    setActiveButton(button);
    navigate(path); // Navigate to the corresponding page
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const closeDropdown = (event) => {
      if (!event.target.closest(".profile-section")) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("click", closeDropdown);
    return () => document.removeEventListener("click", closeDropdown);
  }, []);

  return (
    
    <nav className="top-nav">
       <div className="search"><SearchBar searchQuery={search} setSearchQuery={setSearch} /></div>
     <div className="nav-container">   
      <ul className="nav-links">
       
        
      </ul>

      <div className="profile-section">
     
      {/* <button
          className={`profile-button`}
         
          onClick={() => handleButtonClick("Profile", "/Profile")}
        >
          <User size={24} />
        </button> */}
        
        <Profile />
      <button className="profile-button" onClick={toggleDropdown}><ChevronDown size={24} /></button>
    
        {isDropdownOpen && (
          <div className="dropdown-menu">
            <ul>
            {!localStorage.getItem("token") ? (
          <>
            <li><Link to="/register">Register</Link></li>
           
          </>
        ) : (
         <></>
          
        )}  
              <li><Link to="/Logout">Logout</Link></li>
              <li><Link to="/settings">Settings</Link></li>
            </ul>
          </div>
        )}
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
