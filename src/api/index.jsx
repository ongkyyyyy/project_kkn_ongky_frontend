import axios from "axios";

export const BASE_URL = "https://dompol.info";

const useAxios = axios.create({
  baseURL: `${BASE_URL}/api`,
});

useAxios.interceptors.request.use(
  (config) => {
      const token = localStorage.getItem('token');
      if (token) {
          config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
  },
  (error) => {
      return Promise.reject(error);
  }
);

export default useAxios;