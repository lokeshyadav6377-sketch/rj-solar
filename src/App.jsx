import React from "react";
import "./App.css";

import{ services, solarSolutions, solarBenefits, team, blogs} from "./data"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer"
import Projects from "./components/Projects"
import Solarsol from "./components/Solarsol"
import Team from "./components/Team" 



function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Service/>
      <Solarsol/>
      <Team/>
      <Testimonial/>
            <Contact/>
      <Footer/>
    </div>
  );
}

export default App;