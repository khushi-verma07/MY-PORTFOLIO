// components/Projects.js
import React, { useState, useEffect, useRef } from 'react';
import eduImage from '../assets/EduLinker.png';
import foodImage from '../assets/foodzone.png';
import ecomImage from '../assets/ecom.png';


const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "Food-Zone",
      category: "fullstack",
      description: "A food delivery app with real-time tracking and payment integration.",
      image: foodImage,
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      liveLink: "https://food-zone-delta-blond.vercel.app/",
      githubLink: "https://github.com/khushi-verma07/Food-Zone"
    },
    {
      id: 2,
      title: "EduLinker",
      category: "fullstack",
      description: "An educational platform connecting students and tutors.",
      image: eduImage,
      technologies: ["React", "Node", "MongoDB", "Express"],
      liveLink: "https://edu-linker-f65z-n9jjbhuue-khushi-vermas-projects-1bbaa978.vercel.app/",
      githubLink: "https://github.com/khushi-verma07/EduLinker"
    },
    {
      id: 3,
      title: "E-Commerce",
      category: "frontend",
      description: "A complete e-commerce solution with admin dashboard.",
      image: ecomImage,
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://magnificent-clafoutis-b692a5.netlify.app",
      githubLink: "https://github.com/khushi-verma07/E-Commerce"
    },
    // {
    //   id: 4,
    //   title: "Weather App",
    //   category: "frontend",
    //   description: "Real-time weather application with beautiful UI.",
    //   image: "/path-to-weather-app-image.jpg",
    //   technologies: ["React", "CSS3", "Weather API"],
    //   liveLink: "#",
    //   githubLink: "#"
    // }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" style={{
      padding: '100px 20px',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Background Elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '100px',
        height: '100px',
        background: 'linear-gradient(45deg, rgba(153, 153, 153, 0.1), rgba(204, 204, 204, 0.1))',
        borderRadius: '50%',
        animation: 'float 6s ease-in-out infinite'
      }}></div>
      <div style={{
        position: 'absolute',
        top: '60%',
        right: '10%',
        width: '150px',
        height: '150px',
        background: 'linear-gradient(45deg, rgba(153, 153, 153, 0.08), rgba(204, 204, 204, 0.08))',
        borderRadius: '50%',
        animation: 'float 8s ease-in-out infinite reverse'
      }}></div>
      
      <div style={{maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: '2'}}>
        <div style={{
          textAlign: 'center',
          marginBottom: '80px',
          animation: 'slideInDown 1s ease-out'
        }}>
          <h1 style={{
            color: '#2c2c2c',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '800',
            marginBottom: '15px',
            background: 'linear-gradient(135deg, #333 0%, #666 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            position: 'relative',
            animation: 'glow 2s ease-in-out infinite alternate'
          }}>
            My Projects
            <div style={{
              position: 'absolute',
              bottom: '-15px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '100px',
              height: '4px',
              background: 'linear-gradient(135deg, #999999 0%, #cccccc 100%)',
              borderRadius: '2px',
              animation: 'expand 1.5s ease-out 0.5s both'
            }}></div>
          </h1>
          <p style={{
            color: '#666',
            fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
            fontWeight: '400',
            marginTop: '30px',
            animation: 'fadeInUp 1s ease-out 0.3s both'
          }}>Here are some of my recent works</p>
        </div>
        
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          marginBottom: '60px',
          flexWrap: 'wrap',
          animation: 'fadeInUp 1s ease-out 0.6s both'
        }}>
          {['all', 'fullstack', 'frontend'].map((filter, idx) => (
            <button 
              key={filter}
              style={{
                padding: '14px 32px',
                background: activeFilter === filter ? 'linear-gradient(135deg, #999999 0%, #cccccc 100%)' : 'rgba(255, 255, 255, 0.9)',
                color: activeFilter === filter ? 'white' : '#666',
                border: '2px solid #999999',
                borderRadius: '30px',
                cursor: 'pointer',
                fontWeight: '700',
                fontSize: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: activeFilter === filter ? '0 10px 30px rgba(153, 153, 153, 0.4)' : '0 5px 20px rgba(0,0,0,0.1)',
                transform: activeFilter === filter ? 'translateY(-5px) scale(1.05)' : 'translateY(0) scale(1)',
                animation: `bounceIn 0.8s ease-out ${0.2 * idx}s both`,
                backdropFilter: 'blur(10px)'
              }}
              onClick={() => setActiveFilter(filter)}
              onMouseEnter={(e) => {
                if (activeFilter !== filter) {
                  e.target.style.transform = 'translateY(-3px) scale(1.02)';
                  e.target.style.boxShadow = '0 8px 25px rgba(153, 153, 153, 0.3)';
                  e.target.style.background = 'linear-gradient(135deg, #f0f0f0 0%, #ffffff 100%)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeFilter !== filter) {
                  e.target.style.transform = 'translateY(0) scale(1)';
                  e.target.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.9)';
                }
              }}
            >
              <span style={{
                position: 'relative',
                zIndex: '2'
              }}>
                {filter === 'all' ? 'All' : filter === 'fullstack' ? 'Full Stack' : 'Frontend'}
              </span>
              <div style={{
                position: 'absolute',
                top: '0',
                left: '-100%',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
                transition: 'left 0.6s ease',
                zIndex: '1'
              }}></div>
            </button>
          ))}
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '40px',
          animation: 'fadeInUp 1s ease-out 0.9s both'
        }}>
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '25px',
                overflow: 'hidden',
                boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                border: '1px solid rgba(255,255,255,0.3)',
                transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                position: 'relative',
                animation: `slideInUp 0.8s ease-out ${0.2 * index}s both`,
                cursor: 'pointer',
                backdropFilter: 'blur(20px)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-20px) scale(1.03) rotateX(5deg)';
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.2)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1) rotateX(0deg)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.1)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
              }}
            >
              <div style={{
                position: 'relative',
                height: '250px',
                overflow: 'hidden',
                background: 'linear-gradient(45deg, #f8f9fa, #e9ecef)',
                padding: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    transition: 'all 0.5s ease',
                    filter: 'brightness(0.9)',
                    borderRadius: '8px'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.15) rotate(2deg)';
                    e.target.style.filter = 'brightness(1.1) saturate(1.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1) rotate(0deg)';
                    e.target.style.filter = 'brightness(0.9)';
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  right: '0',
                  bottom: '0',
                  background: 'linear-gradient(45deg, rgba(153, 153, 153, 0.2), rgba(153, 153, 153, 0.1))',
                  opacity: '0',
                  transition: 'opacity 0.4s ease'
                }}></div>
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  display: 'flex',
                  gap: '12px',
                  opacity: '1',
                  transform: 'translateY(0) scale(1)',
                  transition: 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
                }}>
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{
                      background: 'linear-gradient(135deg, #999999 0%, #cccccc 100%)',
                      color: 'white',
                      padding: '12px',
                      borderRadius: '50%',
                      textDecoration: 'none',
                      width: '45px',
                      height: '45px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 25px rgba(153, 153, 153, 0.4)',
                      transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                      backdropFilter: 'blur(10px)',
                      fontSize: '1.1rem'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.2) rotate(360deg)';
                      e.target.style.boxShadow = '0 12px 30px rgba(153, 153, 153, 0.6)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1) rotate(0deg)';
                      e.target.style.boxShadow = '0 8px 25px rgba(153, 153, 153, 0.4)';
                    }}
                  >
                    <i className="fas fa-eye"></i>
                  </a>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{
                      background: 'linear-gradient(135deg, #333 0%, #555 100%)',
                      color: 'white',
                      padding: '12px',
                      borderRadius: '50%',
                      textDecoration: 'none',
                      width: '45px',
                      height: '45px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.4)',
                      transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                      backdropFilter: 'blur(10px)',
                      fontSize: '1.1rem'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.2) rotate(-360deg)';
                      e.target.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.6)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1) rotate(0deg)';
                      e.target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.4)';
                    }}
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
              
              <div style={{padding: '35px'}}>
                <div style={{
                  color: '#2c2c2c',
                  fontSize: '1.6rem',
                  fontWeight: '800',
                  marginBottom: '15px',
                  transition: 'all 0.3s ease',
                  position: 'relative'
                }}>
                  {project.title}
                  <div style={{
                    position: 'absolute',
                    bottom: '-5px',
                    left: '0',
                    width: '0',
                    height: '3px',
                    background: 'linear-gradient(135deg, #999999 0%, #cccccc 100%)',
                    transition: 'width 0.4s ease',
                    borderRadius: '2px'
                  }}></div>
                </div>
                <div style={{
                  color: '#666',
                  fontSize: '1.05rem',
                  lineHeight: '1.7',
                  marginBottom: '30px',
                  transition: 'color 0.3s ease'
                }}>
                  {project.description}
                </div>
                
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '12px'}}>
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      style={{
                        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                        color: '#495057',
                        padding: '8px 16px',
                        borderRadius: '25px',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        border: '2px solid #dee2e6',
                        transition: 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        position: 'relative',
                        overflow: 'hidden',
                        animation: `tagFloat 3s ease-in-out ${0.1 * techIndex}s infinite alternate`
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = 'linear-gradient(135deg, #999999 0%, #cccccc 100%)';
                        e.target.style.color = 'white';
                        e.target.style.transform = 'translateY(-5px) scale(1.1) rotate(5deg)';
                        e.target.style.boxShadow = '0 8px 20px rgba(153, 153, 153, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)';
                        e.target.style.color = '#495057';
                        e.target.style.transform = 'translateY(0) scale(1) rotate(0deg)';
                        e.target.style.boxShadow = 'none';
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @media (max-width: 768px) {
          #projects {
            padding: 60px 15px !important;
          }
          
          #projects > div {
            max-width: 100% !important;
          }
          
          #projects h1 {
            font-size: 2.5rem !important;
          }
          
          #projects p {
            font-size: 1.1rem !important;
          }
          
          #projects > div > div:nth-child(2) {
            gap: 15px !important;
            margin-bottom: 40px !important;
          }
          
          #projects button {
            padding: 12px 20px !important;
            font-size: 0.9rem !important;
          }
          
          #projects > div > div:last-child {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
        }
        
        @media (max-width: 480px) {
          #projects {
            padding: 40px 10px !important;
          }
          
          #projects h1 {
            font-size: 2rem !important;
          }
          
          #projects button {
            padding: 10px 16px !important;
            font-size: 0.8rem !important;
          }
          
          #projects > div > div:last-child {
            gap: 20px !important;
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes glow {
          0% { text-shadow: 0 0 5px rgba(153, 153, 153, 0.3); }
          100% { text-shadow: 0 0 20px rgba(153, 153, 153, 0.6), 0 0 30px rgba(153, 153, 153, 0.4); }
        }
        
        @keyframes slideInDown {
          from { opacity: 0; transform: translateY(-50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(60px) scale(0.8); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        @keyframes bounceIn {
          0% { opacity: 0; transform: scale(0.3) translateY(50px); }
          50% { opacity: 1; transform: scale(1.05) translateY(-10px); }
          70% { transform: scale(0.9) translateY(0); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        
        @keyframes expand {
          from { width: 0; }
          to { width: 100px; }
        }
        
        @keyframes tagFloat {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-3px); }
        }
        
        [style*="project-card"]:hover [style*="top: '20px'"] {
          opacity: 1 !important;
          transform: translateY(0) scale(1) !important;
        }
        
        [style*="project-card"]:hover [style*="background: linear-gradient(45deg"] {
          opacity: 1 !important;
        }
        
        [style*="project-card"]:hover [style*="width: '0'"] {
          width: 60px !important;
        }
      `}</style>
    </section>
  );
};

export default Projects;