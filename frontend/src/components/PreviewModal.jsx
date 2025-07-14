import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './PreviewModal.css';

const PreviewModal = ({ formData, onClose }) => {
  const { personal, skills, education, certificates, experience, projects, blogs, contact } = formData;
  
  // State for "View More" functionality
  const [showMoreEducation, setShowMoreEducation] = useState(false);
  const [showMoreCertificates, setShowMoreCertificates] = useState(false);
  const [showMoreExperience, setShowMoreExperience] = useState(false);
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  const [showMoreBlogs, setShowMoreBlogs] = useState(false);

  // Helper function to get display items with "View More" functionality
  const getDisplayItems = (items, showMore) => {
    return showMore ? items : items.slice(0, 5);
  };

  const ViewMoreButton = ({ items, showMore, setShowMore, label }) => {
    if (items.length <= 5) return null;
    
    return (
      <button
        className="view-more-btn"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? 'Show Less' : `View More (${items.length - 5} more ${label})`}
      </button>
    );
  };

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
          <div className="portfolio-preview">
            {/* Portfolio Navigation */}
            <nav className="portfolio-nav">
              <div className="nav-brand">{personal.name || 'Your Name'}</div>
              <div className="nav-links">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#education">Education</a>
                {/* Only show experience link if there are experiences */}
                {experience && experience.length > 0 && <a href="#experience">Experience</a>}
                {projects.length > 0 && <a href="#projects">Projects</a>}
                {blogs.length > 0 && <a href="#blogs">Blogs</a>}
                <a href="#contact">Contact</a>
                {personal.resume && <a href="#resume" className="download-btn">Download Resume</a>}
              </div>
            </nav>

            {/* Hero Section */}
            <section className="portfolio-hero">
              <div className="hero-content">
                <h1 className="hero-name">{personal.name || 'Your Name'}</h1>
                <p className="hero-title">{personal.position || 'Your Position'}</p>
                <p className="hero-description">
                  {personal.about || 'Your description will appear here'}
                </p>
                <div className="hero-buttons">
                  {projects.length > 0 && <button className="btn-primary">View My Work</button>}
                  <button className="btn-outline">Get In Touch</button>
                </div>
              </div>
            </section>

            {/* About Section */}
            <section className="portfolio-about">
              <h2 className="section-title">About Me</h2>
              <div className="about-content">
                <div className="about-text">
                  <h3 className="about-subtitle">{personal.position || 'Professional Title'}</h3>
                  <p className="about-description">
                    {personal.about || 'Your detailed description will appear here with information about your background and expertise.'}
                  </p>
                  <div className="about-tags">
                    {skills.slice(0, 6).map((skill, index) => (
                      <span key={index} className="skill-tag">{skill.name}</span>
                    ))}
                  </div>
                </div>
                <div className="about-image">
                  {personal.profilePhoto ? (
                    <img src={personal.profilePhoto} alt={personal.name} className="profile-image" />
                  ) : (
                    <div className="profile-placeholder">
                      <span>Profile Photo</span>
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* Skills Section */}
            {skills.length > 0 && (
              <section className="portfolio-skills">
                <h2 className="section-title">Skills & Expertise</h2>
                <div className="skills-grid">
                  {skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percent">{skill.percentage}%</span>
                      </div>
                      <div className="skill-progress">
                        <div 
                          className="skill-bar" 
                          style={{ width: `${skill.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Education Section */}
            {(education.length > 0 || certificates.length > 0) && (
              <section className="portfolio-education">
                <h2 className="section-title">Education & Certifications</h2>
                <div className="education-grid">
                  <div className="education-column">
                    <h3 className="column-title">Education</h3>
                    {education.length > 0 ? (
                      <>
                        {getDisplayItems(education, showMoreEducation).map((edu, index) => (
                          <div key={index} className="education-item">
                            <h4>{edu.degree}</h4>
                            <p className="institution">{edu.institution}</p>
                            <p className="year">{edu.year}</p>
                            {edu.description && <p className="description">{edu.description}</p>}
                          </div>
                        ))}
                        <ViewMoreButton 
                          items={education} 
                          showMore={showMoreEducation} 
                          setShowMore={setShowMoreEducation}
                          label="entries"
                        />
                      </>
                    ) : (
                      <p className="no-data">No education added yet</p>
                    )}
                  </div>
                  <div className="education-column">
                    <h3 className="column-title">Certifications</h3>
                    {certificates.length > 0 ? (
                      <>
                        {getDisplayItems(certificates, showMoreCertificates).map((cert, index) => (
                          <div key={index} className="education-item">
                            <h4>{cert.name}</h4>
                            <p className="institution">{cert.issuer}</p>
                            <p className="year">{cert.year}</p>
                            {cert.link && <a href={cert.link} className="cert-link">View Certificate</a>}
                          </div>
                        ))}
                        <ViewMoreButton 
                          items={certificates} 
                          showMore={showMoreCertificates} 
                          setShowMore={setShowMoreCertificates}
                          label="certificates"
                        />
                      </>
                    ) : (
                      <p className="no-data">No certificates added yet</p>
                    )}
                  </div>
                </div>
              </section>
            )}

            {/* Experience Section - Only show if there are experiences */}
            {experience && experience.length > 0 && (
              <section className="portfolio-experience">
                <h2 className="section-title">Work Experience</h2>
                <div className="experience-grid">
                  {getDisplayItems(experience, showMoreExperience).map((exp, index) => (
                    <div key={index} className="experience-item">
                      <div className="experience-header">
                        {exp.companyLogo && (
                          <img src={exp.companyLogo} alt={exp.company} className="company-logo" />
                        )}
                        <div className="experience-info">
                          <h3 className="position">{exp.position}</h3>
                          <p className="company">{exp.company}</p>
                          <p className="duration">{exp.duration}</p>
                        </div>
                      </div>
                      <p className="experience-description">{exp.description}</p>
                    </div>
                  ))}
                  <ViewMoreButton 
                    items={experience} 
                    showMore={showMoreExperience} 
                    setShowMore={setShowMoreExperience}
                    label="experiences"
                  />
                </div>
              </section>
            )}

            {/* Projects Section */}
            {projects.length > 0 && (
              <section className="portfolio-projects">
                <h2 className="section-title">Featured Projects</h2>
                <div className="projects-grid">
                  {getDisplayItems(projects, showMoreProjects).map((project, index) => (
                    <div key={index} className="project-card">
                      {project.image && (
                        <img src={project.image} alt={project.name} className="project-image" />
                      )}
                      <div className="project-content">
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        {project.technologies && (
                          <div className="tech-tags">
                            {project.technologies.split(',').map((tech, i) => (
                              <span key={i} className="tech-tag">{tech.trim()}</span>
                            ))}
                          </div>
                        )}
                        <div className="project-links">
                          {project.liveLink && <a href={project.liveLink}>Live Demo</a>}
                          {project.githubLink && <a href={project.githubLink}>GitHub</a>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <ViewMoreButton 
                  items={projects} 
                  showMore={showMoreProjects} 
                  setShowMore={setShowMoreProjects}
                  label="projects"
                />
              </section>
            )}

            {/* Blogs Section */}
            {blogs.length > 0 && (
              <section className="portfolio-blogs">
                <h2 className="section-title">Recent Blogs</h2>
                <div className="blogs-grid">
                  {getDisplayItems(blogs, showMoreBlogs).map((blog, index) => (
                    <div key={index} className="blog-card">
                      {blog.image && (
                        <img src={blog.image} alt={blog.title} className="blog-image" />
                      )}
                      <div className="blog-content">
                        <h3>{blog.title}</h3>
                        <p>{blog.description}</p>
                        <a href={blog.link} className="blog-link">Read More</a>
                      </div>
                    </div>
                  ))}
                </div>
                <ViewMoreButton 
                  items={blogs} 
                  showMore={showMoreBlogs} 
                  setShowMore={setShowMoreBlogs}
                  label="blogs"
                />
              </section>
            )}

            {/* Contact Section */}
            <section className="portfolio-contact">
              <h2 className="section-title">Get In Touch</h2>
              <div className="contact-content">
                <p>Let's connect and discuss opportunities!</p>
                <div className="contact-links">
                  {contact.email && <a href={`mailto:${contact.email}`}>📧 Email</a>}
                  {contact.github && <a href={contact.github}>🐙 GitHub</a>}
                  {contact.linkedin && <a href={contact.linkedin}>💼 LinkedIn</a>}
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="portfolio-footer">
              <p>&copy; 2025 {personal.name || 'Your Name'}. All rights reserved.</p>
            </footer>
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
