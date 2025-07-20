import React from 'react';
import './Home.css';
import vinayImg from '../assets/profile.png';
import resumePDF from '../assets/Vinay_Resume.pdf';

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <div className="home-image">
          <img src={vinayImg} alt="Vinay Khavare" />
        </div>

        <h1>Hi, I'm Vinay Khavare</h1>
        <p>"Passionate Full Stack Developer building modern, scalable web applications."</p>

        <a
          href={resumePDF}
          className="resume-btn"
          download="Vinay_Khavare_Resume.pdf"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default Home;
