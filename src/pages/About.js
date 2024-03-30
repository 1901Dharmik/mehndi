import React, { useState } from 'react';
// import './Navbar.css'; // Import your CSS file for navbar styling

function About() {
  const [menuVisible, setMenuVisible] = useState(false);

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  // Function to hide menu when a menu item is clicked
  const hideMenu = () => {
    setMenuVisible(false);
  };

  return (
   <div className="flex justify-center">
    About Us
   </div>
  );
}

export default About;

