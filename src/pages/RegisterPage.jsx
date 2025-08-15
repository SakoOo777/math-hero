// src/pages/RegisterPage.jsx
import React from 'react';
import RegisterForm from '../components/RegisterForm';
import { saveUser } from '../utils/userStorage';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleRegister = (userData) => {
    saveUser(userData);
    navigate('/');
  };

  return (
    <div className="page-container">
      <RegisterForm onRegister={handleRegister} />
    </div>
  );
};

export default RegisterPage;
