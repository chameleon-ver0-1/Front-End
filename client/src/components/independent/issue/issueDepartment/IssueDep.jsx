import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import InitialData from "./issue-dep-data";
import { DepContainer, DepItem } from "./issueDep.style";

export class IssueDep extends Component {
  render() {
    this.state = InitialData;
    const depActive = {
      color: "var(--greenish-teal)"
    };

    return (
      <DepContainer>
        {Object.keys(this.state.data).map(depId => {
          const depItem = this.state.data[depId];
          return <DepItem>{depItem}</DepItem>;
        })}
      </DepContainer>
    );
  }
}

export default IssueDep;
