// app/page.js
'use client';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Link from 'next/link';

export default function HomePage() {
  const { user } = useContext(AuthContext);

  return (
    <section>
      {user ? (
        // UI when the user is logged in
        <>
          <h1>Welcome Back, {user.username || 'User'}!</h1>
          <p>Go to your <Link href="/dashboard">Dashboard</Link> to manage your blogs and categories.</p>
        </>
      ) : (
        // UI when the user is not logged in
        <>
          <h1>Welcome to My Blog</h1>
          <p>
            Please <Link href="/signup">sign up</Link> or <Link href="/login">log in</Link> to access your dashboard.
          </p>
        </>
      )}
    </section>
  );
}
