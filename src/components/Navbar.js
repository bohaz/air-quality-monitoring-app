import React from 'react';
import { Link } from 'react-router-dom';
import Settings from '../assets/icons/gear.svg';
import Microphone from '../assets/icons/microphone .svg';
import Back from '../assets/icons/arrow.svg';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className="navbar-logo">
          <img
            className="nav__back"
            src={Back}
            alt="Back"
          />
        </Link>
        <h1 className="navbar-title">Air Pollution App</h1>
        <div className="navbar-icons">
          <i className="icon-name">
            {' '}
            <img
              src={Microphone}
              alt="Microphone"
            />

          </i>
          <i className="icon-name">
            <img
              src={Settings}
              alt="Settings"
            />

          </i>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
