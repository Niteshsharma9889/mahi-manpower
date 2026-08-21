import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-overlay"></div>

      <div className="hero-container">

        <div className="hero-content">

          <span className="hero-line"></span>

          <p className="hero-eyebrow">
            INDIA'S PREMIER RESTAURANT STAFFING
          </p>

          <h1 className="hero-title">
            Staffing made
            <br />
            simple,
            <br />
            service made
            <br />
            <span>exceptional.</span>
          </h1>

          <p className="hero-description">
            Connecting India's finest hospitality talent with world-class
            restaurants. From chefs to service staff, we build the teams
            that build great dining experiences.
          </p>

          <div className="hero-buttons">

            <a href="#hire" className="hero-button primary">
              Hire Staff
              <span className="button-arrow">→</span>
            </a>

            <a href="#jobs" className="hero-button secondary">
              Find Jobs
            </a>

          </div>

        </div>

      </div>

      <div className="hero-bottom-fade"></div>

    </section>
  );
}

export default Hero;