import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, CreditCard, Lock } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import '../styles/premium.css';

const PremiumPage = () => {
  const { isPremium } = useAuth();
  const navigate = useNavigate();
  
  const handleUpgrade = () => {
    navigate('/payment');
  };
  
  if (isPremium) {
    return (
      <div className="premium-page">
        <div className="premium-container">
          <div className="premium-header">
            <h1>You're a Premium Member!</h1>
            <p>You already have access to all premium features and resources.</p>
          </div>
          
          <div className="premium-benefits">
            <h2>Your Premium Benefits</h2>
            <ul className="benefits-list">
              <li>
                <Check size={20} className="check-icon" />
                <span>Exclusive interview questions and model answers</span>
              </li>
              <li>
                <Check size={20} className="check-icon" />
                <span>Premium career resources and guides</span>
              </li>
              <li>
                <Check size={20} className="check-icon" />
                <span>Priority application submissions</span>
              </li>
              <li>
                <Check size={20} className="check-icon" />
                <span>Direct contact with career advisors</span>
              </li>
            </ul>
          </div>
          
          <button 
            className="premium-button"
            onClick={() => navigate('/resources')}
          >
            Browse Premium Resources
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="premium-page">
      <div className="premium-container">
        <div className="premium-header">
          <h1>Upgrade to Premium</h1>
          <p>Get exclusive access to premium resources and features</p>
        </div>
        
        <div className="premium-price">
          <span className="currency">KSH</span>
          <span className="amount">5,000</span>
          <span className="period">one-time payment</span>
        </div>
        
        <div className="premium-benefits">
          <h2>Premium Benefits</h2>
          <ul className="benefits-list">
            <li>
              <Check size={20} className="check-icon" />
              <span>Exclusive interview questions and model answers</span>
            </li>
            <li>
              <Check size={20} className="check-icon" />
              <span>Premium career resources and guides</span>
            </li>
            <li>
              <Check size={20} className="check-icon" />
              <span>Priority application submissions</span>
            </li>
            <li>
              <Check size={20} className="check-icon" />
              <span>Direct contact with career advisors</span>
            </li>
          </ul>
        </div>
        
        <button 
          className="premium-button"
          onClick={handleUpgrade}
        >
          <Lock size={16} />
          Upgrade Now
        </button>
        
        <p className="payment-disclaimer">
          For demo purposes, no actual payment will be processed. Click "Upgrade Now" to simulate a payment.
        </p>
      </div>
    </div>
  );
};

export default PremiumPage;