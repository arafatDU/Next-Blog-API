// list of all blogs under this category
// app/dashboard/page.js
'use client';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { getBlogs } from '../../../utils/api';
import BlogList from '../../../components/BlogList';

export default function CategoryPage({params}) {
  console.log("CategoryPage ", params)
  const { id } = params;
  const { user } = useContext(AuthContext);  // Access user from AuthContext
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedBlogs = await getBlogs(id);  // Fetch blogs
        //console.log("categoryId ", id, fetchedBlogs)
        setBlogs(fetchedBlogs);
        //console.log("blogs ", blogs)
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
      
      <h2>All Blogs under this category </h2>
      <BlogList blogs={blogs} />
    </section>
  );
}
