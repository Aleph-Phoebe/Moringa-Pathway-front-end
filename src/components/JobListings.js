import React from "react";
import styled from "styled-components";

const JobListings = () => {
  return (
    <Section>
      {/* How It Works Section */}
      <HowItWorks>
        <h2>How it works</h2>
        <p>The quick brown fox jumps over the lazy fox.</p>
        <StepsContainer>
          <Step>
            <Icon>📝</Icon>
            <h3>Create Account</h3>
            <p>The quick brown fox jumps over the lazy fox.</p>
          </Step>
          <Step>
            <Icon>📤</Icon>
            <h3>Upload Resume</h3>
            <p>The quick brown fox jumps over the lazy fox.</p>
          </Step>
          <Step>
            <Icon>🔍</Icon>
            <h3>Find Jobs</h3>
            <p>The quick brown fox jumps over the lazy fox.</p>
          </Step>
          <Step>
            <Icon>✅</Icon>
            <h3>Apply Job</h3>
            <p>The quick brown fox jumps over the lazy fox.</p>
          </Step>
        </StepsContainer>
      </HowItWorks>

      {/* Job Search Filters */}
      <Filters>
        <input type="text" placeholder="Job Title or Company" />
        <input type="text" placeholder="Select Location" />
        <input type="text" placeholder="Select Category" />
        <SearchButton>🔎 Search Job</SearchButton>
      </Filters>

      {/* Job Listings */}
      <JobList>
        <h2>Jobs Available</h2>
        <JobCard>
          <JobInfo>
            <h3>Regional Creative Facilitator</h3>
            <p>Wisozk - Becker Co</p>
            <Details>
              <span>🖥 ICT</span>
              <span>🕒 Part-time</span>
              <span>💰 Ksh 1000 - Ksh 4000</span>
              <span>📍 Nairobi, Kenya</span>
            </Details>
          </JobInfo>
          <JobButton>Job Details</JobButton>
        </JobCard>

        <JobCard>
          <JobInfo>
            <h3>District Intranet Director</h3>
            <p>YouRedant - Weber Co</p>
            <Details>
              <span>🖥 ICT</span>
              <span>🕒 Full-time</span>
              <span>💰 Ksh 1000 - Ksh 4000</span>
              <span>📍 Nairobi, Kenya</span>
            </Details>
          </JobInfo>
          <JobButton>Job Details</JobButton>
        </JobCard>

        <JobCard>
          <JobInfo>
            <h3>Corporate Tactics Facilitator</h3>
            <p>Cormier, Turner and Bailey Inc</p>
            <Details>
              <span>🛒 Commerce</span>
              <span>🕒 Full-time</span>
              <span>💰 Ksh 1000 - Ksh 4000</span>
              <span>📍 Nairobi, Kenya</span>
            </Details>
          </JobInfo>
          <JobButton>Job Details</JobButton>
        </JobCard>
      </JobList>
    </Section>
  );
};

export default JobListings;

const Section = styled.section`
  padding: 60px 80px;
`;

const HowItWorks = styled.div`
  text-align: center;
  margin-bottom: 40px;

  h2 {
    font-size: 2rem;
    color: #2a2a72;
  }

  p {
    color: #666;
  }
`;

const StepsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const Step = styled.div`
  text-align: center;
  max-width: 200px;
`;

const Icon = styled.div`
  font-size: 2rem;
  margin-bottom: 10px;
`;

const Filters = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 30px;

  input {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    width: 200px;
  }
`;

const SearchButton = styled.button`
  background-color: #2a2a72;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
`;

const JobList = styled.div`
  margin-top: 20px;

  h2 {
    text-align: left;
    font-size: 1.8rem;
    color: #2a2a72;
  }
`;

const JobCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 15px;
  margin-top: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const JobInfo = styled.div`
  h3 {
    font-size: 1.2rem;
    color: #2a2a72;
  }

  p {
    color: #666;
  }
`;

const Details = styled.div`
  display: flex;
  gap: 10px;
  font-size: 0.9rem;
  color: #555;
`;

const JobButton = styled.button`
  background-color: #1e90ff;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
`;
