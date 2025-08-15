// src/utils/userStorage.js

export const saveUser = (userData) => {
  localStorage.setItem('user', JSON.stringify(userData));
};

export const getUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

export const validateLogin = (username, password) => {
  const user = getUser();
  return user && user.username === username && user.password === password;
};

export const logoutUser = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('progress');
  localStorage.removeItem('results');
};

export const saveProgress = (score) => {
  localStorage.setItem('progress', JSON.stringify(score));
};

export const getProgress = () => {
  return JSON.parse(localStorage.getItem('progress')) || 0;
};

export const saveResult = (username, level, score, total) => {
  const results = JSON.parse(localStorage.getItem('results')) || {};
  if (!results[username]) results[username] = {};
  results[username][level] = { score, total };
  localStorage.setItem('results', JSON.stringify(results));
};

export const getResult = (username, level) => {
  const results = JSON.parse(localStorage.getItem('results')) || {};
  return results[username]?.[level] || null;
};
