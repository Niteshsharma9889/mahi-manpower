import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Brand */}
        <a href="/" className="navbar-brand">
          <img src="/logo.png" alt="Mahi Manpower" />

          <span className="brand-name">
            <span className="brand-mahi">Mahi</span>
            <span className="brand-manpower">Manpower</span>
          </span>
        </a>

        {/* Navigation */}
        <div className="navbar-links">
          <a href="#home" className="active">
            Home
          </a>

          <a href="#about">
            About Us
          </a>

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

        {/* Right side */}
        <div className="navbar-right">
          <span className="navbar-divider"></span>

          <a href="#login" className="login-link">
            Login
          </a>

          <button
            className="theme-button"
            aria-label="Toggle theme"
          >
            ☾
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;