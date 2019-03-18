import React, { Component } from "react";
import "./issueItem.style.css";

export class IssueItem extends Component {
  render() {
    return (
      <div className="issueItem-container">
        <div className="issueItem-header">
          <p className="issueName">전체 부서 정기 회의</p>
          <div className="issue-control">
            <p>hello</p>
            {/* <button className="issue-edit" />
            <button className="issue-delete" /> */}
          </div>
        </div>

        <p className="issueInfo">D-day 시간 장소</p>
      </div>
    );
  }
}

export default IssueItem;
