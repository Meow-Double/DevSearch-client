import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:8080/api'
  // baseURL: 'https://devsearch-server.onrender.com/api'
});
