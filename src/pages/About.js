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
    <div className="navbar">
      <a href="#" onClick={toggleMenu}>Home</a>
      <a href="#" onClick={toggleMenu}>About</a>
      <a href="#" onClick={toggleMenu}>Services</a>
      <a href="#" onClick={toggleMenu}>Contact</a>
      {/* Conditional rendering of the menu based on state */}
      {menuVisible && (
        <div className="menu">
          {/* Menu items */}
          <a href="#" onClick={hideMenu}>MenuItem1</a>
          <a href="#" onClick={hideMenu}>MenuItem2</a>
          {/* Add more menu items as needed */}
        </div>
      )}
    </div>
  );
}

export default About;

