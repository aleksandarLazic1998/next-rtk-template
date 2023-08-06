import axios, { isAxiosError } from 'axios';
import store from '../store/store';
import { toast } from 'react-toastify';

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

httpClient.interceptors.request.use((config) => {
  if (typeof window === 'undefined') return config;

  const token = JSON.parse(localStorage.getItem('token')!);
  if (token) config.headers.Authorization = token;
  return config;
});

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (isAxiosError(error) && error?.response?.status === 401) {
      toast('Token has expired.');

      if (typeof window !== 'undefined') {
        localStorage.clear();
        window.location.replace(`${window.location.origin}/login`);
      }
    } else throw error;
  },
);

export default Object.freeze(httpClient);
