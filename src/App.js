import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import LevelSelector from './components/LevelSelector';
import GamePage from './pages/GamePage';
import ResultPage from './pages/ResultPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/levels" element={<LevelSelector />} />
        <Route path="/game/:level" element={<GamePage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
