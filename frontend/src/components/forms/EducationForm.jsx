import React, { useState } from 'react';
import { motion } from 'framer-motion';

const EducationForm = ({ data, updateData, onNext, onPrevious, isFirst, isLast, onPreview }) => {
  const [education, setEducation] = useState(data.education || []);
  const [certificates, setCertificates] = useState(data.certificates || []);
  const [newEducation, setNewEducation] = useState({
    degree: '',
    institution: '',
    year: '',
    description: ''
  });
  const [newCertificate, setNewCertificate] = useState({
    name: '',
    issuer: '',
    year: '',
    link: ''
  });

  const addEducation = () => {
    if (newEducation.degree.trim() && newEducation.institution.trim()) {
      const updatedEducation = [...education, { ...newEducation, id: Date.now() }];
      setEducation(updatedEducation);
      updateData('education', updatedEducation);
      setNewEducation({ degree: '', institution: '', year: '', description: '' });
    }
  };

  const removeEducation = (id) => {
    const updatedEducation = education.filter(edu => edu.id !== id);
    setEducation(updatedEducation);
    updateData('education', updatedEducation);
  };

  const addCertificate = () => {
    if (newCertificate.name.trim() && newCertificate.issuer.trim()) {
      const updatedCertificates = [...certificates, { ...newCertificate, id: Date.now() }];
      setCertificates(updatedCertificates);
      updateData('certificates', updatedCertificates);
      setNewCertificate({ name: '', issuer: '', year: '', link: '' });
    }
  };

  const removeCertificate = (id) => {
    const updatedCertificates = certificates.filter(cert => cert.id !== id);
    setCertificates(updatedCertificates);
    updateData('certificates', updatedCertificates);
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
      <h2 className="form-title">Education & Certifications</h2>
      <p className="form-subtitle">Add your educational background and certifications</p>

      <div className="education-container">
        <div className="education-section">
          <h3 style={{ color: 'white', marginBottom: '1rem' }}>Education</h3>
          
          <div className="add-form">
            <div className="form-group">
              <label className="form-label">Degree/Program</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g., Bachelor of Science in Computer Science"
                value={newEducation.degree}
                onChange={(e) => setNewEducation({ ...newEducation, degree: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Institution</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g., Tech University"
                value={newEducation.institution}
                onChange={(e) => setNewEducation({ ...newEducation, institution: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Year</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g., 2018 - 2022"
                value={newEducation.year}
                onChange={(e) => setNewEducation({ ...newEducation, year: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Description (Optional)</label>
              <textarea
                className="form-input form-textarea"
                placeholder="Brief description of your studies..."
                value={newEducation.description}
                onChange={(e) => setNewEducation({ ...newEducation, description: e.target.value })}
              />
            </div>

            <button
              type="button"
              className="btn btn-secondary"
              onClick={addEducation}
              disabled={!newEducation.degree.trim() || !newEducation.institution.trim()}
            >
              Add Education
            </button>
          </div>

          <div className="items-list">
            {education.length === 0 ? (
              <p style={{ color: 'rgba(255,255,255,0.7)' }}>No education added yet</p>
            ) : (
              education.map((edu) => (
                <div key={edu.id} className="item-card">
                  <div className="item-header">
                    <h4>{edu.degree}</h4>
                    <button
                      type="button"
                      className="btn-remove"
                      onClick={() => removeEducation(edu.id)}
                    >
                      ×
                    </button>
                  </div>
                  <p className="item-subtitle">{edu.institution}</p>
                  <p className="item-year">{edu.year}</p>
                  {edu.description && <p className="item-description">{edu.description}</p>}
                </div>
              ))
            )}
          </div>
        </div>

        <div className="certificates-section">
          <h3 style={{ color: 'white', marginBottom: '1rem' }}>Certifications</h3>
          
          <div className="add-form">
            <div className="form-group">
              <label className="form-label">Certificate Name</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g., AWS Certified Developer"
                value={newCertificate.name}
                onChange={(e) => setNewCertificate({ ...newCertificate, name: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Issuer</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g., Amazon Web Services"
                value={newCertificate.issuer}
                onChange={(e) => setNewCertificate({ ...newCertificate, issuer: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Year</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g., 2023"
                value={newCertificate.year}
                onChange={(e) => setNewCertificate({ ...newCertificate, year: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Certificate Link</label>
              <input
                type="url"
                className="form-input"
                placeholder="https://..."
                value={newCertificate.link}
                onChange={(e) => setNewCertificate({ ...newCertificate, link: e.target.value })}
              />
            </div>

            <button
              type="button"
              className="btn btn-secondary"
              onClick={addCertificate}
              disabled={!newCertificate.name.trim() || !newCertificate.issuer.trim()}
            >
              Add Certificate
            </button>
          </div>

          <div className="items-list">
            {certificates.length === 0 ? (
              <p style={{ color: 'rgba(255,255,255,0.7)' }}>No certificates added yet</p>
            ) : (
              certificates.map((cert) => (
                <div key={cert.id} className="item-card">
                  <div className="item-header">
                    <h4>{cert.name}</h4>
                    <button
                      type="button"
                      className="btn-remove"
                      onClick={() => removeCertificate(cert.id)}
                    >
                      ×
                    </button>
                  </div>
                  <p className="item-subtitle">{cert.issuer}</p>
                  <p className="item-year">{cert.year}</p>
                  {cert.link && (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="item-link">
                      View Certificate
                    </a>
                  )}
                </div>
              ))
            )}
          </div>
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
        .education-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .education-section, .certificates-section {
          background: rgba(255,255,255,0.05);
          padding: 1.5rem;
          border-radius: 15px;
          border: 1px solid rgba(255,255,255,0.1);
        }

        .add-form {
          background: rgba(255,255,255,0.05);
          padding: 1rem;
          border-radius: 10px;
          margin-bottom: 1rem;
        }

        .items-list {
          max-height: 300px;
          overflow-y: auto;
        }

        .item-card {
          background: rgba(255,255,255,0.1);
          padding: 1rem;
          border-radius: 10px;
          margin-bottom: 1rem;
          position: relative;
        }

        .item-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.5rem;
        }

        .item-header h4 {
          color: white;
          margin: 0;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .item-subtitle {
          color: #FFD700;
          font-weight: 500;
          margin: 0.25rem 0;
        }

        .item-year {
          color: rgba(255,255,255,0.7);
          font-size: 0.9rem;
          margin: 0.25rem 0;
        }

        .item-description {
          color: rgba(255,255,255,0.8);
          font-size: 0.9rem;
          margin: 0.5rem 0 0 0;
          line-height: 1.4;
        }

        .item-link {
          color: #87CEEB;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .item-link:hover {
          text-decoration: underline;
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
          .education-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </motion.form>
  );
};

export default EducationForm;