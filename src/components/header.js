import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    total: state.cart.length
  };
};

const Header = props => (
  <header className="masthead">
    <div className="inner">
      <h3 className="masthead-brand">Whisper</h3>
      <nav className="nav nav-masthead justify-content-center">
        <NavLink exact activeClassName="active" className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink activeClassName="active" className="nav-link" to="/secrets">
          Secrets
        </NavLink>
        <NavLink activeClassName="active" className="nav-link" to="/cart">
          Cart {props.total}
        </NavLink>
      </nav>
    </div>
  </header>
);

export default connect(mapStateToProps)(Header);
