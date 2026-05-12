import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'https://api.fluenta.app/api'; // Cambiar si tu backend cambia

const api = axios.create({
  baseURL: API_URL,
  timeout: 15000,
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use(async (config) => {
  // Prioridad: header existente (si ya lo pusimos desde authStore)
  if (config?.headers?.Authorization) return config;

  const token = await AsyncStorage.getItem('fluenta_token');
  if (token) config.headers['Authorization'] = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalRequest = err.config;

    if (
      err.response?.status === 401 &&
      err.response?.data?.code === 'TOKEN_EXPIRED' &&
      !originalRequest?._retry
    ) {
      originalRequest._retry = true;

      try {
        const { default: useAuthStore } = await import('../store/authStore');
        const refreshed = await useAuthStore.getState().refreshAccessToken();
        if (refreshed) {
          const token = useAuthStore.getState().token;
          originalRequest.headers['Authorization'] = `Bearer ${token}`;
          return api(originalRequest);
        }
      } catch {
        // ignore
      }
    }

    return Promise.reject(err);
  }
);

export const authAPI = {
  login: (data) => api.post('/auth/login', data),
  register: (data) => api.post('/auth/register', data),
  getMe: () => api.get('/auth/me'),
  refreshToken: (rt) => api.post('/auth/refresh', { refreshToken: rt }),
  forgotPassword: (email) => api.post('/auth/forgot-password', { email }),
  resetPassword: (token, password) => api.post(`/auth/reset-password/${token}`, { password }),
};

export const lessonsAPI = {
  getAll: (params) => api.get('/lessons', { params }),
  getById: (id) => api.get(`/lessons/${id}`),
  getCurriculum: (lang, level) => api.get(`/lessons/curriculum/${lang}/${level}`),
  complete: (id, data) => api.post(`/lessons/${id}/complete`, data),
};

export const evaluationsAPI = {
  getAll: (params) => api.get('/evaluations', { params }),
  getById: (id) => api.get(`/evaluations/${id}`),
  submit: (id, data) => api.post(`/evaluations/${id}/submit`, data),
};

export const usersAPI = {
  getProfile: () => api.get('/users/profile'),
  updateProfile: (data) => api.put('/users/profile', data),
  enroll: (languageCode) => api.post('/users/enroll', { languageCode }),
  getDashboard: () => api.get('/users/dashboard'),
};

export const languagesAPI = {
  getAll: () => api.get('/languages'),
};

export default api;

