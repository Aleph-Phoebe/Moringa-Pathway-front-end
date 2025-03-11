import React, { useState } from 'react';
import axios from 'axios';

const JobDetailsModal = ({ job, onClose }) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    resume: '',
    coverLetter: '',
  });

  if (!job) return null;

  // Toggle the application form visibility
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  // Handle input changes in the form
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Save Job function
  const saveJob = async () => {
    try {
      await axios.post(`http://127.0.0.1:5000/jobs/${job.id}/save`);
      alert('Job saved successfully!');
    } catch (error) {
      console.error('Error saving job:', error);
      alert('Failed to save job.');
    }
  };

  // Submit Application function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://127.0.0.1:5000/jobs/${job.id}/apply`, formData);
      alert('Application submitted successfully!');
      setShowForm(false);
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('Failed to submit application.');
    }
  };

  return (
    <div className="modal-overlay show">
      <div className="modal-content show">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>{job.title}</h2>
        <p><strong>Company:</strong> {job.company}</p>
        <p><strong>Location:</strong> {job.location}</p>
        <p><strong>Type:</strong> {job.type}</p>
        <p><strong>Posted:</strong> {job.posted}</p>
        <p><strong>Description:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vitae libero bibendum tincidunt.</p>

        <div className="modal-buttons">
          <button className="apply-button" onClick={toggleForm}>
            {showForm ? 'Cancel' : 'Apply Now'}
          </button>
          <button className="save-button" onClick={saveJob}>Save Job</button>
        </div>

        {showForm && (
          <form className="application-form" onSubmit={handleSubmit}>
            <h3>Job Application</h3>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="resume"
              placeholder="Resume Link"
              value={formData.resume}
              onChange={handleChange}
              required
            />
            <textarea
              name="coverLetter"
              placeholder="Cover Letter"
              value={formData.coverLetter}
              onChange={handleChange}
              required
            />
            <button type="submit" className="submit-button">Submit Application</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default JobDetailsModal;
