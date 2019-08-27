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
          <div className="Title1">{this.props.location.state.title}</div>
          <div className="Title2">{this.props.location.state.date}</div>
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
