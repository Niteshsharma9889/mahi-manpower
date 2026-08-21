import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      {/* CTA Section */}
      <div className="footer-cta">
        <h2>Ready to Build Your Dream Team?</h2>

        <p>
          Whether you're hiring or looking for your next role,
          Mahi Manpower is here to help.
        </p>

        <div className="footer-cta-buttons">
          <a href="#contact" className="cta-primary">
            Get in Touch
          </a>

          <a href="#candidates" className="cta-secondary">
            Join as Candidate
          </a>
        </div>
      </div>

      {/* Footer Content */}
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <a href="/" className="footer-logo">
            <img src="/logo.png" alt="Mahi Manpower" />

            <span>
              <span className="footer-mahi">Mahi</span>
              <span className="footer-manpower">Manpower</span>
            </span>
          </a>

          <p>
            India's trusted hospitality staffing and manpower platform.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <a href="#about">About Us</a>
          <a href="#jobs">Browse Jobs</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Legal */}
        <div className="footer-column">
          <h3>Legal</h3>

          <a href="#terms">Terms of Service</a>
          <a href="#privacy">Privacy Policy</a>
        </div>

      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Mahi Manpower. All rights reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;