// app/components/CategoryList.js
'use client';

import Link from 'next/link';
import React from 'react';

const CategoryList = ({ categories }) => {
  if (categories.length === 0) {
    return <p>No categories available.</p>;
  }

  return (
    <ul>
      {categories.map((category) => (
        <li key={category._id}>
          <Link href={`/category/${category._id}`}>
            <h3>{category.title}</h3>
          </Link>
          
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
