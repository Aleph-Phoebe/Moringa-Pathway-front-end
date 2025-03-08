import React, { useState } from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

const Payment = () => {
  const [amount, setAmount] = useState('');

  const handleMpesaPayment = async () => {
    try {
      const { data } = await axios.post('http://127.0.0.1:5000/payments/mpesa', {
        phone_number: "254712345678",
        amount: amount,
      });
      alert(data.ResponseDescription);
    } catch (error) {
      console.error("Mpesa Payment Failed:", error);
    }
  };

  const handleStripePayment = async (token) => {
    try {
      await axios.post('http://127.0.0.1:5000/payments/stripe', {
        amount: amount,
        payment_method: token.id
      });
      alert("Payment Successful!");
    } catch (error) {
      console.error("Stripe Payment Failed:", error);
    }
  };

  const handlePaypalPayment = async () => {
    try {
      const { data } = await axios.post('http://127.0.0.1:5000/payments/paypal', {
        amount: amount,
      });
      window.location.href = data.links[1].href; // Redirect to PayPal
    } catch (error) {
      console.error("PayPal Payment Failed:", error);
    }
  };

  const handlePayment = async () => {
    const paymentData = {
      amount: amount,
    };

    try {
      await axios.post('/api/payment', paymentData);
      console.log('Payment successful');
    } catch (error) {
      console.error('Payment failed:', error);
    }
  };

  return (
    <div>
      <h2>Make a Payment</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter Amount"
      />

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

      <button onClick={handlePayment}>Other Payment</button>
    </div>
  );
};

export default Payment;
