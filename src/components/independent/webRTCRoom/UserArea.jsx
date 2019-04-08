import React, { Component } from "react";
import "./webrtc.style.css";

var predefinedRoomId = "Choyoonyoung";

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

    connection.sdpConstraints.mandatory = {
      OfferToReceiveAudio: true,
      OfferToReceiveVideo: true
    };

    const join = () => {
      this.disabled = true;

      connection.openOrJoin(predefinedRoomId);
    };

    return (
      <div class="webrtc-container">
        <button id="btn-open-or-join-room" onClick={join}>
          Join button
        </button>
      </div>
    );
  }
}

export default UserArea;
