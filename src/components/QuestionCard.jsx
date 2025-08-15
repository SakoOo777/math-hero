// src/components/QuestionCard.jsx
import React, { useState } from 'react';
import '../styles/question-card.css';

const QuestionCard = ({ question, onAnswer }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const isCorrect = parseInt(input) === question.answer;
    onAnswer(isCorrect);
    setInput('');
  };

  const handleChoice = (choice) => {
    const isCorrect = choice === question.answer;
    onAnswer(isCorrect);
  };

  const generateChoices = () => {
    const choices = [question.answer];
    while (choices.length < 4) {
      const rand = question.answer + Math.floor(Math.random() * 10 - 5);
      if (!choices.includes(rand)) choices.push(rand);
    }
    return choices.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="question-card">
      <h3>{question.question}</h3>
      {question.type === 'input' ? (
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            required
          />
          <button type="submit">تحقق</button>
        </form>
      ) : (
        <div className="choices">
          {generateChoices().map((choice, index) => (
            <button key={index} onClick={() => handleChoice(choice)}>
              {choice}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
