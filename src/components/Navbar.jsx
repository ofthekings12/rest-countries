import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("dark-mode") === "true";
    setIsDarkMode(savedMode);
    document.body.classList.toggle("dark-mode", savedMode);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.body.classList.toggle("dark-mode", newMode);
    localStorage.setItem("dark-mode", newMode);
  };
  
  return (
    <div className="navbar">
      <h1>Where in the world?</h1>
      <h4 className="dark-mode-button" onClick={toggleDarkMode}>
        <svg className="dark-icon"
          fill="#000000"
          viewBox="0 0 35 35"
          data-name="Layer 2"
          id="Layer_2"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18.44,34.68a18.22,18.22,0,0,1-2.94-.24,18.18,18.18,0,0,1-15-20.86A18.06,18.06,0,0,1,9.59.63,2.42,2.42,0,0,1,12.2.79a2.39,2.39,0,0,1,1,2.41L11.9,3.1l1.23.22A15.66,15.66,0,0,0,23.34,21h0a15.82,15.82,0,0,0,8.47.53A2.44,2.44,0,0,1,34.47,25,18.18,18.18,0,0,1,18.44,34.68ZM10.67,2.89a15.67,15.67,0,0,0-5,22.77A15.66,15.66,0,0,0,32.18,24a18.49,18.49,0,0,1-9.65-.64A18.18,18.18,0,0,1,10.67,2.89Z"></path>
        </svg>
        Dark Mode
      </h4>
    </div>
  );
}

export default Navbar;