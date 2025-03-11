import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../config';
import '../../styles/jobapplications.css';
import ApplicationDetailsModal from '../../components/ApplicationDetailsModal';

const JobApplications = () => {
  const [applications, setApplications] = useState([]);
  const [selectedApplication, setSelectedApplication] = useState(null);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get(`${config.backendUrl}/get_applications`);
        setApplications(response.data);
      } catch (error) {
        console.error("Failed to fetch applications:", error);
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
            <h2>{application.jobTitle}</h2>
            <p>{application.company}</p>
            <p>Status: {application.status}</p>
            <p>Date Applied: {application.dateApplied}</p>
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
