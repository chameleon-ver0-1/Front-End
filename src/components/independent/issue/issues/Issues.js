import React, { Component } from "react";
import IssueItem from "../issueItem/IssueItem";
import "./issues.style.css";

export class Issues extends Component {
  render() {
    const IssueBox = ({ title, count }) => {
      return (
        <div className="issues-box">
          <div className="issues-title">
            <p className="issues-title-status">{title}</p>
            <p className="issues-title-count">{count}</p>
          </div>
          <div className="issues-body">
            <IssueItem />
          </div>
        </div>
      );
    };
    return (
      <div className="issues-3">
        <IssueBox title="TODO" count="2" />
        <IssueBox title="DOING" count="1" />
        <IssueBox title="DONE" count="3" />
      </div>
    );
  }
}

export default Issues;
