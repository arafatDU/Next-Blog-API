// app/signup/page.js
'use client';
import { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { registerUser } from '../../utils/api';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const { login } = useContext(AuthContext);
  const { setUser } = useContext(AuthContext);
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await registerUser(form);
      //login(user.email, form.password);
      localStorage.setItem('userId', user._id);
      setUser(user);
      router.push('/dashboard');
    } catch (error) {
      console.error('Failed to sign up:', error);
    }
  };

  return (
    <section>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <button type="submit">Sign Up</button>
      </form>
    </section>
  );
}
