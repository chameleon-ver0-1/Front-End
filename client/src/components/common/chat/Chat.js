import React, { Component } from "react";

import styled from "styled-components";
import closedBtn from "../../../assets/message/closed_btn@3x.png";
import userOn from "../../../assets/message/message_friend_on.png";
import userOff from "../../../assets/message/message_friend_off.png";
import messageOn from "../../../assets/message/message_chat_on.png";
import messageOff from "../../../assets/message/message_chat_off.png";

import ChatRoomItem from "./ChatRoomItem";
import Chattings from "./Chattings";
import Teams from "./Teams";
import FreeScrollbar from "react-free-scrollbar";

const ChatContainer = styled.div`
  margin-top: 10px;

  height: 100%;
  width: 500px;

  display: flex;
  justify-content: flex-end;
`;
const ChatContent = styled.div`
  margin-right: 10px;
  display: flex;
  flex-direction: column;
`;
const ChatList = styled.div`
  --box-main-color: rgba(0, 0, 0, 0.2);
  --box-shadow-h-offset: 0.8px;
  --box-shadow-v-offset: 0.6px;
  --box-shadow-blur: 7px;
  width: 286px;
  height: 445px;

  box-shadow: var(--box-shadow-h-offset) var(--box-shadow-v-offset)
    var(--box-shadow-blur) var(--box-main-color);
`;
const ChatHeader = styled.div`
  padding-top: 10px;
  padding-left: 12px;
  height: 34px;
  background: var(--white-four);

  color: var(--greenish-teal);
  font-size: 0.7rem;

  display: flex;
  flex-direction: row;
  font-family: NanumSquareB;
`;

const TabBox = styled.div`
  display: flex;
`;
const TabItemBtn = styled.button`
  border: 1px solid var(--white-five);
  background: white;
  width: 35px;
  height: 35px;
  online: none;
`;
const Title = styled.div`
  height: 29px;
  width: 100%;
  padding-left: 13px;
  display: flex;
  align-items: center;
  color: var(--light-black);
  font-size: 14px;
  font-family: NanumSquareB;
`;
const DivideLine = styled.div`
  width: 288px;
  background: var(--white-two);
  height: 1px;
`;

export class Chat extends Component {
  state = { isClickUserList: true };
  openUserList = () => {
    this.setState({
      isClickUserList: true
    });
    console.log(this.state.isClickUserList);
  };
  openRoomList = () => {
    this.setState({
      isClickUserList: false
    });
    console.log(this.state.isClickUserList);
  };

  render() {
    if (
      window.location.pathname === "/home/issue" ||
      window.location.pathname === "/home/conferenceRoom" ||
      window.location.pathname === "/home/conferenceDocument"
    ) {
      return (
        <ChatContainer>
          <ChatContent>
            <ChatList>
              <ChatHeader>메신저</ChatHeader>
              <TabBox>
                <TabItemBtn onClick={this.openUserList}>
                  <img width="17px" height="19px" src={userOn} />
                </TabItemBtn>
                <TabItemBtn onClick={this.openRoomList}>
                  <img width="21px" height="19px" src={messageOff} />
                </TabItemBtn>
              </TabBox>

              <div style={{ height: "340px", width: "286px" }}>
                <div
                  id="chattingRoom"
                  style={{
                    display: this.state.isClickUserList ? "none" : "inline"
                  }}
                >
                  <DivideLine />
                  <Title>채팅방</Title>
                  <DivideLine />
                  <FreeScrollbar>
                    <ChatRoomItem />
                  </FreeScrollbar>
                </div>
                <div
                  id="userList"
                  style={{
                    display: this.state.isClickUserList ? "inline" : "none"
                  }}
                >
                  <FreeScrollbar>
                    <Teams />
                  </FreeScrollbar>
                </div>
              </div>
            </ChatList>
            <Chattings />
          </ChatContent>
        </ChatContainer>
      );
    } else {
      return <div />;
    }
  }
}

export default Chat;
