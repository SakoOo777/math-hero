// src/components/Timer.jsx
import React, { useEffect, useState } from 'react';

const Timer = ({ level, onTimeout }) => {
  const getTime = () => {
    if (level === 'easy') return 60;
    if (level === 'medium') return 30;
    return 15;
  };

  const [timeLeft, setTimeLeft] = useState(getTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          clearInterval(timer);
          onTimeout();
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <div className="timer">الوقت المتبقي: {timeLeft} ثانية</div>;
};

export default Timer;
