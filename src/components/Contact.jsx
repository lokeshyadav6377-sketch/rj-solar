
function Contact() {
  return (
    <section className="contact section" id="contact">

      <div className="container">

        <div className="section-heading">

          <p className="section-small">
            CONTACT WITH US
          </p>

          <h2>Have Any Questions?</h2>

          <p>
            Contact RJ Solar & Energies for solar
            consultation, installation and support.
          </p>

        </div>

        <div className="contact-container">

          <form
            className="contact-form"
            action="mailto:rjsolarandenerigies@gmail.com"
            method="post"
            encType="text/plain"
          >

            <div className="form-row">

              <input
                type="text"
                name="First Name"
                placeholder="Enter Your Name"
                required
              />

              <input
                type="text"
                name="Last Name"
                placeholder="Enter Your Last Name"
              />

            </div>

            <input
              type="email"
              name="Email"
              placeholder="Enter Your Email"
              required
            />

            <input
              type="tel"
              name="Phone"
              placeholder="Phone Number"
              required
            />

            <textarea
              name="Message"
              placeholder="Write Your Message"
              rows="6"
              required
            ></textarea>

            <button type="submit" className="primary-btn">
              Send Message
            </button>

          </form>

          <div className="contact-info">

            <div className="contact-item">

              <h3>Contact Person</h3>

              <p>Er. Gopal Lal Yadav</p>

            </div>

            <div className="contact-item">

              <h3>Phone Number</h3>

              <p>
                <a href="tel:+919110720924">
                  +91 9110720924
                </a>
              </p>

            </div>

            <div className="contact-item">

              <h3>Email Address</h3>

              <p>
                <a href="mailto:rjsolarandenerigies@gmail.com">
                  rjsolarandenerigies@gmail.com
                </a>
              </p>

            </div>

            <div className="contact-item">

              <h3>Our Office Address</h3>

              <p>
                Annu Vihar-A, Kalwar Road, Manchwa,
                Jaipur 302012
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;
