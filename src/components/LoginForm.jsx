// src/components/LoginForm.jsx
import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2>تسجيل الدخول</h2>

      <label>الاسم:</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />

      <label>كلمة السر:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button type="submit">دخول</button>
    </form>
  );
};

export default LoginForm;
