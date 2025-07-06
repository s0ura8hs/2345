import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = ({ data, updateData, onNext, onPrevious, isFirst, isLast, onPreview, onGenerate }) => {
  const [formData, setFormData] = useState(data.contact);

  const handleChange = (field, value) => {
    const newData = { ...formData, [field]: value };
    setFormData(newData);
    updateData('contact', newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // This is the last step, so we can generate the website
  };

  const isFormValid = formData.email && formData.github && formData.linkedin;

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="form-section"
    >
      <h2 className="form-title">Contact Information</h2>
      <p className="form-subtitle">Add your contact details to complete your portfolio</p>

      <div className="contact-form">
        <div className="form-group">
          <label className="form-label">Email Address *</label>
          <input
            type="email"
            className="form-input"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">GitHub Profile *</label>
          <input
            type="url"
            className="form-input"
            placeholder="https://github.com/yourusername"
            value={formData.github}
            onChange={(e) => handleChange('github', e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">LinkedIn Profile *</label>
          <input
            type="url"
            className="form-input"
            placeholder="https://linkedin.com/in/yourprofile"
            value={formData.linkedin}
            onChange={(e) => handleChange('linkedin', e.target.value)}
            required
          />
        </div>
      </div>

      <div className="final-actions">
        <h3 style={{ color: 'white', marginBottom: '1rem' }}>Generate Your Portfolio</h3>
        <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2rem' }}>
          You're all set! Review your information and generate your professional portfolio website.
        </p>
        
        <div className="action-buttons">
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
            type="button"
            className="btn btn-primary btn-generate"
            onClick={onGenerate}
            disabled={!isFormValid}
          >
            Generate Website
          </button>
        </div>
      </div>

      <div className="deployment-info">
        <h4 style={{ color: 'white', marginBottom: '1rem' }}>Deployment Instructions</h4>
        <div className="instructions">
          <div className="instruction-step">
            <h5>Step 1: Download Files</h5>
            <p>Click "Generate Website" to create and download your portfolio files (HTML, CSS, JS).</p>
          </div>
          <div className="instruction-step">
            <h5>Step 2: Upload to GitHub</h5>
            <p>Create a new repository on GitHub and upload the downloaded files.</p>
          </div>
          <div className="instruction-step">
            <h5>Step 3: Deploy on Netlify</h5>
            <p>Connect your GitHub repository to Netlify for automatic deployment.</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-form {
          background: rgba(255,255,255,0.05);
          padding: 2rem;
          border-radius: 15px;
          border: 1px solid rgba(255,255,255,0.1);
          margin-bottom: 2rem;
        }

        .final-actions {
          background: rgba(255,255,255,0.05);
          padding: 2rem;
          border-radius: 15px;
          border: 1px solid rgba(255,255,255,0.1);
          margin-bottom: 2rem;
          text-align: center;
        }

        .action-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-generate {
          background: linear-gradient(45deg, #00FF7F, #32CD32);
          color: #000;
          font-weight: 700;
          padding: 1rem 2rem;
          font-size: 1.1rem;
          box-shadow: 0 4px 15px rgba(0,255,127,0.3);
        }

        .btn-generate:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(0,255,127,0.4);
        }

        .btn-generate:disabled {
          background: rgba(255,255,255,0.2);
          color: rgba(255,255,255,0.5);
          cursor: not-allowed;
        }

        .deployment-info {
          background: rgba(255,255,255,0.05);
          padding: 2rem;
          border-radius: 15px;
          border: 1px solid rgba(255,255,255,0.1);
        }

        .deployment-info h4 {
          color: #FFD700;
          margin-bottom: 1rem;
          font-size: 1.2rem;
        }

        .instructions {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
        }

        .instruction-step {
          background: rgba(255,255,255,0.05);
          padding: 1rem;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.1);
        }

        .instruction-step h5 {
          color: white;
          margin: 0 0 0.5rem 0;
          font-size: 1rem;
          font-weight: 600;
        }

        .instruction-step p {
          color: rgba(255,255,255,0.8);
          font-size: 0.9rem;
          line-height: 1.4;
          margin: 0;
        }

        @media (max-width: 768px) {
          .action-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .btn-generate {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>
    </motion.form>
  );
};

export default ContactForm;