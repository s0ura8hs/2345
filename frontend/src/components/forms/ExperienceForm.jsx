import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ExperienceForm = ({ data, updateData, onNext, onPrevious, isFirst, isLast }) => {
  const [experiences, setExperiences] = useState(data.experience || []);
  const [showMore, setShowMore] = useState(false);

  const addExperience = () => {
    const newExperience = {
      id: Date.now(),
      company: '',
      position: '',
      duration: '',
      description: '',
      companyLogo: ''
    };
    const updatedExperiences = [...experiences, newExperience];
    setExperiences(updatedExperiences);
    updateData('experience', updatedExperiences);
  };

  const updateExperience = (id, field, value) => {
    const updatedExperiences = experiences.map(exp => 
      exp.id === id ? { ...exp, [field]: value } : exp
    );
    setExperiences(updatedExperiences);
    updateData('experience', updatedExperiences);
  };

  const removeExperience = (id) => {
    const updatedExperiences = experiences.filter(exp => exp.id !== id);
    setExperiences(updatedExperiences);
    updateData('experience', updatedExperiences);
  };

  const handleFileUpload = (id, file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      updateExperience(id, 'companyLogo', e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const displayedExperiences = showMore ? experiences : experiences.slice(0, 5);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="form-section"
    >
      <h2 className="form-title">Work Experience</h2>
      <p className="form-subtitle">
        Share your professional journey and the valuable experience you've gained.
      </p>

      <div className="experience-list">
        {displayedExperiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="experience-item"
          >
            <div className="experience-header">
              <h3>Experience {index + 1}</h3>
              <button 
                type="button"
                onClick={() => removeExperience(experience.id)}
                className="remove-btn"
              >
                ×
              </button>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Company Name *</label>
                <input
                  type="text"
                  className="form-input"
                  value={experience.company}
                  onChange={(e) => updateExperience(experience.id, 'company', e.target.value)}
                  placeholder="e.g., Google Inc."
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Position/Role *</label>
                <input
                  type="text"
                  className="form-input"
                  value={experience.position}
                  onChange={(e) => updateExperience(experience.id, 'position', e.target.value)}
                  placeholder="e.g., Senior Software Engineer"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Duration *</label>
                <input
                  type="text"
                  className="form-input"
                  value={experience.duration}
                  onChange={(e) => updateExperience(experience.id, 'duration', e.target.value)}
                  placeholder="e.g., Jan 2022 - Present"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Company Logo</label>
                <input
                  type="file"
                  className="form-input"
                  accept="image/*"
                  onChange={(e) => handleFileUpload(experience.id, e.target.files[0])}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Description *</label>
              <textarea
                className="form-input form-textarea"
                value={experience.description}
                onChange={(e) => updateExperience(experience.id, 'description', e.target.value)}
                placeholder="Describe your role, responsibilities, and achievements..."
                rows="4"
                required
              />
            </div>

            {experience.companyLogo && (
              <div className="logo-preview">
                <img src={experience.companyLogo} alt="Company Logo" className="preview-logo" />
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {experiences.length > 5 && (
        <button
          type="button"
          onClick={() => setShowMore(!showMore)}
          className="btn btn-outline view-more-btn"
        >
          {showMore ? 'Show Less' : `View More (${experiences.length - 5} more)`}
        </button>
      )}

      <button
        type="button"
        onClick={addExperience}
        className="btn btn-secondary add-btn"
      >
        + Add Experience
      </button>

      <div className="form-actions">
        <button
          type="button"
          onClick={onPrevious}
          disabled={isFirst}
          className="btn btn-secondary"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={onNext}
          className="btn btn-primary"
        >
          Next
        </button>
      </div>
    </motion.div>
  );
};

export default ExperienceForm;
