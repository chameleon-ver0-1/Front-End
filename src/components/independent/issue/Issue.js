import React, { Component } from "react";
import "./issue.style.css";
import IssueDep from "./issueDepartment/IssueDep";
import Issues from "./issues/Issues";

export class issue extends Component {
  render() {
    return (
      <div className="issue-container">
        <IssueDep />
        <Issues />
      </div>
    );
  }
}

export default issue;
