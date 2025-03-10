
import React, { useState, useEffect } from "react";
import "./Explore.css";
import Navbar from "../Navbar/Navbar";

function Explore() {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const today = new Date();

    // Format date as "Month Day, Year" (e.g., "February 28, 2025")
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formatted = today.toLocaleDateString("en-US", options);

    setFormattedDate(formatted);
  }, []);

  return (
    <div className="p-4 border rounded shadow-md">
     
      <div className="date-cover"><p>{formattedDate}</p>
      <h2 className="text-xl font-bold">Stay Inspired</h2></div>
      <Navbar />
      
    </div>
  );
}

export default Explore;