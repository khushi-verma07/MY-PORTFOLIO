import React, { useEffect, useRef } from 'react';
import profileImage from '../assets/myProfile.png';
import './about.css';

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about" ref={aboutRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="about-content">
          <div className="about-boxes">
            <div className="about-box intro-box">
              <div className="box-icon">
                <i className="fas fa-user-circle"></i>
              </div>
              <h3 className="text-heading">Who Am I?</h3>
              <p className="text-para-1">
                I'm a passionate MERN Stack Developer and IT Fresher with expertise in creating dynamic, 
                responsive web applications. With a strong foundation in JavaScript and 
                modern frameworks, I bring ideas to life with clean, efficient code.
              </p>
            </div>
            
            <div className="about-box journey-box">
              <div className="box-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <h3>My Journey</h3>
              <p className="text-para-2">
                My journey in web development started with curiosity and passion for learning. 
                I continuously work on various projects that enhance my skills in both frontend 
                and backend development, always striving for excellence.
              </p>
            </div>
            
            <div className="about-box passion-box">
              <div className="box-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>My Passion</h3>
              <p className="text-para-3">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open source projects, or sharing knowledge through 
                tech blogs and community engagement.
              </p>
            </div>
          </div>
          
          <div className="about-highlights">
            <div className="highlight-item highlight-1">
              <div className="highlight-icon">
                <i className="fas fa-project-diagram"></i>
              </div>
              <span className="highlight-number">2+</span>
              <span className="highlight-text">Projects Completed</span>
            </div>
            <div className="highlight-item highlight-2">
              <div className="highlight-icon">
                <i className="fas fa-code"></i>
              </div>
              <span className="highlight-number">10+</span>
              <span className="highlight-text">Technical Skills</span>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">
                <i className="fas fa-layer-group"></i>
              </div>
              <span className="highlight-number">2+</span>
              <span className="highlight-text">Frameworks</span>
            </div>
          </div>
          
          {/* <div className="about-image">
            <div className="image-wrapper">
              <img 
                src={profileImage}
                alt="Profile"
                className="profile-img"
              />
              <div className="image-frame"></div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;


