import api from './api';

export const login = async (email, password) => {
  const { data } = await api.post('/auth/login', { email, password });
  localStorage.setItem('user', JSON.stringify(data));
  return data;
};

export const signup = async (name, email, password) => {
  const { data } = await api.post('/auth/signup', { name, email, password });
  localStorage.setItem('user', JSON.stringify(data));
  return data;
};

export const logout = () => {
  localStorage.removeItem('user');
};

export const getStoredUser = () => {
  return JSON.parse(localStorage.getItem('user') || 'null');
};
