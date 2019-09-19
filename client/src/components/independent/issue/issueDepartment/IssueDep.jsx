import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "./issueDep.style.css";
import InitialData from "./issue-dep-data";
export class IssueDep extends Component {
  render() {
    this.state = InitialData;
    const depActive = {
      color: "var(--greenish-teal)"
    };

    return (
      <div className="dep-container">
        {Object.keys(this.state.data).map(depId => {
          const depItem = this.state.data[depId];
          return (
            <button className="dep-item" activeStyle={depActive}>
              {depItem}
            </button>
          );
        })}
      </div>
    );
  }
}

export default IssueDep;
