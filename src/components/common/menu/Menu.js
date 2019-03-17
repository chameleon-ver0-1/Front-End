import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./menu.style.css";

export class menu extends Component {
  render() {
    return (
      <div className="container">
        <div className="menu-container">
          <Link className="link-list" to="/issue">
            이슈관리
          </Link>
          <Link className="link-list" to="/conferenceRoom">
            회의실
          </Link>
          <Link className="link-list" to="/conferenceDocument">
            회의록
          </Link>
        </div>
      </div>
    );
  }
}

export default menu;
