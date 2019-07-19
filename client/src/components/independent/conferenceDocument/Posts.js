import React, { Component } from "react";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h4>Loading...</h4>;
  }

  return (
    <ul className="post-list">
      {posts.map(post => (
        <li key={post.id} className="post-list-item">
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default Posts;
