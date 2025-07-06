import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProjectsForm = ({ data, updateData, onNext, onPrevious, isFirst, isLast, onPreview }) => {
  const [projects, setProjects] = useState(data.projects || []);
  const [newProject, setNewProject] = useState({
    name: '',
    description: '',
    technologies: '',
    liveLink: '',
    githubLink: '',
    image: ''
  });

  const addProject = () => {
    if (newProject.name.trim() && newProject.description.trim()) {
      const updatedProjects = [...projects, { ...newProject, id: Date.now() }];
      setProjects(updatedProjects);
      updateData('projects', updatedProjects);
      setNewProject({
        name: '',
        description: '',
        technologies: '',
        liveLink: '',
        githubLink: '',
        image: ''
      });
    }
  };

  const removeProject = (id) => {
    const updatedProjects = projects.filter(project => project.id !== id);
    setProjects(updatedProjects);
    updateData('projects', updatedProjects);
  };

  const handleImageUpload = (file) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setNewProject({ ...newProject, image: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="form-section"
    >
      <h2 className="form-title">Projects</h2>
      <p className="form-subtitle">Showcase your projects (Optional - leave empty if you don't want to include projects)</p>

      <div className="projects-container">
        <div className="add-project-form">
          <h3 style={{ color: 'white', marginBottom: '1rem' }}>Add New Project</h3>
          
          <div className="form-group">
            <label className="form-label">Project Name</label>
            <input
              type="text"
              className="form-input"
              placeholder="e.g., E-commerce Website"
              value={newProject.name}
              onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Description</label>
            <textarea
              className="form-input form-textarea"
              placeholder="Brief description of your project..."
              value={newProject.description}
              onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Technologies Used</label>
            <input
              type="text"
              className="form-input"
              placeholder="e.g., React, Node.js, MongoDB"
              value={newProject.technologies}
              onChange={(e) => setNewProject({ ...newProject, technologies: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Live Demo Link</label>
            <input
              type="url"
              className="form-input"
              placeholder="https://your-project-demo.com"
              value={newProject.liveLink}
              onChange={(e) => setNewProject({ ...newProject, liveLink: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label">GitHub Repository</label>
            <input
              type="url"
              className="form-input"
              placeholder="https://github.com/yourusername/project"
              value={newProject.githubLink}
              onChange={(e) => setNewProject({ ...newProject, githubLink: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Project Image</label>
            <input
              type="file"
              className="form-input"
              accept="image/*"
              onChange={(e) => handleImageUpload(e.target.files[0])}
            />
            {newProject.image && (
              <div className="image-preview">
                <img src={newProject.image} alt="Project preview" />
              </div>
            )}
          </div>

          <button
            type="button"
            className="btn btn-secondary"
            onClick={addProject}
            disabled={!newProject.name.trim() || !newProject.description.trim()}
          >
            Add Project
          </button>
        </div>

        <div className="projects-list">
          <h3 style={{ color: 'white', marginBottom: '1rem' }}>Added Projects</h3>
          {projects.length === 0 ? (
            <p style={{ color: 'rgba(255,255,255,0.7)' }}>No projects added yet</p>
          ) : (
            projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-header">
                  <h4>{project.name}</h4>
                  <button
                    type="button"
                    className="btn-remove"
                    onClick={() => removeProject(project.id)}
                  >
                    ×
                  </button>
                </div>
                
                {project.image && (
                  <div className="project-image">
                    <img src={project.image} alt={project.name} />
                  </div>
                )}
                
                <p className="project-description">{project.description}</p>
                
                {project.technologies && (
                  <div className="project-tech">
                    <strong>Technologies:</strong> {project.technologies}
                  </div>
                )}
                
                <div className="project-links">
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      Live Demo
                    </a>
                  )}
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="form-actions">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={onPrevious}
        >
          Previous
        </button>
        <button
          type="button"
          className="btn btn-outline"
          onClick={onPreview}
        >
          Preview
        </button>
        <button
          type="submit"
          className="btn btn-primary"
        >
          Next Step
        </button>
      </div>

      <style jsx>{`
        .projects-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .add-project-form {
          background: rgba(255,255,255,0.05);
          padding: 1.5rem;
          border-radius: 15px;
          border: 1px solid rgba(255,255,255,0.1);
        }

        .projects-list {
          background: rgba(255,255,255,0.05);
          padding: 1.5rem;
          border-radius: 15px;
          border: 1px solid rgba(255,255,255,0.1);
          max-height: 600px;
          overflow-y: auto;
        }

        .project-card {
          background: rgba(255,255,255,0.1);
          padding: 1rem;
          border-radius: 10px;
          margin-bottom: 1rem;
          position: relative;
        }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.5rem;
        }

        .project-header h4 {
          color: white;
          margin: 0;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .project-image {
          margin: 0.5rem 0;
          border-radius: 8px;
          overflow: hidden;
        }

        .project-image img {
          width: 100%;
          height: 120px;
          object-fit: cover;
        }

        .project-description {
          color: rgba(255,255,255,0.8);
          font-size: 0.9rem;
          margin: 0.5rem 0;
          line-height: 1.4;
        }

        .project-tech {
          color: rgba(255,255,255,0.7);
          font-size: 0.8rem;
          margin: 0.5rem 0;
        }

        .project-tech strong {
          color: #FFD700;
        }

        .project-links {
          display: flex;
          gap: 0.5rem;
          margin-top: 0.5rem;
        }

        .project-link {
          color: #87CEEB;
          text-decoration: none;
          font-size: 0.8rem;
          font-weight: 500;
          padding: 0.25rem 0.5rem;
          border: 1px solid #87CEEB;
          border-radius: 5px;
          transition: all 0.3s ease;
        }

        .project-link:hover {
          background: #87CEEB;
          color: #000;
        }

        .image-preview {
          margin-top: 0.5rem;
          border-radius: 8px;
          overflow: hidden;
        }

        .image-preview img {
          width: 100%;
          height: 120px;
          object-fit: cover;
        }

        .btn-remove {
          background: rgba(255,0,0,0.7);
          color: white;
          border: none;
          border-radius: 50%;
          width: 25px;
          height: 25px;
          cursor: pointer;
          font-size: 14px;
          font-weight: bold;
        }

        .btn-remove:hover {
          background: rgba(255,0,0,0.9);
        }

        @media (max-width: 768px) {
          .projects-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </motion.form>
  );
};

export default ProjectsForm;