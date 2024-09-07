// app/dashboard/page.js
'use client';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { getCategories, getBlogs } from '../../utils/api';
import CategoryList from '../../components/CategoryList';
import BlogList from '../../components/BlogList';

export default function DashboardPage() {
  const { user } = useContext(AuthContext);  // Access user from AuthContext
  const [categories, setCategories] = useState([]);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedCategories = await getCategories(); // Fetch categories
        // console.log(fetchedCategories);
        setCategories(fetchedCategories);

        const allBlogs = [];
        for (const category of fetchedCategories) {
          const categoryBlogs = await getBlogs(category._id);
          allBlogs.push(...categoryBlogs);
        }

        setBlogs(allBlogs);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (user) {
      fetchData();  // Only fetch data if the user is logged in
    }
  }, [user]);

  return (
    <section>
      <h1>Dashboard</h1>
      <h2>Categories</h2>
      <CategoryList categories={categories} />
      
      <h2>Blogs</h2>
      <BlogList blogs={blogs} />
    </section>
  );
}
