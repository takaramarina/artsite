import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS for styling

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>Reiji Shimane</h1>
      </div>
      <nav>
        <ul>
            <li><Link to="/">Gallery</Link></li>  {/* Link to Home */}
            <li><Link to="/about">About</Link></li>  {/* Link to About */}
            <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
