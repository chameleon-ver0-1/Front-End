import React, { Component } from "react";
import DocData from "./data/doc.json";
import download_off from "../../../assets/doc/download_off.png";
import { Link } from "react-router-dom";
import DocumentTag from "./DocumentTag";

const Posts = ({ posts, loading }) => {
  // if (loading) {
  //   return <h4>Loading...</h4>;
  // }

  return (
    <div>
      {/* {posts.map(post => (
            <li key={post.id} className="post-row-list-item">
              {post.title}
            </li>
          ))} */}
      {DocData.map((docDetail, index) => {
        return (
          <ul className="post-ul">
            <li className="post-li">
              <ul className="post-row-list">
                <li className="post-row-list-item1">
                  <Link
                    to="/home/conferenceDocument/conferenceDocumentDetail"
                    className="linkdocumentdetail"
                  >
                    <button className="todetail">{docDetail.title}</button>
                  </Link>
                </li>
                <li className="post-row-list-item2">{docDetail.date}</li>
                <li className="post-row-list-item3">
                  <div className="post-row-list-item-tag">
                    <DocumentTag />
                  </div>
                </li>
                <li className="post-row-list-item4">
                  <button className="post-row-list-item-btn">
                    <img
                      src={download_off}
                      className="post-row-list-item-img"
                    />
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default Posts;
