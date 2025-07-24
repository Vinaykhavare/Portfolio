// src/components/Skills.jsx
import React from 'react';
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs,
  FaGitAlt, FaGithub, FaDatabase, FaJava
} from 'react-icons/fa';
import { SiExpress, SiMongodb,SiMysql } from 'react-icons/si';
import './Skills.css';

const skillsData = [
  { title: "HTML5", icon: <FaHtml5 className="icon" /> },
  { title: "CSS3", icon: <FaCss3Alt className="icon" /> },
  { title: "JavaScript", icon: <FaJsSquare className="icon" /> },
  { title: "React.js", icon: <FaReact className="icon" /> },
   { title: "Java", icon: <FaJava className="icon" /> },
  { title: "MySQL", icon: <SiMysql className="icon" /> },
  { title: "Node.js", icon: <FaNodeJs className="icon" /> },
  { title: "Express.js", icon: <SiExpress className="icon" /> },
  { title: "MongoDB", icon: <SiMongodb className="icon" /> },
  { title: "Git", icon: <FaGitAlt className="icon" /> },
  { title: "GitHub", icon: <FaGithub className="icon" /> },
  { title: "Database", icon: <FaDatabase className="icon" /> },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2  style={{marginTop:"25px"}}>My Skills</h2>
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div className="skill-card" key={index}>
              {skill.icon}
              <h3>{skill.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
