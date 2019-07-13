import React, { Component } from "react";
import styled from "styled-components";

const ChatMessageBox = styled.div`
  --box-main-color: rgba(0, 0, 0, 0.2);
  --box-shadow-h-offset: 0.8px;
  --box-shadow-v-offset: 0.6px;
  --box-shadow-blur: 7px;
  margin-top: 10px;

  width: 286px;
  height: 222px;

  box-shadow: var(--box-shadow-h-offset) var(--box-shadow-v-offset)
    var(--box-shadow-blur) var(--box-main-color);
`;
const ChatOpponent = styled.div`
  padding-top: 10px;
  padding-left: 12px;
  height: 34px;
  background: var(--white-four);

  color: var(--greenish-teal);
  font-size: 0.7rem;
`;
export class Chattings extends Component {
  render() {
    return (
      <ChatMessageBox>
        <ChatOpponent>이름 Cho yoon young</ChatOpponent>
      </ChatMessageBox>
    );
  }
}

export default Chattings;
