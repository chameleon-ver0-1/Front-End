import React, { Component } from "react";

export class Chat extends Component {
  render() {
    if (
      window.location.pathname === "/home/issue" ||
      window.location.pathname === "/home/conferenceRoom" ||
      window.location.pathname === "/home/conferenceDocument"
    ) {
      return (
        <div className="container">
          <div className="chat">
            <div>Hi</div>
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default Chat;
