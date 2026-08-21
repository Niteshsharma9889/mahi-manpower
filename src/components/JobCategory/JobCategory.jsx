import "./JobCategory.css";

const categories = [
  "South Indian (Breakfast/Tiffins)",
  "Dosa Maker (Specialist)",
  "South Indian (Thali)",
  "South Indian (Pulao, Non-Veg)",
  "South Indian (Veg & Non-Veg)",
  "Biryani (Specialist)",
];

function JobCategory() {
  return (
    <section className="job-category" id="jobs">

      <div className="job-category-container">

        <h2 className="job-category-title">
          Job Category
        </h2>

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