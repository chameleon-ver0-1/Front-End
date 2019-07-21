import React, { Component } from "react";
import styled from "styled-components";
import chatProfileIcon from "../../../assets/chatting/chat_profile.png";
import InitialData from "./chat-room-data";
const DivideLine = styled.div`
  width: 288px;
  background: var(--white-two);
  height: 1px;
`;
const Row = styled.div`
  display: flex;
  padding-left: 12px;
  align-items: center;
  height: 100%;
  width: 262px;
`;
const OriginRow = styled.div`
  display: flex;

  height: 100%;
`;
const Name = styled.div`
  font-size: 12px;
  color: var(--light-black);
`;
const TextContent = styled.div`
  font-size: 9px;
  color: var(--brownish-grey);
`;
const Time = styled.div`
  font-size: 9px;
  color: var(--pinkish-grey);
  width: 26px;
  display: flex;
  justify-content: flex-end;
  padding-right: 9px;
  margin-top: 7px;
`;
export class ChatRoomItem extends Component {
  state = InitialData;
  render() {
    return (
      <React.Fragment>
        {Object.keys(this.state.data).map(roomId => {
          const roomItem = this.state.data[roomId];
          return (
            <div
              style={{
                width: "100%",
                height: "58px",
                paddingTop: "8px"
              }}
            >
              <OriginRow>
                <Row>
                  <img src={chatProfileIcon} width="40px" height="40px" />
                  <div style={{ marginLeft: "14px" }}>
                    <Name>{roomItem.name}</Name>
                    <TextContent>{roomItem.content}</TextContent>
                  </div>
                </Row>
                <Time>지금</Time>
              </OriginRow>

              <DivideLine />
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

export default ChatRoomItem;
