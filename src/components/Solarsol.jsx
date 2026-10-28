import { solarSolutions, solarBenefits } from "../data";
function Solarsol(){
  return(
      <section className="technology section" id="solutions">

  <div className="container">

    <div className="section-heading">

      <p className="section-small">
        OUR SOLAR SOLUTIONS
      </p>

      <h2>
        Smart & Reliable Solar Energy Solutions
      </h2>

      <p>
        We provide complete solar energy solutions for homes,
        businesses and commercial properties.
      </p>

    </div>

    <div className="technology-box">

      <h3>Our Solar Systems</h3>

      <div className="tech-grid">

        {solarSolutions.map((solution, index) => (
          <div className="tech-item" key={index}>
            ☀️ {solution}
          </div>
        ))}

      </div>

    </div>

    <div className="technology-box">

      <h3>Benefits of Solar Energy</h3>

      <div className="tech-grid">

        {solarBenefits.map((benefit, index) => (
          <div className="tech-item" key={index}>
            ✓ {benefit}
          </div>
        ))}

      </div>

    </div>

  </div>

</section>
  );
}

export default Solarsol;
