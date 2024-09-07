// app/components/BlogList.js
'use client';

import React from 'react';

const BlogList = ({ blogs }) => {
  if (blogs.length === 0) {
    return <p>No blogs available.</p>;
  }

  return (
    <ul>
      {blogs.map((blog) => (
        <li key={blog._id}>
          <h3>{blog.title}</h3>
          <p>{blog.description}</p> {/* Preview of the content */}

        </li>
      ))}
    </ul>
  );
};

export default BlogList;
