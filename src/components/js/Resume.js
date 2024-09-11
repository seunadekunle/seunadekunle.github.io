import React from 'react';
import { useState, useEffect } from 'react';
import '../css/Resume.css';

const Resume = () => {
  const [resumeUrl, setResumeUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadResume = async () => {
      try {
        const resumeModule = await import('../../assets/pdf/resume.pdf');
        setResumeUrl(resumeModule.default);
        setLoading(false);
      } catch (err) {
        console.error('Failed to load resume:', err);
        setError('Failed to load resume. Please try again later.');
        setLoading(false);
      }
    };

    loadResume();
  }, []);

  if (loading) {
    return <div className="resume-loading">Loading resume...</div>;
  }

  if (error) {
    return <div className="resume-error">{error}</div>;
  }

  return (
    <div className="resume-container">
      <iframe 
        className="resume-frame" 
        src={resumeUrl} 
        title="Resume"
        width="100%"
        height="100%"
      />
      <a 
        href={resumeUrl} 
        download="resume.pdf" 
        className="download-button"
      >
        download seun's resume
      </a>
    </div>
  );
};

export default Resume;