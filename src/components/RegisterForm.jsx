// src/components/RegisterForm.jsx
import React, { useState } from 'react';
import '../styles/register-form.css';

const RegisterForm = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    username: '',
    gender: '',
    age: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <h2>تسجيل مستخدم جديد</h2>

      <label>الاسم:</label>
      <input type="text" name="username" value={formData.username} onChange={handleChange} required />

      <label>الجنس:</label>
      <select name="gender" value={formData.gender} onChange={handleChange} required>
        <option value="">اختر</option>
        <option value="male">ذكر</option>
        <option value="female">أنثى</option>
      </select>

      <label>العمر:</label>
      <input type="number" name="age" value={formData.age} onChange={handleChange} required min="4" max="12" />

      <label>كلمة السر:</label>
      <input type="password" name="password" value={formData.password} onChange={handleChange} required />

      <button type="submit">تسجيل</button>
    </form>
  );
};

export default RegisterForm;
