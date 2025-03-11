import React, { useState, useEffect } from 'react';
import '../../styles/jobapplications.css';

const JobApplications = () => {
  const demoData = [
    {
      id: 1,
      jobTitle: 'Software Engineer',
      company: 'Tech Corp',
      location: 'Remote',
      type: 'Full-time',
      dateApplied: '2025-02-15',
    },
    {
      id: 2,
      jobTitle: 'Frontend Developer',
      company: 'Web Solutions',
      location: 'New York, NY',
      type: 'Part-time',
      dateApplied: '2025-02-10',
    },
    {
      id: 3,
      jobTitle: 'Backend Developer',
      company: 'Data Systems',
      location: 'San Francisco, CA',
      type: 'Full-time',
      dateApplied: '2025-01-25',
    },
  ];

  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const appliedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];
    setApplications([...demoData, ...appliedJobs]);
  }, []);

  const handleRemoveApplication = (id) => {
    const updatedApplications = applications.filter(job => job.id !== id);
    setApplications(updatedApplications);
    localStorage.setItem('appliedJobs', JSON.stringify(updatedApplications.filter(job => !demoData.some(demoJob => demoJob.id === job.id))));
  };

  return (
    <div className="job-applications">
      <h1>My Job Applications</h1>
      <p>View and manage your job applications.</p>

      <div className="applications-list">
        {applications.length === 0 ? (
          <p>No job applications.</p>
        ) : (
          applications.map((application) => (
            <div key={application.id} className="application-card">
              <h2>{application.jobTitle}</h2>
              <p>{application.company}</p>
              <p>{application.location}</p>
              <p>{application.type}</p>
              <p>Date Applied: {application.dateApplied}</p>
              <button>View Details</button>
              <button onClick={() => handleRemoveApplication(application.id)}>Remove</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default JobApplications;
