
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Component/sign_up_pages/Register";
import Login from "./Component/sign_up_pages/Login";
import Home from "./Component/sign_up_pages/Home";
import Navbar from "./Component/Navbar/Navbar"; 
import Sidebar from "./Component/Navbar/Sidebar"; 
import PinterestAPI from "./Component/PinterestAPI";




function App() {
  const [search, setSearch] = useState('');

  
  return (
    <Router>

     <Sidebar />
     <div className='pin_nav_continer'>
      <Navbar search={search} setSearch={setSearch} />
      <PinterestAPI search={search} />
      </div>
      <Routes>
        <Route path="/" element={<PinterestAPI search={search} />} />
      </Routes>
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;