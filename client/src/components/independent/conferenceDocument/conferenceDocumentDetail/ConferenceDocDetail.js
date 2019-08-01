/**
 * [OUTLINE]
 * 담당자 : 안지후
 * 회의록 게시물 내부 화면 (+wordcloud)
 * [METHOD]
 * componentDidMount() : wordcloud 초기 설정
 */

import React, { Component } from "react";
import "./conferencedocdetail.style.css";
import download_off from "../../../../assets/doc/download_off.png";
import PrintButton from "./PrintButton";
import PDF from "./PDF";

class ConferenceDocDetail extends Component {
  render() {
    return (
      <div className="documentdetaildiv">
        <div className="documentDetailTitle">
          <div className="Title1">4월 간행물 표지 초안</div>
          <div className="Title2">2019.03.13 PM1:00 화상회의</div>
          <div className="save_button_div">
            <button className="save_button">
              <img src={download_off} className="downloadimg" />
              전체본
            </button>
            <PrintButton id={"singlePage"} label={"요약본"} />
          </div>
        </div>

        <PDF id={"singlePage"} />
      </div>
    );
  }
}

export default ConferenceDocDetail;
