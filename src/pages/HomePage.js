import React from "react";
// Import your existing Navbar and Footer components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/homepage.css";

function HomePage() {
  return (
    <>
      

      <div className="homepage">
        {/* Hero Section */}
        <header className="hero">
          <img src="path/to/hero-image.png" alt="Hero Image" />
          <h1>Welcome to Moringa Pathway</h1>
          <p>Your one-stop platform for career growth</p>
          <button className="cta-button">Get Started</button>
        </header>

        {/* How It Works Section */}
        <section className="how-it-works">
          <div img="../assets/jobs-picture.png"><img src="./assets/jobs-picture.png" alt="How It Works" />
            <h2>How It Works</h2>
            <p>Follow these simple steps to land your dream job:</p>
          </div>
          
          <div className="steps-container">
            <div className="step">
              {/* Replace these with actual icons or images */}
              <img src="path/to/icon1.png" alt="Create Account" />
              <h3>Create Account</h3>
              <p>Register and set up your profile to get started.</p>
            </div>

            <div className="step">
              <img src="path/to/icon2.png" alt="Upload Resume" />
              <h3>Upload Resume</h3>
              <p>Showcase your skills and experience.</p>
            </div>

            <div className="step">
              <img src="path/to/icon3.png" alt="Find Jobs" />
              <h3>Find Jobs</h3>
              <p>Browse our listings and discover new opportunities.</p>
            </div>

            <div className="step">
              <img src="path/to/icon4.png" alt="Apply & Get Hired" />
              <h3>Apply & Get Hired</h3>
              <p>Take the next step in your career journey.</p>
            </div>
          </div>
        </section>

        {/* Features Section */}
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
      </div>

      
    </>
  );
}

export default HomePage;
