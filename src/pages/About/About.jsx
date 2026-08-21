import "./About.css";
import {
  Heart,
  Target,
  Handshake,
  Star,
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "People First",
    description:
      "Every decision starts with the people it impacts — candidates and clients alike.",
  },
  {
    icon: Target,
    title: "Precision Matching",
    description:
      "We don't just fill positions — we find the right person for the right role.",
  },
  {
    icon: Handshake,
    title: "Trust & Transparency",
    description:
      "Honest communication and ethical practices are the foundation of every relationship.",
  },
  {
    icon: Star,
    title: "Excellence Always",
    description:
      "We hold ourselves to the same standard of excellence we expect from our placements.",
  },
];

function About() {
  return (
    <main className="about-page">

      {/* =========================
          ABOUT HEADER
      ========================= */}

      <section className="about-header">
        <div className="about-header-content">

          <h1>About Mahi Manpower</h1>

          <p>
            We're on a mission to transform how businesses
            find and hire exceptional talent.
          </p>

        </div>
      </section>


      {/* =========================
          OUR STORY
      ========================= */}

      <section className="about-story">

        <div className="about-story-container">

          <h2>Our Story</h2>

          <p>
            Mahi Manpower connects businesses with skilled,
            reliable and suitable professionals for their
            staffing requirements.
          </p>

          <p>
            We understand that finding the right people is an
            important part of building a successful business.
            At the same time, talented professionals need access
            to genuine opportunities where their skills are valued.
          </p>

          <p>
            Our goal is to make this connection simpler and more
            efficient by helping businesses find the right staff
            while helping candidates discover suitable
            opportunities.
          </p>

        </div>

      </section>


      {/* =========================
          OUR VALUES
      ========================= */}

      <section className="about-values">

        <div className="about-values-container">

          <h2>Our Values</h2>

          <div className="about-values-grid">

            {values.map((value, index) => {

              const Icon = value.icon;

              return (
                <div
                  className="about-value-card"
                  key={index}
                >

                  <div className="about-value-icon">
                    <Icon
                      size={34}
                      strokeWidth={2.2}
                    />
                  </div>

                  <h3>
                    {value.title}
                  </h3>

                  <p>
                    {value.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>

    </main>
  );
}

export default About;