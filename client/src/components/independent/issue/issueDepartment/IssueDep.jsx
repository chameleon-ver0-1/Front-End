import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import InitialData from "./issue-dep-data";
import { DepContainer, DepItem } from "./issueDep.style";
import * as service from "../../../../services/IssueService";

export class IssueDep extends Component {
  state = { roleLists: [] };
  componentDidMount() {
    service.getIssueList().then(
      res => {
        console.log("*********************************");
        console.log("이슈 역할 리스트 요청 성공");
        console.log("*********************************");
        this.state.roleLists = res.data.data.roleData;
        console.log(this.state.roleLists);
      },
      err => {
        console.log("이슈 리스트 가져오기 실패");
      }
    );
  }
  render() {
    var id = 0;

    return (
      <DepContainer>
        {Object.keys(this.state.roleLists).map((roleItemId, id) => {
          console.log(this.state.roleLists);

          const roleItem = this.state.roleLists[roleItemId];

          return <DepItem key={id}>{roleItem.role}</DepItem>;
          id++;
        })}
      </DepContainer>
    );
  }
}

export default IssueDep;
