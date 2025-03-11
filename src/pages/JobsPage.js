import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';
import { MapPin, Clock, Star } from 'lucide-react';
import "../styles/jobs.css";
import JobDetailsModal from '../components/JobDetailsModal';

// Define the shape of a job object using JSDoc comments
/**
 * @typedef {Object} Job
 * @property {number} id
 * @property {string} title
 * @property {string} company
 * @property {string} location
 * @property {string} type
 * @property {string} posted
 * @property {string} logo
 */

const JobsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [jobs, setJobs] = useState([]);
  const [salary, setSalary] = useState(50000);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(`${config.backendUrl}/get_jobs`);
        setJobs(response.data);
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  const handleSaveJob = (job) => {
    const savedJobs = JSON.parse(localStorage.getItem('savedJobs')) || [];
    localStorage.setItem('savedJobs', JSON.stringify([...savedJobs, job]));
  };

  const handleApplyJob = (job) => {
    const appliedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];
    localStorage.setItem('appliedJobs', JSON.stringify([...appliedJobs, job]));
  };

  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="jobs-page">
      <div className="sidebar">
        <h2>Search Jobs</h2>
        <input type="text" placeholder="Job title or company" className="search-input" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

        <div className="filter-section">
          <h3>Category</h3>
          <div>
            <input type="checkbox" id="commerce" name="category" value="commerce" />
            <label htmlFor="commerce">Commerce</label>
          </div>
          <div>
            <input type="checkbox" id="telecommunication" name="category" value="telecommunication" />
            <label htmlFor="telecommunication">Telecommunication</label>
          </div>
          <div>
            <input type="checkbox" id="education" name="category" value="education" />
            <label htmlFor="education">Education</label>
          </div>
        </div>

        <div className="filter-section">
          <h3>Job Type</h3>
          <div>
            <input type="checkbox" id="fulltime" name="jobType" value="fulltime" />
            <label htmlFor="fulltime">Full-time</label>
          </div>
          <div>
            <input type="checkbox" id="parttime" name="jobType" value="parttime" />
            <label htmlFor="parttime">Part-time</label>
          </div>
          <div>
            <input type="checkbox" id="freelance" name="jobType" value="freelance" />
            <label htmlFor="freelance">Freelance</label>
          </div>
          <div>
            <input type="checkbox" id="seasonal" name="jobType" value="seasonal" />
            <label htmlFor="seasonal">Seasonal</label>
          </div>
          <div>
            <input type="checkbox" id="fixedprice" name="jobType" value="fixedprice" />
            <label htmlFor="fixedprice">Fixed-price</label>
          </div>
        </div>

        <div className="filter-section">
          <h3>Experience Level</h3>
          <select>
            <option value="entry">Entry Level</option>
            <option value="mid">Mid Level</option>
            <option value="senior">Senior Level</option>
          </select>
        </div>

        <div className="filter-section">
          <h3>Date Posted</h3>
          <select>
            <option value="last24hours">Last 24 hours</option>
            <option value="last7days">Last 7 days</option>
            <option value="last14days">Last 14 days</option>
            <option value="last30days">Last 30 days</option>
            <option value="ealier">ealier</option>
          </select>
        </div>

        <div className="filter-section">
          <h3>Salary</h3>
          <input
            type="range"
            min="0"
            max="2000000"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
          <div>Salary: ${salary}</div>
        </div>
      </div>

      <div className="jobs-list-container">
        <h1>Jobs Available</h1>
        
        <div className="jobs-list">
          {filteredJobs.map(job => (
            <div key={job.id} className="job-card" onClick={() => setSelectedJob(job)}>
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <div className="w-10 h-10 flex items-center justify-center">
                      <span className="font-bold text-gray-500">{job.logo}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="job-title">{job.title}</h3>
                    <p className="job-company">{job.company}</p>
                    <div className="job-details">
                      <span className="job-detail">
                        <MapPin size={14} className="mr-1" /> {job.location}
                      </span>
                      <span className="job-detail">
                        <Clock size={14} className="mr-1" /> {job.type}
                      </span>
                      <span className="job-detail">
                        <Star size={14} className="mr-1" /> Posted {job.posted}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 flex items-center space-x-4">
                  <button className="apply-button" onClick={() => handleApplyJob(job)}>
                    Apply Now
                  </button>
                  <button className="save-button" onClick={() => handleSaveJob(job)}>
                    Save Job
                  </button>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={`modal-overlay ${selectedJob ? 'show' : ''}`}>
        <div className={`modal-content ${selectedJob ? 'show' : ''}`}>
          <JobDetailsModal job={selectedJob} onClose={() => setSelectedJob(null)} />
        </div>
      </div>
    </div>
  );
};

export default JobsPage;