import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './GeneratedFiles.css';

const GeneratedFiles = ({ files, onClose }) => {
  const [activeTab, setActiveTab] = useState('index.html');

  const handleDownload = () => {
    // Create a simple ZIP-like download
    const filesToDownload = [
      { name: 'index.html', content: files['index.html'] },
      { name: 'style.css', content: files['style.css'] },
      { name: 'script.js', content: files['script.js'] }
    ];

    filesToDownload.forEach(file => {
      const blob = new Blob([file.content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = file.name;
      a.click();
      URL.revokeObjectURL(url);
    });
  };

  return (
    <motion.div
      className="generated-files-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="generated-files-modal"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="generated-files-header">
          <h2>Generated Portfolio Files</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <div className="generated-files-content">
          <div className="files-tabs">
            {Object.keys(files).map(fileName => (
              <button
                key={fileName}
                className={`file-tab ${activeTab === fileName ? 'active' : ''}`}
                onClick={() => setActiveTab(fileName)}
              >
                {fileName}
              </button>
            ))}
          </div>

          <div className="file-content">
            <div className="file-header">
              <h3>{activeTab}</h3>
              <div className="file-actions">
                <button 
                  className="btn btn-secondary"
                  onClick={() => navigator.clipboard.writeText(files[activeTab])}
                >
                  Copy to Clipboard
                </button>
              </div>
            </div>
            <pre className="code-content">
              <code>{files[activeTab]}</code>
            </pre>
          </div>
        </div>

        <div className="generated-files-actions">
          <button className="btn btn-primary" onClick={handleDownload}>
            Download All Files
          </button>
        </div>

        <div className="deployment-instructions">
          <h3>📋 Deployment Instructions</h3>
          <div className="instructions-grid">
            <div className="instruction-card">
              <h4>1. GitHub Upload</h4>
              <ol>
                <li>Create a new repository on GitHub</li>
                <li>Upload the downloaded files to the repository</li>
                <li>Make sure the repository is public</li>
              </ol>
            </div>
            <div className="instruction-card">
              <h4>2. Netlify Deployment</h4>
              <ol>
                <li>Go to <a href="https://netlify.com" target="_blank" rel="noopener noreferrer">netlify.com</a></li>
                <li>Click "New site from Git"</li>
                <li>Connect your GitHub repository</li>
                <li>Deploy settings: Leave as default</li>
                <li>Click "Deploy site"</li>
              </ol>
            </div>
            <div className="instruction-card">
              <h4>3. Alternative: Direct Upload</h4>
              <ol>
                <li>Go to <a href="https://netlify.com" target="_blank" rel="noopener noreferrer">netlify.com</a></li>
                <li>Drag and drop the files directly</li>
                <li>Your site will be live instantly!</li>
              </ol>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default GeneratedFiles;