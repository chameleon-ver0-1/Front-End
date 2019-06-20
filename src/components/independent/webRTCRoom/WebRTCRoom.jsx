import React, { Component } from "react";
import VideoItem from "./VideoItem";
import VideoNav from "./VideoNav";
import VideoMenubar from "./VideoMenubar";
import Drawerbar from "./Drawerbar";
import styled from "styled-components";
import openDrawer from "../../../assets/conferenceRoom/toggleOpen.png";
import closeDrawer from "../../../assets/conferenceRoom/toggleClosed.png";

import STTTest from "./STTTest";
import { runInThisContext } from "vm";

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
const ToggleBtn = styled.div`
  flex: 0.3;
  background: var(--white-four);
`;
const ButtonItem = styled.button`
  width: 52px;
  height: 52px;
  text-align: center;
  padding: 5px;
  border: none;
  background: none;
  outline: none;
`;
const RightDrawer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const STTLayout = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 20%;
`;
export class WebRTCRoom extends Component {
  state = { open: undefined };

  render() {
    const state =
      this.state.open === undefined
        ? "peek"
        : this.state.open
        ? "open"
        : "close";
    const icon = this.state.open ? "fold" : "unfold";
    const toggle = () => {
      this.setState(state => ({ open: !state.open }));
      // console.log(this.state.open);
      if (icon === "fold") {
        this.src = { openDrawer };
      } else {
        this.src = "../../../assets/conferenceRoom/toggleClosed.png";
      }
    };
    return (
      <VideoBaseContainer>
        <NavDivider>
          <VideoNav />
          <ToggleBtn>
            <ButtonItem>
              <img
                id="drawerToggleBtn"
                width="10px"
                height="22px"
                src={openDrawer}
                className="sidebar-toggle"
                onClick={toggle}
              />
            </ButtonItem>
          </ToggleBtn>
        </NavDivider>
        <SecondBox>
          <div style={{ width: "80%", display: "flex", flexDirection: "row" }}>
            <VideoMenubar />
            <VideoItem style={{}} />
          </div>
          <STTLayout>
            <STTTest />
            {/* <RightDrawer style={{ flex: "1" }}>
              <Drawerbar isToggle={this.state} />
            </RightDrawer> */}
          </STTLayout>
        </SecondBox>
      </VideoBaseContainer>
    );
  }
}

export default WebRTCRoom;
