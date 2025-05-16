import React from 'react';

function Navbar({ onNavClick }) {
  return (
    <nav className="navbar">
      <button onClick={() => onNavClick('Home')}>Home</button>
      <button onClick={() => onNavClick('About')}>About</button>
      <button onClick={() => onNavClick('Contact')}>Contact</button>
    </nav>
  );
}

export default Navbar;