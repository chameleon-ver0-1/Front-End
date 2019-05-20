import React, { Component } from "react";
import VideoItem from "./VideoItem";
import VideoNav from "./VideoNav";
import VideoMenubar from "./VideoMenubar";
import styled from "styled-components";

const VideoBaseContainer = styled.div`
  width: 100%;
`;
const SecondBox = styled.div`
  width: 100%;
  height: 767px;

  display: flex;
  flex-direction: column;
`;
export class WebRTCRoom extends Component {
  render() {
    return (
      <VideoBaseContainer>
        <VideoNav />
        <SecondBox>
          <VideoMenubar />
          <VideoItem />
        </SecondBox>
      </VideoBaseContainer>
    );
  }
}

export default WebRTCRoom;
