import React from 'react';
import { Link } from 'react-router-dom';
import './BlogList.css';

const blogPosts = [
  {
    id: 1,
    title: 'Blog Post 1',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'John Doe',
    date: 'May 20, 2023',
  },
  {
    id: 2,
    title: 'Blog Post 2',
    excerpt: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    author: 'Jane Smith',
    date: 'May 18, 2023',
  },
  // Add more blog posts as needed
];

function BlogList() {
  return (
    <div className="BlogList">
      <h1>Blog Posts</h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id}>
            <Link to={`/blogs/${post.id}`}>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <p>By {post.author} | {post.date}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
