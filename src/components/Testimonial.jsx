
import { testimonials } from "../data";

function Testimonial() {
  return (
    <section className="testimonial section" id="testimonial">

      <div className="container">

        <div className="section-heading">

          <p className="section-small">
            CUSTOMER FEEDBACK
          </p>

          <h2>What Our Customers Say</h2>

          <p>
            Customer satisfaction is important to us.
            We work to provide reliable solar solutions
            and professional support.
          </p>

        </div>

        <div className="portfolio-grid">

          {testimonials.map((item) => (
            <div className="testimonial-card" key={item.id}>

              <div className="rating">
                ⭐⭐⭐⭐⭐
              </div>

              <p>{item.message}</p>

              <h3>{item.name}</h3>

              <span>{item.role}</span>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonial;
