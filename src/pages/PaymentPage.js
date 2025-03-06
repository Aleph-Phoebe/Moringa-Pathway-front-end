import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import '../styles/payment.css';

const PaymentPage = () => {
  const { upgradeToPremium } = useAuth();
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  const handlePayment = async () => {
    setIsProcessing(true);
    try {
      // Simulate upgrading to premium
      await upgradeToPremium();
      // Directly navigate to the premium page
      navigate('/premium');
    } catch (error) {
      setIsProcessing(false);
      console.error('Payment failed:', error);
    }
  };

  return (
    <div className="payment-page">
      <div className="payment-container">
        <div className="payment-header">
          <h1>Payment Information</h1>
          <p>Enter your payment details to upgrade to premium</p>
        </div>
        
        <div className="payment-form">
          <div className="form-group">
            <label>Card Number</label>
            <div className="card-input">
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
        
        <button 
          className="payment-button"
          onClick={handlePayment}
          disabled={isProcessing}
          
          
        >
          {isProcessing ? (
            <>Processing Payment...</>
          ) : (
            <>
              <Lock size={16} />
              Pay Now
            </>
          )}
        </button>
        
        <p className="payment-disclaimer">
          For demo purposes, no actual payment will be processed. Click "Pay Now" to simulate a payment.
        </p>
      </div>
    </div>
  );
};

export default PaymentPage;