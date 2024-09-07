// context/AuthContext.js
'use client';
import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { loginUser, getUserProfile } from '../utils/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Check if user is logged in on initial render
  useEffect(() => {
    const checkUser = async () => {
      const userId = localStorage.getItem('userId');
      if (userId) {
        try {
          const userData = await getUserProfile(userId);
          // console.log("userData ", userData)
          setUser(userData);
        } catch (error) {
          console.error('Error fetching user:', error);
        }
      }
      setLoading(false);
    };
    checkUser();
  }, []);

  // Handle user login
  const login = async (email, password) => {
    try {
      console.log("email  ", email, "  password", password);
      const user = await loginUser({ email, password });
      console.log(user);
      console.log("user when login:  ", user._id);
      localStorage.setItem('userId', user._id);  // Store user._id in local storage
      setUser(user);
      router.push('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  // Handle user logout
  const logout = () => {
    localStorage.removeItem('userId');  // Clear the userId from local storage
    setUser(null);
    router.push('/');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
