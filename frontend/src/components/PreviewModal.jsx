import React from 'react';
import { motion } from 'framer-motion';
import './PreviewModal.css';

const PreviewModal = ({ formData, onClose }) => {
  const { personal, skills, education, certificates, projects, blogs, contact } = formData;

  return (
    <motion.div
      className="preview-modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="preview-modal"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="preview-header">
          <h2>Portfolio Preview</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <div className="preview-content">
          <div className="preview-section">
            <h3>Personal Information</h3>
            <div className="preview-item">
              <strong>Name:</strong> {personal.name || 'Not provided'}
            </div>
            <div className="preview-item">
              <strong>Position:</strong> {personal.position || 'Not provided'}
            </div>
            <div className="preview-item">
              <strong>About:</strong> {personal.about || 'Not provided'}
            </div>
            <div className="preview-item">
              <strong>Profile Photo:</strong> {personal.profilePhoto ? '✓ Uploaded' : 'Not uploaded'}
            </div>
            <div className="preview-item">
              <strong>Resume:</strong> {personal.resume ? '✓ Uploaded' : 'Not uploaded'}
            </div>
          </div>

          <div className="preview-section">
            <h3>Skills ({skills.length})</h3>
            {skills.length > 0 ? (
              <div className="skills-preview">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-preview">
                    <span>{skill.name}</span>
                    <span className="skill-percent">{skill.percentage}%</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="no-data">No skills added</p>
            )}
          </div>

          <div className="preview-section">
            <h3>Education ({education.length})</h3>
            {education.length > 0 ? (
              <div className="education-preview">
                {education.map((edu, index) => (
                  <div key={index} className="education-item-preview">
                    <div><strong>{edu.degree}</strong></div>
                    <div>{edu.institution}</div>
                    <div>{edu.year}</div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="no-data">No education added</p>
            )}
          </div>

          <div className="preview-section">
            <h3>Certificates ({certificates.length})</h3>
            {certificates.length > 0 ? (
              <div className="certificates-preview">
                {certificates.map((cert, index) => (
                  <div key={index} className="certificate-item-preview">
                    <div><strong>{cert.name}</strong></div>
                    <div>{cert.issuer}</div>
                    <div>{cert.year}</div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="no-data">No certificates added</p>
            )}
          </div>

          <div className="preview-section">
            <h3>Projects ({projects.length})</h3>
            {projects.length > 0 ? (
              <div className="projects-preview">
                {projects.map((project, index) => (
                  <div key={index} className="project-item-preview">
                    <div><strong>{project.name}</strong></div>
                    <div>{project.description}</div>
                    <div>Tech: {project.technologies}</div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="no-data">No projects added</p>
            )}
          </div>

          <div className="preview-section">
            <h3>Blogs ({blogs.length})</h3>
            {blogs.length > 0 ? (
              <div className="blogs-preview">
                {blogs.map((blog, index) => (
                  <div key={index} className="blog-item-preview">
                    <div><strong>{blog.title}</strong></div>
                    <div>{blog.description}</div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="no-data">No blogs added</p>
            )}
          </div>

          <div className="preview-section">
            <h3>Contact Information</h3>
            <div className="preview-item">
              <strong>Email:</strong> {contact.email || 'Not provided'}
            </div>
            <div className="preview-item">
              <strong>GitHub:</strong> {contact.github || 'Not provided'}
            </div>
            <div className="preview-item">
              <strong>LinkedIn:</strong> {contact.linkedin || 'Not provided'}
            </div>
          </div>
        </div>

        <div className="preview-actions">
          <button className="btn btn-primary" onClick={onClose}>
            Close Preview
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PreviewModal;