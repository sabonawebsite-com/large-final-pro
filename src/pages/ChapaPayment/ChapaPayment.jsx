import React, { useState } from 'react'; 
import axios from 'axios';

const ChapaPayment = () => {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('ETB');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      
      if (!amount || !email || !firstName || !lastName) {
        throw new Error('Please fill in all required fields');
      }
      if (Number(amount) <= 0) { 
        throw new Error('Amount must be greater than 0');
      }

      const response = await axios.post(
        'http://localhost:4000/api/chapa-initiate', 
        {
          amount,
          currency,
          email,
          first_name: firstName,
          last_name: lastName,
          tx_ref: `tx-${Date.now()}`,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );

      if (!response.data.checkout_url) {
        throw new Error('No checkout URL received');
      }

      window.location.href = response.data.checkout_url;
      
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Payment failed'); 
      setLoading(false);
    }
  };

  return (
    <div className="payment-container">
      <h2>Make Payment with Chapa</h2>
      {error && <div className="error-message">{error}</div>}
      
      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            min="1" 
            required
          />
        </div>
     
      </form>
    </div>
  );
};

export default ChapaPayment;