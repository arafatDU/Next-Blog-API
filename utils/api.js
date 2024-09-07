// utils/api.js
const API_BASE_URL = 'http://localhost:3000/api';

// Helper function to get the userId from local storage
const getUserId = () => localStorage.getItem('userId');

// User API
export const loginUser = async (data) => {
  const response = await fetch(`${API_BASE_URL}/users/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Failed to log in');
  return response.json();  // Return the user object directly
};

export const registerUser = async (data) => {
  const response = await fetch(`${API_BASE_URL}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Failed to register');
  return response.json();  // Return the registered user object
};

export const getUserProfile = async (userId) => {
  const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
    method: 'GET',
  });
  if (!response.ok) throw new Error('Failed to fetch user profile');
  return response.json();
};

// Category API
export const createCategory = async (data) => {
  const userId = getUserId();  // Get userId from local storage
  const response = await fetch(`${API_BASE_URL}/categories?userId=${userId}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Failed to create category');
  return response.json();
};

export const getCategories = async () => {
  const userId = getUserId();  // Get userId from local storage
  // console.log("userId  ", userId);
  const response = await fetch(`${API_BASE_URL}/categories?userId=${userId}`, {
    method: 'GET',
  });
  if (!response.ok) throw new Error('Failed to fetch categories');
  return response.json();
};

// Blog API
export const createBlog = async (categoryId, data) => {
  const userId = getUserId();  // Get userId from local storage
  const response = await fetch(`${API_BASE_URL}/blogs?userId=${userId}&categoryId=${categoryId}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Failed to create blog');
  return response.json();
};

export const getBlogs = async (categoryId) => {
  const userId = getUserId();  // Get userId from local storage
  const response = await fetch(`${API_BASE_URL}/blogs?userId=${userId}&categoryId=${categoryId}`, {
    method: 'GET',
  });
  if (!response.ok) throw new Error('Failed to fetch blogs');
  return response.json();
};
