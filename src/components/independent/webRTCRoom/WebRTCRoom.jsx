import React, { Component } from "react";
import VideoItem from "./VideoItem";
import VideoNav from "./VideoNav";
import VideoMenubar from "./VideoMenubar";
import Drawerbar from "./Drawerbar";
import styled from "styled-components";

const VideoBaseContainer = styled.div`
  width: 100%;
`;
const NavDivider = styled.div`
  display: flex;
`;
const SecondBox = styled.div`
  width: 100%;
  height: 767px;
  background: var(--brownish-grey);

  display: flex;
  flex-direction: row;
`;
const ToggleBtn = styled.button`
  flex: 0.3;
  backgrorund: red;
`;

export class WebRTCRoom extends Component {
  render() {
    return (
      <VideoBaseContainer>
        <NavDivider>
          <VideoNav />
          <ToggleBtn />
        </NavDivider>

        <SecondBox>
          <VideoMenubar />
          <VideoItem />
          <Drawerbar />
        </SecondBox>
      </VideoBaseContainer>
    );
  }
}

export default WebRTCRoom;
