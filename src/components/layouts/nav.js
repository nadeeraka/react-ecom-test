import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-primary mb-4">
          <div className="container">
            <Link to="/" className="navbar-brand">
              ClintPanel
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggler="collapse"
              data-target="#navbarMain"
            >
              <span className="navbar-toggler-icon" />
            </button>
          </div>
        </nav>
      </div>
    );
  }
}
export default Nav;
