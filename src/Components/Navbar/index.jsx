import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.css';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <Link className="navbar-brand" to="/">
          Pupster
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/discover"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Discover
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/search"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Search
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
