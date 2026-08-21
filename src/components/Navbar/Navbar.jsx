import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Brand */}
        <Link to="/" className="navbar-brand">
          <img src="/logo.png" alt="Mahi Manpower" />

          <span className="brand-name">
            <span className="brand-mahi">Mahi</span>
            <span className="brand-manpower">Manpower</span>
          </span>
        </Link>

        {/* Navigation */}
        <div className="navbar-links">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            About Us
          </NavLink>

          <a href="#jobs">
            Jobs
          </a>

          <a href="#candidates">
            Candidates
          </a>

          <a href="#pricing">
            Pricing
          </a>

          <a href="#contact">
            Contact Us
          </a>

        </div>

        {/* Right Side */}
        <div className="navbar-right">

          <span className="navbar-divider"></span>

          <a href="#login" className="login-link">
            Login
          </a>

          {/* Dark Mode Toggle */}
          <button
            className="theme-button"
            aria-label="Toggle dark mode"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀" : "☾"}
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;