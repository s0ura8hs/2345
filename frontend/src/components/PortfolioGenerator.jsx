import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PersonalInfoForm from './forms/PersonalInfoForm';
import SkillsForm from './forms/SkillsForm';
import EducationForm from './forms/EducationForm';
import ProjectsForm from './forms/ProjectsForm';
import BlogsForm from './forms/BlogsForm';
import ContactForm from './forms/ContactForm';
import PreviewModal from './PreviewModal';
import GeneratedFiles from './GeneratedFiles';
import { generatePortfolioFiles } from '../utils/portfolioGenerator';
import './PortfolioGenerator.css';

const PortfolioGenerator = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showPreview, setShowPreview] = useState(false);
  const [generatedFiles, setGeneratedFiles] = useState(null);
  const [formData, setFormData] = useState({
    personal: {
      name: '',
      position: '',
      about: '',
      profilePhoto: '',
      resume: ''
    },
    skills: [],
    education: [],
    certificates: [],
    projects: [],
    blogs: [],
    contact: {
      email: '',
      github: '',
      linkedin: ''
    }
  });

  const steps = [
    { title: 'Personal Info', component: PersonalInfoForm },
    { title: 'Skills', component: SkillsForm },
    { title: 'Education', component: EducationForm },
    { title: 'Projects', component: ProjectsForm },
    { title: 'Blogs', component: BlogsForm },
    { title: 'Contact', component: ContactForm }
  ];

  const updateFormData = (section, data) => {
    setFormData(prev => ({
      ...prev,
      [section]: data
    }));
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handlePreview = () => {
    setShowPreview(true);
  };

  const handleGenerateWebsite = () => {
    const files = generatePortfolioFiles(formData);
    setGeneratedFiles(files);
  };

  const goToStep = (stepIndex) => {
    setCurrentStep(stepIndex);
  };

  const CurrentStepComponent = steps[currentStep].component;

  return (
    <div className="portfolio-generator">
      <div className="animated-background">
        <div className="sun"></div>
        <div className="glitter-container">
          {[...Array(50)].map((_, i) => (
            <div key={i} className="glitter" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}></div>
          ))}
        </div>
      </div>

      <div className="container">
        <motion.div
          className="header"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="title">Portfolio Generator</h1>
          <p className="subtitle">Create your professional portfolio in minutes</p>
        </motion.div>

        <div className="progress-bar">
          <div className="progress-track">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`progress-step ${index <= currentStep ? 'active' : ''}`}
              >
                <div className="step-number">{index + 1}</div>
                <div className="step-title">{step.title}</div>
              </div>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="form-container"
          >
            <CurrentStepComponent
              data={formData}
              updateData={updateFormData}
              onNext={handleNext}
              onPrevious={handlePrevious}
              isFirst={currentStep === 0}
              isLast={currentStep === steps.length - 1}
              onPreview={handlePreview}
              onGenerate={handleGenerateWebsite}
            />
          </motion.div>
        </AnimatePresence>

        {showPreview && (
          <PreviewModal
            formData={formData}
            onClose={() => setShowPreview(false)}
          />
        )}

        {generatedFiles && (
          <GeneratedFiles
            files={generatedFiles}
            onClose={() => setGeneratedFiles(null)}
          />
        )}
      </div>
    </div>
  );
};

export default PortfolioGenerator;