// src/components/LevelSelector.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser, logoutUser, getProgress, getResult } from '../utils/userStorage';
import '../styles/level-selector.css';

const LevelSelector = () => {
  const navigate = useNavigate();
  const user = getUser();
  const progress = getProgress();

  const easy = getResult(user.username, 'easy');
  const medium = getResult(user.username, 'medium');
  const hard = getResult(user.username, 'hard');

  const handleSelect = (level) => {
    navigate(`/game/${level}`);
  };

  const handleLogout = () => {
    logoutUser();
    navigate('/');
  };

  return (
    <div className={`level-selector ${user?.gender === 'female' ? 'female-theme' : 'male-theme'}`}>
      <header className="level-header">
        <h2>مرحبًا {user?.username} 👋</h2>
        <p>العمر: {user?.age} | الجنس: {user?.gender === 'female' ? 'أنثى' : 'ذكر'}</p>
        <p>📊 تقدمك السابق: {progress} نقطة</p>
        <button className="logout-button" onClick={handleLogout}>تسجيل الخروج</button>
      </header>

      <div className="results-summary">
        <h4>نتائجك السابقة:</h4>
        <p>سهل: {easy ? `${easy.score}/${easy.total} (${Math.round((easy.score / easy.total) * 100)}%)` : 'لا يوجد'}</p>
        <p>متوسط: {medium ? `${medium.score}/${medium.total} (${Math.round((medium.score / medium.total) * 100)}%)` : 'لا يوجد'}</p>
        <p>محترف: {hard ? `${hard.score}/${hard.total} (${Math.round((hard.score / hard.total) * 100)}%)` : 'لا يوجد'}</p>
      </div>

      <h3>اختر المستوى</h3>
      <div className="levels">
        <button onClick={() => handleSelect('easy')}>سهل</button>
        <button onClick={() => handleSelect('medium')}>متوسط</button>
        <button onClick={() => handleSelect('hard')}>محترف</button>
      </div>
    </div>
  );
};

export default LevelSelector;
