import { useEffect, useState } from "react";
import "./Hero.css";

const stats = [
  {
    value: 10,
    suffix: "+",
    label: "Years of Experience",
    className: "stat-top",
    color: "orange",
  },
  {
    value: 2500,
    suffix: "+",
    label: "Staff Placements",
    className: "stat-left",
    color: "green",
  },
  {
    value: 500,
    suffix: "+",
    label: "Active Staff in Restaurants & Hotels",
    className: "stat-right",
    color: "blue",
  },
  {
    value: 100,
    suffix: "+",
    label: "Hiring Partners",
    className: "stat-bottom-left",
    color: "purple",
  },
  {
    value: 96,
    suffix: "%",
    label: "Client Satisfaction",
    className: "stat-bottom-right",
    color: "red",
  },
];

function AnimatedStat({ stat, startAnimation }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    const duration = 1600;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(stat.value * easedProgress));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(stat.value);
      }
    };

    requestAnimationFrame(animate);
  }, [startAnimation, stat.value]);

  return (
    <div
      className={`hero-stat ${stat.className} stat-${stat.color}`}
    >
      <strong>
        {count.toLocaleString()}
        {stat.suffix}
      </strong>

      <span>{stat.label}</span>
    </div>
  );
}

function Hero() {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 350);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero" id="home">

      <div className="hero-container">

        {/* =========================
            LEFT CONTENT
        ========================= */}

        <div className="hero-content">

          <span className="hero-line"></span>

          <p className="hero-eyebrow">
            INDIA'S PREMIER MANPOWER STAFFING
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
            Connecting businesses with reliable and skilled
            professionals. From hospitality staff to support
            teams, we help build the workforce your business needs.
          </p>

          <div className="hero-buttons">

            <a
              href="#hire"
              className="hero-button primary"
            >
              Hire Staff
              <span className="button-arrow">→</span>
            </a>

            <a
              href="#jobs"
              className="hero-button secondary"
            >
              Find Jobs
            </a>

          </div>

        </div>


        {/* =========================
            RIGHT VISUAL
        ========================= */}

        <div className="hero-visual">

          {/* Rings */}
          <div className="hero-ring hero-ring-one"></div>
          <div className="hero-ring hero-ring-two"></div>
          <div className="hero-ring hero-ring-three"></div>


          {/* =========================
              CENTER IMAGE
          ========================= */}

          <div className="hero-center">

            <div className="hero-image">
              <img
                src="/hhh.png"
                alt="Mahi Manpower professionals"
              />
            </div>

            <div className="hero-center-label">
              Trusted Manpower
              <br />
              Staffing Platform
            </div>

          </div>


          {/* =========================
              STAT CARDS
          ========================= */}

          {stats.map((stat) => (
            <AnimatedStat
              key={stat.label}
              stat={stat}
              startAnimation={startAnimation}
            />
          ))}

        </div>

      </div>

      <div className="hero-bottom-fade"></div>

    </section>
  );
}

export default Hero;