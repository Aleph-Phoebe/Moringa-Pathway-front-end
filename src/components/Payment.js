import React, { useState } from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

const Payment = () => {
  const [amount, setAmount] = useState('');

  const handleMpesaPayment = async () => {
    const response = await axios.post('http://127.0.0.1:5000/payments/mpesa', {
      phone_number: "254712345678",
      amount: amount,
    });
    alert(response.data.ResponseDescription);
  };

  const handleStripePayment = async (token) => {
    const response = await axios.post('http://127.0.0.1:5000/payments/stripe', {
      amount: amount,
      payment_method: token.id
    });
    alert("Payment Successful!");
  };

  const handlePaypalPayment = async () => {
    const response = await axios.post('http://127.0.0.1:5000/payments/paypal', {
      amount: amount,
    });
    window.location.href = response.data.links[1].href; // Redirect to PayPal
  };

  return (
    <div>
      <h2>Make a Payment</h2>
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter Amount" />

      <button onClick={handleMpesaPayment}>Pay with Mpesa</button>

      <StripeCheckout
        stripeKey="your-stripe-public-key"
        token={handleStripePayment}
        amount={amount * 100}
        currency="USD"
      >
        <button>Pay with Stripe</button>
      </StripeCheckout>

      <button onClick={handlePaypalPayment}>Pay with PayPal</button>
    </div>
  );
};

export default Payment;
