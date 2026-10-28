
function Contact(){
    return(

        <section className="contact section" id="contact">

        <div className="container">

          <div className="section-heading">

            <p className="section-small">
              CONTACT WITH US!
            </p>

            <h2>
              Have Any Questions?
            </h2>

            <p>
              Enthusiastically disintermediate one-to-one leadership
              via business e-commerce. Dramatically reintermediate
              compelling process improvements rather than empowered
              relationships.
            </p>

          </div>


          <div className="contact-container">

            <form className="contact-form">

              <div className="form-row">

                <input
                  type="text"
                  placeholder="Enter Your Name"
                />

                <input
                  type="text"
                  placeholder="Enter Your Last Name"
                />

              </div>


              <input
                type="email"
                placeholder="Enter Your Email"
              />


              <input
                type="tel"
                placeholder="Phone Number"
              />


              <textarea
                placeholder="Write Your Message"
                rows="6"
              ></textarea>


              <button className="primary-btn">
                Make An Appointment
              </button>

            </form>


            <div className="contact-info">

              <div className="contact-item">

                <h3>Er. Gopal Lal Yadav</h3>

                <p>
                  +91 9110720924
                </p>

              </div>


              <div className="contact-item">

                <h3>Email Address</h3>

                <p>
                  rjsolarandenerigies@gmail.com
                </p>

              </div>


              <div className="contact-item">

                <h3>Our Office Address</h3>

                <p>
                  Annu Vihar-A,Kalwar road,manchwa
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