import React, { useState, useEffect } from 'react';
import '../../styles/jobapplications.css';
import ApplicationDetailsModal from '../../components/ApplicationDetailsModal';

const JobApplications = () => {
  const [applications, setApplications] = useState([]);
  const [selectedApplication, setSelectedApplication] = useState(null);

  // Mock job applications data
  const demoApplications = [
    {
      id: 1,
      application_date: '2025-02-15T03:53:06Z',
      status: 'pending',
      job: {
        title: 'Software Engineer',
        employer: 'Tech Corp',
        location: 'Nairobi, Kenya',
        description: 'We are looking for a skilled software engineer with expertise in Python, JavaScript, and cloud technologies.',
        salary_min: 900000,
        salary_max: 1200000,
        job_type: 'Full-time',
        benefits: 'Health insurance, Paid vacation, Retirement plan',
        application_deadline: '2025-04-05T03:53:06Z',
        date_posted: '2025-02-06T03:53:06Z',
        employer_email: 'hr@techcorp.com',
        employer_phone: '+254 765985794',
        is_active: true,
        skills_required: 'Python, JavaScript, Cloud Computing, Agile',
      },
      user: {
        username: 'john_doe92',
        email: 'john.doe92@gmail.com',
        phone: '+254 754926386',
        role: 'graduate',
        date_joined: '2024-11-19T03:53:05Z',
      },
    },
    {
      id: 2,
      application_date: '2025-02-10T03:53:06Z',
      status: 'interview',
      job: {
        title: 'Frontend Developer',
        employer: 'Web Solutions',
        location: 'Nairobi, Kenya',
        description: 'We are looking for a skilled frontend developer with expertise in React and CSS.',
        salary_min: 800000,
        salary_max: 1000000,
        job_type: 'Full-time',
        benefits: 'Health insurance, Paid vacation, Retirement plan',
        application_deadline: '2025-04-05T03:53:06Z',
        date_posted: '2025-02-06T03:53:06Z',
        employer_email: 'hr@websolutions.com',
        employer_phone: '+254 765985794',
        is_active: true,
        skills_required: 'React, CSS, JavaScript, Agile',
      },
      user: {
        username: 'jane_smith87',
        email: 'jane.smith87@gmail.com',
        phone: '+254 797300648',
        role: 'premium_graduate',
        date_joined: '2025-01-10T03:53:05Z',
      },
    },
    {
      id: 3,
      application_date: '2025-01-25T03:53:06Z',
      status: 'rejected',
      job: {
        title: 'Backend Developer',
        employer: 'Data Systems',
        location: 'Nairobi, Kenya',
        description: 'We are looking for a skilled backend developer with expertise in Node.js and databases.',
        salary_min: 850000,
        salary_max: 1100000,
        job_type: 'Full-time',
        benefits: 'Health insurance, Paid vacation, Retirement plan',
        application_deadline: '2025-04-05T03:53:06Z',
        date_posted: '2025-02-06T03:53:06Z',
        employer_email: 'hr@datasystems.com',
        employer_phone: '+254 765985794',
        is_active: true,
        skills_required: 'Node.js, Databases, JavaScript, Agile',
      },
      user: {
        username: 'peter_williams',
        email: 'peter.williams@gmail.com',
        phone: '+254 754926386',
        role: 'graduate',
        date_joined: '2024-11-19T03:53:05Z',
      },
    },
  ];

  useEffect(() => {
    // Fetch data from the backend
    const fetchApplications = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/get_applications'); // Replace with your backend endpoint
        const data = await response.json();
        // Merge the fetched data with the demo data
        setApplications([...demoApplications, ...data]);
      } catch (error) {
        console.error('Error fetching applications:', error);
        // If there's an error, fall back to demo data
        setApplications(demoApplications);
      }
    };

    fetchApplications();
  }, []);

  return (
    <div className="job-applications">
      <h1>My Job Applications</h1>
      <p>View and manage your job applications.</p>
      
      <div className="applications-list">
        {applications.map((application) => (
          <div key={application.id} className="application-card">
            <h2>{application.job.title}</h2>
            <p>{application.job.employer}</p>
            <p>Status: {application.status}</p>
            <p>Date Applied: {new Date(application.application_date).toLocaleDateString()}</p>
            <button onClick={() => setSelectedApplication(application)}>View Details</button>
          </div>
        ))}
      </div>

      <div className={`modal-overlay ${selectedApplication ? 'show' : ''}`}>
        <div className={`modal-content ${selectedApplication ? 'show' : ''}`}>
          <ApplicationDetailsModal application={selectedApplication} onClose={() => setSelectedApplication(null)} />
        </div>
      </div>
    </div>
  );
};

export default JobApplications;