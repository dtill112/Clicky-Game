import React from 'react';
import "./Navbar.css";

const Navbar = props => (
  <nav className="navbar navbar-expand-lg fixed-top">
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          {props.directions} <span className="sr-only">(current)</span>
        </li>
      </ul>
      <span className="navbar-text score">
        Score: {props.score} | Top Score: {props.topScore}
      </span>
    </div>
  </nav>
)

export default Navbar;