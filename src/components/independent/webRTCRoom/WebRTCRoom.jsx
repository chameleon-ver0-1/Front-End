import React, { Component } from "react";
import videoCall from "./helpers/simple-peer";
import "./webrtc.style.css";
import io from "socket.io-client";

export class WebRTCRoom extends Component {
  //MARKUP: constructor 선언
  constructor() {
    super();
    this.state = {
      localStream: {},
      remoteStreamUrl: "",
      streamUrl: "",
      initiator: false,
      peer: {},
      full: false
    };
  }

  //MARKUP: componentDidMount - 데이터 로드
  componentDidMount() {
    const socket = io(process.env.REACT_APP_SIGNALING_SERVER);
    const component = this;
    this.setState({ socket });
    const { roomId } = this.props.match.params;
    this.getUserMedia().then(() => {
      socket.emit("join", { roomId: roomId });
    });
    socket.on("init", () => {
      component.setState({ initiator: true });
    });
    socket.on("ready", () => {
      component.enter(roomId);
    });
    socket.on("desc", data => {
      if (data.type === "offer" && component.state.initiator) return;
      if (data.type === "answer" && !component.state.initiator) return;
      component.call(data);
    });
    socket.on("disconnected", () => {
      component.setState({ initiator: true });
    });
    socket.on("full", () => {
      component.setState({ full: true });
    });
  }
  // MARKUP: getUserMedia
  //TODO:음성 받아오는 곳으로 추청. STT붙이기 진행할 곳.
  getUserMedia(cb) {
    return new Promise((resolve, reject) => {
      navigator.getUserMedia = navigator.getUserMedia =
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia;
      const op = {
        video: {
          width: { min: 160, ideal: 640, max: 1280 },
          height: { min: 120, ideal: 360, max: 720 }
        },
        audio: true
      };
      navigator.getUserMedia(
        op,
        stream => {
          this.setState({ streamUrl: stream, localStream: stream });
          this.localVideo.srcObject = stream;
          resolve();
        },
        () => {}
      );
    });
  }
  //MARKUP: enter video conference Room
  enter = roomId => {
    const peer = videoCall.init(this.state.localStream, this.state.initiator);
    peer.on("signal", data => {
      const signal = {
        room: roomId,
        desc: data
      };
      this.state.socket.emit("signal", signal);
    });
    peer.on("stream", stream => {
      this.remoteVideo.srcObject = stream;
    });
    peer.on("error", function(err) {
      console.log(err);
    });
  };
  //MARKUP: videoCall
  call = otherId => {
    videoCall.connect(otherId);
  };
  
  renderFull = () => {
    if (this.state.full) {
      return "The room is full";
    }
  };

  render() {
    return (
      <div className="video-wrapper">
        <div className="local-video-wrapper">
          <video
            autoPlay
            id="localVideo"
            muted
            ref={video => (this.localVideo = video)}
          />
        </div>
        <video
          autoPlay
          id="remoteVideo"
          ref={video => (this.remoteVideo = video)}
        />
        {this.renderFull()}
      </div>
    );
  }
}

export default WebRTCRoom;
