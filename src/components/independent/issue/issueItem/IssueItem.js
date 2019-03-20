import React, { Component } from "react";
import "./issueItem.style.css";

import edit from "../../../../assets/issue/issue_edit.png";
export class IssueItem extends Component {
  render() {
    return (
      <div className="issueItem-container">
        <div id="issueItem-control">
          <button className="issueItem-edit">
            <img src={edit} className="edit_im" />
          </button>
        </div>
        <p className="issueName">전체 부서 정기 회의</p>
        <p className="issueInfo">D-day 시간 장소</p>
      </div>
    );
  }
}

export default IssueItem;
