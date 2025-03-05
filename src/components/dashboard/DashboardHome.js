import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Briefcase, BookOpen, Star, Bell } from 'lucide-react';

const DashboardHome = () => {
  const { user } = useAuth();
  
  // Mock data
  const stats = [
    { label: 'Applications', value: 12, icon: <Briefcase size={20} /> },
    { label: 'Saved Jobs', value: 8, icon: <Star size={20} /> },
    { label: 'Resources Viewed', value: 15, icon: <BookOpen size={20} /> },
    { label: 'Notifications', value: 3, icon: <Bell size={20} /> }
  ];
  
  const recentJobs = [
    { id: 1, title: 'Regional Certified Facilitator', company: 'Moringa School', status: 'Applied', date: '2 days ago' },
    { id: 2, title: 'Select A Brand Director', company: 'Moringa', status: 'Saved', date: '3 days ago' },
    { id: 3, title: 'Tanzania Partner Facilitator', company: 'Moringa', status: 'Interview', date: '1 week ago' }
  ];
  
  const upcomingEvents = [
    { id: 1, title: 'Tech Career Fair', date: 'June 15, 2025', time: '10:00 AM - 4:00 PM' },
    { id: 2, title: 'Resume Workshop', date: 'June 20, 2025', time: '2:00 PM - 4:00 PM' }
  ];

  return (
    <div className="dashboard-home">
      <div className="dashboard-welcome">
        <h1>Welcome back, {user?.name}!</h1>
        <p>Here's an overview of your job search activities</p>
      </div>
      
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-content">
              <h3 className="stat-value">{stat.value}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="dashboard-sections">
        <div className="dashboard-section">
          <h2 className="section-title">Recent Applications</h2>
          <div className="section-content">
            {recentJobs.map(job => (
              <div key={job.id} className="job-item">
                <div>
                  <h3 className="job-title">{job.title}</h3>
                  <p className="job-company">{job.company}</p>
                </div>
                <div className="job-meta">
                  <span className={`job-status status-${job.status.toLowerCase()}`}>
                    {job.status}
                  </span>
                  <span className="job-date">{job.date}</span>
                </div>
              </div>
            ))}
            <a href="/dashboard/applications" className="view-all-link">
              View all applications
            </a>
          </div>
        </div>
        
        <div className="dashboard-section">
          <h2 className="section-title">Upcoming Events</h2>
          <div className="section-content">
            {upcomingEvents.map(event => (
              <div key={event.id} className="event-item">
                <div className="event-date-container">
                  <span className="event-month">
                    {event.date.split(' ')[0]}
                  </span>
                  <span className="event-day">
                    {event.date.split(' ')[1].replace(',', '')}
                  </span>
                </div>
                <div className="event-details">
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-time">{event.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="recommended-section">
        <h2 className="section-title">Recommended for You</h2>
        <div className="recommended-resources">
          <div className="recommended-resource">
            <div className="resource-icon">
              <BookOpen size={24} />
            </div>
            <div className="resource-details">
              <h3>Interview Preparation Guide</h3>
              <p>Learn how to prepare for technical and behavioral interviews</p>
              <a href="/resources" className="resource-link">View Resource</a>
            </div>
          </div>
          <div className="recommended-resource">
            <div className="resource-icon">
              <Briefcase size={24} />
            </div>
            <div className="resource-details">
              <h3>Senior Software Developer</h3>
              <p>Moringa Tech • Remote • Full-time</p>
              <a href="/jobs" className="resource-link">View Job</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;