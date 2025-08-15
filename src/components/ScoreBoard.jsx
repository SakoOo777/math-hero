// src/components/ScoreBoard.jsx
import React from 'react';

const ScoreBoard = ({ score }) => {
  return (
    <div style={{
      backgroundColor: '#ffffff',
      padding: '10px 20px',
      borderRadius: '10px',
      boxShadow: '0 0 5px rgba(0,0,0,0.1)',
      marginBottom: '15px',
      fontWeight: 'bold'
    }}>
      النقاط: {score}
    </div>
  );
};

export default ScoreBoard;
