
function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-container">

        <a href="#home" className="logo">
          RJ<span>Solar</span>
        </a>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Projects</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#solutions">Solutions</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#testimonial">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <a href="tel:+919110720924" className="quote-btn">
          Request A Call
        </a>

      </div>
    </nav>
  );
}

export default Navbar;
