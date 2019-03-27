import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top">
      <Link className="navbar-brand" to="/ ">
        Julian Callin
      </Link>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link" href="#">
            Resume
          </a>
          <a className="nav-item nav-link" href="#">
            Projects
          </a>
          <a className="nav-item nav-link" href="#">
            Pictures
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
