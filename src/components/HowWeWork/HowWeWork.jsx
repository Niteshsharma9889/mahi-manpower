import "./HowWeWork.css";

const steps = [
  {
    icon: "💡",
    title: "KNOW YOUR EXACT NEED",
    description:
      "We work as per the requirement of the clients.",
  },
  {
    icon: "🖥️",
    title: "POST YOUR REQUIREMENT",
    description:
      "Fill out a simple form to publish your ad on our portal.",
  },
  {
    icon: "📞",
    title: "HOW CANDIDATES CALL YOU",
    description:
      "Your requirement reaches active job seekers who are screened by us.",
  },
  {
    icon: "🤝",
    title: "FINALIZE CANDIDATES",
    description:
      "After the calls you get, choose better people & hire.",
  },
];

function HowWeWork() {
  return (
    <section className="how-we-work" id="how-we-work">
      <div className="how-we-work-container">

        <h2 className="section-title">
          How We Work
        </h2>

        <div className="work-grid">
          {steps.map((step, index) => (
            <div className="work-card" key={index}>

              <div className="work-icon">
                {step.icon}
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default HowWeWork;