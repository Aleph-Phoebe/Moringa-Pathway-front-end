import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Lock } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import '../styles/resources.css';

interface Resource {
  id: number;
  title: string;
  description: string;
  type: string;
  isPremium: boolean;
  url: string;
}

const ResourcesPage = () => {
  const { isPremium } = useAuth();
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Mock resources data
  const resources: Resource[] = [
    {
      id: 1,
      title: "Resume Writing Guide",
      description: "Learn how to craft a professional resume that stands out to employers.",
      type: "guide",
      isPremium: false,
      url: "#"
    },
    {
      id: 2,
      title: "Interview Preparation",
      description: "Prepare for common interview questions and techniques.",
      type: "guide",
      isPremium: false,
      url: "#"
    },
    {
      id: 3,
      title: "Technical Interview Questions",
      description: "Common technical questions for software development roles with detailed answers.",
      type: "template",
      isPremium: true,
      url: "#"
    },
    {
      id: 4,
      title: "Salary Negotiation Tactics",
      description: "How to negotiate your salary effectively to get the best offer.",
      type: "guide",
      isPremium: true,
      url: "#"
    },
    {
      id: 5,
      title: "Professional CV Template",
      description: "Ready-to-use CV template optimized for tech industry applications.",
      type: "template",
      isPremium: false,
      url: "#"
    },
    {
      id: 6,
      title: "LinkedIn Profile Optimization",
      description: "Tips to make your LinkedIn profile attract recruiters.",
      type: "guide",
      isPremium: false,
      url: "#"
    }
  ];
  
  // Filter resources based on active category and premium status
  const filteredResources = resources.filter(resource => {
    if (activeCategory !== 'all' && resource.type !== activeCategory) {
      return false;
    }
    return true;
  });

  return (
    <div className="resources-page">
      <div className="resources-header">
        <h1>Career Resources</h1>
        <p>Access guides, templates, and tools to help you in your career journey</p>
      </div>
      
      {!isPremium && (
        <div className="premium-banner">
          <div className="premium-content">
            <h2>Upgrade to Premium</h2>
            <p>Get access to exclusive resources, interview questions with model answers, and more.</p>
            <Link to="/premium" className="premium-button">
              Upgrade Now
            </Link>
          </div>
        </div>
      )}
      
      <div className="resources-filter">
        <button 
          className={`filter-button ${activeCategory === 'all' ? 'active' : ''}`}
          onClick={() => setActiveCategory('all')}
        >
          All Resources
        </button>
        <button 
          className={`filter-button ${activeCategory === 'guide' ? 'active' : ''}`}
          onClick={() => setActiveCategory('guide')}
        >
          Guides
        </button>
        <button 
          className={`filter-button ${activeCategory === 'template' ? 'active' : ''}`}
          onClick={() => setActiveCategory('template')}
        >
          Templates
        </button>
      </div>
      
      <div className="resources-grid">
        {filteredResources.map(resource => (
          <div key={resource.id} className={`resource-card ${resource.isPremium ? 'premium' : ''}`}>
            <div className="resource-icon">
              <BookOpen size={24} />
            </div>
            <h3>{resource.title}</h3>
            <p>{resource.description}</p>
            
            {resource.isPremium && !isPremium ? (
              <div className="premium-lock">
                <Lock size={16} />
                <span>Premium</span>
              </div>
            ) : (
              <a href={resource.url} className="resource-link">
                Access Resource
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourcesPage;