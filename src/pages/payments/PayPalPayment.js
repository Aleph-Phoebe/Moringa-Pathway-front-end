import React from 'react';

const PayPalPayment = () => {
  const handlePayment = () => {
    alert('Redirecting to PayPal...');
  };

  return (
    <div className="payment-method">
      <h2>PayPal Payment</h2>
      <button onClick={handlePayment} className="payment-button">Pay with PayPal</button>
    </div>
  );
};

export default PayPalPayment;
