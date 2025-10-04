// components/Hero.js
import React from 'react';
import './hero.css'; 
import profileImage from '../assets/myProfile.png';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-image">
          <div className="image-circle">
            <img src={profileImage} alt="Khushi Verma" className="profile-img" />
          </div>
        </div>
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="title-line">
              {"Hi, I'm".split('').map((char, index) => (
                <span key={index} className="letter" style={{animationDelay: `${index * 0.1}s`}}>
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </span>
            <span className="title-name">
              {"Khushi Verma".split('').map((char, index) => (
                <span key={index} className="letter" style={{animationDelay: `${(index + 7) * 0.1}s`}}>
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </span>
          </h1>
          <h2 className="hero-subtitle">
            {"MERN Stack Developer".split('').map((char, index) => (
              <span key={index} className="letter" style={{animationDelay: `${(index + 18) * 0.05}s`}}>
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h2>
          <p className="hero-description">
            I create amazing web experiences with modern technologies
          </p>
          
          <div className="hero-buttons">
            <button 
              className="btn btn-secondary "
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
      
      <div className="hero-background">
        <div className="bg-shape shape-1"></div>
        <div className="bg-shape shape-2"></div>
        <div className="bg-shape shape-3"></div>
        <div className="bg-shape shape-4"></div>
      </div>
    </section>
  );
};

export default Hero;