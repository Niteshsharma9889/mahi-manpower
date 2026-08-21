import "./JobCategory.css";

const categories = [
  "Chef / Cook",
  "Waiter / Steward",
  "Kitchen Helper",
  "Restaurant Manager",
  "Housekeeping Staff",
  "Delivery Staff",
  "Security Staff",
  "Other Support Staff",
];

function JobCategory() {
  return (
    <section className="job-category" id="jobs">
      <div className="job-category-container">

        <h2 className="job-category-title">
          Job Categories
        </h2>

        <p className="job-category-subtitle">
          Find reliable and skilled staff for your business
        </p>

        <div className="category-grid">
          {categories.map((category, index) => (
            <a
              href="#jobs"
              className="category-item"
              key={index}
            >
              {category}
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}

export default JobCategory;