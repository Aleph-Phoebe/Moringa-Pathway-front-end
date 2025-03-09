import React from 'react';

const StripePayment = () => {
  const handlePayment = () => {
    alert('Processing Stripe payment...');
  };

  return (
    <div className="payment-method">
      <h2>Stripe Payment</h2>
      <button onClick={handlePayment} className="payment-button">Pay with Stripe</button>
    </div>
  );
};

export default StripePayment;
