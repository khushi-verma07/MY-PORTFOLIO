// components/Resume.js
import React, { useState } from "react";
import { FileDown, Eye, X } from "lucide-react";
import myResume from "../assets/Khushi_Verma Resume.pdf";
import './resume.css';

const Resume = () => {
  const [showResume, setShowResume] = useState(false);

  return (
    <section id="resume" className="resume">
      <div className="resume-container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">My Resume</h2>
          <div className="section-divider"></div>
        </div>

        {/* Resume Boxes */}
        <div className="resume-content">
          <div className="resume-boxes">
            <div className="resume-box view-box">
              <div className="box-icon">
                <Eye />
              </div>
              <h3>View Resume</h3>
              <p>Take a quick look at my professional resume in an interactive viewer.</p>
              <button
                onClick={() => setShowResume(true)}
                className="box-btn btn-view"
              >
                View Now
              </button>
            </div>
            
            <div className="resume-box download-box">
              <div className="box-icon">
                <FileDown />
              </div>
              <h3>Download Resume</h3>
              <p>Get a copy of my resume for your records and future reference.</p>
              <a
                href={myResume}
                download
                className="box-btn btn-download"
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>

        {/* Resume Viewer Modal */}
        {showResume && (
          <div className="resume-modal-overlay" onClick={() => setShowResume(false)}>
            <div className="resume-viewer" onClick={(e) => e.stopPropagation()}>
              {/* Close Button */}
              <button
                onClick={() => setShowResume(false)}
                className="close-btn"
              >
                <X />
              </button>

              <iframe
                src={`${myResume}#toolbar=0&navpanes=0&scrollbar=0`}
                title="Resume"
                className="resume-iframe"
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Resume;