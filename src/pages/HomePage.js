import React from "react";
import "../styles/homepage.css";

function HomePage() {
  return (
    <div className="homepage">
      <header className="hero">
        <h1>Welcome to Moringa Pathway</h1>
        <p>Your one-stop platform for career growth</p>
        <button className="cta-button">Get Started</button>
      </header>

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
    
  );
}

export default HomePage;
