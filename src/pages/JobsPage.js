import React, { useState } from 'react';
import { MapPin, Clock, Star } from 'lucide-react';
import "../styles/jobs.css";

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
  
  // Mock data for jobs
  /** @type {Job[]} */
  const mockJobs = [
    {
      id: 1,
      title: "Regional Certified Facilitator",
      company: "Moringa School",
      location: "Nairobi, Kenya",
      type: "Full-time",
      posted: "2 days ago",
      logo: "RC"
    },
    {
      id: 2,
      title: "Select A Brand Director",
      company: "Moringa",
      location: "Nairobi",
      type: "Full-time",
      posted: "3 days ago",
      logo: "SA"
    },
    {
      id: 3,
      title: "Tanzania Partner Facilitator",
      company: "Moringa",
      location: "Tanzania",
      type: "Full-time",
      posted: "5 days ago",
      logo: "TP"
    },
    {
      id: 4,
      title: "Senior Software Developer",
      company: "Moringa Tech",
      location: "Remote",
      type: "Full-time",
      posted: "1 day ago",
      logo: "MT"
    }
  ];

  // Filter jobs based on search term
  const filteredJobs = mockJobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="jobs-page">
      <h1>Jobs Available</h1>
      
      <div className="search-container">
        <div className="search-title">
          Search by Job Title
        </div>
        <div className="search-box">
          <img src="/src/assets/search.svg" alt="Search" />
          <input 
            type="text" 
            placeholder="Job title or company"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      <div className="jobs-list">
        {filteredJobs.map(job => (
          <div key={job.id} className="job-card">
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
              <div className="mt-4 md:mt-0">
                <button className="apply-button">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsPage;