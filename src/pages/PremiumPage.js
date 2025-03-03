import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, CreditCard, Lock } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import '../styles/premium.css';

const PremiumPage = () => {
  const { isPremium, upgradeToPremium } = useAuth();
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();
  
  const handleUpgrade = async () => {
    setIsProcessing(true);
    try {
      await upgradeToPremium();
      // Simulate payment processing delay
      setTimeout(() => {
        setIsProcessing(false);
        navigate('/dashboard');
      }, 2000);
    } catch (error) {
      setIsProcessing(false);
      console.error('Upgrade failed:', error);
    }
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
        
        <div className="payment-section">
          <h2>Payment Information</h2>
          <div className="payment-form">
            <div className="form-group">
              <label>Card Number</label>
              <div className="card-input">
                <CreditCard size={20} />
                <input type="text" placeholder="1234 5678 9012 3456" />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>Expiry Date</label>
                <input type="text" placeholder="MM/YY" />
              </div>
              <div className="form-group">
                <label>CVC</label>
                <input type="text" placeholder="123" />
              </div>
            </div>
            
            <div className="form-group">
              <label>Name on Card</label>
              <input type="text" placeholder="John Doe" />
            </div>
          </div>
        </div>
        
        <button 
          className="premium-button"
          onClick={handleUpgrade}
          disabled={isProcessing}
        >
          {isProcessing ? (
            <>Processing Payment...</>
          ) : (
            <>
              <Lock size={16} />
              Upgrade Now
            </>
          )}
        </button>
        
        <p className="payment-disclaimer">
          For demo purposes, no actual payment will be processed. Click "Upgrade Now" to simulate a payment.
        </p>
      </div>
    </div>
  );
};

export default PremiumPage;