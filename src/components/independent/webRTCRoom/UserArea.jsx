import React, { Component } from "react";
import "./webrtc.style.css";

var predefinedRoomId = "Choyoonyoung";
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

// FIXME:아래 onstream을 제거하면 잘 돌아가지만, 추가하면서 화면이 띄워지지 않는 현상이 벌어짐.
// const afterRemoteStreamStartedFlowing = e => {
//   document.body.appendChild(e.mediaElement);
// };
// connection.str = e => {
//   // var video = event.mediaElement;
//   // if (event.type === "local") {
//   //   localVideosContainer.appendChild(video);
//   //   console.log("local");
//   // } else if (event.type === "remote") {
//   //   remoteVideosContainer.appendChild(video);
//   //   console.log("remote");
//   // } else {
//   //   console.log("nothing");
//   // }
//   waitUntilRemoteStreamStartsFlowing(this.mediaElement, e);
// };

// const waitUntilRemoteStreamStartsFlowing = (mediaElement, e) => {
//   // chrome for android may have some features missing
//   if (connection.DetectRTC.isMobileDevice) {
//     return afterRemoteStreamStartedFlowing(e);
//   }

//   if (!mediaElement.numberOfTimes) mediaElement.numberOfTimes = 0;
//   mediaElement.numberOfTimes++;

//   if (
//     !(
//       mediaElement.readyState <= HTMLMediaElement.HAVE_CURRENT_DATA ||
//       mediaElement.paused ||
//       mediaElement.currentTime <= 0
//     )
//   ) {
//     return afterRemoteStreamStartedFlowing(e);
//   }

//   if (mediaElement.numberOfTimes >= 60) {
//     // wait 60 seconds while video is delivered!
//     throw "Failed receiving remote video.";
//   }

//   setTimeout(function() {
//     waitUntilRemoteStreamStartsFlowing(mediaElement, e);
//   }, 900);
// };

const join = e => {
  this.disabled = true;
  connection.openOrJoin(e.target.value || predefinedRoomId);
};

var localVideosContainer = document.getElementById("local-videos-container");

var remoteVideosContainer = document.getElementById("remote-videos-container");
export class UserArea extends Component {
  state = {
    roomId: "100"
  };

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

  componentDidMount() {
    var roomid = document.getElementById("txt-roomid");

    roomid.value = connection.token();
  }

  render() {
    return (
      <div class="webrtc-container">
        <input
          id="txt-roomid"
          placeholder=" Unique Room ID"
          value={this.state.roodId}
        />
        <button id="btn-open-or-join-room" onClick={join}>
          Join button
        </button>

        <hr />

        <div id="local-videos-container" />

        <hr />

        <div id="remote-videos-container" />
      </div>
    );
  }
}

export default UserArea;
