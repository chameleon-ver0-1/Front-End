import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "./issueDep.style.css";
export class IssueDep extends Component {
  render() {
    const depActive = {
      color: "var(--greenish-teal)"
    };
    
    return (
      <div className="dep-container">
        <NavLink to="/home/issue" className="dep-item" activeStyle={depActive}>
          A부서
        </NavLink>
        <NavLink
          to="/home/issue/2"
          className="dep-item"
          activeStyle={depActive}
        >
          A부서
        </NavLink>
        <NavLink
          to="/home/issue/3"
          className="dep-item"
          activeStyle={depActive}
        >
          A부서
        </NavLink>
      </div>
    );
  }
}

export default IssueDep;
