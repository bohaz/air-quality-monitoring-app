import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className="navbar-logo">LOGO</Link>
        <div className="navbar-icons">
          <i className="icon-name">ICON 1</i>
          <i className="icon-name">ICON 2</i>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
