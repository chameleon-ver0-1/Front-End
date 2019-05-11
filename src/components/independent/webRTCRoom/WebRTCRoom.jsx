import React, { Component } from "react";
// import "./webrtc.style.css";
import VideoItem from "./VideoItem";
import VideoNav from './VideoNav';

export class WebRTCRoom extends Component {
  render() {
    return (
      <div>
        <VideoNav/>
        <VideoItem />
      </div>
    );
  }
}

export default WebRTCRoom;
