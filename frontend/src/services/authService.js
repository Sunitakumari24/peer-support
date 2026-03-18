import request from './api';

export const login = (email, password) =>
  request('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });

export const signup = (name, email, password) =>
  request('/auth/signup', {
    method: 'POST',
    body: JSON.stringify({ name, email, password }),
  });

export const logout = () => request('/auth/logout', { method: 'POST' });
