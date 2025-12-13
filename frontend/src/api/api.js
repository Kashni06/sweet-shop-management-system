import axios from "axios";

/**
 * Central API client
 * All backend requests go through this file
 */

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

/**
 * Attach JWT token automatically (if exists)
 */
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
