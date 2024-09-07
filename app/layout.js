// app/layout.js
import { AuthProvider } from '../context/AuthContext';
import '../styles/globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'My Blog',
  description: 'Blog App with Categories and Blogs',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Navbar />
          <main>{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
