import React from 'react';
import { useParams } from 'react-router-dom';
import './BlogPost.css';

const blogPosts = [
  {
    id: 1,
    title: 'Blog Post 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'John Doe',
    date: 'May 20, 2023',
  },
  {
    id: 2,
    title: 'Blog Post 2',
    content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    author: 'Jane Smith',
    date: 'May 18, 2023',
  },
  // Add more blog posts as needed
];

function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === parseInt(id));

  if (!post) {
    return <div>Blog post not found.</div>;
  }

  return (
    <div className="BlogPost">
      <h1>{post.title}</h1>
      <p>By {post.author} | {post.date}</p>
      <div className="content">{post.content}</div>
    </div>
  );
}

export default BlogPost;
