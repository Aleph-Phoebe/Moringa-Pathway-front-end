import React, { useState } from 'react';

const JobApplications = () => {
  const [applications, setApplications] = useState([
    {
      id: 1,
      jobTitle: 'Software Engineer',
      company: 'Tech Corp',
      status: 'Pending',
      dateApplied: '2025-02-15',
    },
    {
      id: 2,
      jobTitle: 'Frontend Developer',
      company: 'Web Solutions',
      status: 'Interview',
      dateApplied: '2025-02-10',
    },
    {
      id: 3,
      jobTitle: 'Backend Developer',
      company: 'Data Systems',
      status: 'Rejected',
      dateApplied: '2025-01-25',
    },
    // Add more job applications as needed
  ]);

  return (
    <div className="job-applications">
      <h1>My Job Applications</h1>
      <p>View and manage your job applications.</p>
      
      <div className="applications-list">
        {applications.map((application) => (
          <div key={application.id} className="application-card">
            <h2>{application.jobTitle}</h2>
            <p>{application.company}</p>
            <p>Status: {application.status}</p>
            <p>Date Applied: {application.dateApplied}</p>
            <button>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobApplications;