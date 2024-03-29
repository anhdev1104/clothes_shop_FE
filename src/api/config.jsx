import axios from 'axios';

export const API_URL = import.meta.env.VITE_BASE_API_URL;

const instance = axios.create({
  baseURL: API_URL,
});

export default instance;
