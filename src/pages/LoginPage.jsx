// src/pages/LoginPage.jsx
import React from 'react';
import LoginForm from '../components/LoginForm';
import { validateLogin, getProgress } from '../utils/userStorage';
import { useNavigate } from 'react-router-dom';
import '../styles/login-form.css';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (username, password) => {
    if (validateLogin(username, password)) {
      const progress = getProgress();
      alert(`مرحبًا ${username}! لقد حصلت سابقًا على ${progress} نقطة 🎉`);
      navigate('/levels');
    } else {
      alert('بيانات الدخول غير صحيحة');
    }
  };

  return (
    <div className="login-page">
      <div className="intro-box">
        <h1>🎮 لعبة العمليات الحسابية للأطفال</h1>
        <p>
          هذه اللعبة تساعد الأطفال على تعلم الجمع، الطرح، الضرب، والقسمة بطريقة ممتعة وتفاعلية.
          تحتوي على ثلاث مستويات: سهل، متوسط، ومحترف. لكل سؤال مؤقت زمني، ويتم احتساب النقاط حسب الإجابات الصحيحة.
        </p>
      </div>

      <div className="form-box">
        <LoginForm onLogin={handleLogin} />
        <button className="register-button" onClick={() => navigate('/register')}>
          إنشاء حساب جديد
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
