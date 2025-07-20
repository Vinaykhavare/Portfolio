// src/components/Projects.jsx
import React from 'react';
import './Projects.css';

const projectData = [
  {
    title: "Time Management System",
    description: "Task Scheduling: Create, edit, and organize daily, weekly, or monthly tasks.",
    image: "https://images.unsplash.com/photo-1506452819137-0422416856b8?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }, 
  {
    title: "Student Attendance Management System",
    description: " Student Registration: Add, update, or remove student records.",
    image: "https://shreyaswebmediasolutions.com/wp-content/uploads/2025/07/pexels-yankrukov-8618063-770x499.jpg",
  },
 
    {
    title: "Simon Game",
    description: "Match the sequence of colors for as long as possible. One mistake, and it's game over!",
    image: "https://as1.ftcdn.net/jpg/15/59/32/42/1000_F_1559324278_ccKTK4XFv16beCjQRNgKhK3OazONj0fG.jpg",
  },
 
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projectData.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
