    // import {handlecall} from "../logics/functions"

 function Navbar(){

  return(
    <nav className="navbar">
        <div className="container nav-container">

          <div className="logo">
            Rj<span>Solar</span>
          </div>

          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
             <li><a href="#about">About</a></li>
              <li><a href="#testimonial">Testimonial</a></li>
                <li><a href="#team">Team</a></li>
            <li><a href="#contact">Contact Us</a></li>
            
          </ul>

          <button className="quote-btn" >
            Request A Call
          </button>

        </div>
      </nav>
  );
 }
      
export default Navbar;