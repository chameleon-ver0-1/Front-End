import React, { Component } from "react";

const rtcmulticonnection = require("rtcmulticonnection");

export class UserArea extends Component {
  componentWillMount() {
    const script = document.createElement("script");

    script.src = "https://cdn.webrtc-experiment.com/RTCMultiConnection.js";
    script.src = "https://cdn.webrtc-experiment.com/conversation.js";
    script.src =
      "https://rtcmulticonnection.herokuapp.com/dist/RTCMultiConnection.min.js";
    script.src =
      "https://rtcmulticonnection.herokuapp.com/socket.io/socket.io.js";

    script.async = true;

    document.body.appendChild(script);
  }

  render() {
    var connection = new window.RTCMultiConnection();

    // this line is VERY_important
    connection.socketURL = "https://rtcmulticonnection.herokuapp.com:443/";

    // if you want audio+video conferencing
    connection.session = {
      audio: true,
      video: true
    };

    connection.openOrJoin("your-room-id");
    return (
      <div class="webrtc-container">
        <div>hi</div>
        <button>Join button</button>
        <hr />
      </div>
    );
  }
}

export default UserArea;
