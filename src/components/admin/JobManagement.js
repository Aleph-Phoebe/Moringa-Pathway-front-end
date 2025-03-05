import React, { useState } from 'react';


const JobManagement = () => {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: 'Software Engineer',
      company: 'Tech Corp',
      location: 'Remote',
      type: 'Full-time',
      posted: '2025-02-15',
    },
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'Web Solutions',
      location: 'New York, NY',
      type: 'Part-time',
      posted: '2025-02-10',
    },
    // Add more job postings as needed
  ]);

  return (
    <div className="job-management">
      <h1>Manage Jobs</h1>
      <p>View and manage job postings.</p>
      
      <div className="jobs-list">
        {jobs.map((job) => (
          <div key={job.id} className="job-card">
            <h2>{job.title}</h2>
            <p>{job.company}</p>
            <p>{job.location}</p>
            <p>{job.type}</p>
            <p>Posted on: {job.posted}</p>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobManagement;