
import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Service from "./components/Service";
import Solarsol from "./components/Solarsol";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Home />
        <About />
        <Projects />
        <Service />
        <Solarsol />
        <Team />
        <Testimonial />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
