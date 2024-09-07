// components/Navbar.js
'use client';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Link from 'next/link';

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav>
      <Link href="/">Home</Link>
      {user ? (
        <>
          <Link href="/dashboard">Dashboard</Link>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Link href="/login">Login</Link>
          <Link href="/signup">Sign Up</Link>
        </>
      )}
    </nav>
  );
}
