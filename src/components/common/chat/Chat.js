import React, { Component } from "react";

export class Chat extends Component {
  render() {
    if (
      window.location.pathname === "/home/issue" ||
      window.location.pathname === "/home/conferenceRoom" ||
      window.location.pathname === "/home/conferenceDocument"
    ) {
      return (
        <div className="chat-container">
          <div className="chat-header">
            <p className="chat-header-title">메신저</p>
            
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default Chat;
