import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SkillsForm = ({ data, updateData, onNext, onPrevious, isFirst, isLast, onPreview }) => {
  const [skills, setSkills] = useState(data.skills || []);
  const [newSkill, setNewSkill] = useState({ name: '', percentage: 50 });

  const addSkill = () => {
    if (newSkill.name.trim()) {
      const updatedSkills = [...skills, { ...newSkill, id: Date.now() }];
      setSkills(updatedSkills);
      updateData('skills', updatedSkills);
      setNewSkill({ name: '', percentage: 50 });
    }
  };

  const removeSkill = (id) => {
    const updatedSkills = skills.filter(skill => skill.id !== id);
    setSkills(updatedSkills);
    updateData('skills', updatedSkills);
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
      <h2 className="form-title">Skills & Expertise</h2>
      <p className="form-subtitle">Add your technical skills and expertise levels</p>

      <div className="skills-container">
        <div className="add-skill-form">
          <div className="form-group">
            <label className="form-label">Skill Name</label>
            <input
              type="text"
              className="form-input"
              placeholder="e.g., JavaScript, React, Python"
              value={newSkill.name}
              onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Proficiency Level ({newSkill.percentage}%)</label>
            <input
              type="range"
              className="form-range"
              min="0"
              max="100"
              value={newSkill.percentage}
              onChange={(e) => setNewSkill({ ...newSkill, percentage: parseInt(e.target.value) })}
            />
          </div>

          <button
            type="button"
            className="btn btn-secondary"
            onClick={addSkill}
            disabled={!newSkill.name.trim()}
          >
            Add Skill
          </button>
        </div>

        <div className="skills-list">
          <h3 style={{ color: 'white', marginBottom: '1rem' }}>Added Skills</h3>
          {skills.length === 0 ? (
            <p style={{ color: 'rgba(255,255,255,0.7)' }}>No skills added yet</p>
          ) : (
            skills.map((skill) => (
              <div key={skill.id} className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.percentage}%</span>
                </div>
                <div className="skill-progress">
                  <div
                    className="skill-progress-bar"
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
                <button
                  type="button"
                  className="btn-remove"
                  onClick={() => removeSkill(skill.id)}
                >
                  ×
                </button>
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
        .skills-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .add-skill-form {
          background: rgba(255,255,255,0.05);
          padding: 1.5rem;
          border-radius: 15px;
          border: 1px solid rgba(255,255,255,0.1);
        }

        .form-range {
          width: 100%;
          height: 8px;
          border-radius: 5px;
          background: rgba(255,255,255,0.2);
          outline: none;
          appearance: none;
        }

        .form-range::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, #FFD700, #FFA500);
          cursor: pointer;
        }

        .skills-list {
          background: rgba(255,255,255,0.05);
          padding: 1.5rem;
          border-radius: 15px;
          border: 1px solid rgba(255,255,255,0.1);
          max-height: 400px;
          overflow-y: auto;
        }

        .skill-item {
          background: rgba(255,255,255,0.1);
          padding: 1rem;
          border-radius: 10px;
          margin-bottom: 1rem;
          position: relative;
        }

        .skill-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .skill-name {
          font-weight: 600;
          color: white;
        }

        .skill-percentage {
          color: #FFD700;
          font-weight: 600;
        }

        .skill-progress {
          width: 100%;
          height: 6px;
          background: rgba(255,255,255,0.2);
          border-radius: 3px;
          overflow: hidden;
        }

        .skill-progress-bar {
          height: 100%;
          background: linear-gradient(45deg, #FFD700, #FFA500);
          border-radius: 3px;
          transition: width 0.3s ease;
        }

        .btn-remove {
          position: absolute;
          top: 10px;
          right: 10px;
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
          .skills-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </motion.form>
  );
};

export default SkillsForm;