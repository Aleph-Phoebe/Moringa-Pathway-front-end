import React, { useState, useEffect } from 'react';

const SavedJobs = () => {
  const demoData = [
    {
      id: 1,
      jobTitle: 'Software Engineer',
      company: 'Tech Corp',
      location: 'Remote',
      type: 'Full-time',
      dateSaved: '2025-02-15',
    },
    {
      id: 2,
      jobTitle: 'Frontend Developer',
      company: 'Web Solutions',
      location: 'New York, NY',
      type: 'Part-time',
      dateSaved: '2025-02-10',
    },
    {
      id: 3,
      jobTitle: 'Backend Developer',
      company: 'Data Systems',
      location: 'San Francisco, CA',
      type: 'Full-time',
      dateSaved: '2025-01-25',
    },
  ];

  const [savedJobs, setSavedJobs] = useState([]);

  useEffect(() => {
    const savedJobs = JSON.parse(localStorage.getItem('savedJobs')) || [];
    setSavedJobs([...demoData, ...savedJobs]);
  }, []);

  const handleRemoveJob = (id) => {
    const updatedJobs = savedJobs.filter(job => job.id !== id);
    setSavedJobs(updatedJobs);
    localStorage.setItem('savedJobs', JSON.stringify(updatedJobs.filter(job => !demoData.some(demoJob => demoJob.id === job.id))));
  };

  return (
    <div className="saved-jobs">
      <h1>Saved Jobs</h1>
      <p>View and manage your saved jobs.</p>

      <div className="jobs-list">
        {savedJobs.length === 0 ? (
          <p>No saved jobs.</p>
        ) : (
          savedJobs.map((job) => (
            <div key={job.id} className="job-card">
              <h2>{job.jobTitle}</h2>
              <p>{job.company}</p>
              <p>{job.location}</p>
              <p>{job.type}</p>
              <p>Date Saved: {job.dateSaved}</p>
              <button>View Details</button>
              <button onClick={() => handleRemoveJob(job.id)}>Remove</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SavedJobs;
