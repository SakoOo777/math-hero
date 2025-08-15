// src/pages/GamePage.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { generateQuestions } from '../utils/questionGenerator';
import QuestionCard from '../components/QuestionCard';
import Timer from '../components/Timer';
import ScoreBoard from '../components/ScoreBoard';
import { getUser } from '../utils/userStorage';
import '../styles/game-page.css';

const GamePage = () => {
  const { level } = useParams(); // المستوى المختار
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState('');
  const navigate = useNavigate();
  const user = getUser();

  // توليد الأسئلة عند تحميل الصفحة
  useEffect(() => {
    const q = generateQuestions(level);
    setQuestions(q);
  }, [level]);

  // التعامل مع الإجابة
  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
      setFeedback('🎉 أحسنت! إجابة صحيحة');
    } else {
      setFeedback('😅 حاول مرة أخرى!');
    }

    setTimeout(() => {
      setFeedback('');
      if (current + 1 < questions.length) {
        setCurrent(current + 1);
      } else {
        navigate('/result', {
          state: {
            score: score + (isCorrect ? 1 : 0),
            total: questions.length,
            level
          }
        });
      }
    }, 1000);
  };

  // التعامل مع انتهاء الوقت
  const handleTimeout = () => {
    setFeedback('⏰ انتهى الوقت!');
    setTimeout(() => {
      setFeedback('');
      if (current + 1 < questions.length) {
        setCurrent(current + 1);
      } else {
        navigate('/result', {
          state: {
            score,
            total: questions.length,
            level
          }
        });
      }
    }, 1000);
  };

  return (
    <div className={`game-page ${user?.gender === 'female' ? 'female-theme' : 'male-theme'}`}>
      <header className="game-header">
        <h2>مرحبًا {user?.username} 👋</h2>
        <p>العمر: {user?.age} | الجنس: {user?.gender === 'female' ? 'أنثى' : 'ذكر'}</p>
      </header>

      <ScoreBoard score={score} />
      <Timer level={level} onTimeout={handleTimeout} />
      {questions.length > 0 && (
        <QuestionCard question={questions[current]} onAnswer={handleAnswer} />
      )}
      {feedback && <div className="feedback">{feedback}</div>}
    </div>
  );
};

export default GamePage;
