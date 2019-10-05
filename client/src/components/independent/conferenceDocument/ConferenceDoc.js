/**
 * [OUTLINE]
 * 담당자 : 안지후
 * 회의록 첫 화면 구성
 */

import React, { Component, useState, useEffect } from "react";
import "./conferencedoc.style.css";
import { Link } from "react-router-dom";
import DocData from "./data/doc.json";
import axios from "axios";
import ConferencePosts from "./ConferencePosts";
import download_off from "../../../assets/doc/download_off.png";
import DocumentTag from "./DocumentTag";
import * as services from "../../../services/DocumentService";

export class ConferenceDoc extends Component {
  constructor(props) {
    super(props);
    // this.state = DocData;
    this.state = {
      documentList: "",
      count: 1
    };
  }

  componentDidMount() {
    services
      .getDocumentList(localStorage.getItem("projectId"), this.state.count)
      .then(
        res => {
          console.log("회의록 목록이 뜬다");
          console.log(res.data.data.confLogs);
        },
        err => {
          console.log(err);
          console.log("희의록 목록이 안뜬다");
        }
      );
  }

  handleClick() {
    console.log("click");
  }

  render() {
    return (
      <div>
        <div className="documentroom_container">
          <div className="documentroom_text">지난 회의록</div>

          <div className="documentroom_table">
            <div className="table_head">
              <div className="table_head_text1">회의제목</div>
              <div className="table_head_text2">회의시간</div>
              <div className="table_head_text3">메인토픽</div>
              <div className="table_head_text4">다운로드</div>
            </div>

            {/* <ConferencePosts /> */}
            {DocData.map((docDetail, index) => {
              return (
                <ul className="post-ul">
                  <li className="post-li">
                    <ul className="post-row-list">
                      <li className="post-row-list-item1">
                        <Link
                          to={{
                            pathname:
                              "/home/conferenceDocument/conferenceDocumentDetail",
                            state: {
                              title: docDetail.title,
                              date: docDetail.date
                            }
                          }}
                          className="linkdocumentdetail"
                        >
                          <button className="todetail">
                            {docDetail.title}
                          </button>
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

          <div className="pagination">
            <button className="page_button">1</button>
            <button className="page_button">2</button>
            <button className="page_button">3</button>
            <button className="page_button">4</button>
            <button className="page_button">5</button>
          </div>

          <div className="conference_search">
            <select className="search_select">
              <option className="search_option" value="회의제목">
                회의제목
              </option>
              <option className="search_option" value="회의시간">
                회의시간
              </option>
            </select>

            <input
              placeholder="회의 제목이나 날짜를 입력하세요"
              className="search_input"
            />

            <button className="search_button">검색</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ConferenceDoc;
