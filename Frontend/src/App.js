import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Component/sign_up_pages/Register";
import Login from "./Component/sign_up_pages/Login";
import Home from "./Component/sign_up_pages/Home";
import Navbar from "./Component/Navbar/Navbar"; 
import Sidebar from "./Component/Navbar/Sidebar"; 
import PinterestAPI from "./Component/PinterestAPI";
import Navigation from './Component/Navigation';
import Hero from "./Component/Hero";
import Footer from './Component/Footer/Footer';
import SignUpSection from "./Component/sign_up_pages/SignUpSection";
import SearchSection from "./Component/SearchSection";
import SearchBar from './Component/SearchBar';
import MakeupSection from "./Component/MakeupSection";
import "./App.css"

function App() {
  const [search, setSearch] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track user login status
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPassword, setShowPassword] = useState(false);

  const slides = [
    'chai time snacks idea',
    'evening tea recipes',
    'Indian snack inspiration',
    'tea time treats'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Router>
      {isLoggedIn ? (
        // Render the first layout when the user is logged in
        <>
          <Sidebar />
          <div className='pin_nav_continer'>
            <Navbar search={search} setSearch={setSearch} />
            <PinterestAPI search={search} />
          </div>
          <Routes>
            <Route path="/" element={<PinterestAPI search={search} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </>
      ) : (
        // Render the second layout when the user is not logged in
        <div className="min-h-screen bg-white">
          <Navigation />
          <Hero currentSlide={currentSlide} slides={slides} />
          <SearchSection />
          <MakeupSection />
          <SignUpSection showPassword={showPassword} setShowPassword={setShowPassword} />
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;
