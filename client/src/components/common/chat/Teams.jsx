import React, { Component } from "react";
import styled from "styled-components";
import UserItem from "./UserItem";
import openRole from "../../../assets/message/message_arrow.png";
import InitialData from "./role-data";
import FreeScrollBar from "react-free-scrollbar";
const Role = styled.div`
  display: flex;
  height: 29px;
`;
const RoleTitle = styled.div`
  font-size: 14px;
  color: var(--light-black);
  margin-left: 7px;
  margin-top: 7px;
`;
const ArrowButton = styled.div`
  width: 26px;
  height: 29px;
  border: none;
  online: none;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DivideLine = styled.div`
  height: 1px;
  background: var(--white-two);
`;
export class UserList extends Component {
  state = { showName: false };
  showTeamMember = () => {
    // this.state.showName = this.state.showName ? false : true;
    // console.log(this.state.showName);
    console.log("hi");
  };
  show = () => {
    console.log("test if show work");
  };
  render() {
    this.state = InitialData;
    return (
      <div height="100px">
        <DivideLine />

        {Object.keys(this.state.data).map(roleId => {
          const role = this.state.data[roleId];
          const names = role.nameIds.map(nameId => this.state.names[nameId]);

          return (
            <div>
              <Role>
                <ArrowButton onClick={this.show}>
                  <img width="7px" height="13px" src={openRole} />
                </ArrowButton>

                <RoleTitle>{role.title}</RoleTitle>
              </Role>
              <UserItem names={names} />
              {/* <UserItem names={names} show={this.state.showName} /> */}
            </div>
          );
        })}
      </div>
    );
  }
}

export default UserList;
