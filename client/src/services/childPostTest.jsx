import React, { Component } from "react";
import Comment from "./comments";

const childPostTest = ({ title, body, comments }) => {
  const commentList = comments.map((comment, index) => (
    <Comment name={comment.name} body={comment.body} key={index} />
  ));
  return (
    <div>
      <h1>제목:{title}</h1>
      <p>내용:{body}</p>
      <ul>
        댓글리스트:
        {commentList}
      </ul>
    </div>
  );
};

export default childPostTest;
