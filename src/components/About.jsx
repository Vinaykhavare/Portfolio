// src/components/About.jsx
import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about" id="about">
      <div className="about-intro">
        <h2>About <span>Me</span></h2>
        <p>
          I'm <strong>Vinay Khavare</strong>, a passionate Full Stack Developer (Java + MERN) who enjoys building efficient, scalable, and visually appealing web applications.
          I love experimenting with modern technologies and aim to create user-friendly interfaces and strong backend systems.
        </p>
      </div>

      <div className="about-cards">
        <div className="about-card">
          <h3>Programming<br />Languages</h3>
          <ul>
            <li>Java</li>
            <li>C++</li>
            <li>JavaScript</li>
            <li>Python</li>
            <li>PHP</li>
          </ul>
        </div>

        <div className="about-card">
          <h3>Frontend &<br />UI</h3>
          <ul>
            <li>React.js</li>
            <li>Material UI</li>
            <li>Bootstrap</li>
            <li>Tailwind CSS</li>
            <li>HTML & CSS</li>
          </ul>
        </div>

        <div className="about-card">
          <h3>Backend &<br />Frameworks</h3>
          <ul>
            <li>Spring Boot</li>
            <li>Node.js & Express</li>
            <li>JSP & Servlets</li>
            <li>RESTful APIs</li>
          </ul>
        </div>

        <div className="about-card">
          <h3>Tools &<br />Databases</h3>
          <ul>
            <li>Git & GitHub</li>
            <li>Postman</li>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>VS Code, IntelliJ</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
