import React from "react";
import { Link } from "react-router-dom";

const Header = props => (
  <header className="masthead">
    <div className="inner">
      <h3 className="masthead-brand">Whisper</h3>
      <nav className="nav nav-masthead justify-content-center">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/secrets">
          Secrets
        </Link>
        <Link className="nav-link" to="/cart">
          Cart
        </Link>
      </nav>
    </div>
  </header>
);

export default Header;
