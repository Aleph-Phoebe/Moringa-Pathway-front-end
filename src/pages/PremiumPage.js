import React from 'react';
import { useNavigate } from 'react-router-dom';

const PremiumPage = () => {
  const navigate = useNavigate();

  return (
    <div className="premium-container">
      <h1>Welcome to Premium Access!</h1>
      <p>Enjoy exclusive content and features available only to premium users.</p>
      <button onClick={() => navigate('/dashboard')}>Go to Dashboard</button>
    </div>
  );
};

export default PremiumPage;
