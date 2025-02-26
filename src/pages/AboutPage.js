import React from "react";
import "../styles/about.css";

function AboutPage() {
  return (
    <div className="about-page">
      <h1>About Moringa Pathway</h1>
      <p>
        Moringa Pathway is a dedicated platform designed to help graduates
        navigate their career journey by providing job opportunities, career
        resources, and application tracking.
      </p>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          Empowering graduates with the right tools and opportunities to
          accelerate their careers.
        </p>
      </section>

      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="member">
            <img src="/assets/member1.jpg" alt="Team Member 1" />
            <h3>Jane Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="member">
            <img src="/assets/member2.jpg" alt="Team Member 2" />
            <h3>John Smith</h3>
            <p>Head of Careers</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
