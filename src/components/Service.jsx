
import { services } from "../data";

function Service() {
  return (
    <section className="services section" id="services">

      <div className="container">

        <div className="section-heading">

          <p className="section-small">
            OUR SOLAR SERVICES
          </p>

          <h2>Complete Solar Energy Solutions</h2>

          <p>
            Reliable solar solutions designed to help you
            save money and generate clean energy.
          </p>

        </div>

        <div className="service-grid">

          {services.map((service) => (
            <div className="service-card" key={service.id}>

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <a href="#contact">
                Read More →
              </a>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Service;
