import React, { useState, useEffect } from 'react';
import { MapPin, Clock, Star } from 'lucide-react';
import "../styles/jobs.css";
import JobDetailsModal from '../components/JobDetailsModal';

// Define the shape of a job object using JSDoc comments
/**
 * @typedef {Object} Job
 * @property {number} id
 * @property {string} title
 * @property {string} employer
 * @property {string} location
 * @property {string} job_type
 * @property {string} date_posted
 * @property {string} description
 * @property {string} benefits
 * @property {string} employer_email
 * @property {string} employer_phone
 * @property {number} salary_min
 * @property {number} salary_max
 * @property {string} skills_required
 * @property {string} application_deadline
 */

const JobsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [salary, setSalary] = useState('');
  const [skills, setSkills] = useState('');
  const [deadline, setDeadline] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);
  const [jobs, setJobs] = useState([]);

  // Mock data for jobs
  const demoJobs = [
    {
      id: 1,
      title: "Software Engineer",
      employer: "Safaricom",
      location: "Nairobi, Kenya",
      job_type: "Full-time",
      date_posted: "Thu, 06 Feb 2025 03:53:06 GMT",
      description: "We are looking for a skilled software engineer with expertise in Python, JavaScript, and cloud technologies. Responsibilities include designing and developing software solutions, collaborating with teams, and ensuring code quality.",
      benefits: "Health insurance, Paid vacation, Retirement plan",
      employer_email: "hr@safaricom.co.ke",
      employer_phone: "+254 765985794",
      salary_min: 900000,
      salary_max: 1200000,
      skills_required: "Python, JavaScript, Cloud Computing, Agile",
      application_deadline: "Sat, 05 Apr 2025 03:53:06 GMT"
    },
    {
      id: 2,
      title: "Marketing Manager",
      employer: "Jumia Kenya",
      location: "Mombasa, Kenya",
      job_type: "Full-time",
      date_posted: "Thu, 06 Feb 2025 03:53:06 GMT",
      description: "We are looking for a passionate marketing manager to lead our team. Experience in digital marketing, campaign strategies, and team leadership required.",
      benefits: "Healthcare, 401(k), Paid holidays",
      employer_email: "careers@jumia.co.ke",
      employer_phone: "+254 789808238",
      salary_min: 700000,
      salary_max: 950000,
      skills_required: "Marketing Strategy, Digital Marketing, SEO, Leadership",
      application_deadline: "Mon, 05 May 2025 03:53:06 GMT"
    }
  ];

  useEffect(() => {
    // Fetch data from the backend
    const fetchJobs = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/get_jobs'); // Replace with your backend endpoint
        const data = await response.json();
        // Merge the fetched data with the demo data
        setJobs([...demoJobs, ...data]);
      } catch (error) {
        console.error('Error fetching jobs:', error);
        // If there's an error, fall back to demo data
        setJobs(demoJobs);
      }
    };

    fetchJobs();
  }, []);

  // Filter jobs based on search term, skills, salary, and application deadline
  const filteredJobs = jobs.filter(job => {
    const matchesSearchTerm = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || job.employer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSkills = skills === '' || job.skills_required.toLowerCase().includes(skills.toLowerCase());
    const matchesSalary = salary === '' || job.salary_max >= parseInt(salary);
    const matchesDeadline = deadline === '' || (new Date(job.application_deadline) <= new Date(new Date().setMonth(new Date().getMonth() + parseInt(deadline))));

    return matchesSearchTerm && matchesSkills && matchesSalary && matchesDeadline;
  });

  return (
    <div className="jobs-page">
      <div className="sidebar">
        <h2>Search Jobs</h2>
        <input type="text" placeholder="Job title or company" className="search-input" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

        <div className="filter-section">
          <h3>Skills</h3>
          <input type="text" placeholder="Skills required" className="search-input" value={skills} onChange={(e) => setSkills(e.target.value)} />
        </div>

        <div className="filter-section">
          <h3>Salary</h3>
          <input type="number" placeholder="Minimum salary" className="search-input" value={salary} onChange={(e) => setSalary(e.target.value)} />
        </div>

        <div className="filter-section">
          <h3>Application Deadline</h3>
          <select value={deadline} onChange={(e) => setDeadline(e.target.value)}>
            <option value="">Any</option>
            <option value="1">Due in a month</option>
            <option value="6">Due in 6 months</option>
            <option value="12">Due in a year</option>
            <option value="13">Greater than a year</option>
          </select>
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
                      <span className="font-bold text-gray-500">{job.employer.charAt(0)}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="job-title">{job.title}</h3>
                    <p className="job-company">{job.employer}</p>
                    <div className="job-details">
                      <span className="job-detail">
                        <MapPin size={14} className="mr-1" /> {job.location}
                      </span>
                      <span className="job-detail">
                        <Clock size={14} className="mr-1" /> {job.job_type}
                      </span>
                      <span className="job-detail">
                        <Star size={14} className="mr-1" /> Posted {new Date(job.date_posted).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 flex items-center space-x-4">
                  <button className="apply-button">
                    Apply Now
                  </button>
                  <button className="save-button">
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