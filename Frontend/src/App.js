import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Register from "./Component/sign_up_pages/Register";
import Login from "./Component/sign_up_pages/Login";
import Logout from "./Component/sign_up_pages/Logout";
import Navbar from "./Component/Navbar/Navbar";
import Sidebar from "./Component/Navbar/Sidebar";
import PinterestAPI from "./Component/PinterestAPI";
import Profile from "./Component/Profile";
import Create from './Component/sidebar_buttons/Create';
import Explore from './Component/sidebar_buttons/Explore';
import Messages from './Component/sidebar_buttons/Messages';
import Home from './Component/Home';
import Notifications from './Component/sidebar_buttons/Notifications';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [search, setSearch] = useState('');
    const location = useLocation();
    

    const pagesWithoutSidebarNavbar = ["/explore", "/create", "/messages", "/notifications", "/Profile", "/login", "/register"];
    const hideSidebarNavbar = pagesWithoutSidebarNavbar.includes(location.pathname);

    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        console.log("Stored Token:", token);
        setIsAuthenticated(!!token);
    }, [location.pathname]);

    console.log("Current Path:", location.pathname, "Hide Navbar:", hideSidebarNavbar); // Debugging

   

    return (
        <>
            {isAuthenticated && <Sidebar />}
            {!hideSidebarNavbar && (
                <div className="pin_nav_continer">
                    <Navbar search={search} setSearch={setSearch} />
                    <PinterestAPI search={search} />
                </div>
            )}

            <Routes>
                {!isAuthenticated ? (
                    <>
                        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
                        <Route path="/register" element={<Register setIsAuthenticated={setIsAuthenticated} />} />
                        <Route path="*" element={<Navigate to="/login" />} />
                      
                    </>
                ) : (
                    <>
                        <Route path="/home" element={<Home />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/explore" element={<Explore />} />
                        <Route path="/create" element={<Create />} />
                        <Route path="/messages" element={<Messages />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/notifications" element={<Notifications />} />
                        <Route path="/logout" element={<Logout setIsAuthenticated={setIsAuthenticated} />} />
                        <Route path="*" element={<Navigate to="/home" />} />
                    </>
                )}
            </Routes>
        </>
    );
}


export default App;
