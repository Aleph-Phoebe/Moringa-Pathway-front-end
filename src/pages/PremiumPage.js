import React, { useState } from 'react';
import '../styles/premium.css';

const premiumResources = [
  {
    title: "Resume Writing Guide",
    content: "Learn how to craft a professional and impressive resume that stands out to employers. Tips on formatting, content, and common mistakes to avoid.",
  },
  {
    title: "Interview Preparation",
    content: "Prepare for interviews with common questions, effective answers, and techniques to leave a positive impression.",
  },
  {
    title: "Technical Interview Questions",
    content: "Access a collection of technical questions from various industries to help you prepare for your next technical interview.",
  },
  {
    title: "Salary Negotiation Tactics",
    content: "Discover strategies to negotiate your salary effectively and get the compensation you deserve.",
  },
  {
    title: "Professional CV Template",
    content: "Download a customizable CV template designed to highlight your skills and achievements in a professional manner.",
  },
  {
    title: "LinkedIn Profile Optimization",
    content: "Learn how to optimize your LinkedIn profile to attract recruiters and showcase your professional brand.",
  },
];

const PremiumPage = () => {
  const [selectedResource, setSelectedResource] = useState(null);

  const handleResourceClick = (resource) => {
    setSelectedResource(resource);
  };

  const handleClose = () => {
    setSelectedResource(null);
  };

  return (
    <div className="premium-container">
      <h1 className="premium-title">Welcome to Premium Content</h1>
      <p className="premium-subtitle">Enjoy your exclusive access to the following premium resources:</p>
      <ul className="premium-list">
        {premiumResources.map((resource, index) => (
          <li
            key={index}
            className="premium-item"
            onClick={() => handleResourceClick(resource)}
          >
            {resource.title}
          </li>
        ))}
      </ul>

      {selectedResource && (
        <div className="modal">
          <div className="modal-content">
            <h2>{selectedResource.title}</h2>
            <p>{selectedResource.content}</p>
            <button className="close-button" onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PremiumPage;
