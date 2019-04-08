import React, { Component } from "react";

export class UserArea extends Component {
  // attachStream() {
  //   var scope = this;
  //   var video = document.getElementById("stream-" + scope.props.userId);
  //   var renderedStreamId = document.getElementById(
  //     "stream-id-" + scope.props.userId
  //   );
  //   if (
  //     video &&
  //     renderedStreamId &&
  //     scope.props.user.stream &&
  //     scope.props.user.streamId !== renderedStreamId.value
  //   ) {
  //     window.attachMediaStream(video, scope.props.user.stream);
  //     renderedStreamId.value = scope.props.user.streamId;
  //     if (video.hasAttribute("controls")) {
  //       setTimeout(function() {
  //         video.removeAttribute("controls");
  //       });
  //       video.setAttribute("playsinline", true);
  //     }
  //   }
  // }
  // componentDidMount() {
  //   this.attachStream();
  // }
  // componentDidUpdate() {
  //   this.attachStream();
  // }
  // render() {
  //   var scope = this;
  //   var outputHTML = [];
  //   // Self has not shared any stream.
  //   if (!scope.props.user.stream && scope.props.userId === "self") {
  //     outputHTML.push(
  //       <span className="userInfo">
  //         Share your camera and microphone to participate in the call
  //       </span>
  //     );
  //     // If is not self and has not been connected
  //   } else if (!scope.props.user.connected && scope.props.userId !== "self") {
  //     outputHTML.push(<span className="userInfo">Joining...</span>);
  //     // Peer is connected.
  //   } else {
  //     // Push the <video> element.
  //     outputHTML.push(
  //       React.DOM.video({
  //         id: "stream-" + scope.props.userId,
  //         autoPlay: true,
  //         muted: scope.props.userId === "self",
  //         controls: true
  //       })
  //     );
  //     outputHTML.push(
  //       React.DOM.input({
  //         id: "stream-id-" + scope.props.userId,
  //         type: "hidden",
  //         value: null
  //       })
  //     );
  //     var mediaMuted = [];
  //     var mediaDisabled = [];
  //     if (!scope.props.user.audio) {
  //       mediaDisabled.push("Audio");
  //     } else if (this.props.user.audio.muted) {
  //       mediaMuted.push("Audio");
  //     }
  //     if (!scope.props.user.video) {
  //       mediaDisabled.push("Video");
  //     } else if (this.props.user.video.muted) {
  //       mediaMuted.push("Video");
  //     }
  //     outputHTML.push(
  //       <span className="userInfo">
  //         {typeof scope.props.user.mcuConnected === "boolean" &&
  //         !scope.props.user.mcuConnected
  //           ? "Connecting to MCU ..."
  //           : ""}
  //         <br />
  //         {mediaDisabled.length > 0
  //           ? mediaDisabled.join("/") + " disabled"
  //           : ""}{" "}
  //         <br />
  //         {mediaMuted.length > 0 ? mediaMuted.join("/") + " muted" : ""}
  //       </span>
  //     );
  //   }
  //   return <div>{outputHTML}</div>;
  // }
}

export default UserArea;
