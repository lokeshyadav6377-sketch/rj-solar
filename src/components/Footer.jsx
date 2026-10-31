
function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-container">

        <div>

          <div className="logo">
            RJ<span>Solar</span>
          </div>

          <p>
            Innovative Electricity Solutions.
            Powering a cleaner and greener future
            with solar energy.
          </p>

        </div>

        <div>

          <h3>Quick Links</h3>

          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Projects</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>

        </div>

        <div>

          <h3>Contact Us</h3>

          <ul>
            <li>
              <a href="tel:+919110720924">
                +91 9110720924
              </a>
            </li>

            <li>
              <a href="mailto:rjsolarandenerigies@gmail.com">
                Email Us
              </a>
            </li>
          </ul>

          {/* <h3>Follow Us</h3>

          <div className="social-icons">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
          </div> */}

        </div>

      </div>

      <div className="copyright">
        © 2026 RJ Solar & Energies. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;
