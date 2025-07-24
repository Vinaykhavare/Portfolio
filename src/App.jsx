// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import './styles/global.css';


function App() {
  return (
    <div className="App ">
      <Navbar />
       {/* Navbar (sticky) */}
   

      {/* Hero Section */}
      <section id="home ">
        <Home />
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Skills Section */}
      <section id="skills">
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
      <section id="footer">
        <Footer/>
      </section>
    </div>
  );
}

export default App;