import React from "react";
import Hero from "./Hero/Hero"
import About from "./About/About"
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer.jsx";

const App = () => {
  return (
   <div className="App">
     <Hero />
     <About />
     <Projects />
     <Contact />
     <Footer/>
   </div>
  );
}

export default App;
