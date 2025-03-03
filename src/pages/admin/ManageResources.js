import React, { useState } from 'react';

const ManageResources = () => {
  const [resources, setResources] = useState([
    {
      id: 1,
      title: 'Resume Writing Guide',
      description: 'Learn how to craft a professional resume that stands out to employers.',
      type: 'Guide',
      isPremium: false,
    },
    {
      id: 2,
      title: 'Interview Preparation',
      description: 'Prepare for common interview questions and techniques.',
      type: 'Guide',
      isPremium: false,
    },
    {
      id: 3,
      title: 'Technical Interview Questions',
      description: 'Common technical questions for software development roles with detailed answers.',
      type: 'Template',
      isPremium: true,
    },
    // Add more resources as needed
  ]);

  return (
    <div className="manage-resources">
      <h1>Manage Resources</h1>
      <p>View and manage resources.</p>
      
      <div className="resources-list">
        {resources.map((resource) => (
          <div key={resource.id} className="resource-card">
            <h2>{resource.title}</h2>
            <p>{resource.description}</p>
            <p>Type: {resource.type}</p>
            <p>{resource.isPremium ? 'Premium' : 'Free'}</p>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageResources;