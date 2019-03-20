import React, { Component } from "react";
import "./chat.style.css";
import closedBtn from "../../../assets/message/closed_btn@3x.png";
export class Chat extends Component {
  render() {
    if (
      window.location.pathname === "/home/issue" ||
      window.location.pathname === "/home/conferenceRoom" ||
      window.location.pathname === "/home/conferenceDocument"
    ) {
      return (
        <div className="chat-container">
          <div className="chat-list-container">
            <div className="chat-header">
              메신저
              <div className="chat-header-btn">
                {/* <button className="chat-closed">
                  <img className="chat-closeBtn" src={closedBtn} />
                </button> */}
              </div>
            </div>
          </div>
          <div className="chat-message-container">
            <div className="chat-header">이름 Cho yoon young</div>
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default Chat;
