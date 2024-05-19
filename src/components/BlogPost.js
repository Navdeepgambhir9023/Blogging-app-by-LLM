import React from 'react';
import PropTypes from 'prop-types';
import './BlogPost.css';

const BlogPost = ({ title, author, date, content }) => {
  return (
    <div className="blog-post">
      <h2>{title}</h2>
      <p className="meta">
        By {author} on {date}
      </p>
      <div className="content">{content}</div>
    </div>
  );
};

BlogPost.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
};

export default BlogPost;
