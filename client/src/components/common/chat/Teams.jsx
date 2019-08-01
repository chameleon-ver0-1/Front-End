import React, { Component } from "react";
import styled from "styled-components";
import UserItem from "./UserItem";
import openRole from "../../../assets/message/message_arrow.png";
import InitialData from "./role-data";

const TeamContainer = styled.div`
  width: 288px;
`;
const Role = styled.div`
  display: flex;
  height: 29px;
`;
const RoleTitle = styled.div`
  font-size: 14px;
  color: var(--light-black);
  margin-left: 7px;
  margin-top: 7px;
  font-family: NanumSquareB;
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
  state = { InitialData, show: false };

  handleClick = () => {
    this.setState({ show: this.state.show ? false : true });
    console.log(this.state.show);
  };
  render() {
    return (
      <TeamContainer>
        <DivideLine />

        {Object.keys(this.state.InitialData.data).map(roleId => {
          const role = this.state.InitialData.data[roleId];
          const names = role.nameIds.map(
            nameId => this.state.InitialData.names[nameId]
          );

          return (
            <div>
              <Role>
                <ArrowButton onClick={this.handleClick}>
                  <img width="7px" height="13px" src={openRole} />
                </ArrowButton>

                <RoleTitle>{role.title}</RoleTitle>
              </Role>
              <UserItem show={this.state.show} names={names} />
            </div>
          );
        })}
      </TeamContainer>
    );
  }
}

export default UserList;
