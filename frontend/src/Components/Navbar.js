import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="navbardiv">
      <nav class="navbar">
        <Link to="/" className="linktag">Fake Product Identification System</Link>
        <Link to="/instructions" className="linktag instructionstag">Instructions</Link>
        <Link to="/register" className="linktag">Register</Link>
        <Link to="/login" className="linktag">Login</Link>
        
      </nav>
    </div>
  );
}

export default Navbar;
