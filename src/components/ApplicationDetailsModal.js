import React from 'react';

const ApplicationDetailsModal = ({ application, onClose }) => {
  if (!application) return null;

  return (
    <div className="modal-overlay show">
      <div className="modal-content show">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>{application.job.title}</h2>
        <p><strong>Company:</strong> {application.job.employer}</p>
        <p><strong>Status:</strong> {application.status}</p>
        <p><strong>Date Applied:</strong> {new Date(application.application_date).toLocaleDateString()}</p>
        <p><strong>Location:</strong> {application.job.location}</p>
        <p><strong>Job Type:</strong> {application.job.job_type}</p>
        <p><strong>Salary:</strong> {application.job.salary_min} - {application.job.salary_max}</p>
        <p><strong>Benefits:</strong> {application.job.benefits}</p>
        <p><strong>Description:</strong> {application.job.description}</p>
        <p><strong>Skills Required:</strong> {application.job.skills_required}</p>
        <p><strong>Employer Email:</strong> {application.job.employer_email}</p>
        <p><strong>Employer Phone:</strong> {application.job.employer_phone}</p>
      </div>
    </div>
  );
};

export default ApplicationDetailsModal;