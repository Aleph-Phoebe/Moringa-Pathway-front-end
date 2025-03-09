import React from 'react';

const MpesaPayment = () => {
  const handlePayment = () => {
    alert('Processing Mpesa payment...');
  };

  return (
    <div className="payment-method">
      <h2>Mpesa Payment</h2>
      <button onClick={handlePayment} className="payment-button">Pay Now</button>
    </div>
  );
};

export default MpesaPayment;
