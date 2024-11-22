import axios from 'axios';

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const login = async (credentials) => {
  return await API.post("/auth/login", credentials);
};

export const register = async (userData) => {
  return await API.post("/auth/register", userData);
};
