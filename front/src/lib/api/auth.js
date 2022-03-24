import client from './client';

export const login = ({ username, password }) =>
    client.post('/api/auth/login', { username, password });

export const register = ({ username, password, name, callnumber, email }) =>
    client.post('/api/auth/register', { username, password, name, callnumber, email });

export const check = () => client.get('./api/auth/check');

export const logout = () => client.post('./api/auth/logout');