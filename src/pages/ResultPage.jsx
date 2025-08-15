// src/pages/ResultPage.jsx
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { saveProgress, saveResult, getUser } from '../utils/userStorage';
import '../styles/result-page.css';

const ResultPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const user = getUser();
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    if (state?.score !== undefined && state?.total !== undefined && state?.level) {
      saveProgress(state.score);
      saveResult(user.username, state.level, state.score, state.total);
      const percent = Math.round((state.score / state.total) * 100);
      setPercentage(percent);
    }
  }, [state, user]);

  return (
    <div className="result-page">
      <h2>النتيجة النهائية</h2>
      <p>عدد النقاط: {state?.score} من {state?.total}</p>
      <p>📊 النسبة المئوية: {percentage}% من 100</p>
      <button onClick={() => navigate('/levels')}>العودة للمستويات</button>
    </div>
  );
};

export default ResultPage;
