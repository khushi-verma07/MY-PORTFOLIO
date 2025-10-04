// components/Skills.js
import React, { useState } from 'react';
import './skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const skills = [
    { name: "HTML5", level: 90, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", category: "Web Development" },
    { name: "CSS3", level: 85, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", category: "Web Development" },
    { name: "JavaScript", level: 88, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", category: "Web Development" },
    { name: "Tailwind CSS", level: 85, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", category: "Responsiveness" },
    { name: "Bootstrap", level: 85, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", category: "Responsiveness" },
    { name: "React", level: 85, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "MERN Stack" },
    { name: "Node.js", level: 70, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "MERN Stack" },
    { name: "Express", level: 78, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", category: "MERN Stack" },
    { name: "MongoDB", level: 75, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", category: "Database" },
    { name: "MySQL", level: 80, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", category: "Database" },
    { name: "GitHub", level: 85, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", category: "Version Control" },
    { name: "Java", level: 85, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", category: "Programming Languages" },
    { name: "OOPS", level: 85, image: "https://img.icons8.com/color/96/object.png", category: "Programming Concepts" }
  ];

  const categories = ['All', 'Web Development', 'MERN Stack', 'Responsiveness', 'Database', 'Version Control', 'Programming Languages', 'Programming Concepts'];

  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Skills</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">Technologies I work with</p>
        </div>
        
        <div className="skill-categories">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="skills-container">
          {filteredSkills.map((skill, index) => (
            <div key={skill.name} className="skill-card" title={`${skill.name} - ${skill.level}%`}>
              <div className="skill-icon">
                <img src={skill.image} alt={skill.name} className="skill-image" />
              </div>
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Skills;