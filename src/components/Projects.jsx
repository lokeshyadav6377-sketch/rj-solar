
import { projects } from "../data";

function Projects() {
  return (
    <section className="portfolio section" id="portfolio">

      <div className="container">

        <div className="section-heading">

          <p className="section-small">
            OUR SOLAR PROJECTS
          </p>

          <h2>Our Solar Work Showcase</h2>

          <p>
            Explore solar energy solutions for residential
            and commercial properties.
          </p>

        </div>

        <div className="portfolio-grid">

          {projects.map((project) => (
            <div className="portfolio-card" key={project.id}>

              <div className="portfolio-image">
                ☀️
              </div>

              <div className="portfolio-info">

                <p>{project.category}</p>

                <h3>{project.title}</h3>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;
