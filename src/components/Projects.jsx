
function Projects(){
  return(
    <section className="portfolio section" id="portfolio">

  <div className="container">

    <div className="section-heading">

      <p className="section-small">
        OUR SOLAR PROJECTS
      </p>

      <h2>
        Our Solar Work Showcase
      </h2>

      <p>
        Explore our solar energy projects designed for homes,
        businesses and commercial properties.
      </p>

    </div>


    <div className="portfolio-grid">

      {/* Project 1 */}
      <div className="portfolio-card">

        <div className="portfolio-image">
          ☀️
        </div>

        <div className="portfolio-info">

          <p>Residential Solar</p>

          <h3>
            Rooftop Solar Installation
          </h3>

        </div>

      </div>


      {/* Project 2 */}
      <div className="portfolio-card">

        <div className="portfolio-image">
          🏢
        </div>

        <div className="portfolio-info">

          <p>Commercial Solar</p>

          <h3>
            Commercial Solar System
          </h3>

        </div>

      </div>


      {/* Project 3 */}
      <div className="portfolio-card">

        <div className="portfolio-image">
          🔋
        </div>

        <div className="portfolio-info">

          <p>Solar Energy</p>

          <h3>
            Complete Solar Solution
          </h3>

        </div>

      </div>

    </div>


    {/* Statistics */}

    <div className="stats">

      <div className="stat">
        <h2>100+</h2>
        <p>Solar Projects</p>
      </div>

      <div className="stat">
        <h2>90+</h2>
        <p>Happy Customers</p>
      </div>

      <div className="stat">
        <h2>1MW+</h2>
        <p>Solar Capacity Installed</p>
      </div>

    </div>

  </div>

</section>
  );
}

export default Projects;
