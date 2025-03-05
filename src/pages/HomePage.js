import React from "react";
import { Link } from "react-router-dom";
import "../styles/homepage.css";
import icon from "../assets/icon.svg";
import icon2 from "../assets/icon-2.svg";
import icon31 from "../assets/icon-31.svg";
import tesla from "../assets/tesla.svg";
import logos from "../assets/logos.svg";
import CompanyCard from "../components/CompanyCard";

const cardData = [
  { icon: logos, name: "Instagram", description: "The quick brown fox jumps over the lazy fox." },
  { icon: tesla, name: "Tesla", description: "The quick brown fox jumps over the lazy fox." },
  { icon: icon31, name: "McDonald’s", description: "The quick brown fox jumps over the lazy fox." },
  { icon: icon, name: "Apple", description: "The quick brown fox jumps over the lazy fox." },
];

function HomePage() {
  return (
    <>
      <div className="homepage">
        {/* Hero Section */}
        <header className="hero">
          <h1>Welcome to Moringa Pathway</h1>
          <p>Your one-stop platform for career growth</p>
          <Link to="/login" className="cta-button">Get Started</Link>
        </header>

        {/* How It Works Section */}
        <section className="how-it-works">
          <div>
            <h2>How It Works</h2>
            <p>Follow these simple steps to land your dream job:</p>
          </div>
          
          <div className="steps-container">
            <div className="step">
              <img src={icon} alt="Create Account" />
              <h3>Create Account</h3>
              <p>Register and set up your profile to get started.</p>
            </div>

            <div className="step">
              <img src={icon2} alt="Upload Resume" />
              <h3>Upload Resume</h3>
              <p>Showcase your skills and experience.</p>
            </div>

            <div className="step">
              <img src={icon31} alt="Find Jobs" />
              <h3>Find Jobs</h3>
              <p>Browse our listings and discover new opportunities.</p>
            </div>

            <div className="step">
              <img src={logos} alt="Apply & Get Hired" />
              <h3>Apply & Get Hired</h3>
              <p>Take the next step in your career journey.</p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <h1>Jobs Available</h1>
        <section className="features">
          
          <div className="feature">
            <h2>Job Listings</h2>
            <p>Find the best job opportunities tailored for you.</p>
          </div>
          <div className="feature">
            <h2>Career Resources</h2>
            <p>Access premium career resources and guides.</p>
          </div>
          <div className="feature">
            <h2>Application Tracking</h2>
            <p>Keep track of your job applications in one place.</p>
          </div>
        </section>
        <section>
          <img src="../assets/jobs-picture.png" alt="jobs" />
        </section>

        {/* Company Cards Section */}
        <section className="company-cards">
          {cardData.map((card, index) => (
            <CompanyCard
              key={index}
              icon={card.icon}
              name={card.name}
              description={card.description}
            />
          ))}
        </section>
      </div>
    </>
  );
}

export default HomePage;
