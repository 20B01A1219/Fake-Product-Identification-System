import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  var currentuser = localStorage.getItem("currentuser");
  return (
    <div className="navbardiv">
      <nav class="navbar">
        <Link to="/" className="linktag">
          Fake Product Identification System
        </Link>
        
        {!(currentuser)? (<>
          <Link to="/instructions" className="linktag instructionstag">
          Instructions
        </Link>
        <Link to="/register" className="linktag">
          Register
        </Link>
        <Link to="/login" className="linktag">
          Login
        </Link>
        </>):(
          <>
          <Link to = "/manufacturer" className="linktag instructionstag"> Manufacturer</Link>
          <Link to = "/profile" className="linktag">
            Profile
          </Link>
          <Link to="/logout" className="linktag">
          Logout
        </Link>
          </>
        )}
        
        
      </nav>
    </div>
  );
}

export default Navbar;
