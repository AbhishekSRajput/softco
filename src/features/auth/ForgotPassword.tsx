// src/features/auth/ForgotPassword.tsx
import React, { useState } from 'react';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = () => {
    // Handle forgot password logic
    console.log('Password reset email sent');
  };

  return (
    <div>
      <h1>Forgot Password</h1>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleForgotPassword}>Reset Password</button>
    </div>
  );
};

export default ForgotPassword;
