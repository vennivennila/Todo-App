import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getTodos = async () => {
  const response = await api.get('/api/todos');
  return response.data;
};

export const getTodo = async (id) => {
  const response = await api.get(`/api/todos/${id}`);
  return response.data;
};

export const createTodo = async (todo) => {
  const response = await api.post('/api/todos', todo);
  return response.data;
};

export const updateTodo = async (id, updates) => {
  const response = await api.put(`/api/todos/${id}`, updates);
  return response.data;
};

export const deleteTodo = async (id) => {
  const response = await api.delete(`/api/todos/${id}`);
  return response.data;
};

