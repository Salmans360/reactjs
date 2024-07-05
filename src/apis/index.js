import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

instance.interceptors.request.use((config) => {
  const token = JSON.parse(localStorage.getItem('user-token'));
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

instance.interceptors.response.use(null, (error) => {
  // Do something with request error
  if (!error.response) {
  }

  if (error.response && error.response.status === 401) {
    localStorage.clear();
    window.location.href = '/';

    return Promise.reject(error);
  }
  return Promise.reject(error);
});

export default instance;
