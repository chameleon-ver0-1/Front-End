import React, { Component } from "react";
import styled from "styled-components";
import userInfo from "../../../assets/message/message_info.png";
import userMessage from "../../../assets/message/message_chat.png";
const UserItemContainer = styled.div`
  // display: ${props => (props.show ? "inline" : "none")};
  width: 280px;
  `;
const Dot = styled.div`
  width: 8px;
  height: 8px;
  background: var(--light-sage);
  border-radius: 100px;
`;
const UserName = styled.div`
  font-size: 12px;
  color: var(--light-black);
  margin-left: 4px;
  margin-top: 4px;
`;
const UserRow = styled.div`
  display: flex;
`;
const UserBox = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding-left: 27px;
  padding-top: 4px;
`;
const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;

  padding-right: 34px;
  padding-top: 4px;
`;

const ButtonItem = styled.button`
  border: none;
  background: none;
  online: none;
  width: 13px;
  height: 13px;
  margin-left: 4px;
`;
const DivideLine = styled.div`
  background: var(--white-two);
  width: 220px;
  height: 1px;
  margin-left: 35px;
  margin-top: 5px;
`;
const ShowDiv = styled.div`
  //FIXME: 여기 왜 안되니?
  // display: ${props => (props.show ? "inline" : "none")};
`;

export class UserItem extends Component {
  render() {
    const { names } = this.props;
    return (
      <React.Fragment>
        <ShowDiv>
          {names.map(name => (
            <UserItemContainer>
              <UserRow>
                <UserBox>
                  <Dot />
                  <UserName>{name}</UserName>
                </UserBox>
                <ButtonBox>
                  <ButtonItem>
                    <img width="13px" height="13px" src={userInfo} />
                  </ButtonItem>
                  <ButtonItem>
                    <img width="13px" height="13px" src={userMessage} />
                  </ButtonItem>
                </ButtonBox>
              </UserRow>
              <DivideLine />
            </UserItemContainer>
          ))}
        </ShowDiv>
      </React.Fragment>
    );
  }
}

export default UserItem;
