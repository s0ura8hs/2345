import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PersonalInfoForm = ({ data, updateData, onNext, isFirst, isLast, onPreview }) => {
  const [formData, setFormData] = useState(data.personal);

  const handleChange = (field, value) => {
    const newData = { ...formData, [field]: value };
    setFormData(newData);
    updateData('personal', newData);
  };

  const handleFileUpload = (field, file) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        handleChange(field, e.target.result);
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
      <h2 className="form-title">Personal Information</h2>
      <p className="form-subtitle">Let's start with your basic information</p>

      <div className="form-group">
        <label className="form-label">Full Name *</label>
        <input
          type="text"
          className="form-input"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label">Position/Title *</label>
        <input
          type="text"
          className="form-input"
          placeholder="e.g., Full Stack Developer, UI/UX Designer"
          value={formData.position}
          onChange={(e) => handleChange('position', e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label">About Me *</label>
        <textarea
          className="form-input form-textarea"
          placeholder="Write a brief description about yourself, your passion, and what you do..."
          value={formData.about}
          onChange={(e) => handleChange('about', e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label">Profile Photo *</label>
        <input
          type="file"
          className="form-input"
          accept="image/*"
          onChange={(e) => handleFileUpload('profilePhoto', e.target.files[0])}
        />
        {formData.profilePhoto && (
          <div className="file-preview">
            <img src={formData.profilePhoto} alt="Profile" style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%', marginTop: '10px' }} />
          </div>
        )}
      </div>

      <div className="form-group">
        <label className="form-label">Resume (PDF) *</label>
        <input
          type="file"
          className="form-input"
          accept=".pdf"
          onChange={(e) => handleFileUpload('resume', e.target.files[0])}
        />
        {formData.resume && (
          <div className="file-preview">
            <p style={{ color: 'white', marginTop: '10px' }}>✓ Resume uploaded</p>
          </div>
        )}
      </div>

      <div className="form-actions">
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
          disabled={!formData.name || !formData.position || !formData.about}
        >
          Next Step
        </button>
      </div>
    </motion.form>
  );
};

export default PersonalInfoForm;