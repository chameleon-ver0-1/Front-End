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
        //TODO: 어디있는지 모르는 li padding 값 없애기
        return (
          <ul className="post-ul">
            <li className="post-li">
              <ul className="post-row-list">
                <li className="post-row-list-item">
                  <Link
                    to="/home/conferenceDocumentDetail"
                    className="linkdocumentdetail"
                  >
                    <button className="todetail">{docDetail.title}</button>
                  </Link>
                </li>
                <li className="post-row-list-item">{docDetail.date}</li>
                <li className="post-row-list-item">
                  <DocumentTag />
                </li>
                <li className="post-row-list-item">
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
