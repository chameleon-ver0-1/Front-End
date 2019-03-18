import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./menu.style.css";
import { yellow100 } from "material-ui/styles/colors";

export class Menu extends Component {
  render() {
    const active = {
      marginTop: "25px",
      width: "185px",
      height: "53px",
      color: "var(--greenish-teal)",
      fontSize: "1.2rem",
      textAlign: "center",
      textDecoration: "none",

      borderLeft: "5px solid var(--greenish-teal)"
    };

    return (
      <div className="container">
        <div className="menu-container">
          <NavLink className="link-list" to="/home/issue" activeStyle={active}>
            이슈관리
          </NavLink>
          <NavLink
            className="link-list"
            activeStyle={active}
            to="/home/conferenceRoom"
          >
            회의실
          </NavLink>
          <NavLink
            className="link-list"
            activeStyle={active}
            to="/home/conferenceDocument"
          >
            회의록
          </NavLink>
        </div>
      </div>
    );
  }
}

Menu.contextType = {
  router: PropTypes.object
};

export default Menu;
