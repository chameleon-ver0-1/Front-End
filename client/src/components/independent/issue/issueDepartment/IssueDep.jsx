import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import InitialData from "./issue-dep-data";
import { DepContainer, DepItem } from "./issueDep.style";
import * as service from "../../../../services/IssueService";

export class IssueDep extends Component {
  state = {
    roleLists: [],
    isRoleClicked: []
  };
  componentDidMount() {
    service.postIssueList(localStorage.getItem("myRole")).then(
      res => {
        console.log("*********************************");
        console.log("이슈 역할 리스트 요청 성공");
        console.log("*********************************");
        this.setState({
          roleLists: res.data.data.roleData
        });
        this.state.roleLists.forEach((role, index) => {
          if (
            this.state.roleLists[index].role === localStorage.getItem("myRole")
          ) {
            this.state.isRoleClicked.push(true);
          } else {
            this.state.isRoleClicked.push(false);
          }
        });

        console.log("기존 RoleClicked", this.state.isRoleClicked);
      },
      err => {
        console.log("이슈 리스트 가져오기 실패");
      }
    );
  }
  onDepClicked = e => {
    const newIsRoleClicked = [];
    this.state.isRoleClicked.forEach(index => {
      newIsRoleClicked.push(false);
    });
    newIsRoleClicked[e.target.name] = true;

    this.setState({ isRoleClicked: newIsRoleClicked });
    console.log("새로운 RoleClicked", this.state.isRoleClicked);
    console.log("여기는 Dep Container인데, value값 확인", e.target.id);
    this.props.callbackCurrentDep(e.target.id);
  };

  render() {
    return (
      <DepContainer>
        {Object.keys(this.state.roleLists).map((roleItemId, index) => {
          const roleItem = this.state.roleLists[roleItemId];

          return (
            <DepItem
              style={{
                color: this.state.isRoleClicked[index]
                  ? "var(--greenish-teal)"
                  : "var(--white-two)"
              }}
              key={index}
              name={index}
              id={roleItem.role}
              onClick={this.onDepClicked}
              className="depItem"
            >
              {roleItem.role}
            </DepItem>
          );
        })}
      </DepContainer>
    );
  }
}

export default IssueDep;
