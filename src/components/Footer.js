import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Section */}
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Partners</a></li>
            <li><a href="#">For Candidates</a></li>
            <li><a href="#">For Employers</a></li>
          </ul>
        </div>

        {/* Job Categories Section */}
        <div className="footer-section">
          <h3>Job Categories</h3>
          <ul>
            <li><a href="#">Telecommunications</a></li>
            <li><a href="#">Hotels & Tourism</a></li>
            <li><a href="#">Construction</a></li>
            <li><a href="#">Education</a></li>
            <li><a href="#">Financial Services</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="footer-section newsletter">
          <h3>Newsletter</h3>
          <p>The quick brown fox jumps over the lazy fox.</p>
          <form>
            <input type="email" placeholder="Email Address" required />
            <button type="submit">Subscribe now</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;